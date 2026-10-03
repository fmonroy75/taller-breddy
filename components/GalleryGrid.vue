<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

export interface GalleryItem {
  src: string
  alt: string
  title: string
  category?: 'tables' | 'chess' | 'boards' | 'jewelry' | 'accessories'
  categoryLabel?: string
  text?: string
  badge?: string
  span?: 'large' | 'normal' | 'wide'
}

interface Props {
  items: GalleryItem[]
  dark?: boolean
  showFilters?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  dark: true,
  showFilters: true
})

const selectedCategory = ref<string>('all')
const activeIndex = ref<number | null>(null)

const { locale } = useI18n()
const localePath = useLocalePath()

const categories = computed(() => {
  const isEn = locale.value === 'en'
  return [
    { id: 'all', label: isEn ? 'All Works' : 'Toutes les créations' },
    { id: 'tables', label: isEn ? 'Tables & Furniture' : 'Tables & Mobilier' },
    { id: 'chess', label: isEn ? 'Chess & Games' : 'Jeux & Échecs' },
    { id: 'boards', label: isEn ? 'Cutting Boards' : 'Planches à découper' },
    { id: 'jewelry', label: isEn ? 'Jewelry & Accessories' : 'Bijoux & Accessoires' }
  ]
})

const filteredItems = computed(() => {
  if (selectedCategory.value === 'all') {
    return props.items
  }
  return props.items.filter(item => item.category === selectedCategory.value)
})

const activeItem = computed(() => {
  if (activeIndex.value === null) return null
  return filteredItems.value[activeIndex.value] || null
})

function getCategoryCount(catId: string) {
  if (catId === 'all') return props.items.length
  return props.items.filter(item => item.category === catId).length
}

function openLightbox(index: number) {
  activeIndex.value = index
  if (typeof document !== 'undefined') {
    document.body.style.overflow = 'hidden'
  }
}

function closeLightbox() {
  activeIndex.value = null
  if (typeof document !== 'undefined') {
    document.body.style.overflow = ''
  }
}

function prevImage() {
  if (activeIndex.value === null) return
  if (activeIndex.value > 0) {
    activeIndex.value--
  } else {
    activeIndex.value = filteredItems.value.length - 1
  }
}

function nextImage() {
  if (activeIndex.value === null) return
  if (activeIndex.value < filteredItems.value.length - 1) {
    activeIndex.value++
  } else {
    activeIndex.value = 0
  }
}

function handleKeydown(e: KeyboardEvent) {
  if (activeIndex.value === null) return
  if (e.key === 'Escape') closeLightbox()
  if (e.key === 'ArrowLeft') prevImage()
  if (e.key === 'ArrowRight') nextImage()
}

onMounted(() => {
  if (typeof window !== 'undefined') {
    window.addEventListener('keydown', handleKeydown)
  }
})

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('keydown', handleKeydown)
    document.body.style.overflow = ''
  }
})
</script>

<template>
  <div class="gallery-wrapper">
    <!-- Category Filter Tabs -->
    <div v-if="props.showFilters && categories.length" class="mb-10 flex flex-wrap items-center justify-center gap-2 md:gap-3">
      <button
        v-for="cat in categories"
        :key="cat.id"
        @click="selectedCategory = cat.id"
        class="group relative rounded-full px-5 py-2.5 text-xs font-medium uppercase tracking-[0.15em] transition-all duration-300"
        :class="[
          selectedCategory === cat.id
            ? 'bg-breddy-bronze text-white shadow-lg shadow-breddy-bronze/20'
            : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10'
        ]"
      >
        <span>{{ cat.label }}</span>
        <span class="ml-2 text-[10px] opacity-60">({{ getCategoryCount(cat.id) }})</span>
      </button>
    </div>

    <!-- Gallery Grid -->
    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <article
        v-for="(item, index) in filteredItems"
        :key="item.src + index"
        @click="openLightbox(index)"
        class="group relative cursor-pointer overflow-hidden rounded-sm border border-white/10 bg-[#161616] shadow-xl transition-all duration-500 hover:border-breddy-bronze/70 hover:shadow-2xl hover:shadow-breddy-bronze/10"
        :class="[
          item.span === 'large' ? 'sm:col-span-2 lg:col-span-2 lg:row-span-2' : '',
          item.span === 'wide' ? 'sm:col-span-2 lg:col-span-2' : ''
        ]"
      >
        <!-- Image Container with Professional Lighting Tone Filter -->
        <div
          class="relative overflow-hidden bg-gradient-to-b from-neutral-900 to-black"
          :class="item.span === 'large' ? 'aspect-[4/3] lg:aspect-[16/11]' : 'aspect-[4/3]'"
        >
          <img
            :src="useAssetPath(item.src)"
            :alt="item.alt"
            class="h-full w-full object-cover brightness-[0.93] contrast-[1.06] saturate-[1.08] transition-all duration-700 ease-out group-hover:scale-105 group-hover:brightness-100"
            loading="lazy"
          >

          <!-- Subtle Vignette & Gradient Overlays -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-75" />
          <div class="absolute inset-0 bg-breddy-bronze/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 mix-blend-overlay" />

          <!-- Top Badge -->
          <div class="absolute top-4 left-4 z-10 flex items-center gap-2">
            <span v-if="item.badge" class="rounded-full border border-white/20 bg-black/60 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/90 backdrop-blur-md">
              {{ item.badge }}
            </span>
            <span v-else-if="item.categoryLabel" class="rounded-full border border-breddy-bronze/40 bg-black/60 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-breddy-bronze backdrop-blur-md">
              {{ item.categoryLabel }}
            </span>
          </div>

          <!-- Quick Zoom Button on Hover -->
          <div class="absolute top-4 right-4 z-10 opacity-0 transition-all duration-300 group-hover:opacity-100">
            <span class="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-black/60 text-white backdrop-blur-md shadow-lg transition hover:scale-110 hover:border-breddy-bronze">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
              </svg>
            </span>
          </div>

          <!-- Text Details Overlay -->
          <div class="absolute inset-x-0 bottom-0 z-10 p-6 md:p-7">
            <p v-if="item.text" class="text-[10px] font-medium uppercase tracking-[0.22em] text-breddy-bronze">
              {{ item.text }}
            </p>
            <h3 class="mt-1.5 text-xl font-semibold tracking-[-0.02em] text-white md:text-2xl font-display">
              {{ item.title }}
            </h3>
          </div>
        </div>
      </article>
    </div>

    <!-- Empty State -->
    <div v-if="filteredItems.length === 0" class="py-16 text-center text-white/50">
      <p class="text-sm tracking-wide">Aucune création trouvée dans cette catégorie.</p>
    </div>

    <!-- Full-Screen Lightbox Modal -->
    <Teleport to="body">
      <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="activeItem !== null"
          class="fixed inset-0 z-[9999] flex flex-col justify-between bg-black/95 p-4 backdrop-blur-xl md:p-8"
          @click.self="closeLightbox"
        >
          <!-- Top Header Bar -->
          <div class="flex items-center justify-between border-b border-white/10 pb-4">
            <div class="flex items-center gap-4">
              <span class="text-[10px] font-semibold uppercase tracking-[0.25em] text-breddy-bronze">
                L’atelier BREDDY · Portafolio
              </span>
              <span class="rounded-full border border-white/20 bg-white/5 px-2.5 py-0.5 text-[10px] text-white/60">
                {{ activeIndex! + 1 }} / {{ filteredItems.length }}
              </span>
            </div>
            <button
              @click="closeLightbox"
              class="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white/80 transition hover:bg-white hover:text-black"
              aria-label="Fermer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <!-- Main Image Display Area -->
          <div class="relative flex flex-1 items-center justify-center py-4 my-auto overflow-hidden">
            <!-- Prev Button -->
            <button
              @click.stop="prevImage"
              class="absolute left-2 md:left-6 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-md transition hover:scale-110 hover:border-breddy-bronze hover:bg-breddy-bronze"
              aria-label="Image précédente"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <!-- Active Image -->
            <div class="max-h-[75vh] max-w-[90vw] overflow-hidden rounded-sm shadow-2xl border border-white/10 bg-black">
              <img
                :src="useAssetPath(activeItem.src)"
                :alt="activeItem.alt"
                class="max-h-[75vh] w-auto max-w-[90vw] object-contain transition-all duration-300"
              >
            </div>

            <!-- Next Button -->
            <button
              @click.stop="nextImage"
              class="absolute right-2 md:right-6 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-md transition hover:scale-110 hover:border-breddy-bronze hover:bg-breddy-bronze"
              aria-label="Image suivante"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <!-- Bottom Footer Info & CTA -->
          <div class="mx-auto w-full max-w-4xl border-t border-white/10 pt-4 text-center md:flex md:items-center md:justify-between md:text-left">
            <div>
              <p class="text-[10px] font-semibold uppercase tracking-[0.2em] text-breddy-bronze">
                {{ activeItem.text || 'Création Bois & Époxy Sur Mesure' }}
              </p>
              <h4 class="mt-1 text-2xl font-semibold text-white">
                {{ activeItem.title }}
              </h4>
            </div>
            <div class="mt-4 md:mt-0">
              <NuxtLink
                :to="localePath('/contact')"
                @click="closeLightbox"
                class="inline-flex items-center gap-2 rounded-none border border-breddy-bronze bg-breddy-bronze/20 px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-breddy-bronze"
              >
                <span>Demander une pièce similaire</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </NuxtLink>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>


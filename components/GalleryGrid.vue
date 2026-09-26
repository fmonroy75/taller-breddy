<script setup lang="ts">
interface GalleryItem {
  src: string
  alt: string
  title?: string
  text?: string
  span?: 'large' | 'normal'
}

interface Props {
  items: GalleryItem[]
  dark?: boolean
}

const props = withDefaults(defineProps<Props>(), { dark: false })
</script>

<template>
  <div class="grid gap-5 md:grid-cols-2" :class="props.dark ? 'text-breddy-ivory' : 'text-breddy-ink'">
    <article
      v-for="(item, index) in props.items"
      :key="item.src + index"
      class="group overflow-hidden"
      :class="item.span === 'large' ? 'md:row-span-2' : ''"
    >
      <div class="relative overflow-hidden bg-breddy-charcoal" :class="item.span === 'large' ? 'aspect-[4/5]' : 'aspect-[4/3]'">
        <img :src="item.src" :alt="item.alt" class="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.035]" loading="lazy">
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />
        <div v-if="item.title || item.text" class="absolute inset-x-0 bottom-0 p-6 md:p-8">
          <p v-if="item.text" class="text-[10px] uppercase tracking-[.2em] text-white/55">{{ item.text }}</p>
          <h3 v-if="item.title" class="mt-2 text-2xl font-semibold tracking-[-.02em] text-white md:text-3xl">{{ item.title }}</h3>
        </div>
      </div>
    </article>
  </div>
</template>

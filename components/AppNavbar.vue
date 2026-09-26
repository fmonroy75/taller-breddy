<script setup lang="ts">
const { locale, locales, setLocale, t } = useI18n()
const localePath = useLocalePath()
const mobileOpen = ref(false)

const links = computed(() => [
  { key: 'home', path: '/' },
  { key: 'wood', path: '/bois-epoxy' },
  { key: 'metal', path: '/soudure-metal' },
  { key: 'threed', path: '/conception-3d' },
  { key: 'contact', path: '/contact' }
])

function changeLocale(code: string) {
  setLocale(code)
  mobileOpen.value = false
}
</script>

<template>
  <header class="absolute inset-x-0 top-0 z-50 text-white">
    <div class="breddy-container">
      <div class="flex min-h-24 items-center justify-between border-b border-white/15">
        <NuxtLink :to="localePath('/')" aria-label="L’atelier BREDDY Inc." class="group flex items-center">
          <img src="/images/brand/logo-breddy.png" alt="L’atelier BREDDY Inc." class="h-16 w-16 object-contain brightness-0 invert transition duration-300 group-hover:opacity-75">
        </NuxtLink>

        <nav class="hidden items-center gap-7 xl:flex" aria-label="Navigation principale">
          <NuxtLink
            v-for="link in links"
            :key="link.key"
            :to="localePath(link.path)"
            class="text-[10px] font-semibold uppercase tracking-[.18em] text-white/78 transition hover:text-white"
            active-class="text-white"
          >
            {{ t(`nav.${link.key}`) }}
          </NuxtLink>
        </nav>

        <div class="hidden items-center gap-5 xl:flex">
          <div class="flex items-center gap-2 text-[10px] font-semibold tracking-[.18em]">
            <button v-for="loc in locales" :key="loc.code" type="button" :class="locale === loc.code ? 'text-white' : 'text-white/40 hover:text-white/75'" @click="changeLocale(loc.code)">
              {{ String(loc.code).toUpperCase() }}
            </button>
          </div>
          <NuxtLink :to="localePath('/contact')" class="border border-white/65 px-5 py-3 text-[10px] font-semibold uppercase tracking-[.16em] transition hover:bg-white hover:text-breddy-ink">
            {{ t('nav.quote') }}
          </NuxtLink>
        </div>

        <button type="button" class="xl:hidden" :aria-expanded="mobileOpen" :aria-label="mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'" @click="mobileOpen = !mobileOpen">
          <span class="text-2xl leading-none">{{ mobileOpen ? '×' : '≡' }}</span>
        </button>
      </div>
    </div>

    <Transition name="fade">
      <div v-if="mobileOpen" class="border-b border-white/10 bg-breddy-ink/98 px-6 py-6 xl:hidden">
        <nav class="flex flex-col gap-5">
          <NuxtLink v-for="link in links" :key="link.key" :to="localePath(link.path)" class="text-xs uppercase tracking-[.18em] text-white/82" @click="mobileOpen = false">
            {{ t(`nav.${link.key}`) }}
          </NuxtLink>
          <div class="flex gap-4 border-t border-white/10 pt-5 text-xs tracking-[.18em]">
            <button v-for="loc in locales" :key="loc.code" type="button" :class="locale === loc.code ? 'text-white' : 'text-white/40'" @click="changeLocale(loc.code)">
              {{ String(loc.code).toUpperCase() }}
            </button>
          </div>
          <NuxtLink :to="localePath('/contact')" class="inline-flex w-fit bg-white px-5 py-3 text-xs font-semibold uppercase tracking-[.16em] text-breddy-ink" @click="mobileOpen = false">
            {{ t('nav.quote') }}
          </NuxtLink>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active { transition: opacity .2s ease; }
.fade-enter-from,
.fade-leave-to { opacity: 0; }
</style>

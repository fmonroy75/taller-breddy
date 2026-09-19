<script setup lang="ts">
const { locale, locales, setLocale } = useI18n()
const mobileOpen = ref(false)

const links = computed(() => [
  { label: 'nav.creations', href: '#creations' },
  { label: 'nav.savoirFaire', href: '#savoir-faire' },
  { label: 'nav.processus', href: '#processus' },
  { label: 'nav.faq', href: '#faq' }
])

const currentLocale = computed(() => locale.value)

function changeLocale(code: string) {
  setLocale(code)
  mobileOpen.value = false
}
</script>

<template>
  <header class="absolute top-0 left-0 right-0 z-50 text-white">
    <div class="breddy-container">
      <div class="flex h-24 items-center justify-between border-b border-white/20">
        <NuxtLink to="/" aria-label="BREDDY" class="group flex items-center">
          <img
            src="/images/logo-breddy.png"
            alt="BREDDY"
            class="h-16 w-16 object-contain brightness-0 invert transition duration-300 group-hover:opacity-75"
          >
        </NuxtLink>

        <nav class="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          <a
            v-for="link in links"
            :key="link.href"
            :href="link.href"
            class="text-[11px] font-medium uppercase tracking-[.18em] text-white/85 transition hover:text-white"
          >
            {{ $t(link.label) }}
          </a>
        </nav>

        <div class="hidden items-center gap-5 lg:flex">
          <div class="flex items-center gap-2 text-[11px] font-semibold tracking-[.18em]">
            <button
              v-for="loc in locales"
              :key="loc.code"
              type="button"
              :class="currentLocale === loc.code ? 'text-white' : 'text-white/45 hover:text-white/80'"
              @click="changeLocale(loc.code)"
            >
              {{ String(loc.code).toUpperCase() }}
            </button>
          </div>
          <a
            href="#devis"
            class="border border-white/70 px-5 py-3 text-[10px] font-semibold uppercase tracking-[.18em] transition hover:bg-white hover:text-breddy-ink"
          >
            {{ $t('nav.quote') }}
          </a>
        </div>

        <button
          type="button"
          class="lg:hidden"
          aria-label="Menu"
          :aria-expanded="mobileOpen"
          @click="mobileOpen = !mobileOpen"
        >
          <v-icon size="28">{{ mobileOpen ? 'mdi-close' : 'mdi-menu' }}</v-icon>
        </button>
      </div>
    </div>

    <Transition name="fade">
      <div v-if="mobileOpen" class="border-b border-white/10 bg-breddy-ink/98 px-6 py-6 lg:hidden">
        <nav class="flex flex-col gap-5">
          <a
            v-for="link in links"
            :key="link.href"
            :href="link.href"
            class="text-xs uppercase tracking-[.18em] text-white/85"
            @click="mobileOpen = false"
          >{{ $t(link.label) }}</a>
          <div class="flex gap-4 border-t border-white/10 pt-5 text-xs tracking-[.18em]">
            <button
              v-for="loc in locales"
              :key="loc.code"
              type="button"
              :class="currentLocale === loc.code ? 'text-white' : 'text-white/40'"
              @click="changeLocale(loc.code)"
            >{{ String(loc.code).toUpperCase() }}</button>
          </div>
          <a href="#devis" class="inline-flex w-fit bg-white px-5 py-3 text-xs font-semibold uppercase tracking-[.16em] text-breddy-ink" @click="mobileOpen = false">
            {{ $t('nav.quote') }}
          </a>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity .2s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>

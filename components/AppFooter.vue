<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
</script>

<template>
  <footer class="bg-breddy-charcoal text-breddy-ivory">
    <div class="breddy-container py-16 md:py-20">
      <div class="grid gap-12 md:grid-cols-[1.2fr_.8fr_.9fr]">
        <div>
          <img src="/images/brand/logo-breddy.png" alt="L’atelier BREDDY Inc." class="h-20 w-20 object-contain brightness-0 invert">
          <p class="mt-6 max-w-md text-sm leading-7 text-breddy-stone">{{ t('footer.description') }}</p>
        </div>

        <div>
          <p class="text-[10px] font-semibold uppercase tracking-[.2em] text-breddy-stone/55">{{ t('footer.explore') }}</p>
          <nav class="mt-5 flex flex-col gap-3 text-sm text-breddy-ivory/75">
            <NuxtLink :to="localePath('/')" class="transition hover:text-breddy-bronze">{{ t('nav.home') }}</NuxtLink>
            <NuxtLink :to="localePath('/bois-epoxy')" class="transition hover:text-breddy-bronze">{{ t('nav.wood') }}</NuxtLink>
            <NuxtLink :to="localePath('/soudure-metal')" class="transition hover:text-breddy-bronze">{{ t('nav.metal') }}</NuxtLink>
            <NuxtLink :to="localePath('/conception-3d')" class="transition hover:text-breddy-bronze">{{ t('nav.threed') }}</NuxtLink>
            <NuxtLink :to="localePath('/contact')" class="transition hover:text-breddy-bronze">{{ t('nav.contact') }}</NuxtLink>
          </nav>
        </div>

        <div>
          <p class="text-[10px] font-semibold uppercase tracking-[.2em] text-breddy-stone/55">{{ t('footer.contact') }}</p>
          <div class="mt-5 space-y-3 text-sm leading-6 text-breddy-ivory/75">
            <p><a href="mailto:breddy.atelier24@gmail.com" class="transition hover:text-breddy-bronze">breddy.atelier24@gmail.com</a></p>
            <p><a href="tel:+15146099234" class="transition hover:text-breddy-bronze">514-609-9234</a></p>
            <p>Granby, Québec</p>
            <p>{{ t('footer.hours') }}</p>
            <div class="flex gap-5 pt-2 text-[10px] font-semibold uppercase tracking-[.18em] text-breddy-bronze">
                <a
    href="https://www.instagram.com/atelier_breddy/"
    target="_blank"
    rel="noopener noreferrer"
    class="transition hover:text-breddy-ivory"
  >
    Instagram
  </a>

  
    <a
    href="https://www.facebook.com/search/top/?q=l%27atelier%20breddy"
    target="_blank"
    rel="noopener noreferrer"
    class="transition hover:text-breddy-ivory"
  >
    Facebook
  </a>
             
            </div>
          </div>
        </div>
      </div>

      <div class="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-[10px] uppercase tracking-[.14em] text-breddy-stone/45 md:flex-row md:items-center md:justify-between">
        <p>© {{ new Date().getFullYear() }} L’atelier BREDDY Inc. {{ t('footer.rights') }}</p>
        <p>{{ t('footer.tagline') }}</p>
      </div>
    </div>
  </footer>
</template>

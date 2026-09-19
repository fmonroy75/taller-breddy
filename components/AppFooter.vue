<template>
  <footer class="bg-breddy-ink text-white">
    <div class="breddy-container py-16 md:py-20">
      <div class="grid gap-12 md:grid-cols-[1.2fr_.8fr_.8fr]">
        <div>
          <img src="/images/logo-breddy.png" alt="BREDDY" class="h-20 w-20 object-contain brightness-0 invert">
          <p class="mt-6 max-w-sm text-sm leading-7 text-white/60">
            {{ $t('footer.description') }}
          </p>
        </div>
        <div>
          <p class="text-[10px] font-semibold uppercase tracking-[.2em] text-white/40">{{ $t('footer.explore') }}</p>
          <div class="mt-5 flex flex-col gap-3 text-sm text-white/75">
            <a href="#creations" class="hover:text-white">{{ $t('nav.creations') }}</a>
            <a href="#savoir-faire" class="hover:text-white">{{ $t('nav.savoirFaire') }}</a>
            <a href="#processus" class="hover:text-white">{{ $t('nav.processus') }}</a>
            <a href="#faq" class="hover:text-white">{{ $t('nav.faq') }}</a>
          </div>
        </div>
        <div>
          <p class="text-[10px] font-semibold uppercase tracking-[.2em] text-white/40">{{ $t('footer.contact') }}</p>
          <div class="mt-5 space-y-3 text-sm text-white/75">
            <p>contact@tallerbreddy.com</p>
            <p>{{ $t('footer.byAppointment') }}</p>
          </div>
        </div>
      </div>
      <div class="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-[10px] uppercase tracking-[.14em] text-white/35 md:flex-row md:items-center md:justify-between">
        <p>© {{ new Date().getFullYear() }} BREDDY. {{ $t('footer.rights') }}</p>
        <p>{{ $t('footer.tagline') }}</p>
      </div>
    </div>
  </footer>
</template>

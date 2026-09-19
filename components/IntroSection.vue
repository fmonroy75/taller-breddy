<template>
  <section class="bg-breddy-cream py-24 md:py-32">
    <div class="breddy-container grid items-center gap-14 md:grid-cols-[.8fr_1.2fr] md:gap-24">
      <div>
        <p class="eyebrow text-breddy-wood">{{ $t('intro.eyebrow') }}</p>
        <h2 class="font-display mt-6 text-5xl leading-[.95] tracking-[-.02em] md:text-7xl">
          {{ $t('intro.title') }}
        </h2>
      </div>
      <div>
        <p class="max-w-2xl text-xl font-light leading-9 text-breddy-charcoal md:text-2xl md:leading-10">
          {{ $t('intro.text') }}
        </p>
        <a href="#savoir-faire" class="breddy-link-line mt-8 text-[10px] font-semibold uppercase tracking-[.18em]">
          {{ $t('intro.link') }}
          <v-icon size="15">mdi-arrow-right</v-icon>
        </a>
      </div>
    </div>
  </section>
</template>

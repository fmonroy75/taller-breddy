<script setup lang="ts">
const heroImage = 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=2200&q=88'
</script>

<template>
  <section class="relative flex min-h-[760px] items-end overflow-hidden bg-breddy-ink text-white md:min-h-[850px]">
    <div
      class="absolute inset-0 bg-cover bg-center"
      :style="{ backgroundImage: `url(${heroImage})` }"
      role="img"
      :aria-label="$t('hero.imageAlt')"
    />
    <div class="hero-overlay absolute inset-0" />
    <div class="absolute inset-0 bg-gradient-to-t from-breddy-ink/65 via-transparent to-black/10" />

    <div class="breddy-container relative z-10 pb-20 pt-40 md:pb-28">
      <div class="max-w-4xl">
        <p class="eyebrow reveal-up text-white/75">{{ $t('hero.eyebrow') }}</p>
        <h1 class="font-display reveal-up reveal-delay-1 mt-7 text-6xl font-medium leading-[.9] tracking-[-.025em] sm:text-7xl md:text-8xl lg:text-[110px]">
          {{ $t('hero.titleLine1') }}<br>
          <span class="text-white/70">{{ $t('hero.titleLine2') }}</span>
        </h1>
        <p class="reveal-up reveal-delay-2 mt-8 max-w-xl text-base font-light leading-7 text-white/75 md:text-lg">
          {{ $t('hero.description') }}
        </p>
        <div class="reveal-up reveal-delay-3 mt-9 flex flex-col gap-3 sm:flex-row">
          <a href="#creations" class="inline-flex items-center justify-center bg-white px-7 py-4 text-[10px] font-semibold uppercase tracking-[.18em] text-breddy-ink transition hover:bg-breddy-sand">
            {{ $t('hero.primaryCta') }}
            <v-icon class="ml-3" size="15">mdi-arrow-right</v-icon>
          </a>
          <a href="#devis" class="inline-flex items-center justify-center border border-white/50 px-7 py-4 text-[10px] font-semibold uppercase tracking-[.18em] text-white transition hover:border-white hover:bg-white/10">
            {{ $t('hero.secondaryCta') }}
          </a>
        </div>
      </div>
    </div>

    <div class="absolute bottom-8 right-8 hidden items-center gap-3 text-[9px] uppercase tracking-[.22em] text-white/50 md:flex">
      <span class="h-px w-10 bg-white/40" />
      {{ $t('hero.scroll') }}
    </div>
  </section>
</template>

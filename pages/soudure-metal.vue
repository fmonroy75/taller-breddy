<script setup lang="ts">
const { t, locale } = useI18n()
const config = useRuntimeConfig()
const siteUrl = String(config.public.siteUrl)
const localePath = useLocalePath()

useSeoMeta({
  title: () => t('seo.metal.title'),
  description: () => t('seo.metal.description'),
  ogTitle: () => t('seo.metal.title'),
  ogDescription: () => t('seo.metal.description'),
  ogType: 'website',
  ogImage: `${siteUrl}/images/soudure-metal/hero/atelier-metal.svg`,
  twitterCard: 'summary_large_image'
})

useHead(() => ({ htmlAttrs: { lang: locale.value }, link: [{ rel: 'canonical', href: `${siteUrl}${localePath('/soudure-metal')}` }] }))
</script>

<template>
  <div>
    <PageHero :eyebrow="t('metal.hero.eyebrow')" :title="t('metal.hero.title')" :description="t('metal.hero.description')" image="/images/soudure-metal/hero/atelier-metal.svg" :image-alt="t('metal.hero.imageAlt')" />

    <section class="bg-breddy-ivory py-24 md:py-32">
      <div class="breddy-container">
        <SectionIntro :eyebrow="t('metal.intro.eyebrow')" :title="t('metal.intro.title')" :text="t('metal.intro.text')" />
        <div class="mt-14 grid gap-5 md:grid-cols-2">
          <div v-for="(item, i) in 5" :key="i" class="border-t border-breddy-stone/50 pt-6">
            <span class="text-[10px] tracking-[.2em] text-breddy-bronze">0{{ i + 1 }}</span>
            <h3 class="mt-4 text-2xl font-semibold">{{ t(`metal.intro.services.${i}.title`) }}</h3>
            <p class="mt-3 max-w-xl text-sm leading-7 text-breddy-dark/65">{{ t(`metal.intro.services.${i}.text`) }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-breddy-charcoal py-24 text-breddy-ivory md:py-32">
      <div class="breddy-container">
        <SectionIntro :eyebrow="t('metal.gallery.eyebrow')" :title="t('metal.gallery.title')" :text="t('metal.gallery.text')" dark />
        <div class="mt-14 grid gap-5 md:grid-cols-3">
          <img v-for="src in ['/images/soudure-metal/galerie/IMG_0880.JPEG','/images/soudure-metal/galerie/IMG_3131.JPEG','/images/soudure-metal/galerie/IMG_3133.JPEG']" :key="src" :src="useAssetPath(src)" :alt="t('metal.gallery.placeholderAlt')" class="aspect-[4/3] w-full object-cover" loading="lazy">
        </div>
      </div>
    </section>

    <section class="bg-breddy-surface py-24 md:py-32">
      <div class="breddy-container grid gap-14 md:grid-cols-2 md:gap-24">
        <div>
          <p class="eyebrow text-breddy-bronze">{{ t('metal.combination.eyebrow') }}</p>
          <h2 class="mt-6 text-4xl font-semibold leading-[1.03] tracking-[-.035em] md:text-6xl">{{ t('metal.combination.title') }}</h2>
        </div>
        <p class="max-w-2xl text-sm leading-7 text-breddy-dark/75 md:text-base">{{ t('metal.combination.text') }}</p>
      </div>
    </section>

    <section class="bg-breddy-dark py-24 text-breddy-ivory md:py-32">
      <div class="breddy-container flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p class="eyebrow text-breddy-bronze">{{ t('metal.cta.eyebrow') }}</p>
          <h2 class="mt-6 max-w-3xl text-4xl font-semibold leading-[1.02] tracking-[-.035em] md:text-6xl">{{ t('metal.cta.title') }}</h2>
        </div>
        <NuxtLink :to="localePath('/contact')" class="inline-flex w-fit border border-breddy-bronze px-7 py-4 text-[10px] font-semibold uppercase tracking-[.18em] transition hover:bg-breddy-bronze">{{ t('common.request') }} →</NuxtLink>
      </div>
    </section>
  </div>
</template>

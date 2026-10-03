<script setup lang="ts">
const { t, locale } = useI18n()
const config = useRuntimeConfig()
const siteUrl = String(config.public.siteUrl)
const localePath = useLocalePath()

useSeoMeta({
  title: () => t('seo.threed.title'),
  description: () => t('seo.threed.description'),
  ogTitle: () => t('seo.threed.title'),
  ogDescription: () => t('seo.threed.description'),
  ogType: 'website',
  ogImage: `${siteUrl}/images/conception-3d/hero/conception-technique.svg`,
  twitterCard: 'summary_large_image'
})

useHead(() => ({ htmlAttrs: { lang: locale.value }, link: [{ rel: 'canonical', href: `${siteUrl}${localePath('/conception-3d')}` }] }))
</script>

<template>
  <div>
    <PageHero :eyebrow="t('threed.hero.eyebrow')" :title="t('threed.hero.title')" :description="t('threed.hero.description')" image="/images/conception-3d/hero/conception-technique.svg" :image-alt="t('threed.hero.imageAlt')" />

    <section class="bg-breddy-ivory py-24 md:py-32">
      <div class="breddy-container">
        <SectionIntro :eyebrow="t('threed.intro.eyebrow')" :title="t('threed.intro.title')" :text="t('threed.intro.text')" />
        <div class="mt-14 grid gap-5 md:grid-cols-2">
          <div v-for="(item, i) in 4" :key="i" class="border-t border-breddy-stone/50 pt-6">
            <span class="text-[10px] tracking-[.2em] text-breddy-bronze">0{{ i + 1 }}</span>
            <h3 class="mt-4 text-2xl font-semibold">{{ t(`threed.intro.process.${i}.title`) }}</h3>
            <p class="mt-3 max-w-xl text-sm leading-7 text-breddy-dark/65">{{ t(`threed.intro.process.${i}.text`) }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-breddy-charcoal py-24 text-breddy-ivory md:py-32">
      <div class="breddy-container">
        <SectionIntro :eyebrow="t('threed.gallery.eyebrow')" :title="t('threed.gallery.title')" :text="t('threed.gallery.text')" dark />
        <div class="mt-14 grid gap-5 md:grid-cols-3">
          <img v-for="src in ['/images/conception-3d/galerie/IMG_3681.JPEG','/images/conception-3d/galerie/IMG_3666.JPEG','/images/conception-3d/galerie/photo-a-ajouter-03.svg']" :key="src" :src="useAssetPath(src)" :alt="t('threed.gallery.placeholderAlt')" class="aspect-[4/3] w-full object-cover" loading="lazy">
        </div>
      </div>
    </section>

    <section class="bg-breddy-surface py-24 md:py-32">
      <div class="breddy-container grid gap-14 md:grid-cols-2 md:gap-24">
        <div>
          <p class="eyebrow text-breddy-bronze">{{ t('threed.printing.eyebrow') }}</p>
          <h2 class="mt-6 text-4xl font-semibold leading-[1.03] tracking-[-.035em] md:text-6xl">{{ t('threed.printing.title') }}</h2>
        </div>
        <div class="space-y-8 text-sm leading-7 text-breddy-dark/75 md:text-base">
          <p>{{ t('threed.printing.p1') }}</p>
          <p>{{ t('threed.printing.p2') }}</p>
        </div>
      </div>
    </section>

    <section class="bg-breddy-dark py-24 text-breddy-ivory md:py-32">
      <div class="breddy-container flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p class="eyebrow text-breddy-bronze">{{ t('threed.cta.eyebrow') }}</p>
          <h2 class="mt-6 max-w-3xl text-4xl font-semibold leading-[1.02] tracking-[-.035em] md:text-6xl">{{ t('threed.cta.title') }}</h2>
        </div>
        <NuxtLink :to="localePath('/contact')" class="inline-flex w-fit border border-breddy-bronze px-7 py-4 text-[10px] font-semibold uppercase tracking-[.18em] transition hover:bg-breddy-bronze">{{ t('common.request') }} →</NuxtLink>
      </div>
    </section>
  </div>
</template>

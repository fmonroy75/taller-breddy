<script setup lang="ts">
const { t, locale } = useI18n()
const config = useRuntimeConfig()
const siteUrl = String(config.public.siteUrl)
const localePath = useLocalePath()

useSeoMeta({
  title: () => t('seo.wood.title'),
  description: () => t('seo.wood.description'),
  ogTitle: () => t('seo.wood.title'),
  ogDescription: () => t('seo.wood.description'),
  ogType: 'website',
  ogImage: `${siteUrl}/images/bois-epoxy/hero/portada.PNG`,
  twitterCard: 'summary_large_image'
})

useHead(() => ({
  htmlAttrs: { lang: locale.value },
  link: [{ rel: 'canonical', href: `${siteUrl}${localePath('/bois-epoxy')}` }]
}))
</script>

<template>
  <div>
    <PageHero :eyebrow="t('wood.hero.eyebrow')" :title="t('wood.hero.title')" :description="t('wood.hero.description')" image="/images/bois-epoxy/hero/portada.PNG" :image-alt="t('wood.hero.imageAlt')" />

    <section class="bg-breddy-ivory py-24 md:py-32">
      <div class="breddy-container">
        <SectionIntro :eyebrow="t('wood.intro.eyebrow')" :title="t('wood.intro.title')" :text="t('wood.intro.text')" />
        <div class="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          <div v-for="(item, i) in 5" :key="i" class="border-t border-breddy-stone/50 pt-5">
            <span class="text-[10px] tracking-[.2em] text-breddy-bronze">0{{ i + 1 }}</span>
            <h3 class="mt-5 text-xl font-semibold">{{ t(`wood.intro.items.${i}.title`) }}</h3>
            <p class="mt-3 text-sm leading-6 text-breddy-dark/65">{{ t(`wood.intro.items.${i}.text`) }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-breddy-charcoal py-24 text-breddy-ivory md:py-32">
      <div class="breddy-container">
        <SectionIntro :eyebrow="t('wood.gallery.eyebrow')" :title="t('wood.gallery.title')" :text="t('wood.gallery.text')" dark />
        <div class="mt-14">
          <GalleryGrid
            dark
            :items="[
              { src: '/images/bois-epoxy/galerie/mesa.PNG', alt: t('wood.gallery.mesaAlt'), title: t('wood.gallery.mesaTitle'), text: t('wood.gallery.mesaText'), span: 'large' },
              { src: '/images/bois-epoxy/galerie/IMG_2224.JPEG', alt: t('wood.gallery.mesaAlt'), title: t('wood.gallery.mesaTitle'), text: t('wood.gallery.mesaText') },
              
              { src: '/images/bois-epoxy/galerie/ajedrez.PNG', alt: t('wood.gallery.chessAlt'), title: t('wood.gallery.chessTitle'), text: t('wood.gallery.chessText') },
              { src: '/images/bois-epoxy/galerie/ajedrez2.PNG', alt: t('wood.gallery.detailAlt'), title: t('wood.gallery.detailTitle'), text: t('wood.gallery.detailText') },
              { src: '/images/bois-epoxy/galerie/IMG_3270.JPEG', alt: t('wood.gallery.accessoriesAlt'), title: t('wood.gallery.accessoriesTitle'), text: t('wood.gallery.accessoriesText') },
              { src: '/images/bois-epoxy/galerie/IMG_3279.JPEG', alt: t('wood.gallery.accessoriesAlt'), title: t('wood.gallery.accessoriesTitle'), text: t('wood.gallery.accessoriesText') },
              { src: '/images/bois-epoxy/galerie/IMG_3288.JPEG', alt: t('wood.gallery.cuttingBoarAlt'), title: t('wood.gallery.cuttingBoarTitle'), text: t('wood.gallery.cuttingBoarText') },
              { src: '/images/bois-epoxy/galerie/IMG_3289.JPEG', alt: t('wood.gallery.cuttingBoarAlt'), title: t('wood.gallery.cuttingBoarTitle'), text: t('wood.gallery.cuttingBoarText') },
              { src: '/images/bois-epoxy/galerie/IMG_3294.JPEG', alt: t('wood.gallery.cuttingBoarAlt'), title: t('wood.gallery.cuttingBoarTitle'), text: t('wood.gallery.cuttingBoarText') },
              
              { src: '/images/bois-epoxy/galerie/IMG_3637.JPEG', alt: t('wood.gallery.jewelryAlt'), title: t('wood.gallery.jewelryTitle'), text: t('wood.gallery.jewelryText') },
              { src: '/images/bois-epoxy/galerie/IMG_3643.JPEG', alt: t('wood.gallery.jewelryAlt'), title: t('wood.gallery.jewelryTitle'), text: t('wood.gallery.jewelryText') },
              { src: '/images/bois-epoxy/galerie/IMG_3642.JPEG', alt: t('wood.gallery.jewelryAlt'), title: t('wood.gallery.jewelryTitle'), text: t('wood.gallery.jewelryText') }
            ]"
          />
        </div>
      </div>
    </section>

    <section class="bg-breddy-surface py-24 md:py-32">
      <div class="breddy-container grid gap-14 md:grid-cols-2 md:gap-24">
        <div>
          <p class="eyebrow text-breddy-bronze">{{ t('wood.material.eyebrow') }}</p>
          <h2 class="mt-6 text-4xl font-semibold leading-[1.03] tracking-[-.035em] md:text-6xl">{{ t('wood.material.title') }}</h2>
        </div>
        <div class="space-y-8 text-sm leading-7 text-breddy-dark/75 md:text-base">
          <p>{{ t('wood.material.p1') }}</p>
          <p>{{ t('wood.material.p2') }}</p>
          <p>{{ t('wood.material.p3') }}</p>
        </div>
      </div>
    </section>

    <section class="bg-breddy-dark py-24 text-breddy-ivory md:py-32">
      <div class="breddy-container flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p class="eyebrow text-breddy-bronze">{{ t('wood.cta.eyebrow') }}</p>
          <h2 class="mt-6 max-w-3xl text-4xl font-semibold leading-[1.02] tracking-[-.035em] md:text-6xl">{{ t('wood.cta.title') }}</h2>
        </div>
        <NuxtLink :to="localePath('/contact')" class="inline-flex w-fit border border-breddy-bronze px-7 py-4 text-[10px] font-semibold uppercase tracking-[.18em] transition hover:bg-breddy-bronze">{{ t('common.request') }} →</NuxtLink>
      </div>
    </section>
  </div>
</template>

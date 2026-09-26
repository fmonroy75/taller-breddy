<script setup lang="ts">
const { t, locale } = useI18n()
const config = useRuntimeConfig()
const siteUrl = String(config.public.siteUrl)
const logoUrl = `${siteUrl}/images/brand/logo-breddy.png`
const localePath = useLocalePath()

useSeoMeta({
  title: () => t('seo.home.title'),
  description: () => t('seo.home.description'),
  ogTitle: () => t('seo.home.title'),
  ogDescription: () => t('seo.home.description'),
  ogType: 'website',
  ogImage: logoUrl,
  twitterCard: 'summary_large_image'
})

useHead(() => ({
  htmlAttrs: { lang: locale.value },
  link: [{ rel: 'canonical', href: `${siteUrl}${localePath('/')}` }],
  script: [{
    type: 'application/ld+json',
    children: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: 'L’atelier BREDDY Inc.',
      url: siteUrl,
      logo: { '@type': 'ImageObject', url: logoUrl },
      description: t('seo.home.description'),
      telephone: '514-609-9234',
      email: 'breddy.atelier24@gmail.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Granby',
        addressRegion: 'QC',
        addressCountry: 'CA'
      }
    })
  }]
}))

const services = [
  { key: 'conception3d', href: '/conception-3d' },
  { key: 'soudure', href: '/soudure-metal' },
  { key: 'bois', href: '/bois-epoxy' }
]
</script>

<template>
  <div>
    <PageHero
      :eyebrow="t('home.hero.eyebrow')"
      :title="t('home.hero.title')"
      :description="t('home.hero.description')"
      image="/images/bois-epoxy/hero/portada.PNG"
      :image-alt="t('home.hero.imageAlt')"
    />

    <section class="bg-breddy-ivory py-24 md:py-32">
      <div class="breddy-container">
        <div class="grid gap-14 md:grid-cols-[.8fr_1.2fr] md:gap-24">
          <div>
            <p class="eyebrow text-breddy-bronze">{{ t('home.history.eyebrow') }}</p>
            <h2 class="mt-6 max-w-xl text-4xl font-semibold leading-[1.03] tracking-[-.035em] md:text-6xl">{{ t('home.history.title') }}</h2>
          </div>
          <div class="max-w-2xl space-y-6 text-sm leading-7 text-breddy-dark/75 md:text-base">
            <p>{{ t('home.history.p1') }}</p>
            <p>{{ t('home.history.p2') }}</p>
            <p>{{ t('home.history.p3') }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-breddy-charcoal py-24 text-breddy-ivory md:py-32">
      <div class="breddy-container">
        <SectionIntro :eyebrow="t('home.services.eyebrow')" :title="t('home.services.title')" :text="t('home.services.text')" dark />
        <div class="mt-16 grid gap-px bg-breddy-stone/15 md:grid-cols-3">
          <NuxtLink
            v-for="service in services"
            :key="service.key"
            :to="localePath(service.href)"
            class="group min-h-72 bg-breddy-charcoal p-8 transition hover:bg-breddy-dark md:p-10"
          >
            <span class="text-[10px] tracking-[.2em] text-breddy-bronze">{{ t(`home.services.${service.key}.number`) }}</span>
            <h3 class="mt-8 text-3xl font-semibold tracking-[-.025em]">{{ t(`home.services.${service.key}.title`) }}</h3>
            <p class="mt-5 text-sm leading-7 text-breddy-stone">{{ t(`home.services.${service.key}.text`) }}</p>
            <span class="mt-8 inline-flex text-[10px] font-semibold uppercase tracking-[.18em] text-breddy-ivory/70 transition group-hover:text-breddy-bronze">{{ t('common.discover') }} →</span>
          </NuxtLink>
        </div>
      </div>
    </section>

    <section class="bg-breddy-surface py-24 md:py-32">
      <div class="breddy-container">
        <SectionIntro :eyebrow="t('home.gallery.eyebrow')" :title="t('home.gallery.title')" :text="t('home.gallery.text')" />
        <div class="mt-14">
          <GalleryGrid
            :items="[
              { src: '/images/accueil/realisation-table.PNG', alt: t('home.gallery.tableAlt'), title: t('home.gallery.tableTitle'), text: t('home.gallery.tableText'), span: 'large' },
              { src: '/images/accueil/realisation-jeu.PNG', alt: t('home.gallery.chessAlt'), title: t('home.gallery.chessTitle'), text: t('home.gallery.chessText') },
              { src: '/images/bois-epoxy/galerie/ajedrez2.PNG', alt: t('home.gallery.detailAlt'), title: t('home.gallery.detailTitle'), text: t('home.gallery.detailText') }
            ]"
          />
        </div>
      </div>
    </section>

    <section class="bg-breddy-dark py-24 text-breddy-ivory md:py-32">
      <div class="breddy-container grid gap-10 md:grid-cols-[1fr_1.15fr] md:items-end">
        <p class="eyebrow text-breddy-bronze">{{ t('home.cta.eyebrow') }}</p>
        <div>
          <h2 class="max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-.035em] md:text-6xl">{{ t('home.cta.title') }}</h2>
          <p class="mt-7 max-w-2xl text-sm leading-7 text-breddy-stone md:text-base">{{ t('home.cta.text') }}</p>
          <NuxtLink :to="localePath('/contact')" class="mt-9 inline-flex border border-breddy-bronze px-7 py-4 text-[10px] font-semibold uppercase tracking-[.18em] transition hover:bg-breddy-bronze hover:text-breddy-ivory">{{ t('common.request') }} →</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

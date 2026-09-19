<script setup lang="ts">
const { t, locale } = useI18n()
const config = useRuntimeConfig()

const siteUrl = config.public.siteUrl
const logoUrl = `${siteUrl}/images/logo-breddy.png`

useSeoMeta({
  title: () => t('seo.title'),
  description: () => t('seo.description'),
  ogTitle: () => t('seo.title'),
  ogDescription: () => t('seo.description'),
  ogType: 'website',
  ogImage: logoUrl,
  twitterCard: 'summary_large_image'
})

useHead(() => ({
  htmlAttrs: {
    lang: locale.value
  },

  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        '@id': `${siteUrl}/#organization`,
        name: 'BREDDY',
        url: siteUrl,
        logo: {
          '@type': 'ImageObject',
          url: logoUrl
        },
        description: t('seo.description'),
        areaServed: {
          '@type': 'Country',
          name: 'Canada'
        }
      })
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        name: 'BREDDY — Bois & résine époxy',
        url: siteUrl,
        inLanguage: locale.value,
        publisher: {
          '@id': `${siteUrl}/#organization`
        }
      })
    }
  ]
}))
</script>

<template>
  <div>
    <HeroSection />
    <IntroSection />
    <CreationsSection />
    <SavoirFaireSection />
    <ProcessSection />

    <section class="relative overflow-hidden bg-breddy-charcoal text-white">
      <div
        class="absolute inset-0 opacity-35"
        style="
          background-image:url('https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=2200&q=82');
          background-size:cover;
          background-position:center;
        "
      />

      <div class="absolute inset-0 bg-breddy-ink/75" />

      <div class="breddy-container relative py-28 text-center md:py-40">
        <p class="eyebrow justify-center text-white/50">
          {{ $t('statement.eyebrow') }}
        </p>

        <h2 class="font-display mx-auto mt-7 max-w-4xl text-5xl leading-[.95] md:text-8xl">
          {{ $t('statement.title') }}
        </h2>

        <a
          href="#devis"
          class="mt-9 inline-flex border border-white/60 px-7 py-4 text-[10px] font-semibold uppercase tracking-[.18em] transition hover:bg-white hover:text-breddy-ink"
        >
          {{ $t('statement.cta') }}
        </a>
      </div>
    </section>

<ClientOnly>
  <QuoteSection />
  <template #fallback>
    <div class="min-h-[700px]" />
  </template>
</ClientOnly>
    <FaqSection />
  </div>
</template>
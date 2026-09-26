<script setup lang="ts">
const { t, locale } = useI18n()
const config = useRuntimeConfig()
const siteUrl = String(config.public.siteUrl)
const localePath = useLocalePath()

useSeoMeta({
  title: () => t('seo.contact.title'),
  description: () => t('seo.contact.description'),
  ogTitle: () => t('seo.contact.title'),
  ogDescription: () => t('seo.contact.description'),
  ogType: 'website',
  ogImage: `${siteUrl}/images/accueil/realisation-table.PNG`,
  twitterCard: 'summary_large_image'
})

useHead(() => ({ htmlAttrs: { lang: locale.value }, link: [{ rel: 'canonical', href: `${siteUrl}${localePath('/contact')}` }] }))
</script>

<template>
  <div>
    <PageHero :eyebrow="t('contact.hero.eyebrow')" :title="t('contact.hero.title')" :description="t('contact.hero.description')" image="/images/accueil/realisation-table.PNG" :image-alt="t('contact.hero.imageAlt')" compact />

    <section class="bg-breddy-ivory py-24 md:py-32">
      <div class="breddy-container grid gap-14 md:grid-cols-[.7fr_1.3fr] md:gap-24">
        <div>
          <p class="eyebrow text-breddy-bronze">{{ t('contact.info.eyebrow') }}</p>
          <h2 class="mt-6 text-4xl font-semibold leading-[1.03] tracking-[-.035em] md:text-6xl">{{ t('contact.info.title') }}</h2>
          <div class="mt-10 space-y-5 text-sm leading-7 text-breddy-dark/70">
            <p><strong class="text-breddy-ink">{{ t('contact.info.locationLabel') }}</strong><br>Granby, Québec</p>
            <p><strong class="text-breddy-ink">{{ t('contact.info.emailLabel') }}</strong><br><a href="mailto:breddy.atelier24@gmail.com" class="breddy-link-line">breddy.atelier24@gmail.com</a></p>
            <p><strong class="text-breddy-ink">{{ t('contact.info.phoneLabel') }}</strong><br><a href="tel:+15146099234" class="breddy-link-line">514-609-9234</a></p>
            <p><strong class="text-breddy-ink">{{ t('contact.info.hoursLabel') }}</strong><br>{{ t('contact.info.hours') }}</p>
          </div>
          <div class="mt-10 border-t border-breddy-stone/40 pt-6 text-sm leading-7 text-breddy-dark/65">
            <p>{{ t('contact.info.socialTitle') }}</p>
            <div class="mt-4 flex gap-6 text-[10px] font-semibold uppercase tracking-[.18em] text-breddy-bronze">
              <span>Instagram</span>
              <span>Facebook</span>
            </div>
            <p class="mt-3 text-xs text-breddy-dark/45">{{ t('contact.info.socialPending') }}</p>
          </div>
        </div>

        <div class="bg-breddy-surface p-7 md:p-10">
          <p class="eyebrow text-breddy-bronze">{{ t('contact.form.eyebrow') }}</p>
          <h2 class="mt-6 text-3xl font-semibold tracking-[-.025em] md:text-4xl">{{ t('contact.form.title') }}</h2>
          <p class="mt-4 max-w-2xl text-sm leading-7 text-breddy-dark/65">{{ t('contact.form.description') }}</p>
          <div class="mt-9">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>

    <section class="bg-breddy-charcoal py-24 text-breddy-ivory md:py-32">
      <div class="breddy-container grid gap-10 md:grid-cols-[1fr_1.2fr] md:items-end">
        <div>
          <p class="eyebrow text-breddy-bronze">{{ t('contact.project.eyebrow') }}</p>
          <h2 class="mt-6 text-4xl font-semibold leading-[1.02] tracking-[-.035em] md:text-6xl">{{ t('contact.project.title') }}</h2>
        </div>
        <p class="max-w-2xl text-sm leading-7 text-breddy-stone md:text-base">{{ t('contact.project.text') }}</p>
      </div>
    </section>
  </div>
</template>

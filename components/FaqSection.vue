<script setup lang="ts">
interface FaqItem {
  question: string
  answer: string
}

const { tm, rt } = useI18n()

const items = computed<FaqItem[]>(() => {
  const raw = tm('faq.items') as unknown

  if (!Array.isArray(raw)) {
    return []
  }

  return raw.map((item) => ({
    question: String((item as Record<string, unknown>).question ?? ''),
    answer: String((item as Record<string, unknown>).answer ?? '')
  }))
})

useHead(() => ({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: items.value.map((item) => ({
          '@type': 'Question',
          name: rt(item.question),
          acceptedAnswer: {
            '@type': 'Answer',
            text: rt(item.answer)
          }
        }))
      })
    }
  ]
}))
</script>
<template>
  <section id="faq" class="bg-white py-24 md:py-32">
    <div class="breddy-container grid gap-14 md:grid-cols-[.65fr_1.35fr] md:gap-24">
      <div>
        <p class="eyebrow text-breddy-wood">
          {{ $t('faq.eyebrow') }}
        </p>

        <h2 class="font-display mt-6 text-5xl leading-[.95] md:text-7xl">
          {{ $t('faq.title') }}
        </h2>

        <p class="mt-7 max-w-sm text-sm leading-7 text-breddy-charcoal/60">
          {{ $t('faq.description') }}
        </p>
      </div>

      <div class="divide-y divide-breddy-ink/15 border-y border-breddy-ink/15">
        <v-expansion-panels variant="accordion">
          <v-expansion-panel
            v-for="(item, index) in items"
            :key="index"
            elevation="0"
            class="bg-transparent"
          >
            <v-expansion-panel-title
              class="px-0 py-5 text-left font-display text-2xl !text-breddy-ink"
            >
              {{ rt(item.question) }}
            </v-expansion-panel-title>

            <v-expansion-panel-text
              class="px-0 pb-5 text-sm leading-7 text-breddy-charcoal/60"
            >
              {{ rt(item.answer) }}
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
    </div>
  </section>
</template>
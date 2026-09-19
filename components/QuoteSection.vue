<script setup lang="ts">
const { tm, rt } = useI18n()

const form = reactive({
  name: '',
  email: '',
  phone: '',
  project: '',
  dimensions: '',
  wood: '',
  resin: '',
  budget: '',
  message: ''
})

const submitted = ref(false)

const projectsList = computed(() => {
  const raw = tm('form.projects')
  if (!Array.isArray(raw)) return []
  return raw.map((item: any) => ({
    title: typeof item.title === 'function' ? rt(item.title) : item.title,
    value: typeof item.value === 'function' ? rt(item.value) : item.value
  }))
})

const budgetsList = computed(() => {
  const raw = tm('form.budgets')
  if (!Array.isArray(raw)) return []
  return raw.map((item: any) => typeof item === 'function' ? rt(item) : item)
})

function submitForm() {
  submitted.value = true
}
</script>

<template>
  <section id="devis" class="bg-breddy-sand py-24 md:py-32">
    <div class="breddy-container grid gap-14 md:grid-cols-[.75fr_1.25fr] md:gap-24">
      <div>
        <p class="eyebrow text-breddy-wood">{{ $t('quote.eyebrow') }}</p>
        <h2 class="font-display mt-6 text-5xl leading-[.95] md:text-7xl">{{ $t('quote.title') }}</h2>
        <p class="mt-8 max-w-md text-sm leading-7 text-breddy-charcoal/65">{{ $t('quote.description') }}</p>
        <div class="mt-10 border-l border-breddy-ink/20 pl-5 text-sm leading-7 text-breddy-charcoal/65">
          {{ $t('quote.note') }}
        </div>
      </div>

      <div>
        <form v-if="!submitted" class="grid gap-5" @submit.prevent="submitForm">
          <div class="grid gap-5 sm:grid-cols-2">
            <v-text-field v-model="form.name" :label="$t('form.name')" variant="underlined" density="comfortable" hide-details="auto" required />
            <v-text-field v-model="form.email" :label="$t('form.email')" type="email" variant="underlined" density="comfortable" hide-details="auto" required />
          </div>
          <div class="grid gap-5 sm:grid-cols-2">
            <v-text-field v-model="form.phone" :label="$t('form.phone')" variant="underlined" density="comfortable" hide-details="auto" />
            <v-select v-model="form.project" :items="projectsList" item-title="title" item-value="value" :label="$t('form.project')" variant="underlined" density="comfortable" hide-details="auto" />
          </div>
          <div class="grid gap-5 sm:grid-cols-2">
            <v-text-field v-model="form.dimensions" :label="$t('form.dimensions')" variant="underlined" density="comfortable" hide-details="auto" />
            <v-text-field v-model="form.wood" :label="$t('form.wood')" variant="underlined" density="comfortable" hide-details="auto" />
          </div>
          <div class="grid gap-5 sm:grid-cols-2">
            <v-text-field v-model="form.resin" :label="$t('form.resin')" variant="underlined" density="comfortable" hide-details="auto" />
            <v-select v-model="form.budget" :items="budgetsList" :label="$t('form.budget')" variant="underlined" density="comfortable" hide-details="auto" />
          </div>
          <v-textarea v-model="form.message" :label="$t('form.message')" variant="underlined" rows="4" auto-grow hide-details="auto" />
          <button type="submit" class="mt-4 inline-flex w-fit items-center bg-breddy-ink px-7 py-4 text-[10px] font-semibold uppercase tracking-[.18em] text-white transition hover:bg-breddy-wood">
            {{ $t('form.submit') }}
            <v-icon class="ml-3" size="15">mdi-arrow-right</v-icon>
          </button>
        </form>

        <div v-else class="border border-breddy-ink/15 bg-breddy-cream p-8 md:p-12">
          <p class="eyebrow text-breddy-wood">BREDDY</p>
          <h3 class="font-display mt-6 text-4xl md:text-5xl">{{ $t('form.successTitle') }}</h3>
          <p class="mt-5 max-w-lg text-sm leading-7 text-breddy-charcoal/65">{{ $t('form.successText') }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

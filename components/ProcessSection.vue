<script setup lang="ts">
const { tm, rt } = useI18n()

const processItems = computed(() => {
  const raw = tm('process.items')
  return Array.isArray(raw) ? raw : []
})
</script>

<template>
  <section id="processus" class="bg-breddy-cream py-24 md:py-32">
    <div class="breddy-container">
      <div class="max-w-2xl">
        <p class="eyebrow text-breddy-wood">{{ $t('process.eyebrow') }}</p>
        <h2 class="font-display mt-6 text-5xl leading-[.95] md:text-7xl">{{ $t('process.title') }}</h2>
      </div>

      <div class="mt-16 divide-y divide-breddy-ink/15 border-y border-breddy-ink/15">
        <div v-for="(item, index) in processItems" :key="index" class="grid gap-5 py-7 md:grid-cols-[80px_260px_1fr] md:items-center">
          <span class="font-display text-3xl text-breddy-wood/60">0{{ index + 1 }}</span>
          <h3 class="font-display text-3xl">{{ rt(item.title) }}</h3>
          <p class="max-w-xl text-sm leading-6 text-breddy-charcoal/60">{{ rt(item.text) }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

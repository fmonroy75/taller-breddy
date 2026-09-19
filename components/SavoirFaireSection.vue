<script setup lang="ts">
const { tm, rt } = useI18n()

const craftItems = computed(() => {
  const raw = tm('craft.items')
  return Array.isArray(raw) ? raw : []
})
</script>

<template>
  <section id="savoir-faire" class="bg-breddy-ink py-24 text-white md:py-32">
    <div class="breddy-container grid gap-16 md:grid-cols-[.85fr_1.15fr] md:gap-24">
      <div>
        <p class="eyebrow text-white/45">{{ $t('craft.eyebrow') }}</p>
        <h2 class="font-display mt-6 text-5xl leading-[.95] md:text-7xl">{{ $t('craft.title') }}</h2>
        <p class="mt-8 max-w-md text-sm leading-7 text-white/55">{{ $t('craft.description') }}</p>
      </div>

      <div class="grid gap-x-10 gap-y-12 sm:grid-cols-2">
        <div v-for="(item, index) in craftItems" :key="index" class="border-t border-white/15 pt-5">
          <span class="text-[10px] tracking-[.18em] text-white/35">0{{ index + 1 }}</span>
          <h3 class="font-display mt-4 text-3xl">{{ rt(item.title) }}</h3>
          <p class="mt-3 text-sm leading-6 text-white/50">{{ rt(item.text) }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

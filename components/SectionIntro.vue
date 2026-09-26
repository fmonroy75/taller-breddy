<script setup lang="ts">
interface Props {
  eyebrow: string
  title: string
  text?: string
  dark?: boolean
}

const props = withDefaults(defineProps<Props>(), { text: '', dark: false })
</script>

<template>
  <div class="grid gap-8 md:grid-cols-[1fr_1.15fr] md:items-end md:gap-16">
    <div>
      <p class="eyebrow" :class="props.dark ? 'text-breddy-bronze' : 'text-breddy-bronze'">{{ props.eyebrow }}</p>
      <h2 class="mt-6 max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-.035em] md:text-6xl">{{ props.title }}</h2>
    </div>
    <p v-if="props.text" class="max-w-2xl text-sm leading-7 md:text-base" :class="props.dark ? 'text-breddy-stone' : 'text-breddy-dark/70'">
      {{ props.text }}
    </p>
  </div>
</template>

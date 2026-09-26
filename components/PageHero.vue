<script setup lang="ts">
interface Props {
  eyebrow: string
  title: string
  description?: string
  image?: string
  imageAlt?: string
  compact?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  description: '',
  image: '',
  imageAlt: '',
  compact: false
})
</script>

<template>
  <section
    class="relative isolate overflow-hidden bg-breddy-charcoal text-breddy-ivory"
    :class="props.compact ? 'min-h-[56vh]' : 'min-h-[76vh]'"
  >
    <div v-if="props.image" class="absolute inset-0 -z-20">
      <img :src="props.image" :alt="props.imageAlt || props.title" class="h-full w-full object-cover" :fetchpriority="props.compact ? 'auto' : 'high'">
    </div>
    <div v-else class="absolute inset-0 -z-20 bg-breddy-charcoal">
      <div class="absolute inset-0 bg-[linear-gradient(115deg,rgba(155,116,84,.14),transparent_38%,rgba(255,255,255,.03)_70%,transparent)]" />
      <div class="absolute right-[-10vw] top-1/2 h-[36vw] w-[36vw] -translate-y-1/2 rounded-full border border-breddy-bronze/30" />
      <div class="absolute right-[4vw] top-1/2 h-[22vw] w-[22vw] -translate-y-1/2 rounded-full border border-breddy-stone/15" />
    </div>
    <div class="absolute inset-0 -z-10 bg-black/55" />
    <div class="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(23,23,23,.94)_0%,rgba(23,23,23,.72)_46%,rgba(23,23,23,.18)_100%)]" />

    <div class="breddy-container flex min-h-[inherit] items-end pb-20 pt-40 md:pb-24">
      <div class="max-w-4xl">
        <p class="eyebrow text-breddy-bronze reveal-up">{{ props.eyebrow }}</p>
        <h1 class="mt-6 max-w-4xl text-5xl font-semibold leading-[.98] tracking-[-.04em] md:text-7xl lg:text-[6.2rem] reveal-up reveal-delay-1">
          {{ props.title }}
        </h1>
        <p v-if="props.description" class="mt-8 max-w-2xl text-base leading-8 text-breddy-ivory/72 md:text-lg reveal-up reveal-delay-2">
          {{ props.description }}
        </p>
        <div class="mt-10 h-px w-16 bg-breddy-bronze/80 reveal-up reveal-delay-3" />
      </div>
    </div>
  </section>
</template>

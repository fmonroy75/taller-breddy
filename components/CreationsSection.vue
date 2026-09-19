<script setup lang="ts">
const items = [
  {
    image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1400&q=86',
    title: 'Tables signature',
    type: 'Bois massif · Résine époxy',
    tall: true
  },
  {
    image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=86',
    title: 'Pièces sur mesure',
    type: 'Design personnalisé',
    tall: false
  },
  {
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=86',
    title: 'Objets & décoration',
    type: 'Petites séries · Pièces uniques',
    tall: false
  }
]
</script>

<template>
  <section id="creations" class="bg-breddy-sand/45 py-24 md:py-32">
    <div class="breddy-container">
      <div class="flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <div>
          <p class="eyebrow text-breddy-wood">{{ $t('creations.eyebrow') }}</p>
          <h2 class="font-display mt-6 max-w-2xl text-5xl leading-[.95] md:text-7xl">{{ $t('creations.title') }}</h2>
        </div>
        <p class="max-w-sm text-sm leading-7 text-breddy-charcoal/70">{{ $t('creations.description') }}</p>
      </div>

      <div class="mt-14 grid gap-5 md:grid-cols-2">
        <article v-for="(item, index) in items" :key="item.title" class="creation-card group overflow-hidden" :class="index === 0 ? 'md:row-span-2' : ''">
          <div :class="index === 0 ? 'aspect-[4/5]' : 'aspect-[4/3]'" class="relative overflow-hidden bg-breddy-mist">
            <img :src="item.image" :alt="`${item.title} — BREDDY`" class="creation-image h-full w-full object-cover" loading="lazy">
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
            <div class="absolute bottom-0 left-0 right-0 p-6 text-white md:p-8">
              <p class="text-[9px] uppercase tracking-[.2em] text-white/65">{{ item.type }}</p>
              <h3 class="font-display mt-2 text-3xl md:text-4xl">{{ item.title }}</h3>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

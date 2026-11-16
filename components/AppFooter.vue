<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
</script>
<style scoped>
.footer-credit {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 16px;
}
.footer-credit-label {
  font-size: 12px;
  color: #fff;
  font-weight: 500;
}
.ingenium-credit {
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  transition: opacity 0.25s;
}
.ingenium-credit:hover {
  opacity: 0.75;
}
.ingenium-mark img {
  height: 32px;
  width: auto;
}
.ingenium-name {
  font-size: 14px;
  font-weight: 600;
  color: #fff;
}
.ingenium-arrow {
  font-size: 20px;
  line-height: 1;
  color: #48cae4;
}

/* =========================
   INGENIUM CREDIT
========================= */

.ingenium-credit {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;

  transition:
    transform 0.45s cubic-bezier(0.22, 1, 0.36, 1),
    letter-spacing 0.35s ease;
}

.ingenium-credit:hover {
  transform: translateY(-3px) scale(1.035);
  letter-spacing: 0.025em;
}

.ingenium-mark {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  transition:
    transform 0.45s cubic-bezier(0.22, 1, 0.36, 1),
    filter 0.35s ease;
}

.ingenium-credit:hover .ingenium-mark {
  transform: scale(1.15) rotate(-3deg);
  filter: drop-shadow(0 4px 10px rgba(0, 0, 0, 0.2));
}

.ingenium-mark img {
  width: 28px;
  height: 28px;
  object-fit: contain;
  display: block;
}

.ingenium-arrow {
  display: inline-block;

  transition:
    transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
}

.ingenium-credit:hover .ingenium-arrow {
  transform: translate(3px, -3px) scale(1.15);
}

</style>
<template>
  <footer class="bg-breddy-charcoal text-breddy-ivory">
    <div class="breddy-container py-16 md:py-20">
      <div class="grid gap-12 md:grid-cols-[1.2fr_.8fr_.9fr]">
        <div>
          <img :src="useAssetPath('/images/brand/logo-breddy.png')" alt="L’atelier BREDDY Inc." class="h-20 w-20 object-contain brightness-0 invert">
          <p class="mt-6 max-w-md text-sm leading-7 text-breddy-stone">{{ t('footer.description') }}</p>
        </div>

        <div>
          <p class="text-[10px] font-semibold uppercase tracking-[.2em] text-breddy-stone/55">{{ t('footer.explore') }}</p>
          <nav class="mt-5 flex flex-col gap-3 text-sm text-breddy-ivory/75">
            <NuxtLink :to="localePath('/')" class="transition hover:text-breddy-bronze">{{ t('nav.home') }}</NuxtLink>
            <NuxtLink :to="localePath('/bois-epoxy')" class="transition hover:text-breddy-bronze">{{ t('nav.wood') }}</NuxtLink>
            <NuxtLink :to="localePath('/soudure-metal')" class="transition hover:text-breddy-bronze">{{ t('nav.metal') }}</NuxtLink>
            <NuxtLink :to="localePath('/conception-3d')" class="transition hover:text-breddy-bronze">{{ t('nav.threed') }}</NuxtLink>
            <NuxtLink :to="localePath('/contact')" class="transition hover:text-breddy-bronze">{{ t('nav.contact') }}</NuxtLink>
          </nav>
        </div>

        <div>
          <p class="text-[10px] font-semibold uppercase tracking-[.2em] text-breddy-stone/55">{{ t('footer.contact') }}</p>
          <div class="mt-5 space-y-3 text-sm leading-6 text-breddy-ivory/75">
            <p><a href="mailto:breddy.atelier24@gmail.com" class="transition hover:text-breddy-bronze">breddy.atelier24@gmail.com</a></p>
            <p><a href="tel:+15146099234" class="transition hover:text-breddy-bronze">514-609-9234</a></p>
            <p>Granby, Québec</p>
            <p>{{ t('footer.hours') }}</p>
            <div class="flex gap-5 pt-2 text-[10px] font-semibold uppercase tracking-[.18em] text-breddy-bronze">
              <a href="https://www.instagram.com/atelier_breddy/" target="_blank" rel="noopener noreferrer" class="transition hover:text-breddy-ivory">Instagram</a>
              <a href="https://www.facebook.com/61557737175562/" target="_blank" rel="noopener noreferrer" class="transition hover:text-breddy-ivory">Facebook</a>
            </div>
          </div>

          <!-- DEVELOPER CREDIT -->
          <div class="footer-credit transform hover:scale-105 transition">
            <span class="footer-credit-label">
              Website crafted by
            </span>
            <a href="https://www.ingeniumbright.com/fr" target="_blank" rel="noopener noreferrer" class="ingenium-credit" aria-label="IngeniumBright - Technology and Web Development">
              <span class="ingenium-mark">
                <img src="/images/LogoIB.png" alt="IngeniumBright" />
              </span>
              <span class="ingenium-name">
                IngeniumBright
              </span>
              <span class="ingenium-arrow">
                ↗
              </span>
            </a>
          </div>
        </div>
      </div>

      <div class="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-[10px] uppercase tracking-[.14em] text-breddy-stone/45 md:flex-row md:items-center md:justify-between">
        <p>© {{ new Date().getFullYear() }} L’atelier BREDDY Inc. {{ t('footer.rights') }}</p>
        <p>{{ t('footer.tagline') }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const { t } = useI18n()

const form = reactive({
  name: '',
  contact: '',
  project: '',
  message: ''
})

const sent = ref(false)

function submitForm() {
  const subject = `Projet — ${form.name || 'Demande'}`
  const body = [
    `Nom : ${form.name}`,
    `Courriel ou téléphone : ${form.contact}`,
    `Type de projet : ${form.project}`,
    '',
    'Projet :',
    form.message
  ].join('\n')

  window.location.href = `mailto:breddy.atelier24@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  sent.value = true
}
</script>

<template>
  <form class="grid gap-7" @submit.prevent="submitForm">
    <div class="grid gap-7 md:grid-cols-2">
      <label class="field-label">
        <span>{{ t('contact.form.name') }}</span>
        <input v-model="form.name" class="field-input" type="text" required>
      </label>
      <label class="field-label">
        <span>{{ t('contact.form.contact') }}</span>
        <input v-model="form.contact" class="field-input" type="text" required>
      </label>
    </div>

    <label class="field-label">
      <span>{{ t('contact.form.project') }}</span>
      <select v-model="form.project" class="field-input" required>
        <option value="" disabled>{{ t('contact.form.projectPlaceholder') }}</option>
        <option value="Conception & impression 3D">{{ t('contact.form.project3d') }}</option>
        <option value="Soudure & métal">{{ t('contact.form.projectMetal') }}</option>
        <option value="Bois & époxy">{{ t('contact.form.projectWood') }}</option>
        <option value="Autre">{{ t('contact.form.projectOther') }}</option>
      </select>
    </label>

    <label class="field-label">
      <span>{{ t('contact.form.message') }}</span>
      <textarea v-model="form.message" class="field-input min-h-40 resize-y" rows="6" required />
    </label>

    <div class="flex flex-col gap-4 border-t border-breddy-stone/20 pt-6 sm:flex-row sm:items-center sm:justify-between">
      <p class="max-w-xl text-xs leading-6 text-breddy-dark/55">{{ t('contact.form.note') }}</p>
      <button class="inline-flex w-fit items-center bg-breddy-ink px-7 py-4 text-[10px] font-semibold uppercase tracking-[.18em] text-white transition hover:bg-breddy-bronze" type="submit">
        {{ t('contact.form.submit') }}
      </button>
    </div>

    <p v-if="sent" class="text-xs leading-6 text-breddy-dark/60">{{ t('contact.form.afterSubmit') }}</p>
  </form>
</template>

<template>
  <div class="test-view">
    <cc-icon name="Acorn" color="var(--blue-01)" :size="32" />
    <cc-input-number
      v-model="numberValue"
      :rules="rulesNumber"
      ref="InputNumber"
      :min="5"
      :max="10"
      required
      placeholder="teste"
    />

    <cc-input-text
      v-model="textValue"
      :rules="rulesText"
      ref="InputText"
      :min-length="3"
      :max-length="10"
      required
      placeholder="teste"
    />

    <button @click="onClickTest">Testar</button>
  </div>
</template>
<script setup>
import { ref, getCurrentInstance } from 'vue'

const instance = getCurrentInstance()

const numberValue = ref(0)
const rulesNumber = [(value) => value / 2 === 0 || 'Apenas números pares!']

const textValue = ref('')
const rulesText = [(value) => value.toLowerCase() !== 'teste' || 'Não testamos aqui!']

const onClickTest = () => {
  console.log(instance.refs)

  Object.values(instance.refs).forEach((refEl) => {
    if (refEl?.validate) {
      refEl.validate()
    }
  })
}
</script>
<style scoped>
.test-view {
  display: flex;
  gap: 2rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #fff;
  padding: 1rem;
}
</style>

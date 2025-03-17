<template>
  <!-- eslint-disable-next-line vue/attribute-hyphenation -->
  <hello-world .testProp />
  <hello-world .test-prop />
  <hello-world .test-prop.camel />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const testProp = ref('Hello, world! from App.vue')
</script>

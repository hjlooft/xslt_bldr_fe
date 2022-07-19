<script setup lang="ts">
import { ref } from 'vue'

type jsonDoc = {
  name: string;
  children?: jsonDoc[];
  attr?: [{ [key: string]: string }];
  parentNode: jsonDoc | null;
}

const props = defineProps<{
  jsonDoc: jsonDoc,
  lvl: number
}>()

const count = ref(0)
</script>

<template>
  <v-card elevation="2" :style="{ marginLeft: lvl * 30 + 'px' }">
    <v-card-title>{{ jsonDoc.name }}</v-card-title>
    <template v-if="jsonDoc.children">
      <template v-for="child in jsonDoc.children">
        <XmlTag :jsonDoc="child" :lvl="props.lvl + 1"></XmlTag>
      </template>
    </template>
    <v-card>


    </v-card>
  </v-card>


  <!-- <ul :style="{marginLeft: lvl * 30 + 'px'}">
    <li>{{ jsonDoc.name }}</li>
    <ul v-if="jsonDoc.children">
      <li v-for="child in jsonDoc.children">
        <XmlTag :jsonDoc="child" :lvl="props.lvl + 1"></XmlTag>
      </li>
    </ul>
  </ul> -->
</template>

<style scoped>
</style>
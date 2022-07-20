<script setup lang="ts">

//
//import { sax } from './utils/sax.js'
import useSaxXml2JsonDoc from './composables/useSaxXml2JsonDoc.js';
import XmlTagVue from './components/XmlTag.vue';

const { parseXml2Json } = useSaxXml2JsonDoc()

const oDom = parseXml2Json('<docEl id="1">Hello, <who><who-child>world</who-child></who><who>befChild<who-child>world</who-child>afterChild</who>!</docEl>')

</script>

<template>
  <VApp>
    <VMain>
        <div>Xslt Builder</div>

          <XmlTagVue :json-doc="oDom" :lvl="0"></XmlTagVue>
  <!-- <ul>
    <li v-for="child in oDom.children">
      {{ child.name }}
    </li>
  </ul> -->

    </VMain>
  </VApp>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<script>
import { ref } from "vue";
import JsonEditorVue from "../../lib/json-editor.vue";

export default {
  components: { JsonEditorVue },
  setup() {
    const data = ref({ key: "key", value: "value" });

    return {
      data,
    };
  },
};
</script>

<template>
  <JsonEditorVue class="editor" v-model="data" />
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
.editor {
  height: 300px;
  width: 500px;
}
</style>

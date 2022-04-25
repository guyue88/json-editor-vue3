<script>
import { ref } from "vue";
import JsonEditorVue from "../../lib";

export default {
  components: { JsonEditorVue },
  setup() {
    const data = ref({ key: "key", value: "value" });
    const validate = async (editor) => {
      const res = await editor.validate();
      console.log("blur validate", res);
    };

    return {
      data,
      validate,
    };
  },
};
</script>

<template>
  <JsonEditorVue class="editor" v-model="data" @blur="validate" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.editor {
  height: 300px;
  width: 500px;
}
</style>

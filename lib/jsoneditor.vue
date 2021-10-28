<script>
import JsonEditor from "jsoneditor";
import "jsoneditor/dist/jsoneditor.min.css";

export default {
  props: {
    modelValue: Object,
    currentMode: {
      type: String,
      default: "code",
    },
    modeList: {
      type: Array,
      default: ["tree", "code", "form", "text", "view"],
    },
    fullScreen: {
      type: Boolean,
      default: false,
    },
    // en, es zh-CN, pt-BR, tr, ja, fr-FR, de, ru, ko
    language: {
      type: String,
      default: "en",
    },
  },
  data() {
    return {
      editor: null,
      json: this.modelValue,
      expandedModes: ["tree", "view", "form"],
      inChange: false,
    };
  },
  watch: {
    modelValue: {
      immediate: true,
      deep: true,
      handler(val) {
        if (!this.internalChange) {
          this.setEditorContent(val);
          this.$nextTick(() => {
            this.expandAll();
          });
        }
      },
    },
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      const { currentMode, modeList } = this;
      const onChange = () => {
        try {
          const json = this.editor.get();
          this.json = json;
          this.$emit("update:modelValue", json);
          this.$emit("change", json);
          this.internalChange = true;
          this.$nextTick(() => {
            this.internalChange = false;
          });
        } catch (error) {}
      };
      const onModeChange = () => {
        this.expandAll();
      };
      const options = {
        indentation: 2,
        language: this.language,
        mode: currentMode,
        modes: modeList,
        onChange,
        onModeChange,
      };
      this.editor = new JsonEditor(
        document.querySelector(".json-editor-vue"),
        options,
        this.json
      );
    },
    expandAll() {
      if (this.expandedModes.includes(this.editor.getMode())) {
        this.editor?.expandAll();
      }
    },
    setEditorContent(value) {
      this.editor?.set(value);
    },
  },
};
</script>

<template>
  <div class="json-editor-vue"></div>
</template>

<style>
code {
  background-color: #f5f5f5;
}
</style>

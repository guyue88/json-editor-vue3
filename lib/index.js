import JsonEditorVue from "./json-editor.vue";

export default JsonEditorVue;

JsonEditorVue.install = function install(Vue) {
  Vue.component(JsonEditorVue.name, JsonEditorVue);
};

// if (typeof window !== "undefined" && window.Vue) {
//   window.Vue.component(JsonEditorVue.name, JsonEditorVue);
// }

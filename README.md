# json-editor-vue3

基于 `jsoneditor` 开发的vue3 json editor，支持全屏编辑。

<img src="./github/screenshot.png" style="width: 500px" />

## 安装

```bash
npm install json-editor-vue3
```

## 使用

### 全局引入

```javascript
import Vue from 'vue'
import JsonEditorVue from 'json-editor-vue3'

Vue.use(JsonEditorVue)
```

### 组件引入

```javascript
import JsonEditorVue from 'json-editor-vue3'

export default {
  name: 'app',
  components: {
    JsonEditorVue
  },
  data() {
    return {
      data: {
        "hello": "vue"
      }
    }
  },
  methods: {}
}
```

### 模板使用

```html
<json-editor-vue class="editor" v-model="data" />
```

### 参数

| Name | Type | Description | Default | 
| ---- | ---- | ----------- | ------- |
| modelValue | Object | 要编辑的json值 |  |
| options | Object | jsoneditor的options，参考[configuration-options](https://github.com/josdejong/jsoneditor/blob/master/docs/api.md#configuration-options) |  |
| currentMode | String | 当前编辑模式 | code |
| modeList | Array | 可选的编辑模式列表 | ["tree", "code", "form", "text", "view"] |
| language | Array | 语言 | en |


### 事件

| Name  | Description    |
| ----- | -------------- |
| update:modelValue | json 更新 |
| change | json 更新 |

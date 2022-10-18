<template>
    <div class="new-radio-group">
      <slot></slot>
    </div>
  </template>
<script>
export default {
  name: 'newRadioGroup',
  provide () {
    return {
      RadioGroup: this
    }
  },
  props: {
    // 组件接收到了value值，我们需要触发这个组件的input事件
    // provide (祖组件提供)与 inject(任意孙组件注入)  用来做子或祖孙之间得组件通讯
    value: null
  }
}
</script>

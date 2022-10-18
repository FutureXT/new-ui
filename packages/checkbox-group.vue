<template>
  <div class="new-checkbox-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'newCheckboxGroup',
  provide () {
    return {
      CheckboxGroup: this
    }
  },
  props: {
    value: {
      type: Array
    }
  }
}
</script>

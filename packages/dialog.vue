<template>
  <transition name='dialog-fade'>
    <!-- gray mask -->
    <div
      class="new-dialog__wrapper"
      v-show="visible"
      @click.self="_handleClose"
    >
      <!-- real content -->
      <div
        class="new-dialog"
        :style="{width:width,marginTop:top}"
      >
        <!-- header -->
        <div class="new-dialog__header">
          <slot name="title">
            <!-- default title content -->
            <span class="new-dialog__title">
              {{title}}
            </span>
          </slot>
          <span
            class="new-dialog__headerbtn"
            @click.self="_handleClose"
          >x</span>
        </div>
        <!-- body -->
        <div class="new-dialog__body">
          <slot></slot>
        </div>
        <!-- footer -->
        <div
          class="new-dialog__footer"
          v-if="$slots.footer"
        >
          <slot name="footer">
          </slot>
        </div>
      </div>
    </div>
  </transition>

</template>

<script>
export default {
  name: 'newDialog',
  props: {
    title: {
      type: String,
      default: '提示'
    },
    width: {
      type: String,
      default: '50%'
    },
    top: {
      type: String,
      default: '15vh'
    },
    footer: {
      type: Object
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    _handleClose () {
      this.$emit('update:visible', false)
    }
  }
}
</script>

<style lang='scss' scoped>
/*
  scoped add a random attribute like data-v-xxx to all elememt
  and add this attribute to style
  如果想通过这个style去改变其他组件的内容可以用 ::v-deep方法 例如下面的写法 或者去掉scoped
*/
.new-dialog__wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background-color: rgba(0, 0, 0, 0.5);
  .new-dialog {
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    width: 30%;
    &__header {
      padding: 20px 20px 10px;
      .new-dialog__title {
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .new-dialog__headerbtn {
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
      }
    }
    &__body {
      padding: 20px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    &__footer {
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      /* see the vue-loader doc  */
      // 深度选择器 在scss中是::v-deep 在less中是/deep/  css中的是>>>
      ::v-deep .new-button:first-child {
        margin-right: 20px;
      }
    }
  }
}
.dialog-fade-enter-active {
  animation: fade 0.5s;
}
.dialog-fade-leave-active {
  animation: fade 0.2s reverse;
}
@keyframes fade {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

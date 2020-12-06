<template>
  <component
    :is="to ? 'router-link' : tag"
    :to="to"
    :tag="to && tag"
    :class="[`btn-${type}`, `btn-${size}`]"
    :disabled="disabled"
    :style="{
      minWidth,
    }"
    @click="$emit('click')"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: 'KButton',

  props: {
    type: {
      type: String,
      default: 'filled',
      validator(value) {
        return /^(filled|outlined)$/.test(value);
      },
    },
    size: {
      type: String,
      default: 'medium',
      validator(value) {
        return /^(medium|small)$/.test(value);
      },
    },
    disabled: Boolean,
    minWidth: {
      type: String,
      default: '100px',
    },
    to: {
      type: String,
      default: null,
    },
    tag: {
      type: String,
      default: 'button',
    },
  },
};
</script>

<style lang="scss" scoped>
a,
button {
  display: inline-block;
  font-size: 16px;
  height: 44px;
  min-width: 100px;
  padding: 0 30px;

  &.btn-filled {
    background-color: #01b4d0;
    color: white;
    &:not([disabled]):hover {
      background-color: darken(#01b4d0, 5);
    }
  }

  &.btn-outlined {
    background-color: #fff;
    border: 1px solid #01b4d0;
    color: #01b4d0;
    &:not([disabled]):hover {
      background-color: mix(#01b4d0, #fff, $weight: 7%);
    }
  }

  &[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &.btn-small {
    height: 30px;
  }
}
</style>

<template>
  <div class="form-group">
    <label :for="id"> {{ labelText }} </label>
    <input
      :id="id"
      :class="['form-control', color]"
      :value="value"
      :type="type"
      :placeholder="placeholder"
      @input="$emit('input', $event.target.value)"
    />
    <transition name="fade">
      <small v-if="errors">{{ errors }}</small>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: [String, Number],
      default: '',
    },

    type: {
      type: String,
      default: 'text',
    },
    close: {
      type: Boolean,
      default: false,
    },
    id: {
      type: String,
      default: '',
    },
    labelText: {
      type: String,
      default: null,
    },
    placeholder: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: '',
    },
    errors: {
      type: String,
      default: '',
    },
  },
  emits: ['input'],
};
</script>

<style scoped lang="scss">
.form-group {
  position: relative;
  .button {
    position: absolute;
    right: 11.5px;
    top: 50%;
    transform: translateY(-50%);
  }
}
.form-control {
  font-family: "Roboto";
  width: 100%;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  height: 32px;
  padding: 0 12px;
  &[type="number"] {
    text-align: center;
  }
  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
  }
}
small {
  color: red;
  display: inline-block;
  font-size: 12px;
  position: absolute;
  bottom: -17px;
  z-index: 30;
  left: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

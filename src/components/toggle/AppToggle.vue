<template>
  <div class="toggle">
    <div class="form-group">
      <input
        id="radio-1"
        type="radio"
        value="row"
        :checked="modelValue === 'row'"
        name="toggle"
        @change="$emit('change', $event.target.value)"
      />
      <label for="radio-1">
        <AppIcon name="IconTypeCol" />
      </label>
    </div>
    <div class="form-group">
      <input
        id="radio-2"
        type="radio"
        :checked="modelValue === 'col'"
        value="col"
        name="toggle"
        @change="$emit('change', $event.target.value)"
      />
      <label for="radio-2">
        <AppIcon name="IconTypeRow" />
      </label>
    </div>
  </div>
</template>

<script>
import AppIcon from '../ui/AppIcon/AppIcon.vue';

export default {
  components: {
    AppIcon,
  },

  model: {
    prop: 'modelValue',
    event: 'change',
  },
  props: {
    modelValue: { type: String, default: 'row' },
  },
  emits: ['change'],
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.toggle {
  display: flex;
  align-items: center;
  border: 1px solid $gray-color;
  border-radius: 5px;

  input {
    display: none;

    &:checked ~ label {
      background: #e5e9ec;
    }
  }

  .form-group {
    width: 40px;
    height: 40px;
    overflow: hidden;

    &:first-child {
      border-right: 1px solid $gray-color;
      border-radius: 5px 0 0 5px;
    }

    &:last-child {
      border-left: 1px solid $gray-color;
      border-radius: 0px 5px 5px 0px;
    }
  }

  label {
    width: 100%;
    height: 100%;
    transition: all 0.2s linear;
    display: block;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: $white-color;
  }
}
</style>

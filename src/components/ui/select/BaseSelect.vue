<template>
  <div class="custom-select" :class="type" :tabindex="tabindex" @blur="open = false">
    <div class="selected" :class="{ open: open }" @click="open = !open">
      {{ selected?.text }}
      <AppIcon name="IconArrowDown" />
    </div>
    <div class="items" :class="{ selectHide: !open }">
      <div v-for="(option, i) of options" :key="i" @click="setSelectValue(option)">
        {{ option.text }}
        <AppIcon v-if="option.icon" :name="option.icon" />
      </div>
    </div>
  </div>
</template>

<script>
import AppIcon from '../AppIcon/AppIcon.vue';

export default {
  components: {
    AppIcon,
  },
  props: {
    options: {
      type: Array,
      required: true,
    },
    active: {
      type: [Object, null],
      default: null,
    },
    type: {
      type: String,
      required: true,
      validator(val) {
        return ['sort-select', 'filter-select'].includes(val);
      },
    },

    tabindex: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  emits: ['onClick'],
  data() {
    return {
      selected: this.active ? this.active : this.options[0],
      open: false,
    };
  },
  methods: {
    setSelectValue(option) {
      this.selected = option;
      this.open = false;
      this.$emit('update:select', option);
    },
  },
};
</script>

<style scoped lang="scss">
.custom-select {
  position: relative;
  width: 100%;
  text-align: left;
  outline: none;
  height: 32px;
  line-height: 31px;
  max-width: 100%;
  width: 100%;
  &.sort-select {
    max-width: 232px;
    .selected {
      color: $black-color;
      font-weight: 700;
    }
  }
}

.custom-select .selected {
  padding-left: 1em;
  border: 1px solid #d9d9d9;
  cursor: pointer;
  user-select: none;
  font-weight: 400;
  height: 100%;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  width: 100%;
  align-items: center;
  padding-right: 35px;
  position: relative;
  color: $gray-color5;
  border-radius: 2px;
  svg {
    position: absolute;
    right: 13.5px;
    z-index: 1;
    transition: all 0.3s ease;
  }
}

.custom-select .selected.open {
  border-radius: 6px 6px 0px 0px;
  svg {
    transform: rotate(180deg);
  }
}

.custom-select .items {
  border-radius: 0px 0px 6px 6px;
  overflow: hidden;
  background-color: $white-color;
  border-right: 1px solid #e0e5e6;
  border-left: 1px solid #e0e5e6;
  border-bottom: 1px solid #e0e5e6;
  position: absolute;
  left: 0;
  right: 0;
  top: 100%;
  transition: all 0.3s ease;
  z-index: 1;
}

.custom-select .items div {
  padding-left: 1em;
  cursor: pointer;
  user-select: none;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 17px;
  &:not(:last-child) {
    border-bottom: 1px solid #e0e5e6;
  }
}

.custom-select .items div:hover {
  background-color: rgba(237, 232, 245, 0.5);
}

.selectHide {
  visibility: hidden;
  opacity: 0;
}
</style>

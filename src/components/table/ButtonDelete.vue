<template>
  <div v-click-outside="reset" class="delete" :class="{ visible: visible }" @click="open">
    <AppIcon class="icon-dots" name="IconDots" />
    <button class="delete-button" @click="$emit('onClickDelete')">
      <AppIcon name="IconTrash" />
      <span>Удалить</span>
    </button>
  </div>
</template>

<script>
import AppIcon from '../ui/AppIcon/AppIcon.vue';

export default {
  components: {
    AppIcon,
  },
  inject: ['activeButtons'],
  emits: ['onClickDelete', 'onKeyDown'],

  data() {
    return {
      active: false,
      index: null,
    };
  },

  computed: {
    visible() {
      return this.index === this.activeButtons.active;
    },
  },
  created() {
    this.index = this.activeButtons.count++;
  },
  methods: {
    open() {
      if (this.visible) {
        this.activeButtons.active = null;
      } else {
        this.activeButtons.active = this.index;
      }
    },
    reset() {
      if (this.visible) {
        this.activeButtons.active = null;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.delete {
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    fill: #647a8c;
  }
  &.visible {
    .icon-dots {
      fill: $blue-color;
    }
    .delete-button {
      visibility: visible;
      opacity: 1;
    }
  }
}
.delete-button {
  position: absolute;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(182, 182, 182, 0.25);
  border-radius: 2px;
  width: 148px;
  text-align: left;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
  right: 13px;
  top: 30px;
  z-index: 1;

  visibility: hidden;
  opacity: 0;

  span {
    margin-left: 12px;
  }
  svg {
    fill: $gray-color;
  }
  &:hover {
    color: $blue-color;
    svg {
      fill: $blue-color;
    }
  }
}
</style>

<template>
  <component :is="loadIcon" />
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  computed: {
    loadIcon() {
      return () => import(`../icons/${this.name}.vue`);
    },
  },
};
</script>

<style scoped lang="scss"></style>

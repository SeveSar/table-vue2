<template>
  <div class="main-table">
    <component :is="currentTable" :rows="rows" :columns="columns" @delete-item="onDeleteItem" />
  </div>
</template>

<script>
const typeTable = {
  row: 'TableDefault',
  col: 'TableCard',
};
export default {
  components: {
    TableDefault: () => import('./type/TableDefault.vue'),
    TableCard: () => import('./type/TableCard.vue'),
  },
  provide() {
    return {
      activeButtons: this.activeButtons,
    };
  },
  props: {
    type: {
      type: String,
      default: 'row',
    },
    rows: {
      type: Array,
      default: () => [
        {
          text: 'ID',
          value: 0,
        },
        {
          text: 'Номер накладной',
          value: 1,
        },
        {
          text: 'Тип заказа',
          value: 2,
        },
        {
          text: 'Дата создания',
          value: 3,
        },
        {
          text: '',
          value: 4,
        },
      ],
    },
    columns: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      activeButtons: {
        active: null,
        count: 0,
      },
    };
  },
  computed: {
    currentTable() {
      return typeTable[this.type];
    },
  },

  methods: {
    onDeleteItem(item) {
      this.$store.commit('deleteItem', item.id);
    },
  },
};
</script>

<style lang="scss" scoped></style>

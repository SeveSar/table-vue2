<template>
  <table class="fl-table">
    <thead>
      <tr>
        <th v-for="row in rows" :key="row.value">{{ row.text }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="col in columns" :key="col.id">
        <td>{{ col.id }}</td>
        <td>{{ col.number }}</td>
        <td>{{ col.type.text }}</td>
        <td>{{ col.creationDate }}</td>

        <td class="delete">
          <ButtonDelete @onClickDelete="$emit('delete-item', col)" />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import ButtonDelete from '../ButtonDelete.vue';

export default {
  name: 'TableDefault',

  components: {
    ButtonDelete,
  },
  props: {
    rows: {
      type: Array,
      required: true,
    },
    columns: {
      type: Array,
      required: true,
    },
  },
  emits: ['delete-item'],
};
</script>

<style lang="scss" scoped>
.table-wrapper {
  border: 1px solid $gray-color2;
  margin: 10px 70px 70px;
  box-shadow: 0px 35px 50px rgba(0, 0, 0, 0.2);
}

.fl-table {
  border-radius: 5px;
  font-family: 'Roboto';
  border: none;
  border-collapse: collapse;
  width: 100%;
  max-width: 100%;
  white-space: nowrap;
  background-color: white;
}

.fl-table td,
.fl-table th {
  text-align: center;
  padding: 11.5px 10px;
  color: $black-color;
  font-size: 14px;
}

.fl-table td {
  font-weight: 400;
  background-color: $white-color;

  &.delete {
    padding: 0;
    .delete {
      padding: 11.5px 10px;
    }
  }
}

.fl-table thead th {
  background: $gray-color2;
  margin: 0 2px;
  font-weight: 700;
}

.fl-table tr {
  border-bottom: 1px solid $gray-color2;
}

/* Responsive */
</style>

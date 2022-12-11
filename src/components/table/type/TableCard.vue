<template>
  <div class="card-table">
    <div class="card-table__grid">
      <div v-for="col in columns" :key="col.id" class="card-table__col">
        <div class="card-table__item item-card">
          <div class="item-card__header">
            <div class="item-card__id">{{ col.id }}</div>
            <div class="item-card__del">
              <ButtonDelete @onClickDelete="$emit('delete-item', col)" />
            </div>
          </div>
          <div class="item-card__body item-info">
            <div class="item-info__row">
              <div class="item-info__caption">Номер накладной:</div>
              <div class="item-info__value">{{ col.number }}</div>
            </div>
            <div class="item-info__row">
              <div class="item-info__caption">Тип заказа:</div>
              <div class="item-info__value">{{ col.type.text }}</div>
            </div>
            <div class="item-info__row">
              <div class="item-info__caption">Дата создания:</div>
              <div class="item-info__value">{{ col.creationDate }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
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
.card-table {
  color: $black-color;
  font-weight: 400;
  font-size: 14px;
  font-family: 'Roboto';
  line-height: 16px;
  &__grid {
    display: grid;
    grid-template-columns: repeat(3, calc(100% / 3));
    grid-template-rows: auto;
    gap: 16px;
  }
  &__col {
    display: flex;
    flex-direction: column;
  }
  .delete {
    width: 30px;
    height: 30px;
  }
}
.item-card {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  &__body {
    flex-grow: 1;
  }
  &__header {
    height: 40px;
    padding: 13px 5px 10px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: rgba($gray-color3, 0.5);
  }
}
.item-info {
  background-color: $white-color;
  padding: 8px 16px;

  &__row {
    text-align: left;
    display: grid;
    grid-template-columns: 123px 85px;
    // justify-content: flex-end;
    justify-content: center;
    grid-template-rows: auto;
    row-gap: 8px;
    column-gap: 8px;
    &:not(:last-child) {
      margin-bottom: 8px;
    }
  }
  &__caption {
    color: $gray-color;
    font-weight: 700;
  }
  &__value {
    justify-self: flex-start;
  }
}
</style>

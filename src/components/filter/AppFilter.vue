<template>
  <div class="filter">
    <div class="filter__header">
      <h3 class="filter__title">Фильтр</h3>
    </div>
    <div class="filter__controls">
      <div class="filter__group">
        <label for="number"> Номер накладной: </label>
        <BaseInput v-model="filter" placeholder="Введите фрагмент" />
      </div>
      <div class="filter__group">
        <label for="type-order"> Тип заказа: </label>
        <BaseSelect
          id="type-order"
          :active="select"
          :options="selectOptions"
          type="filter-select"
          @update:select="setSelect"
        />
      </div>
    </div>
    <div class="filter__clear" v-if="activeFilter">
      <button @click="$emit('clear-filter')">Очистить фильтр</button>
    </div>
  </div>
</template>

<script>
import BaseSelect from '@/components/ui/select/BaseSelect.vue';
import BaseInput from '../ui/BaseInput.vue';

export default {
  components: {
    BaseSelect,
    BaseInput,
  },
  props: {
    selectOptions: {
      type: Array,
      required: true,
    },
    initialFilters: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      filter: this.initialFilters.filterNumber,
      select: this.initialFilters.filterType || { text: 'Выберите из списка', value: 0 },
    };
  },

  watch: {
    filterChanging(value) {
      this.$emit('update:filters', value);
    },
    initialFilters(filtersObject) {
      const { filterNumber, filterType } = filtersObject;
      this.filter = filterNumber;
      this.select = filterType;
    },
  },
  methods: {
    setSelect(value) {
      this.select = value;
    },
  },
  computed: {
    activeFilter() {
      return this.select.value || this.filter;
    },
    filterChanging() {
      const { select, filter } = this;
      return {
        select,
        filter,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.filter {
  width: 280px;
  background-color: $white-color;
  box-shadow: 0 0 15px rgba($black-color, 0.1);
  &__title {
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
  }
  &__header {
    border-bottom: 1px solid $gray-color4;
    padding: 8px 16px;
  }
  label {
    font-weight: 700;
    font-size: 14px;
    display: inline-block;
    line-height: 16px;
    margin-bottom: 4px;
  }
  &__controls {
    padding: 16px;
  }
  &__group {
    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }
  &__clear {
    padding: 0px 16px 16px 16px;
    text-align: center;
  }
}
</style>

<template>
  <div class="data-page">
    <div class="data-page__row">
      <div class="data-page__filter">
        <AppFilter
          @clear-filter="clearFilter"
          :initialFilters="filters"
          @update:filters="updateFilters"
          :select-options="selectFilterOptions"
        />
      </div>
      <div class="data-page__data">
        <div class="data-page__sort sort">
          <div class="sort__select">
            <BaseSelect
              @update:select="updateSortNumber"
              :active="sortNumber"
              :options="selectSortOptions"
              type="sort-select"
            />
          </div>
          <div class="table-type">
            <AppToggle v-model="typeTable" />
          </div>
        </div>
        <AppTable :type="typeTable" :columns="filteredColumns" />
      </div>
    </div>
  </div>
</template>

<script>
import AppTable from '@/components/table/AppTable.vue';
import AppFilter from '@/components/filter/AppFilter.vue';
import BaseSelect from '@/components/ui/select/BaseSelect.vue';
import AppToggle from '@/components/toggle/AppToggle.vue';

export default {
  components: {
    AppToggle,
    AppTable,
    AppFilter,
    BaseSelect,
  },

  data() {
    return {
      typeTable: 'row',
      selectFilterOptions: [
        { text: 'Самовывоз', value: 1 },
        { text: 'Курьерская доставка', value: 2 },
        { text: 'Доставка в пункт выдачи', value: 3 },
      ],
      selectSortOptions: [
        { text: 'Номер накладной', value: 'asc', icon: 'IconArrowSortUp' },
        { text: 'Номер накладной', value: 'desc', icon: 'IconArrowSortDown' },
      ],
      filters: {
        filterNumber: '',
        filterType: { text: 'Выберите из списка', value: 0 },
      },
      sortNumber: { text: 'Сортировка', value: 0 },
    };
  },
  async created() {
    await this.$store.dispatch('getData');
  },
  methods: {
    updateFilters(filtersObject) {
      this.filters = {
        filterNumber: filtersObject.filter,
        filterType: filtersObject.select,
      };
    },
    updateSortNumber(sortObj) {
      this.sortNumber = sortObj;
    },
    clearFilter() {
      this.filters = {
        filterNumber: '',
        filterType: { text: 'Выберите из списка', value: 0 },
      };
    },
  },
  computed: {
    filteredColumns() {
      let array = this.$store.state.data;
      const { filterNumber, filterType } = this.filters;
      if (filterType.value || filterNumber) {
        array = array.filter((item) => {
          if (filterType.value && filterNumber) {
            return (
              item.type.value === filterType.value &&
              item.number.toLowerCase().includes(filterNumber.toLowerCase())
            );
          }
          if (filterType.value) {
            return item.type.value === filterType.value;
          }
          if (filterNumber) {
            return item.number.toLowerCase().includes(filterNumber.toLowerCase());
          }
          return true;
        });
      }
      if (this.sortNumber.value) {
        array = array.sort((a, b) => {
          if (this.sortNumber.value === 'asc') {
            return ('' + a.number).localeCompare(b.number);
          } else if (this.sortNumber.value === 'desc') {
            return ('' + b.number).localeCompare(a.number);
          }
        });
      }

      return array;
    },
  },
};
</script>

<style lang="scss" scoped>
.data-page {
  &__row {
    display: flex;
  }
  &__data {
    flex-grow: 1;
    margin-left: 16px;
  }
}
.sort {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  &__select {
    background-color: $white-color;
    padding: 16px;
    border-radius: 3px;
    flex-grow: 1;
    margin-right: 16px;
  }
}
</style>

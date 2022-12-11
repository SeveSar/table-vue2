const localeTypeOrder = {
  pickup: { value: 1, text: 'Самовывоз' },
  delivery: { value: 2, text: 'Курьерская доставка' },
  'pick-point': { value: 3, text: 'Доставка в пункт выдачи' },
};

export default function localeData(key) {
  return localeTypeOrder[key] ? localeTypeOrder[key] : '';
}

module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'plugin:import/recommended',
    'plugin:import/javascript',
    'plugin:vue/vue3-recommended',
    '@vue/prettier',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  settings: {
    'import/core-modules': ['vue', 'vuex'],

    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
      'no-param-reassign': 0,
    },
  },
};

module.exports = {
  root: true,

  env: {
    browser: true,
    node: true
  },

  plugins: [],

  // add your custom rules here
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  },

  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'prettier',
    'plugin:vue/essential',
    'eslint:recommended'
  ],

  parserOptions: {
    ecmaVersion: 2020
  }
}

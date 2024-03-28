module.exports = {
  root: true,
  extends: ['plugin:vue/vue3-recommended', 'plugin:prettier/recommended'],
  plugins: ['simple-import-sort', 'import', 'unused-imports'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      // Allows for the parsing of JSX
      jsx: true,
    },
  },
  rules: {
    'prettier/prettier': 'warn',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // 将 Vue 文件的引入放在最前面
          ['^vue$'],
          // 导入的包
          ['^[^@\\.]'],
          // @ 开头的模块引入
          ['^@'],
          // 其他类型的引入按照默认排序规则处理
          ['^\\u0000'],
          // 相对路径的引入
          ['^\\.'],
          // 样式文件的引入
          ['^.+\\.s?css$'],
        ],
      },
    ],
    'simple-import-sort/exports': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'unused-imports/no-unused-imports': 'warn',
    'vue/multi-word-component-names': 'off',
  },
}

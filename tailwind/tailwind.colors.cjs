const colors = require('tailwindcss/colors')

module.exports = {
  ...colors,

  // todo: with the following code you can use element colors
  primary: 'var(--el-color-primary)',
  success: 'var(--el-color-success)',
  warning: 'var(--el-color-warning)',
  danger: 'var(--el-color-danger)'
}

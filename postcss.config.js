module.exports = {
  // width是相对于375宽度屏幕的width
  plugins: {
    'autoprefixer': {},
    'postcss-pxtorem': {
      rootValue: 75,
      propList: ['*'],
      selectorBlackList:['van']
    }
  }
}

<template>
  <div class="theme-track--footer">
    <p v-if="$themeConfig.footer" v-html="$themeConfig.footer"></p>
    <p>
    Powered by vuepress theme <a href="" target="_blank">Track</a>.
    Inspired by <a href="" target="_blank">yubisaki</a>
    </p>
  </div>
</template>

<style lang="stylus">
  {$theme}
    &footer
      padding 2em 0.5em
      background $darkBgColor
      border-top 1px solid $borderColor
      text-align center
      font-size px2rem(10px)
      color $viceTextColor
      font-weight 200
      > p
        margin 0
        & + p
          margin-top 0.5em
</style>
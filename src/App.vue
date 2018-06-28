<template>
  <div id="app">
    <div class="header">
      <v-header></v-header>
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
    <div class="foot">
      <pswp></pswp>
      <v-footer></v-footer>
    </div>
  </div>
</template>

<script>
import vheader from '@/components/header'
import vfooter from '@/components/footer'
import pswp from '@/components/pswp'
export default {
  name: 'app',
  components: {
    'v-header': vheader,
    'v-footer': vfooter,
    pswp
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
html
  width 100%
  height 100%
  overflow hidden
  body
    width 100%
    height 100%
    display flex
    #app
      flex 1
      background: url('./assets/title_bg.gif');
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: #2c3e50;
      display flex
      flex-direction column
      .header
        height 40px
      .main
        flex 1
        overflow auto
      .foot
        height 40px

</style>

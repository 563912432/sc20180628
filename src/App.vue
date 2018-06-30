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
  },
  created () {
    // this.initQYear()
    this.initLYear()
  },
  methods: {
    initLYear () {
      let yearl = localStorage.getItem('year')
      if (this.$store.state.year === '' && yearl !== '') {
        this.$store.commit('setYear', yearl)
      }
    },
    initQYear () {
      let params = this.getQueryString()
      let year = (params['year'] ? params['year'] : '2017')
      this.$store.commit('setYear', year)
    },
    getQueryString () {
      let str = location.search
      let theRequest = {}
      if (str.indexOf('?') !== -1) {
        str = str.substr(1)
        let strs = str.split('&')
        for (let i = 0; i < strs.length; i++) {
          theRequest[strs[i].split('=')[0]] = unescape(strs[i].split('=')[1])
        }
      }
      return theRequest
    }
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

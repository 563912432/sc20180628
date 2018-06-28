<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="updatetime">更新于 2017-04-14</div>
    <div class='enter' @click='enter'>
      <mt-button size='normal' plain>立即进入</mt-button>
    </div>
    <div class="footer">我的实务 版权所有</div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: '会计实操图书配套答案'
    }
  },
  methods: {
    enter () {
      this.$router.push({path: 'pz'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='stylus' rel='stylesheet/stylus'>
  .hello
    position absolute
    width 100%
    height 100%
    background url('../assets/title_bg.gif')
    z-index 100
    top 0
    h1
      text-align center
      font-size 2rem
      margin-top 100px
    .updatetime
      margin-top 15px
      color #ccc
      text-align center
    .enter
      position absolute
      bottom 100px
      left 0
      right 0
      text-align center
    .footer
      width 100%
      position absolute
      bottom 0
      text-align center
      padding 10px
      font-size 12px
</style>

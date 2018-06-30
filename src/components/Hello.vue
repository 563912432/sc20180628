<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="updatetime">更新于 2017-04-14</div>
    <div class='enter' @click='select'>
      <mt-button size='normal' plain>立即进入</mt-button>
    </div>
    <div class="footer">我的实务 版权所有</div>
    <mt-popup v-model="popupVisible" class="popup" position="top">
      <div class="page-popup-wrapper">
        <button v-for="item in years" @click="enter2(item.value)" class="mint-button mint-button--default mint-button--large"><label class="mint-button-text">{{item.name}}</label></button>
      </div>
    </mt-popup>
  </div>
</template>

<script>
  import { Popup } from 'mint-ui'
  export default {
    name: 'hello',
    components: {
      Popup
    },
    data () {
      return {
        msg: '会计实操图书配套答案',
        // action sheet 默认不显示，为false。操作sheetVisible可以控制显示与隐藏
        years: [
          {'name': '2017年', 'value': '2017'},
          {'name': '2018年', 'value': '2018'}
        ],
        popupVisible: false
      }
    },
    methods: {
      select () {
        this.popupVisible = true
      },
      enter () {
        this.$router.push({path: '/pz'})
      },
      enter2 (year) {
        if (year) {
          this.$store.dispatch('setYearLocal', year)
        }
        this.enter()
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
    .page-popup-wrapper {
      padding: 0 20px;
      top: 50%;
      position: absolute;
      width: 100%;
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
    }
    .popup {
      width: 100%;
      height: 100%;
      background: transparent;
    }
    .popup button {
      margin-bottom: 20px;
    }
</style>

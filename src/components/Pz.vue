<template>
  <div class="pz">
    <div class="pz-list">
      <div class="list">
        <span v-for='item in pzList' :key="item.id" @click='showDetail(item.id)'>
          {{ item.title }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import PhotoSwipe from 'photoswipe'
import PhotoSwipeUIDefault from 'photoswipe/dist/photoswipe-ui-default'
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'
import { Indicator, MessageBox } from 'mint-ui'
import { COMMON_ACTION } from '../mixins'

export default {
  mixins: [COMMON_ACTION],
  name: 'Pz',
  components: {
    Indicator
  },
  computed: {
    pzList () {
      return this.$store.state.pzList
    }
  },
  methods: {
    get () {
      Indicator.open({
        text: '加载中…',
        spinnerType: 'snake'
      })
      this.$store.dispatch('getList', {
        name: 'pzList',
        type: 1,
        error: function () {
          Indicator.close()
          MessageBox('抱歉', '数据异常，请稍后重试')
        }
      })
    },
    showDetail (id) {
      var index = 0
      for (var i = 0; i < this.$store.state.images.length; i++) {
        if (this.$store.state.images[i].id === id) {
          index = i
        }
      }
      var pswpElement = document.querySelectorAll('.pswp')[0]
      var options = {
        index: index // start at first slide
      }
      var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUIDefault, this.$store.state.images, options)
      gallery.init()
    }
  },
  watch: {
    pzList (newValue, oldValue) {
      Indicator.close()
      this.setImages(newValue)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel='stylesheet/stylus'>
.pz
  display flex
  flex-direction column
  .pz-list
    overflow auto
    padding 10px
    flex 1
    .list
      display flex
      flex-flow row wrap
      align-content flex-start
      span
        flex: 0 0 23%;
        padding 10px 0
        box-sizing border-box
        margin: 1%
        border 1px solid #ddd
        text-align center
</style>

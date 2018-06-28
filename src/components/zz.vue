<template>
  <div class="zz">
    <div class="zz-list">
      <div class="list">
        <mt-cell v-for="(item, index) in zzList" :key="item.id" :title="item.title">
          <span @click='showDetail(item.id)'>点击查看</span>
        </mt-cell>
      </div>
    </div>
  </div>
</template>

<script>
import { Indicator, Cell, MessageBox } from 'mint-ui'
import PhotoSwipe from 'photoswipe'
import PhotoSwipeUIDefault from 'photoswipe/dist/photoswipe-ui-default'
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'
import { COMMON_ACTION } from '../mixins'

export default {
  mixins: [COMMON_ACTION],
  name: 'zz',
  components: {
    Indicator,
    Cell
  },
  computed: {
    zzList () {
      return this.$store.state.zzList
    }
  },
  methods: {
    get () {
      Indicator.open({
        text: '加载中…',
        spinnerType: 'snake'
      })
      this.$store.dispatch('getList', {
        name: 'zzList',
        type: 4,
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
    zzList (newValue, oldValue) {
      Indicator.close()
      this.setImages(newValue)
    }
  }
}
</script>

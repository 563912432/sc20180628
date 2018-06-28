<template>
  <div class="footer">
    <mt-tabbar v-model="selected">
      <mt-tab-item id="1">
        <i style='display:block' class="icon iconfont icon-duizhangmingxi"></i>
        记账凭证
      </mt-tab-item>
      <mt-tab-item id="2">
        <i style='display:block' class="icon iconfont icon-zhangdan"></i>
        T型账
      </mt-tab-item>
      <mt-tab-item id="3">
        <i style='display:block' class="icon iconfont icon-lurupingzheng"></i>
        明细账
      </mt-tab-item>
      <mt-tab-item id="4">
        <i style='display:block' class="icon iconfont icon-mingxizhang2"></i>
        总账
      </mt-tab-item>
      <mt-tab-item id="5">
        <i style='display:block' class="icon iconfont icon-zongzhangchaxun"></i>
        财务报表
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
import { Tabbar, TabItem } from 'mint-ui'
export default {
  name: 'vfooter',
  data () {
    return {
      selected: '1'
    }
  },
  components: {
    Tabbar, TabItem
  },
  watch: {
    selected (newIndex, oldIndex) {
      newIndex = +newIndex
      switch (newIndex) {
        case 1:
          this.$router.push({path: 'pz'})
          this.$store.commit('setFootNav', '记账凭证')
          break
        case 2:
          this.$router.push({path: 'txz'})
          this.$store.commit('setFootNav', 'T型账')
          break
        case 3:
          this.$router.push({path: 'mxz'})
          this.$store.commit('setFootNav', '明细账')
          break
        case 4:
          this.$router.push({path: 'zz'})
          this.$store.commit('setFootNav', '总账')
          break
        case 5:
          this.$router.push({path: 'cwbb'})
          this.$store.commit('setFootNav', '财务报表')
          break
      }
    }
  }
}
</script>

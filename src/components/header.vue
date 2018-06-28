<template>
  <mt-header :title="footNav">
  <router-link to="/" slot="left">
    <mt-button icon="back">返回</mt-button>
  </router-link>
</mt-header>
</template>

<script>
import {Header} from 'mint-ui'
import { mapState } from 'vuex'
export default {
  name: 'vheader',
  computed: {
    ...mapState(['footNav'])
  },
  components: {
    'mt-header': Header
  }
}
</script>

<!-- Created by anyc on 2018-12-10. 程序主体 -->
<template>
  <div class="ChessBoard"
    flex="main:center cross:center">
    <ChessBox></ChessBox>
    <SideBar></SideBar>
  </div>
</template>

<script>
import ChessBox from '@/components/ChessBox'
import SideBar from '@/components/SideBar'

export default {
  name: 'ChessBoard',
  components: {
    ChessBox,
    SideBar
  },
  data () {
    return {
      // data
    }
  }
}
</script>

<style lang="less">
.ChessBoard {
  height: 100%;
}
</style>

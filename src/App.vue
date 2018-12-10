<template>
  <div id="app">
    <router-view></router-view>
    <MsgBox></MsgBox>
  </div>
</template>

<script>
import MsgBox from '@/components/MsgBox'
export default {
  name: 'app',
  components: {
    MsgBox
  }
}
</script>

<style lang="less">
html,
body,
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
* {
  box-sizing: border-box;
}
</style>

<!-- Created by anyc on 2018-12-10. 开始页面 -->
<template>
  <div class="welcome"
    flex="dir:top box:first cross:center main:center">
    <div class="logo">
      欢迎使用
    </div>
    <div flex="dir:top box:mean">
      <div flex="main:center cross:center">
        <router-link class="btn"
          to="/ChessBoard">先手开始游戏</router-link>
      </div>
      <div flex="main:center cross:center">
        <router-link class="btn"
          to="/">后手开始游戏</router-link>
      </div>
      <div flex="main:center cross:center">
        <router-link class="btn"
          to="/">建立主机</router-link>
      </div>
      <div flex="main:center cross:center">
        <router-link class="btn"
          to="/">加入游戏</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'welcome',
  data () {
    return {
      // data
    }
  }
}
</script>

<style lang="less" scoped>
.welcome {
  height: 100%;
  padding: 50px 0;
  text-align: center;
}
.btn {
  font-size: @title-size;
  font-weight: bold;
  color: @title-color;
}
.logo {
  margin-bottom: 20px;
  font-size: 26px;
}
</style>

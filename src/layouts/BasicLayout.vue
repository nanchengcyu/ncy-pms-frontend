<script setup lang="ts">
import {useRouter} from "vue-router";

const router = useRouter()
const onClickLeft = () => {
  router.push('/')
}
const onClickRight = () => {
  router.push('/search')
}

</script>

<template>

  <van-nav-bar
      title="主页"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
  >
    <template #right>
      <van-icon name="search" size="18"/>
    </template>
  </van-nav-bar>

  <div id="content">
    <router-view/>
  </div>

  <van-tabbar route active-color="blue">
    <van-tabbar-item to="/" icon="wap-home" name="index">主页</van-tabbar-item>
    <van-tabbar-item to="/team" icon="friends" name="team">队伍</van-tabbar-item>
    <van-tabbar-item to="/user" icon="user" name="user">个人</van-tabbar-item>

  </van-tabbar>
</template>

<style scoped>

</style>
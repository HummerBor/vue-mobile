<template>
          <mt-tabbar v-model="selected">
        <mt-tab-item id="外卖">
        <router-link to="/">
            <i class="ion-social-angular-outline tabbar-i"></i>
            外卖
          </router-link>
        </mt-tab-item>
        <mt-tab-item id="订单">
        <router-link to="/Order">
            <i class="ion-ios-cart-outline tabbar-i"></i>
            订单
          </router-link>
        </mt-tab-item>
        <mt-tab-item id="发现">
        <router-link to="/news">
          <i class="ion-aperture tabbar-i"></i>
          发现
        </router-link>
        </mt-tab-item>
        <mt-tab-item id="我的">
        <router-link to="/Registered">
          <i class="ion-social-snapchat-outline tabbar-i"></i>
          我的
        </router-link>
        </mt-tab-item>
      </mt-tabbar>
</template>
<script>
import { Toast } from 'mint-ui'
export default {
  name: 'Tabbar',
  data () {
    return {selected: '外卖'}
  },
  watch: {
    selected: function (val, oldVal) {
      //Toast(val)
    }
  }
}
</script>
<style>
  .mint-tabbar{position: fixed;z-index: 10000000}
  .tabbar-i{display: block;font-size: 25px;font-weight: 500;padding-bottom: 5px;}
  a{text-decoration: none;color: #333;}
  a:active{}
  .mint-tabbar  .mint-tab-item.is-selected a{color: #26a2ff }
</style>

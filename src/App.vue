<template>
  <div id="app">
    <mt-header  title="服务区查询" ></mt-header>

<!--   sss -->
        <section>
          <router-view v-wechat-title="$route.meta.title"></router-view>
        </section> 
    
<!--   sss -->
    <tabbar></tabbar>
  </div>
</template>

<script>
import Tabbar from '@/components/Tabbar'
export default {
  name: 'app',
  components: {
    Tabbar
  }
}
</script>
<style >
body{margin: 0;}
.mint-header{z-index: 10}
section{height: 100vh; padding-top: 40px;margin-top: -40px;box-sizing: border-box;overflow: auto;padding-bottom: 56px;}
 #uc_recommend_ad { display: none !important; }
</style>


<template>
        <div class="navbar">
         <mt-navbar v-model="selected">
          <mt-tab-item id="1">选项一<i class="ion-ionic"></i></mt-tab-item>
          <mt-tab-item id="2">选项二</mt-tab-item>
          <mt-tab-item id="3">选项三</mt-tab-item>
        </mt-navbar>
            <mt-cell class="page-part" title="当前选中">{{ selected }}</mt-cell>  
        <!-- tab-container -->
        <mt-tab-container v-model="selected">
          <mt-tab-container-item id="1" >
            <mt-cell v-for="n in a " :title="n.name+':'+n.key"   :key="n.keyId"/>
          </mt-tab-container-item>
          <mt-tab-container-item id="2">
            <mt-cell v-for="n in 4" :title="'测试 ' + n"   :key="n"/>
          </mt-tab-container-item>
          <mt-tab-container-item id="3" >
            <mt-cell v-for="n in 6" :title="'选项 ' + n" :key="n"/>
          </mt-tab-container-item>
        </mt-tab-container>
        </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'navbar',
  data () {
      return {
        selected: '1',
        a:[]
      }
  },
  created (){
       var _this=this;
       axios.post('/api/HighWay/Handler/handler_ajax.ashx?action_type=getTotalServerPart')
                     .then(function (response) {
                      for( var i=0;i<response.data.SERVERPARTObject.length;i++){
                         var msg="";
                         var key="";
                         msg=response.data.SERVERPARTObject[i].SERVERPART_NAME;
                         key=response.data.SERVERPARTObject[i].KeyID
                        _this.a.push({ name:msg,key:key})
                      } 
                      })
                     .catch(function (error) {
                        console.log(error);
                      });
  },
  watch: {
    selected: function (val, oldVal) {
      console.log(val)
    }
  }
}
</script>
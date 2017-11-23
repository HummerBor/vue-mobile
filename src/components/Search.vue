<template>
	<div>
	<mt-search >
	          <mt-cell v-for="item in result" :title="item.value" :key="item.id" ></mt-cell>
	</mt-search>
	</div>
</template>
<script>
	export default {
	  name: 'Search',
	  data () {
	    return {
	      result: [
	      {title: '学习 JavaScript', value: '学习 JavaScript', id: '1'},
	      { title: '学习 Vue', value: '学习 Vue', id: '2' },
	      { title: '整个牛项目', value: '整个牛项目', id: '3' }
	      ]
	    }
	  }
	}
</script>
<style>
	 .mint-search{height: auto;} 
	.mint-search-list {    
	    overflow: auto;
	    z-index: 10;
	    padding-top: 0px; 
	    margin-top: 92px;
	    top: 0;
	    right: 0;
	    bottom: 0;
	    left: 0;
	    position: absolute;
	    background: rgba(0,0,0,0.8);}
</style>
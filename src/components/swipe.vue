<template>
	<div class="swipe-div">
	<mt-swipe :auto="4000">
	  <mt-swipe-item><b>as</b></mt-swipe-item>
	  <mt-swipe-item><b>as</b></mt-swipe-item>
	  <mt-swipe-item><b>as</b></mt-swipe-item>
	</mt-swipe>
	</div>
</template>
<script>
	export default {
	  name: 'Swipe'
	}
</script>
<style>
	.swipe-div{height: 200px;}
	.swipe-div .mint-swipe-item:nth-child(1){background: #0089dc}
	.swipe-div .mint-swipe-item:nth-child(2){background: #ffd705}
	.swipe-div .mint-swipe-item:nth-child(3){background: #ff2d4b}
</style>
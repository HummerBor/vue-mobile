<template>
  <video-player  :options="videoOptions"></video-player>
</template>
<script>
	export default {
	  name: 'videoPlayer',
	  data () {
	    return {
	      videoOptions: {
	        source: {
	          type: "rtmp/mp4",
	          src: 'rtmp://your.streaming.provider.net/cfx/st/&mp4:path/to/video.mp4',
	          withCredentials: false
	        },
	        language: 'zh-CN',
	        live: true,
	        autoplay: true,
	        height: 200
	      }
	    }
	  }
	}
</script>
<style>
	
</style>
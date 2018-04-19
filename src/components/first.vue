
<template>
        <div>
        <search></search>
        <swipe></swipe>
        <navbar></navbar>
        <div>1234</div>
        </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Swipe from '@/components/Swipe'
import Search from '@/components/Search'
export default {
  name: 'first',
  components: {
    Navbar,
    Swipe,
    Search
  }
}
</script>
<template>
        <div class="registered">
         <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
        <mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="email" state="success"></mt-field>
        <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
        <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
        <mt-field label="网站" placeholder="请输入网址" type="url" v-model="website"></mt-field>
        <mt-field label="数字" placeholder="请输入数字" type="number" v-model="number"></mt-field>
        <mt-field label="生日" placeholder="请输入生日" type="date" v-model="birthday"></mt-field>
        <mt-field label="自我介绍" placeholder="自我介绍" type="textarea" rows="4" v-model="introduction"></mt-field>
        <mt-field label="邮箱" state="success" v-model="email"></mt-field>
       <mt-field label="邮箱" state="error" v-model="email"></mt-field>
       <mt-field label="邮箱" state="warning" v-model="email"></mt-field> 
       <mt-field label="验证码" v-model="captcha">
          <img src="../assets/a.gif" height="45px" width="100px">
        </mt-field> 
        </div>
</template>

<script>
export default {
  name: 'registered',
  data () {
    return {
      username: '',
      email: '',
      password: '',
      phone: '',
      website: '',
      number: '',
      birthday: '',
      introduction: '',
      captcha: ''
    }
  }
}
</script>
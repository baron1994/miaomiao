<template>
  <div class="login_body">
    <div>
      <input class="login_text" type="text" placeholder="账户名/手机号/Email" />
    </div>
    <div>
      <input class="login_text" type="password" placeholder="请输入您的密码" />
    </div>
    <div class="login_btn">
      <input type="submit" value="登录" @touchstart="handleToLogin" />
    </div>
    <div class="login_link">
      <router-link to="/mine/register">立即注册</router-link>
      <router-link to="/mine/findPassword">找回密码</router-link>
    </div>
  </div>
</template>

<script>
import { messageBox } from "@/components/JS"

export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      ok: ''
    };
  },
  methods: {
    handleToLogin() {
      this.axios
        .post("/api2/users/login", {
          username: this.username,
          password: this.password
        })
        .then(res => {
          //console.log(res);
          var status = res.data.status;
          var This = this;
          if(status === 0){
            messageBox({
              title: '登录',
              content: '登录成功',
              ok: '确定',
              handleOk() {
                This.$router.push('/mine/center');
              }
            })
          }
          else{
            messageBox({
              title: '登录',
              content: '登录失败',
              ok: '确定'
            })
          }
        });
    }
  }
};
</script>

<style>
</style>


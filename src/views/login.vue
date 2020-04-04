<template>
  <div>
    <h1>登录页</h1>
    <div class="userMsg">
      <input class='un' type="text" placeholder="用户名" v-model="obj.username" />
      <input type="password" placeholder="密码" v-model="obj.password" />
      <button @click="login">登陆</button>
    </div>
    <div class="go">
      <button @click="goOther('department')">去部门页面</button>
      <button @click="goOther('person')">去人员页面</button>
    </div>
    <div ref="message">msg: {{msg}}</div>
    <button @click="changeMsg">改变msg信息</button>
  </div>
</template>

<script>
import userService from '../services/userService';
export default {
  name: "Login",
  data() {
    return {
      obj: {
        username: "",
        password: ""
      },
      msg: '农夫与蛇'
    };
  },
  beforeCreate() {
  },
  created() {
  },
  beforeUpdate() {
    // console.group('beforeUpdate 更新前状态===============》');
    // console.log('innerHTML', this.$refs.message.innerHTML);
    // console.log(this.$refs.message);
    // console.log("%c%s", "color:red", "data   : " + JSON.stringify(this.$data));
    // console.log("%c%s", "color:red", "msg: " + this.msg);
  },
  updated() {
    // console.group('updated 更新完成状态===============》');
    // console.log('innerHTML', this.$refs.message.innerHTML);
    // console.log(this.$refs.message);
    // console.log("%c%s", "color:red", "data   : " + JSON.stringify(this.$data));
    // console.log("%c%s", "color:red", "msg: " + this.msg);
  },
  directives: {},
  methods: {
    login() {
        if(this.obj.username && this.obj.password) {
            // this.$router.push({name:'father', params:this.obj})
            // this.$router.push({path:'father', query:this.obj})
            userService.login(this.obj).then(() => {
              this.$router.push({path:'father', query:this.obj});
            }, err => {
              alert(err);
            })
        }
    },
    goOther(where) {
      this.$router.push({path:where})
    },
    changeMsg() {
      this.msg = '农夫死啦，🐍太坏了！'
    }
  }
};
</script>

<style lang="scss" scoped>

$cred: red;
h1 {
  color: $cred;
}
.userMsg {
    input.un {
        border: 1px solid $cred;
    }
}
.go {
  button {
    height:45px;
    width:120px;
    background-color:hotpink;
    color:#fff;
    font:20px bold;
    border:none;
    margin:50px 20px;
  }
}

</style>
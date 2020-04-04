<template>
  <div>
    <h1>这是person页面</h1>
    <div v-if="deptInfo.length">
      <ul v-for="item in deptInfo" :key="item.id">
        <li>姓名:{{item.name}}&nbsp;年龄:{{item.age}}&nbsp;权限:{{item.auth}}</li>
      </ul>
    </div>
    <div v-if="users.length">
      <ul v-for="item in users" :key="item.id">
        <li>姓名:{{item.name}}&nbsp;年龄:{{item.age}}&nbsp;</li>
      </ul>
    </div>
  </div>
</template>

<script>
import userService from '../../services/userService'
export default {
  name: "person",
  data() {
    return {
      deptInfo: this.$store.state.department.dept,
      users: [],
    };
  },
  created() {
    console.log(this.$store.state.department.dept);
    this.getUserInfo();
  },
  methods: {
    getUserInfo() {
      userService.getUserInfo().then(data => {
        this.users = data.users;
      }, err => alert(err))
    }
  }
};
</script>

<style lang="scss">
</style>
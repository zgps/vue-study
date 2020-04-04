<template>
  <div>
    <h1>department</h1>
    <div v-if="deptMsg.length">
      <ul v-for="item in deptMsg" :key="item.id">
        <li>姓名:{{item.name}}&nbsp;年龄:{{item.age}}&nbsp;权限:{{item.auth}}</li>
      </ul>
    </div>
    <div>
      <span>姓名：</span>
      <input type="text" value="name" v-model="curMsg.name" />
      <br />
      <span>年龄：</span>
      <input type="text" value="age" v-model="curMsg.age" />
      <br />
      <span>权限：</span>
      <input type="text" value="auth" v-model="curMsg.auth" />
      <br />
      <button @click="submit">submit</button>
      <br />
      <button @click="dispatch">dispatch</button>
      <br />
    </div>
    <button @click="showState">展示state里的信息</button>
    <p>{{dept}}</p>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "department",
  data() {
    return {
      curMsg: {},
      deptMsg: [],
      stateDeptMsg: this.$store.state.department.dept
    };
  },
  computed: {
    // dept() {
    //     return this.$store.state.department.dept
    // },
    ...mapState({
        dept: state => state.department.dept
    })
  },
  methods: {
    submit() {
      this.deptMsg.push(this.curMsg);
      this.curMsg = {};
    },
    dispatch() {
        // let rs = [...rs, ...this.deptMsg]
      this.$store.dispatch("department", this.deptMsg);
    },
    showState() {
        console.log(this.stateDeptMsg);
    }
  }
};
</script>

<style lang="scss">
</style>
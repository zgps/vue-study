<template>
  <div>
    <div class="dialog">
      <h1>子组件弹框</h1>
      <input type="text" placeholder="人员1" v-model="per.person1" />
      <input type="text" placeholder="人员2" v-model="per.person2" />
      <button @click="sub">确定</button>
      <button @click="doParent">$parent传输法</button>
      <button @click="$parent.open">$parent传输法2</button>
    </div>
    <div>{{info}}</div>
  </div>
</template>

<script>
export default {
  name: "child",
  data() {
    return {
      per: {
        person1: "",
        person2: ""
      },
      aa: 6
    };
  },
  props:['info'],
  methods: {
    a() {
      console.log(this.aa);
    },
    sub() {
      let rs = [this.per.person1, this.per.person2];
      this.$emit("sub", rs, false);
      // this.$emit('sub', this.a)
      this.per = {
        person1: "",
        person2: ""
      };
    },
    doParent() {
      console.log(this.$parent.obj);
    }
  }
};
</script>

<style lang="scss">
.dialog {
  height: 200px;
  width: 600px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
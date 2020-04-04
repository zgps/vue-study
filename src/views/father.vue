<template>
  <div class="warp">
    <div class="y1">
      <h1>father页面</h1>
      <p>{{obj.name}}</p>
      <p>{{obj.pwd}}</p>

      <div class="msg">
        <input type="text" placeholder="进港事项" />
        <button @click="open">进港人员</button>
      </div>
      <br>
      <button @click="propSoming" >父向子传递按钮</button>
      <br>
      <button @click="printChildren" >点击打印$children</button>
      <ul v-for="item in personIn" :key="item.id">
        <li>{{item}}</li>
      </ul>

      <Child class="child1" @sub="doSub" v-show="isAct" :info="childInfo"></Child>
    </div>
    <!-- <div class="test"></div> -->
  </div>
</template>

<script>
import child from "./child";
export default {
  name: "father",
  components: {
    Child: child
  },
  data() {
    return {
      obj: {
        name: this.$route.query.username,
        pwd: this.$route.query.password
      },
      isAct: false,
      personIn: [],
      childInfo:''
    };
  },
  methods: {
    open() {
      this.isAct = !this.isAct;
    },
    propSoming() {
      this.isAct = !this.isAct;
      this.childInfo = "父组件的信息传过来啦！！"
    },
    doSub(per, status) {
      this.personIn = per;
      this.isAct = status;
    },
    // doSub(a) {
    //     a()
    // }
    printChildren(){
      console.log(this.$children);
    }
  }
};
</script>

<style lang="scss">
.test {
    height:200px;
    width:200px;
    background-color:pink;
    display: inline-block;
    vertical-align: middle;
}
.warp {
    height:600px;
}
.warp:after {
    content: "";
    height:100%;
    display: inline-block;
    vertical-align: middle;
}
.y1 {
    // display: none;
}
</style>
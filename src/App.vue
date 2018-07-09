<template>
    <div>
        {{even()}}

        <div class="less-style">
            {{msg}}
            <a href="#">click</a>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [20, 33, 43, 56, 74, 87],
      msg: "this is less test"
    };
  },
  methods: {
    even() {
      return this.arr.filter(item => item % 2 == 0);
    }
  }
};
</script>

<style lang="less">
.less-style {
  background-color: aqua;
  color: #666;
  a {
    color: red;
    font-size: 14px;
  }
}
</style>


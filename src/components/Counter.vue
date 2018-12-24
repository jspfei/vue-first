<template>
    <div>
      <button @click="increment" >+</button>
      <button v-on:click="decrement">-</button>
      <p><span>{{num}}</span></p>
    </div>
</template>

<script>
    export default {
        props:[ "num"] ,
        data(){
           return {
              num:0
           }
        },
        methods:{
           increment(){
              // this.num ++;
              //  // 减小 vue 按下同 过异步加载 js
              // import("./../util");
              this.$emit("incre");
           },
          decrement(){
            // this.num --;
            this.$emit("decre");
          }
        }

    }
</script>

<style scoped>

</style>

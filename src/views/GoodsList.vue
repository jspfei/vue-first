<template>
  <div >
    这是购物车列表
    <span>{{$route.params.goodsId}}</span><br>
    <span>{{$route.params.userName}}</span><br>
    <!--嵌入式路由-->
    <router-link to="/goods/title">显示商品标题</router-link>
    <router-link to="/goods/img">显示商品图片</router-link>

    <div>
      <router-view></router-view>
    </div>
    <router-link to="/cart">跳转到购物车页面</router-link>
    <button @click="jump">button -  跳转到购物车页面</button>
    <!--命名式路由-->
    <router-link v-bind:to="{name:'cart',params:{id:123}}">跳转到购物车页面</router-link>
  </div>
</template>

<script>
    export default{
        methods:{
          jump(){
            //编程式路由
             this.$router.push("/cart");
             this.$router.push({path:"/cart?id=111"})
            this.$router.push({path:"/cart",query:{id:"122"}})
             this.$router.go(-2);
          }
        }
    }
</script>

<style scoped>

</style>

<template>
  <div id="app">
      <v-header :seller="seller"></v-header>
      <div class="tab">
          <router-link tag="a" :to="{path:'/goods'}" class="tab-item">商品</router-link>
          <router-link tag="a" :to="{path:'/ratings'}" class="tab-item">评论</router-link>
          <router-link tag="a" :to="{path:'/seller'}" class="tab-item">商家</router-link>
      </div>
      <div class="content">
         <router-view></router-view>
      </div>
  </div>
</template>

<script>
import header from 'components/header/header'

const ERR_OK = 0;

export default {
  data(){
    return {
        seller:{}
    }
  },
  created(){
    this.$http.get('/api/seller').then((response) =>{
        response = response.body;

        if(response.errno === ERR_OK){
            this.seller = response.data;
        }

    })
  },
  name: 'app',
  components: {
    'v-header':header
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    .tab
      display:flex
      width:100%
      height:40px
      line-height:40px
      border-bottom:1px solid rgba(7,17,27,0.1)
      .tab-item
        flex: 1
        text-align:center
        & > a
          display : block
          font-size : 14px
          color : rgb(77,85,93)
        &.active
          color:#f01414;
</style>

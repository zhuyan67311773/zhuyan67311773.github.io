"use strict";(self["webpackChunkzsdd_pc"]=self["webpackChunkzsdd_pc"]||[]).push([[87],{87:function(t,s,a){a.r(s),a.d(s,{default:function(){return u}});var n=function(){var t=this;t._self._c;return t._m(0)},e=[function(){var t=this,s=t._self._c;return s("div",[s("div",{staticClass:"m-main-bg"},[s("div",{staticClass:"m-main"},[s("div",{staticClass:"course-nav"},[s("p",{staticStyle:{"padding-left":"10px"}},[t._v("文章列表 > "),s("span",{staticClass:"wzny-txt"})])]),s("div",{staticClass:"m-main-new-title"},[t._v("文章题目")]),s("div",{staticClass:"jy-div"},[s("img",{attrs:{src:a(1332)}})]),s("div",{staticClass:"m-main-new-con"},[s("p")])])])])}],i=a(8393),l={name:"newsDetails",data(){return{ele:".m-main-new-list",selectId:""}},methods:{dataList(){let t=this;i.ajax({url:"/data/news.json",type:"get",data:{},success:function(s){var a=s.data,n=t.$utils.queryDataId(t.selectId,a,"news_id");i(".m-main-new-title,.wzny-txt").html(n.news_name),""==n.news_html?i(".m-main-new-con").html('<div class="noData">暂无数据</div>'):i(".m-main-new-con").html(n.news_html)}})}},mounted(){let t=this;t.dataList(),t.selectId=this.$route.query.id}},c=l,d=a(2349),m=(0,d.Z)(c,n,e,!1,null,"712aaa82",null),u=m.exports},1332:function(t,s,a){t.exports=a.p+"assets/img/jingyan.32bc12a0.png"}}]);
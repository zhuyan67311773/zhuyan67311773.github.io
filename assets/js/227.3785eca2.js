"use strict";(self["webpackChunkzsdd_pc"]=self["webpackChunkzsdd_pc"]||[]).push([[227],{8227:function(t,a,s){s.r(a),s.d(a,{default:function(){return m}});var i=function(){var t=this,a=t._self._c;return a("div",[a("div",{staticClass:"m-main-bg"},[a("div",{staticClass:"m-main"},[a("div",{staticClass:"m-main-title"},[t._v("资源下载")]),a("div",{staticClass:"select-box"},[a("div",{staticClass:"select-div"},[a("span",{staticClass:"select-div-txt"},[t._v("分类:")]),a("ul",{staticClass:"select-class-btn"},[a("li",{attrs:{"data-class-num":""},on:{click:function(a){return t.tabSelectFn(a)}}},[t._v("全部")]),a("li",{attrs:{"data-class-num":"1"},on:{click:function(a){return t.tabSelectFn(a)}}},[t._v("弹唱谱")]),a("li",{attrs:{"data-class-num":"2"},on:{click:function(a){return t.tabSelectFn(a)}}},[t._v("人物素材")]),a("li",{attrs:{"data-class-num":"3"},on:{click:function(a){return t.tabSelectFn(a)}}},[t._v("场景素材")]),a("li",{attrs:{"data-class-num":"4"},on:{click:function(a){return t.tabSelectFn(a)}}},[t._v("道具素材")]),a("li",{attrs:{"data-class-num":"5"},on:{click:function(a){return t.tabSelectFn(a)}}},[t._v("特效素材")])])])]),t._m(0),t._m(1)])])])},l=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"m-main-list"},[a("ul")])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"div-page"},[a("ul",[a("li",[t._v("首页")]),a("li",{staticClass:"active"},[t._v("1")]),a("li",[t._v("尾页")])])])}],n=s(8393),e=s.n(n),c={name:"downloadList",data(){return{ele:".m-main-list"}},methods:{dataList(){let t=this;e().ajax({url:"/data/download.json",type:"get",data:{},success:function(a){var s=a.data,i="";if(0!=s.length){i+='<ul class="row">';for(var l=0;l<s.length;l++)i+="<li class='col-xs-6 col-md-3' t-num="+s[l].down_class+"> <div class='m-box'> ",s[l].down_isFree?i+="<a href='/#/downloadDetails?id="+s[l].down_id+"'>":i+="<a href="+s[l].down_url+">",i+='<img src="'+s[l].down_img_url+'" width="100%" height="auto">',i+='<div class="m-main-list-box">',i+="<p>素材名称："+s[l].down_name+"</p>",i+="<p>下载："+s[l].down_enrollment+"人</p>",s[l].down_isFree?i+='<p><span class="price">限时免费</span><span class="old-price">￥'+s[l].down_price+"元</span></p>":i+='<p><span class="price">￥'+s[l].down_price+"元</span>",i+="</div>",i+="</div></a></li>";i+="</ul>"}else i+='<div class="noData">暂无数据</div>';e()(t.ele).html(i)}})},tabSelectFn(t){this.queryName="";let a=this;e()(".noData").hide(),e()(".select-class-btn li").removeClass("active"),e()(t.currentTarget).addClass("active");var s="data-class-num";if(""==e()(t.currentTarget).attr(s)?a.dataList(""):1==e()(t.currentTarget).attr(s)?(e()(".m-main-list li").hide(),e()(".m-main-list li[t-num=1]").show()):2==e()(t.currentTarget).attr(s)?(e()(".m-main-list li").hide(),e()(".m-main-list li[t-num=2]").show()):3==e()(t.currentTarget).attr(s)?(e()(".m-main-list li").hide(),e()(".m-main-list li[t-num=3]").show()):4==e()(t.currentTarget).attr(s)?(e()(".m-main-list li").hide(),e()(".m-main-list li[t-num=4]").show()):5==e()(t.currentTarget).attr(s)&&(e()(".m-main-list li").hide(),e()(".m-main-list li[t-num=5]").show()),!e()(".m-main-list li").is(":visible")){var i='<div class="noData">暂无数据</div>';e()(a.ele).append(i)}}},created(){},mounted(){let t=this;t.dataList()}},r=c,d=s(2349),u=(0,d.Z)(r,i,l,!1,null,"41e07cda",null),m=u.exports}}]);
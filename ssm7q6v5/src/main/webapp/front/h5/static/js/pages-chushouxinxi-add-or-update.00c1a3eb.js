(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-chushouxinxi-add-or-update"],{"0f39":function(r,e,i){"use strict";i.r(e);var n=i("e7d6"),a=i("bd9d");for(var t in a)"default"!==t&&function(r){i.d(e,r,(function(){return a[r]}))}(t);i("1cc6");var o,s=i("f0c5"),d=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"2d1f3db9",null,!1,n["a"],o);e["default"]=d.exports},"1cc6":function(r,e,i){"use strict";var n=i("3104"),a=i.n(n);a.a},3104:function(r,e,i){var n=i("c36f");"string"===typeof n&&(n=[[r.i,n,""]]),n.locals&&(r.exports=n.locals);var a=i("4f06").default;a("46fdc726",n,!0,{sourceMap:!1,shadowMode:!1})},bd9d:function(r,e,i){"use strict";i.r(e);var n=i("bedf"),a=i.n(n);for(var t in n)"default"!==t&&function(r){i.d(e,r,(function(){return n[r]}))}(t);e["default"]=a.a},bedf:function(r,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a481"),i("c5f6"),i("f559"),i("ac6a"),i("96cf");var a=n(i("3b8d")),t=n(i("e2b1")),o={data:function(){return{cross:"",ruleForm:{chushoubianhao:this.getUUID(),shangpinmingcheng:"",shangpinfenlei:"",shangpinfengmian:"",chushoushuliang:"",chushoujiage:"",guige:"",fabushijian:"",xueshengzhanghao:"",xueshengxingming:"",lianxifangshi:"",shangpinxiangqing:"",sfsh:"",shhf:""},shangpinfenleiOptions:[],shangpinfenleiIndex:0,user:{},ro:{chushoubianhao:!1,shangpinmingcheng:!1,shangpinfenlei:!1,shangpinfengmian:!1,chushoushuliang:!1,chushoujiage:!1,guige:!1,fabushijian:!1,xueshengzhanghao:!1,xueshengxingming:!1,lianxifangshi:!1,shangpinxiangqing:!1,sfsh:!1,shhf:!1}}},components:{wPicker:t.default},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var r=(0,a.default)(regeneratorRuntime.mark((function r(e){var i,n,a,t;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return i=uni.getStorageSync("nowTable"),r.next=3,this.$api.session(i);case 3:return n=r.sent,this.user=n.data,this.ruleForm.xueshengzhanghao=this.user.xueshengzhanghao,this.ro.xueshengzhanghao=!0,this.ruleForm.xueshengxingming=this.user.xueshengxingming,this.ro.xueshengxingming=!0,this.ruleForm.lianxifangshi=this.user.lianxifangshi,this.ro.lianxifangshi=!0,r.next=13,this.$api.option("shangpinfenlei","shangpinfenlei",{});case 13:if(n=r.sent,this.shangpinfenleiOptions=n.data,this.ruleForm.userid=uni.getStorageSync("userid"),e.refid&&(this.ruleForm.refid=e.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!e.id){r.next=23;break}return this.ruleForm.id=e.id,r.next=21,this.$api.info("chushouxinxi",this.ruleForm.id);case 21:n=r.sent,this.ruleForm=n.data;case 23:if(this.cross=e.cross,!e.cross){r.next=79;break}a=uni.getStorageSync("crossObj"),r.t0=regeneratorRuntime.keys(a);case 27:if((r.t1=r.t0()).done){r.next=79;break}if(t=r.t1.value,"chushoubianhao"!=t){r.next=33;break}return this.ruleForm.chushoubianhao=a[t],this.ro.chushoubianhao=!0,r.abrupt("continue",27);case 33:if("shangpinmingcheng"!=t){r.next=37;break}return this.ruleForm.shangpinmingcheng=a[t],this.ro.shangpinmingcheng=!0,r.abrupt("continue",27);case 37:if("shangpinfenlei"!=t){r.next=41;break}return this.ruleForm.shangpinfenlei=a[t],this.ro.shangpinfenlei=!0,r.abrupt("continue",27);case 41:if("shangpinfengmian"!=t){r.next=45;break}return this.ruleForm.shangpinfengmian=a[t],this.ro.shangpinfengmian=!0,r.abrupt("continue",27);case 45:if("chushoushuliang"!=t){r.next=49;break}return this.ruleForm.chushoushuliang=a[t],this.ro.chushoushuliang=!0,r.abrupt("continue",27);case 49:if("chushoujiage"!=t){r.next=53;break}return this.ruleForm.chushoujiage=a[t],this.ro.chushoujiage=!0,r.abrupt("continue",27);case 53:if("guige"!=t){r.next=57;break}return this.ruleForm.guige=a[t],this.ro.guige=!0,r.abrupt("continue",27);case 57:if("fabushijian"!=t){r.next=61;break}return this.ruleForm.fabushijian=a[t],this.ro.fabushijian=!0,r.abrupt("continue",27);case 61:if("xueshengzhanghao"!=t){r.next=65;break}return this.ruleForm.xueshengzhanghao=a[t],this.ro.xueshengzhanghao=!0,r.abrupt("continue",27);case 65:if("xueshengxingming"!=t){r.next=69;break}return this.ruleForm.xueshengxingming=a[t],this.ro.xueshengxingming=!0,r.abrupt("continue",27);case 69:if("lianxifangshi"!=t){r.next=73;break}return this.ruleForm.lianxifangshi=a[t],this.ro.lianxifangshi=!0,r.abrupt("continue",27);case 73:if("shangpinxiangqing"!=t){r.next=77;break}return this.ruleForm.shangpinxiangqing=a[t],this.ro.shangpinxiangqing=!0,r.abrupt("continue",27);case 77:r.next=27;break;case 79:this.styleChange();case 80:case"end":return r.stop()}}),r,this)})));function e(e){return r.apply(this,arguments)}return e}(),methods:{styleChange:function(){this.$nextTick((function(){}))},fabushijianChange:function(r){this.ruleForm.fabushijian=r.target.value,this.$forceUpdate()},shangpinfenleiChange:function(r){this.shangpinfenleiIndex=r.target.value,this.ruleForm.shangpinfenlei=this.shangpinfenleiOptions[this.shangpinfenleiIndex]},shangpinfengmianTap:function(){var r=this;this.$api.upload((function(e){r.ruleForm.shangpinfengmian="upload/"+e.file,r.$forceUpdate(),r.$nextTick((function(){r.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var r=(0,a.default)(regeneratorRuntime.mark((function r(){var e,i,n,a,t,o,s,d,u,g;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(!this.ruleForm.chushoushuliang||this.$validate.isIntNumer(this.ruleForm.chushoushuliang)){r.next=3;break}return this.$utils.msg("出售数量应输入整数"),r.abrupt("return");case 3:if(!this.ruleForm.chushoujiage||this.$validate.isNumber(this.ruleForm.chushoujiage)){r.next=6;break}return this.$utils.msg("出售价格应输入数字"),r.abrupt("return");case 6:if(!this.cross){r.next=22;break}if(a=uni.getStorageSync("statusColumnName"),t=uni.getStorageSync("statusColumnValue"),""==a){r.next=22;break}if(o=uni.getStorageSync("crossObj"),a.startsWith("[")){r.next=18;break}for(s in o)s==a&&(o[s]=t);return d=uni.getStorageSync("crossTable"),r.next=16,this.$api.update("".concat(d),o);case 16:r.next=22;break;case 18:e=Number(uni.getStorageSync("userid")),i=o["id"],n=uni.getStorageSync("statusColumnName"),n=n.replace(/\[/,"").replace(/\]/,"");case 22:if(!i||!e){r.next=44;break}return this.ruleForm.crossuserid=e,this.ruleForm.crossrefid=i,u={page:1,limit:10,crossuserid:e,crossrefid:i},r.next=28,this.$api.list("chushouxinxi",u);case 28:if(g=r.sent,!(g.data.total>=n)){r.next=34;break}return this.$utils.msg(uni.getStorageSync("tips")),r.abrupt("return",!1);case 34:if(!this.ruleForm.id){r.next=39;break}return r.next=37,this.$api.update("chushouxinxi",this.ruleForm);case 37:r.next=41;break;case 39:return r.next=41,this.$api.add("chushouxinxi",this.ruleForm);case 41:this.$utils.msgBack("提交成功");case 42:r.next=52;break;case 44:if(!this.ruleForm.id){r.next=49;break}return r.next=47,this.$api.update("chushouxinxi",this.ruleForm);case 47:r.next=51;break;case 49:return r.next=51,this.$api.add("chushouxinxi",this.ruleForm);case 51:this.$utils.msgBack("提交成功");case 52:case"end":return r.stop()}}),r,this)})));function e(){return r.apply(this,arguments)}return e}(),optionsChange:function(r){this.index=r.target.value},bindDateChange:function(r){this.date=r.target.value},getDate:function(r){var e=new Date,i=e.getFullYear(),n=e.getMonth()+1,a=e.getDate();return"start"===r?i-=60:"end"===r&&(i+=2),n=n>9?n:"0"+n,a=a>9?a:"0"+a,"".concat(i,"-").concat(n,"-").concat(a)},toggleTab:function(r){this.$refs[r].show()}}};e.default=o},c36f:function(r,e,i){var n=i("24fb");e=n(!1),e.push([r.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-2d1f3db9]{padding:%?20?%}.content[data-v-2d1f3db9]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-attachment:fixed;background-size:cover;background-position:50%}uni-textarea[data-v-2d1f3db9]{border:%?1?% solid #eee;border-radius:%?20?%;padding:%?20?%}.title[data-v-2d1f3db9]{width:%?180?%}.avator[data-v-2d1f3db9]{width:%?150?%;height:%?60?%}.right-input[data-v-2d1f3db9]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:left;padding:0 %?24?%}.cu-form-group.active[data-v-2d1f3db9]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.btn[data-v-2d1f3db9]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:%?20?% 0}.cu-form-group[data-v-2d1f3db9]{padding:0 %?24?%;background-color:initial;min-height:inherit}.cu-form-group + .cu-form-group[data-v-2d1f3db9]{border:0}.cu-form-group uni-input[data-v-2d1f3db9]{padding:0 %?30?%}.uni-input[data-v-2d1f3db9]{padding:0 %?30?%}.cu-form-group uni-textarea[data-v-2d1f3db9]{padding:%?30?%;margin:0}.cu-form-group uni-picker[data-v-2d1f3db9]::after{line-height:%?80?%}.select .uni-input[data-v-2d1f3db9]{line-height:%?80?%}.input .right-input[data-v-2d1f3db9]{line-height:%?88?%}',""]),r.exports=e},e7d6:function(r,e,i){"use strict";var n,a=function(){var r=this,e=r.$createElement,i=r._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("v-uni-form",{staticClass:"app-update-pv"},[i("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0.25)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("出售编号")]),i("v-uni-view",{staticClass:"right-input",style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(71, 177, 60, 1)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"40rpx",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"dashed ",height:"88rpx"}},[r._v(r._s(r.ruleForm.chushoubianhao))])],1),i("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0.25)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("商品名称")]),i("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(71, 177, 60, 1)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"40rpx",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"dashed ",height:"88rpx"},attrs:{disabled:r.ro.shangpinmingcheng,placeholder:"商品名称"},model:{value:r.ruleForm.shangpinmingcheng,callback:function(e){r.$set(r.ruleForm,"shangpinmingcheng",e)},expression:"ruleForm.shangpinmingcheng"}})],1),i("v-uni-view",{staticClass:"cu-form-group select",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("商品分类")]),i("v-uni-picker",{attrs:{value:r.shangpinfenleiIndex,range:r.shangpinfenleiOptions},on:{change:function(e){arguments[0]=e=r.$handleEvent(e),r.shangpinfenleiChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-input",style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(71, 177, 60, 1)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"40rpx",borderWidth:"2rpx",width:"calc(100% - 160rpx)",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"dashed "}},[r._v(r._s(r.ruleForm.shangpinfenlei?r.ruleForm.shangpinfenlei:"请选择商品分类"))])],1)],1),i("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"},on:{click:function(e){arguments[0]=e=r.$handleEvent(e),r.shangpinfengmianTap.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("商品封面")]),i("v-uni-view",{staticClass:"right-input",staticStyle:{padding:"0"}},[r.ruleForm.shangpinfengmian?i("v-uni-image",{staticClass:"avator",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 auto",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",borderRadius:"100%",borderWidth:"0",width:"88rpx",borderStyle:"solid",height:"88rpx"},attrs:{src:r.baseUrl+r.ruleForm.shangpinfengmian,mode:"aspectFill"}}):i("v-uni-image",{staticClass:"avator",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 auto",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",borderRadius:"100%",borderWidth:"0",width:"88rpx",borderStyle:"solid",height:"88rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1)],1),i("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0.25)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("出售数量")]),i("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(71, 177, 60, 1)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"40rpx",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"dashed ",height:"88rpx"},attrs:{disabled:r.ro.chushoushuliang,placeholder:"出售数量"},model:{value:r.ruleForm.chushoushuliang,callback:function(e){r.$set(r.ruleForm,"chushoushuliang",e)},expression:"ruleForm.chushoushuliang"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0.25)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("出售价格")]),i("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(71, 177, 60, 1)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"40rpx",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"dashed ",height:"88rpx"},attrs:{disabled:r.ro.chushoujiage,placeholder:"出售价格"},model:{value:r.ruleForm.chushoujiage,callback:function(e){r.$set(r.ruleForm,"chushoujiage",e)},expression:"ruleForm.chushoujiage"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0.25)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("规格")]),i("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(71, 177, 60, 1)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"40rpx",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"dashed ",height:"88rpx"},attrs:{disabled:r.ro.guige,placeholder:"规格"},model:{value:r.ruleForm.guige,callback:function(e){r.$set(r.ruleForm,"guige",e)},expression:"ruleForm.guige"}})],1),i("v-uni-view",{staticClass:"cu-form-group select",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("发布时间")]),i("v-uni-picker",{attrs:{mode:"date",value:r.ruleForm.fabushijian},on:{change:function(e){arguments[0]=e=r.$handleEvent(e),r.fabushijianChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-input",style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(71, 177, 60, 1)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"40rpx",borderWidth:"2rpx",width:"calc(100% - 160rpx)",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"dashed "}},[r._v(r._s(r.ruleForm.fabushijian?r.ruleForm.fabushijian:"请选择发布时间"))])],1)],1),i("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0.25)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("学生账号")]),i("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(71, 177, 60, 1)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"40rpx",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"dashed ",height:"88rpx"},attrs:{disabled:r.ro.xueshengzhanghao,placeholder:"学生账号"},model:{value:r.ruleForm.xueshengzhanghao,callback:function(e){r.$set(r.ruleForm,"xueshengzhanghao",e)},expression:"ruleForm.xueshengzhanghao"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0.25)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("学生姓名")]),i("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(71, 177, 60, 1)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"40rpx",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"dashed ",height:"88rpx"},attrs:{disabled:r.ro.xueshengxingming,placeholder:"学生姓名"},model:{value:r.ruleForm.xueshengxingming,callback:function(e){r.$set(r.ruleForm,"xueshengxingming",e)},expression:"ruleForm.xueshengxingming"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0.25)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("联系方式")]),i("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(71, 177, 60, 1)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"40rpx",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"dashed ",height:"88rpx"},attrs:{disabled:r.ro.lianxifangshi,placeholder:"联系方式"},model:{value:r.ruleForm.lianxifangshi,callback:function(e){r.$set(r.ruleForm,"lianxifangshi",e)},expression:"ruleForm.lianxifangshi"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"308rpx"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("商品详情")]),i("v-uni-textarea",{style:{padding:"20rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(71, 177, 60, 1)",borderRadius:"16rpx",color:"rgba(161, 161, 161, 1)",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"dashed ",height:"280rpx"},attrs:{placeholder:"商品详情"},model:{value:r.ruleForm.shangpinxiangqing,callback:function(e){r.$set(r.ruleForm,"shangpinxiangqing",e)},expression:"ruleForm.shangpinxiangqing"}})],1),i("v-uni-view",{staticClass:"btn"},[i("v-uni-button",{staticClass:"bg-red",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0) inset",margin:"0 auto",backgroundColor:"rgba(71, 177, 60, 1)",borderColor:"rgba(71, 177, 60, 1)",borderRadius:"80rpx",color:"#fff",borderWidth:"1",width:"80%",fontSize:"28rpx",borderStyle:"solid",height:"80rpx"},on:{click:function(e){arguments[0]=e=r.$handleEvent(e),r.onSubmitTap.apply(void 0,arguments)}}},[r._v("提交")])],1)],1)],1)},t=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return t})),i.d(e,"a",(function(){return n}))}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1e4f668c"],{"0134":function(t,e,a){"use strict";a("2d06")},"2d06":function(t,e,a){},f70d:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"newform page"},[a("div",{staticClass:"title title_form_header"},[a("el-row",[a("el-col",{attrs:{span:4}},[a("div",[a("div",{staticClass:"fd-nav-back",on:{click:function(e){return t.backClick()}}},[a("i",{staticClass:"el-icon-arrow-left"})])])]),a("el-col",{staticClass:"text_right",staticStyle:{"line-height":"60px"},attrs:{span:4,offset:15}},["123"==t.mycode?a("el-button",{attrs:{size:"small"},on:{click:function(e){return t.saveSet(1)}}},[t._v("保存并返回")]):a("el-button",{attrs:{size:"small"},on:{click:function(e){return t.saveSet(2)}}},[t._v("保存并返回")])],1)],1)],1),a("div",{staticClass:"clearfix"}),t.is_form?a("div",{staticClass:"page__content"},[a("DynamicForm",{ref:"formDesign",attrs:{conf:t.formData,is_add:t.is_form,tabName:"formDesign"},on:{back:t.formBack,subback:t.subAlertBack}})],1):t._e()])},s=[],r=(a("53ca"),a("59f2")),o=a("5a6e"),n={name:"newform",components:{DynamicForm:r["a"]},data:function(){return{detail:{},is_form:!1,nownum:0,form_code:"",formData:{fields:[],title:"",labelPosition:"top",labelWidth:100,formRules:"rules",is_template:!1,type_id:"",urlpath:"",remark:""}}},methods:{backClick:function(){var t=this;this.$confirm("未保存返回, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.$router.push({name:"formList",query:{k:Date.now()}})})).catch((function(){t.$message({type:"info",message:"已取消返回"})}))},saveSet:function(t){var e=this,a=this.$refs.formDesign;for(var i in this.formData=a.formConf,this.formData.fields){if("calculate"==this.formData.fields[i].tagIcon&&0==this.formData.fields[i].strlist.length)return this.$alert("请填写 "+this.formData.fields[i].label+" 的计算公式！","提示",{confirmButtonText:"确定"}),!1;if("select"==this.formData.fields[i].tagIcon||"select_number"==this.formData.fields[i].tagIcon){if(0==this.formData.fields[i].options.length)return this.$alert("请填加 "+this.formData.fields[i].label+" 的选项！","提示",{confirmButtonText:"确定"}),!1;for(var s in this.formData.fields[i].options){if(""==this.formData.fields[i].options[s].label)return this.$alert("请填写 "+this.formData.fields[i].label+" 的选项名！","提示",{confirmButtonText:"确定"}),!1;if("select_number"==this.formData.fields[i].tagIcon&&!/^[+-]?(0|([1-9]\d*))(\.\d+)?$/g.test(this.formData.fields[i].options[s].value))return this.$alert("请填写 "+this.formData.fields[i].label+" 的选项内容为数字！","提示",{confirmButtonText:"确定"}),!1}}}if(""==this.formData.title)return this.$alert("请在表单属性中填写表单名称！","提示",{confirmButtonText:"确定"}),!1;if(""===this.formData.type_id)return this.$alert("请选择表单分类！","提示",{confirmButtonText:"确定"}),!1;var r=this;this.formData.sort=parseFloat(this.formData.sort);var o={corpid:this.$store.state.corpid,userid:this.$store.state.userid,form_info:JSON.stringify(this.formData),code:this.form_code},n=r.$createObj(o),f=n["keyvalue"],l=r.$apilist["addonetemplateform"]+"?signature="+f;r.$server.post(l,n["fd"]).then((function(t){e.$router.push({name:"formList",query:{k:Date.now()}})})).catch((function(t){}))},gettemplateformdetail:function(){var t=this,e=Object(o["a"])(this.$route.query.k),a=this;this.form_code=e;var i={corpid:this.$store.state.corpid,userid:this.$store.state.userid,form_code:e},s=a.$createObj(i),r=s["keyvalue"],n=a.$apilist["gettemplateformdetail"]+"?signature="+r;a.$server.post(n,s["fd"]).then((function(e){t.formData=e.data,t.formData.form_code="",t.is_form=!0})).catch((function(t){}))}},mounted:function(){this.gettemplateformdetail()}},f=n,l=(a("0134"),a("2877")),c=Object(l["a"])(f,i,s,!1,null,null,null);e["default"]=c.exports}}]);
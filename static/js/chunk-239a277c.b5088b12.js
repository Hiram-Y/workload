(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-239a277c"],{3127:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-dialog",{staticClass:"detail_alert_dialog form_other_detail_el_dialog",attrs:{"append-to-body":!0,title:"详情",visible:t.my_is_add,width:"600px","close-on-click-modal":!1},on:{"update:visible":function(e){t.my_is_add=e}}},[a("div",{staticClass:"form_other_detail"},[a("el-row",[a("el-col",{attrs:{span:24}},[t._v("表单名："+t._s(t.detail.FormName))]),a("el-col",{attrs:{span:12}},[t._v("创建人："+t._s(t.detail.FormUserName))]),a("el-col",{attrs:{span:12}},[t._v("创建时间："+t._s(new Date(t.detail.CreateTime).toISOString().replace(/T/g," ").replace(/\.[\d]{3}Z/,"").split(" ")[0]))])],1)],1),t.detail_arr.length>0?a("el-table",{attrs:{data:t.detail_arr,border:"","header-cell-style":{background:"#eef1f6",color:"#606266"}}},[a("el-table-column",{attrs:{prop:"name",width:"150",label:"字段"},scopedSlots:t._u([{key:"default",fn:function(e){return[1!=e.row.is_counted?a("span",[t._v(" "+t._s(e.row.name))]):t._e()]}}],null,!1,2024319900)}),a("el-table-column",{attrs:{prop:"value",label:"数值"},scopedSlots:t._u([{key:"default",fn:function(e){return[1!=e.row.is_counted?a("div",[""!==e.row.opt_label&&"image"!==e.row.opt_label&&"file"!==e.row.opt_label?a("p",[t._v(" "+t._s(e.row.opt_label.split("__")[1])+" ")]):"image"==e.row.opt_label?a("div",t._l(e.row.value,(function(t){return a("span",{key:t,staticClass:"margin_r_10 display_block"},[a("el-image",{staticStyle:{width:"100px",height:"100px"},attrs:{src:t.url,"preview-src-list":e.row.enable_greater}})],1)})),0):"file"==e.row.opt_label?a("div",t._l(e.row.value,(function(e){return a("div",{key:e},[a("p",[a("span",{staticClass:"upload_list_span",on:{click:function(a){return t.goimg(e.url)}}},[t._v(" "+t._s(e.name)+" ")])])])})),0):a("p",[t._v(t._s(e.row.value))])]):t._e()]}}],null,!1,291992345)})],1):t._e(),a("el-form",{staticClass:"auditform",attrs:{"label-width":"150px"}},[null!=t.detail.AuditStates?a("el-form-item",{staticClass:"audit_item",attrs:{label:"审批流程：","label-width":"200px"}},[a("div",{staticClass:"audit_div"},[a("el-timeline",t._l(t.detail.AuditStates,(function(e,i){return a("el-timeline-item",{key:i,attrs:{color:0==e.node_state?"#0bbd87":"#D6D6D6"}},[a("div",[a("div",{staticClass:"left"},[a("p",{staticClass:"audit_title"},[t._v("审批人")]),a("p",{staticClass:"audit_num"},[t._v(" "+t._s(e.userids.length)+"人 "),a("span",[t._v(t._s(0==e.node_state?"(已审批)":"(待审批)"))])])]),a("div",{staticClass:"right"},t._l(e.user_info,(function(i,s){return a("span",{key:i},[t._v(" "+t._s(i.name)+" "),s<e.userids.length-1?a("span",[t._v("/")]):t._e()])})),0)])])})),1)],1)]):t._e()],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:function(e){return t.closeClick()}}},[t._v(" 关 闭")])],1)],1)],1)},s=[],l=a("ade3"),o=a("d394"),r=a("9583"),n={name:"detail_alert_dialog",props:{is_add:Boolean,detail:Object,form_data:Object},components:{LogAlert:r["a"],FillEditorAlert:o["a"]},data:function(){var t;return t={tableProps:{border:!0,"header-cell-style":{background:"#eef1f6",color:"#606266"}},coprid:this.$store.state.corpid,my_is_add:!1,is_editor:!1,is_log:!1,logcode:""},Object(l["a"])(t,"is_editor",!1),Object(l["a"])(t,"main_code",""),Object(l["a"])(t,"detail_arr",[]),t},methods:{closeClick:function(){this.my_is_add=!1},goimg:function(t){return window.open(t),!1},ediotrFillClick:function(t){this.main_code=t,this.is_editor=!this.is_editor},fillEBack:function(t){this.is_editor=t},editorSubBack:function(){this.$emit("otherback"),this.my_is_add=!this.my_is_add},logClick:function(t){this.logcode=t,this.is_log=!this.is_log},logBack:function(t){this.is_log=t},editorClick:function(){this.is_editor=!this.is_editor},editorBack:function(t){this.is_editor=t},delClick:function(t){var e=this;this.$confirm("删除该条数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var a=e,i={corpid:e.$store.state.corpid,userid:e.$store.state.userid,code:t},s=a.$createObj(i),l=s["keyvalue"],o=a.$apilist["delone_main"]+"?signature="+l;a.$server.post(o,s["fd"]).then((function(){e.$message({type:"success",message:"删除成功!"}),e.$emit("otherback"),e.my_is_add=!e.my_is_add})).catch((function(t){}))})).catch((function(){}))},callbackone:function(t){var e=this;this.$confirm("撤回该条数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var a=e,i={corpid:e.$store.state.corpid,userid:e.$store.state.userid,main_code:t},s=a.$createObj(i),l=s["keyvalue"],o=a.$apilist["callbackone"]+"?signature="+l;a.$server.post(o,s["fd"]).then((function(){e.$message({type:"success",message:"撤回成功!"}),e.$emit("otherback"),e.my_is_add=!e.my_is_add})).catch((function(t){}))})).catch((function(){}))},getimgurl:function(t,e){var a=this,i={key:t.key},s=a.$createObj(i),l=s["keyvalue"],o=a.$apilist["qiniudown"]+"?signature="+l;a.$server.post(o,s["fd"]).then((function(a){return t.url=a.data,e.enable_greater.push(a.data),a.data})).catch((function(t){}))}},watch:{is_add:function(t){if(this.my_is_add=t,this.detail_arr=[],t)for(var e in this.detail.FormFieldInfos){if("image"==this.detail.FormFieldInfos[e].opt_label||"file"==this.detail.FormFieldInfos[e].opt_label)for(var a in this.enable_assign=[],this.detail.FormFieldInfos[e].enable_greater=[],this.detail.FormFieldInfos[e].value)this.getimgurl(this.detail.FormFieldInfos[e].value[a],this.detail.FormFieldInfos[e]);1!=this.detail.FormFieldInfos[e].is_counted&&this.detail_arr.push({name:this.detail.FormFieldInfos[e].field_label,is_counted:this.detail.FormFieldInfos[e].is_counted,value:this.detail.FormFieldInfos[e].value,assign_data:this.detail.FormFieldInfos[e].assign_data,opt_label:this.detail.FormFieldInfos[e].opt_label,enable_greater:this.detail.FormFieldInfos[e].enable_greater,str_list:this.detail.FormFieldInfos[e].str_list})}},my_is_add:function(t){this.$emit("back",t)}}},c=n,d=(a("51b9"),a("2877")),u=Object(d["a"])(c,i,s,!1,null,null,null);e["a"]=u.exports},"35a9":function(t,e,a){},"51b9":function(t,e,a){"use strict";a("ded3")},"7d83":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"gatherlist"},[a("div",{staticClass:"top_form"},[a("span",{staticClass:"name_span"},[t._v(t._s(t.title))]),a("span",{staticClass:"right"},[a("router-link",{staticClass:"margin_l_15",attrs:{to:{name:"formlistFill",query:{id:this.$route.query.id,k:Date.now()}}}},[a("el-button",{staticClass:"margin_l_15 width_90",attrs:{size:"small",icon:"iconfont icon-cancel"},on:{click:function(e){return t.close()}}},[t._v("返回")])],1)],1)]),a("div",{staticClass:"content sun_content"},[t._m(0),a("div",{staticClass:"sum_table"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"refTable",attrs:{filters:t.filters,data:t.gather_list,"pagination-props":{pageSizes:[10,15,30]},border:"","header-cell-style":{background:"#eef1f6",color:"#606266"}},on:{"selection-change":t.handleSelectionChange,"row-click":t.clickTable}},t._l(t.titles_one,(function(t){return a("el-table-column",{key:t,attrs:{label:t.label,prop:t.prop}})})),1)],1)]),a("div",{staticClass:"margin_top_30 content sun_content"},[t._m(1),a("div",{staticClass:"sum_table"},[a("data-tables",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"refTable",attrs:{filters:t.filters,data:t.assignlist,"pagination-props":{pageSizes:[10,15,30]},"table-props":t.tableProps},on:{"selection-change":t.handleSelectionChange,"row-click":t.clickTable}},[a("el-table-column",{attrs:{label:"表单名"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",[t._v(" "+t._s(e.row.FormName)+" ")])]}}])}),a("el-table-column",{attrs:{label:"分配字段"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.FieldName)+" ")]}}])}),a("el-table-column",{attrs:{label:"分配人"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",[t._v(" "+t._s(e.row.FormUserName)+" ")])]}}])}),a("el-table-column",{attrs:{label:"分配值"},scopedSlots:t._u([{key:"default",fn:function(e){return[void 0!=e.row.ToValue?a("span",[t._v(" "+t._s(e.row.ToValue)+" ")]):a("span",[t._v("-")])]}}])}),a("el-table-column",{attrs:{label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"flow-permisson-row"},[a("span",[0==e.row.State?a("span",{staticClass:"flow_per"},[t._v("未提交")]):6==e.row.State?a("span",{staticClass:"flow_per"},[t._v("导入数据")]):1==e.row.State?a("span",{staticClass:"flow_per warning"},[t._v("已提交")]):2==e.row.State?a("span",{staticClass:"flow_per danger"},[t._v("驳回")]):3==e.row.State?a("span",{staticClass:"flow_per success"},[t._v("已通过")]):4==e.row.State?a("span",{staticClass:"flow_per warning"},[t._v("审核中")]):5==e.row.State?a("span",{staticClass:"flow_per success"},[t._v("已通过")]):t._e()])])]}}])}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-link",{attrs:{underline:!1,type:"primary"},on:{click:function(a){return t.detailClick(e.row)}}},[t._v("详情")])]}}])})],1)],1)]),a("DetailAlertAssign",{attrs:{is_add:t.is_detail,detail:t.detail,form_data:t.formdetail},on:{back:t.detailBack}})],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content_title"},[a("p",{staticClass:"before display_inline_block"}),a("p",{staticClass:"before_font display_inline_block"},[t._v("汇总")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content_title"},[a("p",{staticClass:"before display_inline_block"}),a("p",{staticClass:"before_font display_inline_block"},[t._v("分配（他人分配给自己的）")])])}],l=(a("b0c0"),a("5a6e")),o=a("3127"),r={name:"gatherlist",components:{DetailAlertAssign:o["a"]},data:function(){return{gather_list:[],rule_list:[],rule_list_key:[],title:"",code:"",assignlist:[],tableProps:{border:!0,"header-cell-style":{background:"#eef1f6",color:"#606266"}},titles_one:[{prop:"userid",label:"工号"},{prop:"user_name",label:"姓名"},{prop:"depart",label:"学院"},{prop:"理论课",label:"理论课"},{prop:"实验课",label:"实验课"},{prop:"上机课",label:"上机课"},{prop:"实践课",label:"实践课"},{prop:"课程设计",label:"课程设计"},{prop:"毕业设计",label:"毕业设计"},{prop:"实习",label:"实习"},{prop:"大创",label:"大创"},{prop:"其他",label:"其他"},{prop:"合计",label:"合计"},{prop:"金石滩计划学时",label:"金石滩计划学时"}],titles_two:["全日制本科","非全日制本科","继续教育、职业教育、专科","学术型研究生","全日制专业型硕士","非全日制专业型硕士","MBA专业硕士","本科生毕业论文","硕士生毕业论文","博士生毕业论文","硕士生日常指导","博士生日常指导","辅修、双学位","本科生双创项目","补贴工作量","授课工作量补贴","非授课工作量补贴","补贴备注","非授课工作量","授课工作量","其他"],titles_three:[{prop:"teacher_id",label:"工号"},{prop:"teacher_name",label:"姓名"},{prop:"teacher_department",label:"单位"},{prop:"career",label:"专业技术职务"},{prop:"reward_value",label:"酬金标准（元/学时）"},{prop:"teach_quato",label:"定额（学时）"},{prop:"A",label:"超工作量（学时）"},{prop:"overloadworkload",label:"超工作量酬金（元）"}],is_detail:!1,detail:{},formdetail:{},overload_list:[]}},methods:{detailClick:function(t){this.is_detail=!this.is_detail,this.detail=t},detailBack:function(t){this.is_detail=t},getgather:function(){var t=this,e=this.$route.query.id;this.code=Object(l["a"])(e),this.title=this.$route.query.name,this.taskid=e;var a=this,i={corpid:this.$store.state.corpid,userid:this.$store.state.userid,task_code:Object(l["a"])(e)},s=a.$createObj(i),o=s["keyvalue"],r=a.$apilist["personalgather"]+"?signature="+o;this.gather_list=[],this.rule_list=[],this.rule_list_key=[],a.$server.post(r,s["fd"]).then((function(e){t.gather_list=e.data.form})).catch((function(t){}))},othertoselfassigndata:function(){var t=this,e=this.$route.query.id;this.code=Object(l["a"])(e),this.title=this.$route.query.name,this.taskid=e;var a=this,i={corpid:this.$store.state.corpid,userid:this.$store.state.userid,task_code:Object(l["a"])(e)},s=a.$createObj(i),o=s["keyvalue"],r=a.$apilist["othertoselfassigndata"]+"?signature="+o;a.$server.post(r,s["fd"]).then((function(e){t.assignlist=e.data})).catch((function(t){}))},exportExcel:function(){var t=this,e=this,a={corpid:this.$store.state.corpid,userid:this.$store.state.userid,task_code:Object(l["a"])(this.code)},i=e.$createObj(a),s=i["keyvalue"],o=e.$apilist["exportallgatherexcel"]+"?signature="+s;e.$server.post(o,i["fd"]).then((function(e){window.location.href=t.$store.state.imgurl+"/"+e.data.path})).catch((function(t){}))},overexportExcel:function(){var t=this,e=this,a={corpid:this.$store.state.corpid,userid:this.$store.state.userid,task_code:Object(l["a"])(this.code)},i=e.$createObj(a),s=i["keyvalue"],o=e.$apilist["exportoverloadworkload"]+"?signature="+s;e.$server.post(o,i["fd"]).then((function(e){window.location.href=t.$store.state.imgurl+"/"+e.data.path})).catch((function(t){}))}},mounted:function(){this.getgather(),this.othertoselfassigndata()}},n=r,c=(a("8ab6"),a("2877")),d=Object(c["a"])(n,i,s,!1,null,null,null);e["default"]=d.exports},"8ab6":function(t,e,a){"use strict";a("35a9")},ded3:function(t,e,a){}}]);
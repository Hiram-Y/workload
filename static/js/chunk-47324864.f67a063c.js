(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-47324864"],{"428e":function(t,e,s){},"5f87":function(t,e,s){"use strict";s.d(e,"a",(function(){return r}));var i=s("a78e"),a=s.n(i);function r(t){return a.a.get(t)}},"6b88":function(t,e,s){"use strict";s("428e")},f2c6:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"form_list_more frame_right task_index"},[s("div",{staticClass:"type_div"},[s("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"bg_task bg_task1"},[s("div",[s("data-tables",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{data:t.tasklist,"pagination-props":{pageSizes:[5,10,15]},"row-key":t.row_key,"expand-row-keys":t.expandRowKeys,"table-props":t.tableProps},on:{"selection-change":t.handleSelectionChange}},[s("el-table-column",{attrs:{label:"任务名",prop:"Title"}}),s("el-table-column",{attrs:{label:"时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(new Date(+new Date(new Date(e.row.StartDate).toJSON())+288e5).toISOString().replace(/T/g," ").replace(/\.[\d]{3}Z/,"").slice(0,-3).split(" ")[0])+"至"+t._s(new Date(+new Date(new Date(e.row.EndDate).toJSON())+288e5).toISOString().replace(/T/g," ").replace(/\.[\d]{3}Z/,"").slice(0,-3).split(" ")[0]))]}}])}),s("el-table-column",{attrs:{label:"备注",prop:"Remark"},scopedSlots:t._u([{key:"default",fn:function(e){return[""==e.row.Remark?s("span",[t._v("无")]):s("p",{staticClass:"p_over_2",attrs:{title:e.row.Remark}},[t._v(" "+t._s(e.row.Remark)+" ")])]}}])}),s("el-table-column",{attrs:{label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("div",{staticClass:"flow-permisson-row"},[s("span",[0==e.row.State?s("span",{staticClass:"success flow_per"},[t._v("进行中")]):t._e(),1==e.row.State?s("span",{staticClass:"flow_per warning"},[t._v("未开始")]):t._e(),2==e.row.State?s("span",{staticClass:"flow_per danger"},[t._v("结束")]):t._e()])])]}}])}),s("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("el-link",{staticClass:"margin_l_5 link_font",attrs:{underline:!1,type:"primary"},on:{click:function(s){return t.goTaskGClick(e.row)}}},[t._v("汇总")])]}}])})],1)],1)]),s("div",{staticClass:"clearfix"})])])},a=[],r=(s("a9e3"),s("5f87"),s("5a6e")),n=(s("361f"),{name:"form_list",props:{is_more:Boolean,typeid:Number,typename:String},data:function(){return{loading:!1,weburl:this.$store.state.weburl,my_is_more:!1,active:[],num:[],is_add:!1,tasklist:[],is_type_editor:!1,conent_type:"",typeid:"",is_type_editor_item:!1,conent_type_item:"",typeid_item:"",typelist:[],is_form_editor:!1,form_code:"",form_title:"",departlist:[],is_depart:!1,count:0,pagesize:10,currentPage:1,searchval:"",search_falg:!1,departlist_a:"",is_depart_a:!1,depart_a_detail:{}}},methods:{goTaskGClick:function(t){this.$router.push({name:"gatherAudit",query:{id:Object(r["b"])(t.Code),name:t.Title}})},switchClick:function(t){var e=this,s=this,i={task_code:t.Code,corpid:this.$store.state.corpid,userid:this.$store.state.userid};0==t.State?i["state"]=2:i["state"]=0;var a=s.$createObj(i),r=a["keyvalue"],n=s.$apilist["switchtaskstate"]+"?signature="+r;s.$server.post(n,a["fd"]).then((function(t){e.$message({type:"success",message:"操作成功!"}),e.getalltemplateform(e.pagesize,e.currentPage)})).catch((function(t){}))},editorDepartClick:function(t){this.departlist_a=t.ScopeInfo,this.depart_a_detail=t,this.is_depart_a=!this.is_depart_a},handleSizeChange:function(t){this.pagesize=t,this.getalltemplateform(this.pagesize,this.currentPage)},handleCurrentChange:function(t){this.currentPage=t,this.getalltemplateform(this.pagesize,this.currentPage)},delTaskClick:function(t){var e=this;this.$confirm("此操作将永久删除该任务, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var s=e,i={task_code:t.Code,corpid:e.$store.state.corpid,userid:e.$store.state.userid},a=s.$createObj(i),r=a["keyvalue"],n=s.$apilist["deltask"]+"?signature="+r;s.$server.post(n,a["fd"]).then((function(t){e.$message({type:"success",message:"删除成功!"}),e.getalltaskbyuserid()})).catch((function(t){}))})).catch((function(){e.$message({type:"info",message:"已取消删除"})}))},authorizationFormClick:function(t){this.is_depart=!0,this.form_code=t.Code,this.departlist=t.CooperationInfo},departBack:function(t){this.is_depart=t},departSub:function(t){var e=this,s=this;for(var i in t)delete t[i].Children,delete t[i].ParentId;var a={cooper:JSON.stringify(t),corpid:this.$store.state.corpid,userid:this.$store.state.userid,code:this.form_code},r=s.$createObj(a),n=r["keyvalue"],o=s.$apilist["updatecooper"]+"?signature="+n;s.$server.post(o,r["fd"]).then((function(t){e.$message({type:"success",message:"授权成功!"}),e.getalltemplateform()})).catch((function(t){}))},editorTaskClick:function(t){this.$router.push({name:"EditorTask",query:{id:Object(r["b"])(t)}})},formEditorClick:function(t){this.is_form_editor=!0,this.form_title=t.Title,this.form_code=t.Code},typeItemEditorClick:function(t){this.is_type_editor_item=!0,this.typeid_item=t.TypeId,this.conent_type_item=t.Code},typeItemEditorSub:function(){var t=this,e=this,s={type_id:this.typeid_item,corpid:this.$store.state.corpid,userid:this.$store.state.userid,code:this.conent_type_item},i=e.$createObj(s),a=i["keyvalue"],r=e.$apilist["edittype"]+"?signature="+a;e.$server.post(r,i["fd"]).then((function(e){t.$message({type:"success",message:"修改成功!"}),t.is_type_editor_item=!1,t.getalltemplateform()})).catch((function(t){}))},typeEditorClick:function(t,e){this.is_type_editor=!0,this.typeid=t,this.conent_type=e},typeEditorSub:function(){var t=this,e=this,s={id:this.typeid,corpid:this.$store.state.corpid,userid:this.$store.state.userid,content:this.conent_type},i=e.$createObj(s),a=i["keyvalue"],r=e.$apilist["editone"]+"?signature="+a;e.$server.post(r,i["fd"]).then((function(e){t.$message({type:"success",message:"修改成功!"}),t.is_type_editor=!1,t.getalltemplateform()})).catch((function(t){}))},delTypeClick:function(t){var e=this,s=this;this.$confirm("删除分类后，给分类的表单会自动归类到【其他】中, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var i={id:t,corpid:e.$store.state.corpid,userid:e.$store.state.userid,content:e.content},a=s.$createObj(i),r=a["keyvalue"],n=s.$apilist["delone"]+"?signature="+r;s.$server.post(n,a["fd"]).then((function(t){e.$message({type:"success",message:"删除成功!"}),e.getalltemplateform()})).catch((function(t){}))})).catch((function(){e.$message({type:"info",message:"已取消删除"})}))},getalltemplateform:function(t,e){var s=this,i=this,a={corpid:this.$store.state.corpid,userid:this.$store.state.userid},r=i.$createObj(a),n=r["keyvalue"];this.loading=!0;var o=i.$apilist["getallaudittaskbyuserid"]+"?signature="+n;i.$server.post(o,r["fd"]).then((function(t){s.loading=!1,s.tasklist=t.data.tasks})).catch((function(t){}))},getallbytype:function(){var t=this,e=this,s={typedesc:"规则类型",corpid:this.$store.state.corpid,userid:this.$store.state.userid},i=e.$createObj(s),a=i["keyvalue"],r=e.$apilist["getallbytype"]+"?signature="+a;e.$server.post(r,i["fd"]).then((function(e){t.typelist=e.data})).catch((function(t){}))},close:function(){this.my_is_more=!1},searchClick:function(t){var e=this,s=this,i={title:t,corpid:this.$store.state.corpid,userid:this.$store.state.userid},a=s.$createObj(i),r=a["keyvalue"],n=s.$apilist["selfcreatesearch"]+"?signature="+r;s.$server.post(n,a["fd"]).then((function(t){e.tasklist=t.data,e.search_falg=!0})).catch((function(t){}))}},mounted:function(){},created:function(){var t=this;this.$watch("searchval",Object(r["d"])((function(e){""==e?(t.search_falg=!1,t.getalltemplateform(t.pagesize,t.currentPage)):t.searchClick(e)}),200)),this.getalltemplateform(this.pagesize,this.currentPage)}}),o=n,c=(s("6b88"),s("2877")),l=Object(c["a"])(o,i,a,!1,null,null,null);e["default"]=l.exports}}]);
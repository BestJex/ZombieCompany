(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e5f55"],{9767:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ModelTraining"},[a("Breadcrumb",{staticStyle:{"text-align":"left",margin:"0px"}},[a("BreadcrumbItem",[t._v(" 数据可视化 ")]),a("BreadcrumbItem",[a("Icon",{attrs:{type:"ios-reverse-camera"}}),t._v(" 模型训练可视化 ")],1)],1),a("Row",{attrs:{type:"flex",gutter:16}},[a("Col",{attrs:{md:6,xs:24}},[a("Card",{staticStyle:{margin:"16px 0px 0px"},attrs:{"dis-hover":"",padding:16}},[a("h2",{staticStyle:{"text-align":"left"},attrs:{slot:"title"},slot:"title"},[t._v(" 4-1 模型信息 ")]),a("List",{staticStyle:{"text-align":"left",height:"400px"}},[a("ListItem",[a("ListItemMeta",{attrs:{title:"模型名称"}}),a("template",{slot:"extra"},[t._v("28")])],2),a("ListItem",[a("ListItemMeta",{attrs:{title:"CatBoostClassifier"}}),a("template",{slot:"extra"},[a("Tag",{attrs:{color:"success"}},[t._v("是")])],1)],2),a("ListItem",[a("ListItemMeta",{attrs:{title:"Iterations"}}),a("template",{slot:"extra"},[t._v("1500")])],2),a("ListItem",[a("ListItemMeta",{attrs:{title:"learning_rate"}}),a("template",{slot:"extra"},[t._v("0.08")])],2),a("ListItem",[a("ListItemMeta",{attrs:{title:"Depth"}}),a("template",{slot:"extra"},[t._v("7")])],2)],1)],1)],1),a("Col",{attrs:{md:10,xs:24}},[a("Card",{staticStyle:{margin:"16px 0px 0px"},attrs:{"dis-hover":""}},[a("h2",{staticStyle:{"text-align":"left"},attrs:{slot:"title"},slot:"title"},[t._v(" 4-2 ")]),a("Poptip",{attrs:{slot:"extra","word-wrap":"",width:"300",content:"描述说明",placement:"left"},slot:"extra"},[a("Button",{attrs:{size:"small",type:"info"}},[t._v("说明")])],1),a("div",{staticStyle:{height:"400px"},attrs:{id:"demo2"}})],1)],1)],1),a("Card",{staticStyle:{margin:"16px 0px"},attrs:{"dis-hover":"",padding:16}},[a("h2",{staticStyle:{"text-align":"left"},attrs:{slot:"title"},slot:"title"},[t._v(" 4-3 ")]),a("Poptip",{attrs:{slot:"extra","word-wrap":"",width:"300",content:"描述说明",placement:"left"},slot:"extra"},[a("Button",{attrs:{size:"small",type:"info"}},[t._v("说明")])],1),a("div",{staticStyle:{height:"550px"},attrs:{id:"demo1"}})],1)],1)},s=[],r={mounted:function(){this.initCharts()},methods:{initCharts:function(){var t=this.$echarts.init(document.getElementById("demo1"),"light"),e={color:["#ff7c7c","#5bc49f","#feb64d","#9287e7"],tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{right:"20%"},toolbox:{feature:{restore:{show:!0},magicType:{show:!0,type:["line","bar"]},saveAsImage:{show:!0}}},legend:{data:["模型名称","Miss_count","Accuracy","F-measure","AUC"]},xAxis:[{type:"category",axisTick:{alignWithLabel:!0},data:["CatBoost","Bagging","Random Forest","AdaBoost","DTC","LightGBM","NN","XGBoost","LR","KNN","NB","LDA"]}],dataZoom:[{type:"slider",show:!0,xAxisIndex:0,start:0,end:20,handleSize:2},{type:"inside",start:0,end:20}],yAxis:[{type:"value",name:"分错个数",min:0,max:2500,position:"left",inverse:!1,axisLine:{lineStyle:{}},axisLabel:{formatter:"{value} 个"}},{type:"value",name:"准确率",min:.999,max:1,position:"right",axisLine:{lineStyle:{}},axisLabel:{formatter:"{value}"}}],series:[{name:"Miss_count",type:"bar",data:[1,3,5,5,6,10,29,98,118,710,1163,1939],yAxisIndex:0,markPoint:{data:[{type:"max",name:"最大值"},{type:"min",name:"最小值"}]}},{name:"Accuracy",type:"bar",yAxisIndex:1,data:[.999968,.999903,.999838,.999838,.999806,.999676,.999061,.996827,.996179,.977011,.962343,.937217]},{name:"F-measure",type:"bar",yAxisIndex:1,data:[.999977,.999834,.999723,.999723,.999668,.999533,.998393,.994542,.993498,.962097,.938689,.888863]},{name:"AUC",type:"bar",yAxisIndex:1,data:[.999945,.999931,.999723,.999886,.999863,.999721,.998914,.997768,.997106,.983437,.969561,.914407]}]};t.setOption(e);var a=this.$echarts.init(document.getElementById("demo2"),"light"),i={tooltip:{},xAxis:{type:"value",data:[5e3,1e4,15e3,2e4,25e3]},legend:{},grid:{},yAxis:{type:"value",min:.2,max:1},series:[{name:"训练集",data:[[2779,.99830874],[9033,.99227278],[15287,.99532936],[21541,.99661111],[27795,.99740601]],type:"line"},{name:"测试集",data:[[2779,.28908172],[9033,.99585544],[15287,.99663254],[21541,.99679443],[27795,.99689158]],type:"line",itemStyle:{color:"#ff7c7c"}}]};a.setOption(i)}}},l=r,n=a("2877"),o=Object(n["a"])(l,i,s,!1,null,null,null);e["default"]=o.exports}}]);
import{o as h}from"./index-BLiFT3h9.js";import{r as l,o as r,e as d,q as a,A as s,u as v,l as n,F as f,m as x,p as t}from"./.pnpm-DqX4D7S9.js";const w={class:"markdown-body"},q=n("div",{class:"describe-plugin"},[n("p",null,"当用户需要频繁返回顶部查看相关内容时。")],-1),F=n("p",null,[t("回到顶部组件的默认样式，"),n("code",null,"lay-backtop"),t(" 会自动寻找最近的可滚动祖先元素，也可以使用 "),n("code",null,"target"),t(" 属性指定触发滚动事件的元素，通过滑动来查看页面右下角的正方形按钮。")],-1),C=n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("lay-backtop")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("lay-backtop")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},`
`)]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),B=n("p",null,[t("回到顶部组件可自定义样式，限制宽高：50px * 50px，"),n("code",null,"showHeight = 0"),t(" 将始终显示，"),n("code",null,"disabled"),t(" 属性禁用返回顶部。查看页面右下角的圆形按钮。")],-1),z=n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token comment"},"<!-- 使用默认插槽自定义 -->"),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("lay-tooltip")]),t(),n("span",{class:"token attr-name"},"content"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("插槽自定义 backtop "),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"position"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("left"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("lay-backtop")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handlerClick"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":showHeight"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("0"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":bottom"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("160"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"bgcolor"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("#5FB878"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"circle"),t(),n("span",{class:"token attr-name"},"disabled"),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("lay-icon")]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("layui-icon-dialogue"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("30px"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("lay-icon")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("lay-backtop")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("lay-tooltip")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token comment"},"<!-- 使用样式属性自定义 -->"),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("lay-tooltip")]),t(),n("span",{class:"token attr-name"},"content"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("属性自定义 backtop "),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"position"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("left"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("lay-backtop")]),t(),n("span",{class:"token attr-name"},":bottom"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("100"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"bgcolor"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("#5FB878"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"icon"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("layui-icon-up"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"circle"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("lay-backtop")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("lay-tooltip")]),n("span",{class:"token punctuation"},">")]),t(`  
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" layer "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},'"@layui/layer-vue"'),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handlerClick"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      layer`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"msg"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"layui-vue"'),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"time"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"1000"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
    
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      handlerClick`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),H=n("p",null,[t("通过设置 "),n("code",null,"target"),t(" 和 "),n("code",null,'position="absolute"'),t(" 参数，可对特定容器进行返回顶部操作")],-1),N=n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token comment"},"<!-- 需要用一个 div 包裹触发滚动事件的目标元素和 lay-backtop 组件 -->"),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("wrapper"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t("700px"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),t("300px"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("scrollContent"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"overflow-y"),n("span",{class:"token punctuation"},":"),t("auto"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token property"},"overflow-x"),n("span",{class:"token punctuation"},":"),t("auto"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t("700px"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),t("300px"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"background-color"),n("span",{class:"token punctuation"},":"),t("whitesmoke"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("lay-panel")]),t(),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("(n,index) in 50"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("n"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),t("10px"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),t("10px"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t("内容"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("lay-panel")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("lay-backtop")]),t(),n("span",{class:"token attr-name"},"target"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("#scrollContent"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":showHeight"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("100"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":bottom"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("30"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"position"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("absolute"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("lay-backtop")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),j={class:"wrapper",style:{width:"700px",height:"300px"}},S={id:"scrollContent",style:{"overflow-y":"auto","overflow-x":"auto",width:"700px",height:"300px","background-color":"whitesmoke"}},V=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"属性"),n("th",null,"描述"),n("th",null,"类型"),n("th",null,"默认值"),n("th",null,"可选值")])]),n("tbody",null,[n("tr",null,[n("td",null,"target"),n("td",null,"可选，触发滚动事件的对象"),n("td",null,"string | Window"),n("td",null,[n("code",null,"window")]),n("td",null,[n("code",null,"CSS/Element 选择器"),t(),n("code",null,"window")])]),n("tr",null,[n("td",null,"showHeight"),n("td",null,[t("可选，滚动高度达到该值后"),n("br"),t("显示回到顶部按钮")]),n("td",null,"number"),n("td",null,[n("code",null,"200")]),n("td",null,"—")]),n("tr",null,[n("td",null,"disabled"),n("td",null,"可选，禁用点击返回顶部"),n("td",null,"boolean"),n("td",null,[n("code",null,"false")]),n("td",null,[n("code",null,"true"),t(),n("code",null,"false")])]),n("tr",null,[n("td",null,"position"),n("td",null,[t("可选，定位方式，特定容器内部"),n("br"),t("需设置为 absolute")]),n("td",null,"string"),n("td",null,[n("code",null,"fixed")]),n("td",null,[n("code",null,"absolute"),t(),n("code",null,"fixed")])]),n("tr",null,[n("td",null,"right"),n("td",null,"可选，按钮距离页面右边距"),n("td",null,"number"),n("td",null,[n("code",null,"30")]),n("td",null,"—")]),n("tr",null,[n("td",null,"size"),n("td",null,"可选，按钮大小"),n("td",null,"string"),n("td",null,"——"),n("td",null,[n("code",null,"medium"),t(),n("code",null,"small")])]),n("tr",null,[n("td",null,"bottom"),n("td",null,"可选，按钮距离页面底部位置"),n("td",null,"number"),n("td",null,[n("code",null,"40")]),n("td",null,[n("code",null,"40")])]),n("tr",null,[n("td",null,"bgcolor"),n("td",null,"可选，背景颜色"),n("td",null,"string"),n("td",null,[n("code",null,"#9F9F9F")]),n("td",null,"—")]),n("tr",null,[n("td",null,"opacity"),n("td",null,"可选，不透明度"),n("td",null,"number"),n("td",null,[n("code",null,"0.95")]),n("td",null,[n("code",null,"0-1")])]),n("tr",null,[n("td",null,"color"),n("td",null,"可选，前景颜色"),n("td",null,"string"),n("td",null,[n("code",null,"#FFFFFF")]),n("td",null,"—")]),n("tr",null,[n("td",null,"borderRadius"),n("td",null,"可选，添加圆角"),n("td",null,"number | string"),n("td",null,[n("code",null,"2")]),n("td",null,"e: 2 | 2px |50%")]),n("tr",null,[n("td",null,"circle"),n("td",null,"可选，使用圆形按钮"),n("td",null,"boolean"),n("td",null,[n("code",null,"false")]),n("td",null,[n("code",null,"true"),t(),n("code",null,"false")])]),n("tr",null,[n("td",null,"icon"),n("td",null,"可选，图标类型"),n("td",null,"string"),n("td",null,[n("code",null,"layui-icon-top")]),n("td",null,[n("code",null,"lay-icon"),t("组件支持的所有类型")])]),n("tr",null,[n("td",null,"iconSize"),n("td",null,"可选，图标大小"),n("td",null,"number"),n("td",null,[n("code",null,"30")]),n("td",null,[n("code",null,"30")])]),n("tr",null,[n("td",null,"iconColor"),n("td",null,"可选，图标颜色"),n("td",null,"string"),n("td",null,[n("code",null,"#FFFFFF")]),n("td",null,"—")])])],-1),E=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"事件"),n("th",null,"描述"),n("th",null,"参数")])]),n("tbody",null,[n("tr",null,[n("td",null,"click"),n("td",null,"点击回到顶部按钮的回调函数"),n("td",null,"event")])])],-1),A=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"插槽"),n("th",null,"说明")])]),n("tbody",null,[n("tr",null,[n("td",null,"default"),n("td",null,"自定义内容")])])],-1),I={style:{display:"flex","justify-content":"space-between","margin-top":"20px"}},J={},K={__name:"backtop",setup(L,{expose:g}){let m=()=>{h.msg("layui-vue",{time:1e3})};return g({frontmatter:{}}),(R,T)=>{const y=l("lay-anchor"),o=l("lay-field"),e=l("lay-backtop"),c=l("lay-code"),p=l("lay-icon"),i=l("lay-tooltip"),_=l("lay-panel"),u=l("lay-table-box"),k=l("router-link");return r(),d("div",w,[a(y,{anchors:"基本介绍,基础使用,自定义,挂载容器,属性,Backtop 事件,Backtop 插槽",currIndex:-1,show:!0}),a(o,{id:"基本介绍",title:"基本介绍",style:{"margin-top":"21px","margin-bottom":"20px"}}),q,a(o,{id:"基础使用",title:"基础使用",style:{"margin-top":"21px","margin-bottom":"20px"}}),a(c,null,{description:s(()=>[F]),code:s(()=>[C]),default:s(()=>[a(e)]),_:1}),a(o,{id:"自定义",title:"自定义",style:{"margin-top":"21px","margin-bottom":"20px"}},{default:s(()=>[a(c,null,{description:s(()=>[B]),code:s(()=>[z]),default:s(()=>[a(i,{content:"插槽自定义 backtop ",position:"left"},{default:s(()=>[a(e,{onClick:v(m),showHeight:0,bottom:160,bgcolor:"#5FB878",circle:"",disabled:""},{default:s(()=>[a(p,{type:"layui-icon-dialogue",size:"30px"})]),_:1},8,["onClick"])]),_:1}),a(i,{content:"属性自定义 backtop ",position:"left"},{default:s(()=>[a(e,{bottom:100,bgcolor:"#5FB878",icon:"layui-icon-up",circle:""})]),_:1})]),_:1})]),_:1}),a(o,{id:"挂载容器",title:"挂载容器",style:{"margin-top":"21px","margin-bottom":"20px"}}),a(c,null,{description:s(()=>[H]),code:s(()=>[N]),default:s(()=>[n("div",j,[n("div",S,[(r(),d(f,null,x(50,(b,W)=>a(_,{key:b,style:{margin:"10px",padding:"10px"}},{default:s(()=>[t("内容")]),_:2},1024)),64))]),a(e,{target:"#scrollContent",showHeight:100,bottom:30,position:"absolute"})])]),_:1}),a(o,{id:"属性",title:"属性",style:{"margin-top":"21px","margin-bottom":"20px"}}),a(u,null,{default:s(()=>[V]),_:1}),a(o,{id:"Backtop 事件",title:"Backtop 事件",style:{"margin-top":"21px","margin-bottom":"20px"}}),a(u,null,{default:s(()=>[E]),_:1}),a(o,{id:"Backtop 插槽",title:"Backtop 插槽",style:{"margin-top":"21px","margin-bottom":"20px"}}),a(u,null,{default:s(()=>[A]),_:1}),n("div",I,[n("div",null,[a(k,{to:"/zh-CN/components/dropdown",class:"lay-link",style:{display:""}},{default:s(()=>[a(p,{type:"layui-icon-left"}),t("下拉菜单")]),_:1})]),n("div",null,[a(k,{to:"/zh-CN/components/autoComplete",class:"lay-link",style:{display:""}},{default:s(()=>[t("自动完成 "),a(p,{type:"layui-icon-right"})]),_:1})])])])}}};export{K as default,J as frontmatter};
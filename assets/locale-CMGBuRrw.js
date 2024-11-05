import{r as e,o as p,e as c,q as s,A as u,l as n,p as a}from"./.pnpm-DqX4D7S9.js";const i={class:"markdown-body"},r=n("div",{class:"describe-plugin"},[n("p",null,"目前的默认文案是简体中文，如果需要使用其他语言，可以参考下面的方案。")],-1),k=n("div",{class:"describe-plugin"},[n("p",null,[a("通过 "),n("code",null,"config-provider"),a(" 组件 "),n("code",null,"locale"),a(" 属性设置启用的语言。")])],-1),g=n("div",{class:"language-vue"},[n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("lay-config-provider")]),a(),n("span",{class:"token attr-name"},"locale"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("zh_CN"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("App")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("lay-config-provider")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),d=n("div",{class:"describe-plugin"},[n("p",null,[a("在 layui-vue 内部维护了一个 "),n("code",null,"vue-i18n"),a(" 实例, 你可以通过 "),n("code",null,"useI18n"),a(" 方法来获取。")])],-1),m=n("div",{class:"describe-plugin"},[n("p",null,"通过 locales 属性扩展语言包, 自定义语言优先级大于组件库内部维护的语言。")],-1),_=n("div",{class:"language-vue"},[n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("lay-config-provider")]),a(),n("span",{class:"token attr-name"},"locale"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("zh_CN"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":locales"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("locales"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        {{ t('hello') }}
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("lay-config-provider")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" useI18n "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},'"@layui/layui-vue"'),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(" zh_CN "),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},'"./custom/zh_CN"'),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(" en_US "),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},'"./custom/en_US"'),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token punctuation"},"{"),a(" t "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useI18n"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"const"),a(" locales "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a(`
    `),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"zh_CN"'),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token literal-property property"},"locale"),n("span",{class:"token operator"},":"),a(" zh_CN"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token literal-property property"},"merge"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"en_US"'),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token literal-property property"},"locale"),n("span",{class:"token operator"},":"),a(" en_US"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token literal-property property"},"merge"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"]"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),y=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"语言"),n("th",null,"内容")])]),n("tbody",null,[n("tr",null,[n("td",null,"zh_CN"),n("td",null,[n("a",{href:"https://gitee.com/layui-vue/layui-vue/blob/master/packages/component/language/locales/zh_CN.ts"},"https://gitee.com/layui-vue/layui-vue/blob/master/packages/component/language/locales/zh_CN.ts")])]),n("tr",null,[n("td",null,"en_US"),n("td",null,[n("a",{href:"https://gitee.com/layui-vue/layui-vue/blob/master/packages/component/language/locales/en_US.ts"},"https://gitee.com/layui-vue/layui-vue/blob/master/packages/component/language/locales/en_US.ts")])])])],-1),x={},N={__name:"locale",setup(v,{expose:o}){return o({frontmatter:{}}),(h,b)=>{const t=e("lay-field"),l=e("lay-table-box");return p(),c("div",i,[s(t,{id:"基本介绍",title:"基本介绍",style:{"margin-top":"21px","margin-bottom":"20px"}}),r,s(t,{id:"基本使用",title:"基本使用",style:{"margin-top":"21px","margin-bottom":"20px"}}),k,g,s(t,{id:"高级使用",title:"高级使用",style:{"margin-top":"21px","margin-bottom":"20px"}}),d,m,_,s(t,{id:"语言列表",title:"语言列表",style:{"margin-top":"21px","margin-bottom":"20px"}}),s(l,null,{default:u(()=>[y]),_:1})])}}};export{N as default,x as frontmatter};
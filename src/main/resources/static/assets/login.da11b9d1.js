import{a as p,b as v,h as o,_ as R,O as B,r as d,o as L,f as S,p as l,e as n,u as e,k as D,j as F,S as N,U as j,J as h}from"./index.b54e4b70.js";import{aL as $,aM as T,h as H,aN as J,r as O}from"./base.cf6a8745.js";import{E as A,a as G}from"./form-item.5d0c4bcf.js";/* empty css               */import"./tooltip.f118fcb0.js";import{E as K}from"./popper.0433c431.js";import{E as P}from"./link.bba106f4.js";import{E as Q}from"./image-viewer.b2008df8.js";/* empty css              */import{_ as W}from"./zfile-basic.5314831c.js";import{l as X,c as Y,a as Z,b as ee}from"./login.52a98580.js";import{i as te}from"./install.6b37d23e.js";import{r as oe}from"./BadgeCheckIcon.66210adb.js";import{E as k}from"./request.24874145.js";import{E as ae}from"./index.2b507321.js";import"./index.c92ded65.js";import"./isEqual.9207a911.js";import"./focus-trap.ce2bb8d4.js";import"./event.3ec63147.js";import"./index.f10a2ea5.js";import"./debounce.eea94d21.js";import"./scroll.70de8d63.js";import"./event.776e7e11.js";function le(m,f){return p(),v("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","aria-hidden":"true"},[o("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"})])}const c=m=>(N("data-v-b7d118f2"),m=m(),j(),m),ie={class:"min-h-screen bg-gray-100 text-gray-900 flex justify-center items-center"},ne={class:"max-w-screen-lg bg-white shadow-xl sm:rounded-xl flex flex-1"},re=c(()=>l("div",{class:"flex-1 bg-gray-50 text-center hidden lg:flex rounded-l-xl"},[l("div",{class:"m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat zfile-login-logo"})],-1)),se={class:"lg:w-1/2 mt-10 xl:w-1/2 w-11/12 p-6 sm:p-12"},de={class:"mt-0 flex flex-col items-center"},me={class:"text-2xl mt-0 xl:text-3xl font-extrabold box animate__animated animate__fadeInDown"},fe={class:"w-full flex-1"},ue=c(()=>l("div",{class:"my-12 border-b text-center"},[l("div",{class:"leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2"}," \u7BA1\u7406\u5458\u767B\u5F55 ")],-1)),pe={class:"flex space-x-5"},ce=h(" \u5C06\u914D\u7F6E\u6587\u4EF6 application.properties \u4E2D zfile.debug \u4FEE\u6539\u4E3A true, \u8BBF\u95EE\u9996\u9875\u5373\u53EF\u91CD\u7F6E\u5BC6\u7801 "),_e=c(()=>l("br",null,null,-1)),ge=c(()=>l("a",{target:"_blank",class:"text-blue-400",href:"https://docs.zfile.vip/#/question?id=reset-pwd"},"\u70B9\u51FB\u53EF\u524D\u5F80\u6587\u6863\u67E5\u770B\u64CD\u4F5C\u65B9\u5F0F",-1)),xe=h("\u5FD8\u8BB0\u5BC6\u7801"),ve=h("\u767B\u5F55"),he={__name:"login",setup(m){let f=B(),_=d(!1),b=d(),i=d({username:"",password:"",verifyCode:"",verifyCodeUUID:""});const z=a=>{window.open(a)};let V=d({username:[{required:!0,message:"\u8D26\u53F7\u4E0D\u80FD\u4E3A\u7A7A",trigger:["change","blur"]}],password:[{required:!0,message:"\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A",trigger:["change","blur"]}]});const I=()=>{b.value.validate(a=>{a?(_.value=!0,Z(i.value).then(t=>{window.localStorage.setItem("zfile-token",t.data),k({message:"\u767B\u5F55\u6210\u529F",type:"success",duration:1e3,onClose(){f.push("/admin")}})}).catch(()=>{_.value=!1,x()})):k.warning("\u8BF7\u8F93\u5165\u8D26\u53F7\u5BC6\u7801!")})},g=d("");X().then(a=>{g.value=a.data});const w=d({}),x=()=>{ee().then(a=>{w.value=a.data,i.value.verifyCodeUUID=a.data.uuid})};return x(),L(()=>{te().then(a=>{a.data||f.push("/install")}),Y().then(a=>{a.data&&f.push("/admin")})}),(a,t)=>{const u=ae,s=A,C=Q,E=P,U=K,M=O,q=G;return p(),S("div",ie,[l("div",ne,[re,l("div",se,[l("div",de,[l("h1",me,[l("img",{class:"w-16 cursor-pointer",onClick:t[0]||(t[0]=r=>z("https://github.com/zhaojun1998/zfile")),src:W})]),l("div",fe,[ue,o(q,{onSubmit:t[6]||(t[6]=F(()=>{},["prevent"])),ref_key:"loginFormRef",ref:b,rules:e(V),model:e(i),class:"zfile-login-form",size:"large"},{default:n(()=>[o(s,{class:"box animate__animated animate__fadeInUp",prop:"username"},{default:n(()=>[o(u,{placeholder:"\u7BA1\u7406\u5458\u8D26\u53F7","prefix-icon":e($),modelValue:e(i).username,"onUpdate:modelValue":t[1]||(t[1]=r=>e(i).username=r),modelModifiers:{trim:!0}},null,8,["prefix-icon","modelValue"])]),_:1}),o(s,{class:"box animate__animated animate__fadeInUp",prop:"password"},{default:n(()=>[o(u,{placeholder:"\u7BA1\u7406\u5458\u5BC6\u7801",type:"password","show-password":"","prefix-icon":e(T),modelValue:e(i).password,"onUpdate:modelValue":t[2]||(t[2]=r=>e(i).password=r),modelModifiers:{trim:!0}},null,8,["prefix-icon","modelValue"])]),_:1}),g.value==="2fa"?(p(),v(s,{key:0,class:"box animate__animated animate__fadeInUp",prop:"verifyCode"},{default:n(()=>[o(u,{placeholder:"\u53CC\u56E0\u7D20\u8BA4\u8BC1\u9A8C\u8BC1\u7801","prefix-icon":e(H),modelValue:e(i).verifyCode,"onUpdate:modelValue":t[3]||(t[3]=r=>e(i).verifyCode=r),modelModifiers:{trim:!0}},null,8,["prefix-icon","modelValue"])]),_:1})):g.value==="image"?(p(),v(s,{key:1,class:"box animate__animated animate__fadeInUp",prop:"verifyCode"},{default:n(()=>{var r;return[l("div",pe,[o(u,{class:"flex-1",placeholder:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801","prefix-icon":e(le),modelValue:e(i).verifyCode,"onUpdate:modelValue":t[4]||(t[4]=y=>e(i).verifyCode=y),modelModifiers:{trim:!0}},null,8,["prefix-icon","modelValue"]),o(C,{class:"flex-1",src:(r=w.value)==null?void 0:r.imgBase64,onClick:t[5]||(t[5]=y=>x())},null,8,["src"])])]}),_:1})):D("",!0),o(s,{class:"box animate__animated animate__fadeInUp float-right"},{default:n(()=>[o(U,{class:"item",effect:"dark",placement:"left"},{content:n(()=>[ce,_e,ge]),default:n(()=>[o(E,{icon:e(J),underline:!1,class:"zfile-float-right"},{default:n(()=>[xe]),_:1},8,["icon"])]),_:1})]),_:1}),o(s,{class:"clear-right"},{default:n(()=>[o(M,{loading:e(_),class:"w-full mb-0","native-type":"submit",type:"primary",icon:e(oe),onClick:I},{default:n(()=>[ve]),_:1},8,["loading","icon"])]),_:1})]),_:1},8,["rules","model"])])])])])])}}};var Je=R(he,[["__scopeId","data-v-b7d118f2"]]);export{Je as default};
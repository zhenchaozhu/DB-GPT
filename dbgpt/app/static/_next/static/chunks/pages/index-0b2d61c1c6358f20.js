(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{48312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(57464)}])},81799:function(e,t,n){"use strict";n.d(t,{A:function(){return d}});var a=n(85893),s=n(41468),l=n(51009),r=n(19284),c=n(25675),o=n.n(c),i=n(67294),u=n(67421);function d(e,t){var n;let{width:s,height:l}=t||{};return e?(0,a.jsx)(o(),{className:"rounded-full border border-gray-200 object-contain bg-white inline-block",width:s||24,height:l||24,src:(null===(n=r.H[e])||void 0===n?void 0:n.icon)||"/models/huggingface.svg",alt:"llm"}):null}t.Z=function(e){let{onChange:t}=e,{t:n}=(0,u.$G)(),{modelList:c,model:o}=(0,i.useContext)(s.p);return!c||c.length<=0?null:(0,a.jsx)(l.default,{value:o,placeholder:n("choose_model"),className:"w-52",onChange:e=>{null==t||t(e)},children:c.map(e=>{var t;return(0,a.jsx)(l.default.Option,{children:(0,a.jsxs)("div",{className:"flex items-center",children:[d(e),(0,a.jsx)("span",{className:"ml-2",children:(null===(t=r.H[e])||void 0===t?void 0:t.label)||e})]})},e)})})}},19409:function(e,t,n){"use strict";n.d(t,{Z:function(){return I}});var a=n(85893),s=n(27496),l=n(79531),r=n(71577),c=n(67294),o=n(2487),i=n(83062),u=n(2453),d=n(46735),m=n(55241),h=n(39479),p=n(51009),x=n(58299),f=n(56155),_=n(30119),v=n(67421);let j=e=>{let{data:t,loading:n,submit:s,close:l}=e,{t:r}=(0,v.$G)(),c=e=>()=>{s(e),l()};return(0,a.jsx)("div",{style:{maxHeight:400,overflow:"auto"},children:(0,a.jsx)(o.Z,{dataSource:null==t?void 0:t.data,loading:n,rowKey:e=>e.prompt_name,renderItem:e=>(0,a.jsx)(o.Z.Item,{onClick:c(e.content),children:(0,a.jsx)(i.Z,{title:e.content,children:(0,a.jsx)(o.Z.Item.Meta,{style:{cursor:"copy"},title:e.prompt_name,description:r("Prompt_Info_Scene")+"：".concat(e.chat_scene,"，")+r("Prompt_Info_Sub_Scene")+"：".concat(e.sub_chat_scene)})})},e.prompt_name)})})};var w=e=>{let{submit:t}=e,{t:n}=(0,v.$G)(),[s,l]=(0,c.useState)(!1),[r,o]=(0,c.useState)("common"),{data:w,loading:g}=(0,f.Z)(()=>(0,_.PR)("/prompt/list",{prompt_type:r}),{refreshDeps:[r],onError:e=>{u.ZP.error(null==e?void 0:e.message)}});return(0,a.jsx)(d.ZP,{theme:{components:{Popover:{minWidth:250}}},children:(0,a.jsx)(m.Z,{title:(0,a.jsx)(h.Z.Item,{label:"Prompt "+n("Type"),children:(0,a.jsx)(p.default,{style:{width:150},value:r,onChange:e=>{o(e)},options:[{label:n("Public")+" Prompts",value:"common"},{label:n("Private")+" Prompts",value:"private"}]})}),content:(0,a.jsx)(j,{data:w,loading:g,submit:t,close:()=>{l(!1)}}),placement:"topRight",trigger:"click",open:s,onOpenChange:e=>{l(e)},children:(0,a.jsx)(i.Z,{title:n("Click_Select")+" Prompt",children:(0,a.jsx)(x.Z,{className:"bottom-[30%]"})})})})},g=n(41468),b=n(89182),N=n(80573),y=n(5392),Z=n(84553);function P(e){let{dbParam:t,setDocId:n}=(0,c.useContext)(g.p),{onUploadFinish:s,handleFinish:l}=e,o=(0,N.Z)(),[i,u]=(0,c.useState)(!1),d=async e=>{u(!0);let a=new FormData;a.append("doc_name",e.file.name),a.append("doc_file",e.file),a.append("doc_type","DOCUMENT");let r=await (0,b.Vx)((0,b.iG)(t||"default",a));if(!r[1]){u(!1);return}n(r[1]),s(),u(!1),null==l||l(!0),await o(r[1]),null==l||l(!1)};return(0,a.jsx)(Z.default,{customRequest:d,showUploadList:!1,maxCount:1,multiple:!1,className:"absolute z-10 top-2 left-2",accept:".pdf,.ppt,.pptx,.xls,.xlsx,.doc,.docx,.txt,.md",children:(0,a.jsx)(r.ZP,{loading:i,size:"small",shape:"circle",icon:(0,a.jsx)(y.Z,{})})})}var k=n(11163),C=n(82353),S=n(1051);function R(e){let{document:t}=e;switch(t.status){case"RUNNING":return(0,a.jsx)(C.Rp,{});case"FINISHED":default:return(0,a.jsx)(C.s2,{});case"FAILED":return(0,a.jsx)(S.Z,{})}}function E(e){let{documents:t,dbParam:n}=e,s=(0,k.useRouter)(),l=e=>{s.push("/knowledge/chunk/?spaceName=".concat(n,"&id=").concat(e))};return(null==t?void 0:t.length)?(0,a.jsx)("div",{className:"absolute flex overflow-scroll h-12 top-[-35px] w-full z-10",children:t.map(e=>{let t;switch(e.status){case"RUNNING":t="#2db7f5";break;case"FINISHED":default:t="#87d068";break;case"FAILED":t="#f50"}return(0,a.jsx)(i.Z,{title:e.result,children:(0,a.jsxs)(r.ZP,{style:{color:t},onClick:()=>{l(e.id)},className:"shrink flex items-center mr-3",children:[(0,a.jsx)(R,{document:e}),e.doc_name]})},e.id)})}):null}var I=function(e){let{children:t,loading:n,onSubmit:o,handleFinish:i,...u}=e,{dbParam:d,scene:m}=(0,c.useContext)(g.p),[h,p]=(0,c.useState)(""),x=(0,c.useMemo)(()=>"chat_knowledge"===m,[m]),[f,_]=(0,c.useState)([]),v=(0,c.useRef)(0);async function j(){if(!d)return null;let[e,t]=await (0,b.Vx)((0,b._Q)(d,{page:1,page_size:v.current}));_(null==t?void 0:t.data)}(0,c.useEffect)(()=>{x&&j()},[d]);let N=async()=>{v.current+=1,await j()};return(0,a.jsxs)("div",{className:"flex-1 relative",children:[(0,a.jsx)(E,{documents:f,dbParam:d}),x&&(0,a.jsx)(P,{handleFinish:i,onUploadFinish:N,className:"absolute z-10 top-2 left-2"}),(0,a.jsx)(l.default.TextArea,{className:"flex-1 ".concat(x?"pl-10":""," pr-10"),size:"large",value:h,autoSize:{minRows:1,maxRows:4},...u,onPressEnter:e=>{if(h.trim()&&13===e.keyCode){if(e.shiftKey){e.preventDefault(),p(e=>e+"\n");return}o(h),setTimeout(()=>{p("")},0)}},onChange:e=>{if("number"==typeof u.maxLength){p(e.target.value.substring(0,u.maxLength));return}p(e.target.value)}}),(0,a.jsx)(r.ZP,{className:"ml-2 flex items-center justify-center absolute right-0 bottom-0",size:"large",type:"text",loading:n,icon:(0,a.jsx)(s.Z,{}),onClick:()=>{o(h)}}),(0,a.jsx)(w,{submit:e=>{p(h+e)}}),t]})}},43446:function(e,t,n){"use strict";var a=n(1375),s=n(2453),l=n(67294),r=n(36353),c=n(41468),o=n(83454);t.Z=e=>{let{queryAgentURL:t="/api/v1/chat/completions"}=e,n=(0,l.useMemo)(()=>new AbortController,[]),{scene:i}=(0,l.useContext)(c.p),u=(0,l.useCallback)(async e=>{let{data:l,chatId:c,onMessage:u,onClose:d,onDone:m,onError:h}=e;if(!(null==l?void 0:l.user_input)&&!(null==l?void 0:l.doc_id)){s.ZP.warning(r.Z.t("no_context_tip"));return}let p={...l,conv_uid:c};if(!p.conv_uid){s.ZP.error("conv_uid 不存在，请刷新后重试");return}try{var x;await (0,a.L)("".concat(null!==(x=o.env.API_BASE_URL)&&void 0!==x?x:"").concat(t),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(p),signal:n.signal,openWhenHidden:!0,async onopen(e){if(e.ok&&e.headers.get("content-type")===a.a)return},onclose(){n.abort(),null==d||d()},onerror(e){throw Error(e)},onmessage:e=>{let t=e.data;try{t="chat_agent"===i?JSON.parse(t).vis:JSON.parse(t)}catch(e){t.replaceAll("\\n","\n")}"string"==typeof t?"[DONE]"===t?null==m||m():(null==t?void 0:t.startsWith("[ERROR]"))?null==h||h(null==t?void 0:t.replace("[ERROR]","")):null==u||u(t):(null==u||u(t),null==m||m())}})}catch(e){n.abort(),null==h||h("Sorry, We meet some error, please try agin later.",e)}},[t]);return(0,l.useEffect)(()=>()=>{n.abort()},[]),u}},80573:function(e,t,n){"use strict";var a=n(41468),s=n(67294),l=n(43446),r=n(89182);t.Z=()=>{let{history:e,setHistory:t,chatId:n,model:c,docId:o}=(0,s.useContext)(a.p),i=(0,l.Z)({queryAgentURL:"/knowledge/document/summary"}),u=(0,s.useCallback)(async e=>{let[,a]=await (0,r.Vx)((0,r.$i)(n)),s=[...a,{role:"human",context:"",model_name:c,order:0,time_stamp:0},{role:"view",context:"",model_name:c,order:0,time_stamp:0,retry:!0}],l=s.length-1;t([...s]),await i({data:{doc_id:e||o,model_name:c},chatId:n,onMessage:e=>{s[l].context=e,t([...s])}})},[e,c,o,n]);return u}},57464:function(e,t,n){"use strict";n.r(t);var a=n(85893),s=n(56155),l=n(67294),r=n(96074),c=n(75081),o=n(66309),i=n(39332),u=n(25675),d=n.n(u),m=n(89182),h=n(81799),p=n(41468),x=n(19409),f=n(67421),_=n(62418),v=n(53014),j=n(82353),w=n(94184),g=n.n(w);t.default=()=>{let e=(0,i.useRouter)(),{model:t,setModel:n}=(0,l.useContext)(p.p),{t:u}=(0,f.$G)(),[w,b]=(0,l.useState)(!1),[N,y]=(0,l.useState)(!1),{data:Z=[]}=(0,s.Z)(async()=>{y(!0);let[,e]=await (0,m.Vx)((0,m.CU)());return y(!1),null!=e?e:[]}),P=async n=>{b(!0);let[,a]=await (0,m.Vx)((0,m.sW)({chat_mode:"chat_normal"}));a&&(localStorage.setItem(_.rU,JSON.stringify({id:a.conv_uid,message:n})),e.push("/chat/?scene=chat_normal&id=".concat(a.conv_uid).concat(t?"&model=".concat(t):""))),b(!1)},k=async n=>{if(n.show_disable)return;let[,a]=await (0,m.Vx)((0,m.sW)({chat_mode:"chat_normal"}));a&&e.push("/chat?scene=".concat(n.chat_scene,"&id=").concat(a.conv_uid).concat(t?"&model=".concat(t):""))};return(0,a.jsx)("div",{className:"px-4 h-screen flex flex-col justify-center items-center overflow-hidden",children:(0,a.jsxs)("div",{className:"max-w-3xl max-h-screen overflow-y-auto",children:[(0,a.jsx)(d(),{src:"/LOGO.png",alt:"Revolutionizing Database Interactions with Private LLM Technology",width:856,height:160,className:"w-full mt-4",unoptimized:!0}),(0,a.jsx)(r.Z,{className:"!text-[#878c93] !my-6",plain:!0,children:u("Quick_Start")}),(0,a.jsx)(c.Z,{spinning:N,children:(0,a.jsx)("div",{className:"flex flex-wrap -m-1 md:-m-2",children:Z.map(e=>(0,a.jsx)("div",{className:"w-full sm:w-1/2 p-1 md:p-2",onClick:()=>{k(e)},children:(0,a.jsxs)("div",{className:g()("flex flex-row justify-center h-[102px] min-h-min bg-white dark:bg-[#232734] dark:text-white rounded p-4 cursor-pointer hover:-translate-y-1 transition-[transform_shadow] duration-300 hover:shadow-[0_14px_20px_-10px_rgba(100,100,100,.1)]",{"grayscale !cursor-no-drop":e.show_disable}),children:[function(e){switch(e){case"chat_knowledge":return(0,a.jsx)(v.Z,{className:"w-10 h-10 mr-4 p-1",component:j.je});case"chat_with_db_execute":return(0,a.jsx)(v.Z,{className:"w-10 h-10 mr-4 p-1",component:j.zM});case"chat_excel":return(0,a.jsx)(v.Z,{className:"w-10 h-10 mr-4 p-1",component:j.DL});case"chat_with_db_qa":return(0,a.jsx)(v.Z,{className:"w-10 h-10 mr-4 p-1",component:j.RD});case"chat_dashboard":return(0,a.jsx)(v.Z,{className:"w-10 h-10 mr-4 p-1",component:j.In});case"chat_agent":return(0,a.jsx)(v.Z,{className:"w-10 h-10 mr-4 p-1",component:j.si});case"dbgpt_chat":return(0,a.jsx)(v.Z,{className:"w-10 h-10 mr-4 p-1",component:j.O7});default:return null}}(e.chat_scene),(0,a.jsxs)("div",{className:"flex flex-col flex-1",children:[(0,a.jsxs)("h2",{className:"flex items-center text-lg font-sans font-semibold",children:[e.scene_name,e.show_disable&&(0,a.jsx)(o.Z,{className:"ml-2",children:"Comming soon"})]}),(0,a.jsx)("p",{className:"opacity-80 line-clamp-2",children:e.scene_describe})]})]})},e.chat_scene))})}),(0,a.jsx)("div",{className:"mt-8 mb-2",children:(0,a.jsx)(h.Z,{onChange:e=>{n(e)}})}),(0,a.jsx)("div",{className:"flex flex-1 w-full mb-4",children:(0,a.jsx)(x.Z,{loading:w,onSubmit:P})})]})})}},30119:function(e,t,n){"use strict";n.d(t,{Tk:function(){return o},PR:function(){return i}});var a=n(2453),s=n(6154),l=n(83454);let r=s.default.create({baseURL:l.env.API_BASE_URL});r.defaults.timeout=1e4,r.interceptors.response.use(e=>e.data,e=>Promise.reject(e)),n(96486);let c={"content-type":"application/json"},o=(e,t)=>{if(t){let n=Object.keys(t).filter(e=>void 0!==t[e]&&""!==t[e]).map(e=>"".concat(e,"=").concat(t[e])).join("&");n&&(e+="?".concat(n))}return r.get("/api"+e,{headers:c}).then(e=>e).catch(e=>{a.ZP.error(e),Promise.reject(e)})},i=(e,t)=>r.post(e,t,{headers:c}).then(e=>e).catch(e=>{a.ZP.error(e),Promise.reject(e)})}},function(e){e.O(0,[3662,2185,5503,1009,9479,1647,4553,411,2487,9305,1353,9774,2888,179],function(){return e(e.s=48312)}),_N_E=e.O()}]);
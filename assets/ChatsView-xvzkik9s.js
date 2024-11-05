import{_ as C,c as n,a,F as h,r as f,n as l,f as p,g as m,t as o,b as y,v as b,h as v,o as d}from"./index-BkyPWjag.js";const k={name:"ChatView",data(){return{groups:[],friends:[],chats:{},currentGroupId:null,currentFriendId:null,currentChatType:null,newMessage:"",isSidebarVisible:!0}},created(){this.loadData(),this.groups.length>0&&(this.currentGroupId=this.groups[0].id)},computed:{currentGroup(){return this.groups.find(t=>t.id===this.currentGroupId)},friendsInCurrentGroup(){return this.friends.filter(t=>t.groupId===this.currentGroupId)},currentFriend(){return this.friends.find(t=>t.id===this.currentFriendId)},currentChat(){return this.currentChatType==="friend"?this.chats["friend-"+this.currentFriendId]||{messages:[]}:this.currentChatType==="group"?this.chats["group-"+this.currentGroupId]||{messages:[]}:{messages:[]}}},methods:{loadData(){const t=JSON.parse(localStorage.getItem("groups")),e=JSON.parse(localStorage.getItem("friends"));t&&e?(this.groups=t,this.friends=e):(this.groups=[{id:1,name:"Family"},{id:2,name:"Work"}],this.friends=[{id:1,name:"Alice",groupId:1,isBestFriend:!0},{id:2,name:"Bob",groupId:2,isBestFriend:!1},{id:3,name:"Charlie",groupId:1,isBestFriend:!1}]);const c=JSON.parse(localStorage.getItem("chats"));c?this.chats=c:(this.friends.forEach(u=>{this.chats["friend-"+u.id]={messages:[{sender:"bot",text:`Start chatting with ${u.name}!`}]}}),this.groups.forEach(u=>{this.chats["group-"+u.id]={messages:[{sender:"bot",text:`Start group chat with ${u.name}!`}]}}))},saveChats(){localStorage.setItem("chats",JSON.stringify(this.chats))},selectGroup(t){this.currentGroupId=t,this.currentFriendId=null,this.currentChatType=null},selectGroupChat(t){this.currentGroupId=t,this.currentFriendId=null,this.currentChatType="group",this.isSidebarVisible=!1},selectChat(t){this.currentFriendId=t,this.currentChatType="friend",this.isSidebarVisible=!1},sendMessage(){this.newMessage.trim()!==""&&(this.currentChat.messages.push({sender:"user",text:this.newMessage.trim()}),this.newMessage="",this.saveChats(),this.$nextTick(()=>{const t=this.$el.querySelector(".chat-history");t&&(t.scrollTop=t.scrollHeight)}))},goBack(){this.isSidebarVisible=!0,this.currentChatType=null,this.currentFriendId=null}},watch:{friends(t){t.forEach(e=>{this.chats["friend-"+e.id]||(this.chats["friend-"+e.id]={messages:[{sender:"bot",text:`Start chatting with ${e.name}!`}]})}),Object.keys(this.chats).forEach(e=>{e.startsWith("friend-")&&!t.find(c=>c.id==e.replace("friend-",""))&&delete this.chats[e]}),this.saveChats()},groups(t){t.forEach(e=>{this.chats["group-"+e.id]||(this.chats["group-"+e.id]={messages:[{sender:"bot",text:`Start group chat with ${e.name}!`}]})}),Object.keys(this.chats).forEach(e=>{e.startsWith("group-")&&!t.find(c=>c.id==e.replace("group-",""))&&delete this.chats[e]}),this.saveChats()}}},I={class:"chat-view"},S={key:0,class:"sidebar-container"},G={class:"group-sidebar"},_={class:"group-list"},F=["onClick"],T={key:0,class:"friend-sidebar"},w={class:"friend-list"},x=["onClick"],V={class:"chat-header"},M={class:"chat-history"},B={key:0,class:"message-input"};function E(t,e,c,u,i,r){return d(),n("div",I,[i.isSidebarVisible?(d(),n("div",S,[a("div",G,[a("div",_,[(d(!0),n(h,null,f(i.groups,s=>(d(),n("div",{class:l(["group-card",{active:i.currentGroupId===s.id}]),key:s.id,onClick:g=>r.selectGroup(s.id)},[a("h3",null,o(s.name),1)],10,F))),128))])]),r.currentGroup?(d(),n("div",T,[a("div",w,[a("div",{class:l(["friend-card group-chat",{active:i.currentChatType==="group"&&i.currentGroupId===r.currentGroup.id}]),onClick:e[0]||(e[0]=s=>r.selectGroupChat(r.currentGroup.id))},e[5]||(e[5]=[a("h4",null,"Group Chat",-1)]),2),(d(!0),n(h,null,f(r.friendsInCurrentGroup,s=>(d(),n("div",{class:l(["friend-card",{active:i.currentChatType==="friend"&&i.currentFriendId===s.id}]),key:s.id,onClick:g=>r.selectChat(s.id)},[a("h4",null,o(s.name),1)],10,x))),128))])])):p("",!0)])):p("",!0),a("div",{class:l(["chat-content",{fullWidth:!i.isSidebarVisible}])},[a("div",V,[i.isSidebarVisible?p("",!0):(d(),n("button",{key:0,class:"back-button",onClick:e[1]||(e[1]=(...s)=>r.goBack&&r.goBack(...s))}," ← Back ")),a("h2",null,[i.currentChatType==="friend"?(d(),n(h,{key:0},[m(o(r.currentFriend?r.currentFriend.name:"Select a friend to chat"),1)],64)):i.currentChatType==="group"?(d(),n(h,{key:1},[m(o(r.currentGroup?r.currentGroup.name:"Select a group to chat"),1)],64)):(d(),n(h,{key:2},[m(" Select a friend or group to chat ")],64))])]),a("div",M,[(d(!0),n(h,null,f(r.currentChat.messages,(s,g)=>(d(),n("div",{key:g,class:l(["message",s.sender])},[a("p",null,o(s.text),1)],2))),128))]),i.currentChatType?(d(),n("div",B,[y(a("input",{type:"text","onUpdate:modelValue":e[2]||(e[2]=s=>i.newMessage=s),placeholder:"Type your message...",onKeyup:e[3]||(e[3]=v((...s)=>r.sendMessage&&r.sendMessage(...s),["enter"]))},null,544),[[b,i.newMessage]]),a("button",{class:"btn btn-primary",onClick:e[4]||(e[4]=(...s)=>r.sendMessage&&r.sendMessage(...s))},"Send")])):p("",!0)],2)])}const O=C(k,[["render",E],["__scopeId","data-v-d72868b7"]]);export{O as default};

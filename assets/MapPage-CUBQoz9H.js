import{_ as Dt,o as Rt,c as jt,a as u,w as fn,b as Q,v as ot,n as T,d as un,t as mn,e as Qt,f as Jt}from"./index-COQeOF40.js";const Zt=()=>{};let Ht={},we={},Ce=null,Me={mark:Zt,measure:Zt};try{typeof window<"u"&&(Ht=window),typeof document<"u"&&(we=document),typeof MutationObserver<"u"&&(Ce=MutationObserver),typeof performance<"u"&&(Me=performance)}catch{}const{userAgent:te=""}=Ht.navigator||{},_=Ht,g=we,ee=Ce,st=Me;_.document;const P=!!g.documentElement&&!!g.head&&typeof g.addEventListener=="function"&&typeof g.createElement=="function",Ee=~te.indexOf("MSIE")||~te.indexOf("Trident/");var h="classic",Ie="duotone",v="sharp",x="sharp-duotone",dn=[h,Ie,v,x],pn={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},ne={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},gn=["kit"],hn=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,bn=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,yn={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},vn={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},xn={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},kn={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},An={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},wn={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},Ne={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},Cn=["solid","regular","light","thin","duotone","brands"],Se=[1,2,3,4,5,6,7,8,9,10],Mn=Se.concat([11,12,13,14,15,16,17,18,19,20]),J={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},En=[...Object.keys(kn),...Cn,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",J.GROUP,J.SWAP_OPACITY,J.PRIMARY,J.SECONDARY].concat(Se.map(t=>"".concat(t,"x"))).concat(Mn.map(t=>"w-".concat(t))),In={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Nn={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},Sn={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},ae={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const N="___FONT_AWESOME___",At=16,Pe="fa",Oe="svg-inline--fa",U="data-fa-i2svg",wt="data-fa-pseudo-element",Pn="data-fa-pseudo-element-pending",Yt="data-prefix",Ut="data-icon",re="fontawesome-i2svg",On="async",Tn=["HTML","HEAD","STYLE","SCRIPT"],Te=(()=>{try{return!0}catch{return!1}})(),Le=[h,v,x];function rt(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[h]}})}const Fe={...Ne};Fe[h]={...Ne[h],...ne.kit,...ne["kit-duotone"]};const H=rt(Fe),Ct={...wn};Ct[h]={...Ct[h],...ae.kit,...ae["kit-duotone"]};const nt=rt(Ct),Mt={...An};Mt[h]={...Mt[h],...Sn.kit};const Y=rt(Mt),Et={...xn};Et[h]={...Et[h],...Nn.kit};const Ln=rt(Et),Fn=hn,_e="fa-layers-text",_n=bn,zn={...pn};rt(zn);const Dn=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],bt=J,$=new Set;Object.keys(nt[h]).map($.add.bind($));Object.keys(nt[v]).map($.add.bind($));Object.keys(nt[x]).map($.add.bind($));const Rn=[...gn,...En],tt=_.FontAwesomeConfig||{};function jn(t){var e=g.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Hn(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}g&&typeof g.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,r]=e;const a=Hn(jn(n));a!=null&&(tt[r]=a)});const ze={styleDefault:"solid",familyDefault:"classic",cssPrefix:Pe,replacementClass:Oe,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};tt.familyPrefix&&(tt.cssPrefix=tt.familyPrefix);const q={...ze,...tt};q.autoReplaceSvg||(q.observeMutations=!1);const f={};Object.keys(ze).forEach(t=>{Object.defineProperty(f,t,{enumerable:!0,set:function(e){q[t]=e,et.forEach(n=>n(f))},get:function(){return q[t]}})});Object.defineProperty(f,"familyPrefix",{enumerable:!0,set:function(t){q.cssPrefix=t,et.forEach(e=>e(f))},get:function(){return q.cssPrefix}});_.FontAwesomeConfig=f;const et=[];function Yn(t){return et.push(t),()=>{et.splice(et.indexOf(t),1)}}const L=At,C={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Un(t){if(!t||!P)return;const e=g.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=g.head.childNodes;let r=null;for(let a=n.length-1;a>-1;a--){const i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return g.head.insertBefore(e,r),t}const Wn="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function at(){let t=12,e="";for(;t-- >0;)e+=Wn[Math.random()*62|0];return e}function K(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Wt(t){return t.classList?K(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function De(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Gn(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(De(t[n]),'" '),"").trim()}function mt(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Gt(t){return t.size!==C.size||t.x!==C.x||t.y!==C.y||t.rotate!==C.rotate||t.flipX||t.flipY}function Bn(t){let{transform:e,containerWidth:n,iconWidth:r}=t;const a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function Xn(t){let{transform:e,width:n=At,height:r=At,startCentered:a=!1}=t,i="";return a&&Ee?i+="translate(".concat(e.x/L-n/2,"em, ").concat(e.y/L-r/2,"em) "):a?i+="translate(calc(-50% + ".concat(e.x/L,"em), calc(-50% + ").concat(e.y/L,"em)) "):i+="translate(".concat(e.x/L,"em, ").concat(e.y/L,"em) "),i+="scale(".concat(e.size/L*(e.flipX?-1:1),", ").concat(e.size/L*(e.flipY?-1:1),") "),i+="rotate(".concat(e.rotate,"deg) "),i}var Vn=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Re(){const t=Pe,e=Oe,n=f.cssPrefix,r=f.replacementClass;let a=Vn;if(n!==t||r!==e){const i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}let ie=!1;function yt(){f.autoAddCss&&!ie&&(Un(Re()),ie=!0)}var $n={mixout(){return{dom:{css:Re,insertCss:yt}}},hooks(){return{beforeDOMElementCreation(){yt()},beforeI2svg(){yt()}}}};const S=_||{};S[N]||(S[N]={});S[N].styles||(S[N].styles={});S[N].hooks||(S[N].hooks={});S[N].shims||(S[N].shims=[]);var M=S[N];const je=[],He=function(){g.removeEventListener("DOMContentLoaded",He),ft=1,je.map(t=>t())};let ft=!1;P&&(ft=(g.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(g.readyState),ft||g.addEventListener("DOMContentLoaded",He));function qn(t){P&&(ft?setTimeout(t,0):je.push(t))}function it(t){const{tag:e,attributes:n={},children:r=[]}=t;return typeof t=="string"?De(t):"<".concat(e," ").concat(Gn(n),">").concat(r.map(it).join(""),"</").concat(e,">")}function oe(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var vt=function(e,n,r,a){var i=Object.keys(e),o=i.length,s=n,l,c,m;for(r===void 0?(l=1,m=e[i[0]]):(l=0,m=r);l<o;l++)c=i[l],m=s(m,e[c],c,e);return m};function Kn(t){const e=[];let n=0;const r=t.length;for(;n<r;){const a=t.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){const i=t.charCodeAt(n++);(i&64512)==56320?e.push(((a&1023)<<10)+(i&1023)+65536):(e.push(a),n--)}else e.push(a)}return e}function It(t){const e=Kn(t);return e.length===1?e[0].toString(16):null}function Qn(t,e){const n=t.length;let r=t.charCodeAt(e),a;return r>=55296&&r<=56319&&n>e+1&&(a=t.charCodeAt(e+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function se(t){return Object.keys(t).reduce((e,n)=>{const r=t[n];return!!r.icon?e[r.iconName]=r.icon:e[n]=r,e},{})}function Nt(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,a=se(e);typeof M.hooks.addPack=="function"&&!r?M.hooks.addPack(t,se(e)):M.styles[t]={...M.styles[t]||{},...a},t==="fas"&&Nt("fa",e)}const{styles:j,shims:Jn}=M,Zn={[h]:Object.values(Y[h]),[v]:Object.values(Y[v]),[x]:Object.values(Y[x])};let Bt=null,Ye={},Ue={},We={},Ge={},Be={};const ta={[h]:Object.keys(H[h]),[v]:Object.keys(H[v]),[x]:Object.keys(H[x])};function ea(t){return~Rn.indexOf(t)}function na(t,e){const n=e.split("-"),r=n[0],a=n.slice(1).join("-");return r===t&&a!==""&&!ea(a)?a:null}const Xe=()=>{const t=r=>vt(j,(a,i,o)=>(a[o]=vt(i,r,{}),a),{});Ye=t((r,a,i)=>(a[3]&&(r[a[3]]=i),a[2]&&a[2].filter(s=>typeof s=="number").forEach(s=>{r[s.toString(16)]=i}),r)),Ue=t((r,a,i)=>(r[i]=i,a[2]&&a[2].filter(s=>typeof s=="string").forEach(s=>{r[s]=i}),r)),Be=t((r,a,i)=>{const o=a[2];return r[i]=i,o.forEach(s=>{r[s]=i}),r});const e="far"in j||f.autoFetchSvg,n=vt(Jn,(r,a)=>{const i=a[0];let o=a[1];const s=a[2];return o==="far"&&!e&&(o="fas"),typeof i=="string"&&(r.names[i]={prefix:o,iconName:s}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:o,iconName:s}),r},{names:{},unicodes:{}});We=n.names,Ge=n.unicodes,Bt=dt(f.styleDefault,{family:f.familyDefault})};Yn(t=>{Bt=dt(t.styleDefault,{family:f.familyDefault})});Xe();function Xt(t,e){return(Ye[t]||{})[e]}function aa(t,e){return(Ue[t]||{})[e]}function F(t,e){return(Be[t]||{})[e]}function Ve(t){return We[t]||{prefix:null,iconName:null}}function ra(t){const e=Ge[t],n=Xt("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function z(){return Bt}const Vt=()=>({prefix:null,iconName:null,rest:[]});function dt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=h}=e,r=H[n][t],a=nt[n][t]||nt[n][r],i=t in M.styles?t:null;return a||i||null}const ia={[h]:Object.keys(Y[h]),[v]:Object.keys(Y[v]),[x]:Object.keys(Y[x])};function pt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e,r={[h]:"".concat(f.cssPrefix,"-").concat(h),[v]:"".concat(f.cssPrefix,"-").concat(v),[x]:"".concat(f.cssPrefix,"-").concat(x)};let a=null,i=h;const o=dn.filter(l=>l!==Ie);o.forEach(l=>{(t.includes(r[l])||t.some(c=>ia[l].includes(c)))&&(i=l)});const s=t.reduce((l,c)=>{const m=na(f.cssPrefix,c);if(j[c]?(c=Zn[i].includes(c)?Ln[i][c]:c,a=c,l.prefix=c):ta[i].indexOf(c)>-1?(a=c,l.prefix=dt(c,{family:i})):m?l.iconName=m:c!==f.replacementClass&&!o.some(p=>c===r[p])&&l.rest.push(c),!n&&l.prefix&&l.iconName){const p=a==="fa"?Ve(l.iconName):{},d=F(l.prefix,l.iconName);p.prefix&&(a=null),l.iconName=p.iconName||d||l.iconName,l.prefix=p.prefix||l.prefix,l.prefix==="far"&&!j.far&&j.fas&&!f.autoFetchSvg&&(l.prefix="fas")}return l},Vt());return(t.includes("fa-brands")||t.includes("fab"))&&(s.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(s.prefix="fad"),!s.prefix&&i===v&&(j.fass||f.autoFetchSvg)&&(s.prefix="fass",s.iconName=F(s.prefix,s.iconName)||s.iconName),!s.prefix&&i===x&&(j.fasds||f.autoFetchSvg)&&(s.prefix="fasds",s.iconName=F(s.prefix,s.iconName)||s.iconName),(s.prefix==="fa"||a==="fa")&&(s.prefix=z()||"fas"),s}class oa{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];const a=n.reduce(this._pullDefinitions,{});Object.keys(a).forEach(i=>{this.definitions[i]={...this.definitions[i]||{},...a[i]},Nt(i,a[i]);const o=Y[h][i];o&&Nt(o,a[i]),Xe()})}reset(){this.definitions={}}_pullDefinitions(e,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(a=>{const{prefix:i,iconName:o,icon:s}=r[a],l=s[2];e[i]||(e[i]={}),l.length>0&&l.forEach(c=>{typeof c=="string"&&(e[i][c]=s)}),e[i][o]=s}),e}}let le=[],X={};const V={},sa=Object.keys(V);function la(t,e){let{mixoutsTo:n}=e;return le=t,X={},Object.keys(V).forEach(r=>{sa.indexOf(r)===-1&&delete V[r]}),le.forEach(r=>{const a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(i=>{typeof a[i]=="function"&&(n[i]=a[i]),typeof a[i]=="object"&&Object.keys(a[i]).forEach(o=>{n[i]||(n[i]={}),n[i][o]=a[i][o]})}),r.hooks){const i=r.hooks();Object.keys(i).forEach(o=>{X[o]||(X[o]=[]),X[o].push(i[o])})}r.provides&&r.provides(V)}),n}function St(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];return(X[t]||[]).forEach(o=>{e=o.apply(null,[e,...r])}),e}function W(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];(X[t]||[]).forEach(i=>{i.apply(null,n)})}function D(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return V[t]?V[t].apply(null,e):void 0}function Pt(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||z();if(e)return e=F(n,e)||e,oe($e.definitions,n,e)||oe(M.styles,n,e)}const $e=new oa,ca=()=>{f.autoReplaceSvg=!1,f.observeMutations=!1,W("noAuto")},fa={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return P?(W("beforeI2svg",t),D("pseudoElements2svg",t),D("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;f.autoReplaceSvg===!1&&(f.autoReplaceSvg=!0),f.observeMutations=!0,qn(()=>{ma({autoReplaceSvgRoot:e}),W("watch",t)})}},ua={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:F(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=dt(t[0]);return{prefix:n,iconName:F(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(f.cssPrefix,"-"))>-1||t.match(Fn))){const e=pt(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||z(),iconName:F(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=z();return{prefix:e,iconName:F(e,t)||t}}}},k={noAuto:ca,config:f,dom:fa,parse:ua,library:$e,findIconDefinition:Pt,toHtml:it},ma=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=g}=t;(Object.keys(M.styles).length>0||f.autoFetchSvg)&&P&&f.autoReplaceSvg&&k.dom.i2svg({node:e})};function gt(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>it(n))}}),Object.defineProperty(t,"node",{get:function(){if(!P)return;const n=g.createElement("div");return n.innerHTML=t.html,n.children}}),t}function da(t){let{children:e,main:n,mask:r,attributes:a,styles:i,transform:o}=t;if(Gt(o)&&n.found&&!r.found){const{width:s,height:l}=n,c={x:s/l/2,y:.5};a.style=mt({...i,"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")})}return[{tag:"svg",attributes:a,children:e}]}function pa(t){let{prefix:e,iconName:n,children:r,attributes:a,symbol:i}=t;const o=i===!0?"".concat(e,"-").concat(f.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...a,id:o},children:r}]}]}function $t(t){const{icons:{main:e,mask:n},prefix:r,iconName:a,transform:i,symbol:o,title:s,maskId:l,titleId:c,extra:m,watchable:p=!1}=t,{width:d,height:b}=n.found?n:e,O=r==="fak",R=[f.replacementClass,a?"".concat(f.cssPrefix,"-").concat(a):""].filter(B=>m.classes.indexOf(B)===-1).filter(B=>B!==""||!!B).concat(m.classes).join(" ");let A={children:[],attributes:{...m.attributes,"data-prefix":r,"data-icon":a,class:R,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(d," ").concat(b)}};const I=O&&!~m.classes.indexOf("fa-fw")?{width:"".concat(d/b*16*.0625,"em")}:{};p&&(A.attributes[U]=""),s&&(A.children.push({tag:"title",attributes:{id:A.attributes["aria-labelledby"]||"title-".concat(c||at())},children:[s]}),delete A.attributes.title);const y={...A,prefix:r,iconName:a,main:e,mask:n,maskId:l,transform:i,symbol:o,styles:{...I,...m.styles}},{children:w,attributes:G}=n.found&&e.found?D("generateAbstractMask",y)||{children:[],attributes:{}}:D("generateAbstractIcon",y)||{children:[],attributes:{}};return y.children=w,y.attributes=G,o?pa(y):da(y)}function ce(t){const{content:e,width:n,height:r,transform:a,title:i,extra:o,watchable:s=!1}=t,l={...o.attributes,...i?{title:i}:{},class:o.classes.join(" ")};s&&(l[U]="");const c={...o.styles};Gt(a)&&(c.transform=Xn({transform:a,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);const m=mt(c);m.length>0&&(l.style=m);const p=[];return p.push({tag:"span",attributes:l,children:[e]}),i&&p.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),p}function ga(t){const{content:e,title:n,extra:r}=t,a={...r.attributes,...n?{title:n}:{},class:r.classes.join(" ")},i=mt(r.styles);i.length>0&&(a.style=i);const o=[];return o.push({tag:"span",attributes:a,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:xt}=M;function Ot(t){const e=t[0],n=t[1],[r]=t.slice(4);let a=null;return Array.isArray(r)?a={tag:"g",attributes:{class:"".concat(f.cssPrefix,"-").concat(bt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(f.cssPrefix,"-").concat(bt.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(f.cssPrefix,"-").concat(bt.PRIMARY),fill:"currentColor",d:r[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:n,icon:a}}const ha={found:!1,width:512,height:512};function ba(t,e){!Te&&!f.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Tt(t,e){let n=e;return e==="fa"&&f.styleDefault!==null&&(e=z()),new Promise((r,a)=>{if(n==="fa"){const i=Ve(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&xt[e]&&xt[e][t]){const i=xt[e][t];return r(Ot(i))}ba(t,e),r({...ha,icon:f.showMissingIcons&&t?D("missingIconAbstract")||{}:{}})})}const fe=()=>{},Lt=f.measurePerformance&&st&&st.mark&&st.measure?st:{mark:fe,measure:fe},Z='FA "6.6.0"',ya=t=>(Lt.mark("".concat(Z," ").concat(t," begins")),()=>qe(t)),qe=t=>{Lt.mark("".concat(Z," ").concat(t," ends")),Lt.measure("".concat(Z," ").concat(t),"".concat(Z," ").concat(t," begins"),"".concat(Z," ").concat(t," ends"))};var qt={begin:ya,end:qe};const lt=()=>{};function ue(t){return typeof(t.getAttribute?t.getAttribute(U):null)=="string"}function va(t){const e=t.getAttribute?t.getAttribute(Yt):null,n=t.getAttribute?t.getAttribute(Ut):null;return e&&n}function xa(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(f.replacementClass)}function ka(){return f.autoReplaceSvg===!0?ct.replace:ct[f.autoReplaceSvg]||ct.replace}function Aa(t){return g.createElementNS("http://www.w3.org/2000/svg",t)}function wa(t){return g.createElement(t)}function Ke(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?Aa:wa}=e;if(typeof t=="string")return g.createTextNode(t);const r=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(i){r.setAttribute(i,t.attributes[i])}),(t.children||[]).forEach(function(i){r.appendChild(Ke(i,{ceFn:n}))}),r}function Ca(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const ct={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(Ke(n),e)}),e.getAttribute(U)===null&&f.keepOriginalSource){let n=g.createComment(Ca(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~Wt(e).indexOf(f.replacementClass))return ct.replace(t);const r=new RegExp("".concat(f.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const i=n[0].attributes.class.split(" ").reduce((o,s)=>(s===f.replacementClass||s.match(r)?o.toSvg.push(s):o.toNode.push(s),o),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}const a=n.map(i=>it(i)).join(`
`);e.setAttribute(U,""),e.innerHTML=a}};function me(t){t()}function Qe(t,e){const n=typeof e=="function"?e:lt;if(t.length===0)n();else{let r=me;f.mutateApproach===On&&(r=_.requestAnimationFrame||me),r(()=>{const a=ka(),i=qt.begin("mutate");t.map(a),i(),n()})}}let Kt=!1;function Je(){Kt=!0}function Ft(){Kt=!1}let ut=null;function de(t){if(!ee||!f.observeMutations)return;const{treeCallback:e=lt,nodeCallback:n=lt,pseudoElementsCallback:r=lt,observeMutationsRoot:a=g}=t;ut=new ee(i=>{if(Kt)return;const o=z();K(i).forEach(s=>{if(s.type==="childList"&&s.addedNodes.length>0&&!ue(s.addedNodes[0])&&(f.searchPseudoElements&&r(s.target),e(s.target)),s.type==="attributes"&&s.target.parentNode&&f.searchPseudoElements&&r(s.target.parentNode),s.type==="attributes"&&ue(s.target)&&~Dn.indexOf(s.attributeName))if(s.attributeName==="class"&&va(s.target)){const{prefix:l,iconName:c}=pt(Wt(s.target));s.target.setAttribute(Yt,l||o),c&&s.target.setAttribute(Ut,c)}else xa(s.target)&&n(s.target)})}),P&&ut.observe(a,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Ma(){ut&&ut.disconnect()}function Ea(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((r,a)=>{const i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Ia(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"";let a=pt(Wt(t));return a.prefix||(a.prefix=z()),e&&n&&(a.prefix=e,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=aa(a.prefix,t.innerText)||Xt(a.prefix,It(t.innerText))),!a.iconName&&f.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=t.firstChild.data)),a}function Na(t){const e=K(t.attributes).reduce((a,i)=>(a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a),{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return f.autoA11y&&(n?e["aria-labelledby"]="".concat(f.replacementClass,"-title-").concat(r||at()):(e["aria-hidden"]="true",e.focusable="false")),e}function Sa(){return{iconName:null,title:null,titleId:null,prefix:null,transform:C,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function pe(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:a}=Ia(t),i=Na(t),o=St("parseNodeAttributes",{},t);let s=e.styleParser?Ea(t):[];return{iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:C,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:s,attributes:i},...o}}const{styles:Pa}=M;function Ze(t){const e=f.autoReplaceSvg==="nest"?pe(t,{styleParser:!1}):pe(t);return~e.extra.classes.indexOf(_e)?D("generateLayersText",t,e):D("generateSvgReplacementMutation",t,e)}let E=new Set;Le.map(t=>{E.add("fa-".concat(t))});Object.keys(H[h]).map(E.add.bind(E));Object.keys(H[v]).map(E.add.bind(E));Object.keys(H[x]).map(E.add.bind(E));E=[...E];function ge(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!P)return Promise.resolve();const n=g.documentElement.classList,r=m=>n.add("".concat(re,"-").concat(m)),a=m=>n.remove("".concat(re,"-").concat(m)),i=f.autoFetchSvg?E:Le.map(m=>"fa-".concat(m)).concat(Object.keys(Pa));i.includes("fa")||i.push("fa");const o=[".".concat(_e,":not([").concat(U,"])")].concat(i.map(m=>".".concat(m,":not([").concat(U,"])"))).join(", ");if(o.length===0)return Promise.resolve();let s=[];try{s=K(t.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();const l=qt.begin("onTree"),c=s.reduce((m,p)=>{try{const d=Ze(p);d&&m.push(d)}catch(d){Te||d.name==="MissingIcon"&&console.error(d)}return m},[]);return new Promise((m,p)=>{Promise.all(c).then(d=>{Qe(d,()=>{r("active"),r("complete"),a("pending"),typeof e=="function"&&e(),l(),m()})}).catch(d=>{l(),p(d)})})}function Oa(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ze(t).then(n=>{n&&Qe([n],e)})}function Ta(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(e||{}).icon?e:Pt(e||{});let{mask:a}=n;return a&&(a=(a||{}).icon?a:Pt(a||{})),t(r,{...n,mask:a})}}const La=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=C,symbol:r=!1,mask:a=null,maskId:i=null,title:o=null,titleId:s=null,classes:l=[],attributes:c={},styles:m={}}=e;if(!t)return;const{prefix:p,iconName:d,icon:b}=t;return gt({type:"icon",...t},()=>(W("beforeDOMElementCreation",{iconDefinition:t,params:e}),f.autoA11y&&(o?c["aria-labelledby"]="".concat(f.replacementClass,"-title-").concat(s||at()):(c["aria-hidden"]="true",c.focusable="false")),$t({icons:{main:Ot(b),mask:a?Ot(a.icon):{found:!1,width:null,height:null,icon:{}}},prefix:p,iconName:d,transform:{...C,...n},symbol:r,title:o,maskId:i,titleId:s,extra:{attributes:c,styles:m,classes:l}})))};var Fa={mixout(){return{icon:Ta(La)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=ge,t.nodeCallback=Oa,t}}},provides(t){t.i2svg=function(e){const{node:n=g,callback:r=()=>{}}=e;return ge(n,r)},t.generateSvgReplacementMutation=function(e,n){const{iconName:r,title:a,titleId:i,prefix:o,transform:s,symbol:l,mask:c,maskId:m,extra:p}=n;return new Promise((d,b)=>{Promise.all([Tt(r,o),c.iconName?Tt(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(O=>{let[R,A]=O;d([e,$t({icons:{main:R,mask:A},prefix:o,iconName:r,transform:s,symbol:l,maskId:m,title:a,titleId:i,extra:p,watchable:!0})])}).catch(b)})},t.generateAbstractIcon=function(e){let{children:n,attributes:r,main:a,transform:i,styles:o}=e;const s=mt(o);s.length>0&&(r.style=s);let l;return Gt(i)&&(l=D("generateAbstractTransformGrouping",{main:a,transform:i,containerWidth:a.width,iconWidth:a.width})),n.push(l||a.icon),{children:n,attributes:r}}}},_a={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return gt({type:"layer"},()=>{W("beforeDOMElementCreation",{assembler:t,params:e});let r=[];return t(a=>{Array.isArray(a)?a.map(i=>{r=r.concat(i.abstract)}):r=r.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(f.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},za={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:a={},styles:i={}}=e;return gt({type:"counter",content:t},()=>(W("beforeDOMElementCreation",{content:t,params:e}),ga({content:t.toString(),title:n,extra:{attributes:a,styles:i,classes:["".concat(f.cssPrefix,"-layers-counter"),...r]}})))}}}},Da={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=C,title:r=null,classes:a=[],attributes:i={},styles:o={}}=e;return gt({type:"text",content:t},()=>(W("beforeDOMElementCreation",{content:t,params:e}),ce({content:t,transform:{...C,...n},title:r,extra:{attributes:i,styles:o,classes:["".concat(f.cssPrefix,"-layers-text"),...a]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:r,transform:a,extra:i}=n;let o=null,s=null;if(Ee){const l=parseInt(getComputedStyle(e).fontSize,10),c=e.getBoundingClientRect();o=c.width/l,s=c.height/l}return f.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,ce({content:e.innerHTML,width:o,height:s,transform:a,title:r,extra:i,watchable:!0})])}}};const Ra=new RegExp('"',"ug"),he=[1105920,1112319],be={FontAwesome:{normal:"fas",400:"fas"},...vn,...yn,...In},_t=Object.keys(be).reduce((t,e)=>(t[e.toLowerCase()]=be[e],t),{}),ja=Object.keys(_t).reduce((t,e)=>{const n=_t[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function Ha(t){const e=t.replace(Ra,""),n=Qn(e,0),r=n>=he[0]&&n<=he[1],a=e.length===2?e[0]===e[1]:!1;return{value:It(a?e[0]:e),isSecondary:r||a}}function Ya(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),a=isNaN(r)?"normal":r;return(_t[n]||{})[a]||ja[n]}function ye(t,e){const n="".concat(Pn).concat(e.replace(":","-"));return new Promise((r,a)=>{if(t.getAttribute(n)!==null)return r();const o=K(t.children).filter(d=>d.getAttribute(wt)===e)[0],s=_.getComputedStyle(t,e),l=s.getPropertyValue("font-family"),c=l.match(_n),m=s.getPropertyValue("font-weight"),p=s.getPropertyValue("content");if(o&&!c)return t.removeChild(o),r();if(c&&p!=="none"&&p!==""){const d=s.getPropertyValue("content");let b=Ya(l,m);const{value:O,isSecondary:R}=Ha(d),A=c[0].startsWith("FontAwesome");let I=Xt(b,O),y=I;if(A){const w=ra(O);w.iconName&&w.prefix&&(I=w.iconName,b=w.prefix)}if(I&&!R&&(!o||o.getAttribute(Yt)!==b||o.getAttribute(Ut)!==y)){t.setAttribute(n,y),o&&t.removeChild(o);const w=Sa(),{extra:G}=w;G.attributes[wt]=e,Tt(I,b).then(B=>{const ln=$t({...w,icons:{main:B,mask:Vt()},prefix:b,iconName:y,extra:G,watchable:!0}),ht=g.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(ht,t.firstChild):t.appendChild(ht),ht.outerHTML=ln.map(cn=>it(cn)).join(`
`),t.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Ua(t){return Promise.all([ye(t,"::before"),ye(t,"::after")])}function Wa(t){return t.parentNode!==document.head&&!~Tn.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(wt)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function ve(t){if(P)return new Promise((e,n)=>{const r=K(t.querySelectorAll("*")).filter(Wa).map(Ua),a=qt.begin("searchPseudoElements");Je(),Promise.all(r).then(()=>{a(),Ft(),e()}).catch(()=>{a(),Ft(),n()})})}var Ga={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=ve,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=g}=e;f.searchPseudoElements&&ve(n)}}};let xe=!1;var Ba={mixout(){return{dom:{unwatch(){Je(),xe=!0}}}},hooks(){return{bootstrap(){de(St("mutationObserverCallbacks",{}))},noAuto(){Ma()},watch(t){const{observeMutationsRoot:e}=t;xe?Ft():de(St("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const ke=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,r)=>{const a=r.toLowerCase().split("-"),i=a[0];let o=a.slice(1).join("-");if(i&&o==="h")return n.flipX=!0,n;if(i&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(i){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var Xa={mixout(){return{parse:{transform:t=>ke(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=ke(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:r,containerWidth:a,iconWidth:i}=e;const o={transform:"translate(".concat(a/2," 256)")},s="translate(".concat(r.x*32,", ").concat(r.y*32,") "),l="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),c="rotate(".concat(r.rotate," 0 0)"),m={transform:"".concat(s," ").concat(l," ").concat(c)},p={transform:"translate(".concat(i/2*-1," -256)")},d={outer:o,inner:m,path:p};return{tag:"g",attributes:{...d.outer},children:[{tag:"g",attributes:{...d.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...d.path}}]}]}}}};const kt={x:0,y:0,width:"100%",height:"100%"};function Ae(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Va(t){return t.tag==="g"?t.children:[t]}var $a={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),r=n?pt(n.split(" ").map(a=>a.trim())):Vt();return r.prefix||(r.prefix=z()),t.mask=r,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:r,main:a,mask:i,maskId:o,transform:s}=e;const{width:l,icon:c}=a,{width:m,icon:p}=i,d=Bn({transform:s,containerWidth:m,iconWidth:l}),b={tag:"rect",attributes:{...kt,fill:"white"}},O=c.children?{children:c.children.map(Ae)}:{},R={tag:"g",attributes:{...d.inner},children:[Ae({tag:c.tag,attributes:{...c.attributes,...d.path},...O})]},A={tag:"g",attributes:{...d.outer},children:[R]},I="mask-".concat(o||at()),y="clip-".concat(o||at()),w={tag:"mask",attributes:{...kt,id:I,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[b,A]},G={tag:"defs",children:[{tag:"clipPath",attributes:{id:y},children:Va(p)},w]};return n.push(G,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(y,")"),mask:"url(#".concat(I,")"),...kt}}),{children:n,attributes:r}}}},qa={provides(t){let e=!1;_.matchMedia&&(e=_.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...r,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const i={...a,attributeName:"opacity"},o={tag:"circle",attributes:{...r,cx:"256",cy:"364",r:"28"},children:[]};return e||o.children.push({tag:"animate",attributes:{...a,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...i,values:"1;0;1;1;0;1;"}}),n.push(o),n.push({tag:"path",attributes:{...r,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:e?[]:[{tag:"animate",attributes:{...i,values:"1;0;0;0;0;1;"}}]}),e||n.push({tag:"path",attributes:{...r,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...i,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Ka={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return t.symbol=r,t}}}},Qa=[$n,Fa,_a,za,Da,Ga,Ba,Xa,$a,qa,Ka];la(Qa,{mixoutsTo:k});k.noAuto;k.config;const Ja=k.library,Za=k.dom;k.parse;k.findIconDefinition;k.toHtml;k.icon;k.layer;k.text;k.counter;const tn={prefix:"fas",iconName:"campground",icon:[576,512,[9978],"f6bb","M377 52c11-13.8 8.8-33.9-5-45s-33.9-8.8-45 5L288 60.8 249 12c-11-13.8-31.2-16-45-5s-16 31.2-5 45l48 60L12.3 405.4C4.3 415.4 0 427.7 0 440.4L0 464c0 26.5 21.5 48 48 48l240 0 240 0c26.5 0 48-21.5 48-48l0-23.6c0-12.7-4.3-25.1-12.3-35L329 112l48-60zM288 448l-119.5 0L288 291.7 407.5 448 288 448z"]},en={prefix:"fas",iconName:"tree",icon:[448,512,[127794],"f1bb","M210.6 5.9L62 169.4c-3.9 4.2-6 9.8-6 15.5C56 197.7 66.3 208 79.1 208l24.9 0L30.6 281.4c-4.2 4.2-6.6 10-6.6 16C24 309.9 34.1 320 46.6 320L80 320 5.4 409.5C1.9 413.7 0 419 0 424.5c0 13 10.5 23.5 23.5 23.5L192 448l0 32c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32 168.5 0c13 0 23.5-10.5 23.5-23.5c0-5.5-1.9-10.8-5.4-15L368 320l33.4 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16L344 208l24.9 0c12.7 0 23.1-10.3 23.1-23.1c0-5.7-2.1-11.3-6-15.5L237.4 5.9C234 2.1 229.1 0 224 0s-10 2.1-13.4 5.9z"]},nn={prefix:"fas",iconName:"bicycle",icon:[640,512,[128690],"f206","M312 32c-13.3 0-24 10.7-24 24s10.7 24 24 24l25.7 0 34.6 64-149.4 0-27.4-38C191 99.7 183.7 96 176 96l-56 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l43.7 0 22.1 30.7-26.6 53.1c-10-2.5-20.5-3.8-31.2-3.8C57.3 224 0 281.3 0 352s57.3 128 128 128c65.3 0 119.1-48.9 127-112l49 0c8.5 0 16.3-4.5 20.7-11.8l84.8-143.5 21.7 40.1C402.4 276.3 384 312 384 352c0 70.7 57.3 128 128 128s128-57.3 128-128s-57.3-128-128-128c-13.5 0-26.5 2.1-38.7 6L375.4 48.8C369.8 38.4 359 32 347.2 32L312 32zM458.6 303.7l32.3 59.7c6.3 11.7 20.9 16 32.5 9.7s16-20.9 9.7-32.5l-32.3-59.7c3.6-.6 7.4-.9 11.2-.9c39.8 0 72 32.2 72 72s-32.2 72-72 72s-72-32.2-72-72c0-18.6 7-35.5 18.6-48.3zM133.2 368l65 0c-7.3 32.1-36 56-70.2 56c-39.8 0-72-32.2-72-72s32.2-72 72-72c1.7 0 3.4 .1 5.1 .2l-24.2 48.5c-9 18.1 4.1 39.4 24.3 39.4zm33.7-48l50.7-101.3 72.9 101.2-.1 .1-123.5 0zm90.6-128l108.5 0L317 274.8 257.4 192z"]},zt={prefix:"fas",iconName:"mug-hot",icon:[512,512,[9749],"f7b6","M88 0C74.7 0 64 10.7 64 24c0 38.9 23.4 59.4 39.1 73.1l1.1 1C120.5 112.3 128 119.9 128 136c0 13.3 10.7 24 24 24s24-10.7 24-24c0-38.9-23.4-59.4-39.1-73.1l-1.1-1C119.5 47.7 112 40.1 112 24c0-13.3-10.7-24-24-24zM32 192c-17.7 0-32 14.3-32 32L0 416c0 53 43 96 96 96l192 0c53 0 96-43 96-96l16 0c61.9 0 112-50.1 112-112s-50.1-112-112-112l-48 0L32 192zm352 64l16 0c26.5 0 48 21.5 48 48s-21.5 48-48 48l-16 0 0-96zM224 24c0-13.3-10.7-24-24-24s-24 10.7-24 24c0 38.9 23.4 59.4 39.1 73.1l1.1 1C232.5 112.3 240 119.9 240 136c0 13.3 10.7 24 24 24s24-10.7 24-24c0-38.9-23.4-59.4-39.1-73.1l-1.1-1C231.5 47.7 224 40.1 224 24z"]},an={prefix:"fas",iconName:"heart",icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,9829,10084,61578],"f004","M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"]},rn={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},on={prefix:"fas",iconName:"car",icon:[512,512,[128664,"automobile"],"f1b9","M135.2 117.4L109.1 192l293.8 0-26.1-74.6C372.3 104.6 360.2 96 346.6 96L165.4 96c-13.6 0-25.7 8.6-30.2 21.4zM39.6 196.8L74.8 96.3C88.3 57.8 124.6 32 165.4 32l181.2 0c40.8 0 77.1 25.8 90.6 64.3l35.2 100.5c23.2 9.6 39.6 32.5 39.6 59.2l0 144 0 48c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-48L96 400l0 48c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-48L0 256c0-26.7 16.4-49.6 39.6-59.2zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"]},tr={prefix:"fas",iconName:"location-dot",icon:[384,512,["map-marker-alt"],"f3c5","M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"]},sn=tr;Ja.add(rn,an,zt,on,nn,sn,en,tn);Za.watch();const er={name:"MapComponent",data(){return{map:null,infoWindow:null,markerName:"",startTime:"",endTime:"",markerDescription:"",shareWithGroup:!1,currentMarker:null,currentIcon:"faMugHot",pins:[{lat:59.3293,lng:18.0686,icon:"faHouse",title:"House",description:"My home!",duration:"08:00-09:00"},{lat:59.3325,lng:18.0649,icon:"faHeart",title:"Heart",description:"A lovely spot",duration:"10:00-11:30"},{lat:59.3346,lng:18.07,icon:"faMugHot",title:"Mug",description:"Great coffee here!",duration:"15:00-16:00"}]}},mounted(){this.initMap()},methods:{initMap(){const t={lat:59.3293,lng:18.0686};this.map=new google.maps.Map(document.getElementById("map"),{center:t,zoom:12}),this.infoWindow=new google.maps.InfoWindow,this.pins.forEach(e=>{this.addMarker(e)}),this.map.addListener("click",e=>{this.currentMarker={lat:e.latLng.lat(),lng:e.latLng.lng(),icon:this.currentIcon},this.openModal()})},addMarker(t){const e=new google.maps.Marker({position:{lat:t.lat,lng:t.lng},map:this.map,title:t.title||"Untitled",icon:{path:this.getIconPath(t.icon),fillColor:"#ff6347",fillOpacity:1,strokeWeight:1,scale:.08}});e.addListener("click",()=>{this.openInfoWindow(e,t)})},openInfoWindow(t,e){const n=`
        <h5>${t.getTitle()}</h5>
        <p><strong>Description:</strong> ${e.description||""}</p>
        <p><strong>Duration:</strong> ${e.duration||""}</p>
      `;this.infoWindow.setContent(n),this.infoWindow.open(this.map,t)},openModal(){new window.bootstrap.Modal(document.getElementById("nameModal")).show()},selectIcon(t){this.currentIcon=t},saveMarker(){const t=`${this.startTime}-${this.endTime}`;this.currentMarker.title=this.markerName,this.currentMarker.description=this.markerDescription,this.currentMarker.duration=t,this.currentMarker.visibility=this.shareWithGroup?"Group":"All Friends",this.currentMarker.icon=this.currentIcon,this.addMarker(this.currentMarker),this.markerName="",this.startTime="",this.endTime="",this.markerDescription="",this.shareWithGroup=!1,this.currentMarker=null,window.bootstrap.Modal.getInstance(document.getElementById("nameModal")).hide()},getIconPath(t){return{faHouse:rn.icon[4],faHeart:an.icon[4],faMugHot:zt.icon[4],faCar:on.icon[4],faBicycle:nn.icon[4],faMapMarkerAlt:sn.icon[4],faTree:en.icon[4],faCampground:tn.icon[4]}[t]||zt.icon[4]}}},nr={class:"map-container"},ar={class:"modal fade",id:"nameModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},rr={class:"modal-dialog"},ir={class:"modal-content"},or={class:"modal-body"},sr={class:"mb-3"},lr={class:"mb-3"},cr={class:"mb-3"},fr={class:"mb-3"},ur={class:"mb-3"},mr={class:"d-flex gap-2 flex-wrap"},dr={class:"mb-3"},pr={class:"form-check form-switch"},gr={class:"form-check-label",for:"visibilityToggle"};function hr(t,e,n,r,a,i){return Rt(),jt("div",nr,[e[30]||(e[30]=u("div",{id:"map"},null,-1)),u("div",ar,[u("div",rr,[u("div",ir,[e[29]||(e[29]=u("div",{class:"modal-header"},[u("h5",{class:"modal-title",id:"exampleModalLabel"},"Create Pin Point"),u("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1)),u("div",or,[u("form",{onSubmit:e[13]||(e[13]=fn((...o)=>i.saveMarker&&i.saveMarker(...o),["prevent"]))},[u("div",sr,[e[14]||(e[14]=u("label",{for:"markerName",class:"form-label"},"Title",-1)),Q(u("input",{type:"text",class:"form-control",id:"markerName","onUpdate:modelValue":e[0]||(e[0]=o=>a.markerName=o),required:"",placeholder:"Enter point title"},null,512),[[ot,a.markerName]])]),u("div",lr,[e[15]||(e[15]=u("label",{for:"startTime",class:"form-label"},"Start Time",-1)),Q(u("input",{type:"time",class:"form-control",id:"startTime","onUpdate:modelValue":e[1]||(e[1]=o=>a.startTime=o),required:""},null,512),[[ot,a.startTime]])]),u("div",cr,[e[16]||(e[16]=u("label",{for:"endTime",class:"form-label"},"End Time",-1)),Q(u("input",{type:"time",class:"form-control",id:"endTime","onUpdate:modelValue":e[2]||(e[2]=o=>a.endTime=o),required:""},null,512),[[ot,a.endTime]])]),u("div",fr,[e[17]||(e[17]=u("label",{for:"markerDescription",class:"form-label"},"Description",-1)),Q(u("textarea",{class:"form-control",id:"markerDescription","onUpdate:modelValue":e[3]||(e[3]=o=>a.markerDescription=o),rows:"3",placeholder:"Describe this point..."},null,512),[[ot,a.markerDescription]])]),u("div",ur,[e[26]||(e[26]=u("label",{for:"markerIcon",class:"form-label"},"Select Icon",-1)),u("div",mr,[u("button",{type:"button",class:T(["btn btn-outline-secondary",{active:a.currentIcon==="faHouse"}]),onClick:e[4]||(e[4]=o=>i.selectIcon("faHouse"))},e[18]||(e[18]=[u("i",{class:"fas fa-house"},null,-1)]),2),u("button",{type:"button",class:T(["btn btn-outline-secondary",{active:a.currentIcon==="faHeart"}]),onClick:e[5]||(e[5]=o=>i.selectIcon("faHeart"))},e[19]||(e[19]=[u("i",{class:"fas fa-heart"},null,-1)]),2),u("button",{type:"button",class:T(["btn btn-outline-secondary",{active:a.currentIcon==="faMugHot"}]),onClick:e[6]||(e[6]=o=>i.selectIcon("faMugHot"))},e[20]||(e[20]=[u("i",{class:"fas fa-mug-hot"},null,-1)]),2),u("button",{type:"button",class:T(["btn btn-outline-secondary",{active:a.currentIcon==="faCar"}]),onClick:e[7]||(e[7]=o=>i.selectIcon("faCar"))},e[21]||(e[21]=[u("i",{class:"fas fa-car"},null,-1)]),2),u("button",{type:"button",class:T(["btn btn-outline-secondary",{active:a.currentIcon==="faBicycle"}]),onClick:e[8]||(e[8]=o=>i.selectIcon("faBicycle"))},e[22]||(e[22]=[u("i",{class:"fas fa-bicycle"},null,-1)]),2),u("button",{type:"button",class:T(["btn btn-outline-secondary",{active:a.currentIcon==="faMapMarkerAlt"}]),onClick:e[9]||(e[9]=o=>i.selectIcon("faMapMarkerAlt"))},e[23]||(e[23]=[u("i",{class:"fas fa-map-marker-alt"},null,-1)]),2),u("button",{type:"button",class:T(["btn btn-outline-secondary",{active:a.currentIcon==="faTree"}]),onClick:e[10]||(e[10]=o=>i.selectIcon("faTree"))},e[24]||(e[24]=[u("i",{class:"fas fa-tree"},null,-1)]),2),u("button",{type:"button",class:T(["btn btn-outline-secondary",{active:a.currentIcon==="faCampground"}]),onClick:e[11]||(e[11]=o=>i.selectIcon("faCampground"))},e[25]||(e[25]=[u("i",{class:"fas fa-campground"},null,-1)]),2)])]),u("div",dr,[e[27]||(e[27]=u("label",{class:"form-label"},"Visibility",-1)),u("div",pr,[Q(u("input",{class:"form-check-input",type:"checkbox",id:"visibilityToggle","onUpdate:modelValue":e[12]||(e[12]=o=>a.shareWithGroup=o)},null,512),[[un,a.shareWithGroup]]),u("label",gr,mn(a.shareWithGroup?"Share with close group":"Share with all friends"),1)])]),e[28]||(e[28]=u("button",{type:"submit",class:"btn btn-primary w-100"},"Save Pin",-1))],32)])])])])])}const br=Dt(er,[["render",hr],["__scopeId","data-v-1d64c31f"]]),yr={name:"ButtonOverlay",methods:{addFriend(){alert("Add friend functionality triggered!")}}},vr={class:"button-overlay"};function xr(t,e,n,r,a,i){return Rt(),jt("div",vr,[u("button",{onClick:e[0]||(e[0]=(...o)=>i.addFriend&&i.addFriend(...o)),class:"btn btn-primary rounded-circle overlay-button"},e[1]||(e[1]=[u("i",{class:"bi bi-plus"},null,-1)]))])}const kr=Dt(yr,[["render",xr],["__scopeId","data-v-be25fead"]]),Ar={name:"MapPage",components:{MapComponent:br,ButtonOverlay:kr}},wr={class:"map-page"};function Cr(t,e,n,r,a,i){const o=Jt("MapComponent"),s=Jt("ButtonOverlay");return Rt(),jt("div",wr,[Qt(o),Qt(s)])}const Er=Dt(Ar,[["render",Cr],["__scopeId","data-v-6dab1510"]]);export{Er as default};

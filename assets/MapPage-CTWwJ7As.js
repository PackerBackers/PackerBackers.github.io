import{_ as Me,o as V,c as $,a as u,w as pn,b as X,v as lt,n as T,d as Kt,F as Jt,r as Qt,t as Zt,h as te,i as ee}from"./index-DYUmjYUd.js";const ne=()=>{};let jt={},Ee={},Ne=null,Se={mark:ne,measure:ne};try{typeof window<"u"&&(jt=window),typeof document<"u"&&(Ee=document),typeof MutationObserver<"u"&&(Ne=MutationObserver),typeof performance<"u"&&(Se=performance)}catch{}const{userAgent:ae=""}=jt.navigator||{},_=jt,g=Ee,re=Ne,ct=Se;_.document;const P=!!g.documentElement&&!!g.head&&typeof g.addEventListener=="function"&&typeof g.createElement=="function",Pe=~ae.indexOf("MSIE")||~ae.indexOf("Trident/");var h="classic",Oe="duotone",v="sharp",x="sharp-duotone",gn=[h,Oe,v,x],hn={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},se={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},bn=["kit"],yn=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,vn=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,xn={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},kn={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},An={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},wn={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},In={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},Cn={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},Te={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},Mn=["solid","regular","light","thin","duotone","brands"],Le=[1,2,3,4,5,6,7,8,9,10],En=Le.concat([11,12,13,14,15,16,17,18,19,20]),tt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Nn=[...Object.keys(wn),...Mn,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",tt.GROUP,tt.SWAP_OPACITY,tt.PRIMARY,tt.SECONDARY].concat(Le.map(t=>"".concat(t,"x"))).concat(En.map(t=>"w-".concat(t))),Sn={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Pn={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},On={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},ie={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const N="___FONT_AWESOME___",It=16,Fe="fa",_e="svg-inline--fa",Y="data-fa-i2svg",Ct="data-fa-pseudo-element",Tn="data-fa-pseudo-element-pending",Ht="data-prefix",Ut="data-icon",oe="fontawesome-i2svg",Ln="async",Fn=["HTML","HEAD","STYLE","SCRIPT"],ze=(()=>{try{return!0}catch{return!1}})(),De=[h,v,x];function it(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[h]}})}const Re={...Te};Re[h]={...Te[h],...se.kit,...se["kit-duotone"]};const H=it(Re),Mt={...Cn};Mt[h]={...Mt[h],...ie.kit,...ie["kit-duotone"]};const rt=it(Mt),Et={...In};Et[h]={...Et[h],...On.kit};const U=it(Et),Nt={...An};Nt[h]={...Nt[h],...Pn.kit};const _n=it(Nt),zn=yn,je="fa-layers-text",Dn=vn,Rn={...hn};it(Rn);const jn=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],vt=tt,J=new Set;Object.keys(rt[h]).map(J.add.bind(J));Object.keys(rt[v]).map(J.add.bind(J));Object.keys(rt[x]).map(J.add.bind(J));const Hn=[...bn,...Nn],nt=_.FontAwesomeConfig||{};function Un(t){var e=g.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Yn(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}g&&typeof g.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,r]=e;const a=Yn(Un(n));a!=null&&(nt[r]=a)});const He={styleDefault:"solid",familyDefault:"classic",cssPrefix:Fe,replacementClass:_e,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};nt.familyPrefix&&(nt.cssPrefix=nt.familyPrefix);const Q={...He,...nt};Q.autoReplaceSvg||(Q.observeMutations=!1);const f={};Object.keys(He).forEach(t=>{Object.defineProperty(f,t,{enumerable:!0,set:function(e){Q[t]=e,at.forEach(n=>n(f))},get:function(){return Q[t]}})});Object.defineProperty(f,"familyPrefix",{enumerable:!0,set:function(t){Q.cssPrefix=t,at.forEach(e=>e(f))},get:function(){return Q.cssPrefix}});_.FontAwesomeConfig=f;const at=[];function Gn(t){return at.push(t),()=>{at.splice(at.indexOf(t),1)}}const L=It,I={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Wn(t){if(!t||!P)return;const e=g.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=g.head.childNodes;let r=null;for(let a=n.length-1;a>-1;a--){const s=n[a],i=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(r=s)}return g.head.insertBefore(e,r),t}const Bn="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function st(){let t=12,e="";for(;t-- >0;)e+=Bn[Math.random()*62|0];return e}function Z(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Yt(t){return t.classList?Z(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function Ue(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Xn(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(Ue(t[n]),'" '),"").trim()}function pt(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Gt(t){return t.size!==I.size||t.x!==I.x||t.y!==I.y||t.rotate!==I.rotate||t.flipX||t.flipY}function Vn(t){let{transform:e,containerWidth:n,iconWidth:r}=t;const a={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),i="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),o="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(i," ").concat(o)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function $n(t){let{transform:e,width:n=It,height:r=It,startCentered:a=!1}=t,s="";return a&&Pe?s+="translate(".concat(e.x/L-n/2,"em, ").concat(e.y/L-r/2,"em) "):a?s+="translate(calc(-50% + ".concat(e.x/L,"em), calc(-50% + ").concat(e.y/L,"em)) "):s+="translate(".concat(e.x/L,"em, ").concat(e.y/L,"em) "),s+="scale(".concat(e.size/L*(e.flipX?-1:1),", ").concat(e.size/L*(e.flipY?-1:1),") "),s+="rotate(".concat(e.rotate,"deg) "),s}var qn=`:root, :host {
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
}`;function Ye(){const t=Fe,e=_e,n=f.cssPrefix,r=f.replacementClass;let a=qn;if(n!==t||r!==e){const s=new RegExp("\\.".concat(t,"\\-"),"g"),i=new RegExp("\\--".concat(t,"\\-"),"g"),o=new RegExp("\\.".concat(e),"g");a=a.replace(s,".".concat(n,"-")).replace(i,"--".concat(n,"-")).replace(o,".".concat(r))}return a}let le=!1;function xt(){f.autoAddCss&&!le&&(Wn(Ye()),le=!0)}var Kn={mixout(){return{dom:{css:Ye,insertCss:xt}}},hooks(){return{beforeDOMElementCreation(){xt()},beforeI2svg(){xt()}}}};const S=_||{};S[N]||(S[N]={});S[N].styles||(S[N].styles={});S[N].hooks||(S[N].hooks={});S[N].shims||(S[N].shims=[]);var C=S[N];const Ge=[],We=function(){g.removeEventListener("DOMContentLoaded",We),mt=1,Ge.map(t=>t())};let mt=!1;P&&(mt=(g.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(g.readyState),mt||g.addEventListener("DOMContentLoaded",We));function Jn(t){P&&(mt?setTimeout(t,0):Ge.push(t))}function ot(t){const{tag:e,attributes:n={},children:r=[]}=t;return typeof t=="string"?Ue(t):"<".concat(e," ").concat(Xn(n),">").concat(r.map(ot).join(""),"</").concat(e,">")}function ce(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var kt=function(e,n,r,a){var s=Object.keys(e),i=s.length,o=n,l,c,m;for(r===void 0?(l=1,m=e[s[0]]):(l=0,m=r);l<i;l++)c=s[l],m=o(m,e[c],c,e);return m};function Qn(t){const e=[];let n=0;const r=t.length;for(;n<r;){const a=t.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){const s=t.charCodeAt(n++);(s&64512)==56320?e.push(((a&1023)<<10)+(s&1023)+65536):(e.push(a),n--)}else e.push(a)}return e}function St(t){const e=Qn(t);return e.length===1?e[0].toString(16):null}function Zn(t,e){const n=t.length;let r=t.charCodeAt(e),a;return r>=55296&&r<=56319&&n>e+1&&(a=t.charCodeAt(e+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function fe(t){return Object.keys(t).reduce((e,n)=>{const r=t[n];return!!r.icon?e[r.iconName]=r.icon:e[n]=r,e},{})}function Pt(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,a=fe(e);typeof C.hooks.addPack=="function"&&!r?C.hooks.addPack(t,fe(e)):C.styles[t]={...C.styles[t]||{},...a},t==="fas"&&Pt("fa",e)}const{styles:j,shims:ta}=C,ea={[h]:Object.values(U[h]),[v]:Object.values(U[v]),[x]:Object.values(U[x])};let Wt=null,Be={},Xe={},Ve={},$e={},qe={};const na={[h]:Object.keys(H[h]),[v]:Object.keys(H[v]),[x]:Object.keys(H[x])};function aa(t){return~Hn.indexOf(t)}function ra(t,e){const n=e.split("-"),r=n[0],a=n.slice(1).join("-");return r===t&&a!==""&&!aa(a)?a:null}const Ke=()=>{const t=r=>kt(j,(a,s,i)=>(a[i]=kt(s,r,{}),a),{});Be=t((r,a,s)=>(a[3]&&(r[a[3]]=s),a[2]&&a[2].filter(o=>typeof o=="number").forEach(o=>{r[o.toString(16)]=s}),r)),Xe=t((r,a,s)=>(r[s]=s,a[2]&&a[2].filter(o=>typeof o=="string").forEach(o=>{r[o]=s}),r)),qe=t((r,a,s)=>{const i=a[2];return r[s]=s,i.forEach(o=>{r[o]=s}),r});const e="far"in j||f.autoFetchSvg,n=kt(ta,(r,a)=>{const s=a[0];let i=a[1];const o=a[2];return i==="far"&&!e&&(i="fas"),typeof s=="string"&&(r.names[s]={prefix:i,iconName:o}),typeof s=="number"&&(r.unicodes[s.toString(16)]={prefix:i,iconName:o}),r},{names:{},unicodes:{}});Ve=n.names,$e=n.unicodes,Wt=gt(f.styleDefault,{family:f.familyDefault})};Gn(t=>{Wt=gt(t.styleDefault,{family:f.familyDefault})});Ke();function Bt(t,e){return(Be[t]||{})[e]}function sa(t,e){return(Xe[t]||{})[e]}function F(t,e){return(qe[t]||{})[e]}function Je(t){return Ve[t]||{prefix:null,iconName:null}}function ia(t){const e=$e[t],n=Bt("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function z(){return Wt}const Xt=()=>({prefix:null,iconName:null,rest:[]});function gt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=h}=e,r=H[n][t],a=rt[n][t]||rt[n][r],s=t in C.styles?t:null;return a||s||null}const oa={[h]:Object.keys(U[h]),[v]:Object.keys(U[v]),[x]:Object.keys(U[x])};function ht(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e,r={[h]:"".concat(f.cssPrefix,"-").concat(h),[v]:"".concat(f.cssPrefix,"-").concat(v),[x]:"".concat(f.cssPrefix,"-").concat(x)};let a=null,s=h;const i=gn.filter(l=>l!==Oe);i.forEach(l=>{(t.includes(r[l])||t.some(c=>oa[l].includes(c)))&&(s=l)});const o=t.reduce((l,c)=>{const m=ra(f.cssPrefix,c);if(j[c]?(c=ea[s].includes(c)?_n[s][c]:c,a=c,l.prefix=c):na[s].indexOf(c)>-1?(a=c,l.prefix=gt(c,{family:s})):m?l.iconName=m:c!==f.replacementClass&&!i.some(p=>c===r[p])&&l.rest.push(c),!n&&l.prefix&&l.iconName){const p=a==="fa"?Je(l.iconName):{},d=F(l.prefix,l.iconName);p.prefix&&(a=null),l.iconName=p.iconName||d||l.iconName,l.prefix=p.prefix||l.prefix,l.prefix==="far"&&!j.far&&j.fas&&!f.autoFetchSvg&&(l.prefix="fas")}return l},Xt());return(t.includes("fa-brands")||t.includes("fab"))&&(o.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(o.prefix="fad"),!o.prefix&&s===v&&(j.fass||f.autoFetchSvg)&&(o.prefix="fass",o.iconName=F(o.prefix,o.iconName)||o.iconName),!o.prefix&&s===x&&(j.fasds||f.autoFetchSvg)&&(o.prefix="fasds",o.iconName=F(o.prefix,o.iconName)||o.iconName),(o.prefix==="fa"||a==="fa")&&(o.prefix=z()||"fas"),o}class la{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];const a=n.reduce(this._pullDefinitions,{});Object.keys(a).forEach(s=>{this.definitions[s]={...this.definitions[s]||{},...a[s]},Pt(s,a[s]);const i=U[h][s];i&&Pt(i,a[s]),Ke()})}reset(){this.definitions={}}_pullDefinitions(e,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(a=>{const{prefix:s,iconName:i,icon:o}=r[a],l=o[2];e[s]||(e[s]={}),l.length>0&&l.forEach(c=>{typeof c=="string"&&(e[s][c]=o)}),e[s][i]=o}),e}}let ue=[],q={};const K={},ca=Object.keys(K);function fa(t,e){let{mixoutsTo:n}=e;return ue=t,q={},Object.keys(K).forEach(r=>{ca.indexOf(r)===-1&&delete K[r]}),ue.forEach(r=>{const a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(s=>{typeof a[s]=="function"&&(n[s]=a[s]),typeof a[s]=="object"&&Object.keys(a[s]).forEach(i=>{n[s]||(n[s]={}),n[s][i]=a[s][i]})}),r.hooks){const s=r.hooks();Object.keys(s).forEach(i=>{q[i]||(q[i]=[]),q[i].push(s[i])})}r.provides&&r.provides(K)}),n}function Ot(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];return(q[t]||[]).forEach(i=>{e=i.apply(null,[e,...r])}),e}function G(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];(q[t]||[]).forEach(s=>{s.apply(null,n)})}function D(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return K[t]?K[t].apply(null,e):void 0}function Tt(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||z();if(e)return e=F(n,e)||e,ce(Qe.definitions,n,e)||ce(C.styles,n,e)}const Qe=new la,ua=()=>{f.autoReplaceSvg=!1,f.observeMutations=!1,G("noAuto")},ma={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return P?(G("beforeI2svg",t),D("pseudoElements2svg",t),D("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;f.autoReplaceSvg===!1&&(f.autoReplaceSvg=!0),f.observeMutations=!0,Jn(()=>{pa({autoReplaceSvgRoot:e}),G("watch",t)})}},da={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:F(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=gt(t[0]);return{prefix:n,iconName:F(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(f.cssPrefix,"-"))>-1||t.match(zn))){const e=ht(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||z(),iconName:F(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=z();return{prefix:e,iconName:F(e,t)||t}}}},k={noAuto:ua,config:f,dom:ma,parse:da,library:Qe,findIconDefinition:Tt,toHtml:ot},pa=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=g}=t;(Object.keys(C.styles).length>0||f.autoFetchSvg)&&P&&f.autoReplaceSvg&&k.dom.i2svg({node:e})};function bt(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>ot(n))}}),Object.defineProperty(t,"node",{get:function(){if(!P)return;const n=g.createElement("div");return n.innerHTML=t.html,n.children}}),t}function ga(t){let{children:e,main:n,mask:r,attributes:a,styles:s,transform:i}=t;if(Gt(i)&&n.found&&!r.found){const{width:o,height:l}=n,c={x:o/l/2,y:.5};a.style=pt({...s,"transform-origin":"".concat(c.x+i.x/16,"em ").concat(c.y+i.y/16,"em")})}return[{tag:"svg",attributes:a,children:e}]}function ha(t){let{prefix:e,iconName:n,children:r,attributes:a,symbol:s}=t;const i=s===!0?"".concat(e,"-").concat(f.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...a,id:i},children:r}]}]}function Vt(t){const{icons:{main:e,mask:n},prefix:r,iconName:a,transform:s,symbol:i,title:o,maskId:l,titleId:c,extra:m,watchable:p=!1}=t,{width:d,height:b}=n.found?n:e,O=r==="fak",R=[f.replacementClass,a?"".concat(f.cssPrefix,"-").concat(a):""].filter(B=>m.classes.indexOf(B)===-1).filter(B=>B!==""||!!B).concat(m.classes).join(" ");let A={children:[],attributes:{...m.attributes,"data-prefix":r,"data-icon":a,class:R,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(d," ").concat(b)}};const E=O&&!~m.classes.indexOf("fa-fw")?{width:"".concat(d/b*16*.0625,"em")}:{};p&&(A.attributes[Y]=""),o&&(A.children.push({tag:"title",attributes:{id:A.attributes["aria-labelledby"]||"title-".concat(c||st())},children:[o]}),delete A.attributes.title);const y={...A,prefix:r,iconName:a,main:e,mask:n,maskId:l,transform:s,symbol:i,styles:{...E,...m.styles}},{children:w,attributes:W}=n.found&&e.found?D("generateAbstractMask",y)||{children:[],attributes:{}}:D("generateAbstractIcon",y)||{children:[],attributes:{}};return y.children=w,y.attributes=W,i?ha(y):ga(y)}function me(t){const{content:e,width:n,height:r,transform:a,title:s,extra:i,watchable:o=!1}=t,l={...i.attributes,...s?{title:s}:{},class:i.classes.join(" ")};o&&(l[Y]="");const c={...i.styles};Gt(a)&&(c.transform=$n({transform:a,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);const m=pt(c);m.length>0&&(l.style=m);const p=[];return p.push({tag:"span",attributes:l,children:[e]}),s&&p.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),p}function ba(t){const{content:e,title:n,extra:r}=t,a={...r.attributes,...n?{title:n}:{},class:r.classes.join(" ")},s=pt(r.styles);s.length>0&&(a.style=s);const i=[];return i.push({tag:"span",attributes:a,children:[e]}),n&&i.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),i}const{styles:At}=C;function Lt(t){const e=t[0],n=t[1],[r]=t.slice(4);let a=null;return Array.isArray(r)?a={tag:"g",attributes:{class:"".concat(f.cssPrefix,"-").concat(vt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(f.cssPrefix,"-").concat(vt.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(f.cssPrefix,"-").concat(vt.PRIMARY),fill:"currentColor",d:r[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:n,icon:a}}const ya={found:!1,width:512,height:512};function va(t,e){!ze&&!f.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Ft(t,e){let n=e;return e==="fa"&&f.styleDefault!==null&&(e=z()),new Promise((r,a)=>{if(n==="fa"){const s=Je(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&At[e]&&At[e][t]){const s=At[e][t];return r(Lt(s))}va(t,e),r({...ya,icon:f.showMissingIcons&&t?D("missingIconAbstract")||{}:{}})})}const de=()=>{},_t=f.measurePerformance&&ct&&ct.mark&&ct.measure?ct:{mark:de,measure:de},et='FA "6.6.0"',xa=t=>(_t.mark("".concat(et," ").concat(t," begins")),()=>Ze(t)),Ze=t=>{_t.mark("".concat(et," ").concat(t," ends")),_t.measure("".concat(et," ").concat(t),"".concat(et," ").concat(t," begins"),"".concat(et," ").concat(t," ends"))};var $t={begin:xa,end:Ze};const ft=()=>{};function pe(t){return typeof(t.getAttribute?t.getAttribute(Y):null)=="string"}function ka(t){const e=t.getAttribute?t.getAttribute(Ht):null,n=t.getAttribute?t.getAttribute(Ut):null;return e&&n}function Aa(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(f.replacementClass)}function wa(){return f.autoReplaceSvg===!0?ut.replace:ut[f.autoReplaceSvg]||ut.replace}function Ia(t){return g.createElementNS("http://www.w3.org/2000/svg",t)}function Ca(t){return g.createElement(t)}function tn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?Ia:Ca}=e;if(typeof t=="string")return g.createTextNode(t);const r=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(s){r.setAttribute(s,t.attributes[s])}),(t.children||[]).forEach(function(s){r.appendChild(tn(s,{ceFn:n}))}),r}function Ma(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const ut={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(tn(n),e)}),e.getAttribute(Y)===null&&f.keepOriginalSource){let n=g.createComment(Ma(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~Yt(e).indexOf(f.replacementClass))return ut.replace(t);const r=new RegExp("".concat(f.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const s=n[0].attributes.class.split(" ").reduce((i,o)=>(o===f.replacementClass||o.match(r)?i.toSvg.push(o):i.toNode.push(o),i),{toNode:[],toSvg:[]});n[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",s.toNode.join(" "))}const a=n.map(s=>ot(s)).join(`
`);e.setAttribute(Y,""),e.innerHTML=a}};function ge(t){t()}function en(t,e){const n=typeof e=="function"?e:ft;if(t.length===0)n();else{let r=ge;f.mutateApproach===Ln&&(r=_.requestAnimationFrame||ge),r(()=>{const a=wa(),s=$t.begin("mutate");t.map(a),s(),n()})}}let qt=!1;function nn(){qt=!0}function zt(){qt=!1}let dt=null;function he(t){if(!re||!f.observeMutations)return;const{treeCallback:e=ft,nodeCallback:n=ft,pseudoElementsCallback:r=ft,observeMutationsRoot:a=g}=t;dt=new re(s=>{if(qt)return;const i=z();Z(s).forEach(o=>{if(o.type==="childList"&&o.addedNodes.length>0&&!pe(o.addedNodes[0])&&(f.searchPseudoElements&&r(o.target),e(o.target)),o.type==="attributes"&&o.target.parentNode&&f.searchPseudoElements&&r(o.target.parentNode),o.type==="attributes"&&pe(o.target)&&~jn.indexOf(o.attributeName))if(o.attributeName==="class"&&ka(o.target)){const{prefix:l,iconName:c}=ht(Yt(o.target));o.target.setAttribute(Ht,l||i),c&&o.target.setAttribute(Ut,c)}else Aa(o.target)&&n(o.target)})}),P&&dt.observe(a,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Ea(){dt&&dt.disconnect()}function Na(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((r,a)=>{const s=a.split(":"),i=s[0],o=s.slice(1);return i&&o.length>0&&(r[i]=o.join(":").trim()),r},{})),n}function Sa(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"";let a=ht(Yt(t));return a.prefix||(a.prefix=z()),e&&n&&(a.prefix=e,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=sa(a.prefix,t.innerText)||Bt(a.prefix,St(t.innerText))),!a.iconName&&f.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=t.firstChild.data)),a}function Pa(t){const e=Z(t.attributes).reduce((a,s)=>(a.name!=="class"&&a.name!=="style"&&(a[s.name]=s.value),a),{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return f.autoA11y&&(n?e["aria-labelledby"]="".concat(f.replacementClass,"-title-").concat(r||st()):(e["aria-hidden"]="true",e.focusable="false")),e}function Oa(){return{iconName:null,title:null,titleId:null,prefix:null,transform:I,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function be(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:a}=Sa(t),s=Pa(t),i=Ot("parseNodeAttributes",{},t);let o=e.styleParser?Na(t):[];return{iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:I,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:o,attributes:s},...i}}const{styles:Ta}=C;function an(t){const e=f.autoReplaceSvg==="nest"?be(t,{styleParser:!1}):be(t);return~e.extra.classes.indexOf(je)?D("generateLayersText",t,e):D("generateSvgReplacementMutation",t,e)}let M=new Set;De.map(t=>{M.add("fa-".concat(t))});Object.keys(H[h]).map(M.add.bind(M));Object.keys(H[v]).map(M.add.bind(M));Object.keys(H[x]).map(M.add.bind(M));M=[...M];function ye(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!P)return Promise.resolve();const n=g.documentElement.classList,r=m=>n.add("".concat(oe,"-").concat(m)),a=m=>n.remove("".concat(oe,"-").concat(m)),s=f.autoFetchSvg?M:De.map(m=>"fa-".concat(m)).concat(Object.keys(Ta));s.includes("fa")||s.push("fa");const i=[".".concat(je,":not([").concat(Y,"])")].concat(s.map(m=>".".concat(m,":not([").concat(Y,"])"))).join(", ");if(i.length===0)return Promise.resolve();let o=[];try{o=Z(t.querySelectorAll(i))}catch{}if(o.length>0)r("pending"),a("complete");else return Promise.resolve();const l=$t.begin("onTree"),c=o.reduce((m,p)=>{try{const d=an(p);d&&m.push(d)}catch(d){ze||d.name==="MissingIcon"&&console.error(d)}return m},[]);return new Promise((m,p)=>{Promise.all(c).then(d=>{en(d,()=>{r("active"),r("complete"),a("pending"),typeof e=="function"&&e(),l(),m()})}).catch(d=>{l(),p(d)})})}function La(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;an(t).then(n=>{n&&en([n],e)})}function Fa(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(e||{}).icon?e:Tt(e||{});let{mask:a}=n;return a&&(a=(a||{}).icon?a:Tt(a||{})),t(r,{...n,mask:a})}}const _a=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=I,symbol:r=!1,mask:a=null,maskId:s=null,title:i=null,titleId:o=null,classes:l=[],attributes:c={},styles:m={}}=e;if(!t)return;const{prefix:p,iconName:d,icon:b}=t;return bt({type:"icon",...t},()=>(G("beforeDOMElementCreation",{iconDefinition:t,params:e}),f.autoA11y&&(i?c["aria-labelledby"]="".concat(f.replacementClass,"-title-").concat(o||st()):(c["aria-hidden"]="true",c.focusable="false")),Vt({icons:{main:Lt(b),mask:a?Lt(a.icon):{found:!1,width:null,height:null,icon:{}}},prefix:p,iconName:d,transform:{...I,...n},symbol:r,title:i,maskId:s,titleId:o,extra:{attributes:c,styles:m,classes:l}})))};var za={mixout(){return{icon:Fa(_a)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=ye,t.nodeCallback=La,t}}},provides(t){t.i2svg=function(e){const{node:n=g,callback:r=()=>{}}=e;return ye(n,r)},t.generateSvgReplacementMutation=function(e,n){const{iconName:r,title:a,titleId:s,prefix:i,transform:o,symbol:l,mask:c,maskId:m,extra:p}=n;return new Promise((d,b)=>{Promise.all([Ft(r,i),c.iconName?Ft(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(O=>{let[R,A]=O;d([e,Vt({icons:{main:R,mask:A},prefix:i,iconName:r,transform:o,symbol:l,maskId:m,title:a,titleId:s,extra:p,watchable:!0})])}).catch(b)})},t.generateAbstractIcon=function(e){let{children:n,attributes:r,main:a,transform:s,styles:i}=e;const o=pt(i);o.length>0&&(r.style=o);let l;return Gt(s)&&(l=D("generateAbstractTransformGrouping",{main:a,transform:s,containerWidth:a.width,iconWidth:a.width})),n.push(l||a.icon),{children:n,attributes:r}}}},Da={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return bt({type:"layer"},()=>{G("beforeDOMElementCreation",{assembler:t,params:e});let r=[];return t(a=>{Array.isArray(a)?a.map(s=>{r=r.concat(s.abstract)}):r=r.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(f.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},Ra={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:a={},styles:s={}}=e;return bt({type:"counter",content:t},()=>(G("beforeDOMElementCreation",{content:t,params:e}),ba({content:t.toString(),title:n,extra:{attributes:a,styles:s,classes:["".concat(f.cssPrefix,"-layers-counter"),...r]}})))}}}},ja={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=I,title:r=null,classes:a=[],attributes:s={},styles:i={}}=e;return bt({type:"text",content:t},()=>(G("beforeDOMElementCreation",{content:t,params:e}),me({content:t,transform:{...I,...n},title:r,extra:{attributes:s,styles:i,classes:["".concat(f.cssPrefix,"-layers-text"),...a]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:r,transform:a,extra:s}=n;let i=null,o=null;if(Pe){const l=parseInt(getComputedStyle(e).fontSize,10),c=e.getBoundingClientRect();i=c.width/l,o=c.height/l}return f.autoA11y&&!r&&(s.attributes["aria-hidden"]="true"),Promise.resolve([e,me({content:e.innerHTML,width:i,height:o,transform:a,title:r,extra:s,watchable:!0})])}}};const Ha=new RegExp('"',"ug"),ve=[1105920,1112319],xe={FontAwesome:{normal:"fas",400:"fas"},...kn,...xn,...Sn},Dt=Object.keys(xe).reduce((t,e)=>(t[e.toLowerCase()]=xe[e],t),{}),Ua=Object.keys(Dt).reduce((t,e)=>{const n=Dt[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function Ya(t){const e=t.replace(Ha,""),n=Zn(e,0),r=n>=ve[0]&&n<=ve[1],a=e.length===2?e[0]===e[1]:!1;return{value:St(a?e[0]:e),isSecondary:r||a}}function Ga(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),a=isNaN(r)?"normal":r;return(Dt[n]||{})[a]||Ua[n]}function ke(t,e){const n="".concat(Tn).concat(e.replace(":","-"));return new Promise((r,a)=>{if(t.getAttribute(n)!==null)return r();const i=Z(t.children).filter(d=>d.getAttribute(Ct)===e)[0],o=_.getComputedStyle(t,e),l=o.getPropertyValue("font-family"),c=l.match(Dn),m=o.getPropertyValue("font-weight"),p=o.getPropertyValue("content");if(i&&!c)return t.removeChild(i),r();if(c&&p!=="none"&&p!==""){const d=o.getPropertyValue("content");let b=Ga(l,m);const{value:O,isSecondary:R}=Ya(d),A=c[0].startsWith("FontAwesome");let E=Bt(b,O),y=E;if(A){const w=ia(O);w.iconName&&w.prefix&&(E=w.iconName,b=w.prefix)}if(E&&!R&&(!i||i.getAttribute(Ht)!==b||i.getAttribute(Ut)!==y)){t.setAttribute(n,y),i&&t.removeChild(i);const w=Oa(),{extra:W}=w;W.attributes[Ct]=e,Ft(E,b).then(B=>{const mn=Vt({...w,icons:{main:B,mask:Xt()},prefix:b,iconName:y,extra:W,watchable:!0}),yt=g.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(yt,t.firstChild):t.appendChild(yt),yt.outerHTML=mn.map(dn=>ot(dn)).join(`
`),t.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Wa(t){return Promise.all([ke(t,"::before"),ke(t,"::after")])}function Ba(t){return t.parentNode!==document.head&&!~Fn.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Ct)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Ae(t){if(P)return new Promise((e,n)=>{const r=Z(t.querySelectorAll("*")).filter(Ba).map(Wa),a=$t.begin("searchPseudoElements");nn(),Promise.all(r).then(()=>{a(),zt(),e()}).catch(()=>{a(),zt(),n()})})}var Xa={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=Ae,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=g}=e;f.searchPseudoElements&&Ae(n)}}};let we=!1;var Va={mixout(){return{dom:{unwatch(){nn(),we=!0}}}},hooks(){return{bootstrap(){he(Ot("mutationObserverCallbacks",{}))},noAuto(){Ea()},watch(t){const{observeMutationsRoot:e}=t;we?zt():he(Ot("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const Ie=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,r)=>{const a=r.toLowerCase().split("-"),s=a[0];let i=a.slice(1).join("-");if(s&&i==="h")return n.flipX=!0,n;if(s&&i==="v")return n.flipY=!0,n;if(i=parseFloat(i),isNaN(i))return n;switch(s){case"grow":n.size=n.size+i;break;case"shrink":n.size=n.size-i;break;case"left":n.x=n.x-i;break;case"right":n.x=n.x+i;break;case"up":n.y=n.y-i;break;case"down":n.y=n.y+i;break;case"rotate":n.rotate=n.rotate+i;break}return n},e)};var $a={mixout(){return{parse:{transform:t=>Ie(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=Ie(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:r,containerWidth:a,iconWidth:s}=e;const i={transform:"translate(".concat(a/2," 256)")},o="translate(".concat(r.x*32,", ").concat(r.y*32,") "),l="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),c="rotate(".concat(r.rotate," 0 0)"),m={transform:"".concat(o," ").concat(l," ").concat(c)},p={transform:"translate(".concat(s/2*-1," -256)")},d={outer:i,inner:m,path:p};return{tag:"g",attributes:{...d.outer},children:[{tag:"g",attributes:{...d.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...d.path}}]}]}}}};const wt={x:0,y:0,width:"100%",height:"100%"};function Ce(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function qa(t){return t.tag==="g"?t.children:[t]}var Ka={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),r=n?ht(n.split(" ").map(a=>a.trim())):Xt();return r.prefix||(r.prefix=z()),t.mask=r,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:r,main:a,mask:s,maskId:i,transform:o}=e;const{width:l,icon:c}=a,{width:m,icon:p}=s,d=Vn({transform:o,containerWidth:m,iconWidth:l}),b={tag:"rect",attributes:{...wt,fill:"white"}},O=c.children?{children:c.children.map(Ce)}:{},R={tag:"g",attributes:{...d.inner},children:[Ce({tag:c.tag,attributes:{...c.attributes,...d.path},...O})]},A={tag:"g",attributes:{...d.outer},children:[R]},E="mask-".concat(i||st()),y="clip-".concat(i||st()),w={tag:"mask",attributes:{...wt,id:E,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[b,A]},W={tag:"defs",children:[{tag:"clipPath",attributes:{id:y},children:qa(p)},w]};return n.push(W,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(y,")"),mask:"url(#".concat(E,")"),...wt}}),{children:n,attributes:r}}}},Ja={provides(t){let e=!1;_.matchMedia&&(e=_.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...r,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const s={...a,attributeName:"opacity"},i={tag:"circle",attributes:{...r,cx:"256",cy:"364",r:"28"},children:[]};return e||i.children.push({tag:"animate",attributes:{...a,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...s,values:"1;0;1;1;0;1;"}}),n.push(i),n.push({tag:"path",attributes:{...r,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:e?[]:[{tag:"animate",attributes:{...s,values:"1;0;0;0;0;1;"}}]}),e||n.push({tag:"path",attributes:{...r,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...s,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Qa={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return t.symbol=r,t}}}},Za=[Kn,za,Da,Ra,ja,Xa,Va,$a,Ka,Ja,Qa];fa(Za,{mixoutsTo:k});k.noAuto;k.config;const tr=k.library,er=k.dom;k.parse;k.findIconDefinition;k.toHtml;k.icon;k.layer;k.text;k.counter;const rn={prefix:"fas",iconName:"campground",icon:[576,512,[9978],"f6bb","M377 52c11-13.8 8.8-33.9-5-45s-33.9-8.8-45 5L288 60.8 249 12c-11-13.8-31.2-16-45-5s-16 31.2-5 45l48 60L12.3 405.4C4.3 415.4 0 427.7 0 440.4L0 464c0 26.5 21.5 48 48 48l240 0 240 0c26.5 0 48-21.5 48-48l0-23.6c0-12.7-4.3-25.1-12.3-35L329 112l48-60zM288 448l-119.5 0L288 291.7 407.5 448 288 448z"]},sn={prefix:"fas",iconName:"tree",icon:[448,512,[127794],"f1bb","M210.6 5.9L62 169.4c-3.9 4.2-6 9.8-6 15.5C56 197.7 66.3 208 79.1 208l24.9 0L30.6 281.4c-4.2 4.2-6.6 10-6.6 16C24 309.9 34.1 320 46.6 320L80 320 5.4 409.5C1.9 413.7 0 419 0 424.5c0 13 10.5 23.5 23.5 23.5L192 448l0 32c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32 168.5 0c13 0 23.5-10.5 23.5-23.5c0-5.5-1.9-10.8-5.4-15L368 320l33.4 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16L344 208l24.9 0c12.7 0 23.1-10.3 23.1-23.1c0-5.7-2.1-11.3-6-15.5L237.4 5.9C234 2.1 229.1 0 224 0s-10 2.1-13.4 5.9z"]},on={prefix:"fas",iconName:"bicycle",icon:[640,512,[128690],"f206","M312 32c-13.3 0-24 10.7-24 24s10.7 24 24 24l25.7 0 34.6 64-149.4 0-27.4-38C191 99.7 183.7 96 176 96l-56 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l43.7 0 22.1 30.7-26.6 53.1c-10-2.5-20.5-3.8-31.2-3.8C57.3 224 0 281.3 0 352s57.3 128 128 128c65.3 0 119.1-48.9 127-112l49 0c8.5 0 16.3-4.5 20.7-11.8l84.8-143.5 21.7 40.1C402.4 276.3 384 312 384 352c0 70.7 57.3 128 128 128s128-57.3 128-128s-57.3-128-128-128c-13.5 0-26.5 2.1-38.7 6L375.4 48.8C369.8 38.4 359 32 347.2 32L312 32zM458.6 303.7l32.3 59.7c6.3 11.7 20.9 16 32.5 9.7s16-20.9 9.7-32.5l-32.3-59.7c3.6-.6 7.4-.9 11.2-.9c39.8 0 72 32.2 72 72s-32.2 72-72 72s-72-32.2-72-72c0-18.6 7-35.5 18.6-48.3zM133.2 368l65 0c-7.3 32.1-36 56-70.2 56c-39.8 0-72-32.2-72-72s32.2-72 72-72c1.7 0 3.4 .1 5.1 .2l-24.2 48.5c-9 18.1 4.1 39.4 24.3 39.4zm33.7-48l50.7-101.3 72.9 101.2-.1 .1-123.5 0zm90.6-128l108.5 0L317 274.8 257.4 192z"]},Rt={prefix:"fas",iconName:"mug-hot",icon:[512,512,[9749],"f7b6","M88 0C74.7 0 64 10.7 64 24c0 38.9 23.4 59.4 39.1 73.1l1.1 1C120.5 112.3 128 119.9 128 136c0 13.3 10.7 24 24 24s24-10.7 24-24c0-38.9-23.4-59.4-39.1-73.1l-1.1-1C119.5 47.7 112 40.1 112 24c0-13.3-10.7-24-24-24zM32 192c-17.7 0-32 14.3-32 32L0 416c0 53 43 96 96 96l192 0c53 0 96-43 96-96l16 0c61.9 0 112-50.1 112-112s-50.1-112-112-112l-48 0L32 192zm352 64l16 0c26.5 0 48 21.5 48 48s-21.5 48-48 48l-16 0 0-96zM224 24c0-13.3-10.7-24-24-24s-24 10.7-24 24c0 38.9 23.4 59.4 39.1 73.1l1.1 1C232.5 112.3 240 119.9 240 136c0 13.3 10.7 24 24 24s24-10.7 24-24c0-38.9-23.4-59.4-39.1-73.1l-1.1-1C231.5 47.7 224 40.1 224 24z"]},ln={prefix:"fas",iconName:"heart",icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,9829,10084,61578],"f004","M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"]},cn={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},fn={prefix:"fas",iconName:"car",icon:[512,512,[128664,"automobile"],"f1b9","M135.2 117.4L109.1 192l293.8 0-26.1-74.6C372.3 104.6 360.2 96 346.6 96L165.4 96c-13.6 0-25.7 8.6-30.2 21.4zM39.6 196.8L74.8 96.3C88.3 57.8 124.6 32 165.4 32l181.2 0c40.8 0 77.1 25.8 90.6 64.3l35.2 100.5c23.2 9.6 39.6 32.5 39.6 59.2l0 144 0 48c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-48L96 400l0 48c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-48L0 256c0-26.7 16.4-49.6 39.6-59.2zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"]},nr={prefix:"fas",iconName:"location-dot",icon:[384,512,["map-marker-alt"],"f3c5","M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"]},un=nr;tr.add(cn,ln,Rt,fn,on,un,sn,rn);er.watch();const ar={name:"MapComponent",data(){return{map:null,infoWindow:null,markerName:"",startTime:"",endTime:"",markerDescription:"",currentMarker:null,currentIcon:"faMugHot",pins:[],friends:[],groups:[],selectedGroupId:null,selectedFriendIds:[],markers:{}}},mounted(){this.loadData(),this.initMap()},methods:{loadData(){const t=JSON.parse(localStorage.getItem("friends")),e=JSON.parse(localStorage.getItem("groups"));this.friends=t||[],this.groups=e||[];const n=JSON.parse(localStorage.getItem("pins"));n?this.pins=n:(this.pins=[{id:1,lat:59.3293,lng:18.0686,icon:"faHouse",title:"House",description:"My home!",duration:"08:00-09:00",groupId:null,friendIds:[]},{id:2,lat:59.3325,lng:18.0649,icon:"faHeart",title:"Heart",description:"A lovely spot",duration:"10:00-11:30",groupId:null,friendIds:[]},{id:3,lat:59.3346,lng:18.07,icon:"faMugHot",title:"Mug",description:"Great coffee here!",duration:"15:00-16:00",groupId:null,friendIds:[]}],this.savePins())},savePins(){localStorage.setItem("pins",JSON.stringify(this.pins))},initMap(){const t={lat:59.3293,lng:18.0686};this.map=new google.maps.Map(document.getElementById("map"),{center:t,zoom:12}),this.infoWindow=new google.maps.InfoWindow,this.pins.forEach(e=>{this.addMarker(e)}),this.map.addListener("click",e=>{this.currentMarker={lat:e.latLng.lat(),lng:e.latLng.lng(),icon:this.currentIcon},this.openModal()})},addMarker(t){const e=new google.maps.Marker({position:{lat:t.lat,lng:t.lng},map:this.map,title:t.title||"Untitled",icon:{path:this.getIconPath(t.icon),fillColor:"#ff6347",fillOpacity:1,strokeWeight:1,scale:.08}});return this.markers[t.id]=e,e.addListener("click",()=>{this.openInfoWindow(e,t)}),e},openInfoWindow(t,e){const n=this.getGroupNameById(e.groupId),r=this.getFriendNamesByIds(e.friendIds);let a=`
        <h5>${t.getTitle()}</h5>
        <p><strong>Description:</strong> ${e.description||""}</p>
        <p><strong>Duration:</strong> ${e.duration||""}</p>
      `;n&&(a+=`<p><strong>Group:</strong> ${n}</p>`),r.length>0&&(a+=`<p><strong>Friends:</strong> ${r.join(", ")}</p>`),a+=`<button id="delete-pin-${e.id}" class="btn btn-danger btn-sm">Delete Pin</button>`,this.infoWindow.setContent(a),this.infoWindow.open(this.map,t),google.maps.event.addListenerOnce(this.infoWindow,"domready",()=>{document.getElementById(`delete-pin-${e.id}`).addEventListener("click",()=>{this.deletePin(e.id),window.location.reload()})})},openModal(){new window.bootstrap.Modal(document.getElementById("nameModal")).show()},selectIcon(t){this.currentIcon=t},saveMarker(){const t=`${this.startTime}-${this.endTime}`;this.currentMarker.title=this.markerName,this.currentMarker.description=this.markerDescription,this.currentMarker.duration=t,this.currentMarker.icon=this.currentIcon,this.currentMarker.groupId=this.selectedGroupId,this.currentMarker.friendIds=this.selectedFriendIds;const e=this.pins.length?Math.max(...this.pins.map(r=>r.id))+1:1;this.currentMarker.id=e,this.addMarker(this.currentMarker),this.pins.push(this.currentMarker),this.savePins(),this.markerName="",this.startTime="",this.endTime="",this.markerDescription="",this.currentMarker=null,this.selectedGroupId=null,this.selectedFriendIds=[],window.bootstrap.Modal.getInstance(document.getElementById("nameModal")).hide()},deletePin(t){this.pins=this.pins.filter(e=>e.id!==t),this.markers[t]&&(this.markers[t].setMap(null),delete this.markers[t]),this.savePins(),this.infoWindow.close()},getGroupNameById(t){const e=this.groups.find(n=>n.id===t);return e?e.name:null},getFriendNamesByIds(t){return this.friends.filter(e=>t.includes(e.id)).map(e=>e.name)},getIconPath(t){return{faHouse:cn.icon[4],faHeart:ln.icon[4],faMugHot:Rt.icon[4],faCar:fn.icon[4],faBicycle:on.icon[4],faMapMarkerAlt:un.icon[4],faTree:sn.icon[4],faCampground:rn.icon[4]}[t]||Rt.icon[4]}}},rr={class:"map-container"},sr={class:"modal fade",id:"nameModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},ir={class:"modal-dialog"},or={class:"modal-content"},lr={class:"modal-body"},cr={class:"mb-3"},fr={class:"mb-3"},ur={class:"mb-3"},mr={class:"mb-3"},dr={class:"mb-3"},pr={class:"d-flex gap-2 flex-wrap"},gr={class:"mb-3"},hr=["value"],br={class:"mb-3"},yr=["value"];function vr(t,e,n,r,a,s){return V(),$("div",rr,[e[33]||(e[33]=u("div",{id:"map"},null,-1)),u("div",sr,[u("div",ir,[u("div",or,[e[32]||(e[32]=u("div",{class:"modal-header"},[u("h5",{class:"modal-title",id:"exampleModalLabel"},"Create Pin Point"),u("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1)),u("div",lr,[u("form",{onSubmit:e[14]||(e[14]=pn((...i)=>s.saveMarker&&s.saveMarker(...i),["prevent"]))},[u("div",cr,[e[15]||(e[15]=u("label",{for:"markerName",class:"form-label"},"Title",-1)),X(u("input",{type:"text",class:"form-control",id:"markerName","onUpdate:modelValue":e[0]||(e[0]=i=>a.markerName=i),required:"",placeholder:"Enter point title"},null,512),[[lt,a.markerName]])]),u("div",fr,[e[16]||(e[16]=u("label",{for:"startTime",class:"form-label"},"Start Time",-1)),X(u("input",{type:"time",class:"form-control",id:"startTime","onUpdate:modelValue":e[1]||(e[1]=i=>a.startTime=i),required:""},null,512),[[lt,a.startTime]])]),u("div",ur,[e[17]||(e[17]=u("label",{for:"endTime",class:"form-label"},"End Time",-1)),X(u("input",{type:"time",class:"form-control",id:"endTime","onUpdate:modelValue":e[2]||(e[2]=i=>a.endTime=i),required:""},null,512),[[lt,a.endTime]])]),u("div",mr,[e[18]||(e[18]=u("label",{for:"markerDescription",class:"form-label"},"Description",-1)),X(u("textarea",{class:"form-control",id:"markerDescription","onUpdate:modelValue":e[3]||(e[3]=i=>a.markerDescription=i),rows:"3",placeholder:"Describe this point..."},null,512),[[lt,a.markerDescription]])]),u("div",dr,[e[27]||(e[27]=u("label",{for:"markerIcon",class:"form-label"},"Select Icon",-1)),u("div",pr,[u("button",{type:"button",class:T(["btn btn-outline-secondary",{active:a.currentIcon==="faHouse"}]),onClick:e[4]||(e[4]=i=>s.selectIcon("faHouse"))},e[19]||(e[19]=[u("i",{class:"fas fa-house"},null,-1)]),2),u("button",{type:"button",class:T(["btn btn-outline-secondary",{active:a.currentIcon==="faHeart"}]),onClick:e[5]||(e[5]=i=>s.selectIcon("faHeart"))},e[20]||(e[20]=[u("i",{class:"fas fa-heart"},null,-1)]),2),u("button",{type:"button",class:T(["btn btn-outline-secondary",{active:a.currentIcon==="faMugHot"}]),onClick:e[6]||(e[6]=i=>s.selectIcon("faMugHot"))},e[21]||(e[21]=[u("i",{class:"fas fa-mug-hot"},null,-1)]),2),u("button",{type:"button",class:T(["btn btn-outline-secondary",{active:a.currentIcon==="faCar"}]),onClick:e[7]||(e[7]=i=>s.selectIcon("faCar"))},e[22]||(e[22]=[u("i",{class:"fas fa-car"},null,-1)]),2),u("button",{type:"button",class:T(["btn btn-outline-secondary",{active:a.currentIcon==="faBicycle"}]),onClick:e[8]||(e[8]=i=>s.selectIcon("faBicycle"))},e[23]||(e[23]=[u("i",{class:"fas fa-bicycle"},null,-1)]),2),u("button",{type:"button",class:T(["btn btn-outline-secondary",{active:a.currentIcon==="faMapMarkerAlt"}]),onClick:e[9]||(e[9]=i=>s.selectIcon("faMapMarkerAlt"))},e[24]||(e[24]=[u("i",{class:"fas fa-map-marker-alt"},null,-1)]),2),u("button",{type:"button",class:T(["btn btn-outline-secondary",{active:a.currentIcon==="faTree"}]),onClick:e[10]||(e[10]=i=>s.selectIcon("faTree"))},e[25]||(e[25]=[u("i",{class:"fas fa-tree"},null,-1)]),2),u("button",{type:"button",class:T(["btn btn-outline-secondary",{active:a.currentIcon==="faCampground"}]),onClick:e[11]||(e[11]=i=>s.selectIcon("faCampground"))},e[26]||(e[26]=[u("i",{class:"fas fa-campground"},null,-1)]),2)])]),u("div",gr,[e[29]||(e[29]=u("label",{for:"markerGroup",class:"form-label"},"Select Group",-1)),X(u("select",{class:"form-select",id:"markerGroup","onUpdate:modelValue":e[12]||(e[12]=i=>a.selectedGroupId=i)},[e[28]||(e[28]=u("option",{value:"",disabled:""},"Select a group",-1)),(V(!0),$(Jt,null,Qt(a.groups,i=>(V(),$("option",{key:i.id,value:i.id},Zt(i.name),9,hr))),128))],512),[[Kt,a.selectedGroupId]])]),u("div",br,[e[30]||(e[30]=u("label",{for:"markerFriends",class:"form-label"},"Select Friends",-1)),X(u("select",{class:"form-select",id:"markerFriends","onUpdate:modelValue":e[13]||(e[13]=i=>a.selectedFriendIds=i),multiple:""},[(V(!0),$(Jt,null,Qt(a.friends,i=>(V(),$("option",{key:i.id,value:i.id},Zt(i.name),9,yr))),128))],512),[[Kt,a.selectedFriendIds]])]),e[31]||(e[31]=u("button",{type:"submit",class:"btn btn-primary w-100"}," Save Pin ",-1))],32)])])])])])}const xr=Me(ar,[["render",vr],["__scopeId","data-v-5c50d3c7"]]),kr={name:"MapPage",components:{MapComponent:xr}},Ar={class:"map-page"};function wr(t,e,n,r,a,s){const i=ee("MapComponent"),o=ee("ButtonOverlay");return V(),$("div",Ar,[te(i),te(o)])}const Cr=Me(kr,[["render",wr],["__scopeId","data-v-3d0ed0dc"]]);export{Cr as default};

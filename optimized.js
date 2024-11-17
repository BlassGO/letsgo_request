(function(u,m,p,h){function e(){return new Promise((e,t)=>{window.RW_Async_Init=function(){e()};var n,o=u.getElementsByTagName(p)[0],a="rw-js",c=u.location,s="Y"+m.getFullYear()+"M"+m.getMonth()+"D"+m.getDate(),i=c.protocol,r=c.search.indexOf("DBG=")>-1?"":".min",l=i==="https:"?"secure."+h+"js/":"js."+h;if(u.getElementById(a))return e();n=u.createElement(p);n.id=a;n["async"]=true;n.type="text/javascript";n.src=i+"//"+l+"external"+r+".js?ck="+s;const d=setTimeout(()=>{t(new Error("Rip Rating-Widget."))},5e3);n.onload=function(){clearTimeout(d);if(typeof window.RW_Async_Init==="function"){window.RW_Async_Init()}};n.onerror=function(){clearTimeout(d);t(new Error("Cannot load Rating-Widget."))};o.parentNode.insertBefore(n,o)})}e().then(()=>{RW.init({huid:"497857",uid:"b3c29e9bcf4c3da3f2d56ebbcc182c5e",source:"website",options:{style:"flat_yellow",isDummy:false,mobile:{showTrigger:false}}})})["catch"](e=>{console.error(e.message)});window.loadRatingWidgetLibrary=e})(document,new Date,"script","rating-widget.com/");const e=document.getElementById("theme-toggle");const t=document.querySelector(".scroll-to-top");const n=document.body;const o=document.querySelector(".toggle-button .switch");const a=document.getElementById("sidebar");const c=document.getElementById("hide-sidebar");const s=document.getElementById("content");const i=document.querySelectorAll(".sections li a");const r={home:document.getElementById("home"),contributors:document.getElementById("contributors"),"android-projects":document.getElementById("android-projects"),"linux-projects":document.getElementById("linux-projects"),"windows-projects":document.getElementById("windows-projects")};const l={"share-btn":"https://i.ibb.co/cw64Jg1/share-icon.webp"};const d=window.location.hash.substring(1);const H=5;var N=0,_={},p={},u={};window.addEventListener("load",function(){hideLoading()});O();document.querySelectorAll(".gcards").forEach(e=>{e.addEventListener("click",async function(e){const t=e.currentTarget.dataset.target;const n=e.currentTarget.dataset.json;const o=e.currentTarget.closest(".gcards-wrapper");let a=o.querySelector(".gcards-sections");if(!a){a=document.createElement("div");a.classList.add("gcards-sections");o.appendChild(a)}let c=document.getElementById(t);if(!c){c=document.createElement("div");c.id=t;c.classList.add("gcards-section");c.dataset.parentSection=o.id;c.innerHTML=`
                <button class='go-back'>&#8592;</button>
                <div class='app-main-container'>
                    <div class='app-search-filter-bar'>
                        <input class='app-search-bar' placeholder='Search by title or description...' type='text'/>
                        <div class='app-filter'>
                            <select class='author-filter'></select>
                        </div>
                        <div class='app-filter'>
                            <select class='category-filter'></select>
                        </div>
                        <div class='app-filter'>
                            <select class='year-filter'></select>
                        </div>
                    </div>
                    <div class='gcards-dynamic'></div>
                    <button class='show-more-button' style='display: none;'>Show More Projects</button>
                    <div class='loading-container'>
                        <div class='loading-circles'>
                            <div class='circle'/>
                            <div class='circle'/>
                            <div class='circle'/>
                        </div>
                    </div>
                </div>
            `;a.appendChild(c);b(t);await X(n,c);const s=c.querySelector(".show-more-button");s.addEventListener("click",async()=>{s.style.display="none";Y(c);await f(c,c.querySelector(".gcards-dynamic"));z(c)});c.querySelector(".go-back").addEventListener("click",function(){c.classList.remove("active");setTimeout(()=>{const e=c.dataset.parentSection;if(e){b(e)}},500)});const i=document.createElement("div");i.classList.add("app-window");i.innerHTML=`
                <button class='app-go-back'>&#8592;</button>
                <div class='hosted-window-content'>
                </div>
            `;a.appendChild(i);i.querySelector(".app-go-back").addEventListener("click",function(){i.classList.remove("show");i.classList.add("hide");setTimeout(()=>{i.style.display="none"},300);window.scrollTo({top:N,behavior:"smooth"})})}else{b(t)}v()})});function O(){for(const e in l){if(l.hasOwnProperty(e)){const t=new Image;t.src=l[e];l[e]=t}}}async function R(e){const t=e.querySelectorAll(".app-launcher-container");const n=Array.from(t).map(async e=>{const t=e.dataset.hosted;if(t&&!e.dataset.loaded){if(u[t]){te(u[t],e)}else{await ee(t,e)}e.dataset.loaded="true"}});await Promise.all(n)}function U(n,o){const e=document.createElement("div");e.classList.add("app-section");e.innerHTML=`
      <h1>${n.title}
          <img class="share-btn" alt="Share"/>
          <div class='rw-ui-container' data-title='${n.title}'></div>
      </h1>
      <div class='metadata'>
          <span class='author clickable'>By ${n.author}</span>
          <span class='category'>${n.category}</span>
          <span class='year'>${new Date(n.date).getFullYear()}</span>
      </div>
      <p class='description'>${n.description}</p>
      <div class='app-launcher-container' data-hosted='${n.dataHosted}'></div>
  `;const t=e.querySelector(".share-btn");t.src=l["share-btn"].src;t.addEventListener("click",()=>{const e=`#id=${encodeURIComponent(o)}&author=${encodeURIComponent(n.author)}&category=${encodeURIComponent(n.category)}&year=${new Date(n.date).getFullYear()}&title=${encodeURIComponent(n.title)}`;const t=`${window.location.origin}${window.location.pathname}${e}`;navigator.clipboard.writeText(t).then(()=>{A("URL Copied to Clipboard",false)})});const a=e.querySelector(".author");a.style.cursor="pointer";if(n.contact){a.addEventListener("click",()=>{window.open(n.contact,"_blank","noopener noreferrer")})}else{a.addEventListener("click",()=>{A(n.author+" did not add his contact",false)})}return e}function P(o,a){const l=o.querySelector(".app-search-bar");const d=o.querySelector(".author-filter");const u=o.querySelector(".category-filter");const m=o.querySelector(".year-filter");const e=[...new Set(a.map(e=>e.author))];const t=[...new Set(a.map(e=>e.category))];const n=[...new Set(a.map(e=>new Date(e.date).getFullYear()))];h(d,e);h(u,t);h(m,n);async function c(){const e=o.id;const t=o.querySelector(".gcards-dynamic");const c=l.value.toLowerCase().trim();const s=d.value;const i=u.value;const r=m.value;const n=a.filter(e=>{const t=e.title.toLowerCase().includes(c)||e.description.toLowerCase().includes(c);const n=!s||e.author===s;const o=!i||e.category===i;const a=!r||new Date(e.date).getFullYear()===parseInt(r);return t&&n&&o&&a});p[e]=n.length>0?{loaded:0,projects:n}:null;t.innerHTML="";await f(o,t)}l.addEventListener("input",c);d.addEventListener("change",c);u.addEventListener("change",c);m.addEventListener("change",c)}function h(n,e){n.innerHTML='<option value="">All</option>';e.forEach(e=>{const t=document.createElement("option");t.value=e;t.textContent=e;n.appendChild(t)})}async function f(e,t){const n=e.id;const o=p[n]||_[n];const a=o?o.projects:null;if(!a||a.length===0){t.innerHTML=`
            <div class="gcards-dynamic center" style="height: 200px; display: flex; align-items: center; justify-content: center;">
                <div>
                    <div style="font-size: 3rem; text-align: center; margin-bottom: 10px;">👋</div>
                    <div style="font-size: 1.2rem;">No content at the moment</div>
                </div>
            </div>`;return}const c=o.loaded;const s=Math.min(a.length-c,H);const i=a.slice(c,c+s);for(const r of i){t.appendChild(U(r,n))}o.loaded+=s;if(o.loaded>=a.length){W(e)}else{F(e)}z(e);await R(t);if(typeof RW!=="undefined")await RW.render()}function W(e){const t=e.querySelector(".show-more-button");if(t){t.style.display="none"}}function F(e){const t=e.querySelector(".show-more-button");if(t){t.style.display="block"}}function Y(e){const t=e.querySelector(".loading-container");t.style.display="flex"}function z(e){const t=e.querySelector(".loading-container");t.style.display="none"}async function X(e,t){const n=t.querySelector(".gcards-dynamic");const o=t.id;try{startLoading();const c=await fetch(e);const s=await c.json();_[o]={loaded:0,projects:s.sort((e,t)=>new Date(t.date)-new Date(e.date))};p[o]=null;n.innerHTML="";P(t,s);await f(t,n)}catch(a){console.error("Error al cargar el JSON:",a)}finally{hideLoading()}}var m=!y();const J=(new Date).getHours();if(!m)g();c.addEventListener("click",Q);e.addEventListener("click",()=>{n.classList.toggle("theme-dark");o.classList.toggle("light-mode");o.classList.toggle("dark-mode");G(n.classList.contains("theme-dark")?"dark":"light")});G("light");if((J>=18||J<6)&&!n.classList.contains("theme-dark"))e.click();if(d){V(d);v()}function G(e){const t=document.getElementById("highlight-style");t.href=e==="dark"?"//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/atom-one-dark.css":"//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/atom-one-light.css"}function y(){return window.matchMedia("(max-width: 768px)").matches}function g(){c.textContent="▶"}function K(){c.textContent="✖"}function Q(){if(y()){if(m){a.style.transform="translateX(-100%)";s.classList.remove("hidden");c.classList.remove("hide-sidebar-btn-mobile");g()}else{a.style.transform="translateX(0)";s.classList.add("hidden");c.classList.add("hide-sidebar-btn-mobile");K()}}else{if(m){a.style.transform="translateX(-100%)";s.style.marginLeft="10px";g()}else{a.style.transform="translateX(0)";s.style.marginLeft=`var(--content-left)`;K()}}m=!m}function v(){window.scrollTo({top:0,behavior:"smooth"})}function b(e,t=null){const n=t||document.getElementById(e);const o=n.classList.contains("gcards-section");const a=o?n.dataset.parentSection:e;i.forEach(e=>{const t=e.dataset.section;if(t==a){e.classList.add("active")}else{e.classList.remove("active")}});for(const[c,s]of Object.entries(r)){s.classList.remove("active")}if(o&&a){r[a].classList.add("active")}if(n){setTimeout(()=>{},50);n.classList.add("active");setTimeout(()=>{},300);if(m&&y())Q()}window.location.hash=e}function w(e){const t=document.createElement("div");t.textContent=e;return t.innerHTML}function V(e){var t=e,c,s,i,r;if(e.includes("=")){const o=new URLSearchParams(e);t=w(o.get("id"));c=w(o.get("author"));s=w(o.get("category"));i=w(o.get("year"));r=w(o.get("title"))}else{const a=document.getElementById(t);if(a){b(t,a);return}}const n=document.querySelector(`.gcards[data-target='${t}']`);if(n){n.click();Z(t,function(e){if(c){const n=e.querySelector(".author-filter");n.value=c}if(s){const o=e.querySelector(".category-filter");o.value=s}if(i){const a=e.querySelector(".year-filter");a.value=i}if(r){var t=e.querySelector(".app-search-bar");t.value=r;t.dispatchEvent(new Event("input"))}})}else{console.error("Undefined hash: "+t)}}function Z(e,a){const c=document.getElementById(e);if(!c){console.error("Section not found: "+e);return}const s=new MutationObserver(function(e){const t=c.querySelector(".author-filter");const n=c.querySelector(".category-filter");const o=c.querySelector(".year-filter");if(t&&n&&o){s.disconnect();a(c)}});s.observe(c,{childList:true,subtree:true})}i.forEach(n=>{n.addEventListener("click",e=>{e.preventDefault();const t=n.dataset.section;b(t);v()})});document.addEventListener("DOMContentLoaded",function(){window.addEventListener("scroll",()=>{const e=window.scrollY>100;if(e){t.classList.add("show")}else{t.classList.remove("show")}});t.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})})});const E={documentation:{url:"https://cdn-icons-png.flaticon.com/512/888/888108.png",image:null},readme:{url:"https://cdn-icons-png.flaticon.com/512/888/888108.png",image:null},changelog:{url:"https://freepngimg.com/save/91436-blue-electric-icons-question-mark-computer/512x512",image:null},download:{url:"https://cdn-icons-png.flaticon.com/512/9205/9205302.png",image:null}};async function ee(e,t){try{const o=await fetch(e);const a=await o.json();u[e]=a;te(a,t)}catch(n){console.error("Error fetching GitHub data:",n)}}function te(a,c){c.innerHTML="";a.forEach(e=>{if(e.type==="file"&&e.name.endsWith(".md")){const t=e.name.split(".md")[0];const n=ne(t,a);const o=e.download_url;ae(t,n,o,c)}})}function ne(t,e){const n=e.find(e=>e.name===`${t}.png`);if(n){return n.download_url}else{const o=oe(t);if(o){return o.src}return null}}function oe(e){const t=e.toLowerCase();if(E[t]){if(!E[t].image){const n=new Image;n.src=E[t].url;E[t].image=n}return E[t].image.cloneNode()}return null}function ae(e,t,n,o){const a=document.createElement("div");a.className="app-icon";let c;if(t){c=document.createElement("img");c.src=t}else{const i=oe(e);if(i){c=i}else{c=document.createElement("div");c.className="app-text-icon";c.dataset.initials=e.charAt(0).toUpperCase()}}const s=document.createElement("p");s.textContent=e;a.appendChild(c);a.appendChild(s);a.addEventListener("click",()=>ce(n,o));o.appendChild(a)}function ce(e,t){const n=t.closest(".gcards-sections");const o=n.querySelector(".app-window");const a=o.querySelector(".hosted-window-content");N=window.scrollY||document.documentElement.scrollTop;o.classList.remove("hide");o.style.display="block";setTimeout(()=>{o.classList.add("show")},10);a.innerHTML="";startLoading();fetch(e).then(e=>e.text()).then(e=>{const t=window.markdownit({html:false,linkify:true,typographer:true,breaks:true}).use(markdownItAttrs,{leftDelimiter:"{",rightDelimiter:"}",allowedAttributes:["class","style","href","target","data-download-url"]});const n=t.render(e);a.innerHTML=`<div class="markdown">${n}</div>`;se(a);me();v()})["catch"](e=>{console.error("Error loading markdown:",e);a.innerHTML="<p>Error loading content.</p>";v()})["finally"](()=>{hideLoading()})}function se(e){e.querySelectorAll("pre code").forEach(e=>{hljs.highlightElement(e)})}class ie{constructor(e={}){this.hook=e.hook;this.callback=e.callback;this.lang=e.lang||document.documentElement.lang||"en"}"after:highlightElement"({el:t,text:n}){let e=document.createElement("div");e.className="hljs-toolbar";let o=t.result?.language||t.dataset.language||"Plaintext";let a=document.createElement("span");a.className="hljs-lang-label";a.textContent=o.toUpperCase();e.appendChild(a);let c=Object.assign(document.createElement("button"),{innerHTML:L[this.lang]?.[0]||"Copy",className:"hljs-copy-button"});c.dataset.copied=false;e.appendChild(c);t.parentElement.classList.add("hljs-copy-wrapper");t.parentElement.insertBefore(e,t);c.onclick=()=>{if(!navigator.clipboard)return;let e=n;if(this.hook&&typeof this.hook==="function"){e=this.hook(n,t)||n}navigator.clipboard.writeText(e).then(()=>{c.innerHTML=L[this.lang]?.[1]||"Copied!";c.dataset.copied=true;setTimeout(()=>{c.innerHTML=L[this.lang]?.[0]||"Copy";c.dataset.copied=false},2e3)}).then(()=>{if(typeof this.callback==="function")return this.callback(e,t)})}}}if(typeof module!="undefined"){module.exports=ie}const L={en:["Copy","Copied!","Copied to clipboard"],es:["Copiar","&#161;Copiado!","Copiado al portapapeles"]};hljs.addPlugin(new ie);const re=document.getElementById("download-container");const k=document.getElementById("upload-form-container");const le=document.querySelectorAll(".download-button");const C=document.getElementById("overlay");const de=document.getElementById("close-overlay");const T=document.getElementById("timer");const ue=document.getElementById("ad-container");const x=document.getElementById("clickme-container");let I=5;de.textContent="✖";function me(){document.querySelectorAll("[data-download-url]").forEach(c=>{if(!c.classList.contains("download-button")){c.classList.add("download-button")}c.addEventListener("click",e=>{e.preventDefault();const t=atob(w(c.getAttribute("data-download-url")));re.style.display="block";C.style.display="flex";if(pe(x)){const a=x.querySelector("iframe").contentWindow;x.style.display="block";if(a){try{a.addEventListener("click",function(e){x.style.display="none"})}catch(o){console.log("Error adding event listener to iframe: ",o);x.style.display="none"}}else{x.style.display="none"}}else{x.style.display="none";ue.innerHTML=`<h1>⬇️</h1><p>Ad couldn’t load, continue with your download!</p>`}const n=setInterval(()=>{I--;if(I>0){T.textContent=`Wait ${I} seconds...`}else{clearInterval(n);T.innerHTML=`<a class='download-button' href='${t}' target='_blank'>DOWNLOAD</a>`}},1e3)})})}function pe(e){return e.querySelector("iframe")}function he(e){return e.querySelector("img")}function fe(e){const t=e.querySelector("iframe");if(t){const n=t.contentDocument||t.contentWindow.document;n.getElementsByTagName("img")[0].click()}}document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("overlay2");const t=document.getElementById("idk-btn-close");const n=document.getElementById("idk-buttons");const o=document.getElementById("container-362c0c07f4e7f3e5dcd16daeb34ac9ce");const a=3e3;const c=1e3;const s=12e5;const i=3;let r=false;let l=0;let d=Date.now();let u=false;function m(){if(l<i&&!u){if(!o.hasChildNodes()){o.innerHTML=`<h1>&#161;Please disable your Adblocker!</h1><p>Ads are a way to support the maintenance and development of new projects.</p>`}e.style.display="flex";l++;d=Date.now();u=true}}function p(){e.style.display="none";u=false}function h(){if(u){p()}else{m()}}function f(){const e=Date.now();if(e-d>=s&&l<i){m()}}if(r){setTimeout(m,a)}t.addEventListener("click",p);document.addEventListener("visibilitychange",function(){if(document.hidden){setTimeout(()=>{if(document.hidden&&l<i){m()}},c)}});setInterval(f,6e4)});function ye(){C.style.display="none";re.style.display="none";k.style.display="none";I=5;T.textContent=`Wait ${I} seconds...`}de.addEventListener("click",ye);const ge=document.getElementById("search-input");const S=document.getElementById("search-results");ge.addEventListener("input",()=>{const t=w(ge.value.toLowerCase());S.innerHTML="";document.querySelectorAll(".highlight").forEach(e=>{const t=e.parentNode;const n=document.createTextNode(e.textContent);t.replaceChild(n,e);t.normalize()});if(t.length>0){S.style.display="block";for(const[o,e]of Object.entries(r)){const n=[];const a=document.createTreeWalker(e,NodeFilter.SHOW_TEXT,null,false);while(a.nextNode()){const c=a.currentNode;const s=c.textContent.toLowerCase();let e=s.indexOf(t);while(e!==-1){n.push({node:c,start:e,end:e+t.length});e=s.indexOf(t,e+t.length)}}n.forEach(n=>{const e=document.createElement("div");e.classList.add("result-item");const t=n.node.textContent.substring(Math.max(0,n.start-30),Math.min(n.node.textContent.length,n.end+30));e.innerHTML=`<h4>${o}</h4><p>...${t}...</p>`;e.addEventListener("click",()=>{document.querySelectorAll(".highlight").forEach(e=>{const t=e.parentNode;const n=document.createTextNode(e.textContent);t.replaceChild(n,e);t.normalize()});b(o);setTimeout(()=>{const e=document.createRange();e.setStart(n.node,n.start);e.setEnd(n.node,n.end);const t=document.createElement("span");t.className="highlight";e.surroundContents(t);t.scrollIntoView({behavior:"smooth",block:"center"})},100)});S.appendChild(e)})}}else{S.style.display="none"}});let B="";let q="";let M="";let $=null;let j="";document.getElementById("amount-value").addEventListener("blur",function(e){let t=e.target;let n=parseFloat(t.value);if(isNaN(n)||n<1){n=1}t.value=n.toFixed(2)});paypal.Buttons({createOrder:function(e,t){return t.order.create({purchase_units:[{amount:{value:document.getElementById("amount-value").value}}]})},onApprove:function(e,t){return t.order.capture().then(function(e){const t=e.purchase_units[0].amount.value;if(t>=5){D("Thank you for your support!",t,e,true)}else{A("Thank you very much for the support!")}})},onError:function(e){A("There was an error.",false)}}).render("#paypal-container");function D(e="",o="",a={},c=false){const t=w(e);const n=w(B);const s=w(q);k.innerHTML=`
        <h2>${t}</h2>
        <div id="upload-area" class="upload-area">
            <span id="upload-label">${M?M:"Select an image<br/>(jpg, png, gif)<br/><br/>Max-size: 10MB"}</span>
            <input type="file" accept="image/*" id="upload-image" style="display: none;" />
        </div>
        <input type="text" placeholder="Your Name" id="contributor-name" value="${n}" maxlength="30" />
        <textarea placeholder="A phrase that represents you in 30 characters." id="contributor-message" maxlength="30">${s}</textarea>
        <br/>
        <button id="submit-button">Submit</button>
        <button id="cancel-button">I don't want it</button>
    `;k.style.display="block";C.style.display="flex";document.getElementById("upload-area").addEventListener("click",function(){document.getElementById("upload-image").click()});document.getElementById("upload-image").addEventListener("change",function(e){$=e.target.files[0];const t=10*1024*1024;if($.size>t){A("File is too large! Max size is 10MB.",c,o,a);return}const n=new FileReader;n.onload=function(e){M=w($.name);j=e.target.result;document.getElementById("upload-label").textContent=M};n.readAsDataURL($)});document.getElementById("submit-button").addEventListener("click",function(e){e.preventDefault();B=document.getElementById("contributor-name").value.trim();q=document.getElementById("contributor-message").value.trim();if(!B||!q||!$){A("Please complete all fields.",c,o,a);return}we(B,q,j,a,o,c,o,a)});document.getElementById("cancel-button").addEventListener("click",ye)}async function ve(e,t,n,o,a,c){const s=new FormData;s.append("image",n);try{const r=await fetch("https://api.imgbb.com/1/upload?key=ccd85d9d78a357a0f8a3131cbbeacd56",{method:"POST",body:s});if(!r.ok){throw new Error("Error uploading image")}const l=await r.json();const d=w(l.data.url);const u=`
            Name: ${w(e)}
            Message: ${w(t)}
            Image URL: ${d}
            Transaction ID: ${w(o.id)}
            Payer Name: ${w(o.payer.name.given_name)} ${w(o.payer.name.surname)}
            Transaction Amount: $${w(a)}
        `;const m={service_id:"service_veamd1e",template_id:"template_3b87c8q",user_id:"BYzFph3zk01yzS2zI",template_params:{message:u.trim()}};const p=await fetch("https://api.emailjs.com/api/v1.0/email/send",{method:"POST",body:JSON.stringify(m),headers:{"Content-Type":"application/json"}});if(!p.ok){throw new Error("Error sending email")}A("Successfully. The security review may take 1-4 days.",false);B="";q="";M="";$=null;j=""}catch(i){if(i.message==="Error uploading image"){A("There was an error uploading your image. Please try again.",c,a,o)}else if(i.message==="Error sending email"){A("There was an error contacting the server. Please try again.",c,a,o)}else{A("An unexpected error occurred. Please try again.",c,a,o)}console.error("Error processing request:",i)}}async function be(e=""){k.innerHTML=`
        <h2>${w(e)}</h2>
<p>$</p><input type="number" placeholder="0" id="amount-value"/>
        <br/>
        <button id="submit-amount-button">DONATE</button>
    `;k.style.display="block";C.style.display="flex";return new Promise((n,o)=>{document.getElementById("submit-amount-button").addEventListener("click",function(e){e.preventDefault();var t=Number(document.getElementById("amount-value").value);if(!t||t<=0){A("Invalid amount");o("Invalid amount")}else{n(t)}})})}function we(e,t,n,o,a,c){const s=w(n);const i=w(e);const r=w(t);const l={title:i,description:r,imageUrl:s};const d=ke(l);k.innerHTML="<br/>";k.appendChild(d);const u=document.createElement("button");u.id="confirm-button";u.textContent="Confirm";u.addEventListener("click",function(){ve(e,t,$,o,a,c)});const m=document.createElement("button");m.id="edit-button";m.textContent="Edit";m.addEventListener("click",function(){D("",a,o,c)});k.appendChild(u);k.appendChild(m)}function A(e,t=false,n="",o={}){const a=w(e);k.innerHTML=`
        <h2>${a}</h2>
        ${t?'<button id="return-button">GO BACK</button>':""}
    `;k.style.display="block";if(t){document.getElementById("return-button").addEventListener("click",function(){D("",n,o,t)})}C.style.display="flex"}const Ee={id:"5O190127TN364715T",status:"COMPLETED",purchase_units:[{amount:{currency_code:"USD",value:"3.5"}}],payer:{name:{given_name:"John",surname:"Doe"},email_address:"johndoe@example.com",payer_id:"DUFRQ8GWYMJXC"}};const Le=[{title:"Contributor 1",description:"A phrase to say to the world!",imageUrl:"https://i.ibb.co/RY5YP9b/2d-mario-running.gif"},{title:"Contributor 2",description:"A phrase to say to the world!",imageUrl:"https://via.placeholder.com/400x400"},{title:"Contributor 3",description:"A phrase to say to the world!",imageUrl:"https://via.placeholder.com/400x400"},{title:"Contributor 4",description:"A phrase to say to the world!",imageUrl:"https://via.placeholder.com/400x400"}];function ke(e){const t=document.createElement("div");t.classList.add("contributors-card");t.innerHTML=`
    <img src="${e.imageUrl}" alt="${e.title}">
    <div class="contributors-card-content">
        <h3>${e.title}</h3>
        <p>${e.description}</p>
    </div>
`;t.addEventListener("click",function(){if(this.classList.contains("hide-content")){this.classList.remove("hide-content")}else{this.classList.add("hide-content")}});return t}function Ce(e){const n=document.getElementById("gallery-container");n.innerHTML="";e.forEach(e=>{const t=ke(e);n.appendChild(t)})}Ce(Le);
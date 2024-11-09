const e=document.getElementById("theme-toggle");const t=document.body;const n=document.querySelector(".toggle-button .switch");const A=document.getElementById("ontop");const o=document.getElementById("sidebar");const a=document.getElementById("hide-sidebar");const c=document.getElementById("content");const i=document.querySelectorAll(".sections li a");const r={home:document.getElementById("home"),contributors:document.getElementById("contributors"),"android-projects":document.getElementById("android-projects"),"linux-projects":document.getElementById("linux-projects"),"windows-projects":document.getElementById("windows-projects")};const l={"share-btn":"https://i.ibb.co/cw64Jg1/share-icon.webp"};const s=window.location.hash.substring(1);const N={},O=5;var m=0,d=0,u=[];window.addEventListener("load",function(){hideLoading()});U();document.querySelectorAll(".gcards").forEach(e=>{e.addEventListener("click",async function(e){const t=e.currentTarget.dataset.target;const n=e.currentTarget.dataset.json;const o=e.currentTarget.closest(".gcards-wrapper");let a=o.querySelector(".gcards-sections");if(!a){a=document.createElement("div");a.classList.add("gcards-sections");o.appendChild(a)}let c=document.getElementById(t);if(!c){c=document.createElement("div");c.id=t;c.classList.add("gcards-section");c.dataset.parentSection=o.id;c.style.display="none";c.innerHTML=`
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
`;a.appendChild(c);b(t);await z(n,c);const s=c.querySelector(".show-more-button");s.addEventListener("click",async()=>{s.style.display="none";W(c);await P(c,c.querySelector(".gcards-dynamic"))});c.querySelector(".go-back").addEventListener("click",function(){c.classList.remove("active");setTimeout(()=>{c.style.display="none";const e=c.dataset.parentSection;if(e){b(e)}},500)});const i=document.createElement("div");i.classList.add("app-window");i.innerHTML=`
    <button class='app-go-back'>&#8592;</button>
    <div class='hosted-window-content'>
    </div>
`;a.appendChild(i);i.querySelector(".app-go-back").addEventListener("click",function(){i.classList.remove("show");i.classList.add("hide");setTimeout(()=>{i.style.display="none"},300);window.scrollTo({top:d,behavior:"smooth"})})}else{b(t)}v()})});function U(){for(const e in l){if(l.hasOwnProperty(e)){const t=new Image;t.src=l[e];l[e]=t}}}async function p(n,o){const e=document.createElement("div");e.classList.add("app-section");e.innerHTML=`
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
`;const t=e.querySelector(".share-btn");t.src=l["share-btn"].src;t.addEventListener("click",()=>{const e=`#id=${encodeURIComponent(o)}&author=${encodeURIComponent(n.author)}&category=${encodeURIComponent(n.category)}&year=${new Date(n.date).getFullYear()}&title=${encodeURIComponent(n.title)}`;const t=`${window.location.origin}${window.location.pathname}${e}`;navigator.clipboard.writeText(t).then(()=>{D("URL Copied to Clipboard",false)})});const a=e.querySelector(".author");a.style.cursor="pointer";if(n.contact){a.addEventListener("click",()=>{window.open(n.contact,"_blank","noopener noreferrer")})}else{a.addEventListener("click",()=>{D(n.author+" did not add his contact",false)})}const c=e.querySelector(".app-launcher-container");const s=n.dataHosted;if(s&&c){await Q(s,c)}return e}function _(o,t){const a=o.querySelector(".app-search-bar");const l=o.querySelector(".author-filter");const d=o.querySelector(".category-filter");const u=o.querySelector(".year-filter");const e=[...new Set(t.map(e=>e.author))];const n=[...new Set(t.map(e=>e.category))];const c=[...new Set(t.map(e=>new Date(e.date).getFullYear()))];h(l,e);h(d,n);h(u,c);async function s(){const c=a.value.toLowerCase();const s=l.value;const i=d.value;const r=u.value;const e=t.filter(e=>{const t=e.title.toLowerCase().includes(c)||e.description.toLowerCase().includes(c);const n=!s||e.author===s;const o=!i||e.category===i;const a=!r||new Date(e.date).getFullYear()===parseInt(r);return t&&n&&o&&a});const n=o.querySelector(".gcards-dynamic");n.innerHTML="";e.slice(0,m).forEach(async e=>{const t=await p(e,o.id);n.appendChild(t)});if(typeof RW!=="undefined")await RW.render()}a.addEventListener("input",s);l.addEventListener("change",s);d.addEventListener("change",s);u.addEventListener("change",s)}function h(n,e){n.innerHTML='<option value="">All</option>';e.forEach(e=>{const t=document.createElement("option");t.value=e;t.textContent=e;n.appendChild(t)})}async function P(n,o){if(!u||u.length===0){o.innerHTML=`
<div class="gcards-dynamic center" style="height: 200px; display: flex; align-items: center; justify-content: center;">
    <div>
        <div style="font-size: 3rem; text-align: center; margin-bottom: 10px;">👋</div>
        <div style="font-size: 1.2rem;">No content at the moment</div>
    </div>
</div>`;return}const e=u.length-m;const t=Math.min(e,O);const a=u.slice(m,m+t);a.forEach(async e=>{const t=await p(e,n.id);o.appendChild(t)});m+=t;if(m>=u.length){F(n);R(n)}else{F(n)}}function R(e){const t=e.querySelector(".show-more-button");if(t){t.style.display="none"}}function W(e){const t=e.querySelector(".loading-container");t.style.display="block"}function F(e){const t=e.querySelector(".loading-container");t.style.display="none"}async function z(e,t){const n=t.querySelector(".gcards-dynamic");try{startLoading();const a=await fetch(e);const c=await a.json();u=c.sort((e,t)=>new Date(t.date)-new Date(e.date));m=0;n.innerHTML="";await P(t,n);_(t,c);if(typeof RW!=="undefined")await RW.render()}catch(o){console.error("Error al cargar el JSON:",o)}finally{hideLoading()}}var y=!f();const Y=(new Date).getHours();if(!y)g();a.addEventListener("click",G);e.addEventListener("click",()=>{t.classList.toggle("theme-dark");n.classList.toggle("light-mode");n.classList.toggle("dark-mode");X(t.classList.contains("theme-dark")?"dark":"light")});X("light");if((Y>=18||Y<6)&&!t.classList.contains("theme-dark"))e.click();if(s){V(s);v()}function X(e){const t=document.getElementById("highlight-style");t.href=e==="dark"?"//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/atom-one-dark.css":"//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/atom-one-light.css"}function f(){return window.matchMedia("(max-width: 768px)").matches}function g(){a.textContent="▶"}function J(){a.textContent="✖"}function G(){if(f()){if(y){o.style.transform="translateX(-100%)";c.classList.remove("hidden");a.classList.remove("hide-sidebar-btn-mobile");g()}else{o.style.transform="translateX(0)";c.classList.add("hidden");a.classList.add("hide-sidebar-btn-mobile");J()}}else{if(y){o.style.transform="translateX(-100%)";c.style.marginLeft="10px";g()}else{o.style.transform="translateX(0)";c.style.marginLeft=`var(--content-left)`;J()}}y=!y}function v(){A.scrollIntoView({behavior:"smooth",block:"center"})}function b(e){const t=document.getElementById(e);const n=t.classList.contains("gcards-section");const o=t.dataset.parentSection;document.querySelectorAll(".gcards-wrapper").forEach(e=>{e.style.display="none"});i.forEach(e=>e.classList.remove("active"));for(const a in r){const c=r[a];if(!c.classList.contains("gcards-section")||!c.classList.contains("active")){c.classList.remove("active");c.style.display="none"}}if(n&&o){const s=document.getElementById(o);s.style.display="block";document.querySelector(`[data-section="${o}"]`).classList.add("active")}else{document.querySelector(`[data-section="${e}"]`).classList.add("active")}if(t){t.style.display="block";setTimeout(()=>{t.classList.add("active")},10);if(y&&f())G()}window.location.hash=e}function w(e){const t=document.createElement("div");t.textContent=e;return t.innerHTML}function V(e){var t=e,c,s,i,r;if(e.includes("=")){const o=new URLSearchParams(e);t=w(o.get("id"));c=w(o.get("author"));s=w(o.get("category"));i=w(o.get("year"));r=w(o.get("title"))}else{const a=document.getElementById(t);if(a){b(t);return}}const n=document.querySelector(`.gcards[data-target='${t}']`);if(n){n.click();K(t,function(e){if(c){const n=e.querySelector(".author-filter");n.value=c}if(s){const o=e.querySelector(".category-filter");o.value=s}if(i){const a=e.querySelector(".year-filter");a.value=i}if(r){var t=e.querySelector(".app-search-bar");t.value=r;t.dispatchEvent(new Event("input"))}})}else{console.error("Undefined hash: "+t)}}function K(e,a){const c=document.getElementById(e);if(!c){console.error("Section not found: "+e);return}const s=new MutationObserver(function(e){const t=c.querySelector(".author-filter");const n=c.querySelector(".category-filter");const o=c.querySelector(".year-filter");if(t&&n&&o){s.disconnect();a(c)}});s.observe(c,{childList:true,subtree:true})}i.forEach(n=>{n.addEventListener("click",e=>{e.preventDefault();const t=n.dataset.section;b(t);v()})});document.addEventListener("DOMContentLoaded",function(){const t=document.querySelector(".scroll-to-top");window.addEventListener("scroll",()=>{const e=window.scrollY>100;if(e){t.classList.add("show")}else{t.classList.remove("show")}});t.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})})});const E={documentation:{url:"https://cdn-icons-png.flaticon.com/512/888/888108.png",image:null},readme:{url:"https://cdn-icons-png.flaticon.com/512/888/888108.png",image:null},changelog:{url:"https://freepngimg.com/save/91436-blue-electric-icons-question-mark-computer/512x512",image:null},download:{url:"https://cdn-icons-png.flaticon.com/512/9205/9205302.png",image:null}};async function Q(e,t){try{const o=await fetch(e);const a=await o.json();Z(a,t)}catch(n){console.error("Error fetching GitHub data:",n)}}function Z(a,c){c.innerHTML="";a.forEach(e=>{if(e.type==="file"&&e.name.endsWith(".md")){const t=e.name.split(".md")[0];const n=ee(t,a);const o=e.download_url;ne(t,n,o,c)}})}function ee(t,e){const n=e.find(e=>e.name===`${t}.png`);if(n){return n.download_url}else{const o=te(t);if(o){return o.src}return null}}function te(e){const t=e.toLowerCase();if(E[t]){if(!E[t].image){const n=new Image;n.src=E[t].url;E[t].image=n}return E[t].image.cloneNode()}return null}function ne(e,t,n,o){const a=document.createElement("div");a.className="app-icon";let c;if(t){c=document.createElement("img");c.src=t}else{const i=te(e);if(i){c=i}else{c=document.createElement("div");c.className="app-text-icon";c.dataset.initials=e.charAt(0).toUpperCase()}}const s=document.createElement("p");s.textContent=e;a.appendChild(c);a.appendChild(s);a.addEventListener("click",()=>oe(n,o));o.appendChild(a)}function oe(e,t){const n=t.closest(".gcards-sections");const o=n.querySelector(".app-window");const a=o.querySelector(".hosted-window-content");d=window.scrollY||document.documentElement.scrollTop;o.classList.remove("hide");o.style.display="block";setTimeout(()=>{o.classList.add("show")},10);a.innerHTML="";startLoading();fetch(e).then(e=>e.text()).then(e=>{const t=window.markdownit({html:false,linkify:true,typographer:true,breaks:true}).use(markdownItAttrs,{leftDelimiter:"{",rightDelimiter:"}",allowedAttributes:["class","style","href","target","data-download-url"]});const n=t.render(e);a.innerHTML=`<div class="markdown">${n}</div>`;ae(a);de();v();hideLoading()})["catch"](e=>{console.error("Error loading markdown:",e);a.innerHTML="<p>Error loading content.</p>";v();hideLoading()})["finally"](()=>{hideLoading()})}function ae(e){const t=e.querySelectorAll("pre code");t.forEach(e=>{hljs.highlightBlock(e)})}class ce{constructor(e={}){this.hook=e.hook;this.callback=e.callback;this.lang=e.lang||document.documentElement.lang||"en"}"after:highlightElement"({el:t,text:n}){let e=document.createElement("div");e.className="hljs-toolbar";let o=t.result?.language||t.dataset.language||"Plaintext";let a=document.createElement("span");a.className="hljs-lang-label";a.textContent=o.toUpperCase();e.appendChild(a);let c=Object.assign(document.createElement("button"),{innerHTML:L[this.lang]?.[0]||"Copy",className:"hljs-copy-button"});c.dataset.copied=false;e.appendChild(c);t.parentElement.classList.add("hljs-copy-wrapper");t.parentElement.insertBefore(e,t);c.onclick=()=>{if(!navigator.clipboard)return;let e=n;if(this.hook&&typeof this.hook==="function"){e=this.hook(n,t)||n}navigator.clipboard.writeText(e).then(()=>{c.innerHTML=L[this.lang]?.[1]||"Copied!";c.dataset.copied=true;setTimeout(()=>{c.innerHTML=L[this.lang]?.[0]||"Copy";c.dataset.copied=false},2e3)}).then(()=>{if(typeof this.callback==="function")return this.callback(e,t)})}}}if(typeof module!="undefined"){module.exports=ce}const L={en:["Copy","Copied!","Copied to clipboard"],es:["Copiar","&#161;Copiado!","Copiado al portapapeles"]};hljs.addPlugin(new ce);const se=document.getElementById("download-container");const k=document.getElementById("upload-form-container");const ie=document.querySelectorAll(".download-button");const C=document.getElementById("overlay");const re=document.getElementById("close-overlay");const S=document.getElementById("timer");const le=document.getElementById("ad-container");const T=document.getElementById("clickme-container");let I=5;re.textContent="✖";function de(){document.querySelectorAll("[data-download-url]").forEach(c=>{if(!c.classList.contains("download-button")){c.classList.add("download-button")}c.addEventListener("click",e=>{e.preventDefault();const t=atob(w(c.getAttribute("data-download-url")));se.style.display="block";C.style.display="flex";if(ue(T)){const a=T.querySelector("iframe").contentWindow;T.style.display="block";if(a){try{a.addEventListener("click",function(e){T.style.display="none"})}catch(o){console.log("Error adding event listener to iframe: ",o);T.style.display="none"}}else{T.style.display="none"}}else{T.style.display="none";le.innerHTML=`<h1>⬇️</h1><p>Ad couldn’t load, continue with your download!</p>`}const n=setInterval(()=>{I--;if(I>0){S.textContent=`Wait ${I} seconds...`}else{clearInterval(n);S.innerHTML=`<a class='download-button' href='${t}' target='_blank'>DOWNLOAD</a>`}},1e3)})})}function ue(e){return e.querySelector("iframe")}function me(e){return e.querySelector("img")}function pe(e){const t=e.querySelector("iframe");if(t){const n=t.contentDocument||t.contentWindow.document;n.getElementsByTagName("img")[0].click()}}document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("overlay2");const t=document.getElementById("idk-btn-close");const n=document.getElementById("idk-buttons");const o=document.getElementById("container-362c0c07f4e7f3e5dcd16daeb34ac9ce");const a=3e3;const c=1e3;const s=12e5;const i=3;let r=false;let l=0;let d=Date.now();let u=false;function m(){if(l<i&&!u){if(!o.hasChildNodes()){o.innerHTML=`<h1>&#161;Please disable your Adblocker!</h1><p>Ads are a way to support the maintenance and development of new projects.</p>`}e.style.display="flex";l++;d=Date.now();u=true}}function p(){e.style.display="none";u=false}function h(){if(u){p()}else{m()}}function y(){const e=Date.now();if(e-d>=s&&l<i){m()}}if(r){setTimeout(m,a)}t.addEventListener("click",p);document.addEventListener("visibilitychange",function(){if(document.hidden){setTimeout(()=>{if(document.hidden&&l<i){m()}},c)}});setInterval(y,6e4)});function he(){C.style.display="none";se.style.display="none";k.style.display="none";I=5;S.textContent=`Wait ${I} seconds...`}re.addEventListener("click",he);const ye=document.getElementById("search-input");const x=document.getElementById("search-results");ye.addEventListener("input",()=>{const t=w(ye.value.toLowerCase());x.innerHTML="";document.querySelectorAll(".highlight").forEach(e=>{const t=e.parentNode;const n=document.createTextNode(e.textContent);t.replaceChild(n,e);t.normalize()});if(t.length>0){x.style.display="block";for(const[o,e]of Object.entries(r)){const n=[];const a=document.createTreeWalker(e,NodeFilter.SHOW_TEXT,null,false);while(a.nextNode()){const c=a.currentNode;const s=c.textContent.toLowerCase();let e=s.indexOf(t);while(e!==-1){n.push({node:c,start:e,end:e+t.length});e=s.indexOf(t,e+t.length)}}n.forEach(n=>{const e=document.createElement("div");e.classList.add("result-item");const t=n.node.textContent.substring(Math.max(0,n.start-30),Math.min(n.node.textContent.length,n.end+30));e.innerHTML=`<h4>${o}</h4><p>...${t}...</p>`;e.addEventListener("click",()=>{document.querySelectorAll(".highlight").forEach(e=>{const t=e.parentNode;const n=document.createTextNode(e.textContent);t.replaceChild(n,e);t.normalize()});b(o);setTimeout(()=>{const e=document.createRange();e.setStart(n.node,n.start);e.setEnd(n.node,n.end);const t=document.createElement("span");t.className="highlight";e.surroundContents(t);t.scrollIntoView({behavior:"smooth",block:"center"})},100)});x.appendChild(e)})}}else{x.style.display="none"}});let B="";let q="";let $="";let M=null;let j="";document.getElementById("amount-value").addEventListener("blur",function(e){let t=e.target;let n=parseFloat(t.value);if(isNaN(n)||n<1){n=1}t.value=n.toFixed(2)});paypal.Buttons({createOrder:function(e,t){return t.order.create({purchase_units:[{amount:{value:document.getElementById("amount-value").value}}]})},onApprove:function(e,t){return t.order.capture().then(function(e){const t=e.purchase_units[0].amount.value;if(t>=5){H("Thank you for your support!",t,e,true)}else{D("Thank you very much for the support!")}})},onError:function(e){D("There was an error.",false)}}).render("#paypal-container");function H(e="",o="",a={},c=false){const t=w(e);const n=w(B);const s=w(q);k.innerHTML=`
<h2>${t}</h2>
<div id="upload-area" class="upload-area">
<span id="upload-label">${$?$:"Select an image<br/>(jpg, png, gif)<br/><br/>Max-size: 10MB"}</span>
<input type="file" accept="image/*" id="upload-image" style="display: none;" />
</div>
<input type="text" placeholder="Your Name" id="contributor-name" value="${n}" maxlength="30" />
<textarea placeholder="A phrase that represents you in 30 characters." id="contributor-message" maxlength="30">${s}</textarea>
<br/>
<button id="submit-button">Submit</button>
<button id="cancel-button">I don't want it</button>
`;k.style.display="block";C.style.display="flex";document.getElementById("upload-area").addEventListener("click",function(){document.getElementById("upload-image").click()});document.getElementById("upload-image").addEventListener("change",function(e){M=e.target.files[0];const t=10*1024*1024;if(M.size>t){D("File is too large! Max size is 10MB.",c,o,a);return}const n=new FileReader;n.onload=function(e){$=w(M.name);j=e.target.result;document.getElementById("upload-label").textContent=$};n.readAsDataURL(M)});document.getElementById("submit-button").addEventListener("click",function(e){e.preventDefault();B=document.getElementById("contributor-name").value.trim();q=document.getElementById("contributor-message").value.trim();if(!B||!q||!M){D("Please complete all fields.",c,o,a);return}ve(B,q,j,a,o,c,o,a)});document.getElementById("cancel-button").addEventListener("click",he)}async function fe(e,t,n,o,a,c){const s=new FormData;s.append("image",n);try{const r=await fetch("https://api.imgbb.com/1/upload?key=ccd85d9d78a357a0f8a3131cbbeacd56",{method:"POST",body:s});if(!r.ok){throw new Error("Error uploading image")}const l=await r.json();const d=w(l.data.url);const u=`
Name: ${w(e)}
Message: ${w(t)}
Image URL: ${d}
Transaction ID: ${w(o.id)}
Payer Name: ${w(o.payer.name.given_name)} ${w(o.payer.name.surname)}
Transaction Amount: $${w(a)}
`;const m={service_id:"service_veamd1e",template_id:"template_3b87c8q",user_id:"BYzFph3zk01yzS2zI",template_params:{message:u.trim()}};const p=await fetch("https://api.emailjs.com/api/v1.0/email/send",{method:"POST",body:JSON.stringify(m),headers:{"Content-Type":"application/json"}});if(!p.ok){throw new Error("Error sending email")}D("Successfully. The security review may take 1-4 days.",false);B="";q="";$="";M=null;j=""}catch(i){if(i.message==="Error uploading image"){D("There was an error uploading your image. Please try again.",c,a,o)}else if(i.message==="Error sending email"){D("There was an error contacting the server. Please try again.",c,a,o)}else{D("An unexpected error occurred. Please try again.",c,a,o)}console.error("Error processing request:",i)}}async function ge(e=""){k.innerHTML=`
<h2>${w(e)}</h2>
<p>$</p><input type="number" placeholder="0" id="amount-value"/>
<br/>
<button id="submit-amount-button">DONATE</button>
`;k.style.display="block";C.style.display="flex";return new Promise((n,o)=>{document.getElementById("submit-amount-button").addEventListener("click",function(e){e.preventDefault();var t=Number(document.getElementById("amount-value").value);if(!t||t<=0){D("Invalid amount");o("Invalid amount")}else{n(t)}})})}function ve(e,t,n,o,a,c){const s=w(n);const i=w(e);const r=w(t);const l={title:i,description:r,imageUrl:s};const d=Ee(l);k.innerHTML="<br/>";k.appendChild(d);const u=document.createElement("button");u.id="confirm-button";u.textContent="Confirm";u.addEventListener("click",function(){fe(e,t,M,o,a,c)});const m=document.createElement("button");m.id="edit-button";m.textContent="Edit";m.addEventListener("click",function(){H("",a,o,c)});k.appendChild(u);k.appendChild(m)}function D(e,t=false,n="",o={}){const a=w(e);k.innerHTML=`
<h2>${a}</h2>
${t?'<button id="return-button">GO BACK</button>':""}
`;k.style.display="block";if(t){document.getElementById("return-button").addEventListener("click",function(){H("",n,o,t)})}C.style.display="flex"}const be={id:"5O190127TN364715T",status:"COMPLETED",purchase_units:[{amount:{currency_code:"USD",value:"3.5"}}],payer:{name:{given_name:"John",surname:"Doe"},email_address:"johndoe@example.com",payer_id:"DUFRQ8GWYMJXC"}};const we=[{title:"Contributor 1",description:"A phrase to say to the world!",imageUrl:"https://i.ibb.co/RY5YP9b/2d-mario-running.gif"},{title:"Contributor 2",description:"A phrase to say to the world!",imageUrl:"https://via.placeholder.com/400x400"},{title:"Contributor 3",description:"A phrase to say to the world!",imageUrl:"https://via.placeholder.com/400x400"},{title:"Contributor 4",description:"A phrase to say to the world!",imageUrl:"https://via.placeholder.com/400x400"}];function Ee(e){const t=document.createElement("div");t.classList.add("contributors-card");t.innerHTML=`
<img src="${e.imageUrl}" alt="${e.title}">
<div class="contributors-card-content">
<h3>${e.title}</h3>
<p>${e.description}</p>
</div>
`;t.addEventListener("click",function(){if(this.classList.contains("hide-content")){this.classList.remove("hide-content")}else{this.classList.add("hide-content")}});return t}function Le(e){const n=document.getElementById("gallery-container");n.innerHTML="";e.forEach(e=>{const t=Ee(e);n.appendChild(t)})}Le(we);
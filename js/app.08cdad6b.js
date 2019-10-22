(function(e){function t(t){for(var r,i,a=t[0],c=t[1],l=t[2],d=0,m=[];d<a.length;d++)i=a[d],s[i]&&m.push(s[i][0]),s[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);u&&u(t);while(m.length)m.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==s[c]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},s={app:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var u=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"15dd":function(e,t,n){"use strict";var r=n("44b0"),s=n.n(r);s.a},3683:function(e,t,n){"use strict";var r=n("a25b"),s=n.n(r);s.a},"44b0":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);var r=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[this.$store.state.viewing?n("Viewer"):e._e(),e._m(0),n("section",[n("div",{staticClass:"container"},[n("h2",{staticClass:"section_header"},[e._v("Upload an Image")]),e._m(1),n("p",{staticClass:"text-center"},[e._v("If your device is running iOS 13 or higher, just tap "),n("button",{staticClass:"button inline",on:{click:function(t){return t.preventDefault(),e.enableOrientation()}}},[e._v("here")]),e._v(" to enable VR")]),n("ImagePicker",{staticClass:"text-center"})],1)]),n("section",{staticClass:"gray"},[n("div",{staticClass:"container"},[n("div",{staticClass:"flex"},[n("h2",[e._v("Recent Images")]),0!=e.recentImages.length?n("button",{staticClass:"button inline",on:{click:function(t){return t.preventDefault(),e.clearDB(t)}}},[e._v("Clear")]):e._e()]),0==e.recentImages.length?n("p",[e._v("No images have been stored")]):e._e(),n("div",{staticClass:"grid"},e._l(e.recentImages,function(t){return n("div",{key:t.key,staticClass:"grid_item card"},[n("img",{staticClass:"card_image",attrs:{src:t.data,alt:""},on:{click:function(n){return e.setImage(t.data)}}}),n("div",{staticClass:"card_body flex around"},[n("button",{staticClass:"button inline",on:{click:function(n){return n.preventDefault(),e.setImage(t.data)}}},[e._v("View")]),n("button",{staticClass:"button inline",on:{click:function(n){return n.preventDefault(),e.removeImage(t.key)}}},[e._v("Delete")])])])}),0)])])],1)},o=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",{staticClass:"header"},[r("div",{staticClass:"container header_container"},[r("img",{staticClass:"header_logo",attrs:{src:n("8c53"),alt:"Panoform Logo"}}),r("nav",{staticClass:"header_nav"})])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"text-center"},[e._v("\n        If your device is running iOS 12 or below, please enable\n        "),n("strong",[e._v("Settings > Safari > Motion & Orientation Access")]),e._v(" to enable VR\n      ")])}],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"panoform-container",attrs:{id:"panoform-viewer"}},[n("ViewerControls"),n("ViewerRenderer")],1)},a=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"panoform-renderer",attrs:{id:"viewer-container"}})},l=[],u=n("5a89"),d=n("70f8"),m=n("37ca"),h=n.n(m),g=n("6397"),v=n.n(g);const f={controls:{ORBIT:0,DEVICEORIENTATION:1},modes:{NORMAL:0,STEREO:1},classes:{CONTAINER:"panoform-container",RENDERER:"panoform-renderer",CONTROLBAR:"panoform-controlbar",CONTROLBARBUTTON:"panoform-controlbar-button",buttons:{VR:"panoform-controlbar-button-VR",FULLSCREEN:"panoform-controlbar-button-fullscreen"}}};var w={name:"ViewerRenderer",data(){return{container:null,camera:null,controls:null,scene:null,normalRenderer:null,stereoRenderer:null,device:null}},computed:{currentImage(){return this.$store.state.viewer.currentImage},isStereo(){return this.$store.state.viewer.stereo},isFullscreen(){return this.$store.state.viewer.fullscreen},storeControls(){return this.$store.state.viewer.controls},webVRDevice(){return this.$store.state.viewer.webVRDevice},isWebVR(){return this.$store.state.viewer.webVR}},watch:{currentImage(e){this.loadImage(e)},isStereo(e){let t;t=e?f.modes.STEREO:f.modes.NORMAL,this.setMode(t)},isFullscreen(e){this.setFullscreen(e)},storeControls(e){this.setControls(e)},webVRDevice(e){this.device=e,this.normalRenderer.vr.setDevice(this.device)},isWebVR(e){e?(this.device.requestPresent([{source:this.container}]),this.normalRenderer.vr.enabled=!0):(this.device.exitPresent(),this.normalRenderer.vr.enabled=!1)}},methods:{init(){history.pushState(null,null,null),this.container=document.getElementById("viewer-container"),this.scene=new u["Scene"],this.camera=new u["PerspectiveCamera"](75,this.container.clientWidth/this.container.clientHeight,1,1100),this.camera.position.z=.5,this.normalRenderer=new u["WebGLRenderer"],this.normalRenderer.setSize(this.container.clientWidth,this.container.clientHeight),this.normalRenderer.setPixelRatio(window.devicePixelRatio),this.stereoRenderer=new d["a"](this.normalRenderer),this.stereoRenderer.eyeSeparation=0,this.stereoRenderer.setSize(this.container.clientWidth,this.container.clientHeight),this.setMode(f.modes.NORMAL),this.setControls(f.controls.ORBIT),window.addEventListener("resize",()=>this.onWindowResize()),window.addEventListener("orientationchange",()=>this.onOrientationChange()),window.addEventListener("fullscreenchange",()=>this.onFullscreenChange()),window.addEventListener("popstate",e=>{this.$store.state.viewing&&(e.preventDefault(),this.$store.commit("setViewing",!1))}),this.container.appendChild(this.normalRenderer.domElement),this.normalRenderer.setAnimationLoop(()=>{this.controls.update(),this.render(this.mode)})},render(e){e==f.modes.STEREO?this.stereoRenderer.render(this.scene,this.camera):this.normalRenderer.render(this.scene,this.camera)},onWindowResize(){this.camera.aspect=this.container.clientWidth/this.container.clientHeight,this.camera.updateProjectionMatrix(),this.normalRenderer.setSize(this.container.clientWidth,this.container.clientHeight)},onOrientationChange(){const e=()=>{const e=240;return new window.Promise(function(t){const n=(r,s)=>{window.innerHeight!=s||r>=e?t():window.requestAnimationFrame(()=>n(r+1,s))};n(0,window.innerHeight)})};e().then(()=>{this.onWindowResize()})},onFullscreenChange(){let e=document.fullscreenElement||document.mozFullScreenElement||document.msFullscreenElement||document.webkitFullscreenElement;this.$store.commit("setFullscreen",null!=e)},setMode(e){e==f.modes.STEREO?this.mode=f.modes.STEREO:this.mode=f.modes.NORMAL,this.onWindowResize()},setControls(e){switch(this.controls&&this.controls.dispose(),e){case 1:console.log("setting deviceorientation controls"),this.controls=new h.a(this.camera,this.container),this.controls.alphaOffset=1.5,this.controls.connect(),this.controls.update();break;default:console.log("setting orbit controls"),this.controls=new v.a(this.camera,this.normalRenderer.domElement),this.controls.enableZoom=!1,this.controls.rotateSpeed=-.05,this.controls.enableDamping=!0,this.controls.dampingFactor=.1,this.controls.update();break}},setFullscreen(e){function t(){var e=document.getElementById("panoform-viewer");e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullScreen?e.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT):e.msRequestFullscreen&&e.msRequestFullscreen()}function n(){let e=document.fullscreenElement||document.mozFullScreenElement||document.msFullscreenElement||document.webkitFullscreenElement;null!=e&&(document.exitFullscreen&&document.exitFullscreen(),document.msExitFullscreen&&document.msExitFullscreen(),document.mozCancelFullScreen&&document.mozCancelFullScreen(),document.webkitExitFullscreen&&document.webkitExitFullscreen())}e?t():n()},clearScene(){this.scene.children.forEach(e=>this.scene.remove(this.scene.getObjectById(e.id)))},loadImage(e){if(null!=e){this.clearScene();const t=new u["TextureLoader"];t.load(e,e=>{const t=new u["SphereGeometry"](100,60,40),n=new u["MeshBasicMaterial"]({map:e,side:u["DoubleSide"]});t.scale(-1,1,1);const r=new u["Mesh"](t,n);this.scene.add(r),r.position.set(0,0,0),r.rotation.set(0,-1.5,0)})}}},mounted(){this.init(),this.loadImage(this.$store.state.viewer.currentImage)}},p=w,b=(n("3683"),n("2877")),R=Object(b["a"])(p,c,l,!1,null,null,null),I=R.exports,C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"controls"},[n("div",{staticClass:"controlbar top"},[n("button",{staticClass:"button close enabled",on:{click:function(t){return t.preventDefault(),e.closeViewer(t)}}})]),n("div",{staticClass:"controlbar"},[e.webVR?n("button",{staticClass:"button VR",class:{enabled:e.isWebVR},on:{click:function(t){return t.preventDefault(),e.toggleWebVR(t)}}}):e._e(),e.deviceOrientationVR?n("button",{staticClass:"button VR",class:{enabled:e.isStereo},on:{click:function(t){return t.preventDefault(),e.toggleVR(t)}}}):e._e()])])},E=[],O={name:"ViewerControls",data(){return{webVR:!1,deviceOrientationVR:!1}},computed:{isStereo(){return this.$store.state.viewer.stereo},isWebVR(){return this.$store.state.viewer.webVR}},methods:{init(){if("getVRDisplays"in navigator)navigator.getVRDisplays().then(e=>{this.$store.commit("setWebVRDevice",e[0]),this.webVR=!0});else{const e=()=>{this.deviceOrientationVR=!0,window.removeEventListener("deviceorientation",e,!1)};window.addEventListener("deviceorientation",e,!1)}},loadImage(){this.$store.commit("setCurrentImage",this.image),this.$store.dispatch("addRecentImage",this.image)},closeViewer(){this.$store.commit("setViewing",!1)},toggleVR(){let e=!this.$store.state.viewer.stereo;null!=screen.orientation&&(e?screen.orientation.lock("landscape-primary").catch(()=>{console.log("Orientation lock not supported on device")}):screen.orientation.unlock()),this.$store.commit("setControls",e?1:0),this.$store.commit("setStereo",e),this.$store.commit("setFullscreen",e)},toggleWebVR(){let e=!this.$store.state.viewer.webVR;this.$store.commit("setWebVR",e)}},mounted(){this.init()}},V=O,S=(n("d8ce"),Object(b["a"])(V,C,E,!1,null,"73805fc7",null)),_=S.exports,k={name:"Viewer",components:{ViewerRenderer:I,ViewerControls:_}},y=k,F=(n("15dd"),Object(b["a"])(y,i,a,!1,null,null,null)),$=F.exports,D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form",[n("input",{attrs:{id:"filepicker",type:"file",accept:"image/*"},on:{change:e.handleFileSelect}}),n("label",{staticClass:"button",attrs:{for:"filepicker"}},[e._v("Choose an image")])])},x=[],j={name:"ImagePicker",methods:{handleFileSelect(e){const t=e.target.files[0],n=4096,r=2048,s=new FileReader;s.onload=e=>{const t=new Image;t.src=e.target.result,t.onload=()=>{const e=document.createElement("canvas");e.width=n,e.height=r;const s=e.getContext("2d");s.drawImage(t,0,0,n,r);const o=s.canvas.toDataURL("image/jpeg");this.$store.commit("setCurrentImage",o),this.$store.dispatch("addRecentImage",o),this.$store.commit("setViewing",!0)},s.onerror=e=>console.log(e)},s.readAsDataURL(t),e.target.value=null}}},L=j,P=(n("f756"),Object(b["a"])(L,D,x,!1,null,"687a21ef",null)),W=P.exports,N={name:"app",components:{Viewer:$,ImagePicker:W},computed:{recentImages(){return this.$store.state.recentImages}},methods:{clearDB(){this.$store.dispatch("clearRecentImages")},setImage(e){this.$store.commit("setCurrentImage",e),this.$store.commit("setViewing",!0)},removeImage(e){this.$store.dispatch("removeRecentImage",e)},enableOrientation(){"function"===typeof DeviceOrientationEvent.requestPermission?DeviceOrientationEvent.requestPermission().then(e=>{"granted"===e&&console.log("Orientation Permission Granted")}).catch(console.error):console.log("Non-iOS Device")}}},T=N,A=(n("5c0b"),Object(b["a"])(T,s,o,!1,null,null,null)),M=A.exports,B=n("2f62");let q;r["a"].use(B["a"]);let z=new B["a"].Store({state:{viewing:!1,viewer:{fullscreen:!1,stereo:!1,webVR:!1,controls:0,webVRDevice:null,currentImage:null},recentImages:[]},mutations:{setViewing(e,t){e.viewing=t},clearRecentImages(e){e.recentImages=[]},setRecentImages(e,t){e.recentImages=t},addRecentImage(e,t){e.recentImages.unshift(t)},removeRecentImage(e,t){e.recentImages=e.recentImages.filter(e=>e.key!=t)},setCurrentImage(e,t){e.viewer.currentImage=t},setStereo(e,t){e.viewer.stereo=t},setFullscreen(e,t){e.viewer.fullscreen=t},setControls(e,t){e.viewer.controls=t},setWebVRDevice(e,t){e.viewer.webVRDevice=t},setWebVR(e,t){e.viewer.webVR=t}},actions:{clearRecentImages({commit:e}){let t=q.transaction(["images"],"readwrite").objectStore("images"),n=t.clear();n.onerror=()=>{console.log("Error clearing database")},n.onsuccess=()=>{e("clearRecentImages")}},getRecentImages({commit:e}){let t=q.transaction(["images"]).objectStore("images"),n=t.index("created").getAll();n.onerror=()=>{console.log("Error getting images")},n.onsuccess=()=>{e("setRecentImages",n.result)}},addRecentImage({commit:e},t){let n={created:(new Date).toJSON().slice(0,19).replace("T"," "),data:t},r=q.transaction(["images"],"readwrite").objectStore("images"),s=r.add(n);s.onerror=()=>{console.log("Error adding image")},s.onsuccess=t=>{n.key=t.target.result,e("addRecentImage",n)}},removeRecentImage({commit:e},t){let n=q.transaction(["images"],"readwrite").objectStore("images"),r=n.delete(t);r.onerror=()=>{console.log("Error removing image")},r.onsuccess=()=>{e("removeRecentImage",t)}}}});document.addEventListener("DOMContentLoaded",()=>{if(!("indexedDB"in window))return;const e="panoformDB",t=1;let n=window.indexedDB.open(e,t);n.onerror=e=>{console.log(e)},n.onsuccess=e=>{console.log("Database created"),q=e.target.result,z.dispatch("getRecentImages")},n.onupgradeneeded=e=>{let t=e.target.result,n=t.createObjectStore("images",{keyPath:"key",autoIncrement:!0});n.createIndex("created","created",{unique:!1}),n.createIndex("data","data",{unique:!0})}});var H=z,U=n("9483");Object(U["a"])("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh."),window.location.reload(!0)},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}}),r["a"].config.productionTip=!1,new r["a"]({store:H,render:function(e){return e(M)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("5e27"),s=n.n(r);s.a},"5e27":function(e,t,n){},"855a":function(e,t,n){},"8c53":function(e,t,n){e.exports=n.p+"img/logo-full.791db8a0.svg"},"8fbc":function(e,t,n){},a25b:function(e,t,n){},d8ce:function(e,t,n){"use strict";var r=n("8fbc"),s=n.n(r);s.a},f756:function(e,t,n){"use strict";var r=n("855a"),s=n.n(r);s.a}});
//# sourceMappingURL=app.08cdad6b.js.map
"use strict";(self["webpackChunkcamping"]=self["webpackChunkcamping"]||[]).push([[744],{1622:function(e,s,t){t.d(s,{Z:function(){return S}});var a=t(3396),i=t(7139);const n=e=>((0,a.dD)("data-v-2b9c6ddb"),e=e(),(0,a.Cn)(),e),r={class:"map_wrap"},o=n((()=>(0,a._)("div",{id:"map"},null,-1))),l={id:"menu_wrap",class:"bg_white"},c=n((()=>(0,a._)("div",{class:"option"},null,-1))),d={id:"placesList"},h={class:"info"},m={class:"jibun gray"},u={class:"tel"},p={id:"pagination"};function g(e,s,t,n,g,v){return(0,a.wg)(),(0,a.iD)("div",r,[o,(0,a._)("div",l,[c,(0,a._)("ul",d,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(g.searchResult,((e,t)=>((0,a.wg)(),(0,a.iD)("li",{onMouseover:s[0]||(s[0]=e=>v.mouseOverList(e)),onMouseout:s[1]||(s[1]=e=>v.mouseOutList()),onClick:s[2]||(s[2]=e=>v.placeListClick(e)),class:"item"},[(0,a._)("span",{class:(0,i.C_)("markerbg marker_"+(t+1))},null,2),(0,a._)("div",h,[(0,a._)("h5",null,(0,i.zw)(e.place_name),1),(0,a._)("span",null,(0,i.zw)(e.road_address_name),1),(0,a._)("span",m,(0,i.zw)(e.address_name),1),(0,a._)("span",u,(0,i.zw)(e.phone),1)])],32)))),256))]),(0,a._)("div",p,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(g.paginations.last,(e=>((0,a.wg)(),(0,a.iD)("a",{href:"#",class:(0,i.C_)({on:v.isCurrent(e)}),onClick:s[3]||(s[3]=e=>v.clickPage(e))},(0,i.zw)(e),3)))),256))])])])}t(7658);var v=t(2492),f=t.n(v),k={name:"KakaoMap",props:["search"],data(){return{markers:[],infowindow:null,map:null,searchResult:[],paginations:[]}},mounted(){this.startMap()},methods:{startMap(){if(window.kakao&&window.kakao.maps)this.initMap();else{const e=document.createElement("script");e.onload=()=>kakao.maps.load(this.initMap),e.src="//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=e1e52b4e2ae3417c2eab9d6c37859a8e&libraries=services",document.head.appendChild(e)}},initMap(){const e=document.getElementById("map"),s={center:new kakao.maps.LatLng(33.450701,126.570667),level:5};this.map=new kakao.maps.Map(e,s);let t=new kakao.maps.services.Places;this.infowindow=new kakao.maps.InfoWindow({zIndex:1}),""!=this.search&&void 0!=this.search&&t.keywordSearch(this.search,this.placesSearchCB)},searchPlace(e){const s=document.getElementById("map"),t={center:new kakao.maps.LatLng(33.450701,126.570667),level:5};this.map=new kakao.maps.Map(s,t);let a=new kakao.maps.services.Places;console.log("search place "+e),a.keywordSearch(e,this.placesSearchCB)},placesSearchCB(e,s,t){if(s===kakao.maps.services.Status.OK)this.removeMarker(),this.searchResult=e,this.paginations=t,this.displayPlaces();else{if(s===kakao.maps.services.Status.ZERO_RESULT)return void Toast.fire({toast:!0,position:"center-center",showConfirmButton:!1,timer:2e3,timerProgressBar:!0,didOpen:e=>{e.addEventListener("mouseenter",f().stopTimer),e.addEventListener("mouseleave",f().resumeTimer)},icon:"warning",title:"검색 결과가 없습니다."});if(s===kakao.maps.services.Status.ERROR)return void Toast.fire({toast:!0,position:"center-center",showConfirmButton:!1,timer:2e3,timerProgressBar:!0,didOpen:e=>{e.addEventListener("mouseenter",f().stopTimer),e.addEventListener("mouseleave",f().resumeTimer)},icon:"error",title:"검색 결과 중 오류가 발생했습니다."})}},displayPlaces(){let e=document.getElementById("menu_wrap"),s=new kakao.maps.LatLngBounds;for(var t=0;t<this.searchResult.length;t++){let e=new kakao.maps.LatLng(this.searchResult[t].y,this.searchResult[t].x);this.addMarker(e,t);s.extend(e)}e.scrollTop=0,this.map.setBounds(s)},placeListClick(e){let s=this.getMarkerAndName(e.target);this.$emit("setAddress",s.address)},mouseOverList(e){let s=this.getMarkerAndName(e.target);this.displayInfowindow(s.marker,s.title)},mouseOutList(){this.infowindow.close()},getMarkerAndName(e){while(!e.classList.contains("item"))e=e.parentElement;let s=e.querySelector(".markerbg").className.indexOf("marker_"),t=this.markers[e.querySelector(".markerbg").className.substr(s+7,1)],a=e.querySelector("h5").innerText,i=e.querySelector(".jibun").innerText;return{marker:t,title:a,address:i}},addMarker(e,s,t){var a="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png";let i=new kakao.maps.Size(36,37),n={spriteSize:new kakao.maps.Size(36,691),spriteOrigin:new kakao.maps.Point(0,46*s+10),offset:new kakao.maps.Point(13,37)},r=new kakao.maps.MarkerImage(a,i,n),o=new kakao.maps.Marker({position:e,image:r});return o.setMap(this.map),this.markers.push(o),o},removeMarker(){for(var e=0;e<this.markers.length;e++)this.markers[e].setMap(null);this.markers=[]},isCurrent(e){return e==this.paginations.current},clickPage(e){e.preventDefault(),this.paginations.gotoPage(e.target.innerText)},displayPagination(e){let s,t=document.getElementById("pagination"),a=document.createDocumentFragment();while(t.hasChildNodes())t.removeChild(t.lastChild);for(s=1;s<=e.last;s++){var i=document.createElement("a");i.href="#",i.innerHTML=s,s===e.current?i.className="on":i.onclick=function(s){return function(){e.gotoPage(s)}}(s),a.appendChild(i)}t.appendChild(a)},displayInfowindow(e,s){var t='<div style="padding:5px;z-index:1;">'+s+"</div>";this.infowindow.setContent(t),this.infowindow.open(this.map,e)},removeAllChildNods(e){while(e.hasChildNodes())e.removeChild(e.lastChild)}},watch:{search:function(){this.startMap()}}},w=t(89);const y=(0,w.Z)(k,[["render",g],["__scopeId","data-v-2b9c6ddb"]]);var S=y},4537:function(e,s,t){t.d(s,{Z:function(){return f}});var a=t(3396),i=t(9242);const n={class:"sns-container"},r={class:"sns-searchbox"},o={class:"sns-search-list-container"},l={class:"sns-search-list"},c=["onClick","value"],d={class:"sns-search-list-container"},h={class:"sns-search-nick-list"},m=["onClick","value"];function u(e,s,t,u,p,g){return(0,a.wg)(),(0,a.iD)("div",n,[(0,a._)("div",r,[(0,a.wy)((0,a._)("input",{type:"search",onKeyup:s[0]||(s[0]=e=>g.checkEnter(e)),"onUpdate:modelValue":s[1]||(s[1]=s=>e.searchText=s),placeholder:"검색어를 입력해주세요."},null,544),[[i.nr,e.searchText]])]),(0,a._)("div",o,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.searchResult,(e=>((0,a.wg)(),(0,a.iD)("div",l,[(0,a.wy)((0,a._)("input",{type:"text",onClick:s=>g.getSnsHashtagList(e),value:e,onChange:s[2]||(s[2]=e=>g.search())},null,40,c),[[i.F8,this.doSearchTag]])])))),256))]),(0,a._)("div",d,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.searchResultNick,(e=>((0,a.wg)(),(0,a.iD)("div",h,[(0,a.wy)((0,a._)("input",{type:"text",onClick:s=>g.getSnsNickFeed(e),value:e,onChange:s[3]||(s[3]=e=>g.search())},null,40,m),[[i.F8,this.doSearchId]])])))),256))])])}t(7658);var p={created:function(){fetch("http://localhost:8087/java/hashtag").then((e=>e.text())).then((e=>e.substring(2,e.length-2))).then((e=>e.replaceAll('","'," "))).then((e=>e.split(" "))).then((e=>e.join(" "))).then((e=>{console.log(e),this.snsData.push(e)})).catch((e=>console.log(e))),fetch("http://localhost:8087/java/snsnickname").then((e=>e.text())).then((e=>e.substring(2,e.length-2))).then((e=>e.replaceAll('","'," "))).then((e=>e.split(" "))).then((e=>e.join(" "))).then((e=>{this.searchNickname.push(e),console.log(e)}))},data:()=>({searchText:"",snsData:[],searchNickname:[],searchResult:[],searchResultNick:[]}),methods:{search:function(){this.doSearchTag=!this.doSearchTag},doSearch(){console.log(this.searchText)},checkEnter(e){let s=e.target.value;if(s.length>1){let t=s.substr(0,1);"#"==t?(document.querySelectorAll(".sns-search-list-container")[0].style.display="block",document.querySelectorAll(".sns-search-list-container")[1].style.display="none",this.doSearchTag(s)):(document.querySelectorAll(".sns-search-list-container")[0].style.display="none",document.querySelectorAll(".sns-search-list-container")[1].style.display="block",this.doSearchId(s)),13==e.keyCode&&this.doSearch()}},setTag(e){this.searchText=e},doSearchTag(e){this.searchResult=[],console.log(e);for(let s of this.snsData){console.log(s);let t=s.indexOf(e);if(t>=0){let t=s.split(" "),a=t.filter((s=>s.includes(e)));console.log(a),a.forEach((e=>{this.searchResult.includes(e)||this.searchResult.push(e)}))}}console.log(this.searchResult);for(let s of this.searchResult){}},doSearchId(e){this.searchResultNick=[],console.log(e);for(let s of this.searchNickname){let t=s.indexOf(e);if(t>=0){let t=s.split(" "),a=t.filter((s=>s.includes(e)));a.forEach((e=>{this.searchResultNick.includes(e)||this.searchResultNick.push(e)}))}}console.log(this.searchResultNick)},getSnsNickFeed(e){this.$router.push({name:"SnsMyFeed",params:{nickname:e}})},getSnsHashtagList(e){document.querySelectorAll(".sns-search-list-container")[0].style.display="none";let s=window.location.href;s.indexOf("sns/%")>0||s.indexOf("sns/undefined")>0?this.$emit("showHashList",e):this.$router.push({name:"SnsMain",params:{hashtag:e}})}}},g=t(89);const v=(0,g.Z)(p,[["render",u],["__scopeId","data-v-3f1c7c0a"]]);var f=v},1744:function(e,s,t){t.r(s),t.d(s,{default:function(){return V}});var a=t(3396),i=t(9242),n=t(2640);const r=e=>((0,a.dD)("data-v-1aede193"),e=e(),(0,a.Cn)(),e),o={class:"sns-container"},l={class:"sns-searchbox"},c={class:"sns-write-container"},d={class:"sns-write-button"},h=r((()=>(0,a._)("span",{class:"sns-button-background"},"새 게시물 작성",-1))),m={class:"sns-write-form-container"},u={class:"sns-write-form"},p={class:"sns-upload-image-container"},g={class:"sns-register-image-preview"},v={class:"sns-upload-image-preview",id:"sns-register-image-form",encrypt:"multipart/form-data",style:{padding:"20px"}},f={class:"sns-write-form",id:"snsForm"},k={class:"sns-write-form-id-form"},w={class:"sns-write-form-id"},y={class:"sns-write-id"},S=["src"],_={class:"sns-write-form-id"},A={class:"sns-write-id"},L=["value"],x=["value"],b={class:"sns-write-context"},C={class:"sns-write-hashtag"},I={class:"sns-write-place"},T=["value"],P={class:"sns-register-address-container"},D={class:"sns-write-location"},M={class:"sns-register-kakaomap"};function E(e,s,t,r,E,R){const N=(0,a.up)("SnsSearch"),B=(0,a.up)("ImageSnsPreview"),q=(0,a.up)("KakaoMap");return(0,a.wg)(),(0,a.iD)("div",o,[(0,a._)("div",l,[(0,a.Wm)(N,{onShowHashList:e.showHashList},null,8,["onShowHashList"])]),(0,a._)("div",c,[(0,a._)("div",d,[h,(0,a._)("input",{type:"button",onClick:s[0]||(s[0]=(...e)=>R.doPost&&R.doPost(...e)),value:"게시글 공유"})]),(0,a._)("div",m,[(0,a._)("div",u,[(0,a._)("div",p,[(0,a._)("div",g,[(0,a.Wm)(B,{images:e.images,isNotList:!1,onDeleteImages:R.deleteImages},null,8,["images","onDeleteImages"])]),(0,a._)("form",v,[(0,a._)("label",null,[(0,a.Uk)("사진등록 "),(0,a._)("input",{onChange:s[1]||(s[1]=e=>R.changeImage(e)),onDragenter:s[2]||(s[2]=(0,i.iM)((()=>{}),["prevent"])),onDragover:s[3]||(s[3]=(0,i.iM)((()=>{}),["prevent"])),onDrop:s[4]||(s[4]=(0,i.iM)((s=>e.dropImage(s)),["prevent"])),type:"file",multiple:"",style:{display:"none"}},null,32)])])])]),(0,a._)("form",f,[(0,a._)("div",k,[(0,a._)("div",w,[(0,a._)("div",y,[(0,a._)("img",{src:"http://localhost:8087/java/profile/"+e.storedProfile.imagePath+"/"+e.storedProfile.storedName},null,8,S)])]),(0,a._)("div",_,[(0,a._)("div",A,[(0,a._)("input",{type:"text",value:this.nickname,name:"nickname",readonly:""},null,8,L),(0,a._)("input",{type:"text",value:this.email,name:"email",style:{display:"none"},readonly:""},null,8,x)])])]),(0,a._)("div",b,[(0,a.wy)((0,a._)("textarea",{"onUpdate:modelValue":s[5]||(s[5]=s=>e.snsWriteText=s),placeholder:"내용을 입력하세요",name:"content"},null,512),[[i.nr,e.snsWriteText]])]),(0,a._)("div",C,[(0,a.wy)((0,a._)("textarea",{"onUpdate:modelValue":s[6]||(s[6]=s=>e.snsWriteHashtag=s),placeholder:"해시태그",name:"hashtag"},null,512),[[i.nr,e.snsWriteHashtag]])]),(0,a._)("div",I,[(0,a._)("input",{value:this.place,type:"text",name:"place",placeholder:"장소"},null,8,T)]),(0,a._)("label",P,[(0,a._)("div",D,[(0,a._)("input",{onKeyup:s[7]||(s[7]=(0,i.D2)((e=>R.snsAddress()),["enter"])),type:"text",name:"location",class:"sns-register-address",placeholder:"예시 : 주소 입력후 엔터를 누르세요."},null,32),(0,a._)("img",{onClick:s[8]||(s[8]=e=>R.snsAddress()),class:"address-search-button",src:n})]),(0,a._)("div",M,[(0,a.Wm)(q,{onSetAddress:R.setAddress,search:e.search,ref:"kamap"},null,8,["onSetAddress","search"])])])])])])])}t(7658);var R=t(4537),N=t(2492),B=t.n(N),q=t(1622);const O={class:"image-preview-container"},U=["id"],F=["src"];function K(e,s,t,i,n,r){return(0,a.wg)(),(0,a.iD)("div",O,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.imagesUrl,((e,t)=>((0,a.wg)(),(0,a.iD)("div",{id:t,class:"image-preview-div"},[(0,a._)("img",{src:e},null,8,F),(0,a._)("input",{type:"button",value:"X",onMouseover:s[0]||(s[0]=e=>r.mouseoverImage(e)),onMouseout:s[1]||(s[1]=e=>r.mouseoutImage(e)),onClick:s[2]||(s[2]=e=>r.deleteImage(e)),class:"image-preview-delete-button"},null,32)],8,U)))),256))])}var H={props:["images"],data(){return{imageFiles:[],imagesUrl:[]}},created:function(){console.log("크리에이티드 이미지 : ",this.images)},methods:{deleteImage(e){let s=e.target.parentElement,t=new DataTransfer,a=[];for(let i=0;i<this.imageFiles.length;i++)i!=s.getAttribute("id")&&(t.items.add(this.imageFiles[i]),a.push(this.imagesUrl[i]));this.imageFiles=t.files,this.imagesUrl=a,this.$emit("deleteImages",this.imageFiles)},insertImage(){let e=new DataTransfer;for(let s of this.images)s.type.indexOf("image")>=0&&e.items.add(s);this.imageFiles=e.files,this.imagesUrl=[];for(let s of this.imageFiles)this.imagesUrl.push(URL.createObjectURL(s))},mouseoverImage(e){e.target.classList.add("delete-button-active"),e.target.previousElementSibling.classList.add("filter-blur")},mouseoutImage(e){e.target.classList.remove("delete-button-active"),e.target.previousElementSibling.classList.remove("filter-blur")}},watch:{images(e,s){e.length>=s.length&&this.insertImage()}}},W=t(89);const j=(0,W.Z)(H,[["render",K],["__scopeId","data-v-4d819850"]]);var Z=j,z={data:function(){return{nickname:this.$store.state.nickname,email:this.$store.state.email,snsWriteId:"작성자id",snsWriteText:"내용",snsWriteHashtag:"#해시태그",snsWritePlace:"장소",snsWriteLocation:"위치",place:"",search:"",storedProfile:"",searchText:"",images:[],imagesUrl:[]}},components:{KakaoMap:q.Z,ImageSnsPreview:Z},created:function(){fetch("http://localhost:8087/java/profile/"+this.$store.state.email).then((e=>e.json())).then((e=>{this.storedProfile=e})).catch((e=>console.log(e)))},methods:{doSearch(){console.log(this.searchText)},checkEnter(e){13==e.keyCode&&this.doSearch()},doPost(){let e=new FormData(document.querySelector("#snsForm"));for(let s of this.images)e.append("files",s);e.forEach(((e,s)=>{console.log(e)})),fetch("http://localhost:8087/java/sns",{method:"POST",headers:{},body:e}).then((e=>e.text())).then((e=>{console.log(e),"true"==e?B().fire({icon:"success",title:"게시글이 정상적으로 등록되었습니다.",toast:!0,position:"center-center",showConfirmButton:!1,timer:2e3,timerProgressBar:!0,didOpen:e=>{e.addEventListener("mouseenter",B().stopTimer),e.addEventListener("mouseleave",B().resumeTimer),this.$router.push({path:"/sns/"+void 0})}}):"true"!=e&&B().fire({icon:"info",title:"사진과 내용을 반드시 입력해주세요.",toast:!0,position:"center-center",showConfirmButton:!1,timer:2e3,timerProgressBar:!0,didOpen:e=>{e.addEventListener("mouseenter",B().stopTimer),e.addEventListener("mouseleave",B().resumeTimer)}})}))},deleteImages(e){this.images=e,document.querySelector('#sns-register-image-container input[type="file"]').files=e},changeImage(e){console.log(e.target);let s=new DataTransfer;for(let t=0;t<e.target.files.length;t++)s.items.add(e.target.files[t]);this.images=s.files,e.target.files=s.files},snsAddress(){let e=document.querySelector(".sns-register-address").value,s=document.querySelector(".sns-register-kakaomap");null==e||""==e?(B().fire({icon:"warning",title:"검색할 장소를 입력하세요.",toast:!0,position:"center-center",showConfirmButton:!1,timer:2e3,timerProgressBar:!0,didOpen:e=>{e.addEventListener("mouseenter",B().stopTimer),e.addEventListener("mouseleave",B().resumeTimer)}}),s.classList.remove("active")):(s.classList.contains("active")||s.classList.toggle("active"),this.search=e,this.$refs.kamap.searchPlace(e),console.log(this.$refs.kamap.searchPlace(e)))},setAddress(e){let s=document.querySelector(".sns-register-kakaomap");s.classList.remove("active"),document.querySelector(".sns-register-address").value=e;let t=document.querySelector("#placesList"),a=t.querySelectorAll(".item"),i="";for(let n of a)if(n.querySelector(".info").querySelectorAll("span")[1].innerText==e){i=n.querySelector(".info").querySelector("h5").innerText;break}document.querySelector(".sns-write-place input").value=i}},components:{SnsSearch:R.Z,KakaoMap:q.Z,ImageSnsPreview:Z}};const Q=(0,W.Z)(z,[["render",E],["__scopeId","data-v-1aede193"]]);var V=Q},2640:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAABB0lEQVQ4jdXTv0rDUBQH4C8q6iZCB3V06tQu7oI+gJuCezeHdlUKfRBdBQVnNx9ARIfOxToKDqIg+LcdbgpVae6tuPRAuIEcvpyE32FSq4JDdPGGe5xjG9k4UIYWPnGNfexiD2f4wAVKqWALr6iNmKSKDi4xH8Mq+WS1SN8qHtGMgUfCZ6b8oyYeMFPU1MVBAgZl9LD288HU0P0S7hLB2/xcKQKfsZAILubnUxF4hY1EcFOI0E1R007eVI1gc2jjNPbWTAhtR4jGKOwYLwU936okhHaQszJmsSxsTDvHvtBIAQkbMMhZb+h6x0k+WWNcFKaFnG1h3e8E/AmN1QCt/ydaF7ZsQqoPxhA4y5kPLhAAAAAASUVORK5CYII="}}]);
//# sourceMappingURL=744.c17f93d1.js.map
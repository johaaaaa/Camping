"use strict";(self["webpackChunkcamping"]=self["webpackChunkcamping"]||[]).push([[451],{1151:function(e,t){t["Z"]={name:"district",data:[{"서울":["종로구","중구","용산구","성동구","광진구","동대문구","중랑구","성북구","강북구","도봉구","노원구","은평구","서대문구","마포구","양천구","강서구","구로구","금천구","영등포구","동작구","관악구","서초구","강남구","송파구","강동구"]},{"부산":["중구","서구","동구","영도구","부산진구","동래구","남구","북구","강서구","해운대구","사하구","금정구","연제구","수영구","사상구","기장군"]},{"인천":["중구","동구","남구","연수구","남동구","부평구","계양구","서구","강화군","옹진군"]},{"대구":["중구","동구","서구","남구","북구","수성구","달서구","달성군"]},{"광주":["동구","서구","남구","북구","광산구"]},{"대전":["동구","중구","서구","유성구","대덕구"]},{"울산":["중구","남구","동구","북구","울주군"]},{"경기":["가평군","고양시","과천시","광명시","광주시","구리시","군포시","김포시","남양주시","동두천시","부천시","성남시","세종특별자치시","수원시","시흥시","안산시","안성시","안양시","양주시","양평군","여주시","연천군","오산시","용인시","의왕시","의정부시","이천시","파주시","평택시","포천시","하남시","화성시"]},{"강원":["원주시","춘천시","강릉시","동해시","속초시","삼척시","홍천군","태백시","철원군","횡성군","평창군","영월군","정선군","인제군","고성군","양양군","화천군","양구군"]},{"충북":["청주시","충주시","제천시","보은군","옥천군","영동군","증평군","진천군","괴산군","음성군","단양군"]},{"충남":["천안시","공주시","보령시","아산시","서산시","논산시","계룡시","당진시","금산군","부여군","서천군","청양군","홍성군","예산군","태안군"]},{"경북":["포항시","경주시","김천시","안동시","구미시","영주시","영천시","상주시","문경시","경산시","군위군","의성군","청송군","영양군","영덕군","청도군","고령군","성주군","칠곡군","예천군","봉화군","울진군","울릉군"]},{"경남":["창원시","김해시","진주시","양산시","거제시","통영시","사천시","밀양시","함안군","거창군","창녕군","고성군","하동군","합천군","남해군","함양군","산청군","의령군"]},{"전북":["전주시","익산시","군산시","정읍시","완주군","김제시","남원시","고창군","부안군","임실군","순창군","진안군","장수군","무주군"]},{"전남":["여수시","순천시","목포시","광양시","나주시","무안군","해남군","고흥군","화순군","영암군","영광군","완도군","담양군","장성군","보성군","신안군","장흥군","강진군","함평군","진도군","곡성군","구례군"]},{"제주특별자치도":["제주시","서귀포시"]}]}},170:function(e,t,a){a.d(t,{Z:function(){return c}});var i=a(3396);const n={class:"image-preview-container"},o=["id"],l=["src"];function s(e,t,a,s,r,d){return(0,i.wg)(),(0,i.iD)("div",n,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(r.imagesUrl,((e,a)=>((0,i.wg)(),(0,i.iD)("div",{id:a,class:"image-preview-div"},[(0,i._)("img",{src:e},null,8,l),(0,i._)("input",{type:"button",value:"X",onMouseover:t[0]||(t[0]=e=>d.mouseoverImage(e)),onMouseout:t[1]||(t[1]=e=>d.mouseoutImage(e)),onClick:t[2]||(t[2]=e=>d.deleteImage(e)),class:"image-preview-delete-button"},null,32)],8,o)))),256))])}a(7658);var r={props:["images"],data(){return{imageFiles:[],imagesUrl:[]}},created:function(){console.log("크리에이티드 이미지 : ",this.images)},methods:{deleteImage(e){let t=e.target.parentElement,a=new DataTransfer,i=[];for(let n=0;n<this.imageFiles.length;n++)n!=t.getAttribute("id")&&(a.items.add(this.imageFiles[n]),i.push(this.imagesUrl[n]));this.imageFiles=a.files,this.imagesUrl=i,this.$emit("deleteImages",this.imageFiles)},insertImage(){let e=new DataTransfer;for(let t of this.images)t.type.indexOf("image")>=0&&e.items.add(t);this.imageFiles=e.files,this.imagesUrl=[];for(let t of this.imageFiles)this.imagesUrl.push(URL.createObjectURL(t))},mouseoverImage(e){e.target.classList.add("delete-button-active"),e.target.previousElementSibling.classList.add("filter-blur")},mouseoutImage(e){e.target.classList.remove("delete-button-active"),e.target.previousElementSibling.classList.remove("filter-blur")}},watch:{images(e,t){e.length>=t.length&&this.insertImage()}}},d=a(89);const u=(0,d.Z)(r,[["render",s],["__scopeId","data-v-0109d309"]]);var c=u},451:function(e,t,a){a.r(t),a.d(t,{default:function(){return G}});var i=a(3396),n=a(9242);const o=e=>((0,i.dD)("data-v-120f462a"),e=e(),(0,i.Cn)(),e),l={id:"container"},s={id:"container2",method:"post",encrypt:"multipart/form-data"},r={class:"used-heads"},d={class:"used-inserts"},u={id:"camp-register-image-form",encrypt:"multipart/form-data"},c={class:"insert-btn"},m={class:"used-insert-image-container"},p=o((()=>(0,i._)("h3",null,"상품 사진",-1))),v={class:"used-insert-image-preview"},f={class:"used-info"},g=["value"],h=o((()=>(0,i._)("label",{for:"inputWriter"},"작성자",-1))),b=["value"],y=(0,i.uE)('<li data-v-120f462a><label for="inputName" data-v-120f462a>상품명<span class="essential" data-v-120f462a>*</span></label><input type="text" name="usedName" id="inputName" placeholder="상품명을 등록해주세요(최대 20자)" maxlength="20" value="" autofocus data-v-120f462a></li><li data-v-120f462a><label for="inputPrice" data-v-120f462a>가격<span class="essential" data-v-120f462a>*</span></label><input type="number" name="usedPrice" id="inputPrice" placeholder="가격을 숫자로 입력하세요" data-v-120f462a></li><hr data-v-120f462a>',3),_=o((()=>(0,i._)("label",{for:"inputCate"},[(0,i.Uk)("카테고리"),(0,i._)("span",{class:"essential"},"*")],-1))),w=(0,i.uE)('<option value="" disabled data-v-120f462a>카테고리 선택</option><option value="텐트" data-v-120f462a>텐트</option><option value="타프" data-v-120f462a>타프</option><option value="가구" data-v-120f462a>가구</option><option value="침구" data-v-120f462a>침구</option><option value="조리도구" data-v-120f462a>조리도구</option><option value="조명" data-v-120f462a>조명</option><option value="수납" data-v-120f462a>수납</option><option value="공구" data-v-120f462a>공구</option><option value="냉난방" data-v-120f462a>냉난방</option><option value="기타" data-v-120f462a>기타</option>',11),C=[w],B=o((()=>(0,i._)("label",{for:"inputPlace"},[(0,i.Uk)("지역"),(0,i._)("span",{class:"essential"},"*")],-1))),x={class:"usedPlace"},I=(0,i.uE)('<option value="" disabled data-v-120f462a>시/도</option><option value="전체" data-v-120f462a>전체</option><option value="서울" data-v-120f462a>서울특별시</option><option value="부산" data-v-120f462a>부산광역시</option><option value="대구" data-v-120f462a>대구광역시</option><option value="인천" data-v-120f462a>인천광역시</option><option value="광주" data-v-120f462a>광주광역시</option><option value="대전" data-v-120f462a>대전광역시</option><option value="울산" data-v-120f462a>울산광역시</option><option value="경기" data-v-120f462a>경기도</option><option value="강원" data-v-120f462a>강원도</option><option value="충북" data-v-120f462a>충청북도</option><option value="충남" data-v-120f462a>충청남도</option><option value="전북" data-v-120f462a>전라북도</option><option value="전남" data-v-120f462a>전라남도</option><option value="경북" data-v-120f462a>경상북도</option><option value="경남" data-v-120f462a>경상남도</option><option value="제주특별자치도" data-v-120f462a>제주도</option>',18),S=[I],k=o((()=>(0,i._)("option",{value:"",disabled:""},"시/군/구",-1))),P=o((()=>(0,i._)("option",{value:"전체"},"전체",-1))),D=[k,P],U=(0,i.uE)('<li data-v-120f462a><label for="align" data-v-120f462a>상태</label><div id="align" data-v-120f462a><input type="radio" id="radio1" name="usedCondition" value="0" checked data-v-120f462a><label for="radio1" data-v-120f462a>상</label><input type="radio" id="radio2" name="usedCondition" value="1" data-v-120f462a><label for="radio2" data-v-120f462a>중</label><input type="radio" id="radio3" name="usedCondition" value="2" data-v-120f462a><label for="radio3" data-v-120f462a>하</label></div></li><hr data-v-120f462a><li id="textbox" data-v-120f462a><label for="used_content" data-v-120f462a>상품설명<span class="essential" data-v-120f462a>*</span></label><div class="used-desc" data-v-120f462a><pre data-v-120f462a><textarea name="usedContent" class="used_content" maxlength="500" placeholder="여러 장의 상품 사진과 구입 연도, 브랜드, 사용감, 하자 유무 등 구매자에게 필요한 정보를 꼭 포함해 주세요. (10자 이상 500자 이하)" data-v-120f462a></textarea></pre></div></li>',3),E={class:"used-foot"};function T(e,t,a,o,w,I){const k=(0,i.up)("ImagePreview");return(0,i.wg)(),(0,i.iD)("div",l,[(0,i._)("form",s,[(0,i._)("div",r,[(0,i._)("div",d,[(0,i._)("div",u,[(0,i._)("label",c,[(0,i.Uk)("사진등록 "),(0,i._)("input",{onChange:t[0]||(t[0]=e=>I.changeImage(e)),onDragenter:t[1]||(t[1]=(0,n.iM)((()=>{}),["prevent"])),onDragover:t[2]||(t[2]=(0,n.iM)((()=>{}),["prevent"])),onDrop:t[3]||(t[3]=(0,n.iM)((t=>e.dropImage(t)),["prevent"])),type:"file",multiple:"",style:{display:"none"}},null,32)])]),(0,i._)("div",m,[p,(0,i._)("div",v,[(0,i.Wm)(k,{images:w.images,isNotList:!1,onDeleteImages:I.deleteImages},null,8,["images","onDeleteImages"])])])]),(0,i._)("div",f,[(0,i._)("ul",null,[(0,i._)("li",null,[(0,i._)("input",{type:"hidden",name:"email",value:e.$store.state.email},null,8,g),h,(0,i._)("input",{type:"text",name:"nickName",id:"inputemail",value:e.$store.state.nickname,readonly:""},null,8,b)]),y,(0,i._)("li",null,[_,(0,i.wy)((0,i._)("select",{name:"usedCategory",id:"used_cate","onUpdate:modelValue":t[4]||(t[4]=e=>w.myGearType=e)},C,512),[[n.bM,w.myGearType]])]),(0,i._)("li",null,[B,(0,i._)("div",x,[(0,i.wy)((0,i._)("select",{name:"usedPlace","onUpdate:modelValue":t[5]||(t[5]=e=>w.regionSelect=e),id:"districtSelect",onChange:t[6]||(t[6]=(...e)=>I.districtChange&&I.districtChange(...e))},S,544),[[n.bM,w.regionSelect]]),(0,i.wy)((0,i._)("select",{"onUpdate:modelValue":t[7]||(t[7]=e=>w.regionSelect2=e),name:"usedPlace",id:"citySelect"},D,512),[[n.bM,w.regionSelect2]])])]),U])])]),(0,i._)("div",E,[(0,i._)("button",{onClick:t[8]||(t[8]=(0,n.iM)((e=>I.confirm()),["prevent"]))},"작성 완료")])])])}a(7658);var M=a(1151),L=a(2492),N=a.n(L),q=a(170),F={data(){return{myGearType:"",used_writer:"campingGo",regionSelect:"",regionSelect2:"",nickName:this.$store.state.nickname,images:[],imagesUrl:[],search:""}},created(){console.log(this.nickName)},components:{ImagePreview:q.Z},methods:{deleteImages(e){this.images=e,document.querySelector('.used-insert-image-container input[type="file"]').files=e},changeImage(e){let t=new DataTransfer;for(let a=0;a<this.images.length;a++)t.items.add(this.images[a]);for(let a=0;a<e.target.files.length;a++)t.items.add(e.target.files[a]);this.images=t.files,e.target.files=t.files,console.log("aaa",this.images)},confirm:function(){document.forms.namedItem("#container2");document.querySelector("#districtSelect#citySelect");let e=[];e=new FormData(document.querySelector("#container2"));for(let l of this.images)e.append("files",l);let t=document.getElementById("inputName").value,a=document.getElementById("inputPrice").value,i=document.getElementById("used_cate").value,n=document.querySelector(".used_content").value,o=document.querySelector("#districtSelect").value;e.forEach(((e,t)=>{console.log(t,":",e)})),null===t||""===t.trim()?this.swName():null==a||""===a.trim()?this.swPrice():null==i||""===i.trim()?this.swCategory():null==o||""===o.trim()?this.swPlace():null==n||""===n.trim()||n.length<10?this.swContent():(fetch("http://localhost:8087/java/used/usedInsert",{method:"POST",headers:{},body:e}).then((e=>e.text())).then((e=>{e>="1"?(console.log("입력되었습니다."),this.$router.push({name:"usedMain"})):console.log("입력 실패")})).catch((e=>console.log(e))),console.log(e))},clickCheckBox(e){e.preventDefault();let t=e.target.parentElement;while(!t.classList.contains("checkboxLabel"))t=t.parentElement;t=t.querySelector("input"),console.log(t.checked),t.checked?t.checked=!1:t.checked=!0},districtChange:function(){let e=document.querySelector("#districtSelect"),t=document.querySelector("#citySelect"),a=e.value,i=["서울","부산","인천","대구","광주","대전","울산","경기","강원","충북","충남","경북","경남","전북","전남","제주특별자치도"];t.options.length=1;let n=i.indexOf(a),o=M.Z.data[n][a];for(let s in o){var l=document.createElement("option");l.value=o[s],l.innerHTML=o[s],t.appendChild(l)}},swName:function(){N().fire({title:"",text:"상품명은 필수 입력 사항입니다",icon:"warning",confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"확인",reverseButtons:!0})},swPrice:function(){N().fire({title:"",text:"가격은 필수 입력 사항입니다",icon:"warning",confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"확인",reverseButtons:!0})},swCategory:function(){N().fire({title:"",text:"카테고리는 필수 선택 사항입니다",icon:"warning",confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"확인",reverseButtons:!0})},swPlace:function(){N().fire({title:"",text:"지역은 필수 선택 사항입니다",icon:"warning",confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"확인",reverseButtons:!0})},swPlace:function(){N().fire({title:"",text:"거래지역은 필수 선택 사항입니다",icon:"warning",toast:"true",confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"확인",reverseButtons:!0})},swContent:function(){N().fire({title:"",text:"상품설명을 10자 이상 작성해주세요",icon:"warning",confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"확인",reverseButtons:!0})}}},Z=a(89);const $=(0,Z.Z)(F,[["render",T],["__scopeId","data-v-120f462a"]]);var G=$}}]);
//# sourceMappingURL=451.7f6688fe.js.map
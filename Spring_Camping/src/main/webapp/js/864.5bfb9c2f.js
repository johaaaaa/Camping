"use strict";(self["webpackChunkcamping"]=self["webpackChunkcamping"]||[]).push([[864],{2864:function(e,t,o){o.r(t),o.d(t,{default:function(){return U}});var i=o(3396),n=o(9242);const l={class:"used-filter"},a={class:"used-filter-ul"},u=(0,i._)("label",{for:"inputCate"},"카테고리",-1),s=(0,i.uE)('<option value="" disabled>카테고리 선택</option><option value="텐트">텐트</option><option value="타프">타프</option><option value="가구">가구</option><option value="침구">침구</option><option value="조리도구">조리도구</option><option value="조명">조명</option><option value="수납">수납</option><option value="공구">공구</option><option value="냉난방">냉난방</option><option value="기타">기타</option>',11),c=[s],p=(0,i._)("label",{for:"inputDeal"},"거래상태",-1),r=(0,i._)("option",{value:"9",disabled:""},"거래상태 선택",-1),d=(0,i._)("option",{value:"0"},"거래가능",-1),h=(0,i._)("option",{value:"1"},"거래중",-1),m=(0,i._)("option",{value:"2"},"거래완료",-1),g=[r,d,h,m],v={class:"used-filter-ur"},y=(0,i._)("label",{for:"inputPlace"},"지역",-1),S=(0,i.uE)('<option value="" disabled>시/도</option><option value="">전체</option><option value="서울">서울특별시</option><option value="부산">부산광역시</option><option value="대구">대구광역시</option><option value="인천">인천광역시</option><option value="광주">광주광역시</option><option value="대전">대전광역시</option><option value="울산">울산광역시</option><option value="경기">경기도</option><option value="강원">강원도</option><option value="충북">충청북도</option><option value="충남">충청남도</option><option value="전북">전라북도</option><option value="전남">전라남도</option><option value="경북">경상북도</option><option value="경남">경상남도</option><option value="제주특별자치도">제주도</option>',18),P=[S],f=(0,i._)("option",{value:"",disabled:""},"시/군/구",-1),_=(0,i._)("option",{value:"전체"},"전체",-1),C=[f,_],b=(0,i._)("label",{for:"inputPrice"},"가격범위",-1),w=(0,i._)("p",null,"~",-1);function x(e,t,o,s,r,d){return(0,i.wg)(),(0,i.iD)("div",l,[(0,i._)("ul",a,[(0,i._)("li",null,[u,(0,i.wy)((0,i._)("select",{"onUpdate:modelValue":t[0]||(t[0]=e=>r.myCategory=e),name:"usedCategory",selected:""},c,512),[[n.bM,r.myCategory]])]),(0,i._)("li",null,[p,(0,i.wy)((0,i._)("select",{"onUpdate:modelValue":t[1]||(t[1]=e=>r.dealStatus=e),name:"dealStatus",selected:""},g,512),[[n.bM,r.dealStatus]])])]),(0,i._)("ul",v,[(0,i._)("li",null,[y,(0,i.wy)((0,i._)("select",{"onUpdate:modelValue":t[2]||(t[2]=e=>r.regionSelect=e),id:"districtSelect",name:"city",onChange:t[3]||(t[3]=(...e)=>d.districtChange&&d.districtChange(...e))},P,544),[[n.bM,r.regionSelect]]),(0,i.wy)((0,i._)("select",{"onUpdate:modelValue":t[4]||(t[4]=e=>r.regionSelect2=e),name:"county",id:"citySelect"},C,512),[[n.bM,r.regionSelect2]])]),(0,i._)("li",null,[b,(0,i.wy)((0,i._)("input",{"onUpdate:modelValue":t[5]||(t[5]=e=>r.minPrice=e),type:"number",id:"inputPrice",placeholder:"0",name:"minPrice",min:"1000",max:"10000000",step:"1000"},null,512),[[n.nr,r.minPrice]]),w,(0,i.wy)((0,i._)("input",{"onUpdate:modelValue":t[6]||(t[6]=e=>r.maxPrice=e),type:"number",id:"inputPrice",placeholder:"0",name:"maxPrice",min:"1000",max:"10000000",step:"1000"},null,512),[[n.nr,r.maxPrice]])])])])}o(7658);var M={components:{UsedCard:UsedCard,VueSimpleRangeSlider:VueSimpleRangeSlider},data(){return{keywordValue:"",keyword:"",usedList:[],myCategory:"",regionSelect:"",regionSelect2:"",minPrice:"",maxPrice:"",searchImg:img1,dealStatus:9}},methods:{gearSelected:function(){this.myCategory=""},regionSelected:function(){this.regionSelect=""},region2Selected:function(){this.regionSelect2=""},priceSelected:function(){this.minPrice="",this.maxPrice=""},districtChange:function(){let e=document.querySelector("#districtSelect"),t=document.querySelector("#citySelect"),o=e.value,i=["서울","부산","인천","대구","광주","대전","울산","경기","강원","충북","충남","경북","경남","전북","전남","제주특별자치도"];t.options.length=1;let n=i.indexOf(o),l=district.data[n][o];for(let u in l){var a=document.createElement("option");a.value=l[u],a.innerHTML=l[u],t.appendChild(a)}},searchList:function(e){let t={keyword:this.keyword,usedCategory:this.myCategory,minPrice:this.minPrice,maxPrice:this.maxPrice,usedPlace:this.regionSelect,dealStatus:this.dealStatus};this.regionSelect2&&(t.usedPlace+=" "+this.regionSelect2);const o=this.keyword;this.keywordValue=o,console.log(t),fetch("http://localhost:8087/java/used/usedSearch",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((e=>e.json())).then((e=>{console.log(e),this.usedList=e,this.usedList.length<1?this.recruMsg="검색 결과가 없습니다":this.recruMsg=""})).catch((e=>console.log(e)))},selectMinUsedPrice(){let e=[];for(let i=0;i<this.usedList.length;i++)e.push(this.usedList[i].usedPrice);let t=Math.min.apply(null,e),o=Math.max.apply(null,e);this.minPrice=t,this.maxPrice=o,console.log("최고가"+this.maxPrice),console.log("최저가"+this.minPrice)}},created(){fetch("http://localhost:8087/java/used/usedMain").then((e=>e.json())).then((e=>{console.log(e),this.usedList=e})).catch((e=>console.log(e)))},setup(){}},k=o(89);const V=(0,k.Z)(M,[["render",x]]);var U=V}}]);
//# sourceMappingURL=864.5bfb9c2f.js.map
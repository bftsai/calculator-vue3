import{_ as h,c as n,a as i,t as r,F as m,o as b}from"./index-LaoUbc-G.js";const d={data(){return{symbol:"",store1:0,store2:0,total:0,str:0,counting:!1}},watch:{str(){this.symbol?this.total?this.store1=Number(this.str):this.store2=Number(this.str):this.store1=Number(this.str)}},methods:{reset(){this.str="",this.store1=0,this.store2=0,this.total=0,this.symbol="",this.counting=!1},switchSymbol(l){this.total===0&&this.store1===0&&this.store2===0&&l.target.textContent==="-"?this.counting?this.symbol=l.target.textContent:this.str="-0":(this.symbol=l.target.textContent,this.str="")},storeNum(l){this.str.length!==10&&(this.str+=l.target.textContent)},del(){this.str.slice(0,-1)==="-"?this.str="":this.str=this.str.slice(0,-1)},count(){if(this.str="",this.counting=!0,this.symbol==="+")this.total?this.total=this.total+=this.store1:this.total=this.store1+this.store2;else if(this.symbol==="-")this.total?this.total=this.total-=this.store1:this.total=this.store1-this.store2;else if(this.symbol==="*")this.total?this.total=this.total*=this.store1:this.total=this.store1*this.store2;else if(this.symbol==="/"){const l=RegExp("^0\\.00");this.total?this.total%this.store1?l.test((this.total/=this.store1).toFixed(2))?this.total=0:this.total=(this.total/=this.store1).toFixed(2):this.total=this.total/=this.store1:this.store1%this.store2?l.test((this.store1/this.store2).toFixed(2))?this.total=0:this.total=(this.store1/this.store2).toFixed(2):this.total=this.store1/this.store2}this.symbol="=",this.store1=0,this.store2=0,String(this.total).length>10&&(alert("數值過大無法計算!"),this.reset())}},mounted(){}},a=i("h1",{class:"text-center fw-bold fs-1"},"Calculator",-1),u={class:"calculator"},f={class:"position-relative mb-20"},c={class:"position-absolute top-15 start-20"},v={class:"text-end fs-2 fw-bold border-2 rounded-5 p-10"},y={class:"btnArea"},N={class:"d-flex justify-content-between mb-10"},C={class:"d-flex justify-content-between mb-10"},w={class:"d-flex justify-content-between mb-10"},k={class:"d-flex justify-content-between mb-10"},x={class:"d-flex justify-content-between mb-10"};function g(l,t,S,F,o,s){return b(),n(m,null,[a,i("main",null,[i("div",u,[i("div",f,[i("div",c,r(o.symbol),1),i("p",v,r(o.symbol==="="?o.total:o.str==="-0"?"-0":Number(o.str)),1)]),i("div",y,[i("div",N,[i("div",{class:"btn w-210",onClick:t[0]||(t[0]=(...e)=>s.reset&&s.reset(...e))},"Reset"),i("div",{class:"btn",onClick:t[1]||(t[1]=(...e)=>s.del&&s.del(...e))},"Del"),i("div",{class:"btn",onClick:t[2]||(t[2]=(...e)=>s.switchSymbol&&s.switchSymbol(...e))},"/")]),i("div",C,[i("div",{class:"btn",onClick:t[3]||(t[3]=(...e)=>s.storeNum&&s.storeNum(...e))},"7"),i("div",{class:"btn",onClick:t[4]||(t[4]=(...e)=>s.storeNum&&s.storeNum(...e))},"8"),i("div",{class:"btn",onClick:t[5]||(t[5]=(...e)=>s.storeNum&&s.storeNum(...e))},"9"),i("div",{class:"btn",onClick:t[6]||(t[6]=(...e)=>s.switchSymbol&&s.switchSymbol(...e))},"*")]),i("div",w,[i("div",{class:"btn",onClick:t[7]||(t[7]=(...e)=>s.storeNum&&s.storeNum(...e))},"4"),i("div",{class:"btn",onClick:t[8]||(t[8]=(...e)=>s.storeNum&&s.storeNum(...e))},"5"),i("div",{class:"btn",onClick:t[9]||(t[9]=(...e)=>s.storeNum&&s.storeNum(...e))},"6"),i("div",{class:"btn",onClick:t[10]||(t[10]=(...e)=>s.switchSymbol&&s.switchSymbol(...e))},"-")]),i("div",k,[i("div",{class:"btn",onClick:t[11]||(t[11]=(...e)=>s.storeNum&&s.storeNum(...e))},"1"),i("div",{class:"btn",onClick:t[12]||(t[12]=(...e)=>s.storeNum&&s.storeNum(...e))},"2"),i("div",{class:"btn",onClick:t[13]||(t[13]=(...e)=>s.storeNum&&s.storeNum(...e))},"3"),i("div",{class:"btn",onClick:t[14]||(t[14]=(...e)=>s.switchSymbol&&s.switchSymbol(...e))},"+")]),i("div",x,[i("div",{class:"btn w-320",onClick:t[15]||(t[15]=(...e)=>s.storeNum&&s.storeNum(...e))},"0"),i("div",{class:"btn",onClick:t[16]||(t[16]=(...e)=>s.count&&s.count(...e))},"=")])])])])],64)}const B=h(d,[["render",g]]);export{B as default};

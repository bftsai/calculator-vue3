<template>
  <h1 class="text-center fw-bold fs-1">Calculator</h1>
  <main>
    <div class="calculator">
      <div class="position-relative mb-20">
        <div class="position-absolute top-15 start-20">{{ symbol }}</div>
        <p class="text-end fs-2 fw-bold border-2 rounded-5 p-10">{{ symbol === '=' ? total : Object.is(Number(str),-0)? '-0' : Number(str) }}</p>
        <p class="text-danger fw-bold text-end" v-if="prompt">最多 10 位數！！！</p>
      </div>
      <div class="btnArea">
        <div class="d-flex flex-wrap justify-content-between">
          <div class="btn mb-10 w-210" @click="reset">Reset</div>
          <div class="btn mb-10" @click="del">Del</div>
          <div class="btn mb-10" @click="switchSymbol">/</div>
          <div class="btn mb-10" @click="storeNum">7</div>
          <div class="btn mb-10" @click="storeNum">8</div>
          <div class="btn mb-10" @click="storeNum">9</div>
          <div class="btn mb-10" @click="switchSymbol">*</div>
          <div class="btn mb-10" @click="storeNum">4</div>
          <div class="btn mb-10" @click="storeNum">5</div>
          <div class="btn mb-10" @click="storeNum">6</div>
          <div class="btn mb-10" @click="switchSymbol">-</div>
          <div class="btn mb-10" @click="storeNum">1</div>
          <div class="btn mb-10" @click="storeNum">2</div>
          <div class="btn mb-10" @click="storeNum">3</div>
          <div class="btn mb-10" @click="switchSymbol">+</div>
          <div class="btn mb-10 w-320" @click="storeNum">0</div>
          <div class="btn mb-10" @click="count">=</div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      symbol: '',
      store1: 0,
      store2: 0,
      total: 0,
      str: 0,
      counting: false,
      prompt: false,
    }
  },
  watch: {
    str(){
      const reg = new RegExp('^-?[\\d]{1,9}$');
      !this.symbol? this.store1 = Number(this.str) : this.counting? this.store1 = Number(this.str) : this.store2 = Number(this.str);
      !reg.test(Number(this.str))? this.prompt = true : this.prompt = false;
    }
  },
  methods :{
    reset(){
      this.str = '0';
      this.store1 = 0;
      this.store2 = 0;
      this.total = 0;
      this.symbol = '';
      this.counting = false;
    },
    switchSymbol(e){
      if(!this.counting && e.target.textContent === '-' && this.store1 === 0){
        this.symbol = '';
        this.str = '-0';
      }else{
        // 將判斷是拿掉，內容保留，可實現更換符號功能。
        if(!this.symbol){
          this.symbol = e.target.textContent;
          this.str = '0';
        }
      }
    },
    storeNum(e){
      const reg = new RegExp('^-?[\\d]{1,9}$');
      reg.test(Number(this.str))? this.str += e.target.textContent : '';
    },
    del(){
      this.str.slice(0,-1) === '-' ? this.str = '0' : this.str = this.str.slice(0,-1);
    },
    count(){
      const reg = RegExp('^0\\.00');

      if(this.counting){
        this.symbol === '+'? this.total += this.store1 : this.symbol === '-'? this.total -= this.store1 : this.symbol === '*'? this.total *= this.store1 : '';

        if(this.symbol === '/'){
          if(this.total % this.store1){
            reg.test((this.total /= this.store1).toFixed(2))? this.total = 0 : this.total = (this.total /= this.store1).toFixed(2);
          }else{
            this.total = this.total /= this.store1;
          }
        }
      }else{
        this.symbol === '+'? (this.total = this.store1 + this.store2) : this.store1 < 0? (this.total = this.store1 - this.store2) : this.symbol === '-'? (this.total = this.store1 - this.store2) : this.symbol === '*'? (this.total = this.store1 * this.store2) : '';
        
        if(this.symbol === '/'){
          if(this.store1 % this.store2){
            reg.test((this.store1 / this.store2).toFixed(2))? this.total = 0 : this.total = (this.store1 / this.store2).toFixed(2);
          }else{
            this.total = this.store1 / this.store2;
          }
        }
      }
      
      this.symbol = '=';
      this.store1 = 0;
      this.store2 = 0;
      this.str = '0';
      this.counting = true;
      if((String(this.total).length > 10 && this.total > 0) || (String(this.total).length > 11 && this.total < 0)){
        alert('數值過大無法計算!');
        this.reset();
      }
    }
  },
}
</script>

<style lang="css">
h1{
  animation: titleTranslate 5s linear infinite both;
  filter: drop-shadow(5px 3px 1px rgba(68, 68, 68, 0.524));
}
.calculator{
  padding: 30px;
  width: 500px;
  border: 5px solid transparent;
  /* border-radius: 10px; */
  animation: border-linear 5s linear infinite both;
}
.btn{
  width: 100px;
  height: 60px;
  border: 2px solid #000;
  border-radius: 5px;
  line-height: 60px;
  text-align: center;
}
.btn:hover{
  background-color: #8b8a8a;
}
.btn:active{
  background-color: #464646;
}
.w-210{
  width: 210px;
}
.w-320{
  width: 320px;
}
@keyframes titleTranslate {
  0% {
    transform: translateX(0px);
  }
  25% {
    transform: translateX(100px);
  }
  50% {
    transform: translateX(0px);
  }
  75% {
    transform: translateX(-100px);
  }
  100% {
    transform: translateX(0px);
  }
}
@keyframes border-linear {
    0% {
        border-image: linear-gradient(to bottom right, rgb(0, 0, 0) 0%, rgb(192, 182, 182) 10%);
        border-image-slice: 1;
    }
    10% {
        border-image: linear-gradient(to bottom right, rgb(0, 0, 0) 0%, rgb(192, 182, 182) 30%);
        border-image-slice: 1;
    }
    20% {
        border-image: linear-gradient(to bottom right, rgb(0, 0, 0) 0%, rgb(192, 182, 182) 60%);
        border-image-slice: 1;
    }
    30% {
        border-image: linear-gradient(to bottom right, rgb(192, 182, 182) 0%, rgb(0, 0, 0) 60%);
        border-image-slice: 1;
    }
    40% {
        border-image: linear-gradient(to bottom right, rgb(192, 182, 182) 0%, rgb(0, 0, 0) 80%);
        border-image-slice: 1;
    }
    50% {
        border-image: linear-gradient(to bottom right, rgb(192, 182, 182) 0%, rgb(0, 0, 0) 100%);
        border-image-slice: 1;
    }
    60% {
        border-image: linear-gradient(to bottom right, rgb(192, 182, 182) 0%, rgb(0, 0, 0) 80%);
        border-image-slice: 1;
    }
    70% {
        border-image: linear-gradient(to bottom right, rgb(192, 182, 182) 0%, rgb(0, 0, 0) 60%);
        border-image-slice: 1;
    }
    80% {
        border-image: linear-gradient(to bottom right, rgb(0, 0, 0) 0%, rgb(192, 182, 182) 60%);
        border-image-slice: 1;
    } 
    90% {
        border-image: linear-gradient(to bottom right, rgb(0, 0, 0) 0%, rgb(192, 182, 182) 30%);
        border-image-slice: 1;
    }
    100% {
        border-image: linear-gradient(to bottom right, rgb(0, 0, 0) 0%, rgb(192, 182, 182) 10%);
        border-image-slice: 1
    }
}
</style>
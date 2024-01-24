<template>
  <h1 class="text-center fw-bold fs-1">Calculator</h1>
  <main>
    <div class="calculator">
      <div class="position-relative mb-20">
        <div class="position-absolute top-15 start-20">{{ symbol }}</div>
        <p class="text-end fs-2 fw-bold border-2 rounded-5 p-10">{{ symbol === '=' ? total : str==='-0'? '-0' : Number(str) }}</p>
      </div>
      <div class="btnArea">
        <div class="d-flex justify-content-between mb-10">
          <div class="btn w-210" @click="reset">Reset</div>
          <div class="btn" @click="del">Del</div>
          <div class="btn" @click="switchSymbol">/</div>
        </div>
        <div class="d-flex justify-content-between mb-10">
          <div class="btn" @click="storeNum">7</div>
          <div class="btn" @click="storeNum">8</div>
          <div class="btn" @click="storeNum">9</div>
          <div class="btn" @click="switchSymbol">*</div>
        </div>
        <div class="d-flex justify-content-between mb-10">
          <div class="btn" @click="storeNum">4</div>
          <div class="btn" @click="storeNum">5</div>
          <div class="btn" @click="storeNum">6</div>
          <div class="btn" @click="switchSymbol">-</div>
        </div>
        <div class="d-flex justify-content-between mb-10">
          <div class="btn" @click="storeNum">1</div>
          <div class="btn" @click="storeNum">2</div>
          <div class="btn" @click="storeNum">3</div>
          <div class="btn" @click="switchSymbol">+</div>
        </div>
        <div class="d-flex justify-content-between mb-10">
          <div class="btn w-320" @click="storeNum">0</div>
          <div class="btn" @click="count">=</div>
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
    }
  },
  watch: {
    str(){
      if(!this.symbol){
        this.store1 = Number(this.str);
      }else{
        this.total? this.store1 = Number(this.str) : this.store2 = Number(this.str);
      }
    }
  },
  methods :{
    reset(){
      this.str = '';
      this.store1 = 0;
      this.store2 = 0;
      this.total = 0;
      this.symbol = '';
      this.counting = false;
    },
    switchSymbol(e){
      if(this.total === 0 && this.store1 === 0 && this. store2 === 0 && e.target.textContent === '-'){
        this.counting? this.symbol = e.target.textContent : this.str = '-0'
      }else{
        this.symbol = e.target.textContent;
        this.str = '';
      }
    },
    storeNum(e){
      this.str.length !== 10 ? this.str += e.target.textContent : '';
    },
    del(){
      this.str.slice(0,-1) === '-' ? this.str = '' : this.str = this.str.slice(0,-1)
    },
    count(){
      this.str = '';
      this.counting = true;
      if(this.symbol === '+'){
        this.total? (this.total = this.total += this.store1) : (this.total = this.store1 + this.store2);
      }else if(this.symbol === '-'){
        this.total? (this.total = this.total -= this.store1) : (this.total = this.store1 - this.store2);
      }else if(this.symbol === '*'){
        this.total? (this.total = this.total *= this.store1) : (this.total = this.store1 * this.store2);
      }else if(this.symbol === '/'){
        const reg = RegExp('^0\\.00')
        if(this.total){
          if(this.total % this.store1){
            reg.test((this.total /= this.store1).toFixed(2))? this.total = 0 : this.total = (this.total /= this.store1).toFixed(2);
          }else{
            this.total = this.total /= this.store1;
          }
        }else{
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
      if(String(this.total).length > 10){
        alert('數值過大無法計算!')
        this.reset()
      }
    }
  },
  mounted(){
    
  }
}
</script>

<style lang="css">
h1{
  animation: titleTranslate 5s linear infinite both;
  filter: drop-shadow(5px 3px 1px rgba(68, 68, 68, 0.524))
}
.calculator{
  padding: 30px;
  width: 500px;
  border: 5px solid #000;
  border-radius: 10px;
}
.btn{
  width: 100px;
  height: 60px;
  border: 2px solid #000;
  border-radius: 5px;
  line-height: 60px;
  text-align: center;
  margin: 0;
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
</style>
<template>
  <div>
    <h1>当前求和为：{{$store.state.sum}}</h1>
    <h3>当前求和放大十倍为：{{$store.getters.bigSum}}</h3>
    <h1>我是{{$store.state.name}}， 在{{$store.state.addr}}</h1>
		<select v-model.number="n">
			<option :value="1">1</option>
			<option :value="2">2</option>
			<option :value="3">3</option>
		</select>
		<button @click="plus">+</button>
		<button @click="reduce">-</button>
		<button @click="plusOdd">当前数值为奇数时+</button>
		<button @click="plusWait">等待1s +</button>
  </div>
</template>

<script>
export default {
    name:"Count",
    data() {
      return {
        n:1,
      }
    },
    methods: {
      plus(){
        this.$store.commit('ADD', this.n)
      },
      reduce(){
        this.$store.commit('REDUCE', this.n)
      },
      plusOdd(){
        this.$store.dispatch('addOdd', this.n)
      },
      plusWait(){
        this.$store.dispatch('addWait', this.n)
      }
    }
}
</script>

<style>
  button{
    margin-left: 5px;
  }
</style>
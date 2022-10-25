<template>
  <div>
    <h1>当前求和为：{{he}}</h1>
    <h3>当前求和放大十倍为：{{bigSum}}</h3>
    <h1>我是{{name}}， 在{{addr}}</h1>
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
  import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
  export default {
    name:"Count",
    data() {
      return {
        n:1,
      }
    },
    computed:{
      // es6语法 借助mapstate生成计算属性，从state中读取数据（对象写法）
      ...mapState({he:'sum'}),

      //借助mapstate生成计算属性，从state中读取数据（数组写法）
      ...mapState(['name', 'addr']),
      ...mapGetters(['bigSum'])
    },
    methods:{
      // plus(){
      //   this.$store.commit('ADD', this.n)
      // },
      // reduce(){
      //   this.$store.commit('REDUCE', this.n)
      // },
      //借助mapMutations生成对应的方法，方法中会调用commit去联系mutations,此时要注意传参
      ...mapMutations({plus:"ADD",reduce:'REDUCE'}),

      plusOdd(){
        this.$store.dispatch('addOdd', this.n)
      },
      plusWait(){
        this.$store.dispatch('addWait', this.n)
      }
    },
    // mounted() {
    //   const x = mapState({he:'sum'})
    // },
}
</script>

<style>
  button{
    margin-left: 5px;
  }
</style>
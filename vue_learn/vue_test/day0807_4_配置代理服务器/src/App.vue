<template>
	<div>
		<button @click="getStduents">获取学生信息</button>
		<button @click="getCars">获取车辆信息</button>
	</div>
</template>

<script>
import axios from 'axios'
export default {
	name:'App',
	methods: {
		getStduents(){
			axios.get('http://localhost:8080/students').then(
				response =>{
					console.log("请求成功，", response.data)
				},
				error => {
					console.log("请求失败，", error.meseage)
				}
			)
			},
		getCars(){
			axios.get('http://localhost:8080/demo/cars').then(
				response =>{
					console.log("请求成功，", response.data)
				},
				error => {
					console.log("请求失败，", error.meseage)
				}
			)
			},
		
	},
}

</script>

<style>

</style>

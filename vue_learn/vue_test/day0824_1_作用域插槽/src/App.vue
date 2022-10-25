<template>
	<div class="container">
		<Category title='游戏'>
			<template slot-scope="games">
				<ul>
					<li v-for="(g,index) in games.games" :key="index">{{g}}</li>
				</ul>
			</template>
		</Category>
		<Category title='游戏'>
			<template slot-scope="games">
				<ol>
					<li v-for="(g,index) in games.games" :key="index">{{g}}</li>
				</ol>
			</template>
		</Category>
		<Category title='游戏'>
			<template slot-scope="games">
				<h4 v-for="(g,index) in games.games" :key="index">{{g}}</h4>
			</template>
		</Category>
	</div>
</template>

<script>
	import Category from './components/Category'

	export default {
		name: "App",
		components: {Category},
	}
</script>

<style lang="css">
	.container,.foot{
		display: flex;
		justify-content: space-around;
	}
	video{
		width: 100%;
	}
	img{
		width: 100%;
	}
</style>

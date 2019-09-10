<template>
	<div id="app">
		<Navbar />
		<router-view />
	</div>
</template>

<script>
import Navbar from '@/components/navigation/Navbar'

export default {
	name: 'App',
	components: { Navbar }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=B612:400,700&display=swap");

#app {
	font-family: "Inconsolata", Helvetica, Arial, sans-serif;
}
</style>

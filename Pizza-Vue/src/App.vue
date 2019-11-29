<template>
	<div id="app">
		<div class="center container">
			<div class="iris hide-on-small-only">
				<div class="card transparent z-depth-0">
					<h2 class="title">
						🍕 Pizza
						<span class="teal-text text-darken-1">
							<img src="@/assets/images/logo.png" height="50px" />
							<span style="margin-left: -20px ">ue</span>
						</span> 🍕
					</h2>
				</div>
			</div>

			<Navbar />

			<router-view />

			<Footer />
		</div>
	</div>
</template>

<script>
import Navbar from '@/components/navigation/Navbar'
import Footer from '@/components/navigation/Footer'

export default {
	name: 'App',
	components: { Navbar, Footer }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=B612:400,700&display=swap");

body {
	/* background: url("https://www.pizzahut.ro/assets/images/bk.jpg") repeat center
		top; */
	background: whitesmoke;
}

.iris {
	width: 100%;
	background-image: url("assets/images/header.jpg");
	background-repeat: no-repeat;
	height: 200px;
	background-size: cover;
	object-fit: cover;
}

.iris h2 {
	width: 100%;
	padding-top: 71px;
	padding-bottom: 71px;
	background: rgba(230, 230, 230, 0.9);
}

#app {
	font-family: "Inconsolata", Helvetica, Arial, sans-serif;
}
</style>

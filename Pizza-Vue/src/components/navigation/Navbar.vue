<template>
	<!--
    TODO

    i. Re-arrange the buttons to a more likeable order

	-->
	<div class="row">
		<nav class="navbar container red z-depth-2">
			<div class="nav-wrapper">
				<ul id="nav-mobile" class>
					<li class="left">
						<router-link :to="{ name: 'Index' }">Home</router-link>
					</li>
					<li class="left">
						<a href="#">Order</a>
					</li>
					<li class="right">
						<router-link :to="{ name: 'Signup' }" class="btn waves-effect waves-light">Signup</router-link>
					</li>
					<li class="right">
						<a href="#">Logut</a>
					</li>
					<li class="right">
						<router-link :to="{ name: 'Login' }" class="waves-effect waves-light">Login</router-link>
					</li>
				</ul>
			</div>
		</nav>
	</div>
</template>

<script>
export default {
	name: "Navbar",
	data() {
		return {}
	}
}
</script>

<style>
.navbar {
	width: 100%;
	padding: 0 20px 0 20px;
	margin-top: 5px;
}
</style>
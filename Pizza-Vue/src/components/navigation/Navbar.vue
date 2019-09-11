<template>
	<!--
    TODO

    i. Re-arrange the buttons to a more likeable order

	-->
	<div class="row">
		<nav class="navbar container red z-depth-2">
			<div class="nav-wrapper">
				<a href="#" data-target="mobile-demo" class="sidenav-trigger show-on-small-only">
					<i class="material-icons">menu</i>
				</a>
				<ul id="nav-mobile" class="hide-on-small-only">
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
		<ul class="sidenav" id="mobile-demo">
			<li>
				<router-link :to="{ name: 'Index' }">Home</router-link>
			</li>
			<li>
				<a href="#">Order</a>
			</li>
			<li>
				<router-link :to="{ name: 'Signup' }" class="waves-effect waves-light">Signup</router-link>
			</li>
			<li>
				<a href="#">Logut</a>
			</li>
			<li>
				<router-link :to="{ name: 'Login' }" class="waves-effect waves-light">Login</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: "Navbar",
	components: { Links },
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
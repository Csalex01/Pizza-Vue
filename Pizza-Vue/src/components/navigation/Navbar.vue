<template>
	<!--
    TODO

    i. Re-arrange the buttons to a more likeable order

	-->

	<nav class="navbar container red">
		<div class="nav-wrapper">
			<ul id="nav-mobile" class="hide-on-med-and-down">
				<li class="left">
					<a href="#">Home</a>
				</li>
				<li class="left">
					<a href="#">Order</a>
				</li>
				<li class="right">
					<a href="#" class="btn">Signup</a>
				</li>
				<li class="right">
					<a href="#">Login</a>
				</li>
			</ul>
		</div>
	</nav>
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
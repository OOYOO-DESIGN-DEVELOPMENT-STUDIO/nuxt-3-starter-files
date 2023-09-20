<template>
	<div>
		<h2>About</h2>
		<p>
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit recusandae
			adipisci ullam voluptatum rem iusto libero repudiandae sapiente sed
			temporibus! Omnis quo suscipit nisi aspernatur?
		</p>
		<p>
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit recusandae
			adipisci ullam voluptatum rem iusto libero repudiandae sapiente sed
			temporibus! Omnis quo suscipit nisi aspernatur?
		</p>

		<div>{{ data }}</div>
	</div>
</template>

<script setup>
const { data } = await useFetch('/api/currency/GBP');
</script>

<style>
h2 {
	margin-bottom: 20px;
	font-size: 36px;
}
p {
	margin: 20px 0;
}
</style>

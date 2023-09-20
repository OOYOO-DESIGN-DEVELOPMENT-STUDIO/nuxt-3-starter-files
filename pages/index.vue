<template>
	<div>
		<h2>Home</h2>
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
	</div>
	<div>{{ data }}</div>
</template>

<script setup>
const { data } = await useFetch('/api/ninja?name=Mario', {
	method: 'post',
	body: { age: 30 },
});
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

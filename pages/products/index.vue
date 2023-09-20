<template>
	<div>{{ data }}</div>
	<div>
		<div class="grid grid-cols-4 gap-5">
			<div v-for="penis in productss">
				<ProductCard :productProps="penis" />
			</div>
		</div>
	</div>
</template>

<script setup>
definePageMeta({
	layout: 'products',
});

// api/mutant call
const { data } = await useFetch('/api/mutant');

// fetch the products
const { data: productss } = await useFetch('https://fakestoreapi.com/products');

useHead({
	title: '⭐️ ⭐️ ⭐️ Nuxt Dojo | Merch',
	meta: [{ name: 'description', content: 'Nuxt 3 Merch' }],
});
</script>

<style scoped></style>

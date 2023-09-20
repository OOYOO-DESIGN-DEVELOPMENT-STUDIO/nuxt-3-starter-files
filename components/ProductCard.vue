<template>
	<div class="card text-center">
		<img :src="productProps.image" alt="product thumb" class="thumb" />
		<p class="font-bold text-gray-500 m-4 truncate">{{ productProps.title }}</p>
		<NuxtLink :to="`/products/${productProps.id}`">
			<p class="btn my-5">View Details</p>
		</NuxtLink>
	</div>
</template>

<script setup>
const { dick } = defineProps(['productProps']);
</script>

<style scoped>
.thumb {
	max-height: 120px;
	max-width: 70%;
	margin: 0 auto;
}
</style>

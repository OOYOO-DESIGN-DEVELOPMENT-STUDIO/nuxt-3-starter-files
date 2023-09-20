export default defineEventHandler(async (event) => {
	// handle query params
	const { name } = getQuery(event);

	// handle post data
	const { age } = await readBody(event);

	// api call with private key
	return {
		message: `Hello, ${name}, You are ${age} years old!`,
	};
});

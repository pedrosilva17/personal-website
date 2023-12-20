<script lang="ts">
	import type { NumberInfo } from '$lib/server/db/types';

	let info: NumberInfo;
	async function newNumber() {
		const response = await fetch('/api/number-facts', {
			method: 'GET',
			headers: {
				'content-type': 'application/json'
			}
		});

		info = await response.json();
	}
</script>

<h1>{info ? info.number : 'Roll a number'}</h1>
<p>{@html info ? info.description : 'Click the button'}</p>
<button on:click={newNumber}>New Number</button>

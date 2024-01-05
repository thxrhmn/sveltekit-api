<script>
// @ts-nocheck

	import '../app.css';
	import Header from "@components/Header.svelte";
	import Table from '@components/Table.svelte';
</script>

<Header />
<div class="mx-10">
	<div class="flex justify-end">
		<button class="bg-base-300 rounded-md p-2 mb-3">Add Post +</button>
	</div>
	<Table />
</div>

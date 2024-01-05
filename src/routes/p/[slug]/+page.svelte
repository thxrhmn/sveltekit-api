<script>
	// @ts-nocheck

	import Header from '../../../components/Header.svelte';
	import { formatDate } from '$lib/formatDate';

	let styleBorderRightTable = 'border-r-[1px]';
	let styleBorderLeftTable = 'border-l-[1px]';
	let styleBorder = 'border-[1px]';
	let colorBorderTable = 'border-gray-200';

	export let data;
</script>

<Header />
<div class="gap-3 flex flex-col justify-center items-center">
	<div class="{colorBorderTable} {styleBorder} rounded-md p-3 w-[900px]">
		<h1 class="bg-base-300 p-3 rounded-md font-semibold">DETAIL</h1>
		<div class="overflow-x-auto">
			<table class="table">
				<tbody>
					<tr>
						<th class="font-medium">Name</th>
						<td>: {data.data.data.name}</td>
					</tr>
					<tr>
						<th class="font-medium">Size</th>
						<td>: {data.data.data.size}</td>
					</tr>
					<tr>
						<th class="font-medium">Description</th>
						<td>: {data.data.data.description}</td>
					</tr>
					<tr>
						<th class="font-medium">Downloaded</th>
						<td>: {data.data.data.downloaded}</td>
					</tr>
					<tr>
						<th class="font-medium">Viewer</th>
						<td>: {data.data.data.viewer}</td>
					</tr>
					<tr>
						<th class="font-medium">Category</th>
						<td>: {data.data.data.category}</td>
					</tr>
					<tr>
						<th class="font-medium">Created At</th>
						<td>: {formatDate(data.data.data.createdAt)}</td>
					</tr>
					<tr>
						<th class="font-medium">Updated At</th>
						<td>: {formatDate(data.data.data.updatedAt)}</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
	<div class="{colorBorderTable} {styleBorder} rounded-md p-3 w-[900px]">
		<h1 class="bg-base-300 p-3 rounded-md font-semibold">COMMENTS</h1>
	</div>
</div>

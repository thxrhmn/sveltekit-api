<script>
	// @ts-nocheck

	import { onMount } from 'svelte';
	import axios from 'axios';
	import FaSolidFileDownload from 'svelte-icons-pack/fa/FaSolidFileDownload';
	import FiDelete from 'svelte-icons-pack/fi/FiDelete';
	import BsMagnetFill from 'svelte-icons-pack/bs/BsMagnetFill';
	import FaSolidEdit from "svelte-icons-pack/fa/FaSolidEdit";
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import { formatDate } from '$lib/formatDate';

	let fakeData = [];
	let styleBorderRightTable = 'border-r-[1px]';
	let styleBorderLeftTable = 'border-l-[1px]';
	let colorBorderTable = 'border-gray-200';

	const handleGetAccounts = async () => {
		const url = `http://localhost:5173/api/post/getposts`;

		const headers = {
			'Content-Type': 'application/json'
		};

		try {
			const response = await axios.get(url, { headers });

			fakeData = response.data.data;
			return response.data;
		} catch (e) {
			console.error('Error:', e);
		}
	};

	onMount(async () => {
		await handleGetAccounts();
	});
</script>

<div class="overflow-x-auto border-gray-200 border-[1px] rounded-md">
	<table class="table table-xs">
		<!-- head -->
		<thead>
			<tr>
				<th class="text-center">Category</th>
				<th>Name</th>
				<th class="text-center">Link</th>
				<th class="text-center">Size</th>
				<th class="text-center">Date</th>
				<th class="text-center">Download</th>
				<th class="text-center">View</th>
				<th class="text-center">Action</th>
			</tr>
		</thead>
		<tbody>
			{#each fakeData as item}
				<tr class="">
					<td class="text-center">
						<div class="p-2 rounded-md {styleBorderRightTable} bg-gray-200">
							{item.category}
						</div></td
					>
					<td class="cursor-pointer {styleBorderRightTable} {colorBorderTable}"><a href="p/{item.uri}">{item.name}</a></td>
					<td class="flex gap-2 justify-center">
						<a href={item.download}>
							<Icon
								src={FaSolidFileDownload}
								color="grey"
								size="15"
								className="custom-icon"
								title="Custom icon params"
							/></a
						>
						<a href={item.magnet}>
							<Icon
								src={BsMagnetFill}
								color="grey"
								size="15"
								className="custom-icon"
								title="Custom icon params"
							/></a
						></td
					>
					<td class="{styleBorderLeftTable} {styleBorderRightTable} {colorBorderTable} text-center"
						>{item.size}</td
					>
					<td class="{styleBorderRightTable} {colorBorderTable} text-center"
						>{formatDate(item.createdAt)}</td
					>
					<td class="{styleBorderRightTable} {colorBorderTable} text-center">{item.downloaded}</td>
					<td class="{styleBorderRightTable} {colorBorderTable} text-center">{item.viewer}</td>
					<td class="text-center flex gap-3">
						<button>
							<Icon
								src={FaSolidEdit}
								color="gray"
								size="20"
								className="custom-icon"
								title="Custom icon params"
							/>
						</button>
						<button>
							<Icon
								src={FiDelete}
								color="red"
								size="20"
								className="custom-icon"
								title="Custom icon params"
							/>
						</button>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<div class="flex justify-center p-3">
	<div class="join">
		<button class="join-item btn btn-sm">1</button>
		<button class="join-item btn btn-sm">2</button>
		<button class="join-item btn btn-sm btn-disabled">...</button>
		<button class="join-item btn btn-sm">99</button>
		<button class="join-item btn btn-sm">100</button>
	</div>
</div>
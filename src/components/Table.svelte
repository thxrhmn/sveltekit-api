<script>
	const fakeData = [
		{
			Category: 'Action',
			Name: 'Avengers: Endgame',
			Link: 'http://example.com/avengers-endgame',
			Size: '2.5 GB',
			Date: '2023-10-20',
			Download: 5000,
			View: 10000
		},
		{
			Category: 'Comedy',
			Name: 'The Hangover',
			Link: 'http://example.com/the-hangover',
			Size: '1.8 GB',
			Date: '2023-10-18',
			Download: 3000,
			View: 7000
		},
		{
			Category: 'Horror',
			Name: 'The Conjuring',
			Link: 'http://example.com/the-conjuring',
			Size: '1.9 GB',
			Date: '2023-10-15',
			Download: 2500,
			View: 6000
		},
		{
			Category: 'Drama',
			Name: 'Forrest Gump',
			Link: 'http://example.com/forrest-gump',
			Size: '2.2 GB',
			Date: '2023-10-12',
			Download: 3500,
			View: 8000
		},
		{
			Category: 'Science Fiction',
			Name: 'Interstellar',
			Link: 'http://example.com/interstellar',
			Size: '2.7 GB',
			Date: '2023-10-10',
			Download: 4000,
			View: 9000
		},
		{
			Category: 'Romance',
			Name: 'The Notebook',
			Link: 'http://example.com/the-notebook',
			Size: '1.5 GB',
			Date: '2023-10-08',
			Download: 2000,
			View: 5000
		},
		{
			Category: 'Action',
			Name: 'John Wick',
			Link: 'http://example.com/john-wick',
			Size: '2.0 GB',
			Date: '2023-10-05',
			Download: 2800,
			View: 6500
		},
		{
			Category: 'Comedy',
			Name: 'Superbad',
			Link: 'http://example.com/superbad',
			Size: '1.6 GB',
			Date: '2023-10-02',
			Download: 1800,
			View: 4500
		},
		{
			Category: 'Horror',
			Name: 'Hereditary',
			Link: 'http://example.com/hereditary',
			Size: '1.8 GB',
			Date: '2023-09-28',
			Download: 2200,
			View: 5500
		},
		{
			Category: 'Drama',
			Name: 'The Shawshank Redemption',
			Link: 'http://example.com/shawshank-redemption',
			Size: '2.3 GB',
			Date: '2023-09-25',
			Download: 3200,
			View: 7500
		}
	];
</script>

<div class="overflow-x-auto mx-5 border-gray-200 border-[1px] rounded-md">
	<table class="table table-zebra">
		<!-- head -->
		<thead>
			<tr>
				<th>Category</th>
				<th>Name</th>
				<th>Link</th>
				<th>Size</th>
				<th>Date</th>
				<th>D</th>
				<th>View</th>
			</tr>
		</thead>
		<tbody>
			{#each fakeData as item, index}
				<tr class="hover">
					<td>{item.Category}</td>
					<td>{item.Name}</td>
					<td>{item.Link}</td>
					<td>{item.Size}</td>
					<td>{item.Date}</td>
					<td>{item.Download}</td>
					<td>{item.View}</td>
				</tr>
			{/each}
		</tbody>
	</table>
	<div class="flex justify-center p-3">
		<div class="join">
			<button class="join-item btn btn-sm">1</button>
			<button class="join-item btn btn-sm">2</button>
			<button class="join-item btn btn-sm btn-disabled">...</button>
			<button class="join-item btn btn-sm">99</button>
			<button class="join-item btn btn-sm">100</button>
		</div>
	</div>
</div>

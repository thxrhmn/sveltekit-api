// @ts-nocheck
import clientPromise from '$lib/mongo';
import { json } from '@sveltejs/kit';

export async function GET({ url }) {
	const dbConn = await clientPromise;
	const db = await dbConn.db();
	const coll = db.collection('posts');

	const page = parseInt(url.searchParams.get('page')) || 1;
	const perPage = parseInt(url.searchParams.get('perPage')) || 100;

	try {
		// Menghitung indeks awal dan akhir untuk pagination
		const startIndex = (page - 1) * perPage;
		// const endIndex = page + perPage;

		// Get all data from the collection
		const data = await coll
			.find({})
			.sort({ createdAt: -1 })
			.skip(startIndex)
			.limit(perPage)
			.toArray();

		return json({
			status: 200,
			message: 'Get data is successful',
			data
		});
	} catch (error) {
		// Handle errors and return an error response with appropriate status code and message
		console.error('Get data is failed:', error);
		return json({
			status: 500,
			error: 'Get data is failed',
			message: 'Internal server error'
		});
	}
}

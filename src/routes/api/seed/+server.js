// @ts-nocheck
import clientPromise from '$lib/mongo';
import { json } from '@sveltejs/kit';
import { fakeMovies } from '$lib/fakeDataFinal';

export async function POST() {
	// @ts-ignore
	const dbConn = await clientPromise;
	const db = await dbConn.db();
	const coll = db.collection('posts');

	try {
		const newPost = await coll.insertMany(fakeMovies);
		console.log(`${newPost.insertedCount} data berhasil ditambahkan ke koleksi 'posts'.`);
		return json({
			status: 200,
			message: `${newPost.insertedCount} data berhasil ditambahkan ke koleksi 'posts'.`
		});
	} catch (e) {
		console.log('error: ', e);
	}
}

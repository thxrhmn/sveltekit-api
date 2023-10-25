// @ts-nocheck
import clientPromise from '$lib/mongo';
import { json } from '@sveltejs/kit';
import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcrypt';

export async function POST({ request }) {
	// @ts-ignore
	const dbConn = await clientPromise;
	const db = await dbConn.db();
	const coll = db.collection('users');

	try {
		const data = await request.json();

		const salt = await bcrypt.genSalt(10);
		// Hash the password
		const hashPassword = await bcrypt.hash(data.password, salt);

		// Insert data into the database
		const newUser = await coll.insertOne({
			id: uuidv4(),
			name: data.name,
			username: data.username,
			email: data.email,
			password: hashPassword,
		});

		console.log('register is success:', newUser);

		// Return a success response with the inserted document
		return json({
			status: 200,
			message: 'register is success',
			data: newUser
		});
	} catch (error) {
		// Handle errors and return an error response with appropriate status code and message
		console.error('register is failed:', error);
		return json({
			status: 500,
			error: 'register is failed',
			message: 'Internal Server Error'
		});
	}
}

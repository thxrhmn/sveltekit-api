// @ts-nocheck
import clientPromise from '$lib/mongo';
import { json, error } from '@sveltejs/kit';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export async function POST({ request }) {
	const dbConn = await clientPromise;
	const db = await dbConn.db();
	const coll = db.collection('users');

	try {
		const data = await request.json();

		const user = await coll.findOne({ username: data.username });
		if (!user) {
            throw error(404, 'User not found')
		}

		const isPasswordValid = await bcrypt.compare(data.password, user.password);
		if (!isPasswordValid) {
			return json({
				status: 401,
				error: 'Invalid password'
			});
		}

        // generate secret key
        const secretKey = 'rahman666'

        // payload object
        const payload = {
            username: user.username,
            email: user.email,
            exp: Math.floor(Date.now() / 1000) + 60 * 60, // Token expires in 1 hour
        }

        // sign the token
        const token =  jwt.sign(payload, secretKey, { algorithm: 'HS256' });

        // verify the token
        const decodedToken = jwt.verify(token, secretKey, { algorithms: ['HS256'] });
        console.log("hasil decode tooken", decodedToken);

		// Password is valid!
        return json({
            status: 200,
            message: 'Login successfully',
            data: user,
            token: token
        })
	} catch (error) {
		console.error('login is failed:', error);
		return json({
			status: 500,
			error: 'login is failed',
			message: 'Internal Server Error'
		});
	}
}

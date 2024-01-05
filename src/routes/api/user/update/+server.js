// @ts-nocheck
import clientPromise from '$lib/mongo';
import { json } from '@sveltejs/kit';

export async function PATCH({request}) {
    
	const dbConn = await clientPromise;
	const db = await dbConn.db();
	const coll = db.collection('users');
    
	try {
        const data = await request.json();
        // Get the user with the specified ID
		const user = await coll.findOne({ id: data.id });

		if (!user) {
			return json({
				status: 404,
				error: 'User is not found'
			});
		}
		 // Create a document to update the user
         const updateDoc = {};

         // If the name is provided, update it
         if (data.name !== undefined && data.name !== '') {
           updateDoc.name = data.name;
         }
     
         // If the username is provided, update it
         if (data.username !== undefined && data.username !== '') {
           updateDoc.username = data.username;
         }

         // If the email is provided, update it
         if (data.email !== undefined && data.email !== '') {
           updateDoc.email = data.email;
         }

         updateDoc.updatedAt = new Date();
     
         // Update the user with the specified ID
         const result = await coll.updateOne({ id: data.id }, { $set: updateDoc });

		if (result.modifiedCount === 1) {
			return json({
				status: 200,
				message: 'User is updated successfully'
			});
		} else {
			return json({
				status: 404,
				error: 'User is not found'
			});
		}
	} catch (error) {
		// Handle errors and return an error response with appropriate status code and message
		console.error('Update user is failed:', error);
		return json({
			status: 500,
			error: 'Update user is failed',
			message: 'Internal server error'
		});
	}
}
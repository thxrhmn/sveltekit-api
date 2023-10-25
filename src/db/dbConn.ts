import { Collection, MongoClient } from "mongodb";
import { SECRET_DB_URI } from '$env/static/private';


export const dbConn = async (): Promise<Collection> => {
	const client = new MongoClient(SECRET_DB_URI);
	await client.connect();
	const dbName = 'sveltekit-mongodb';
	const db = client.db(dbName);
	const collection = db.collection('users');
	return collection
}
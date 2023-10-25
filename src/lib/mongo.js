import { MongoClient } from "mongodb";
import { SECRET_DB_URI } from '$env/static/private';

const uri = SECRET_DB_URI;

let client;
let clientPromise;

client = new MongoClient(uri);
clientPromise = client.connect();

export default clientPromise
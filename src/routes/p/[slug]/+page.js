import axios from 'axios';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	const id = params.slug;
	const post = await axios.get('http://localhost:5173/api/post/getid/?id=' + id);

	if (post) {
		return post;
	}

	throw error(404, 'Not found');
}

export const GET = () => {
	const profile = {
		name: 'Jhon',
		age: 20,
		address: 'Istana presiden',
		city: 'Jakarta',
        avatar: 'http://localhost/images/ava.jpg',
	};

	return new Response(JSON.stringify(profile));
};

// @ts-nocheck
import {json} from "@sveltejs/kit"

export const GET = () => {
	// const post = {
	//     data: {
	//         id: 4625367423498,
	//         title: "Hello World",
	//         description: "Hello World",
	//         isArchived: false,
	//         createdAt: "2023-10-10-19:22",
	//         updatedAt: "2023-10-12-19:22",
	//         postedById: 4625367423498,
	//     }
	// }
    // console.log(json(post))
	// const torrentPost = {
	// 	data: {
	// 		id: 4625367423498,
	// 		title: 'Hello World',
	// 		description: 'Hello World',
	// 		magnet: 'magnet:?xt.1=a74385dhfbfdvbe78ryehfjkdsfsdfd',
	// 		download: 'https://example.com/download/file4u383420u8.torrent',
	// 		isArchived: false,
	// 		images: [
	// 			{ id: 4625367423498, url: 'http://example.example/1.jpg' },
	// 			{ id: 4625367423498, url: 'http://example.example/2.jpg' },
	// 			{ id: 4625367423498, url: 'http://example.example/3.jpg' },
	// 			{ id: 4625367423498, url: 'http://example.example/4.jpg' }
	// 		],
	// 		comments: [
	// 			{ id: 4625367423498, title: 'good website' },
	// 			{ id: 4625367423498, title: 'damn!' }
	// 		],
	// 		viewer: 5000,
    //         downloaded: 24683,
	// 		postedBy: 4625367423498,
	// 		createdAt: '2023-10-10-19:22',
	// 		updatedAt: '2023-10-12-19:22'
	// 	}
	// };
    
    const torrentPost = [
        {
            id: 4625367423498,
            title: 'Hello World',
            description: 'Hello World',
            magnet: 'magnet:?xt.1=a74385dhfbfdvbe78ryehfjkdsfsdfd',
            download: 'https://example.com/download/file4u383420u8.torrent',
            isArchived: false,
            images: [
                { id: 4625367423498, url: 'http://example.example/1.jpg' },
                { id: 4625367423498, url: 'http://example.example/2.jpg' },
                { id: 4625367423498, url: 'http://example.example/3.jpg' },
                { id: 4625367423498, url: 'http://example.example/4.jpg' }
            ],
            comments: [
                { id: 4625367423498, title: 'good website' },
                { id: 4625367423498, title: 'damn!' }
            ],
            viewer: 5000,
            downloaded: 24683,
            postedBy: 4625367423498,
            createdAt: '2023-10-10-19:22',
            updatedAt: '2023-10-12-19:22'
        },
        {
            id: 123456789,
            title: 'Sample Torrent 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            magnet: 'magnet:?xt.1=abcdefgh123456789',
            download: 'https://example.com/download/sample-torrent-1.torrent',
            isArchived: true,
            images: [
                { id: 123456789, url: 'http://example.example/sample-1.jpg' },
                { id: 123456789, url: 'http://example.example/sample-2.jpg' }
            ],
            comments: [
                { id: 123456789, title: 'Nice torrent' }
            ],
            viewer: 2000,
            downloaded: 12345,
            postedBy: 987654321,
            createdAt: '2023-10-11-15:30',
            updatedAt: '2023-10-13-10:45'
        },
        {
            id: 987654321,
            title: 'Sample Torrent 2',
            description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            magnet: 'magnet:?xt.1=qwertyuiop123456',
            download: 'https://example.com/download/sample-torrent-2.torrent',
            isArchived: false,
            images: [
                { id: 987654321, url: 'http://example.example/sample-3.jpg' }
            ],
            comments: [
                { id: 987654321, title: 'Awesome content' },
                { id: 987654321, title: 'Thanks for sharing!' }
            ],
            viewer: 8000,
            downloaded: 54321,
            postedBy: 111111111,
            createdAt: '2023-10-12-09:15',
            updatedAt: '2023-10-14-14:20'
        }
    ];
    
	return json(torrentPost);
};

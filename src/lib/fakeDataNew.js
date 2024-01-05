// @ts-nocheck
// export const fakeMovies = [
// 	{
// 		id: '1a2b3c4d-1234-5678-abcd-efgh56789abc',
// 		name: 'The Galactic Adventures',
// 		createdAt: '2023-10-26T09:15:30.123Z',
// 		updatedAt: '2023-10-26T09:15:30.123Z'
// 	},
// 	{
// 		id: '2e3f4g5h-5678-9012-ijkl-mnop12345678',
// 		name: 'The Secret Code',
// 		createdAt: '2023-10-26T09:20:45.678Z',
// 		updatedAt: '2023-10-26T09:20:45.678Z'
// 	}
// ]

import { fakeMovies } from "./fakeData.js";

const moviesWithURI = fakeMovies.map(movie => {
    const formattedDate = movie.createdAt
        .slice(0, 10) // Ambil bagian tanggal (YYYY-MM-DD)
        .replace(/-/g, '') // Hapus tanda "-" dari tanggal
        .concat(
            movie.createdAt
                .slice(11, 19) // Ambil bagian waktu (HH:MM:SS)
                .replace(/:/g, '') // Hapus tanda ":" dari waktu
        );
    const uri = `${movie.name.toLowerCase().replace(/\s+/g, '-')}-${formattedDate}`;
    return { ...movie, uri };
});

console.log(moviesWithURI)

// the-secret-code-20231026092045
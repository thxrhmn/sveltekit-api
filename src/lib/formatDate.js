// @ts-nochecks

// @ts-ignore
export const formatDate = (tanggalISO8601) =>{
    const tanggalObjek = new Date(tanggalISO8601);

    // Mendapatkan komponen tanggal, bulan, tahun, jam, menit, dan detik
    const tahun = tanggalObjek.getFullYear();
    const bulan = ('0' + (tanggalObjek.getMonth() + 1)).slice(-2); // Tambah 1 karena bulan dimulai dari 0
    const tanggal = ('0' + tanggalObjek.getDate()).slice(-2);
    const jam = ('0' + tanggalObjek.getHours()).slice(-2);
    const menit = ('0' + tanggalObjek.getMinutes()).slice(-2);
    const detik = ('0' + tanggalObjek.getSeconds()).slice(-2);

    // Menggabungkan komponen-komponen untuk membuat format yang diinginkan
    const formatTanggalDanWaktu =
        tahun + '-' + bulan + '-' + tanggal + ' ' + jam + ':' + menit + ':' + detik;

    return formatTanggalDanWaktu;
}
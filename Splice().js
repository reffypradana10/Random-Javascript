// Splice() Method

// The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
// -dev mozilla

// Slice(), mengubah konten array dengan menghapus atau mengganti elemen ynag sudah ada atau menambahkan elemen baru

// Systaks
// splice(index, deletecount,item)
// index (required)
// deletecount (optional)
// item (optional)

// Contoh sederhana
// const nama1 = ["rephi","yusuf","pradana","repa"]
// nama1.splice(2) //jika ditulis cuma index saja, akan menghapus dari index 2 dan seterusnya
// console.log(nama1)

// const nama2 = ["rephi","yusuf","pradana","repa"]
// nama2.splice(2,1,"alexander") //ganti index ke dua menjadi alexander
// console.log(nama2)

// const nama3 = ["rephi","yusuf","pradana","repa"]
// nama3.splice(1,0,"alexander") //dari index ke satu, tambahkan alexander ke dalam array
// console.log(nama3)

// const nama4 = ["rephi","yusuf","pradana","repa"]
// nama4.splice(1,2) //dari index ke satu, hapus dua element
// console.log(nama4)

// ada perbedaan penggunaan splice, splice juga bisa untuk menampilkan array yang dihapus
const nama5 = ["rephi", "yusuf", "pradana", "repa"];
const nama6 = ["rephi", "yusuf", "pradana", "repa"];

// pada perintah ini, splice menghapus element dari index pertama sebanyak 2 elemen, kemudian MENAMPILKAN ELEMENT-ELEMENT YANG DIHAPUS
console.log(nama5.splice(1, 2));
// Hasil SEBENARNYA dari perintah ini bisa di tampilkan kembali menggunakan console.log
console.log(nama5);

// Contoh diatas juga bisa di buat seperti ini sama seperti contoh sebelum-sebelumnya,
// menghapus element dari index 1, sebanyak 2 element. Kemudian di tampilkan menggunakan Console.log
nama6.splice(1, 2);
console.log(nama6);

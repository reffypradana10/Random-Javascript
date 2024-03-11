// Javascript Sort() Method

// The sort() method of Array instances sorts the elements of an array
// in place and returns the reference to the same array, now sorted.
// - Dev Mozilla

// Method Sort pada array mengurutkan elemen array
// dan mengembalikan referensi array yang sudah diurutkan

// Cara Dasar Mengurutkan Alfabet
const alfabet = ["z", "b", "B", "A", "c"];
// console.log(alfabet.sort());

// Mengurutkan Angka
const angka = [1, 2, 2, 35, 6, 8, 454, 12];
// Akan Diurutkan berdasarkan angka didepan
// console.log(angka.sort());
// Mengurutkan Angka menggunakan compareFunction
const bandingNmr = (a, b) => a - b;
// console.log(angka.sort(bandingNmr));

// Cara Ringkas tanpa membuat function
// console.log(angka.sort((a, b) => a - b));

// Contoh lain
const pegawai = [
  { name: "alex", id: 3 },
  { name: "roshad", id: 4 },
  { name: "hapid", id: 15 },
  { name: "sapil", id: 1 },
  { name: "Rephi", id: 9 },
  { name: "Upil", id: 213 },
];

// Pegawai akan terurut sesuai id
// console.log(pegawai.sort((a, b) => a.id - b.id));

// Pegawai akan terurut sesuai nama
// const a = pegawai.sort((a, b) => {
//   // Mengabaikan huruf besar dan huruf kecil
//   const na = a.name.toLocaleUpperCase();
//   const nb = b.name.toLocaleUpperCase();

//   // Jika na kurang dari nb berarti element pertama harus ditempatkan sebelum nama elemen kedua dalam urutan abjat
//   // contoh, jika na(alex) dan nb(roshad) maka na<nb akan mengembalikan true dan fungsi sort akan
//   // mengurutkan elemen pertama(alex) sebelum elemen kedua(roshad)
//   if (na < nb) return -1;

//   // Sebaliknya, jika na lebih besar darin nb, itu berarti nama elemen pertama harus ditempatkan setelah nama elemen
//   // kedua dalam urutan abjat
//   if (na > nb) return 1;

//   // Mengembalikan 0 jika keduanya sama
//   return 0;
// });

// Cara yang lebih ringkas untuk mengurutkan sesuai nama
const a = pegawai.sort((a, b) => a.name.localeCompare(b.name));
// console.log(a);

// Cara yang paling ringkas
pegawai.sort((a, b) => a.name.localeCompare(b.name));
console.log(pegawai);

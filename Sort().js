// Javascript Sort() Method

// The sort() method of Array instances sorts the elements of an array
// in place and returns the reference to the same array, now sorted.
// - Dev Mozilla

// Method Sort pada array mengurutkan elemen array
// dan mengembalikan referensi array yang sudah diurutkan

// Cara Dasar Mengurutkan Alfabet
const alfabet = ["z", "b", "B", "A", "c"];
console.log(alfabet.sort());

// Mengurutkan Angka
const angka = [1, 2, 2, 35, 6, 8, 454, 12];
// Akan Diurutkan berdasarkan angka didepan
console.log(angka.sort());
// Mengurutkan Angka menggunakan compareFunction
const bandingNmr = (a, b) => a - b;
console.log(angka.sort(bandingNmr));

// Cara Ringkas tanpa membuat function
console.log(angka.sort((a, b) => a - b));

// Deklarasi variabel dengan 'var', 'let', dan 'const'
var nama = "John"; // var digunakan sebelum ES6 untuk deklarasi variabel, sekarang lebih umum menggunakan 'let' atau 'const'
var pekerjaan = "Programmer";
let umur = 30; // let digunakan untuk variabel yang nilainya bisa diubah
const PI = 3.14; // const digunakan untuk nilai konstan yang tidak bisa diubah

// Tipe data: string, number, boolean, array, object
let pesan = "Halo, dunia!"; // string
let angka = 25; // number
let benar = true; // boolean
let daftarAngka = [1, 2, 3, 4, 5]; // array
let orang = { nama: "John", umur: 30 }; // object

// Manipulasi variabel
nama = "Jane"; // Mengubah nilai variabel
umur = umur + 1; // Melakukan operasi matematika pada variabel

// Concatenate (menggabungkan) string dengan variabel
let sapaan = "Halo, ";
let namaPengguna = "John";
let kalimatSapaan = sapaan + namaPengguna; // Menggabungkan dua string

// Scope variabel
function scopeContoh() {
    let variabelLokal = "Variabel lokal"; // Hanya bisa diakses di dalam fungsi ini
    console.log(variabelLokal);
}

// Undefined dan null
let tidakTerdefinisi; // variabel tanpa nilai, nilainya akan undefined
let kosong = null; // variabel dengan nilai null

// Template literals
let produk = 'Kopi';
let harga = 10;
console.log(`Harga dari ${produk} adalah $${harga}`); // menggunakan template literals untuk menggabungkan string dengan variabel

// Variabel dalam loop
for (let i = 0; i < 5; i++) {
    console.log(i); // Menggunakan variabel dalam loop untuk iterasi
}

// Variabel boolean dan logika
let benarSatu = true;
let benarDua = false;
let hasilAnd = benarSatu && benarDua; // Operator logika '&&' (AND)
let hasilOr = benarSatu || benarDua; // Operator logika '||' (OR)
let hasilNot = !benarSatu; // Operator logika '!' (NOT)

// Ini hanyalah sebagian kecil contoh penggunaan variabel dalam JavaScript. Masih banyak lagi cara dan situasi di mana variabel digunakan dalam pengembangan JavaScript.

// Contoh 

let angka1 = 10;
let angka2 = 5;
let hasil = angka1 + angka2;


let daftarHobi = ["membaca", "berenang", "menulis"];
let jumlahHobi = daftarHobi.length;

let biodata = {
  nama: "Jane Smith",
  umur: 30,
  pekerjaan: "Desainer",
};

let tanggalLahir = new Date(1990, 0, 1);
let tahunLahir = tanggalLahir.getFullYear();

let nilai = null;

let tidakDidefinisikan;

function tambah(angka1, angka2) {
  return angka1 + angka2;
}

class Manusia {
  constructor(nama, umur) {
    this.nama = nama;
    this.umur = umur;
  }

  sapa() {
    console.log(`Halo, nama saya ${this.nama}.`);
  }
}

let manusia1 = new Manusia("Andi", 35);
manusia1.sapa();



let daftarHewan = ["kucing", "anjing", "kelinci"];
let jumlahHewan = daftarHewan.length;


function tambah(angka1, angka2) {
  return angka1 + angka2;
}

class Mobil {
  constructor(merek, tahun) {
    this.merek = merek;
    this.tahun = tahun;
  }

  info() {
    console.log(`Mobil ${this.merek} tahun ${this.tahun}`);
  }
}

let mobilBaru = new Mobil("Toyota", 2021);
mobilBaru.info();

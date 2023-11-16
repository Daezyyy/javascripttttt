// Statement if
let umur = 25;
if (umur >= 18) {
    console.log("Anda memenuhi syarat untuk memilih.");
}

// Statement if else
let usia = 17;
if (usia >= 18) {
    console.log("Anda memenuhi syarat untuk memilih.");
} else {
    console.log("Anda belum memenuhi syarat untuk memilih.");
}

// Statement if else if
let umurOrang = 25;
let statusPernikahan = 'single';
if (umurOrang >= 18) {
    console.log("Anda memenuhi syarat untuk memilih.");
} else if (statusPernikahan === 'single') {
    console.log("Anda belum memenuhi syarat untuk memilih.");
} else {
    console.log("Anda belum memenuhi syarat untuk memilih, tapi pasangan Anda bisa.");
}

// Statement switch
let nilai = 'B';
switch (nilai) {
    case 'A':
        console.log("Luar biasa!");
        break;
    case 'B':
        console.log("Bagus!");
        break;
    case 'C':
        console.log("Anda lulus.");
        break;
    case 'D':
        console.log("Coba lagi.");
        break;
    case 'F':
        console.log("Gagal.");
        break;
    default:
        console.log("Nilai tidak valid.");
}

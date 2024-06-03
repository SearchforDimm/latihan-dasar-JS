function tambah(a,b) {
    return a + b;
}

function kali(a,b) {
    return a * b;
}
var a = parseInt(prompt('Masukan Nilai 1'));
var b = parseInt(prompt("masukan nilai 2"));

// ATAU
// a = Number(a);
// b = Number(b);

// var hasil = tambah(a * 2,b * 2);
var hasil = kali(tambah(a,b), tambah(a,b))
console.log(hasil);
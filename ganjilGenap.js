let angka = prompt("Masukan Angka");

if(isNaN(angka)) {
    alert("masukan angka.")
    
}
if(angka % 2 === 0) {
    alert("angka adalah bilangan genap");
} else if(angka % 2 === 1) {
    alert("Angka adalah bilangan ganjil")
} else {
    alert("yang anda masukan bukan angsa")
}
// 1. nambah isi array

// var arr = [];
// arr[0] = "Dimas";
// arr[1] = "Rifqi";
// arr[2] = "Alexandra";

// console.log(arr)

// 2. Hapus isi array
// var arr = ["Dimas", "Rifqi", "Alexandra"];
// arr[1] = undefined;
// console.log(arr)

// 3. Menampilkan isi array 
// var arr = ["Dimas", "Rifqi", "Alexandra", "Leen"];

// for( var i = 0; i < arr.length; i++) {
//     console.log('Mahasiswa ke - ' + (i+1) + ' : ' +arr[i]);
// } 





// Method pada array
// 1. join

// var arr = ["Dimas", "Rifqi", "Alexandra", "Pierre", "Sao"];
// console.log(arr.join(' - '));

// 2. push & pop
// arr.push('Dola')
// console.log(arr.join(' - '));

// arr.pop()
// console.log(arr.join(' - '));

// 3. unshift & shift 
// arr.unshift("Doddy")
// arr.shift()
// console.log(arr.join(' - '));

// 4. slice & spice 
// splice(indexAwal, mauDihapusBerapa, elementBaru bisa lebih dari 1)

// arr.splice(1, 2, "Birjon", "Konco");
// console.log(arr.join(' - '));

// slice(awal, akhir)

// var arr2 = arr.slice(1,3);
// console.log(arr.join(' - '));
// console.log(arr2.join(' - '));


//  6. foreach 
// var angka = [1,4,6,2,5,9,7,8, 3,10,29];
// var nama = ['dimas', 'rifqi', 'novascotia'];
// for(var i = 0; i < angka.length; i++) {
//     console.log(angka[i]);
// } CARA FOR


// nama.forEach(function(e, i) {
//     console.log('Mahasiswa ke - ' + (i+1) + " Adalah : " + e);
// })

//  7. Map

// var angka2 = angka.map(function(e) {
//     return e * 2;
// })

// console.log(angka2.join(" - "))

// //  8. sort 
// console.log(angka.join(" - "));
// angka.sort(function(a,b) {
//     return a-b;});
// console.log(angka.join(" - "));

// 9. filter

var angka = [1,4,6,2,5,9,7,8, 3,10,29];
var angka2 = angka.filter(function(x) {
    return x < 5;
})

console.log(angka2.join(' - '))
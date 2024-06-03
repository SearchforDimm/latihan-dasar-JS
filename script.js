let jmlAngkot = 10;
let angkotBeroprasi = 6;
let angkotKeluar = 8;

for( let noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
    if(noAngkot <= angkotBeroprasi && noAngkot !== 5) {
        console.log(`Angkot No. ${noAngkot} beroprasi dengan baik`);
    } 
    else if(noAngkot === 8 || noAngkot === 10 || noAngkot === 5) {
        console.log(`Angkot No. ${noAngkot} mengejar setoran.`)
    }
    else {
        console.log(`Angkot No. ${noAngkot} tidak beroprasi dengan baik`);
    }
}

    
// while(noAngkot <= angkotBeroprasi) {
//     console.log(`Angkot No. ${noAngkot} beroprasi dengan baik!`);

// noAngkot++;
// }

// for(noAngkot = angkotBeroprasi + 1; noAngkot <= jmlAngkot; noAngkot++) {
//     console.log(`Angkot No. ${noAngkot} sedang tidak beroprasi.`)
// }
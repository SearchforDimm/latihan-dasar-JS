//  membuat object
// object literal

var mhs = {
    nama : 'Dimas',
    nrp : '1212342',
    email : "dmzrfqi@gmail.com",
    jurusan : "RPL"
}

var mhs2 = {
    nama : 'Birjon',
    nrp : '666',
    email : "birjon@gmail.com",
    jurusan : "RPL"
}
console.log(mhs)
console.log(mhs2)

// function declaration

function buatObjectmhs(nama, nrp, email, jurusan) {
    var mhs = {};
    mhs.nama = nama;
    mhs.nrp = nrp;
    mhs.email = email,
    mhs.jurusan = jurusan;
    return mhs
}

var mhs3 = buatObjectmhs("Pierre", "2323", "pierre.com", "Teknik Entat Entot")


// Constructor

function Mahasiswa(nama, nrp, email, jurusan) {
    // var this = {}; already added by js
    this.nama = nama;
    this.nrp = nrp;
    this.email = email,
    this.jurusan = jurusan;
    // return this already added by js
}

var mhs4 = new Mahasiswa("Juan", "2212", "juan.com", "Teknik Geal Geol")

//  Constructor must use "new" when calling the function    
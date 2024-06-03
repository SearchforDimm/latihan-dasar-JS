// function tampilAngka(n) {

//     if ( n === 0) {
//         return
//     }
//     console.log(n);
//     return tampilAngka(n-1);
// }

// tampilAngka(10);

function doSum(n) {
    if ( n === 0) {
        console.log("TASK COMPLETED!");
        return
    }

    console.log("I'm doing sumthing");
    doSum( n - 1);
}

doSum(10)
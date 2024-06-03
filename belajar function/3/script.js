let s = "";

for(var i = 10; i >= 5; i--) {
    s += " *";
    console.log(i + s);
    if(i ===  5 ) {
        for(var c = 5; c <= 10; c++) {
            s += " *";
            console.log(c + s)
        }

    }
}

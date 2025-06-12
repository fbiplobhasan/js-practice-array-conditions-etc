const x = [1, 2, 4, 5, 6, 7, 8];

for (let i = 0; i < x.length; i++) {
    // if (x[i] === 5) {
    //     break;
    // }
    if (x[i] === 5) {
        continue;
    }
    console.log(x[i]);
}
const add = (a, b, callback) => {
    setTimeout(() => {
        callback(a + b);
    }, 200);
}

add(1, 4, (sum) => {
    console.log(`sum->${sum}`)
});
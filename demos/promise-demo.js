function getData() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Promise Resolved!"), 2000);
    });
}

console.log("Start");

getData().then(result => {
    console.log(result);
});

console.log("End");

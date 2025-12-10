function wait() {
    return new Promise(res => {
        setTimeout(() => res("Async/Await Completed!"), 2000);
    });
}

async function run() {
    console.log("Start");
    const msg = await wait();
    console.log(msg);
    console.log("End");
}

run();

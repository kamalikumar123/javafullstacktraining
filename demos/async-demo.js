const promise = new Promise(resolve => setTimeout(() => resolve("Done!"), 1000));
promise.then(res => console.log(res));

const fetchData = async () => {
  const data = await promise;
  console.log("Async/Await:", data);
};
fetchData();

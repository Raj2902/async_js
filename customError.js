function fetchData() {
  throw Error("Operation Time Out.");
}
fetchData().catch((err) => console.log(err.message));

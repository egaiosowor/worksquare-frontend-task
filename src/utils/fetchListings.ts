export function fetchListings() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch("/listings.json")
        .then((res) => res.json())
        .then(resolve)
        .catch(reject);
    }, 1500);
  });
}

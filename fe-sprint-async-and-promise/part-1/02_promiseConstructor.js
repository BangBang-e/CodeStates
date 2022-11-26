const sleep = (wait) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("hello");
    }, wait);
  });
};
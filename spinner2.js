let animationItems = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\n']
let delay = -100;

for (let item of animationItems) {
  delay += 200;
  setTimeout(() => {
    process.stdout.write(item);
  }, delay);
}


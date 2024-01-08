// GLOBAL - NO WINDOW !!! Because there is no browser. This is server side JS

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed

console.log(__dirname);

setInterval(() => {
  console.log("hello world");
}, 1000);

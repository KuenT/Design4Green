import gr491 from "./gr491-loader.js"

let gr491_result = await gr491();

console.log("Loaded " + gr491_result.data.length + " rows.");

console.log(gr491_result.categories);

import gr491 from "./gr491-loader.js"
import {addCard, clearCards} from "./card-loader.js"

let gr491_result = await gr491();

console.log("Loaded " + gr491_result.data.length + " rows.");

clearCards();

for (const [key, value] of Object.entries(gr491_result.categories)) {
    addCard(key, value.length);
}

console.log(gr491_result.categories);

import {clearRules, addRule} from "./rule-loader.js"

let cardHolder = document.getElementById("gr491-categories");

window.onClickedCard = (key) => {
    clearRules();

    let rules = gr491_result.categories[key];

    for (let i = 0; i < rules.length; ++i) {
        addRule(rules[i], i, gr491_result.data[rules[i]]);
    }

    document.getElementById("gr491-categories").hidden = true;
    document.getElementById("gr491-rules").hidden = false;
}

export function clearCards() {
    cardHolder.innerHTML = "";
}

export function addCard(key, title, content) {
    const card_prefab = `
    <div class="col-4" style="padding: 0.5em;">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title" style="overflow:hidden;height: 1em;">${title}</h5>
                <p class="card-text" style="height:10em;overflow:auto;">${content}</p>
                <a href="#" onclick="onClickedCard('${key}')" class="btn btn-success" id=""><span hidden>${key}</span>Voir régles</a>
            </div>
        </div>
    </div>
    `;

    cardHolder.innerHTML += card_prefab;
}
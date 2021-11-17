let ruleHolder = document.getElementById("gr491-rules");

export function clearRules() {
    ruleHolder.innerHTML = "";
}

export function addRule(key, rule) {
    let id = rule[1];
    let inconturnable = rule[17];
    let tag = rule[14];
    let recomendation = rule[6];
    let tests = rule[9];
    let precision = rule[7];
    let usecase = rule[25];

    const prefab = `
    <div class="col-12" style="padding: 0.5em;">
        <div class="card">
            <div class="card-body" style="text-align: left;">
                <div class="row">
                    <h5 class="col-6 card-title" style="overflow:hidden;height: 1em;">${id}</h5>
                    <p class="col-3 card-text" style="height:1em;overflow:hidden;">${inconturnable}</p>
                    <a href="#" class="col-3 btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    </div>
    `;

    ruleHolder.innerHTML += prefab;

    console.log(key);
    console.log(rule);
}
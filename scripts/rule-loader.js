let ruleHolder = document.getElementById("gr491-rules-holder");
let lastGroupId = 0;

export function clearRules() {
    ruleHolder.innerHTML = "";
    lastGroupId = 0;
}

function getColor(letter) {
    if (letter == "A") {
        return "#62c562";
    } else if (letter == "B") {
        return "#e8c620";
    } else if (letter == "C") {
        return "#e87818";
    }

    return "#e81818";
}

function escape(val) {
    if (val.length > 1) return val;
    return null;
}

export function addRule(key, rule) {
    let id = rule[1];
    let isStartOfSubcategory = !rule[2];
    let inconturnable = rule[17];
    let tag = rule[14];
    let recomendation = rule[5];
    let criteres = rule[6];
    let tests = rule[9];
    let precision = rule[7];
    let usecase = rule[25];

    if (isStartOfSubcategory) {
        lastGroupId += 1;

        const prefab = `
        <a data-toggle="collapse" href="#group-${lastGroupId}"
            role="button" aria-expanded="false"
            aria-controls="group-${lastGroupId}"
            class="col-12" style="padding: 0.5em;text-decoration: none;color:black;">
            <div class="card">
                <div style="text-align:left;margin:1em;">
                    <div class="row">
                        <svg class="col-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                        </svg>
                        <h5 class="col-11 fs-6 fw-normal" style="overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">
                            ${recomendation}
                        </h5>
                    </div>
                </div>
            </div>
        </a>
        `;

        ruleHolder.innerHTML += prefab;
    }
    else {
        const uncontournable = inconturnable ? `
        <div class="badge badge-danger mx-1" style="align-self: center;">INCONTOURNABLE</div>
        ` : "";

        const prefab = `
        <a class="col-12 collapse" id="group-${lastGroupId}"
            href="#rule_${key}" data-target="#rule_${key}"
            data-toggle="modal" role="button"
            style="padding: 0.5em;text-decoration: none;color:black;">
            <div class="card">
                <div style="text-align:left;margin:1em;">
                    <div class="row">
                        <div style="display: flex;">
                            ${uncontournable}
                            <div class="badge badge-${
                                (tag == "RECO") ? "primary" : tag == "CONSEIL" ? "success" : "info"
                            } mx-1" style="align-self: center;">
                                ${tag}
                            </div>
                            <h5 class="card-title mx-2" style="width:5em">${id}</h5>
                        </div>
                    </div>
                    <div class="row">
                        <h5 class="col-12 fs-6 fw-normal" style="overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">
                            ${criteres}
                        </h5>
                    </div>
                </div>
            </div>
        </a>
        `;

        const modal = `
        <!-- Modal -->
        <div class="modal fade" id="rule_${key}" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">${criteres}</h5>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-12">
                            <div style="display: flex;margin:0.5em;justify-content: center;">
                                ${uncontournable}
                                <div class="badge badge-${
                                    (tag == "RECO") ? "primary" : tag == "CONSEIL" ? "success" : "info"
                                } mx-1" style="align-self: center;">
                                    ${tag}
                                </div>
                            </div>
                            <div style="display: flex;color:black;justify-content:space-evenly;">
                                <div class="card" style="padding:0.5em;width: 7em;">
                                    <h1 style="align-self: center;color:${getColor(rule[2])};">${rule[2]}</h1>
                                    <div style="align-self: center;">Planet</div>
                                </div>
                                <div class="card" style="padding:0.5em;width: 7em;">
                                    <h1 style="align-self: center;color:${getColor(rule[3])};">${rule[3]}</h1>
                                    <div style="align-self: center;">People</div>
                                </div>
                                <div class="card" style="padding:0.5em;width: 7em;">
                                    <h1 style="align-self: center;color:${getColor(rule[4])};">${rule[4]}</h1>
                                    <div style="align-self: center;">Prosperity</div>
                                </div>
                            </div>
                            <hr/>
                            <div style="display: flex;color:black;justify-content:space-evenly;">
                                <div style="padding:0.5em;width: 7em;">
                                    <div style="text-align-last: center;">Difficulté</div>
                                    <div style="text-align-last: center;font-weight: bold;">${rule[15]}</div>
                                    </div>
                                <div style="padding:0.5em;width: 7em;">
                                    <div style="text-align-last: center;">Priorité</div>
                                    <div style="text-align-last: center;font-weight: bold;">${rule[23]}</div>
                                    </div>
                                <div style="padding:0.5em;width: 7em;">
                                    <div style="text-align-last: center;">Récurrence</div>
                                    <div style="text-align-last: center;font-weight: bold;">${rule[24]}</div>
                                    </div>
                            </div>
                            <div>
                                <h5 class"my-1">Tests</h5>
                                ${escape(rule[9]) ?? "N\\A"}
                                <h5 style="margin-top: 1em;">Précisions</h5>
                                ${escape(rule[7]) ?? "N\\A"}
                                <h5 style="margin-top: 1em;">Use Case</h5>
                                ${escape(usecase) ?? "N\\A"}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary">Ajouter</button>
                </div>
                </div>
            </div>
        </div>
        `;

        ruleHolder.innerHTML += prefab;
        ruleHolder.innerHTML += modal;
    }
}
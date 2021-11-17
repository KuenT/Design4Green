let cardHolder = document.getElementById("gr491-categories");
let cardCount = 0;

export function clearCards() {
    cardHolder.innerHTML = "";
    cardCount = 0;
}

export function addCard(key, title, content) {
    const card_prefab = `
    <div class="col-4" style="padding: 0.5em;">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title" style="overflow:hidden;height: 1em;">${title}</h5>
                <p class="card-text" style="height:10em;overflow:auto;">${content}</p>
                <a href="#" class="btn btn-primary" id=""><span hidden>${key}</span>Go somewhere</a>
            </div>
        </div>
    </div>
    `;

    cardHolder.innerHTML += card_prefab;
}
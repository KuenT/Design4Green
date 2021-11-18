import gr491 from "./gr491-loader.js"
import {addCard, clearCards} from "./card-loader.js"
import {clearCart, populateWithRequired, addItem, removeItem, cartContains} from "./cart.js"

window.gr491_result = await gr491();

const description = {
    "STRATEGIE": "L'étape de stratégie projet permet de déterminer la pertinence et les enjeux du projet.",
    "SPECIFICATIONS": "Les spécifications regroupent les éléments de cadrage projet, les moyens mis en oeuvre, les objectifs et contraintes du projet sur toute la durée de vie du produit cible. Indépendamment du type de gestion projet : AGILE ou cycle en V class...",
    "UX/UI": "Les étapes et méthodes de conception des services numériques pour définir les meilleures solutions d'interactions avec l'utilisateur.",
    "CONTENUS": "Tous les éléments d'un service numérique disponibles pour l'utilisateur final.",
    "ARCHITECTURE": "Elle définit l’ensemble des typologies de composants de services techniques communs qui s’interposent entre les composants applicatifs et les composants matériels pour gérer ces ressources physiques : composants de gestion des ressources...",
    "FRONTEND": "Ensemble des composants en opération sur un terminal pour permettre l'utilisation d'un service numérique.",
    "BACKEND": "Le backend représente la traduction informatique des processus métiers, les moyens techniques et données mis en oeuvre pour leur utilisation, ainsi que toutes les interactions externes mises en oeuvre pour leur réalisation.",
    "HEBERGEMENT": "Moyens mis en oeuvre pour permettre l'utilisation d'un service numérique par des utilisateurs distants.",
}

window.data = gr491_result.data;
window.clearCart = clearCart;

clearCards();
clearCart();

populateWithRequired(gr491_result.data);

window.addToCart = addItem;
window.removeFromCart = removeItem;
window.cartContains = cartContains;

for (const [key, value] of Object.entries(gr491_result.categories)) {
    addCard(key, key + " (" + value.length + ")", description[key]);
}

window.goBackToHomepage = () => {
    document.getElementById("gr491-categories").hidden = false;
    document.getElementById("gr491-rules").hidden = true;
}
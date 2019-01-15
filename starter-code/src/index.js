"use strict";

var war = new War();

var splashScreen;
var gameScreen;
var endScreen;

var names = [
    "Olaf",
    "Juan",
    "Maria",
    "Odin",
    "Ragnar Lothvrok",
    "Vicky el Vikingo",
    "Bjorn",
    "Agatha",
    "Lagertha",
    "Rollo"
];

names.forEach(function(name) {
    var health = Math.ceil(Math.random() * 50 + 50);
    var strength = Math.ceil(Math.random() * 5 + 5);

    var viking = new Viking(name, health, strength)
    var saxon = new Saxon(health, strength);

    war.addViking(viking);
    war.addSaxon(saxon);
});

// Event handlers

function startGameClick() {
    destroySplashScreen();
    buildGameScreen();
}

function vikingAttackClicked() {
    var message = war.vikingAttack();
    console.log(message);
}
function saxonAttackClicked() {
    var message = war.saxonAttack();
    console.log(message);
}

// DOM manipulations

function buildDom(html) {
    var target = document.querySelector(".container");
    target.innerHTML = html;

    return target;
}

function destroyDom(target) {
    target.innerHTML = "";
}

function buildSplashScreen() {
    splashScreen = buildDom(`
        <h1>Vikings vs Saxons</h1>
        <a href="#" class="button">Start battle</a>
    `);

    splashScreen
        .querySelector(".button")
        .addEventListener("click", startGameClick);
}

function destroySplashScreen() {
    destroyDom(splashScreen);
}

function buildGameScreen() {
    gameScreen = buildDom(`
        <div id="viking-army" class="army">
            <h2>Vikings</h2>
            <ul>
                <li class="soldier">
                    <img src="images/viking.png" title="Olaf. Health: 50. Strength: 4." width="100">
                </li>
                <li class="soldier">
                    <img src="images/viking.png" title="Olaf. Health: 50. Strength: 4." width="100">
                </li>
            </ul>
        </div>
        <div id="saxon-army" class="army">
            <h2>Saxons</h2>
            <ul>
                <li class="soldier">
                    <img src="images/saxon.png" title="Health: 50. Strength: 4." width="100">
                </li>
                <li class="soldier soldier--dead">
                    <img src="images/saxon.png" title="Health: 50. Strength: 4." width="100">
                </li>
            </ul>
        </div>
        <div class="status-message">
            A Saxon has received 7 points of damage
        </div>
        <div class="attacks">
            <button id="viking-attack" class="button">Viking Attack</button>
            <button id="saxon-attack" class="button">Saxon Attack</button>
        </div>  
    `);

    var vikingAttackButton = gameScreen.querySelector("#viking-attack");
    var saxonAttackButton = gameScreen.querySelector("#saxon-attack");

    vikingAttackButton.addEventListener("click", vikingAttackClicked);
    saxonAttackButton.addEventListener("click", saxonAttackClicked);
}

function destroyGameScreen() {
    destroyDom(gameScreen);
}

function loadGame() {
    console.log("Let the war games beggin!");
    buildSplashScreen();
}

window.addEventListener("load", loadGame);

let clickCount = 0; 
let clickValue = 1; 
let upgradeCost = 10; 

const clickButton = document.getElementById('clickButton');
const clickCountDisplay = document.getElementById('clickCount');
const clickValueDisplay = document.getElementById('clickValue');
const upgradeButton = document.getElementById('upgradeButton');


clickButton.addEventListener('click', function() {
    clickCount += clickValue;
    clickCountDisplay.textContent = clickCount;
});


upgradeButton.addEventListener('click', function() {
    if (clickCount >= upgradeCost) {
        clickCount -= upgradeCost; 
        clickValue += 1; 
        upgradeCost *= 2; 
        clickCountDisplay.textContent = clickCount;
        clickValueDisplay.textContent = clickValue;
    } else {
        alert('Você não tem cliques suficientes para realizar o upgrade!');
    }
});

const term = document.querySelector('.term');
const definition = document.querySelector('.definition');
const checkButton = document.querySelector('.check');
const nextButton = document.querySelector('.next');

words = {
    "Primitive Data Type": "In JavaScript, a primitive (primitive value, primitive data type) is data that is not an object and has no methods. There are 7 primitive data types: string, number, bigint, boolean, undefined, symbol, and null.",
    "Array": "The JavaScript Array class is a global object that is used in the construction of arrays; which are high-level, list-like objects.",
    "== vs ===": "A simple explanation would be that == does just value checking (no type checking ), whereas, === does both value checking and type checking.",
}

data = Object.entries(words);

function getRandomTerm(){
    randomTerm = data[Math.floor(Math.random() * data.length)];
    term.innerHTML = `<h3>${randomTerm[0]}</h3>`;
    definition.innerHTML = `<h3>${randomTerm[1]}</h3>`;
};

checkButton.addEventListener('click', function (){
    definition.style.display = 'block';
});

nextButton.addEventListener('click', function (){
    getRandomTerm();
});

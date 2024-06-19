const inputElement = document.querySelector("#name-input");
const inputTypeHandler = (event) => {
    const outputElement = document.querySelector("#name-output");
    const inputString = event.currentTarget.value.trim();
    outputElement.textContent = inputString.length === 0 ? "Anonymous" : inputString;
};
inputElement.addEventListener("input", inputTypeHandler);
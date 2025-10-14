function checkType() {
    const inputValue = JSON.parse(document.getElementById('userInput').value);
    console.log(JSON.parse(document.getElementById('userInput').value))
    const type = typeof inputValue;
    console.log(type)
    alert(`Тип введенного значения: ${type}`);
}
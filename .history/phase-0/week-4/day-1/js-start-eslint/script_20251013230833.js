function checkType() {
    const inputValue = document.getElementById('userInput').value;
    console.log(document.getElementById('userInput').value)
    const type = typeof inputValue;
    console.log(type)
    alert(`Тип введенного значения: ${type}`);
}
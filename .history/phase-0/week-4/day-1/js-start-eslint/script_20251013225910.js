function checkType() {
    const inputValue = document.getElementById('userInput').JSON.parse(value);
    const type = typeof inputValue;
    alert(`Тип введенного значения: ${type}`);
}
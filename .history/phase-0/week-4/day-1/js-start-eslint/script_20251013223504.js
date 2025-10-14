function checkType() {
    const inputValue = document.getElementById('userInput').value;
    const type = typeof inputValue;
    alert(`Тип введенного значения: ${type}`);
}
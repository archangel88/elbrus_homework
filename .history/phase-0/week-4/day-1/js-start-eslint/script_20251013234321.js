function checkType() {
    const inputValue = document.getElementById('userInput').value.replace(/['"]/g, '');
    console.log(inputValue)
    const type = typeof inputValue;
    console.log(type)
    alert(`Тип введенного значения: ${type}`);
}

function safeJsonParse(input) {
    try {
        return JSON.parse(input);
    }
    catch (error) {
        return input; // Возвращаем исходную строку, если произошла ошибка
    }
}
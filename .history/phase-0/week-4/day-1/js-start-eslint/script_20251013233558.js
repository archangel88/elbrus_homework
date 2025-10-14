function checkType() {
    const inputValue = document.getElementById('userInput').value.str.replace(/"'/g, '');
    // console.log(JSON.parse(document.getElementById('userInput').value))
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
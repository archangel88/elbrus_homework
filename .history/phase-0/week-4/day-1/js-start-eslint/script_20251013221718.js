function checkType() {
    // Получаем значение из input
    const inputValue = document.getElementById('userInput').value;

    // Определяем тип значения
    const type = typeof inputValue;

    // Показываем алерт с типом данных
    alert(`Тип введенного значения: ${type}`);
}
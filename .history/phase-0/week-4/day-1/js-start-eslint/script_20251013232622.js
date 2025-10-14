function safeJsonParse(input) {
    try {
        return JSON.parse(input);
    } catch (e) {
        return input; // Возвращаем исходную строку, если произошла ошибка
    }
}
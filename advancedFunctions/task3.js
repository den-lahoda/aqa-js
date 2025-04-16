function divide(numerator, denominator) {
    if (typeof numerator !== 'number' || typeof denominator !== 'number') {
        throw new Error("Обидва аргументи мають бути числами");
    }

    if (denominator === 0) {
        throw new Error("Ділення на нуль неможливе");
    }

    let result = numerator / denominator;
    console.log(result);
}

try {
    divide(10, 5);
} catch (error) {
    console.error(`Помилка: ${error.message}`);
} finally {
    console.log("Робота завершена\n");
}

try {
    divide(8, 0);
} catch (error) {
    console.error(`Помилка: ${error.message}`);
} finally {
    console.log("Робота завершена\n");
}

try {
    divide("test", 5);
} catch (error) {
    console.error(`Помилка: ${error.message}`);
} finally {
    console.log("Робота завершена\n");
}

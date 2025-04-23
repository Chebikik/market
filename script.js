    // Перевірка підключеного файлу скриптів
    console.log('Перевірка підключеного файлу скриптів market.js');

    // Отримання елементу з ідентифікатором items
    let itemsDiv = document.getElementById("items");

    // Перевірка існування знайденого блоку
    if (itemsDiv) {
        // Вивід знайденого елементу
        console.log(itemsDiv);

       // itemsDiv.innerHTML += '<div class = "item"></div>';
       // itemsDiv.innerHTML += '<div class = "item"></div>';
       // itemsDiv.innerHTML += '<div class = "item"></div>';
       // itemsDiv.innerHTML += '<div class = "item"></div>';

        for (let i = 0; i < 100; i++) {
            itemsDiv.innerHTML += '<div class="item"></div>';
        }

    } else {
        // Вивід повідомлення про не знайдений блок
        console.log('Блок товарів не знайдено');
    }
    
    //Визначення масиву товарів
    let itemsArray = [
        'Газонокосарка 43',
        'Електричний тример 110',
        'Електрична газонокосарка 32',
        'Акумуляторний обприскувач 12 N',
    ];

    //Виведення в консоль масиву
    console.log(itemsArray);

    //Виведення в консоль номерів та значень елементів масиву
    for (let i = 0; i < itemsArray.length; i++) {
        console.log(i + '-й елемент', itemsArray[i]);
    }
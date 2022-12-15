const grandfather = 'дедушка';
const grandmother = 'бабушка';
const hare = 'заяц';
const wolf = 'волк';
const bear = 'медведь';
const fox = 'лиса';

kolobok(grandfather);
kolobok(grandmother);
kolobok(hare);
kolobok(wolf);
kolobok(bear);
kolobok(fox);
kolobok('единорог');

function kolobok(nameCharacter) {
    switch (nameCharacter) {
        case 'дедушка':
            return console.log('Я от дедушки ушел');
        case 'бабушка':
            return console.log('Я от бабушки ушел');
        case 'заяц':
            return console.log('Я от зайца ушел');
        case 'волк':
            return console.log('Я от волка ушел');
        case 'медведь':
            return console.log('Я от медведя ушел');
        case 'лиса':
            return console.log('Меня съели');
        default:
            return console.log('Не известное животное... Сбежал от него');
    }
}


const fatherChristmas = 'Дед Мороз';
const snowMaiden = 'Снегурочка';

newYear(fatherChristmas);
newYear(snowMaiden);

function newYear(nameCharacter) {
    console.log(`${nameCharacter}! `.repeat(3).trim());
}
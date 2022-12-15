const grandfather = 'дедушка';
const grandmother = 'бабушка';
const hare = 'заяц';
const wolf = 'волк';
const bear = 'медведь';
const fox = 'лиса';

console.log(kolobok(grandfather));
console.log(kolobok(grandmother));
console.log(kolobok(hare));
console.log(kolobok(wolf));
console.log(kolobok(bear));
console.log(kolobok(fox));
console.log(kolobok('единорог'));

function kolobok(nameCharacter) {
    switch (nameCharacter) {
        case 'дедушка':
            return 'Я от дедушки ушел';
        case 'бабушка':
            return 'Я от бабушки ушел';
        case 'заяц':
            return 'Я от зайца ушел';
        case 'волк':
            return 'Я от волка ушел';
        case 'медведь':
            return 'Я от медведя ушел';
        case 'лиса':
            return 'Меня съели';
        default:
            return 'Не известное животное... Сбежал от него';
    }
}


const fatherChristmas = 'Дед Мороз';
const snowMaiden = 'Снегурочка';

newYear(fatherChristmas);
newYear(snowMaiden);

function newYear(nameCharacter) {
    console.log(`${nameCharacter}! `.repeat(3).trim());
}
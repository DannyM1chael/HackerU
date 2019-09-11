function songOfBeer(bottle) {
    bottle = prompt('Введи число бутылок в песне','5');// значение по умолчанию 5
    if (bottle == 0) {
        console.log('нет бутылок пива на стене');
        console.log('нет бутылок пива!');
        console.log('Взять нечего, пустить по кругу');
        console.log('нет бутылок пива на стене!');
    } else {
    for ( let i = bottle; i > 0; i--) {
        console.log(`${bottle} бутылок пива на стене`);
        console.log(`${bottle} бутылок пива!`);
        console.log('Возьми одну, пусти по кругу');
        console.log(`${bottle - 1} бутылок пива на стене!`);
        console.log('\n\n\n');
        } 
    }
} 


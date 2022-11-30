var elForm = document.querySelector('.js-form');
var elUzs = document.querySelector('.uzs');
var elSelect = document.querySelector('.prices-js');
var result = document.querySelector('.result');
var defResult = document.querySelector('.default-result');

elForm.addEventListener('submit', function (evt) {
    evt.preventDefault();

    var UZS = +elUzs.value;
    var pricesJs = elSelect.value;
    var UZS_TO_USD = 11225;
    var UZS_TO_EURO = 11656;
    var UZS_TO_RUB = 195.7;
    var RESULT = defResult;

    if (isNaN(UZS) == false) {
        if (pricesJs == 'USD') {
            result.textContent = `${UZS} so'm = ${UZS / UZS_TO_USD} dollar`;

            RESULT.textContent = `1 USD = ${UZS_TO_USD} dollar`
        }
        else if (pricesJs == 'EURO') {
            result.textContent = `${UZS} so'm = ${UZS / UZS_TO_EURO} yevro`;

            RESULT.textContent = `1 EURO = ${UZS_TO_EURO} yevro`
        }
        else if (pricesJs == 'RUB') {
            result.textContent = `${UZS} so'm = ${UZS / UZS_TO_RUB} rubl`;

            RESULT.textContent = `1 RUBL = ${UZS_TO_RUB} rubl`
        }

        else {
            result.textContent = 'Iltimos hamasini kiriting';
        }
    }

    else {
        result.textContent = 'Harf kiritilmadi';
    }
});
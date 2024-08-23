import { Selector, ClientFunction } from 'testcafe';

fixture`Appian Search`
    .page`https://gruponubian.appianportals.com/e268662f-e993-425a-96cc-609a0457fd6e-tarjeta-cuenta-ahorro`
    .skipJsErrors();

// const hideElement = ClientFunction(() => {
//     document.querySelector('.ColumnLayout---column').style.display = 'none';
// });

// const showElement = ClientFunction(() => {
//     document.querySelector('.ColumnLayout---column').style.display = '';
// });

const showRadioButton = ClientFunction(() => {
    if (document.querySelector('input[value="En otro lugar"]') !== null) {
        document.querySelector('input[value="En otro lugar"]').parentElement.style.display = 'block';
    }
});

test('I Click the option En otro lugar', async t => {

    // option 1
    // const inputradio = Selector('input[value="En otro lugar"]');
    // await t
    // .expect(inputradio.exists).ok({ timeout: 60 * 1000 }) // Verifica que el input radio existe
    // .click(inputradio);

    // option 2
    // const inputradio = Selector('input[value="En otro lugar"]');
    // await t
    //     .expect(inputradio.exists).ok({ timeout: 60 * 1000 });
    // await hideElement();  // Oculta el elemento obstructivo
    // await t
    //     .click(inputradio);  // Clic en el input radio
    // await showElement();  // Restablece el elemento obstructivo

    // option 3
    const inputradio = Selector('input[value="En otro lugar"]');
    await showRadioButton();  // Asegúrate de que el radio button sea visible
    await t
        .expect(inputradio.visible).ok('El radio button debe ser visible antes del clic')
        .click(inputradio);  // Clic en el input radio
});
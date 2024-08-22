import { Selector } from 'testcafe';

fixture `Appian Search`
    .page `https://gruponubian.appianportals.com/e268662f-e993-425a-96cc-609a0457fd6e-tarjeta-cuenta-ahorro`
    .skipJsErrors();

test('I Click the option En otro lugar', async t => {
    const inputradio = Selector('input[value="En otro lugar"]');
    await t.expect(inputradio.exists).ok({ timeout: 10000 });
});
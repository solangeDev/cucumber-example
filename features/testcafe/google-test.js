import { Selector } from 'testcafe';

fixture `Google Search`
    .page `https://www.google.com`;

test('Search box should be visible', async t => {
    const searchBox = Selector('textarea');
    await t.expect(searchBox.exists).ok();
});
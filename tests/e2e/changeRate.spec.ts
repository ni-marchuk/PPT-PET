import {test, expect} from '@playwright/test';

const currenciesCodes = ['THB', 'USD', 'EUR', 'RUB']

test.describe('Проверяем сценарии компонента rates', () => {
    test.beforeEach(async ({page}) => {
        await page.goto('/');
    });

    test('Отображаются только допустимые валюты', async ({page}) => {
        const badges = page.getByTestId('currency-badge');
        const texts = await badges.allTextContents();
        for (const text of texts) {
            expect(currenciesCodes).toContain(text.trim());
        }
    });

    test('При клике на валюту USD должен добавиться queryParam - ?rate=USD', async ({page}) => {
        await page
            .getByTestId('currency-badge')
            .filter({ hasText: 'USD' })
            .click();
        await expect(page).toHaveURL(url => {
            const params = new URL(url).searchParams;
            return params.get('rate') === 'USD';
        });
    });

    test('При клике появляется cookie user_rate_code', async ({ page }) => {
        await page
            .getByTestId('currency-badge')
            .filter({ hasText: 'USD' })
            .click();
        await expect.poll(async () => {
            const cookies = await page.context().cookies('http://localhost:3000');
            return cookies.find(c => c.name === 'user_rate_code')?.value;
        }).toBe('USD');
    });

    test('Все ценовые значения в карточках обновляются при смене валюты', async ({ page }) => {
        const cards = page.getByTestId('building-card-price');
        const prevTexts = await cards.allTextContents();

        await page
            .getByTestId('currency-badge')
            .filter({ hasText: 'USD' })
            .click();

        await expect.poll(async () => {
            const nextTexts = await cards.allTextContents();
            return nextTexts.every((text, i) => {
                return text !== prevTexts[i]
            });
        }, { timeout: 5000 }).toBe(true);
    });
});

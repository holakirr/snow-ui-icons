import { expect, test } from '@playwright/test';

test.describe('Button Component', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the Button story in Storybook
    await page.goto('http://localhost:53741/?path=/story/components-button--primary');
  });

  test('should render primary button correctly', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Button' });
    await expect(button).toBeVisible();

    // Check if the button has the correct styles
    const buttonClasses = await button.getAttribute('class');
    expect(buttonClasses).toContain('bg-blue-500');
  });

  test('should render different variants', async ({ page }) => {
    // Navigate to secondary variant
    await page.goto('http://localhost:53741/?path=/story/components-button--secondary');
    const secondaryButton = page.getByRole('button', { name: 'Button' });
    const secondaryClasses = await secondaryButton.getAttribute('class');
    expect(secondaryClasses).toContain('bg-gray-500');

    // Navigate to outline variant
    await page.goto('http://localhost:53741/?path=/story/components-button--outline');
    const outlineButton = page.getByRole('button', { name: 'Button' });
    const outlineClasses = await outlineButton.getAttribute('class');
    expect(outlineClasses).toContain('border-blue-500');
  });

  test('should render different sizes', async ({ page }) => {
    // Check small size
    await page.goto('http://localhost:53741/?path=/story/components-button--small');
    const smallButton = page.getByRole('button', { name: 'Small Button' });
    const smallClasses = await smallButton.getAttribute('class');
    expect(smallClasses).toContain('px-3');

    // Check large size
    await page.goto('http://localhost:53741/?path=/story/components-button--large');
    const largeButton = page.getByRole('button', { name: 'Large Button' });
    const largeClasses = await largeButton.getAttribute('class');
    expect(largeClasses).toContain('px-6');
  });
});

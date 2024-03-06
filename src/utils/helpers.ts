import { IWorld } from '@cucumber/cucumber';

// Format datetime to YYYYMMDD-hhmmss
const now = new Date();
const year = now.getUTCFullYear();
const month = padZero(now.getUTCMonth()+1);
const date = padZero(now.getUTCDate());
const hours = padZero(now.getUTCHours());
const minutes = padZero(now.getUTCMinutes());
const seconds = padZero(now.getUTCSeconds());

const dateTime = `${year}${month}${date}-${hours}${minutes}${seconds}`;

function padZero(num: number) {
  return num.toString().padStart(2, '0');
}

export async function takeScreenshot(world: IWorld) {
    // Wait for the page to load completely
    await world.page.waitForLoadState('load');
    await world.page.waitForTimeout(1000); // Add a delay of 1 second to ensure the page is fully loaded.
    
    // Take a screenshot
    const screenshot = await world.page.screenshot({ fullPage: true, path: `reports/screenshots/${dateTime}.png` });
    world.attach(screenshot, 'image/png');
}

import { Injectable } from '@nestjs/common';
import * as puppeteer from 'puppeteer';
import * as cheerio from 'cheerio';

@Injectable()
export class LinkendService {
  async search(url: string) {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.setCookie({
      name: 'li_at',
      value: process.env.COOKIE,
      domain: '.www.linkedin.com',
    });
    await page.goto('https://www.linkedin.com/in/techleadhd/');
    //
    // await page.click('.join-form__form-body-subtext > .form-toggle');
    // await page.type('#login-email', 'rforlyffe2@gmail.com');
    // await page.type('#login-password', 'Loseyourself01');
    // await page.click('.login-form__submit-button');
  }
}

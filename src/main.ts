import * as core from '@actions/core'
import * as github from '@actions/github'
import * as exec from '@actions/exec'

import { Telegram } from 'telegraf'

import fs, { rmdirSync } from 'fs'
import os from 'os'
import path from 'path'

import axios from 'axios'
import * as cheerio from 'cheerio'
import moment from 'moment'

// import 'moment/locale/ru'

async function main() {
  try {

    const m1 = moment('2022-05-25').locale('en')
    console.log(m1.format('LL'));

    const m2 = moment('2022-05-25').locale('ru')
    console.log(m2.format('LL'));

    // await testPlaylist();
    // await testPlaylists();

    // const token = process.env.TELEGRAM_TOKEN ?? '';
    // const chatId = process.env.TELEGRAM_CHAT_ID ?? '';

    // var telegram = new Telegram(token);

    // core.info("This is information message.");
    // core.warning("This is warning message.");
    // core.error("This is error message.");
    // core.debug("This is debug message");

    // core.notice("This is notice message",  {
    //   title: 'Title',
    // });

    // await print('process.env', process.env);
    // await print('github.context', github.context);



  } catch (error: any) {
    core.setFailed(error.message)
  }
}

async function testPlaylist() {
  const url = 'https://www.youtube.com/playlist?list=PLbxr_aGL4q3SpQ9GRn2jv-NEpvN23CUC5';
  const response = await axios.get(url);

  write('playlist/response.html', response.data);

  const $ = cheerio.load(response.data);
  const scripts = $('script').toArray();

  for (let index = 0; index < scripts.length; index++) {
    const script = scripts[index];

    const html = $(script).html();
    if (html && html.startsWith('var ytInitialData')) {
      const start = html.indexOf('{');
      const end = html.lastIndexOf('}') + 1;
      const json = html.substring(start, end);
      const obj = JSON.parse(json);
      const json2 = JSON.stringify(obj, null, 2);

      write(`playlist/script-${index}.json`, json2);
    }
  }
}

async function testPlaylists() {
  const url = 'https://www.youtube.com/c/DotNetRu/playlists';
  const response = await axios.get(url);

  write('playlists/response.html', response.data);

  const $ = cheerio.load(response.data);
  const scripts = $('script').toArray();

  for (let index = 0; index < scripts.length; index++) {
    const script = scripts[index];

    const html = $(script).html();
    if (html && html.startsWith('var ytInitialData')) {
      const start = html.indexOf('{');
      const end = html.lastIndexOf('}') + 1;
      const json = html.substring(start, end);
      const obj = JSON.parse(json);
      const json2 = JSON.stringify(obj, null, 2);

      write(`playlists/script-${index}.json`, json2);
    }
  }
}

function write(file: string, data: string) {
  const filepath = process.env.CI
    ? path.join('data', file)
    : path.join(os.homedir(), 'Desktop', 'data', file);

  const dir = path.dirname(filepath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(filepath, data);
}

async function print(name: string, value: any) {
  await core.group(name, async () => {
    const json = JSON.stringify(value, null, 2);
    core.info(json);
  });
}

main();

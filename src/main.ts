import * as core from '@actions/core'
import * as github from '@actions/github'
import * as exec from '@actions/exec'

import { Telegram } from 'telegraf'

import fs from 'fs'

import axios from 'axios'
import * as cheerio from 'cheerio'

async function main() {
  try {

    const response1 = await axios.get('https://www.youtube.com/playlist?list=PLbxr_aGL4q3SpQ9GRn2jv-NEpvN23CUC5');
    fs.writeFileSync('data\\playlist.html', response1.data);

    const response2 = await axios.get('https://www.youtube.com/c/DotNetRu/playlists');
    fs.writeFileSync('data\\playlists.html', response2.data);

    // console.log(response.data);

    // const $ = cheerio.load(response.data);

    //

    // const token = process.env.TELEGRAM_TOKEN ?? '';
    // const chatId = process.env.TELEGRAM_CHAT_ID ?? '';

    // var telegram = new Telegram(token);

    // print('process.env', process.env);
    // print('github.context', github.context);

  } catch (error: any) {
    core.setFailed(error.message)
  }
}

function print(name: string, value: any) {
  const json = JSON.stringify(value, null, 4);
  console.log(name + ': ' + json);
  console.log();
}


main();

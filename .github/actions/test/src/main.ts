import * as core from '@actions/core'
import * as github from '@actions/github'
import * as exec from '@actions/exec'

import { Telegraf } from 'telegraf'
import * as Parser from 'rss-parser'

import * as fs from 'fs'

import * as git from './git'

const GITHUB_TOKEN = core.getInput('GITHUB_TOKEN');
const TELEGRAM_TOKEN = core.getInput('TELEGRAM_TOKEN');

async function main() {
  try {

    print('process.env', process.env);
    print('github.context', github.context);

    var data = new Date().toISOString();

    var c1 = await git.add('--all');
    console.log("git.add('--all'): " + c1);

    if (!fs.existsSync('data')) {
      fs.mkdirSync('data');
    }

    if (!fs.existsSync('data2')) {
      fs.mkdirSync('data2');
    }

    fs.writeFileSync('data2/test.txt', data);

    var c2 = await git.add('data/*');
    console.log("git.add('data/*'): " + c2);

    fs.writeFileSync('data/test.txt', data);

    var c3 = await git.add('data/*');
    console.log("git.add('data/*'): " + c3);

    await git.commit("Message: " + data);
    await git.push();

  } catch (error: any) {
    core.setFailed(error.message)
  }
}

function print(name: string, value: any) {
  const json = JSON.stringify(value, null, 4);
  console.log(name + ': ' + json);
  console.log();
}

// function getImage(content: any[]): string | undefined {
//   for (const item of content) {
//     const $ = item['$'];
//     const url: string = $['url'];
//     const medium: string = $['medium'];
//     if (medium == 'image') {
//       return url;
//     }
//   }
// }

main();

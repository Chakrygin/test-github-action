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

    if (!fs.existsSync('data')) {
      fs.mkdirSync('data');
    }

    var data = new Date().toISOString();
    fs.writeFileSync('data/test.txt', data);

    await git.add();

    var changed = await git.diff();
    if (changed) {
      await git.config('GitHub Actions', 'actions@github.com');
      await git.commit("Message: " + data);
      await git.push();
    }

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

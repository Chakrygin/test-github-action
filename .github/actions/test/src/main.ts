import * as core from '@actions/core'
import * as github from '@actions/github'

import { Telegraf } from 'telegraf'
import * as Parser from 'rss-parser'

const GITHUB_TOKEN = core.getInput('GITHUB_TOKEN');
const TELEGRAM_TOKEN = core.getInput('TELEGRAM_TOKEN');

async function main() {
  try {

    // const telegraf = new Telegraf(TELEGRAM_TOKEN);

    // const rss = new Parser({
    //   customFields: {
    //     item: [
    //       ['media:content', 'media:content', { keepArray: true }],
    //     ]
    //   }
    // });

    // const feed = await rss.parseURL('https://andrewlock.net/rss.xml')

    // for (const item of feed.items) {
    //   const creator = item.creator;
    //   const title = item.title;
    //   const link = item.link;
    //   const content = item.content;
    //   const image = getImage(item['media:content'])

    //   const data = { creator, title, link, content, image };

    //   const json = JSON.stringify(data, null, 4); // Indented 4 spaces
    //   console.log(json);
    //   console.log();



    //   const chatId = -1001767919878;

    //   // await telegraf.telegram.sendMessage(chatId, message.join('\n\n'), {
    //   //   parse_mode: 'Markdown',
    //   // });

    //   if (image == undefined)
    //     continue;

    //   var message = [];
    //   message.push(`<b>${creator}</b>`);
    //   message.push(`<b><a href="${link}">${title}</a></b>`);
    //   message.push(content);

    //   await telegraf.telegram.sendPhoto(chatId, image, {
    //     caption: message.join('\n'),
    //     parse_mode: 'HTML',
    //   });

    //   const sleep = (waitTimeInMs: any) => new Promise(resolve => setTimeout(resolve, waitTimeInMs));

    //   await sleep(1000);
    // }





    // const octokit = github.getOctokit(GITHUB_TOKEN);

    // const repo = await octokit.repos.get({
    //   owner: 'ThreeMammals',
    //   repo: 'Ocelot'
    // });

    // const json = JSON.stringify(repo, null, 4); // Indented 4 spaces

    // console.log(json);


    const octokit = github.getOctokit(GITHUB_TOKEN);

    const json = JSON.stringify(github.context, null, 4);
    console.log(json);
    console.log();

    var commit = await octokit.repos.getCommit({
      owner: github.context.repo.owner,
      repo: github.context.repo.repo,
      ref: github.context.ref,
    })

    const json2 = JSON.stringify(commit, null, 4);
    console.log(json2);
    console.log();

  } catch (error: any) {
    core.setFailed(error.message)
  }
}

function getImage(content: any[]): string | undefined {
  for (const item of content) {
    const $ = item['$'];
    const url: string = $['url'];
    const medium: string = $['medium'];
    if (medium == 'image') {
      return url;
    }
  }
}

main();

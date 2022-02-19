import * as core from '@actions/core'
import * as github from '@actions/github'

import { Telegraf } from 'telegraf'
import * as Parser from 'rss-parser'

const GITHUB_TOKEN = core.getInput('GITHUB_TOKEN');
const TELEGRAM_TOKEN = core.getInput('TELEGRAM_TOKEN');

async function main() {
  try {

    const telegraf = new Telegraf(TELEGRAM_TOKEN);

    const rss = new Parser({
      customFields: {
        item: [
          ['media:content', 'media:content', { keepArray: true }],
        ]
      }
    });

    const feed = await rss.parseURL('https://andrewlock.net/rss.xml')

    for (const item of feed.items) {
      const creator = item.creator;
      const title = item.title;
      const link = item.link;
      const content = item.content;
      const image = getImage(item['media:content'])

      const data = { creator, title, link, content, image };

      const json = JSON.stringify(data, null, 4); // Indented 4 spaces
      console.log(json);
      console.log();
    }

    // await telegraf.telegram.sendMessage(-1001767919878, 'Hello, World!', {

    // })




    // const octokit = github.getOctokit(GITHUB_TOKEN);

    // const repo = await octokit.repos.get({
    //   owner: 'ThreeMammals',
    //   repo: 'Ocelot'
    // });

    // const json = JSON.stringify(repo, null, 4); // Indented 4 spaces

    // console.log(json);

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

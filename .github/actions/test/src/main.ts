import * as core from '@actions/core'
import * as github from '@actions/github'
import * as exec from '@actions/exec'

import { Telegraf } from 'telegraf'
import * as Parser from 'rss-parser'

import * as fs from 'fs'

const GITHUB_TOKEN = core.getInput('GITHUB_TOKEN');
const TELEGRAM_TOKEN = core.getInput('TELEGRAM_TOKEN');

async function main() {
  try {

    print('process.env', process.env)
    print('github.context', github.context)

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

    // if (!fs.existsSync("test")) {
    //   fs.mkdirSync("test");
    // }

    // const octokit = github.getOctokit(GITHUB_TOKEN);

    // const json = JSON.stringify(github.context, null, 4);
    // console.log(json);
    // console.log();

    // fs.writeFileSync("test/context.txt", json)

    // var commit = await octokit.repos.getCommit({
    //   owner: github.context.repo.owner,
    //   repo: github.context.repo.repo,
    //   ref: github.context.ref,
    // });

    // const json2 = JSON.stringify(commit, null, 4);
    // console.log(json2);
    // console.log();

    // fs.writeFileSync("test/commit.txt", json2)

    // const options: exec.ExecOptions = {};
    // options.listeners = {
    //   stdout: (data: Buffer) => {
    //     console.log(data.toString())
    //   },
    //   stderr: (data: Buffer) => {
    //     console.log(data.toString())
    //   }
    // };

    // var owner = github.context.repo.owner;
    // var repo = github.context.repo.repo;

    // github.context

    // await exec.exec('git', ["config", "--global", "user.name", commit.data.commit.author?.name!], options);
    // await exec.exec('git', ["config", "--global", "user.email", commit.data.commit.author?.email!], options);
    // await exec.exec('git', ["add", "--all"]);
    // await exec.exec('git', ["commit", "-m", "Commit message..."], options);
    // await exec.exec('git', ["remote", "set-url", "origin", `https://x-access-token:${GITHUB_TOKEN}@github.com/${owner}/${repo}`], options);
    // await exec.exec('git', ["push"], options);

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

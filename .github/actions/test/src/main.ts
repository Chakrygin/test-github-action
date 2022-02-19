import * as core from '@actions/core'
import * as github from '@actions/github'

import { Telegraf } from 'telegraf'

const GITHUB_TOKEN = core.getInput('GITHUB_TOKEN');
const TELEGRAM_TOKEN = core.getInput('TELEGRAM_TOKEN');

async function main() {
  try {

    const telegraf = new Telegraf(TELEGRAM_TOKEN);
    await telegraf.telegram.sendMessage('@chakrygin-sandbox', 'Hello, World!', {

    })

  } catch (error: any) {
    core.setFailed(error.message)
  }
}

main();

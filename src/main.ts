import * as core from '@actions/core';

import { app } from './app';

import { func_en } from './funcs/func_en';
import { func_ru } from './funcs/func_ru';

async function main() {
  try {

    await app([func_ru, func_en]);

  }
  catch (error) {
    core.setFailed(error as Error)
  }
}

void main();

import * as core from '@actions/core';
import * as github from '@actions/github';

import os from 'os';

async function main() {
  try {

    print('github.context', github.context);

  }
  catch (error: unknown) {
    if (error instanceof Error) {
      core.setFailed(error)
    }
  }
}

function print(name: string, value: unknown) {
  const json = JSON.stringify(value, null, 2);
  core.info(name + ': ' + json + os.EOL);
}

main();

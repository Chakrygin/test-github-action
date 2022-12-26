import * as core from '@actions/core';
// import * as github from '@actions/github';

// import os from 'os';

async function main() {
  try {

    const t: any = {};

    console.log(t.foo.bar);

  }
  catch (error: unknown) {
    if (error instanceof Error) {
      core.setFailed(error)
    }
  }
}

// function print(name: string, value: unknown) {
//   const json = JSON.stringify(value, null, 2);
//   core.info(name + ': ' + json + os.EOL);
// }

main();


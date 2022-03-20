import * as core from '@actions/core'
import * as github from '@actions/github'
import * as exec from '@actions/exec'

async function main() {
  try {

    print('process.env', process.env);
    print('github.context', github.context);

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

import * as core from '@actions/core'

async function main() {
  try {

    core.info(`Hello, World!`);

  } catch (error: any) {
    core.setFailed(error.message)
  }
}

main();

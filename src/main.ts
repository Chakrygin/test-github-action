import * as core from '@actions/core';

import axios from 'axios';

async function main() {
  try {

    const d = axios.defaults;

    const response = await axios.get('https://radiodotnet.mave.digital/');
    const json = JSON.stringify(response, null, 2);

    console.log(json);
    console.log();

  }
  catch (error: any) {
    core.setFailed(error.message)
  }
}

main();

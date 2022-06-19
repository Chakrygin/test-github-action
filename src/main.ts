import * as core from '@actions/core';

import axios from 'axios';

async function main() {
  try {

    // const response = await axios.get('https://radiodotnet.mave.digital/', {
    // const response = await axios.get('https://bookclub-dotnet.mave.digital/', {
    const response = await axios.get('https://radiodotnet.mave.digital/', {
      responseType: 'text',
      transformRequest: [],
      transformResponse: [],
      maxContentLength: 1024 * 1024 * 1024,
    });

    console.log(response.data);
    console.log();

  }
  catch (error: any) {
    core.setFailed(error.message)
  }
}

main();

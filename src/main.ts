import * as core from '@actions/core';

import axios, { AxiosError } from 'axios';

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
    if (error instanceof AxiosError) {
      console.log('code', error.code);
      console.log('isAxiosError', error.isAxiosError);
      console.log('message', error.message);
      console.log('name', error.name);
      console.log('request', error.request);
      console.log('response', error.response);
      console.log('stack', error.stack);
      console.log('status', error.status);
      console.log('JSON', error.toJSON());
    }

    core.setFailed(error.message)
  }
}

main();

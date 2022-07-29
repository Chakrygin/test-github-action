import * as core from '@actions/core';

import axios, { AxiosError } from 'axios';
import axiosRetry from 'axios-retry';

axiosRetry(axios, { retries: 5, retryDelay: axiosRetry.exponentialDelay });

async function main() {
  try {

    axios.defaults.timeout = 60 * 1000;
    axios.defaults.transitional = undefined;

    // const response = await axios.get('https://radiodotnet.mave.digital/', {
    // const response = await axios.get('https://bookclub-dotnet.mave.digital/', {
    const response = await axios.get('https://dotnetcoretutorials.com/');

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

import * as core from '@actions/core';

import moment from 'moment';
import 'moment/locale/ru';

async function main() {
  try {

    moment.locale('en');

    const d1 = moment('March 20, 2023', 'LL');

    console.log(d1);
    console.log(d1.locale());

    const d2 = moment('13 февраля 2023', 'LL', 'ru');

    console.log(d2);
    console.log(d2.locale());


  }
  catch (error) {
    core.setFailed(error as Error)
  }
}

function print(name: string, value: unknown) {
  const json = JSON.stringify(value, null, 2);
  core.info(name + ': ' + json + '\n');
}

main();

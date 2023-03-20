import * as core from '@actions/core';

import moment from 'moment';
import 'moment/locale/ru';

async function main() {
  try {

    moment.locale('en');

    const s = '13 февраля 2023';

    const d = moment(s, 'LL', 'ru');

    console.log(d);
    console.log(d.locale());


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

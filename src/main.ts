import * as core from '@actions/core';
import * as github from '@actions/github';

import moment from 'moment';
import 'moment/locale/ru';

async function main() {
  try {

    moment.locale('en');

    const m1 = moment('13 февраля 2023', 'LL', 'ru');
    const m2 = moment('March 20, 2023', 'LL');
    // const m2 = moment('2023-02-13').locale('ru');

    console.log('m1', m1.format('LL'));
    console.log('m2', m2.format('LL'));

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

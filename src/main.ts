import * as core from '@actions/core';

import moment from 'moment';

import func1 from './funcs/func1';
import func2 from './funcs/func2';

async function main() {
  try {

    console.log('DEFAULT LOCALE:', moment.locale())

    moment.locale('en');

    console.log('DEFAULT LOCALE:', moment.locale())

    const m1 = func1();
    const m2 = func2();
    const m3 = func1();

    console.log('m1', m1.format('LL'));
    console.log('m2', m2.format('LL'));
    console.log('m3', m3.format('LL'));

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

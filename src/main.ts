import * as core from '@actions/core';

import moment from 'moment';
import 'moment/locale/ru';

async function main() {
  try {

    moment.locale('en');

    for await (const m of getMoments()) {
      console.log(m.format('LL'));
    }

  }
  catch (error) {
    core.setFailed(error as Error)
  }
}

async function* getMoments(): AsyncGenerator<moment.Moment> {
  console.log('locale', moment.locale());
  console.log('locales', moment.locales());

  yield moment('March 20, 2023', 'LL');
  yield moment('13 февраля 2023', 'LL', 'ru');
}

main();

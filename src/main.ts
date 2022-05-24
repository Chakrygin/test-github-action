import * as core from '@actions/core'

import moment from 'moment'

import 'moment/locale/ru'

async function main() {
  try {

    const m1 = moment('2022-05-25').locale('en')
    console.log(m1.format('LL'));

    const m2 = moment('2022-05-25').locale('ru')
    console.log(m2.format('LL'));

  }
  catch (error: any) {
    core.setFailed(error.message)
  }
}

main();

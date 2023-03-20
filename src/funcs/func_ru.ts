import moment from "moment";
import 'moment/locale/ru';

export async function* func_ru(): AsyncGenerator<moment.Moment> {
  console.log('locale', moment.locale());
  console.log('locales', moment.locales());

  yield moment('13 февраля 2023', 'LL', 'ru');
}

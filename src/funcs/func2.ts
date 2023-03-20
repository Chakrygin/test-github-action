import moment from "moment";
import 'moment/locale/ru';

export default function func2(): moment.Moment {
  return moment('13 февраля 2023', 'LL', 'ru');
}

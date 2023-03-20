import moment from "moment";

export async function* func_en(): AsyncGenerator<moment.Moment> {
  console.log('locale', moment.locale());
  console.log('locales', moment.locales());

  await new Promise<void>(resolve => setTimeout(resolve, 5000))

  yield moment('March 20, 2023', 'LL');
}

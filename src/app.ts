import moment from "moment";

export async function app(funcs: (() => AsyncGenerator<moment.Moment>)[]): Promise<void> {

  moment.locale('en');

  for (const func of funcs) {
    for await (const mm of func()) {
      console.log(mm.format('LL'));
    }
  }
}

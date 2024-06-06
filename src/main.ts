import * as core from '@actions/core'

import { hello } from '../core/hello'
import { test } from './foo/bar';

function main() {
  const message = hello('GitHub Action');
  core.info(message);

  const s = 'asasd';
  test('Hello!');

  const obj = { 'foo' : 42 };

  console.log(obj);
}

void main();

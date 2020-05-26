import * as assert from 'assert-plus';

/**
 * Says hello to whomever you specify.
 * @param who [string] - indicates who we're saying hello to
 */
export function hello(who: string): void {
  assert.string(who, 'who');
  console.log(`hello ${who}`);
}

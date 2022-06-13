// https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript
import { assert } from "chai";
import { domainName} from './domainName.js';

describe("Sample test", () => {
  it("Should pass sample tests", () => {
    assert.equal(domainName("http://google.com"), "google");
    assert.equal(domainName("http://google.co.jp"), "google");
    assert.equal(domainName("www.xakep.ru"), "xakep");
    assert.equal(domainName("https://youtube.com"), "youtube");
    assert.equal(domainName("http://www.9oj3u28bl5lfls3.de"), "9oj3u28bl5lfls3");
    // assert.equal(domainName("l7vauhze6lpza3xhet72.edu"), "l7vauhze6lpza3xhet72");
  })
})


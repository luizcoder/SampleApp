// spec.js
var host = 'http://localhost:8100/';
describe('angularjs homepage', function() {
  it('should have a title', function() {
    browser.get(host);
    expect(browser.getTitle()).toEqual('SampleApp');
  });
});

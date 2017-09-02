const Authservice = require('./authservice');

// Let's get jQuery (used to call the Authservice API).
jest.dontMock('jquery');
var $ = require('jquery');

test('Should have the Authservice object', () => {
  expect(Authservice.version()).toBe("2.0.0");
});

test('Authservice.init()', done => {
  var options = {
    host: 'drinkcircle.authservice.io',
    // port = options.port ? options.port : 80;
    // _version = options.version ? options.version : 'v2';
    tenant: 'drinkcircle',
    jQuery: $,
    onUserChange: () => {
      console.log('onUserChange()');
    }
  };
  Authservice.init(options, function ok() {
    // Is okay
    done();
  }, function fail() {

        // Error from healthcheck
      try {
        expect(1).toBe('dud call');
      } catch (e) {
        done.fail(e);
      }
  })
});

// test('Should pass healthcheck', done => {
//   console.log('Call Authservice.healthcheck...');
//
//   Authservice.healthcheck(function ok(response) {
//     // Is okay
//     done();
//   }, function fail(msg) {
//
//     // Error from healthcheck
//     try {
//       expect(msg).toBe('status: "green"');
//     } catch (e) {
//       done.fail(e);
//     }
//   });
//
// });

test('Invalid login', done => {
  console.log('Call Authservice.login...');

  let email = 'harold';
  let password = 'xxxxxxxxx';

  Authservice.login(email, password, (response) => {

    // Is okay
    done();
  }, (msg) => {

    // Error from healthcheck
    try {
      expect(msg).toBe('status: "green"');
    } catch (e) {
      done.fail(e);
    }
  });

});

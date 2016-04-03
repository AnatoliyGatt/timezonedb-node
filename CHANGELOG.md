1.0.7 / 2016-04-03
==================

* Remove dependencies badge from README.md
* Remove deep-freeze-node as dependency in package.json
* Update index.js documentation comments
* Add delay of 500ms before each test run in #getTimeZoneData() test suite to avoid '503 Service Temporarily Unavailable' error from TimeZoneDB API server in timezonedb.js tests
* Update timezonedb.js tests
* Fix timezonedb.js tests
* Remove require of deep-freeze-node in timezonedb.js
* Update timezonedb.js documentation comments
* Expose unfrozen instance of TimeZoneDB in timezonedb.js
* Update dev dependencies
* Update dependencies

1.0.6 / 2016-03-12
==================

* Update copyright in timezonedb.js
* Update copyright in index.js
* Update copyright in LICENSE
* Update dev dependencies
* Fix 'if-else statements' coding style in README.md
* Fix anonymous functions declaration coding style in README.md
* Fix invalid publishConfig value in package.json
* Add keywords to package.json
* Update dependencies
* Update .travis.yml to run tests against node v5.0.0
* Remove node v4.2.0 from testing environments in .travis.yml
* Remove node v4.1.0 from testing environments in .travis.yml

1.0.5 / 2015-11-03
==================

* Fix anonymous functions declaration coding style in timezonedb.js tests
* Fix anonymous functions declaration coding style in timezonedb.js
* Fix 'if-else statements' coding style in timezonedb.js tests
* Fix 'try-catch statement' coding style in timezonedb.js
* Fix 'else-if statements' coding style in timezonedb.js
* Fix 'if statements' coding style in timezonedb.js
* Fix 'if-else statements' coding style in timezonedb.js
* Update dev dependencies
* Update .travis.yml to run tests against node v4.2.0
* Remove manual deletion script of coverage directory in .travis.yml
* Replace encrypted API_KEY environment variable with unencrypted one in .travis.yml
* Add API_KEY as environment variable to test-tap script in package.json
* Add API_KEY as environment variable to test-cov script in package.json
* Add API_KEY as environment variable to test script in package.json
* Replace unencrypted API_KEY environment variable with encrypted one in .travis.yml
* Replace API_KEY string with environment variable in timezonedb.js tests
* Add API_KEY as environment variable to .travis.yml
* Replace unencrypted CodeClimate repo_token with encrypted one in .travis.yml
* Update .travis.yml to run tests against node v4.1.0
* Update dependencies

1.0.4 / 2015-10-01
==================

* Fix fallthrough in case when callback is called within catch block
* Add author.url to package.json
* Replace " with ' in definitions of all strings in README.md code samples
* Replace " with ' in definitions of all strings in index.js
* Replace " with ' in definitions of all strings in timezonedb.js tests
* Replace " with ' in definitions of all strings in timezonedb.js
* Update .travis.yml to run tests against node v4.0.0
* Update .travis.yml to run tests against all major versions of iojs from 1.0.0 to 3.0.0
* Add iojs (>= 1.0.0) to engines in package.json
* [CodeClimate] Fix 'parsedResponse is used out of scope' and 'parsedResponse is defined but never used' in timezonedb.js
* [CodeClimate] Fix 'Confusing use of negation operator' in timezonedb.js
* Add npm (>= 1.2.14) to engines in package.json
* Fix node-download-page-url in README.md
* Change node version from (>= 0.10.x) to (>= 0.10.0) in package.json

1.0.3 / 2015-08-28
==================

* Update dependencies
* Add logo to README.md
* Add test coverage badge to README.md
* Add support for Code Climate test coverage in .travis.yml
* Add additional test scripts to package.json
* Add codeclimate-test-reporter as dev dependency
* Add istanbul as dev dependency
* Set sudo to false in .travis.yml
* Update .travis.yml to run tests against all major versions of node from 0.10 to 0.12
* Change node version from (*) to (>= 0.10.x) in package.json
* Add Inch CI documentation coverage badge to README.md
* Add node version badge to README.md
* Add code climate badge to README.md
* Add dependencies badge to README.md
* Add devDependencies badge to README.md
* Change badges style from flat to flat-square in README.md
* Update timezonedb.js custom error messages
* Update timezonedb.js callback calls in case of error

1.0.2 / 2015-08-03
==================

* Update getTimeZoneData() error message in timezonedb.js

1.0.1 / 2015-08-03
==================

* Update timezonedb.js tests
* Update timezonedb.js documentation comments
* Update timezonedb.js

1.0.0 / 2015-08-02
==================

* Initial release
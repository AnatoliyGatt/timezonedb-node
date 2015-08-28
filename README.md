# TimeZoneDB for Node.js

An asynchronous client library for TimeZoneDB [API](https://timezonedb.com/api/).

[![NPM Package Version][npm-package-version-badge]][npm-package-url]
[![NPM Package License][npm-package-license-badge]][npm-package-license-url]
[![NPM Package Downloads][npm-package-downloads-badge]][npm-package-url]
[![Travis CI Build Status][travis-ci-build-status-badge]][travis-ci-build-status-page-url]

[![NPM Package Statistics][npm-package-statistics-badge]][npm-package-url]

## Installation

`npm install timezonedb-node`

## Quick Start

The quickest way to get started is by executing following code:

```javascript
var timezonedb = require("timezonedb-node")("YOUR_API_KEY");

timezonedb.getTimeZoneData({
    zone: "Australia/Melbourne"
}, function(error, data) {
    if(!error) {
        console.log(data);
    } else {
        console.error(error);
    }
});
```

If everything went well, you'll see something like this in your console:

```javascript
{ 
    status: 'OK',
    message: '',
    countryCode: 'AU',
    zoneName: 'Australia/Melbourne',
    abbreviation: 'AEST',
    gmtOffset: '36000',
    dst: '0',
    timestamp: 1438547603
}
```

## Documentation

### getTimeZoneDB

Requests timezone data.

#### Options

- `zone`(default: `none`, required: `true`) - Zone name of an area.
- `lat`(default: `none`, required: `true` if `zone` not specified) - Latitude of a city.
- `lng`(default: `none`, required: `true` if `zone` not specified) - Longitude of a city.
- `time`(default: `Current Unix timestamp`, required: `false`) - Unix time.

#### Examples

Requests timezone data of zone.

```javascript
timezonedb.getTimeZoneData({
    zone: "Australia/Melbourne"
}, function(error, data) {
    if(!error) {
        console.log(data);
    } else {
        console.error(error);
    }
});
```

Requests timezone data of location.

```javascript
timezonedb.getTimeZoneData({
    lat: 53.7833,
    lng: -1.75
}, function(error, data) {
    if(!error) {
        console.log(data);
    } else {
        console.error(error);
    }
});
```

Requests timezone data of location with manually set time.

```javascript
timezonedb.getTimeZoneData({
    lat: 53.7833,
    lng: -1.75,
    time: 1366552200
}, function(error, data) {
    if(!error) {
        console.log(data);
    } else {
        console.error(error);
    }
});
```

#### Errors

When errors occur, you receive an error object with default properties as a first argument of the callback.

## Tests

To run the test suite, first install the dependencies, then run `npm test`:

```bash
$ npm install
$ npm test
```

## License

Distributed under the [MIT License](LICENSE).

[npm-package-url]: https://npmjs.org/package/timezonedb-node

[npm-package-version-badge]: https://img.shields.io/npm/v/timezonedb-node.svg

[npm-package-license-badge]: https://img.shields.io/npm/l/timezonedb-node.svg
[npm-package-license-url]: http://opensource.org/licenses/MIT

[npm-package-downloads-badge]: https://img.shields.io/npm/dm/timezonedb-node.svg

[travis-ci-build-status-badge]: https://img.shields.io/travis/AnatoliyGatt/timezonedb-node.svg
[travis-ci-build-status-page-url]: https://travis-ci.org/AnatoliyGatt/timezonedb-node

[npm-package-statistics-badge]: https://nodei.co/npm/timezonedb-node.png?downloads=true&downloadRank=true&stars=true
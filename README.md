# TimeZoneDB for Node.js

An asynchronous client library for TimeZoneDB [API](https://timezonedb.com/api/).

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![License][license]][license-url]
[![Travis Build][travis-image]][travis-url]

[![NPM Statistics][npm-statistics-image]][npm-url]

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

[npm-image]: https://img.shields.io/npm/v/timezonedb-node.svg
[npm-url]: https://npmjs.org/package/timezonedb-node
[downloads-image]: https://img.shields.io/npm/dm/timezonedb-node.svg
[downloads-url]: https://npmjs.org/package/timezonedb-node
[license]: https://img.shields.io/npm/l/timezonedb-node.svg
[license-url]: https://github.com/AnatoliyGatt/timezonedb-node/blob/master/LICENSE
[travis-image]: https://img.shields.io/travis/AnatoliyGatt/timezonedb-node/master.svg
[travis-url]: https://travis-ci.org/AnatoliyGatt/timezonedb-node
[npm-statistics-image]: https://nodei.co/npm/timezonedb-node.png?downloads=true&downloadRank=true&stars=true
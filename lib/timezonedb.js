/**
 * @module timezonedb
 * @description Client for TimeZoneDB API.
 * @version 1.0.7
 * @author Anatoliy Gatt [anatoliy.gatt@aol.com]
 * @copyright Copyright (c) 2015-2016 Anatoliy Gatt
 * @license MIT
 */

'use strict';

/**
 * @private
 * @description Module dependencies.
 */

var http = require('http');
var querystring = require('querystring');

/**
 * @private
 * @constant {String}
 * @description Module version.
 */

var VERSION = require('../package.json').version;

/**
 * @public
 * @constructor
 * @description Initialize instance of TimeZoneDB with API key and default request options.
 * @param {String} apiKey - API key.
 * @property {String} apiKey - API key.
 * @property {Object} defaultRequestOptions - Default request options.
 * @property {String} defaultRequestOptions.hostname - Default request hostname.
 * @property {Number} defaultRequestOptions.port - Default request port.
 * @property {String} defaultRequestOptions.basePath - Default request base path.
 */

function TimeZoneDB(apiKey) {
    if (apiKey) {
        this.apiKey = apiKey;
    } else {
        throw new Error('apiKey have to be set');
    }
    this.defaultRequestOptions = {
        hostname: 'api.timezonedb.com',
        port: 80,
        basePath: '/'
    };
}

/**
 * @public
 * @function getTimeZoneData
 * @description Request timezone data.
 * @param {Object} options - Request parameters.
 * @param {String} [options.zone] - Time zone.
 * @param {Number} [options.lat] - Latitude.
 * @param {Number} [options.lng] - Longitude.
 * @param {Number} [options.time] - Unix time.
 * @param {getTimeZoneData~callback} callback - Callback when response comes in.
 */

TimeZoneDB.prototype.getTimeZoneData = function (options, callback) {
    if ((typeof options === 'function') || (options instanceof Function)) {
        callback = options;
    } else if ((typeof callback !== 'function') || !(callback instanceof Function)) {
        throw new Error('getTimeZoneData(): callback is undefined or contains non-function value');
    }

    var requestParameters = {
        key: this.apiKey,
        format: 'json'
    };

    if ((!options.lat || !options.lng) && !options.zone) {
        throw new Error('getTimeZoneData(): either zone or lat and lng have to be set');
    }

    if (options.zone) {
        requestParameters.zone = options.zone;
    } else if (options.lat && options.lng) {
        requestParameters.lat = options.lat;
        requestParameters.lng = options.lng;
    }

    if (options.time) {
        requestParameters.time = options.time;
    }

    var request = http.get({
        hostname: this.defaultRequestOptions.hostname,
        port: this.defaultRequestOptions.port,
        path: this.defaultRequestOptions.basePath + '?' + querystring.stringify(requestParameters),
        headers: {
            'Accept': 'application/json',
            'Accept-Charset': 'utf-8',
            'Accept-Encoding': '*',
            'Accept-Language': 'en',
            'Accept-Datetime': new Date().toUTCString(),
            'Cache-Control': 'no-cache',
            'Connection': 'close',
            'Date': new Date().toUTCString(),
            'Host': this.defaultRequestOptions.hostname,
            'Max-Forwards': 1,
            'Pragma': 'no-cache',
            'TE': 'trailers, deflate',
            'User-Agent': 'timezonedb-node/' + VERSION
        },
        agent: false,
        keepAlive: false
    }, function (response) {
        var rawResponse = '';
        response.on('data', function (data) {
            rawResponse += data;
        });
        response.on('end', function () {
            var parsedResponse;
            try {
                parsedResponse = JSON.parse(rawResponse);
            } catch (error) {
                return callback(error);
            }
            if ((parsedResponse.message !== '')) {
                callback(new Error(parsedResponse.message));
            } else {
                callback(null, parsedResponse);
            }
        });
        response.on('error', function (error) {
            callback(error);
        });
    });
    request.on('error', function (error) {
        callback(error);
    });
};

/**
 * @callback getTimeZoneData~callback
 * @description Use as callback in getTimeZoneData function.
 * @param {Object} error - Generic error object.
 * @param {Object} data - Time zone data.
 */

/**
 * @public
 * @description Expose instance of TimeZoneDB.
 * @param {String} apiKey - API key.
 * @returns {Object} - Instance of TimeZoneDB.
 */

module.exports = function (apiKey) {
    return new TimeZoneDB(apiKey);
};
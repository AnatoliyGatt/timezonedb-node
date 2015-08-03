/**
 * @module index
 * @description Entry point for timezonedb-node module.
 * @version 1.0.2
 * @author Anatoliy Gatt [anatoliy.gatt@aol.com]
 * @copyright Copyright (c) 2015 Anatoliy Gatt
 * @license MIT
 */

"use strict";

/**
 * @public
 * @description Expose function to initialize unchangeable instance of TimeZoneDB.
 * @returns {Function} - Function to initialize unchangeable instance of TimeZoneDB.
 */

module.exports = require("./lib/timezonedb");
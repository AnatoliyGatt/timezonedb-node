var assert = require('assert');
var timezonedb = require('../lib/timezonedb')(process.env.API_KEY);

describe('timezonedb', function () {
    describe('init', function () {
        var defaultRequestOptions = {};

        before(function () {
            defaultRequestOptions = {
                hostname: 'api.timezonedb.com',
                port: 80,
                basePath: '/'
            }
        });

        it('should have correct default request options', function () {
            assert.deepEqual(timezonedb.defaultRequestOptions, defaultRequestOptions, 'default request options should have correct initial property values');
        });
    });

    describe('functions', function () {
        describe('#getTimeZoneData()', function () {
            function validateTimeZoneData(data) {
                assert.ok(data, undefined, 'data should not be undefined, null or empty');
                assert.ok(data.status, undefined, 'data.status should not be undefined, null or empty');
                assert.notEqual(data.status, 'FAIL', 'data.status should not be equal to FAIL');
                assert.notEqual(data.message, undefined, 'data.message should not be undefined');
                assert.equal(data.message, '', 'data.message should be empty');
                assert.ok(data.countryCode, undefined, 'data.countryCode should not be undefined, null or empty');
                assert.ok(data.zoneName, undefined, 'data.zoneName should not be undefined, null or empty');
                assert.ok(data.abbreviation, undefined, 'data.abbreviation should not be undefined, null or empty');
                assert.ok(data.gmtOffset, undefined, 'data.gmtOffset should not be undefined, null or empty');
                assert.ok(data.dst, undefined, 'data.dst should not be undefined, null or empty');
                assert.ok(data.timestamp, undefined, 'data.timestamp should not be undefined, null or empty');
            }

            it('should respond with valid time zone data object, requested with zone', function (done) {
                timezonedb.getTimeZoneData({
                    zone: 'Australia/Melbourne'
                }, function (error, data) {
                    if (!error) {
                        validateTimeZoneData(data);
                    } else {
                        assert.throws(function () {
                            throw error;
                        }, Error);
                    }
                    done();
                });
            });

            it('should respond with valid time zone data object, requested with lat and lng', function (done) {
                timezonedb.getTimeZoneData({
                    lat: 53.7833,
                    lng: -1.75
                }, function (error, data) {
                    if (!error) {
                        validateTimeZoneData(data);
                    } else {
                        assert.throws(function () {
                            throw error;
                        }, Error);
                    }
                    done();
                });
            });

            it('should respond with valid time zone data object, requested with lat, lng and time', function (done) {
                timezonedb.getTimeZoneData({
                    lat: 53.7833,
                    lng: -1.75,
                    time: 1366552200
                }, function (error, data) {
                    if (!error) {
                        validateTimeZoneData(data);
                    } else {
                        assert.throws(function () {
                            throw error;
                        }, Error);
                    }
                    done();
                });
            });

            it('should respond with error when called with invalid zone', function (done) {
                timezonedb.getTimeZoneData({
                    zone: 'Melbourne'
                }, function (error, data) {
                    if (!error) {
                        validateTimeZoneData(data);
                    } else {
                        assert.throws(function () {
                            throw error;
                        }, Error);
                    }
                    done();
                });
            });

            it('should respond with error when called with invalid lat and lng', function (done) {
                timezonedb.getTimeZoneData({
                    lat: 1000,
                    lng: 1000
                }, function (error, data) {
                    if (!error) {
                        validateTimeZoneData(data);
                    } else {
                        assert.throws(function () {
                            throw error;
                        }, Error);
                    }
                    done();
                });
            });

            it('should fail when called without zone or lat and lng', function () {
                assert.throws(function () {
                    timezonedb.getTimeZoneData(function (error, data) {
                        if (!error) {
                            validateTimeZoneData(data);
                        } else {
                            assert.throws(function () {
                                throw error;
                            }, Error);
                        }
                    });
                }, Error);
            });

            it('should fail when called without arguments', function () {
                assert.throws(function () {
                    timezonedb.getTimeZoneData();
                }, Error);
            });

            it('should fail when called with options only', function () {
                assert.throws(function () {
                    timezonedb.getTimeZoneData({
                        zone: 'Australia/Melbourne',
                        time: 1366552200
                    });
                }, Error);
            });

            it('should not be overridden', function () {
                timezonedb.getTimeZoneData = function () {
                    return '#getTimeZoneData()';
                };

                assert.throws(function () {
                    assert.notEqual(timezonedb.getTimeZoneData(), '#getTimeZoneData()', '#getTimeZoneData() should not be overridden');
                }, Error);
            });
        });
    });
});
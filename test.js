'use strict';
const assert = require('assert');
const requireNew = require('require-new');

const http = require('http');
const https = require('https');

const oldAgents = {
	http: http.globalAgent,
	https: https.globalAgent
};

describe('Test globalAgent replacement', function () {

	it('should not replace globalAgents when there is not proxy', function () {
		process.env.HTTPS_PROXY = '';
		process.env.HTTP_PROXY = '';

		let proxySupport = requireNew('./index');
		assert.equal(oldAgents.http, http.globalAgent);
		assert.equal(oldAgents.https, https.globalAgent);
	});

	it('should replace globalAgents if env is set', function () {
		process.env.HTTPS_PROXY = '0.0.0.1';
		process.env.HTTP_PROXY = '0.0.0.2';

		let proxySupport = requireNew('./index');
		assert.notEqual(oldAgents.http, http.globalAgent);
		assert.notEqual(oldAgents.https, https.globalAgent);
	});

});

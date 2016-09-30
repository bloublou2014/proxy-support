# proxy-support [![Build Status](https://travis-ci.org/floatdrop/proxy-support.svg?branch=master)](https://travis-ci.org/floatdrop/proxy-support)

> Patch http and https request method to use tunnel-agent

:warning: __This module will replace `agent` option in every http and https request__

## Install

```
$ npm install --save proxy-support -g
```

Or locally 

```
$ npm install --save proxy-support 
```


## Usage

Most tools (which use request, got, etc...) are using global Agent from `http`, so to fix proxy support you should do something like this:

```
alias node="node -r proxy-support"
```

This should work from [iojs@1.6.0](https://github.com/nodejs/io.js/blob/v1.x/CHANGELOG.md#2015-03-19-version-160-chrisdickinson).

## From code 

Will check HTTP_PROXY and HTTPS_PROXY environment settings and intercept http and https requests.

```
require('proxy-support');
```

## License

MIT © [Vsevolod Strukchinsky](http://github.com/floatdrop)

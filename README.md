# pfc-formatter

[中文文档](./README_zh.md)   [document](./README.md)

Formatter for PFC code
- [install](#install)
- [usage](#usage)
  * [API quick run](#api-quick-run)
- [develop](#develop)
  * [file structure](#file-structure)
  * [run tests](#run-tests)
- [license](#license)

## install

`npm i pfc-formatter --save` or `npm i pfc-formatter --save-dev`

Install on global, using `npm i pfc-formatter -g`



## usage








### API quick run



```js
let pfcFormatter = require('pfc-formatter')
let {format} = pfcFormatter;

let ret = format("f1(f2(f3(4, 5), 5), s(7, 8))");

console.log(ret);
```

```
output

    f1(
        f2(
            f3(
                4,
                5
            ),
            5
        ),
        s(
            7,
            8
        )
    )

```


## develop

### file structure

```
.    
│──LICENSE    
│──README.md    
│──coverage    
│   │──coverage.json    
│   │──lcov-report    
│   │   │──base.css    
│   │   │──index.html    
│   │   │──pfc-formatter    
│   │   │   │──index.html    
│   │   │   │──index.js.html    
│   │   │   └──src    
│   │   │       │──index.html    
│   │   │       └──index.js.html    
│   │   │──prettify.css    
│   │   │──prettify.js    
│   │   │──sort-arrow-sprite.png    
│   │   └──sorter.js    
│   └──lcov.info    
│──index.js    
│──package.json    
│──src    
│   └──index.js    
└──test    
    └──index.js     
```


### run tests

`npm test`

## license

MIT License

Copyright (c) 2017 chenjunyu

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.



[![npm](https://img.shields.io/npm/dt/whichx-utils.svg?style=flat-square)](https://npmjs.com/package/whichx-utils) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)



<h1><p style="text-align: center" align="center">📦 WhichX-utils</p></h1>



A package, with tools designed to work with strings, numbers, and mathematics.



## 📁 Content

- [GetPort](#usage-getport)

- [MessageFrom](#usage-messagefrom)

- [GetLast](#usage-to-getlast)

- [WhileUtils](#usage-to-whileutils)



## ‼️ Important link

For export and import to work, you need to write ```type="module"``` in ```package.json```



## Usage getPort

```NodeJS

import { port } from "whichx-utils";



const body = port.default({

Types: [

{

    port: 80

}

],

config: {}

});



console.log(body) // { type: "HTTP" }

```



## Usage MessageFrom

```NodeJS

import { MessageFrom } from "whichx-utils";



const body = MessageFrom("hello");



console.log(body) // Hello.

```



## Usage to getLast

```NodeJS

import { getLast } from "whichx-utils";



const body = ["hello", "bye"].getLast();



console.log(body) // bye

```



## Usage to WhileUtils

```NodeJS

import { whileUtils } from "whichx-utils";



const body = whileUtils("url in google.com");



console.log(body) // ...

```



😍 and more soon...

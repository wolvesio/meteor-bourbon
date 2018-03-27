## This package is no longer maintained since the progression of Meteor to the use of NPM allows for thoughtbot's main package to be leveraged

[https://github.com/thoughtbot/bourbon#installation](https://github.com/thoughtbot/bourbon#installation)

---

[![Bourbon](http://images.thoughtbot.com/bourbon/bourbon-logo.svg)](http://bourbon.io)

## A [Meteor](http://meteor.com) package of [Thoughtbot's](http://thoughtbot.com), Bourbon.

**A simple and lightweight mixin library for Sass.**

---

[Bourbon](http://bourbon.io) is a library of pure Sass mixins that are designed to be simple and easy to use. No configuration required. The mixins aim to be as vanilla as possible, meaning they should be as close to the original CSS syntax as possible.

The mixins contain vendor specific prefixes for all CSS3 properties for support amongst modern browsers. The prefixes also ensure graceful degradation for older browsers that support only CSS3 prefixed properties. Bourbon uses SCSS syntax.

#### [Documentation & Demo](http://bourbon.io)

#### [Changelog](https://github.com/thoughtbot/bourbon/releases)

## Install

1.  Make sure to add sass support to your meteor app:


```bash
meteor add fourseven:scss
```

2.  From within your Meteor app's directory:


```bash
meteor add wolves:bourbon
```

## Usage

1.  Simply import Bourbon at the top of your sass file

`*.scss`

```scss
@import "{wolves:bourbon}/bourbon";
```

`*.sass`

```sass
@import {wolves:bourbon}/bourbon
```

---

## Credits

![thoughtbot](http://thoughtbot.com/images/tm/logo.png)

Bourbon is maintained and funded by [thoughtbot, inc](http://thoughtbot.com). Tweet your questions or suggestions to [@bourbonsass](https://twitter.com/bourbonsass) and while you’re at it follow us too.

## License

Copyright © 2011–2014 [thoughtbot, inc](http://thoughtbot.com). Bourbon is free software, and may be redistributed under the terms specified in the [license](LICENSE.md).

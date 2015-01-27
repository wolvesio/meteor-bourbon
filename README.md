[![Bourbon Sass Mixin Library](http://bourbon.io/images/shared/bourbon-logo.png)](http://bourbon.io)

***

## A [Meteor](http://meteor.com) package of [Thoughtbot's](http://thoughtbot.com), Bourbon.

**A simple and lightweight mixin library for Sass.**

---

[Bourbon](http://bourbon.io) is a library of pure Sass mixins that are designed to be simple and easy to use. No configuration required. The mixins aim to be as vanilla as possible, meaning they should be as close to the original CSS syntax as possible.

The mixins contain vendor specific prefixes for all CSS3 properties for support amongst modern browsers. The prefixes also ensure graceful degradation for older browsers that support only CSS3 prefixed properties. Bourbon uses SCSS syntax.

#### [Documentation & Demo](http://bourbon.io)

#### [Changelog](https://github.com/thoughtbot/bourbon/releases)

##Install

1. Make sure to add sass support to your meteor app:

  ```bash
  meteor add fourseven:scss
  ```

2. From within your Meteor app's directory:

  ```bash
  meteor add wolves:bourbon
  ```

3. Create a `scss.json` configuration file in the app's root with:

  ```json
  {
    "includePaths": [
      ".meteor/local/build/programs/server/assets/packages/wolves_bourbon"
    ]
  }
  ```

  **Example of scss.json using full bourbon suite**
  *(This would be used after installing the `wolves:bitters` & `wolves:neat` packages along with bourbon)*
  ```json
  {
    "includePaths": [
      ".meteor/local/build/programs/server/assets/packages/wolves_bourbon",
      ".meteor/local/build/programs/server/assets/packages/wolves_bitters",
      ".meteor/local/build/programs/server/assets/packages/wolves_neat"
    ]
  }
  ```
##Usage

1. Simply import Bourbon at the top of your sass file

  `*.scss`
  ```scss
  @import "bourbon/bourbon";
  ```
  `*.sass`
  ```scss
  @import bourbon/bourbon
  ```

---

## Important Note
Because Meteor will attempt to compile you app's local stylesheets prior to copying the server assets directory, the first time you run the app after installing the package your app will complain that it is unable to find it. For the moment this can be resolved by either stopping and restarting the app, at which point you should no longer get this error message, our running `touch` on you local stylesheet thats attempting to access the package, triggering a reload.

## Credits

![thoughtbot](http://thoughtbot.com/images/tm/logo.png)

Bourbon is maintained and funded by [thoughtbot, inc](http://thoughtbot.com). Tweet your questions or suggestions to [@bourbonsass](https://twitter.com/bourbonsass) and while you’re at it follow us too.

## License

Copyright © 2011–2014 [thoughtbot, inc](http://thoughtbot.com). Bourbon is free software, and may be redistributed under the terms specified in the [license](LICENSE.md).

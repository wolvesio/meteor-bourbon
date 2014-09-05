Package.describe({
  summary: "A simple and lightweight mixin library for Sass. Built by Thoughtbot",
  version: "0.1.0",
  git: "https://github.com/wolvesio/meteor-bourbon"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.1');
  api.addFiles('wolves:bourbon.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('wolves:bourbon');
  api.addFiles('wolves:bourbon-tests.js');
});

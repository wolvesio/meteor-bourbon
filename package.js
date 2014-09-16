Package.describe({
  name: "wolves:bourbon",
  summary: "Meteor 0.9.x - Bourbon is a simple and lightweight mixin library for Sass.",
  version: "0.6.0",
  git: "https://github.com/wolvesio/meteor-bourbon"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0');
  api.use('stevezhu:sass@1.2.2');

  api.addFiles('sass_include_paths.json', 'server');
});

Package.onTest(function(api) {
  api.use([
    'coffeescript',
    'tinytest',
    'test-helpers',
    'templating',
    'iron:router',
    'stevezhu:sass@1.2.2'
  ]);
  api.addFiles('sass_include_paths.json', 'server');
  api.addFiles(['tests/route.coffee', 'tests/client.sass', 'tests/client.html', 'tests/tests.coffee'], 'client');
});

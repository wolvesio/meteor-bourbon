Package.describe({
  name: "wolves:bourbon",
  summary: "Bourbon is a simple and lightweight mixin library for Sass.",
  version: "0.2.0",
  git: "https://github.com/wolvesio/meteor-bourbon"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0');
  api.use('fourseven:scss@0.9.5', 'client');

  var path = Npm.require('path');
  var asset_path = path.join('bourbon');
  api.addFiles(path.join(asset_path, '_bourbon.scss'), 'client');
});

Package.describe({
  name: "wolves:bourbon",
  summary: "Bourbon is a simple and lightweight mixin library for Sass.",
  version: "0.4.0",
  git: "https://github.com/wolvesio/meteor-bourbon"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0');
  api.use('fourseven:scss@0.9.5', 'client');
  api.addFiles([
    '_bourbon.scss',
    "settings/prefixer",
    "settings/px-to-em",
    // Custom Helpers
    "helpers/gradient-positions-parser",
    "helpers/linear-positions-parser",
    "helpers/radial-arg-parser",
    "helpers/radial-positions-parser",
    "helpers/render-gradients",
    "helpers/shape-size-stripper",
    // Custom Functions
    "functions/color-lightness",
    "functions/flex-grid",
    "functions/golden-ratio",
    "functions/grid-width",
    "functions/linear-gradient",
    "functions/modular-scale",
    "functions/px-to-em",
    "functions/px-to-rem",
    "functions/radial-gradient",
    "functions/strip-units",
    "functions/tint-shade",
    "functions/transition-property-name",
    "functions/unpack",
    // CSS3 Mixins
    "css3/animation",
    "css3/appearance",
    "css3/backface-visibility",
    "css3/background",
    "css3/background-image",
    "css3/border-image",
    "css3/border-radius",
    "css3/box-sizing",
    "css3/calc",
    "css3/columns",
    "css3/filter",
    "css3/flex-box",
    "css3/font-face",
    "css3/font-feature-settings",
    "css3/hyphens",
    "css3/hidpi-media-query",
    "css3/image-rendering",
    "css3/inline-block",
    "css3/keyframes",
    "css3/linear-gradient",
    "css3/perspective",
    "css3/radial-gradient",
    "css3/transform",
    "css3/transition",
    "css3/user-select",
    "css3/placeholder",
    // Addons & other mixins
    "addons/button",
    "addons/clearfix",
    "addons/directional-values",
    "addons/ellipsis",
    "addons/font-family",
    "addons/hide-text",
    "addons/html5-input-types",
    "addons/position",
    "addons/prefixer",
    "addons/retina-image",
    "addons/size",
    "addons/timing-functions",
    "addons/triangle",
    "addons/word-wrap",
    // Soon to be deprecated Mixins
    "bourbon-deprecated-upcoming",
  ], 'server', {
    isAsset: true
  });
});

Package.onTest(function(api) {
  api.use([
    'coffeescript',
    'tinytest',
    'test-helpers',
    'templating',
    'iron:router',
    'fourseven:scss'
  ]);
  api.addFiles(['tests/route.coffee', 'tests/client.sass', 'tests/client.html', 'tests/tests.coffee'], 'client');
});

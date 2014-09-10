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
    "settings/prefixer.scss",
    "settings/px-to-em.scss",
    // Custom Helpers
    "helpers/gradient-positions-parser.scss",
    "helpers/linear-positions-parser.scss",
    "helpers/radial-arg-parser.scss",
    "helpers/radial-positions-parser.scss",
    "helpers/render-gradients.scss",
    "helpers/shape-size-stripper.scss",
    // Custom Functions
    "functions/color-lightness.scss",
    "functions/flex-grid.scss",
    "functions/golden-ratio.scss",
    "functions/grid-width.scss",
    "functions/linear-gradient.scss",
    "functions/modular-scale.scss",
    "functions/px-to-em.scss",
    "functions/px-to-rem.scss",
    "functions/radial-gradient.scss",
    "functions/strip-units.scss",
    "functions/tint-shade.scss",
    "functions/transition-property-name.scss",
    "functions/unpack.scss",
    // CSS3 Mixins
    "css3/animation.scss",
    "css3/appearance.scss",
    "css3/backface-visibility.scss",
    "css3/background.scss",
    "css3/background-image.scss",
    "css3/border-image.scss",
    "css3/border-radius.scss",
    "css3/box-sizing.scss",
    "css3/calc.scss",
    "css3/columns.scss",
    "css3/filter.scss",
    "css3/flex-box.scss",
    "css3/font-face.scss",
    "css3/font-feature-settings.scss",
    "css3/hyphens.scss",
    "css3/hidpi-media-query.scss",
    "css3/image-rendering.scss",
    "css3/inline-block.scss",
    "css3/keyframes.scss",
    "css3/linear-gradient.scss",
    "css3/perspective.scss",
    "css3/radial-gradient.scss",
    "css3/transform.scss",
    "css3/transition.scss",
    "css3/user-select.scss",
    "css3/placeholder.scss",
    // Addons & other mixins
    "addons/button.scss",
    "addons/clearfix.scss",
    "addons/directional-values.scss",
    "addons/ellipsis.scss",
    "addons/font-family.scss",
    "addons/hide-text.scss",
    "addons/html5-input-types.scss",
    "addons/position.scss",
    "addons/prefixer.scss",
    "addons/retina-image.scss",
    "addons/size.scss",
    "addons/timing-functions.scss",
    "addons/triangle.scss",
    "addons/word-wrap.scss",
    // Soon to be deprecated Mixins
    "bourbon-deprecated-upcoming.scss",
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

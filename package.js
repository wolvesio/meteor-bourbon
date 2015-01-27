Package.describe({
  name: "wolves:bourbon",
  summary: "Meteor 0.9+ - Bourbon is a simple and lightweight mixin library for Sass.",
  version: "0.9.0",
  git: "https://github.com/wolvesio/meteor-bourbon"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.3');

  api.addFiles('scss.json', 'server');

  api.addFiles([
    "bourbon/settings/_prefixer.scss",
    "bourbon/settings/_px-to-em.scss",
    // Custom Helpers
    "bourbon/helpers/_gradient-positions-parser.scss",
    "bourbon/helpers/_linear-positions-parser.scss",
    "bourbon/helpers/_radial-arg-parser.scss",
    "bourbon/helpers/_radial-positions-parser.scss",
    "bourbon/helpers/_render-gradients.scss",
    "bourbon/helpers/_shape-size-stripper.scss",
    // Custom Functions
    "bourbon/functions/_color-lightness.scss",
    "bourbon/functions/_flex-grid.scss",
    "bourbon/functions/_golden-ratio.scss",
    "bourbon/functions/_grid-width.scss",
    "bourbon/functions/_linear-gradient.scss",
    "bourbon/functions/_modular-scale.scss",
    "bourbon/functions/_px-to-em.scss",
    "bourbon/functions/_px-to-rem.scss",
    "bourbon/functions/_radial-gradient.scss",
    "bourbon/functions/_strip-units.scss",
    "bourbon/functions/_tint-shade.scss",
    "bourbon/functions/_transition-property-name.scss",
    "bourbon/functions/_unpack.scss",
    // CSS3 Mixins
    "bourbon/css3/_animation.scss",
    "bourbon/css3/_appearance.scss",
    "bourbon/css3/_backface-visibility.scss",
    "bourbon/css3/_background.scss",
    "bourbon/css3/_background-image.scss",
    "bourbon/css3/_border-image.scss",
    "bourbon/css3/_border-radius.scss",
    "bourbon/css3/_box-sizing.scss",
    "bourbon/css3/_calc.scss",
    "bourbon/css3/_columns.scss",
    "bourbon/css3/_filter.scss",
    "bourbon/css3/_flex-box.scss",
    "bourbon/css3/_font-face.scss",
    "bourbon/css3/_font-feature-settings.scss",
    "bourbon/css3/_hyphens.scss",
    "bourbon/css3/_hidpi-media-query.scss",
    "bourbon/css3/_image-rendering.scss",
    "bourbon/css3/_inline-block.scss",
    "bourbon/css3/_keyframes.scss",
    "bourbon/css3/_linear-gradient.scss",
    "bourbon/css3/_perspective.scss",
    "bourbon/css3/_radial-gradient.scss",
    "bourbon/css3/_transform.scss",
    "bourbon/css3/_transition.scss",
    "bourbon/css3/_user-select.scss",
    "bourbon/css3/_placeholder.scss",
    // Addons & other mixins
    "bourbon/addons/_button.scss",
    "bourbon/addons/_clearfix.scss",
    "bourbon/addons/_directional-values.scss",
    "bourbon/addons/_ellipsis.scss",
    "bourbon/addons/_font-family.scss",
    "bourbon/addons/_hide-text.scss",
    "bourbon/addons/_html5-input-types.scss",
    "bourbon/addons/_position.scss",
    "bourbon/addons/_prefixer.scss",
    "bourbon/addons/_retina-image.scss",
    "bourbon/addons/_size.scss",
    "bourbon/addons/_timing-functions.scss",
    "bourbon/addons/_triangle.scss",
    "bourbon/addons/_word-wrap.scss",
    // Soon to be deprecated Mixins
    "bourbon/_bourbon-deprecated-upcoming.scss",
    'bourbon/_bourbon.scss'
  ], 'server', {isAsset: true});
});

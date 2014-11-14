Package.describe({
  name: "wolves:bourbon",
  summary: "Meteor 0.9.x - Bourbon is a simple and lightweight mixin library for Sass.",
  version: "0.7.1",
  git: "https://github.com/wolvesio/meteor-bourbon"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0');
  api.use('fourseven:scss@1.0.0');
  api.addFiles([
    "settings/_prefixer.scss",
    "settings/_px-to-em.scss",
    // Custom Helpers
    "helpers/_gradient-positions-parser.scss",
    "helpers/_linear-positions-parser.scss",
    "helpers/_radial-arg-parser.scss",
    "helpers/_radial-positions-parser.scss",
    "helpers/_render-gradients.scss",
    "helpers/_shape-size-stripper.scss",
    // Custom Functions
    "functions/_color-lightness.scss",
    "functions/_flex-grid.scss",
    "functions/_golden-ratio.scss",
    "functions/_grid-width.scss",
    "functions/_linear-gradient.scss",
    "functions/_modular-scale.scss",
    "functions/_px-to-em.scss",
    "functions/_px-to-rem.scss",
    "functions/_radial-gradient.scss",
    "functions/_strip-units.scss",
    "functions/_tint-shade.scss",
    "functions/_transition-property-name.scss",
    "functions/_unpack.scss",
    // CSS3 Mixins
    "css3/_animation.scss",
    "css3/_appearance.scss",
    "css3/_backface-visibility.scss",
    "css3/_background.scss",
    "css3/_background-image.scss",
    "css3/_border-image.scss",
    "css3/_border-radius.scss",
    "css3/_box-sizing.scss",
    "css3/_calc.scss",
    "css3/_columns.scss",
    "css3/_filter.scss",
    "css3/_flex-box.scss",
    "css3/_font-face.scss",
    "css3/_font-feature-settings.scss",
    "css3/_hyphens.scss",
    "css3/_hidpi-media-query.scss",
    "css3/_image-rendering.scss",
    "css3/_inline-block.scss",
    "css3/_keyframes.scss",
    "css3/_linear-gradient.scss",
    "css3/_perspective.scss",
    "css3/_radial-gradient.scss",
    "css3/_transform.scss",
    "css3/_transition.scss",
    "css3/_user-select.scss",
    "css3/_placeholder.scss",
    // Addons & other mixins
    "addons/_button.scss",
    "addons/_clearfix.scss",
    "addons/_directional-values.scss",
    "addons/_ellipsis.scss",
    "addons/_font-family.scss",
    "addons/_hide-text.scss",
    "addons/_html5-input-types.scss",
    "addons/_position.scss",
    "addons/_prefixer.scss",
    "addons/_retina-image.scss",
    "addons/_size.scss",
    "addons/_timing-functions.scss",
    "addons/_triangle.scss",
    "addons/_word-wrap.scss",
    // Soon to be deprecated Mixins
    "_bourbon-deprecated-upcoming.scss",
    '_bourbon.scss'
  ], 'server', {
    isAsset: true
  });
});

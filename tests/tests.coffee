Tinytest.add 'html test-elem existence', (test) ->
  div = document.getElementById("container")
  html = canonicalizeHtml(div.innerHTML)
  test.include html, '<div class="bourbon-import-builtin-box-sizing">Test</div>'

Tinytest.add 'import/include test', (test) ->
  div = document.getElementById("container").getElementsByClassName("bourbon-import-builtin-box-sizing")[0]
  test.equal(getStyleProperty(div, "box-sizing"), "border-box", 'Expecting box-sizing to be border-box.')

Tinytest.add 'function test', (test) ->
  div = document.getElementById("container").getElementsByClassName("bourbon-import-builtin-box-sizing")[0]
  test.equal(getStyleProperty(div, "margin"), "22.6520004272461px", "Expect golden-ratio() function to convert golden-ratio(14px, 1) to 22.652px")
  # Removing purely for cosmetic reasons once done using
  div.remove()

Tinytest.add 'variable test', (test) ->
  body = document.body
  test.equal(getStyleProperty(body, "font-family"), "'Helvetica Neue', Helvetica, Roboto, Arial, sans-serif", "Expect $helvetica var to set fonts")

Tinytest.add 'addon test', (test) ->
  div = document.getElementById("container").getElementsByClassName("button")[0]
  console.log(getStyleProperty(div, "background-image"))
  test.equal(getStyleProperty(div, "background-image"), "linear-gradient(rgb(66, 148, 240), rgb(7, 121, 243))", "Expect 'button' addon to set default bourbon btn bkg styling")
  test.equal(getStyleProperty(div, "border-color"), "rgb(7, 114, 228)", "Expect 'button' addon to set default bourbon btn border styling")
  # Removing purely for cosmetic reasons once done using
  div.remove()

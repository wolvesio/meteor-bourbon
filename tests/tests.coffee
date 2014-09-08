# Tinytest.add 'test setup', (test) ->
#   d = renderToDiv('Test Div')
#   d.className = d.className + 'bourbon-import-builtin-box-sizing'
#   d.style.boxSizing = "border-box"
renderToDiv = (comp) ->
  div = document.createElement("DIV")
  Blaze.render(comp).attach(div)
  div

Tinytest.add 'html test-elem existence', (test) ->
  div = document.getElementById("asdf")
  html = canonicalizeHtml(div.innerHTML)
  test.include html, '<div class="bourbon-import-builtin-box-sizing">Test</div>'

Tinytest.add 'bourbon import check', (test) ->
  div = document.getElementById("asdf").getElementsByClassName("bourbon-import-builtin-box-sizing")[0]
  console.log("Foo:", getStyleProperty(div, "box-sizing"))
  test.equal(getStyleProperty(div, "box-sizing"), "border-box", 'Expecting box-sizing to be border-box.')

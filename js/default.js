const loadMarkdown = (url, elemId) => {
  const elem = document.getElementById(elemId)
  fetch(url)
  .then(function(request) {
    return request.text()
  })
  .then(function(raw_markdown) {
      elem.innerHTML = converter.makeHtml(raw_markdown)
  })
}

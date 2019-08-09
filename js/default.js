const loadMarkdown = (url, elemId) => {
  const elem = document.getElementById(elemId)
  fetch(url)
  .then(function(request) {
    console.log(`Request ${request.status}`)
    return request.text()
  })
  .then(function(raw_markdown) {
      elem.innerHTML = converter.makeHtml(raw_markdown)
  })
}

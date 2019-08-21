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

const generateLDEPDF = () => {
  let doc = new jsPDF();
  doc.text('BIBFRAME Workshop 2019', 10, 10);
  doc.text('Sidestepping the Graph', 10, 20);
  doc.save('sidestepping-graph.pdf');
}

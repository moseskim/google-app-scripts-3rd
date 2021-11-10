function myFunction12_08_01() {
  const id = '********';
  const body = DocumentApp.openById(id).getBody();

  body.replaceText('App sheet', 'AppSheet');
}

function myFunction12_08_02() {
  const id = '*********';
  const body = DocumentApp.openById(id).getBody();

  let result = null;
  while (result = body.findText('AppSheet', result)) {
    const text = result.getElement().asText();
    text.setUnderline(result.getStartOffset(), result.getEndOffsetInclusive(), true);
  }
}

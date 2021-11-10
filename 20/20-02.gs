function myFunction20_02_01() {
  const scriptProperties = PropertiesService.getScriptProperties();

  scriptProperties.setProperties({'강아지': '멍멍', '고양이': '야옹', '너구리': '너굴'});
  console.log(scriptProperties.getProperties()); //{'강아지': '멍멍', '고양이': '야옹', '너구리': '너굴'}
}
function myFunction22_03_01() {
  const url = 'https://tonari-it.com/scraping-test/';
  
  const response = UrlFetchApp.fetch(url);
  const html = response.getContentText();
  const title = html.match(/<title>.*?<\/title>/i)[0];
  console.log(removeTag_(title));

  const entries = html.match(/<h2>.*?<\/h2>/gi);
  for (const entry of entries) console.log(removeTag_(entry));  
}

function removeTag_(str) {
  return str.replace(/<\/?[^>]+>/gi, '');
}

function myFunction22_03_03() {
  const zipcode = '7830060';
  const url = 'https://zipcloud.ibsnet.co.jp/api/search?zipcode=' + zipcode;
  const response = UrlFetchApp.fetch(url);
  
  const obj = JSON.parse(response.getContentText());
  console.log(`상태 코드: ${obj.status}`);
  
  const result = obj.results[0];
  const {address1, address2, address3} = result;
  console.log(`都道府県名: ${address1}`);
  console.log(`市区町村名: ${address2}`);
  console.log(`町域名: ${address3}`);
}

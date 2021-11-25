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
  const busRouteId = '100100118';
  const url = 'http://ws.bus.go.kr/api/rest/buspos/getBusPosByRouteSt?serviceKey={serviceKey}&busRouteId=' + busRouteId + '&startOrd=1&endOrd=20&resultType=json';
  const response = UrlFetchApp.fetch(url);
  
  const obj = JSON.parse(response.getContentText());
  console.log(`obj: ${obj.msgHeader.headerMsg}`)
  console.log(`obj.msgBody.itemList: ${obj.msgBody.itemList}`);
  
  const result = obj.msgBody.itemList[0];
  const {vehId, plainNo, busType} = result;
  console.log(`VendorId: ${vehId}`);
  console.log(`Bus Number: ${plainNo}`);
  console.log(`Bus Type: ${busType}`);
}

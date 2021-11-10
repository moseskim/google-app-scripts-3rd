function myFunction22_02_01() {
  const response = UrlFetchApp.fetch('https://www.hanbit.co.kr/');
  console.log(response.getResponseCode()); //200

  const headers = response.getHeaders();
  for (const key in headers) console.log(key, headers[key]);

  console.log(response.getContentText());

  console.log(UrlFetchApp.getRequest('https://www.hanbit.co.kr/'));
}

function myFunction22_02_02() {
  const requests = [
    'https://www.hanbit.co.kr/',
    {
      url: 'https://www.hanbit.co.kr/images/hanbitpubnet_logo.jpg',
      method: 'get'
    }
  ];

  const responses = UrlFetchApp.fetchAll(requests);
  for (response of responses) console.log(response.getHeaders()['Content-Type']);
}

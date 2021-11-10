function myFunction07_12_01() {
  const str = '강';
  console.log(encodeURI(str));
  console.log(encodeURIComponent(str));

  const uri = 'https://www.google.com/search?q=강';
  console.log(encodeURI(uri));
  console.log(encodeURIComponent(uri));
}

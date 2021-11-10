function myFunction16_03_01() {
  console.log(Session.getActiveUser().getEmail()); //현재 사용자의 이메일 주소
  console.log(Session.getEffectiveUser().getEmail()); //실행 권한을 가진 사자의 메일 주소

  console.log(Session.getActiveUserLocale()); //ko
  console.log(Session.getScriptTimeZone()); //Asia/Seoul
  console.log(Session.getTemporaryActiveUserKey()); //사용자의 임시키
}

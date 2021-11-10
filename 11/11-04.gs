function myFunction11_04_01() {
  const id = '********0@group.calendar.google.com';
  const calendar = CalendarApp.getCalendarById(id);
  const date = new Date('2021/9/9');
  const event = calendar.getEventsForDay(date)[0];
  
  console.log(event.getTitle()); //광화문 방문
  console.log(event.getStartTime()); //시작시간(한국 표준시)
  console.log(event.getEndTime()); //종료시간(한국 표준시)
  console.log(event.getLocation()); //03045 서울 종로구 효자로 12 국립고궁박물관
  console.log(event.getDescription()); //저녁 시간에 늦지 않기

  console.log(event.getId()); //이벤트 ID
  console.log(event.isAllDayEvent()); //false
  console.log(event.isOwnedByMe()); //true

  console.log(event.getCreators()); //이벤트 생성자 배열
  console.log(event.getOriginalCalendarId()); //처음 생성된 캘린더 ID
  console.log(event.getLastUpdated()); //업데이트 시간(한국 표준시)
}

function myFunction11_04_02() { 
  const id = '********0@group.calendar.google.com';
  const calendar = CalendarApp.getCalendarById(id);
  const date = new Date('2021/9/9');
  const event = calendar.getEventsForDay(date)[0];
  const iCalId = event.getId();
  
  const eventById = calendar.getEventById(iCalId);
  console.log(eventById.getTitle()); //광화문 방문
}

function myFunction11_04_03() {
  const id = '********@group.calendar.google.com';
  const calendar = CalendarApp.getCalendarById(id);
  
  const title = '서울로 7017 방문';
  const startTime = new Date('2020/8/6 10:00');
  const endTime = new Date('2020/8/6 12:00');
  const options = {
    description: '서울로 7017 탐방',
    location: '04509 서울 중구 청파로 432'
  };
  
  const event = calendar.createEvent(title, startTime, endTime, options);
  console.log(event.getColor()); //
  
  event.setColor(CalendarApp.EventColor.RED);
  console.log(event.getColor()); //11
}

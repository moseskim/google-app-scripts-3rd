function myFunction11_03_01() {
  const id = '********@group.calendar.google.com';
  const calendar = CalendarApp.getCalendarById(id);

  console.log(calendar.getName()); //샘플 캘린더
  console.log(calendar.getId()); //캘린더 ID
  console.log(calendar.getDescription()); //샘플용 캘린더입니다
  console.log(calendar.getTimeZone()); //Asia/Seoul
  console.log(calendar.getColor()); //#7BD148

  console.log(calendar.isMyPrimaryCalendar()); //false
  console.log(calendar.isOwnedByMe()); //true

  console.log(calendar.isHidden()); //false
  console.log(calendar.isSelected()); //true
}

function myFunction11_03_02() {
  const id = '********@group.calendar.google.com';
  const calendar = CalendarApp.getCalendarById(id);

  const startDate = new Date('2021/9/6 10:30');
  const endDate = new Date('2021/9/10 14:00');
  const events = calendar.getEvents(startDate, endDate);
  
  for (const event of events) console.log(event.getTitle());  
}

function myFunction11_03_03() {
  const id = '********@group.calendar.google.com';
  const calendar = CalendarApp.getCalendarById(id);
  
  const date = new Date('2020/8/4');
  const options = {search: '회의'};
  const events = calendar.getEventsForDay(date, options);

  for (const event of events) console.log(event.getTitle());
}

function myFunction11_03_04() {
  const id = '********@group.calendar.google.com';
  const calendar = CalendarApp.getCalendarById(id);
  
  const title = '광화문 방문';
  const startTime = new Date('2021/9/10 17:00');
  const endTime = new Date('2021/9/10 19:00');
  const options = {
    description: '저녁 시간에 늦지 않기',
    location: '03045 서울 종로구 효자로 12 국립고궁박물관',
    guests: 'guest@example.com',
    sendInvites: true  
  };
  
  calendar.createEvent(title, startTime, endTime, options);
}

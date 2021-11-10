function myFunction11_02_01() {
  const id = '********@group.calendar.google.com';
  const calendar = CalendarApp.getCalendarById(id);
  console.log(calendar.getName()); //지정한 캘린더 제목

  const defaultCalendar = CalendarApp.getDefaultCalendar();
  console.log(defaultCalendar.getName()); //기본 캘린더 제목
}

function myFunction11_02_02() {
  const calendars = CalendarApp.getAllCalendars();
  
  for (const calendar of calendars) {
    console.log(calendar.getName());
  }
}

function myFunction11_02_03() {
  const name = '테스트 캘린더';
  const options = {
    timeZone: 'Asia/Seoul',
    color: CalendarApp.Color.INDIGO
  };
  
  CalendarApp.createCalendar(name, options);
}

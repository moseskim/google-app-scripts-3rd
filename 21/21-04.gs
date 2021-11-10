function myFunction21_04_01() {
  console.log(ScriptApp.getScriptId()); //スクリプトID
  console.log(ScriptApp.getProjectTriggers().length); //プロジェクトのトリガーの数
}

function myFunction21_04_02() {  
  const trigger = ScriptApp.getProjectTriggers()[0];
  
  console.log(trigger.getEventType().toString()); //ON_OPEN
  console.log(trigger.getHandlerFunction()); //myFunction21_02_01
  console.log(trigger.getTriggerSource().toString()); //SPREADSHEETS
  console.log(trigger.getTriggerSourceId()); //스프레드시트 ID
  console.log(trigger.getUniqueId()); //4744618
}

function myFunction21_04_03() {  
  const functionName = 'myFunction21_02_01';
  
  const d = new Date();
  d.setHours(23);
  d.setMinutes(59);
  
  ScriptApp.newTrigger(functionName).timeBased().at(d).create();
}

function myFunction21_04_04() {  
  const functionName = 'myFunction21_02_01';
  const triggers = ScriptApp.getProjectTriggers();
  
  const trigger = triggers.find(trigger => trigger.getHandlerFunction() === functionName);
  ScriptApp.deleteTrigger(trigger);
}

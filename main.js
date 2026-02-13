function doMain(){
  let callLogs = JSON.parse(getCallLogs());   // コールログ取得
  let calls = callLogs['_embedded']['calls']; // response jsonから必要箇所だけ取得
  let arryCalls = createSSArray(calls);       // Spreadsheetに挿入するために配列生成
  createSpreadSheet(arryCalls);               // Spreadsheet生成
}

// CallDataBankに認証してaccessTokenを返す
function authOdb(){
  const url = ODB_URL+'/authentications';
  let body = {
    'sid': SID,
    'email': ODB_USER,
    'password': ODB_PASSWORD,
  };
  let options = {
    'method': 'post',
    'contentType': 'application/json',
    'payload': JSON.stringify(body)
  };
  let response = JSON.parse(UrlFetchApp.fetch(url, options));
  return response['accessToken']
}

// CallDataBankからコールログを取得する
function getCallLogs(){
  const url = ODB_URL+'/behaviors/phone/calls?campaignId='+CAMPAIGN_ID+'&beginTimestamp='+getBeginTimeStamp()+'&endTimestamp='+getEndTimeStamp();
  let credentials = authOdb(); // 認証してaccessToken取得
  let options = {
    'method': 'get',
    'contentType': 'application/json',
    'headers': {
      'Authorization': 'Bearer ' + credentials
    },
    'muteHttpExceptions': true
  };
  return UrlFetchApp.fetch(url, options)
}

// 開始日時(Timestamp) 昨日の15:00~(UTC)
function getBeginTimeStamp(){
  let today = new Date();
  today.setDate(today.getDate()-1);
  let _date = new Date( today.getFullYear(), today.getMonth(), today.getDate(), 15, 00, 00 ) ;
  return Math.floor( _date / 1000 ).toString()
}

// 終了日時(Timestamp) ~今日の14:59(UTC)
function getEndTimeStamp(){
  let today = new Date();
  let _date = new Date( today.getFullYear(), today.getMonth(), today.getDate(), 14, 59, 59 ) ;
  return Math.floor( _date / 1000 ).toString()
}

// Spreadsheet用配列整形
function createSSArray(calls){
  for (let i in calls){
    let arryCall = [];
    let arryHead = SSOUTPUT[0];
    for (let j in arryHead) {
      arryCall.push(calls[i][arryHead[j]])
    }
    SSOUTPUT.push(arryCall);
  }
  return SSOUTPUT
}

// Spreadsheet 作成
function createSpreadSheet(arryCalls){
  const ss = SpreadsheetApp.create(SSNAME);
  const sheet = ss.getActiveSheet();
  const values = sheet.getDataRange().getValues();
  // Spreadsheetに出力
  sheet.getRange(1, 1, arryCalls.length, arryCalls[0].length).setValues(arryCalls);
  // Spreadsheetを出力先フォルダに移動
  const file = DriveApp.getFileById(ss.getId());
  const folder = DriveApp.getFolderById(DESTINATION);
  file.moveTo(folder);
}

// Omni DataBank API設定
const ODB_URL = 'https://api-2.omni-databank.com';                 // Omni DataBank API Endpoint URL
const SID='1';                                                   // Service Consumer ID: 通常は1
const ODB_USER = 'hoge@yourdomain.com';                          // Omni DataBank ユーザーID
const ODB_PASSWORD = 'passwordString';                           // Omni Databank パスワード
const CAMPAIGN_ID = 'nnn'                                        // 取得対象キャンペーンID: https://console.omni-databank.com/#/.../campaigns/***

// 出力先 Spreadsheet設定
const SSNAME = 'myCallLogs'                                      // Spreadsheet名
const DESTINATION = '*********************************';         // Spreadsheet出力先フォルダID: https://drive.google.com/drive/folders/*******************************

/// 出力項目設定配列:順番を入れ替えたり、項目を減らしたりできます
const SSOUTPUT = [
  [
    'visitedAt',
    'calledAt',
    'observerId',
    'observerLabel',
    'audienceId',
    'callId',
    'media',
    'source',
    'keyword',
    'pageView',
    'callDuration',
    'callerPhoneNumber',
    'trackingPhoneNumber',
    'hangupCode',
    'deviceType',
    'causedUrl',
    'recordedAudioUrl',
    'content',
    'matchtype',
    'referrerDomain',
    'gclid',
    'yclid'
  ]
];

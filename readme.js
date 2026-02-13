/*
# offlineCV to Spreadsheet from CallDataBank

CallDatabank APIを利用してコールログを取得しSpreadsheetに出力・保存します。

## 設定

各種設定を `env.gs` で行ってください。

### Spreadsheet出力項目

`env.gs` の `SSOUTPUT` の配列1行目に `API項目名` を入れた順番に出力されます。

| API項目名           | コールログ表示名   |
|---------------------|--------------------|
| visitedAt           | 来訪日時           |
| calledAt            | 入電日時           |
| observerId          | 観測点 ID          |
| observerLabel       | 観測点名           |
| audienceId          | 来訪者 ID          |
| callId              | 入電 ID            |
| media               | 広告種別           |
| source              | 広告媒体           |
| keyword             | KW                 |
| pageView            | PV                 |
| callDuration        | 通話時間           |
| callerPhoneNumber   | 発信者番号         |
| trackingPhoneNumber | 計測番号           |
| hangupCode          | 通話切断理由       |
| deviceType          | 端末種別           |
| causedUrl           | 直前に見ていた URL |
| recordedAudioUrl    | 録音通話           |
| content             | コンテンツ         |
| matchtype           | マッチタイプ       |
| referrerDomain      | リファラドメイン   |
| gclid               | Google クリック ID |
| yclid               | Yahoo! クリック ID |

*/

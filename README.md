# Nexpress

Next.jsをベースにExpressを使用したアプリケーションを構築するライブラリです。

---

## 使用方法

ファイルの配置や設定情報等を説明すると長くなるので、[@bizhermit/starter](https://www.npmjs.com/package/@bizhermit/starter)を使用して作成されたものを参考にしてください。

```ts
// src-nexpress/index.ts (@bizhermit/starterを使用して作成した場合)

import execute from "@bizhermit/nexpress";

execute({/* props */});
```

---

## 設定値
executeのprops（第一引数）に指定できるプロパティの一覧です。

#### rootDirname?: string
nextのルートディレクトリ  
初期値: ./src

#### i18nFilename?: string
i18nファイルパス  
初期値：./src/i18n.json

#### port?: number;
ポート番号  
初期値：3000

#### publicDir?: string;
publicディレクトリパス  
初期値: ./src/public

#### session?.secret?: string
クッキーIDの書き換え判定用の暗号化文字列  
初期値: \[uuidV4]

#### session?.name?: string
セッション名  
初期値: null（ランダム文字列）

#### session?.store?: (session: Storage) => expressSession.Store
セッションを記録しておくためのストレージ（DB等を使用して、アプリケーション非稼働時にもセッションを保持するための仕組み）  
初期値: null

#### session?.cookie?.httpOnly?: boolean
クライアント側でクッキー値を参照不可、書き換え不可にするかどうか。  
初期値: true

#### session?.cookie?.maxAge?: number
クッキー（セッション）の保持時間（ミリ秒）  
初期値: 1000 * 60 * 30（30分）

#### dev?.port?: number
開発モード：ポート番号  
初期値: 3000

#### dev?.publicDir?: string
開発モード：publicディレクトリパス  
初期値: ./src/public

#### dev?.session?.secret?: string
開発モード：クッキーIDの書き換え判定用の暗号化文字列  
初期値: \[uuidV4]

#### dev?.session?.name?: string
開発モード：セッション名  
初期値: null（ランダム文字列）

#### dev?.session?.store?: (session: Storage) => expressSession.Store
開発モード：セッションを記録しておくためのストレージ
初期値: null

#### dev?.session?.cookie?.httpOnly?: boolean
開発モード：クライアント側でクッキー値を参照不可、書き換え不可にするかどうか。  
初期値: true

#### dev?.session?.cookie?.maxAge?: number
開発モード：クッキー（セッション）の保持時間（ミリ秒）  
初期値: 1000 * 60 * 30（30分）
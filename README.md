# htmx-example

## 使い方

1. `npm install`
2. `npm run dev`
3. ブラウザで `http://localhost:3002` にアクセス

## htmxについて

HTMXは、Web開発においてHTMLを拡張するツール。JavaScriptを使用せずにHTML自体でより動的なインタラクションを実現することを目的としている。

## 特徴

1. **Ajaxのような動作**
   - ページ全体を再読み込みせずに特定のページ部分のみを更新可能。
   - ユーザー体験の向上とページの応答性の向上。

2. **簡単な学習曲線**
   - HTMLに近いため、HTMLに慣れている開発者にとって学習が容易。
   - JavaScriptの深い知識がなくても動的なWebページを作成可能。

3. **軽量**
   - 小さく軽量であり、ページの読み込み速度に大きな影響を与えない。

4. **互換性**
   - 既存のHTMLやCSS、JavaScriptと高い互換性。
   - 既存のプロジェクトに簡単に組み込み可能。

5. **プログレッシブエンハンスメント**
   - 基本的なHTMLの機能に依存しつつ、利用可能な場合にはより豊かなインタラクションを提供。

HTMXは、JavaScriptを少なくしてWeb開発を行いたい、またはHTMLとCSSに焦点を当てた開発を行いたい開発者にとって有用なツール。

## htmxの使い方

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HTMX Example</title>
  <!-- HTMXライブラリの読み込み -->
  <script src="https://unpkg.com/htmx.org"></script>
</head>
<body>

<!-- コンテンツを更新するためのコンテナ -->
<div>
  <!-- HTMXを使ってサーバーからデータを取得し、 <p id="content">HTMX Example</p> を更新 -->
  <h2 id="content">Click button.</h2>
  <button hx-get="/random_number" hx-target="#content">Generate Random Number</button>
</div>

</body>
</html>
```

HTMXの`hx-get`と`hx-target`は、Webページの特定部分を動的に更新するために使用される属性。これらはページの再読み込みなしにサーバーと通信し、特定のHTML要素を更新するために役立つ。

### hx-get

- **用途**: HTTP GETリクエストを送信する。
- **動作**: この属性が設定された要素（例：ボタン、リンク）がクリックされると、指定されたURLにGETリクエストが送信される。
- **使用例**: ページの一部を更新するためのデータをサーバーから取得。

### hx-target

- **用途**: サーバーからの応答を表示するHTML要素を指定。
- **動作**: 例えば、`hx-target="#someElement"`と設定すると、応答はidが`someElement`の要素内に表示される。
- **組み合わせ**: 通常、`hx-get`と組み合わせて使用され、GETリクエストによるデータを特定の要素に表示。

# memo

## Presentational CompornentとContainer Component
Presentational Componentは見た目を実装するためのコンポーネント
Container Compornentはロジックのみを実装するコンポーネント
2つに分けることによって保守性の高いコードにすることができる

## Atomic Design
デザインを以下の5つに分けて構築していく、デザインシステム

|階層名|説明|例|
|--|--|--|
|Atoms|これ以上分割できない最小の要素|ボタン、テキスト|
|Molecules|複数のAtomsを組み合わせて構築|ラベル付きのテキストボックス|
|Organisms|Moleculesよりも具体的な要素|入力フォーム、ヘッダー|
|Templates|ページ全体のレイアウト|ページのレイアウト|
|Pages|ページそのもの|ページそのもの|

### Atoms
文章や色などのパラメータはpropsで受け取るようにする

### Molecules
Atomsを組み合わせて作成するコンポーネント
ここにも状態や振る舞いは持たせない
一つの役割を持ったUIを実装するようにする

### Organisms
この階層から振る舞いや状態を持たせるようにする
そのため、実装の際はこの階層内でPresentational ComponentとContainer Componentに分けて実装する（一つの階層だが1ファイルで対応しているわけではないので注意）

### Templates
ページ全体の見た目を構築するための階層

### Pages
Templatesで見た目の実装は完了しているため、状態の管理やrouter、APIコールなどを実装していく
Nextではページコンポーネントで実装していく


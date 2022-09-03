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
|Organisms|Moleculesよりも具体的な要素|入力フォーム全体|
|Templates|ページ全体のレイアウト|ページのレイアウト|
|Pages|ページそのもの|ページそのもの|

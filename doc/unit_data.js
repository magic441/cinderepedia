'use strict'
const unit_data = [
	{
		"name": "くノ一あやめ忍法帖",
		"count": 1,
		"member": [
			"浜口あやめ"
		]
	},
	{
		"name": "ヘレン生誕祭",
		"count": 1,
		"member": [
			"ヘレン"
		]
	},
	{
		"name": "Rosenburg Engel",
		"count": 1,
		"member": [
			"神崎蘭子"
		]
	},
	{
		"name": "アーティスター",
		"count": 2,
		"member": [
			"吉岡沙紀",
			"小松伊吹"
		]
	},
	{
		"name": "あーにゃんみくにゃん",
		"count": 2,
		"member": [
			"アナスタシア",
			"前川みく"
		]
	},
	{
		"name": "イカバラプリンセス",
		"count": 2,
		"member": [
			"櫻井桃華",
			"市原仁奈"
		]
	},
	{
		"name": "インディゴ・ベル",
		"count": 2,
		"member": [
			"高森藍子",
			"道明寺歌鈴"
		]
	},
	{
		"name": "笑美と鈴帆の爆笑エブリデイ",
		"count": 2,
		"member": [
			"難波笑美",
			"上田鈴帆"
		]
	},
	{
		"name": "エターナルレディエイト",
		"count": 2,
		"member": [
			"佐藤心",
			"沢田麻理菜"
		]
	},
	{
		"name": "越後小町",
		"count": 2,
		"member": [
			"江上椿",
			"片桐早苗"
		]
	},
	{
		"name": "エトワール・レビュー",
		"count": 2,
		"member": [
			"福山舞",
			"奥山沙織"
		]
	},
	{
		"name": "エルドリッチ・ロアテラー",
		"count": 2,
		"member": [
			"白坂小梅",
			"松永涼"
		]
	},
	{
		"name": "エレガントインモラリスト",
		"count": 2,
		"member": [
			"和久井留美",
			"東郷あい"
		]
	},
	{
		"name": "オーヴァーナイト・ショウダウン",
		"count": 2,
		"member": [
			"兵藤レナ",
			"篠原礼"
		]
	},
	{
		"name": "岡山親善大使",
		"count": 2,
		"member": [
			"乙倉悠貴",
			"藤原肇"
		]
	},
	{
		"name": "ガールズネットワーク",
		"count": 2,
		"member": [
			"桐生つかさ",
			"佐久間まゆ"
		]
	},
	{
		"name": "ガトリング☆ビーンズ",
		"count": 2,
		"member": [
			"片桐早苗",
			"大和亜季"
		]
	},
	{
		"name": "かな☆かな☆ふぁんしー",
		"count": 2,
		"member": [
			"今井加奈",
			"三村かな子"
		]
	},
	{
		"name": "壁サーの花",
		"count": 2,
		"member": [
			"大西由里子",
			"荒木比奈"
		]
	},
	{
		"name": "カワスウィーティーなボクはぁと(仮)",
		"count": 2,
		"member": [
			"輿水幸子",
			"佐藤心"
		]
	},
	{
		"name": "キタキターズ",
		"count": 2,
		"member": [
			"喜多日菜子",
			"喜多見柚"
		]
	},
	{
		"name": "ギョギョっとニャンだふる",
		"count": 2,
		"member": [
			"前川みく",
			"浅利七海"
		]
	},
	{
		"name": "クラベールツイン",
		"count": 2,
		"member": [
			"関裕美",
			"服部瞳子"
		]
	},
	{
		"name": "グロリアス・コード",
		"count": 2,
		"member": [
			"クラリス",
			"望月聖"
		]
	},
	{
		"name": "月下氷姫",
		"count": 2,
		"member": [
			"藤原肇",
			"鷺沢文香"
		]
	},
	{
		"name": "サーチ&ジャッジメント",
		"count": 2,
		"member": [
			"安斎都",
			"冴島清美"
		]
	},
	{
		"name": "サイキックエナジー",
		"count": 2,
		"member": [
			"浜口あやめ",
			"堀裕子"
		]
	},
	{
		"name": "サイキックヒーツ",
		"count": 2,
		"member": [
			"日野茜",
			"堀裕子"
		]
	},
	{
		"name": "サイバーグラス",
		"count": 2,
		"member": [
			"上条春菜",
			"荒木比奈"
		]
	},
	{
		"name": "サイレントウィンド",
		"count": 2,
		"member": [
			"梅木音葉",
			"鷺沢文香"
		]
	},
	{
		"name": "サイレントスクリーマー",
		"count": 2,
		"member": [
			"森久保乃々",
			"星輝子"
		]
	},
	{
		"name": "サクラブロッサム",
		"count": 2,
		"member": [
			"大槻唯",
			"相川千夏"
		]
	},
	{
		"name": "さつきの頃",
		"count": 2,
		"member": [
			"浜口あやめ",
			"片桐早苗"
		]
	},
	{
		"name": "山紫水明",
		"count": 2,
		"member": [
			"藤原肇",
			"依田芳乃"
		]
	},
	{
		"name": "ジェネレーションオブサマー",
		"count": 2,
		"member": [
			"島村卯月",
			"本田未央"
		]
	},
	{
		"name": "ジュール・ドゥ・ノア",
		"count": 2,
		"member": [
			"大沼くるみ",
			"高峯のあ"
		]
	},
	{
		"name": "襲撃!デビルアツミ",
		"count": 2,
		"member": [
			"棟方愛海",
			"柳清良"
		]
	},
	{
		"name": "シャイニー・アーリーデイズ",
		"count": 2,
		"member": [
			"三船美優",
			"安部菜々"
		]
	},
	{
		"name": "しゅがしゅが☆み〜ん",
		"count": 2,
		"member": [
			"佐藤心",
			"安部菜々"
		]
	},
	{
		"name": "春舞佳人／秋舞佳人",
		"count": 2,
		"member": [
			"高垣楓",
			"鷹富士茄子"
		]
	},
	{
		"name": "シュクレ・プリュム",
		"count": 2,
		"member": [
			"榊原里美",
			"槙原志保"
		]
	},
	{
		"name": "白波便り",
		"count": 2,
		"member": [
			"鷺沢文香",
			"瀬名詩織"
		]
	},
	{
		"name": "シロクロラビッツ",
		"count": 2,
		"member": [
			"兵藤レナ",
			"水木聖來"
		]
	},
	{
		"name": "シンフォニック・ワールド",
		"count": 2,
		"member": [
			"有浦柑奈",
			"梅木音葉"
		]
	},
	{
		"name": "スウィート・ソアー",
		"count": 2,
		"member": [
			"佐久間まゆ",
			"橘ありす"
		]
	},
	{
		"name": "スウィートラヴァーズ",
		"count": 2,
		"member": [
			"十時愛梨",
			"三村かな子"
		]
	},
	{
		"name": "スタースクレイパー",
		"count": 2,
		"member": [
			"矢口美羽",
			"楊菲菲"
		]
	},
	{
		"name": "スノーフィーユ",
		"count": 2,
		"member": [
			"佐城雪美",
			"柳瀬美由紀"
		]
	},
	{
		"name": "ストレートフルート",
		"count": 2,
		"member": [
			"中野有香",
			"水本ゆかり"
		]
	},
	{
		"name": "スパイスダンサーズ",
		"count": 2,
		"member": [
			"相馬夏美",
			"並木芽衣子"
		]
	},
	{
		"name": "スパニッシュスタイル",
		"count": 2,
		"member": [
			"堀裕子",
			"氏家むつみ"
		]
	},
	{
		"name": "スピリチュアルプレイヤー",
		"count": 2,
		"member": [
			"藤居朋",
			"依田芳乃"
		]
	},
	{
		"name": "すまいるはっぴーもんすたー",
		"count": 2,
		"member": [
			"有浦柑奈",
			"野々村そら"
		]
	},
	{
		"name": "星纏天女",
		"count": 2,
		"member": [
			"鷺沢文香",
			"鷹富士茄子"
		]
	},
	{
		"name": "セーラーマリナー",
		"count": 2,
		"member": [
			"水木聖來",
			"松本沙理奈"
		]
	},
	{
		"name": "セプテンバーリーブス",
		"count": 2,
		"member": [
			"栗原ネネ",
			"日下部若葉"
		]
	},
	{
		"name": "セブンス・ワンダフル",
		"count": 2,
		"member": [
			"一ノ瀬志希",
			"浅利七海"
		]
	},
	{
		"name": "センゴク☆ランブ",
		"count": 2,
		"member": [
			"丹羽仁美",
			"浜口あやめ"
		]
	},
	{
		"name": "そよかぜツヴィトーク",
		"count": 2,
		"member": [
			"緒方智絵里",
			"アナスタシア"
		]
	},
	{
		"name": "ソラーナ・チーカ",
		"count": 2,
		"member": [
			"小日向美穂",
			"乙倉悠貴"
		]
	},
	{
		"name": "ソル・カマル",
		"count": 2,
		"member": [
			"ナターリア",
			"ライラ"
		]
	},
	{
		"name": "ダークイルミネイト",
		"count": 2,
		"member": [
			"二宮飛鳥",
			"神崎蘭子"
		]
	},
	{
		"name": "チーム・フラワー",
		"count": 2,
		"member": [
			"椎名法子",
			"大原みちる"
		]
	},
	{
		"name": "ちぇりこっと♪",
		"count": 2,
		"member": [
			"椎名法子",
			"緒方智絵里"
		]
	},
	{
		"name": "デア・アウローラ",
		"count": 2,
		"member": [
			"速水奏",
			"新田美波"
		]
	},
	{
		"name": "ディヴァイニア",
		"count": 2,
		"member": [
			"クラリス",
			"梅木音葉"
		]
	},
	{
		"name": "ディテクティブヴァーサス",
		"count": 2,
		"member": [
			"安斎都",
			"古澤頼子"
		]
	},
	{
		"name": "デモニッシュレディース",
		"count": 2,
		"member": [
			"服部瞳子",
			"大和亜季"
		]
	},
	{
		"name": "テンプテーション・アイズ",
		"count": 2,
		"member": [
			"塩見周子",
			"宮本フレデリカ"
		]
	},
	{
		"name": "ドーリー・トライン",
		"count": 2,
		"member": [
			"藤居朋",
			"白菊ほたる"
		]
	},
	{
		"name": "ドミ◎ドナ",
		"count": 2,
		"member": [
			"椎名法子",
			"財前時子"
		]
	},
	{
		"name": "ドリームアウェイ",
		"count": 2,
		"member": [
			"喜多日菜子",
			"佐久間まゆ"
		]
	},
	{
		"name": "トワイライトシャイン",
		"count": 2,
		"member": [
			"メアリー・コクラン",
			"大槻唯"
		]
	},
	{
		"name": "ナイトシーカーズ",
		"count": 2,
		"member": [
			"古澤頼子",
			"八神マキノ"
		]
	},
	{
		"name": "ナイトディーヴァ",
		"count": 2,
		"member": [
			"桐野アヤ",
			"小室千奈美"
		]
	},
	{
		"name": "ナイトブルーレザー",
		"count": 2,
		"member": [
			"伊集院惠",
			"ケイト"
		]
	},
	{
		"name": "ナチュラルハーモニー",
		"count": 2,
		"member": [
			"緒方智絵里",
			"高森藍子"
		]
	},
	{
		"name": "忍武☆繚乱",
		"count": 2,
		"member": [
			"浜口あやめ",
			"脇山珠美"
		]
	},
	{
		"name": "ノーティギャルズ",
		"count": 2,
		"member": [
			"向井拓海",
			"藤本里奈"
		]
	},
	{
		"name": "ハートハーモナイズ",
		"count": 2,
		"member": [
			"五十嵐響子",
			"吉岡沙紀"
		]
	},
	{
		"name": "白銀ラススヴィエート",
		"count": 2,
		"member": [
			"アナスタシア",
			"神崎蘭子"
		]
	},
	{
		"name": "羽衣小町",
		"count": 2,
		"member": [
			"小早川紗枝",
			"塩見周子"
		]
	},
	{
		"name": "はぴ☆かむ",
		"count": 2,
		"member": [
			"今井加奈",
			"矢口美羽"
		]
	},
	{
		"name": "バリスタイル",
		"count": 2,
		"member": [
			"桐野アヤ",
			"槙原志保"
		]
	},
	{
		"name": "春色姫君",
		"count": 2,
		"member": [
			"小早川紗枝",
			"小日向美穂"
		]
	},
	{
		"name": "春のご飯パン祭り",
		"count": 2,
		"member": [
			"日野茜",
			"大原みちる"
		]
	},
	{
		"name": "ハワイアンツイン",
		"count": 2,
		"member": [
			"棟方愛海",
			"矢口美羽"
		]
	},
	{
		"name": "ハンサムレディース",
		"count": 2,
		"member": [
			"東郷あい",
			"木場真奈美"
		]
	},
	{
		"name": "ピーチ・フレーバー",
		"count": 2,
		"member": [
			"櫻井桃華",
			"一ノ瀬志希"
		]
	},
	{
		"name": "ビートシューター",
		"count": 2,
		"member": [
			"結城晴",
			"的場梨沙"
		]
	},
	{
		"name": "ヒーローヴァーサス",
		"count": 2,
		"member": [
			"小関麗奈",
			"南条光"
		]
	},
	{
		"name": "ひつじさんとうさぎさん",
		"count": 2,
		"member": [
			"古賀小春",
			"結城晴"
		]
	},
	{
		"name": "日菜子と愛海の妄想ワールド",
		"count": 2,
		"member": [
			"棟方愛海",
			"喜多日菜子"
		]
	},
	{
		"name": "ピュアリーツイン",
		"count": 2,
		"member": [
			"浅野風香",
			"奥山沙織"
		]
	},
	{
		"name": "ヒロイックエンジェル",
		"count": 2,
		"member": [
			"南条光",
			"輿水幸子"
		]
	},
	{
		"name": "ファミリアツイン",
		"count": 2,
		"member": [
			"城ヶ崎美嘉",
			"城ヶ崎莉嘉"
		]
	},
	{
		"name": "フィオレンティナ",
		"count": 2,
		"member": [
			"相葉夕美",
			"西園寺琴歌"
		]
	},
	{
		"name": "フィルム・メモリアル",
		"count": 2,
		"member": [
			"高森藍子",
			"江上椿"
		]
	},
	{
		"name": "フェアリーテイル＊マイテイル",
		"count": 2,
		"member": [
			"小日向美穂",
			"藤原肇"
		]
	},
	{
		"name": "フォーリンシーサイド",
		"count": 2,
		"member": [
			"川島瑞樹",
			"村上巴"
		]
	},
	{
		"name": "ブリヤントノワール",
		"count": 2,
		"member": [
			"黒川千秋",
			"水野翠"
		]
	},
	{
		"name": "ブレッザ・マリーナ",
		"count": 2,
		"member": [
			"瀬名詩織",
			"三船美優"
		]
	},
	{
		"name": "ふわっとカントリー",
		"count": 2,
		"member": [
			"及川雫",
			"十時愛梨"
		]
	},
	{
		"name": "ベター・グロウ",
		"count": 2,
		"member": [
			"高橋礼子",
			"柊志乃"
		]
	},
	{
		"name": "リープ・スコアラー",
		"count": 2,
		"member": [
			"姫川友紀",
			"結城晴"
		]
	},
	{
		"name": "みくにゃんご",
		"count": 2,
		"member": [
			"辻野あかり",
			"前川みく"
		]
	},
	{
		"name": "ミステリアスアイズ",
		"count": 2,
		"member": [
			"速水奏",
			"高垣楓"
		]
	},
	{
		"name": "ミステリアスガールズ",
		"count": 2,
		"member": [
			"藤居朋",
			"堀裕子"
		]
	},
	{
		"name": "ミステリックガーデン",
		"count": 2,
		"member": [
			"二宮飛鳥",
			"相葉夕美"
		]
	},
	{
		"name": "ミス・フォーチュン",
		"count": 2,
		"member": [
			"白菊ほたる",
			"鷹富士茄子"
		]
	},
	{
		"name": "ムシバレイナと小春ちゃん",
		"count": 2,
		"member": [
			"古賀小春",
			"小関麗奈"
		]
	},
	{
		"name": "モノクロームリリィ",
		"count": 2,
		"member": [
			"速水奏",
			"北条加蓮"
		]
	},
	{
		"name": "ももべりー",
		"count": 2,
		"member": [
			"櫻井桃華",
			"橘ありす"
		]
	},
	{
		"name": "もりさんくちゅあり",
		"count": 2,
		"member": [
			"向井拓海",
			"森久保乃々"
		]
	},
	{
		"name": "ピーチ・フレーバー",
		"count": 2,
		"member": [
			"櫻井桃華",
			"一ノ瀬志希"
		]
	},
	{
		"name": "ピッコラ・マリオネッタ",
		"count": 2,
		"member": [
			"桐野アヤ",
			"遊佐こずえ"
		]
	},
	{
		"name": "ラブリーダイナーズ",
		"count": 2,
		"member": [
			"高垣楓",
			"並木芽衣子"
		]
	},
	{
		"name": "リトルヒーロー",
		"count": 2,
		"member": [
			"南条光",
			"横山千佳"
		]
	},
	{
		"name": "ルミナスボーダー",
		"count": 2,
		"member": [
			"小松伊吹",
			"速水奏"
		]
	},
	{
		"name": "レイジー・レイジー",
		"count": 2,
		"member": [
			"宮本フレデリカ",
			"一ノ瀬志希"
		]
	},
	{
		"name": "レイ・ディスタンス",
		"count": 2,
		"member": [
			"高垣楓",
			"川島瑞樹"
		]
	},
	{
		"name": "レッドベリィズ",
		"count": 2,
		"member": [
			"橘ありす",
			"村上巴"
		]
	},
	{
		"name": "レディビースト",
		"count": 2,
		"member": [
			"高橋礼子",
			"木場真奈美"
		]
	},
	{
		"name": "ロボフレンズ",
		"count": 2,
		"member": [
			"池袋晶葉",
			"ライラ"
		]
	},
	{
		"name": "Ai's",
		"count": 2,
		"member": [
			"高森藍子",
			"十時愛梨"
		]
	},
	{
		"name": "＊(Asterisk)",
		"count": 2,
		"member": [
			"前川みく",
			"多田李衣菜"
		]
	},
	{
		"name": "B.B",
		"count": 2,
		"member": [
			"及川雫",
			"大沼くるみ"
		]
	},
	{
		"name": "BRIGHT:LIGHTS",
		"count": 2,
		"member": [
			"橘ありす",
			"鷺沢文香"
		]
	},
	{
		"name": "Dimension-3",
		"count": 2,
		"member": [
			"一ノ瀬志希",
			"二宮飛鳥"
		]
	},
	{
		"name": "ERICATHY",
		"count": 2,
		"member": [
			"赤西瑛梨華",
			"キャシー・グラハム"
		]
	},
	{
		"name": "FrenchKisS",
		"count": 2,
		"member": [
			"宮本フレデリカ",
			"速水奏"
		]
	},
	{
		"name": "Flowery",
		"count": 2,
		"member": [
			"高森藍子",
			"相葉夕美"
		]
	},
	{
		"name": "HappyHappyTwin",
		"count": 2,
		"member": [
			"双葉杏",
			"諸星きらり"
		]
	},
	{
		"name": "Jumpin'Joker",
		"count": 2,
		"member": [
			"赤城みりあ",
			"白坂小梅"
		]
	},
	{
		"name": "littlebell",
		"count": 2,
		"member": [
			"クラリス",
			"白菊ほたる"
		]
	},
	{
		"name": "LOVE LAIKA",
		"count": 2,
		"member": [
			"新田美波",
			"アナスタシア"
		]
	},
	{
		"name": "miroir",
		"count": 2,
		"member": [
			"久川凪",
			"久川颯"
		]
	},
	{
		"name": "My-Style Revo",
		"count": 2,
		"member": [
			"砂塚あきら",
			"早坂美玲"
		]
	},
	{
		"name": "NH NETWORK",
		"count": 2,
		"member": [
			"高峯のあ",
			"藤原肇"
		]
	},
	{
		"name": "NiGHT ENCOUNTER",
		"count": 2,
		"member": [
			"星輝子",
			"白坂小梅"
		]
	},
	{
		"name": "NOA-HAL",
		"count": 2,
		"member": [
			"高峯のあ",
			"結城晴"
		]
	},
	{
		"name": "P・U",
		"count": 2,
		"member": [
			"堀裕子",
			"安部菜々"
		]
	},
	{
		"name": "Red-Solids",
		"count": 2,
		"member": [
			"財前時子",
			"桐生つかさ"
		]
	},
	{
		"name": "Rock the Beat",
		"count": 2,
		"member": [
			"多田李衣菜",
			"木村夏樹"
		]
	},
	{
		"name": "Rosenburg Alptraum",
		"count": 2,
		"member": [
			"白坂小梅",
			"神崎蘭子"
		]
	},
	{
		"name": "Shock'in Pink!",
		"count": 2,
		"member": [
			"藤本里奈",
			"早坂美玲"
		]
	},
	{
		"name": "Sleepy Princess",
		"count": 2,
		"member": [
			"関裕美",
			"櫻井桃華"
		]
	},
	{
		"name": "Snow glasses",
		"count": 2,
		"member": [
			"大槻唯",
			"上条春菜"
		]
	},
	{
		"name": "VelvetRose",
		"count": 2,
		"member": [
			"黒埼ちとせ",
			"白雪千夜"
		]
	},
	{
		"name": "World Creator",
		"count": 2,
		"member": [
			"ヘレン",
			"高峯のあ"
		]
	},
	{
		"name": "可惜夜月",
		"count": 3,
		"member": [
			"道明寺歌鈴",
			"脇山珠美",
			"浜口あやめ"
		]
	},
	{
		"name": "アニマルパーク",
		"count": 3,
		"member": [
			"日下部若葉",
			"三船美優",
			"市原仁奈"
		]
	},
	{
		"name": "アンダーザデスク",
		"count": 3,
		"member": [
			"森久保乃々",
			"星輝子",
			"佐久間まゆ"
		]
	},
	{
		"name": "イタリアンスタイル",
		"count": 3,
		"member": [
			"榊原里美",
			"ヘレン",
			"野々村そら"
		]
	},
	{
		"name": "ウィンター・F・ドライバーズ",
		"count": 3,
		"member": [
			"原田美世",
			"鷹富士茄子",
			"姫川友紀"
		]
	},
	{
		"name": "エイプリル・ドリーム～ミステリー・ラン～",
		"count": 3,
		"member": [
			"安斎都",
			"ヘレン",
			"上田鈴帆"
		]
	},
	{
		"name": "ガールズ・パワー",
		"count": 3,
		"member": [
			"月宮雅",
			"岸部彩華",
			"衛藤美紗希"
		]
	},
	{
		"name": "カワイイボクと142's",
		"count": 3,
		"member": [
			"輿水幸子",
			"白坂小梅",
			"星輝子"
		]
	},
	{
		"name": "カミング・オブ・エイジ!",
		"count": 3,
		"member": [
			"安部菜々",
			"三船美優",
			"佐藤心"
		]
	},
	{
		"name": "京町乙女",
		"count": 3,
		"member": [
			"緒方智絵里",
			"神谷奈緒",
			"諸星きらり"
		]
	},
	{
		"name": "きらきらモデルfromNSC",
		"count": 3,
		"member": [
			"白菊ほたる",
			"松尾千鶴",
			"佐藤心"
		]
	},
	{
		"name": "グラスフルワールド",
		"count": 3,
		"member": [
			"浅野風香",
			"上条春菜",
			"北川真尋"
		]
	},
	{
		"name": "クリスマスパーティー13's",
		"count": 3,
		"member": [
			"白菊ほたる",
			"成宮由愛",
			"村上巴"
		]
	},
	{
		"name": "ゴスペルシスターズ",
		"count": 3,
		"member": [
			"龍崎薫",
			"有浦柑奈",
			"藤居朋"
		]
	},
	{
		"name": "サクラ・シンクロニシティ",
		"count": 3,
		"member": [
			"乙倉悠貴",
			"二宮飛鳥",
			"村上巴"
		]
	},
	{
		"name": "桜舞姫",
		"count": 3,
		"member": [
			"一ノ瀬志希",
			"塩見周子",
			"相葉夕美"
		]
	},
	{
		"name": "サマーパラダイス",
		"count": 3,
		"member": [
			"アナスタシア",
			"前川みく",
			"相葉夕美"
		]
	},
	{
		"name": "サマーライブセーラー",
		"count": 3,
		"member": [
			"栗原ネネ",
			"新田美波",
			"三好紗南"
		]
	},
	{
		"name": "ジャーニースター",
		"count": 3,
		"member": [
			"間中美里",
			"伊集院惠",
			"並木芽衣子"
		]
	},
	{
		"name": "シャイニングゴッドチェリー",
		"count": 3,
		"member": [
			"星輝子",
			"神谷奈緒",
			"緒方智絵里"
		]
	},
	{
		"name": "ジャポネスク",
		"count": 3,
		"member": [
			"鷹富士茄子",
			"道明寺歌鈴",
			"依田芳乃"
		]
	},
	{
		"name": "センス・メイカー",
		"count": 3,
		"member": [
			"三好紗南",
			"双葉杏",
			"橘ありす"
		]
	},
	{
		"name": "チャレンジクッキング",
		"count": 3,
		"member": [
			"西園寺琴歌",
			"橘ありす",
			"姫川友紀"
		]
	},
	{
		"name": "ツキヨミ☆ランブ",
		"count": 3,
		"member": [
			"丹羽仁美",
			"脇山珠美",
			"浜口あやめ"
		]
	},
	{
		"name": "ドイツスタイル",
		"count": 3,
		"member": [
			"大原みちる",
			"伊集院惠",
			"北川真尋"
		]
	},
	{
		"name": "トリクロマティック・ナチュレ",
		"count": 3,
		"member": [
			"五十嵐響子",
			"高森藍子",
			"北条加蓮"
		]
	},
	{
		"name": "トリプルスターズ",
		"count": 3,
		"member": [
			"本田未央",
			"北条加蓮",
			"遊佐こずえ"
		]
	},
	{
		"name": "ニューイヤースタイル",
		"count": 3,
		"member": [
			"池袋晶葉",
			"ライラ",
			"的場梨沙"
		]
	},
	{
		"name": "ニューウェーブ",
		"count": 3,
		"member": [
			"村松さくら",
			"大石泉",
			"土屋亜子"
		]
	},
	{
		"name": "ニュー・ワールド・オーダー",
		"count": 3,
		"member": [
			"クラリス",
			"ナターリア",
			"ヘレン"
		]
	},
	{
		"name": "悩殺☆おいろけーズ",
		"count": 3,
		"member": [
			"浜口あやめ",
			"松本沙理奈",
			"桃井あずき"
		]
	},
	{
		"name": "ハートウォーマー",
		"count": 3,
		"member": [
			"井村雪菜",
			"藤居朋",
			"杉坂海"
		]
	},
	{
		"name": "ハロウィンヴァンパイア",
		"count": 3,
		"member": [
			"関裕美",
			"木場真奈美",
			"喜多見柚"
		]
	},
	{
		"name": "パワフルヒーラーズ",
		"count": 3,
		"member": [
			"池袋晶葉",
			"首藤葵",
			"岡崎泰葉"
		]
	},
	{
		"name": "ビビッドカラーエイジ／Age16",
		"count": 3,
		"member": [
			"今井加奈",
			"藤原肇",
			"高森藍子"
		]
	},
	{
		"name": "フラワーガーデン",
		"count": 3,
		"member": [
			"西園寺琴歌",
			"服部瞳子",
			"相葉夕美"
		]
	},
	{
		"name": "ホーリーナイトウィッシュ",
		"count": 3,
		"member": [
			"イヴ・サンタクロース",
			"クラリス",
			"望月聖"
		]
	},
	{
		"name": "ホットサマーウインド",
		"count": 3,
		"member": [
			"喜多見柚",
			"高垣楓",
			"佐久間まゆ"
		]
	},
	{
		"name": "ポップングリッター",
		"count": 3,
		"member": [
			"古賀小春",
			"佐々木千枝",
			"赤城みりあ"
		]
	},
	{
		"name": "ももぺあべりー",
		"count": 3,
		"member": [
			"櫻井桃華",
			"的場梨沙",
			"橘ありす"
		]
	},
	{
		"name": "ラフ&フィアーズ",
		"count": 3,
		"member": [
			"早坂美玲",
			"白坂小梅",
			"的場梨沙"
		]
	},
	{
		"name": "リトルスマイルズ",
		"count": 3,
		"member": [
			"赤城みりあ",
			"佐々木千枝",
			"横山千佳"
		]
	},
	{
		"name": "リトルチェリーブロッサム",
		"count": 3,
		"member": [
			"岡崎泰葉",
			"櫻井桃華",
			"龍崎薫"
		]
	},
	{
		"name": "るーむ・ますたーず",
		"count": 3,
		"member": [
			"池袋晶葉",
			"白坂小梅",
			"星輝子"
		]
	},
	{
		"name": "レインドロップ",
		"count": 3,
		"member": [
			"原田美世",
			"脇山珠美",
			"大槻唯"
		]
	},
	{
		"name": "ロッキングガール",
		"count": 3,
		"member": [
			"多田李衣菜",
			"三村かな子",
			"城ヶ崎莉嘉"
		]
	},
	{
		"name": "Age14",
		"count": 3,
		"member": [
			"三好紗南",
			"森久保乃々",
			"柳瀬美由紀"
		]
	},
	{
		"name": "A-14",
		"count": 3,
		"member": [
			"早坂美玲",
			"森久保乃々",
			"三好紗南"
		]
	},
	{
		"name": "BLACK DESIRE",
		"count": 3,
		"member": [
			"星輝子",
			"黒川千秋",
			"大西由里子"
		]
	},
	{
		"name": "individuals（インディヴィジュアルズ）",
		"count": 3,
		"member": [
			"森久保乃々",
			"星輝子",
			"早坂美玲"
		]
	},
	{
		"name": "JKと博士とフェニックス",
		"count": 3,
		"member": [
			"桐生つかさ",
			"池袋晶葉",
			"上田鈴帆"
		]
	},
	{
		"name": "new generations／ニュージェネレーション",
		"count": 3,
		"member": [
			"島村卯月",
			"渋谷凛",
			"本田未央"
		]
	},
	{
		"name": "#ユニット名募集中／ネクストニューカマー",
		"count": 3,
		"member": [
			"辻野あかり",
			"砂塚あきら",
			"夢見りあむ"
		]
	},
	{
		"name": "アップトゥデイト",
		"count": 3,
		"member": [
			"水木聖來",
			"松本沙理奈",
			"太田優"
		]
	},
	{
		"name": "アンチェイン・シグナル",
		"count": 3,
		"member": [
			"木場真奈美",
			"星輝子",
			"水木聖來"
		]
	},
	{
		"name": "ギャルズパーティー",
		"count": 3,
		"member": [
			"仙崎恵磨",
			"藤本里奈",
			"大槻唯"
		]
	},
	{
		"name": "クリア・ジェイド",
		"count": 3,
		"member": [
			"依田芳乃",
			"今井加奈",
			"緒方智絵里"
		]
	},
	{
		"name": "クリスプ・パフォーマー",
		"count": 3,
		"member": [
			"藤本里奈",
			"大石泉",
			"江上椿"
		]
	},
	{
		"name": "シガー・スウィート",
		"count": 3,
		"member": [
			"成宮由愛",
			"藤居朋",
			"浅野風香"
		]
	},
	{
		"name": "ジョイフルデイズ",
		"count": 3,
		"member": [
			"南条光",
			"鷹富士茄子",
			"喜多日菜子"
		]
	},
	{
		"name": "スウィート・ラブ・スウィート",
		"count": 3,
		"member": [
			"榊原里美",
			"十時愛梨",
			"三村かな子"
		]
	},
	{
		"name": "スウィートティータイム",
		"count": 3,
		"member": [
			"相原雪乃",
			"クラリス",
			"槙原志保"
		]
	},
	{
		"name": "スターリット・アンサンブル",
		"count": 3,
		"member": [
			"藤居朋",
			"松山久美子",
			"ライラ"
		]
	},
	{
		"name": "セクシーエゴイスト",
		"count": 3,
		"member": [
			"柳清良",
			"衛藤美紗希",
			"間中美里"
		]
	},
	{
		"name": "セクシーギャルズ",
		"count": 3,
		"member": [
			"大槻唯",
			"城ヶ崎美嘉",
			"藤本里奈"
		]
	},
	{
		"name": "ディヴィニア・トリニターズ",
		"count": 3,
		"member": [
			"クラリス",
			"梅木音葉",
			"望月聖"
		]
	},
	{
		"name": "ドーリー・リトルレディ",
		"count": 3,
		"member": [
			"古賀小春",
			"佐城雪美",
			"櫻井桃華"
		]
	},
	{
		"name": "ときめきオーシャン",
		"count": 3,
		"member": [
			"浅利七海",
			"瀬名詩織",
			"長富蓮実"
		]
	},
	{
		"name": "ドリームホープスプリング",
		"count": 3,
		"member": [
			"成宮由愛",
			"望月聖",
			"古賀小春"
		]
	},
	{
		"name": "長崎親善大使",
		"count": 3,
		"member": [
			"木場真奈美",
			"有浦柑奈",
			"岡崎泰葉"
		]
	},
	{
		"name": "にくきゅうアニマルズ",
		"count": 3,
		"member": [
			"前川みく",
			"城ヶ崎莉嘉",
			"市原仁奈"
		]
	},
	{
		"name": "虹色ドリーマー",
		"count": 3,
		"member": [
			"神谷奈緒",
			"荒木比奈",
			"安部菜々"
		]
	},
	{
		"name": "にゃんともラブリー",
		"count": 3,
		"member": [
			"前川みく",
			"上条春菜",
			"佐城雪美"
		]
	},
	{
		"name": "にゃん・にゃん・にゃん",
		"count": 3,
		"member": [
			"前川みく",
			"高峯のあ",
			"アナスタシア"
		]
	},
	{
		"name": "ハニーバニーメニー☆",
		"count": 3,
		"member": [
			"相葉夕美",
			"十時愛梨",
			"安部菜々"
		]
	},
	{
		"name": "ハードメテオライツ",
		"count": 3,
		"member": [
			"木場真奈美",
			"吉岡沙紀",
			"木村夏樹"
		]
	},
	{
		"name": "ビッグ・セパレート・スリー",
		"count": 3,
		"member": [
			"服部瞳子",
			"首藤葵",
			"衛藤美紗希"
		]
	},
	{
		"name": "ビューティーアリュール",
		"count": 3,
		"member": [
			"小室千奈美",
			"松山久美子",
			"浜川愛結奈"
		]
	},
	{
		"name": "フェアリーフィースト",
		"count": 3,
		"member": [
			"橘ありす",
			"佐城雪美",
			"緒方智絵里"
		]
	},
	{
		"name": "ぷちっとナイン",
		"count": 3,
		"member": [
			"龍崎薫",
			"市原仁奈",
			"横山千佳"
		]
	},
	{
		"name": "フラワービーチマーメイド",
		"count": 3,
		"member": [
			"藤本里奈",
			"相葉夕美",
			"向井拓海"
		]
	},
	{
		"name": "フランメ・ルージュ",
		"count": 3,
		"member": [
			"桐野アヤ",
			"小松伊吹",
			"槙原志保"
		]
	},
	{
		"name": "ブルームジャーニー",
		"count": 3,
		"member": [
			"氏家むつみ",
			"成宮由愛",
			"古賀小春"
		]
	},
	{
		"name": "ヘルシーサバイブ",
		"count": 3,
		"member": [
			"大和亜季",
			"栗原ネネ",
			"涼宮星花"
		]
	},
	{
		"name": "ホットアートジャンピン",
		"count": 3,
		"member": [
			"西島櫂",
			"愛野渚",
			"吉岡沙紀"
		]
	},
	{
		"name": "ポラリス・ノーツ",
		"count": 3,
		"member": [
			"アナスタシア",
			"工藤忍",
			"塩見周子"
		]
	},
	{
		"name": "ホワイトデー決起会",
		"count": 3,
		"member": [
			"三船美優",
			"和久井留美",
			"安部菜々"
		]
	},
	{
		"name": "マッシブライダース",
		"count": 3,
		"member": [
			"木村夏樹",
			"向井拓海",
			"藤本里奈"
		]
	},
	{
		"name": "宮城親善大使",
		"count": 3,
		"member": [
			"綾瀬穂乃香",
			"佐久間まゆ",
			"早坂美玲"
		]
	},
	{
		"name": "夢幻泡影",
		"count": 3,
		"member": [
			"桃井あずき",
			"高垣楓",
			"アナスタシア"
		]
	},
	{
		"name": "メイビー・バッド・ガールズ",
		"count": 3,
		"member": [
			"三船美優",
			"今井加奈",
			"佐城雪美"
		]
	},
	{
		"name": "女神たちの夏宴",
		"count": 3,
		"member": [
			"高垣楓",
			"片桐早苗",
			"川島瑞樹"
		]
	},
	{
		"name": "ユア・フレンズ",
		"count": 3,
		"member": [
			"ナターリア",
			"ケイト",
			"メアリー・コクラン"
		]
	},
	{
		"name": "リトルエンジェルス",
		"count": 3,
		"member": [
			"輿水幸子",
			"緒方智絵里",
			"神崎蘭子"
		]
	},
	{
		"name": "誘惑イビル",
		"count": 3,
		"member": [
			"一ノ瀬志希",
			"宮本フレデリカ",
			"塩見周子"
		]
	},
	{
		"name": "イージーノイジーライダース",
		"count": 3,
		"member": [
			"原田美世",
			"木村夏樹",
			"向井拓海"
		]
	},
	{
		"name": "ラウドシャウトビーツ",
		"count": 3,
		"member": [
			"仙崎恵磨",
			"松永涼",
			"吉岡沙紀"
		]
	},
	{
		"name": "落花流水",
		"count": 3,
		"member": [
			"佐久間まゆ",
			"白坂小梅",
			"北条加蓮"
		]
	},
	{
		"name": "ラビュー☆アイス☆マウンテン",
		"count": 3,
		"member": [
			"榊原里美",
			"棟方愛海",
			"難波笑美"
		]
	},
	{
		"name": "流星プラネッツ",
		"count": 3,
		"member": [
			"安部菜々",
			"早坂美鈴",
			"岡崎泰葉"
		]
	},
	{
		"name": "ルーナフロース",
		"count": 3,
		"member": [
			"月宮雅",
			"島村卯月",
			"望月聖"
		]
	},
	{
		"name": "ワンステップス",
		"count": 3,
		"member": [
			"関裕美",
			"白菊ほたる",
			"森久保乃々"
		]
	},
	{
		"name": "GIRLS BE",
		"count": 3,
		"member": [
			"関裕美",
			"白菊ほたる",
			"松尾千鶴"
		]
	},
	{
		"name": "KBYD（カワイイボクと野球どすえ）",
		"count": 3,
		"member": [
			"輿水幸子",
			"小早川紗枝",
			"姫川友紀"
		]
	},
	{
		"name": "Na・No・Ne",
		"count": 3,
		"member": [
			"安部菜々",
			"森久保乃々",
			"栗原ネネ"
		]
	},
	{
		"name": "RUN・RUN・RUN",
		"count": 3,
		"member": [
			"南条光",
			"北川真尋",
			"脇山珠美"
		]
	},
	{
		"name": "thinE/Dasein",
		"count": 3,
		"member": [
			"有浦柑奈",
			"二宮飛鳥",
			"瀬名詩織"
		]
	},
	{
		"name": "Violet Violence",
		"count": 3,
		"member": [
			"桐生つかさ",
			"財前時子",
			"高峯のあ"
		]
	},
	{
		"name": "WtFみりあ&小梅&莉嘉／With 3 Friends☆",
		"count": 3,
		"member": [
			"赤城みりあ",
			"白坂小梅",
			"城ヶ崎莉嘉"
		]
	},
	{
		"name": "キフジンキブン",
		"count": 3,
		"member": [
			"太田優",
			"大西由里子",
			"日下部若葉"
		]
	},
	{
		"name": "サマースイート娘々",
		"count": 3,
		"member": [
			"椎名法子",
			"道明寺歌鈴",
			"楊菲菲"
		]
	},
	{
		"name": "サロン・ドゥ・ラ・フェ",
		"count": 3,
		"member": [
			"椎名法子",
			"乙倉悠貴",
			"関裕美"
		]
	},
	{
		"name": "スウィートラブチェリー",
		"count": 3,
		"member": [
			"三村かな子",
			"佐久間まゆ",
			"緒方智絵里"
		]
	},
	{
		"name": "スケルツォ・プリマヴェーラ",
		"count": 3,
		"member": [
			"村松さくら",
			"大原みちる",
			"今井加奈"
		]
	},
	{
		"name": "ノーブルセレブリティ",
		"count": 3,
		"member": [
			"水本ゆかり",
			"涼宮星花",
			"西園寺琴歌"
		]
	},
	{
		"name": "ピンキーキュート",
		"count": 3,
		"member": [
			"島村卯月",
			"小日向美穂",
			"緒方智絵里"
		]
	},
	{
		"name": "メロウ・イエロー",
		"count": 3,
		"member": [
			"中野有香",
			"水本ゆかり",
			"椎名法子"
		]
	},
	{
		"name": "りるすたー",
		"count": 3,
		"member": [
			"安斎都",
			"今井加奈",
			"松原早耶"
		]
	},
	{
		"name": "CANDY ISLAND",
		"count": 3,
		"member": [
			"三村かな子",
			"双葉杏",
			"緒方智絵里"
		]
	},
	{
		"name": "P.C.S(ピンクチェックスクール)",
		"count": 3,
		"member": [
			"島村卯月",
			"小日向美穂",
			"五十嵐響子"
		]
	},
	{
		"name": "TIP! TAP!",
		"count": 3,
		"member": [
			"乙倉悠貴",
			"栗原ネネ",
			"松原早耶"
		]
	},
	{
		"name": "397cherry",
		"count": 3,
		"member": [
			"前川みく",
			"安部菜々",
			"緒方智絵里"
		]
	},
	{
		"name": "アイドルミズキ with AS",
		"count": 3,
		"member": [
			"東郷あい",
			"川島瑞樹",
			"吉岡沙紀"
		]
	},
	{
		"name": "オータムブックメイト",
		"count": 3,
		"member": [
			"八神マキノ",
			"鷺沢文香",
			"古澤頼子"
		]
	},
	{
		"name": "トランクィル・ウィスパー",
		"count": 3,
		"member": [
			"アナスタシア",
			"鷺沢文香",
			"高垣楓"
		]
	},
	{
		"name": "バレンタイン反省会",
		"count": 3,
		"member": [
			"和久井留美",
			"服部瞳子",
			"三船美優"
		]
	},
	{
		"name": "ファタ・モルガーナ",
		"count": 3,
		"member": [
			"大石泉",
			"浅利七海",
			"八神マキノ"
		]
	},
	{
		"name": "ブレイブパーティー",
		"count": 3,
		"member": [
			"上条春菜",
			"佐々木千枝",
			"成宮由愛"
		]
	},
	{
		"name": "モルフェウス・チルドレン",
		"count": 3,
		"member": [
			"荒木比奈",
			"二宮飛鳥",
			"森久保乃々"
		]
	},
	{
		"name": "レジスタ・ファンタジスタ",
		"count": 3,
		"member": [
			"吉岡沙紀",
			"結城晴",
			"東郷あい"
		]
	},
	{
		"name": "Triad Primus",
		"count": 3,
		"member": [
			"渋谷凛",
			"神谷奈緒",
			"北条加蓮"
		]
	},
	{
		"name": "LOVE LAIKA with Rosenburg Engel",
		"count": 3,
		"member": [
			"新田美波",
			"アナスタシア",
			"神崎蘭子"
		]
	},
	{
		"name": "イグニッションZERO",
		"count": 3,
		"member": [
			"南条光",
			"小関麗奈",
			"三好紗南"
		]
	},
	{
		"name": "サンセットノスタルジー",
		"count": 3,
		"member": [
			"本田未央",
			"矢口美羽",
			"松山久美子"
		]
	},
	{
		"name": "セクシーギルティ",
		"count": 3,
		"member": [
			"及川雫",
			"片桐早苗",
			"堀裕子"
		]
	},
	{
		"name": "セクシーパンサーズ",
		"count": 3,
		"member": [
			"的場梨沙",
			"城ヶ崎莉嘉",
			"メアリー・コクラン"
		]
	},
	{
		"name": "チアフルボンバーズ",
		"count": 3,
		"member": [
			"日野茜",
			"姫川友紀",
			"若林智香"
		]
	},
	{
		"name": "凸レーション",
		"count": 3,
		"member": [
			"諸星きらり",
			"城ヶ崎莉嘉",
			"赤城みりあ"
		]
	},
	{
		"name": "ヒートアップ☆チアーズ",
		"count": 3,
		"member": [
			"若林智香",
			"斉藤洋子",
			"真鍋いつき"
		]
	},
	{
		"name": "ブエナ・スエルテ",
		"count": 3,
		"member": [
			"土屋亜子",
			"矢口美羽",
			"喜多日菜子"
		]
	},
	{
		"name": "B.B.ロワイヤル",
		"count": 3,
		"member": [
			"姫川友紀",
			"難波笑美",
			"村上巴"
		]
	},
	{
		"name": "Louder×Louder",
		"count": 3,
		"member": [
			"仙崎恵磨",
			"日野茜",
			"星輝子"
		]
	},
	{
		"name": "Positive Passion",
		"count": 3,
		"member": [
			"本田未央",
			"日野茜",
			"高森藍子"
		]
	},
	{
		"name": "秋色温泉",
		"count": 4,
		"member": [
			"江上椿",
			"八神マキノ",
			"小関麗奈",
			"仙崎恵磨"
		]
	},
	{
		"name": "桜花小町",
		"count": 4,
		"member": [
			"桃井あずき",
			"東郷あい",
			"片桐早苗",
			"龍崎薫"
		]
	},
	{
		"name": "クロックワークメモリー",
		"count": 4,
		"member": [
			"神谷奈緒",
			"斉藤洋子",
			"岡崎泰葉",
			"中野有香"
		]
	},
	{
		"name": "スペーススタイル",
		"count": 4,
		"member": [
			"遊佐こずえ",
			"吉岡沙紀",
			"西島櫂",
			"井村雪菜"
		]
	},
	{
		"name": "セレクテッド",
		"count": 4,
		"member": [
			"速水奏",
			"大槻唯",
			"アナスタシア",
			"宮本フレデリカ"
		]
	},
	{
		"name": "センゴク☆華☆ランブ",
		"count": 4,
		"member": [
			"丹羽仁美",
			"脇山珠美",
			"浜口あやめ",
			"首藤葵"
		]
	},
	{
		"name": "デビリッシュゴシック",
		"count": 4,
		"member": [
			"柳清良",
			"棟方愛海",
			"佐々木千枝",
			"海老原菜帆"
		]
	},
	{
		"name": "ハイカラサクラ",
		"count": 4,
		"member": [
			"双葉杏",
			"前川みく",
			"新田美波",
			"城ヶ崎莉嘉"
		]
	},
	{
		"name": "パステル・カクテル",
		"count": 4,
		"member": [
			"黒川千秋",
			"沢田麻理菜",
			"相馬夏美",
			"間中美里"
		]
	},
	{
		"name": "ハッピーバレンタイン",
		"count": 4,
		"member": [
			"椎名法子",
			"速水奏",
			"小松伊吹",
			"中野有香"
		]
	},
	{
		"name": "ハロウィンナイト",
		"count": 4,
		"member": [
			"丹羽仁美",
			"篠原礼",
			"森久保乃々",
			"上田鈴帆"
		]
	},
	{
		"name": "ブライダルセレクション",
		"count": 4,
		"member": [
			"白菊ほたる",
			"小室千奈美",
			"結城晴",
			"メアリー・コクラン"
		]
	},
	{
		"name": "フリルドスクエア",
		"count": 4,
		"member": [
			"工藤忍",
			"綾瀬穂乃香",
			"喜多見柚",
			"桃井あずき"
		]
	},
	{
		"name": "マジカルテット",
		"count": 4,
		"member": [
			"横山千佳",
			"福山舞",
			"成宮由愛",
			"小関麗奈"
		]
	},
	{
		"name": "メルヘンゴシック",
		"count": 4,
		"member": [
			"櫻井桃華",
			"大西由里子",
			"森久保乃々",
			"杉坂海"
		]
	},
	{
		"name": "メルヘンアニマルズ",
		"count": 4,
		"member": [
			"乙倉悠貴",
			"相川千夏",
			"岡崎泰葉",
			"北川真尋"
		]
	},
	{
		"name": "もりくぼぱーりー",
		"count": 4,
		"member": [
			"佐久間まゆ",
			"森久保乃々",
			"早坂美玲",
			"星輝子"
		]
	},
	{
		"name": "レジェンド・パーティー",
		"count": 4,
		"member": [
			"神崎蘭子",
			"椎名法子",
			"橘ありす",
			"三好紗南"
		]
	},
	{
		"name": "レディ・メイクアップ",
		"count": 4,
		"member": [
			"井村雪菜",
			"北条加蓮",
			"岸部彩華",
			"松山久美子"
		]
	},
	{
		"name": "ロマンティックツアーズ",
		"count": 4,
		"member": [
			"伊集院惠",
			"相馬夏美",
			"並木芽衣子",
			"江上椿"
		]
	},
	{
		"name": "＊(Asterisk) with なつなな",
		"count": 4,
		"member": [
			"前川みく",
			"多田李衣菜",
			"木村夏樹",
			"安部菜々"
		]
	},
	{
		"name": "FOUR PIECE",
		"count": 4,
		"member": [
			"多田李衣菜",
			"ライラ",
			"冴島清美",
			"涼宮星花"
		]
	},
	{
		"name": "Four Wind Colors",
		"count": 4,
		"member": [
			"乙倉悠貴",
			"喜多見柚",
			"原田美世",
			"藤原肇"
		]
	},
	{
		"name": "UKスタイル",
		"count": 4,
		"member": [
			"涼宮星花",
			"ケイト",
			"仙崎恵磨",
			"メアリー・コクラン"
		]
	},
	{
		"name": "青森四姉妹",
		"count": 4,
		"member": [
			"浅利七海",
			"工藤忍",
			"棟方愛海",
			"水本ゆかり"
		]
	},
	{
		"name": "コズミック・シンフォニー",
		"count": 4,
		"member": [
			"望月聖",
			"梅木音葉",
			"クラリス",
			"有浦柑奈"
		]
	},
	{
		"name": "プレシャスホワイト",
		"count": 4,
		"member": [
			"和久井留美",
			"服部瞳子",
			"三船美優",
			"安部菜々"
		]
	},
	{
		"name": "ワンダー☆シスターズ",
		"count": 4,
		"member": [
			"城ヶ崎莉嘉",
			"城ヶ崎美嘉",
			"久川凪",
			"久川颯"
		]
	},
	{
		"name": "Black/White-Roses",
		"count": 4,
		"member": [
			"東郷あい",
			"浅野風香",
			"櫻井桃華",
			"瀬名詩織"
		]
	},
	{
		"name": "GIRLS BE NEXT STEP",
		"count": 4,
		"member": [
			"関裕美",
			"白菊ほたる",
			"松尾千鶴",
			"岡崎泰葉"
		]
	},
	{
		"name": "TIP! TAP! FLAP!",
		"count": 4,
		"member": [
			"乙倉悠貴",
			"栗原ネネ",
			"松原早耶",
			"喜多日菜子"
		]
	},
	{
		"name": "2WINKLE 4OR INFINITY∞",
		"count": 4,
		"member": [
			"的場梨沙",
			"池袋晶葉",
			"メアリー・コクラン",
			"中野有香"
		]
	},
	{
		"name": "ピンクドットバルーン",
		"count": 4,
		"member": [
			"三村かな子",
			"持田亜里沙",
			"緒方智絵里",
			"柳瀬美由紀"
		]
	},
	{
		"name": "イージーダンシング♪",
		"count": 4,
		"member": [
			"桃井あずき",
			"松原早耶",
			"太田優",
			"月宮雅"
		]
	},
	{
		"name": "レディ・ビースト・シュプレム",
		"count": 4,
		"member": [
			"木場真奈美",
			"柊志乃",
			"相川千夏",
			"高橋礼子"
		]
	},
	{
		"name": "カナリアサマー",
		"count": 4,
		"member": [
			"大槻唯",
			"姫川友紀",
			"愛野渚",
			"龍崎薫"
		]
	},
	{
		"name": "ライトグリーンセーフ",
		"count": 4,
		"member": [
			"木村夏樹",
			"沢田麻理菜",
			"斉藤洋子",
			"真鍋いつき"
		]
	},
	{
		"name": "炎陣",
		"count": 5,
		"member": [
			"向井拓海",
			"藤本里奈",
			"松永涼",
			"大和亜季",
			"木村夏樹"
		]
	},
	{
		"name": "桜舞隊",
		"count": 5,
		"member": [
			"古賀小春",
			"福山舞",
			"的場梨沙",
			"村上巴",
			"結城晴"
		]
	},
	{
		"name": "からぱれ",
		"count": 5,
		"member": [
			"海老原菜帆",
			"柳瀬美由紀",
			"脇山珠美",
			"楊菲菲",
			"長富蓮実"
		]
	},
	{
		"name": "チームヘラクレス",
		"count": 5,
		"member": [
			"相葉夕美",
			"城ヶ崎莉嘉",
			"安部菜々",
			"新田美波",
			"多田李衣菜"
		]
	},
	{
		"name": "春霞",
		"count": 5,
		"member": [
			"道明寺歌鈴",
			"浜口あやめ",
			"脇山珠美",
			"小早川紗枝",
			"依田芳乃"
		]
	},
	{
		"name": "ハロウィンパーティー",
		"count": 5,
		"member": [
			"佐久間まゆ",
			"松永涼",
			"梅木音葉",
			"上田鈴帆",
			"難波笑美"
		]
	},
	{
		"name": "ふぁんふぁんランド",
		"count": 5,
		"member": [
			"赤城みりあ",
			"福山舞",
			"遊佐こずえ",
			"三好紗南",
			"橘ありす"
		]
	},
	{
		"name": "フレッシュアスリーテス",
		"count": 5,
		"member": [
			"今井加奈",
			"桐野アヤ",
			"小室千奈美",
			"沢田麻理菜",
			"北川真尋"
		]
	},
	{
		"name": "ポニーテール乙女同盟",
		"count": 5,
		"member": [
			"愛野渚",
			"椎名法子",
			"堀裕子",
			"水野翠",
			"若林智香"
		]
	},
	{
		"name": "マーメイドパラダイス",
		"count": 5,
		"member": [
			"横山千佳",
			"五十嵐響子",
			"水木聖來",
			"瀬名詩織",
			"及川雫"
		]
	},
	{
		"name": "ミス・フォーチュン・テリング",
		"count": 5,
		"member": [
			"白菊ほたる",
			"道明寺歌鈴",
			"鷹富士茄子",
			"藤居朋",
			"依田芳乃"
		]
	},
	{
		"name": "メイドコレクション",
		"count": 5,
		"member": [
			"クラリス",
			"東郷あい",
			"白坂小梅",
			"並木芽衣子",
			"槙原志保"
		]
	},
	{
		"name": "ユメミルガールズ",
		"count": 5,
		"member": [
			"櫻井桃華",
			"佐々木千枝",
			"メアリー・コクラン",
			"遊佐こずえ",
			"龍崎薫"
		]
	},
	{
		"name": "宵乙女",
		"count": 5,
		"member": [
			"高垣楓",
			"佐藤心",
			"安部菜々",
			"三船美優",
			"片桐早苗"
		]
	},
	{
		"name": "Happy Princess",
		"count": 5,
		"member": [
			"城ヶ崎美嘉",
			"川島瑞樹",
			"日野茜",
			"小日向美穂",
			"佐久間まゆ"
		]
	},
	{
		"name": "LiPPS",
		"count": 5,
		"member": [
			"速水奏",
			"塩見周子",
			"宮本フレデリカ",
			"一ノ瀬志希",
			"城ヶ崎美嘉"
		]
	},
	{
		"name": "LittlePOPS",
		"count": 5,
		"member": [
			"双葉杏",
			"城ヶ崎莉嘉",
			"二宮飛鳥",
			"早坂美玲",
			"白坂小梅"
		]
	},
	{
		"name": "NEX-US",
		"count": 5,
		"member": [
			"アナスタシア",
			"神谷奈緒",
			"中野有香",
			"前川みく",
			"星輝子"
		]
	},
	{
		"name": "Sweetches",
		"count": 5,
		"member": [
			"三村かな子",
			"椎名法子",
			"十時愛梨",
			"及川雫",
			"森久保乃々"
		]
	},
	{
		"name": "アインフェリア",
		"count": 5,
		"member": [
			"新田美波",
			"鷺沢文香",
			"橘ありす",
			"高森藍子",
			"相葉夕美"
		]
	},
	{
		"name": "サウスウィンド・ダンサーズ",
		"count": 5,
		"member": [
			"沢田麻理菜",
			"浜口あやめ",
			"服部瞳子",
			"西島櫂",
			"松永涼"
		]
	},
	{
		"name": "サマプリ",
		"count": 5,
		"member": [
			"川島瑞樹",
			"日野茜",
			"堀裕子",
			"上田鈴帆",
			"難波笑美"
		]
	},
	{
		"name": "スイーツファイブ",
		"count": 5,
		"member": [
			"椎名法子",
			"槙原志保",
			"南条光",
			"三村かな子",
			"十時愛梨"
		]
	},
	{
		"name": "Love Yell",
		"count": 5,
		"member": [
			"五十嵐響子",
			"姫川友紀",
			"水本ゆかり",
			"諸星きらり",
			"乙倉悠貴"
		]
	},
	{
		"name": "Masque:Rade",
		"count": 5,
		"member": [
			"佐久間まゆ",
			"北条加蓮",
			"小日向美穂",
			"多田李衣菜",
			"緒方智絵里"
		]
	},
	{
		"name": "イエローリリー",
		"count": 5,
		"member": [
			"間中美里",
			"中野有香",
			"椎名法子",
			"水本ゆかり",
			"今井加奈"
		]
	},
	{
		"name": "サクヤヒメ",
		"count": 5,
		"member": [
			"三村かな子",
			"緒方智絵里",
			"輿水幸子",
			"佐久間まゆ",
			"小早川紗枝"
		]
	},
	{
		"name": "C5",
		"count": 5,
		"member": [
			"安部菜々",
			"島村卯月",
			"小日向美穂",
			"双葉杏",
			"前川みく"
		]
	},
	{
		"name": "Heartful Bloom",
		"count": 5,
		"member": [
			"安部菜々",
			"五十嵐響子",
			"緒方智絵里",
			"道明寺歌鈴",
			"早坂美玲"
		]
	},
	{
		"name": "la Roseraie",
		"count": 5,
		"member": [
			"宮本フレデリカ",
			"一ノ瀬志希",
			"櫻井桃華",
			"中野有香",
			"五十嵐響子"
		]
	},
	{
		"name": "蒼ノ楽団",
		"count": 5,
		"member": [
			"渋谷凛",
			"高垣楓",
			"神崎蘭子",
			"多田李衣菜",
			"新田美波"
		]
	},
	{
		"name": "ブルーナポレオン",
		"count": 5,
		"member": [
			"佐々木千枝",
			"荒木比奈",
			"川島瑞樹",
			"上条春菜",
			"松本沙理奈"
		]
	},
	{
		"name": "レッドバラード",
		"count": 5,
		"member": [
			"東郷あい",
			"桐野アヤ",
			"相川千夏",
			"高橋礼子",
			"黒川千秋"
		]
	},
	{
		"name": "CAERULA",
		"count": 5,
		"member": [
			"鷺沢文香",
			"速水奏",
			"橘ありす",
			"塩見周子",
			"二宮飛鳥"
		]
	},
	{
		"name": "Caskets",
		"count": 5,
		"member": [
			"アナスタシア",
			"川島瑞樹",
			"白坂小梅",
			"神谷奈緒",
			"北条加蓮"
		]
	},
	{
		"name": "サンフラワー",
		"count": 5,
		"member": [
			"姫川友紀",
			"市原仁奈",
			"片桐早苗",
			"大槻唯",
			"相葉夕美"
		]
	},
	{
		"name": "ゼッケンズ",
		"count": 5,
		"member": [
			"十時愛梨",
			"日野茜",
			"高森藍子",
			"星輝子",
			"堀裕子"
		]
	},
	{
		"name": "トロピカル☆スターズ",
		"count": 5,
		"member": [
			"城ヶ崎莉嘉",
			"諸星きらり",
			"城ヶ崎美嘉",
			"本田未央",
			"赤城みりあ"
		]
	},
	{
		"name": "バーニンアップ☆チアーズ",
		"count": 5,
		"member": [
			"若林智香",
			"北川真尋",
			"真鍋いつき",
			"西島櫂",
			"斉藤洋子"
		]
	}
]
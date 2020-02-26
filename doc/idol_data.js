'use strict'
const idol_data = 
[
	{
		"name": "島村卯月",
		"kana": "しまむらうづき",
		"type": 1,
		"height": 159,
		"old": 17,
		"weight": 45,
		"birthday": "4月24日",
		"blood": "O",
		"hand": "右",
		"style": {
			"bust": 83,
			"waist": 59,
			"hip": 87
		},
		"imgs": [
			{
				"id": 100001,
				"title": "島村卯月（R）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100001.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100001.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100001.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/101/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100001.png"
			},
			{
				"id": 100002,
				"title": "島村卯月＋（R+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100002.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100002.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100002.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/101/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100002.png"
			},
			{
				"id": 100075,
				"title": "［ステージオブマジック］島村卯月（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100075.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100075.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100075.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/101/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100075.png"
			},
			{
				"id": 100076,
				"title": "［ステージオブマジック］島村卯月＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100076.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100076.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100076.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/101/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100076.png"
			},
			{
				"id": 100255,
				"title": "［ピースフルデイズ］島村卯月（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100255.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100255.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100255.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/101/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100255.png"
			},
			{
				"id": 100256,
				"title": "［ピースフルデイズ］島村卯月＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100256.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100256.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100256.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/101/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100256.png"
			},
			{
				"id": 100293,
				"title": "［ラブレター］島村卯月（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100293.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100293.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100293.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/101/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100293.png"
			},
			{
				"id": 100294,
				"title": "［ラブレター］島村卯月＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100294.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100294.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100294.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/101/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100294.png"
			},
			{
				"id": 100447,
				"title": "［スマイル・アンド・トリート］島村卯月（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100447.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100447.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100447.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/101/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100447.png"
			},
			{
				"id": 100448,
				"title": "［スマイル・アンド・トリート］島村卯月＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100448.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100448.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100448.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/101/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100448.png"
			},
			{
				"id": 100509,
				"title": "［キラッ ! 満開スマイル］島村卯月（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100509.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100509.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100509.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/101/11.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100509.png"
			},
			{
				"id": 100510,
				"title": "［キラッ ! 満開スマイル］島村卯月＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100510.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100510.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100510.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/101/12.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100510.png"
			},
			{
				"id": 100577,
				"title": "［P.C.S］島村卯月（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100577.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100577.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100577.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/101/13.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100577.png"
			},
			{
				"id": 100578,
				"title": "［P.C.S］島村卯月＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100578.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100578.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100578.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/101/14.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100578.png"
			},
			{
				"id": 100697,
				"title": "［Stage Bye Stage］島村卯月（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100697.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100697.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100697.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/101/15.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100697.png"
			},
			{
				"id": 100698,
				"title": "［Stage Bye Stage］島村卯月＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100698.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100698.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100698.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/101/16.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100698.png"
			}
		]
	},
	{
		"name": "中野有香",
		"kana": "なかのゆか",
		"type": 1,
		"height": 149,
		"old": 18,
		"weight": 40,
		"birthday": "3月23日",
		"blood": "B",
		"hand": "右",
		"style": {
			"bust": 77,
			"waist": 57,
			"hip": 81
		},
		"imgs": [
			{
				"id": 100003,
				"title": "中野有香（N）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100003.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100003.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100003.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/102/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100003.png"
			},
			{
				"id": 100004,
				"title": "中野有香＋（N+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100004.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100004.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100004.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/102/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100004.png"
			},
			{
				"id": 100111,
				"title": "［ファイティングチアー］中野有香（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100111.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100111.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100111.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/102/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100111.png"
			},
			{
				"id": 100112,
				"title": "［ファイティングチアー］中野有香＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100112.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100112.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100112.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/102/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100112.png"
			},
			{
				"id": 100155,
				"title": "［プリティパティシエ］中野有香（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100155.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100155.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100155.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/102/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100155.png"
			},
			{
				"id": 100156,
				"title": "［プリティパティシエ］中野有香＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100156.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100156.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100156.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/102/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100156.png"
			},
			{
				"id": 100223,
				"title": "［明日また会えるよね］中野有香（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100223.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100223.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100223.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/102/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100223.png"
			},
			{
				"id": 100224,
				"title": "［明日また会えるよね］中野有香＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100224.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100224.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100224.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/102/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100224.png"
			},
			{
				"id": 100349,
				"title": "［ラブ ! ストレート］中野有香（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100349.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100349.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100349.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/102/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100349.png"
			},
			{
				"id": 100350,
				"title": "［ラブ ! ストレート］中野有香＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100350.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100350.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100350.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/102/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100350.png"
			},
			{
				"id": 100387,
				"title": "［Nothing but You］中野有香（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100387.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100387.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100387.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/102/11.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100387.png"
			},
			{
				"id": 100388,
				"title": "［Nothing but You］中野有香＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100388.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100388.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100388.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/102/12.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100388.png"
			},
			{
				"id": 100425,
				"title": "［太陽より熱く ! ］中野有香（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100425.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100425.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100425.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/102/13.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100425.png"
			},
			{
				"id": 100426,
				"title": "［太陽より熱く ! ］中野有香＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100426.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100426.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100426.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/102/14.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100426.png"
			},
			{
				"id": 100457,
				"title": "［秋風に手を振って］中野有香（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100457.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100457.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100457.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/102/15.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100457.png"
			},
			{
				"id": 100458,
				"title": "［秋風に手を振って］中野有香＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100458.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100458.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100458.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/102/16.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100458.png"
			},
			{
				"id": 100609,
				"title": "［日々鍛錬］中野有香（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100609.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100609.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100609.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/102/17.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100609.png"
			},
			{
				"id": 100610,
				"title": "［日々鍛錬］中野有香＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100610.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100610.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100610.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/102/18.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100610.png"
			},
			{
				"id": 100715,
				"title": "［comic cosmic］中野有香（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100715.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100715.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100715.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/102/19.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100715.png"
			},
			{
				"id": 100716,
				"title": "［comic cosmic］中野有香＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100716.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100716.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100716.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/102/20.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100716.png"
			}
		]
	},
	{
		"name": "水本ゆかり",
		"kana": "みずもとゆかり",
		"type": 1,
		"height": 155,
		"old": 15,
		"weight": 42,
		"birthday": "10月18日",
		"blood": "A",
		"hand": "右",
		"style": {
			"bust": 81,
			"waist": 56,
			"hip": 82
		},
		"imgs": [
			{
				"id": 100065,
				"title": "水本ゆかり（N）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100065.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100065.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100065.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/103/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100065.png"
			},
			{
				"id": 100066,
				"title": "水本ゆかり＋（N+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100066.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100066.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100066.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/103/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100066.png"
			},
			{
				"id": 100115,
				"title": "［クラシカルハーモニー］水本ゆかり（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100115.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100115.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100115.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/103/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100115.png"
			},
			{
				"id": 100116,
				"title": "［クラシカルハーモニー］水本ゆかり＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100116.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100116.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100116.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/103/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100116.png"
			},
			{
				"id": 100201,
				"title": "［清純令嬢］水本ゆかり（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100201.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100201.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100201.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/103/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100201.png"
			},
			{
				"id": 100202,
				"title": "［清純令嬢］水本ゆかり＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100202.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100202.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100202.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/103/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100202.png"
			},
			{
				"id": 100337,
				"title": "［エアリアルメロディア］水本ゆかり（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100337.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100337.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100337.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/103/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100337.png"
			},
			{
				"id": 100338,
				"title": "［エアリアルメロディア］水本ゆかり＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100338.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100338.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100338.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/103/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100338.png"
			},
			{
				"id": 100419,
				"title": "［Kawaii make MY day ! ］水本ゆかり（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100419.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100419.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100419.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/103/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100419.png"
			},
			{
				"id": 100420,
				"title": "［Kawaii make MY day ! ］水本ゆかり＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100420.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100420.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100420.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/103/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100420.png"
			},
			{
				"id": 100539,
				"title": "［HARURUNRUN］水本ゆかり（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100539.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100539.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100539.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/103/11.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100539.png"
			},
			{
				"id": 100540,
				"title": "［HARURUNRUN］水本ゆかり＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100540.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100540.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100540.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/103/12.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100540.png"
			},
			{
				"id": 100649,
				"title": "［音色を抱きしめて］水本ゆかり（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100649.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100649.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100649.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/103/13.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100649.png"
			},
			{
				"id": 100650,
				"title": "［音色を抱きしめて］水本ゆかり＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100650.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100650.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100650.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/103/14.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100650.png"
			},
			{
				"id": 100721,
				"title": "［素顔のお嬢様］水本ゆかり（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100721.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100721.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100721.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/103/15.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100721.png"
			},
			{
				"id": 100722,
				"title": "［素顔のお嬢様］水本ゆかり＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100722.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100722.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100722.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/103/16.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100722.png"
			}
		]
	},
	{
		"name": "福山舞",
		"kana": "ふくやままい",
		"type": 1,
		"height": 132,
		"old": 10,
		"weight": 28,
		"birthday": "1月21日",
		"blood": "O",
		"hand": "左",
		"style": {
			"bust": 64,
			"waist": 56,
			"hip": 70
		},
		"imgs": [
			{
				"id": 100069,
				"title": "福山舞（N）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100069.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100069.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100069.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/104/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100069.png"
			},
			{
				"id": 100070,
				"title": "福山舞＋（N+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100070.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100070.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100070.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/104/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100070.png"
			},
			{
				"id": 100085,
				"title": "［リトルプリンセス］福山舞（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100085.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100085.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100085.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/104/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100085.png"
			},
			{
				"id": 100086,
				"title": "［リトルプリンセス］福山舞＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100086.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100086.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100086.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/104/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100086.png"
			},
			{
				"id": 100465,
				"title": "［マジカルガール・アクア］福山舞（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100465.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100465.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100465.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/104/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100465.png"
			},
			{
				"id": 100466,
				"title": "［マジカルガール・アクア］福山舞＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100466.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100466.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100466.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/104/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100466.png"
			},
			{
				"id": 100623,
				"title": "［ステップ・マイ・ステップ］福山舞（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100623.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100623.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100623.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/104/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100623.png"
			},
			{
				"id": 100624,
				"title": "［ステップ・マイ・ステップ］福山舞＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100624.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100624.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100624.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/104/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100624.png"
			}
		]
	},
	{
		"name": "椎名法子",
		"kana": "しいなのりこ",
		"type": 1,
		"height": 147,
		"old": 13,
		"weight": 38,
		"birthday": "10月10日",
		"blood": "O",
		"hand": "右",
		"style": {
			"bust": 76,
			"waist": 55,
			"hip": 79
		},
		"imgs": [
			{
				"id": 100067,
				"title": "椎名法子（N）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100067.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100067.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100067.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/105/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100067.png"
			},
			{
				"id": 100068,
				"title": "椎名法子＋（N+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100068.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100068.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100068.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/105/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100068.png"
			},
			{
				"id": 100135,
				"title": "［ドーナッツ☆マーメイド］椎名法子（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100135.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100135.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100135.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/105/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100135.png"
			},
			{
				"id": 100136,
				"title": "［ドーナッツ☆マーメイド］椎名法子＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100136.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100136.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100136.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/105/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100136.png"
			},
			{
				"id": 100353,
				"title": "［Ring♪Ring♪フィーリン］椎名法子（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100353.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100353.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100353.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/105/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100353.png"
			},
			{
				"id": 100354,
				"title": "［Ring♪Ring♪フィーリン］椎名法子＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100354.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100354.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100354.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/105/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100354.png"
			},
			{
				"id": 100417,
				"title": "［Kawaii make MY day ! ］椎名法子（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100417.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100417.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100417.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/105/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100417.png"
			},
			{
				"id": 100418,
				"title": "［Kawaii make MY day ! ］椎名法子＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100418.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100418.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100418.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/105/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100418.png"
			},
			{
				"id": 100565,
				"title": "［スイートサマー］椎名法子（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100565.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100565.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100565.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/105/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100565.png"
			},
			{
				"id": 100566,
				"title": "［スイートサマー］椎名法子＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100566.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100566.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100566.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/105/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100566.png"
			},
			{
				"id": 100665,
				"title": "［きゅん・きゅん・まっくす］椎名法子（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100665.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100665.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100665.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/105/11.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100665.png"
			},
			{
				"id": 100666,
				"title": "［きゅん・きゅん・まっくす］椎名法子＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100666.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100666.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100666.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/105/12.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100666.png"
			},
			{
				"id": 100733,
				"title": "［いたずらキャット大集合♪］椎名法子（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100733.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100733.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100733.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/105/13.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100733.png"
			},
			{
				"id": 100734,
				"title": "［いたずらキャット大集合♪］椎名法子＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100734.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100734.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100734.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/105/14.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100734.png"
			}
		]
	},
	{
		"name": "今井加奈",
		"kana": "いまいかな",
		"type": 1,
		"height": 153,
		"old": 16,
		"weight": 41,
		"birthday": "3月3日",
		"blood": "O",
		"hand": "右",
		"style": {
			"bust": 81,
			"waist": 56,
			"hip": 79
		},
		"imgs": [
			{
				"id": 100141,
				"title": "今井加奈（N）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100141.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100141.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100141.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/106/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100141.png"
			},
			{
				"id": 100142,
				"title": "今井加奈＋（N+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100142.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100142.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100142.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/106/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100142.png"
			},
			{
				"id": 100187,
				"title": "［ファンシーガール］今井加奈（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100187.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100187.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100187.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/106/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100187.png"
			},
			{
				"id": 100188,
				"title": "［ファンシーガール］今井加奈＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100188.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100188.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100188.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/106/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100188.png"
			},
			{
				"id": 100435,
				"title": "［メモリアルデイズ］今井加奈（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100435.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100435.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100435.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/106/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100435.png"
			},
			{
				"id": 100436,
				"title": "［メモリアルデイズ］今井加奈＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100436.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100436.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100436.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/106/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100436.png"
			},
			{
				"id": 100605,
				"title": "［ワンダーホーリーナイト］今井加奈（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100605.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100605.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100605.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/106/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100605.png"
			},
			{
				"id": 100606,
				"title": "［ワンダーホーリーナイト］今井加奈＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100606.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100606.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100606.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/106/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100606.png"
			},
			{
				"id": 100777,
				"title": "［輝け ! 合格への道］今井加奈（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100777.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100777.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100777.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/106/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100777.png"
			},
			{
				"id": 100778,
				"title": "［輝け ! 合格への道］今井加奈+（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100778.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100778.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100778.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/106/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100778.png"
			}
		]
	},
	{
		"name": "持田亜里沙",
		"kana": "もちだありさ",
		"type": 1,
		"height": 156,
		"old": 21,
		"weight": 45,
		"birthday": "8月24日",
		"blood": "AB",
		"hand": "右",
		"style": {
			"bust": 77,
			"waist": 54,
			"hip": 76
		},
		"imgs": [
			{
				"id": 100005,
				"title": "持田亜里沙（N）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100005.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100005.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100005.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/107/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100005.png"
			},
			{
				"id": 100006,
				"title": "持田亜里沙＋（N+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100006.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100006.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100006.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/107/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100006.png"
			},
			{
				"id": 100289,
				"title": "［うたのおねえさん］持田亜里沙（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100289.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100289.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100289.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/107/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100289.png"
			},
			{
				"id": 100290,
				"title": "［うたのおねえさん］持田亜里沙＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100290.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100290.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100290.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/107/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100290.png"
			},
			{
				"id": 100469,
				"title": "［ウサコちゃんとチアー］持田亜里沙（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100469.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100469.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100469.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/107/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100469.png"
			},
			{
				"id": 100470,
				"title": "［ウサコちゃんとチアー］持田亜里沙＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100470.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100470.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100470.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/107/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100470.png"
			},
			{
				"id": 100633,
				"title": "［せんせいとつくろ♪］持田亜里沙（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100633.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100633.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100633.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/107/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100633.png"
			},
			{
				"id": 100634,
				"title": "［せんせいとつくろ♪］持田亜里沙＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100634.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100634.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100634.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/107/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100634.png"
			},
			{
				"id": 100779,
				"title": "［みんなのお姉さん］持田亜里沙（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100779.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100779.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100779.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/107/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100779.png"
			},
			{
				"id": 100780,
				"title": "［みんなのお姉さん］持田亜里沙+（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100780.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100780.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100780.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/107/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100780.png"
			}
		]
	},
	{
		"name": "三村かな子",
		"kana": "みむらかなこ",
		"type": 1,
		"height": 153,
		"old": 17,
		"weight": 52,
		"birthday": "1月6日",
		"blood": "O",
		"hand": "右",
		"style": {
			"bust": 90,
			"waist": 65,
			"hip": 89
		},
		"imgs": [
			{
				"id": 100007,
				"title": "三村かな子（N）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100007.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100007.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100007.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/108/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100007.png"
			},
			{
				"id": 100008,
				"title": "三村かな子＋（N+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100008.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100008.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100008.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/108/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100008.png"
			},
			{
				"id": 100049,
				"title": "［ふわふわスマイル］三村かな子（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100049.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100049.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100049.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/108/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100049.png"
			},
			{
				"id": 100050,
				"title": "［ふわふわスマイル］三村かな子＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100050.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100050.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100050.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/108/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100050.png"
			},
			{
				"id": 100097,
				"title": "［ホワイトウィッチ］三村かな子（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100097.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100097.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100097.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/108/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100097.png"
			},
			{
				"id": 100098,
				"title": "［ホワイトウィッチ］三村かな子＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100098.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100098.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100098.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/108/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100098.png"
			},
			{
				"id": 100169,
				"title": "［パステルピンクな恋］三村かな子（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100169.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100169.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100169.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/108/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100169.png"
			},
			{
				"id": 100170,
				"title": "［パステルピンクな恋］三村かな子＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100170.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100170.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100170.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/108/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100170.png"
			},
			{
				"id": 100307,
				"title": "［ドルチェ・クラシカ］三村かな子（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100307.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100307.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100307.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/108/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100307.png"
			},
			{
				"id": 100308,
				"title": "［ドルチェ・クラシカ］三村かな子＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100308.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100308.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100308.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/108/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100308.png"
			},
			{
				"id": 100351,
				"title": "［Sweet Witches' Night］三村かな子（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100351.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100351.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100351.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/108/11.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100351.png"
			},
			{
				"id": 100352,
				"title": "［Sweet Witches' Night］三村かな子＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100352.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100352.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100352.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/108/12.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100352.png"
			},
			{
				"id": 100481,
				"title": "［新春の彩り］三村かな子（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100481.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100481.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100481.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/108/13.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100481.png"
			},
			{
				"id": 100482,
				"title": "［新春の彩り］三村かな子＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100482.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100482.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100482.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/108/14.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100482.png"
			},
			{
				"id": 100561,
				"title": "［スイートサマータイム］三村かな子（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100561.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100561.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100561.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/108/15.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100561.png"
			},
			{
				"id": 100562,
				"title": "［スイートサマータイム］三村かな子＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100562.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100562.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100562.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/108/16.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100562.png"
			},
			{
				"id": 100673,
				"title": "［ほの甘いロマンス］三村かな子（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100673.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100673.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100673.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/108/17.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100673.png"
			},
			{
				"id": 100674,
				"title": "［ほの甘いロマンス］三村かな子＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100674.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100674.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100674.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/108/18.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100674.png"
			}
		]
	},
	{
		"name": "奥山沙織",
		"kana": "おくやまさおり",
		"type": 1,
		"height": 156,
		"old": 19,
		"weight": 47,
		"birthday": "6月12日",
		"blood": "B",
		"hand": "右",
		"style": {
			"bust": 83,
			"waist": 57,
			"hip": 81
		},
		"imgs": [
			{
				"id": 100009,
				"title": "奥山沙織（N）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100009.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100009.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100009.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/109/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100009.png"
			},
			{
				"id": 100010,
				"title": "奥山沙織＋（N+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100010.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100010.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100010.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/109/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100010.png"
			},
			{
				"id": 100083,
				"title": "［ピュアリーガール］奥山沙織（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100083.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100083.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100083.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/109/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100083.png"
			},
			{
				"id": 100084,
				"title": "［ピュアリーガール］奥山沙織＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100084.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100084.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100084.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/109/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100084.png"
			},
			{
				"id": 100459,
				"title": "［ピュアリー・ロワイヤル］奥山沙織（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100459.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100459.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100459.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/109/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100459.png"
			},
			{
				"id": 100460,
				"title": "［ピュアリー・ロワイヤル］奥山沙織＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100460.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100460.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100460.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/109/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100460.png"
			},
			{
				"id": 100645,
				"title": "［ニューマイセルフ］奥山沙織（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100645.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100645.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100645.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/109/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100645.png"
			},
			{
				"id": 100646,
				"title": "［ニューマイセルフ］奥山沙織＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100646.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100646.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100646.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/109/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100646.png"
			}
		]
	},
	{
		"name": "間中美里",
		"kana": "まなかみさと",
		"type": 1,
		"height": 160,
		"old": 20,
		"weight": 46,
		"birthday": "11月6日",
		"blood": "AB",
		"hand": "右",
		"style": {
			"bust": 84,
			"waist": 57,
			"hip": 85
		},
		"imgs": [
			{
				"id": 100011,
				"title": "間中美里（R）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100011.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100011.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100011.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/110/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100011.png"
			},
			{
				"id": 100012,
				"title": "間中美里＋（R+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100012.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100012.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100012.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/110/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100012.png"
			},
			{
				"id": 100463,
				"title": "［プリマヴェーラビアッジョ］間中美里（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100463.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100463.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100463.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/110/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100463.png"
			},
			{
				"id": 100464,
				"title": "［プリマヴェーラビアッジョ］間中美里＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100464.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100464.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100464.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/110/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100464.png"
			},
			{
				"id": 100625,
				"title": "［ホワイトピクシー］間中美里（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100625.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100625.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100625.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/110/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100625.png"
			},
			{
				"id": 100626,
				"title": "［ホワイトピクシー］間中美里＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100626.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100626.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100626.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/110/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100626.png"
			},
			{
				"id": 100763,
				"title": "［グラッドリー・ロワイヤル］間中美里（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100763.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100763.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100763.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/110/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100763.png"
			},
			{
				"id": 100764,
				"title": "［グラッドリー・ロワイヤル］間中美里+（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100764.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100764.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100764.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/110/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100764.png"
			}
		]
	},
	{
		"name": "小日向美穂",
		"kana": "こひなたみほ",
		"type": 1,
		"height": 155,
		"old": 17,
		"weight": 42,
		"birthday": "12月16日",
		"blood": "O",
		"hand": "左",
		"style": {
			"bust": 82,
			"waist": 59,
			"hip": 86
		},
		"imgs": [
			{
				"id": 100013,
				"title": "小日向美穂（N）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100013.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100013.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100013.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/111/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100013.png"
			},
			{
				"id": 100014,
				"title": "小日向美穂＋（N+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100014.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100014.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100014.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/111/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100014.png"
			},
			{
				"id": 100055,
				"title": "［はにかみ乙女］小日向美穂（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100055.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100055.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100055.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/111/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100055.png"
			},
			{
				"id": 100056,
				"title": "［はにかみ乙女］小日向美穂＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100056.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100056.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100056.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/111/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100056.png"
			},
			{
				"id": 100093,
				"title": "［アタシポンコツアンドロイド］小日向美穂（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100093.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100093.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100093.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/111/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100093.png"
			},
			{
				"id": 100094,
				"title": "［アタシポンコツアンドロイド］小日向美穂＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100094.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100094.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100094.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/111/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100094.png"
			},
			{
				"id": 100173,
				"title": "［ユースフルロマンス］小日向美穂（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100173.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100173.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100173.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/111/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100173.png"
			},
			{
				"id": 100174,
				"title": "［ユースフルロマンス］小日向美穂＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100174.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100174.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100174.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/111/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100174.png"
			},
			{
				"id": 100291,
				"title": "［P.C.S］小日向美穂（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100291.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100291.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100291.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/111/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100291.png"
			},
			{
				"id": 100292,
				"title": "［P.C.S］小日向美穂＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100292.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100292.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100292.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/111/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100292.png"
			},
			{
				"id": 100375,
				"title": "［shabon song］小日向美穂（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100375.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100375.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100375.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/111/11.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100375.png"
			},
			{
				"id": 100376,
				"title": "［shabon song］小日向美穂＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100376.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100376.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100376.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/111/12.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100376.png"
			},
			{
				"id": 100491,
				"title": "［ビタースイート・タイム］小日向美穂（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100491.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100491.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100491.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/111/13.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100491.png"
			},
			{
				"id": 100492,
				"title": "［ビタースイート・タイム］小日向美穂＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100492.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100492.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100492.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/111/14.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100492.png"
			},
			{
				"id": 100497,
				"title": "［ツインテールの風］小日向美穂（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100497.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100497.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100497.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/111/15.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100497.png"
			},
			{
				"id": 100498,
				"title": "［ツインテールの風］小日向美穂＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100498.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100498.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100498.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/111/16.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100498.png"
			},
			{
				"id": 100613,
				"title": "［Palette］小日向美穂（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100613.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100613.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100613.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/111/17.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100613.png"
			},
			{
				"id": 100614,
				"title": "［Palette］小日向美穂＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100614.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100614.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100614.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/111/18.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100614.png"
			},
			{
				"id": 100669,
				"title": "［日向の乙女］小日向美穂（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100669.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100669.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100669.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/111/19.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100669.png"
			},
			{
				"id": 100670,
				"title": "［日向の乙女］小日向美穂＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100670.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100670.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100670.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/111/20.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100670.png"
			}
		]
	},
	{
		"name": "緒方智絵里",
		"kana": "おがたちえり",
		"type": 1,
		"height": 153,
		"old": 16,
		"weight": 42,
		"birthday": "6月11日",
		"blood": "A",
		"hand": "右",
		"style": {
			"bust": 79,
			"waist": 57,
			"hip": 80
		},
		"imgs": [
			{
				"id": 100015,
				"title": "緒方智絵里（N）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100015.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100015.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100015.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/112/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100015.png"
			},
			{
				"id": 100016,
				"title": "緒方智絵里＋（N+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100016.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100016.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100016.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/112/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100016.png"
			},
			{
				"id": 100063,
				"title": "［冬のメロディー］緒方智絵里（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100063.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100063.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100063.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/112/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100063.png"
			},
			{
				"id": 100064,
				"title": "［冬のメロディー］緒方智絵里＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100064.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100064.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100064.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/112/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100064.png"
			},
			{
				"id": 100107,
				"title": "［夢色クローバー］緒方智絵里（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100107.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100107.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100107.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/112/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100107.png"
			},
			{
				"id": 100108,
				"title": "［夢色クローバー］緒方智絵里＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100108.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100108.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100108.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/112/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100108.png"
			},
			{
				"id": 100241,
				"title": "［マイ・フェアリーテイル］緒方智絵里（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100241.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100241.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100241.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/112/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100241.png"
			},
			{
				"id": 100242,
				"title": "［マイ・フェアリーテイル］緒方智絵里＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100242.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100242.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100242.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/112/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100242.png"
			},
			{
				"id": 100285,
				"title": "［ビヨンド・ザ・スターライト］緒方智絵里（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100285.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100285.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100285.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/112/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100285.png"
			},
			{
				"id": 100286,
				"title": "［ビヨンド・ザ・スターライト］緒方智絵里＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100286.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100286.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100286.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/112/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100286.png"
			},
			{
				"id": 100467,
				"title": "［メリー・メリー・ホワイト］緒方智絵里（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100467.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100467.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100467.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/112/11.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100467.png"
			},
			{
				"id": 100468,
				"title": "［メリー・メリー・ホワイト］緒方智絵里＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100468.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100468.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100468.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/112/12.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100468.png"
			},
			{
				"id": 100519,
				"title": "［Vast world］緒方智絵里（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100519.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100519.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100519.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/112/13.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100519.png"
			},
			{
				"id": 100520,
				"title": "［Vast world］緒方智絵里＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100520.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100520.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100520.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/112/14.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100520.png"
			},
			{
				"id": 100549,
				"title": "［銀のイルカと熱い風］緒方智絵里（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100549.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100549.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100549.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/112/15.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100549.png"
			},
			{
				"id": 100550,
				"title": "［銀のイルカと熱い風］緒方智絵里＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100550.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100550.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100550.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/112/16.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100550.png"
			},
			{
				"id": 100611,
				"title": "［ホワイト・ハピネス］緒方智絵里（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100611.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100611.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100611.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/112/17.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100611.png"
			},
			{
				"id": 100612,
				"title": "［ホワイト・ハピネス］緒方智絵里＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100612.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100612.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100612.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/112/18.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100612.png"
			}
		]
	},
	{
		"name": "五十嵐響子",
		"kana": "いがらしきょうこ",
		"type": 1,
		"height": 154,
		"old": 15,
		"weight": 43,
		"birthday": "8月10日",
		"blood": "AB",
		"hand": "右",
		"style": {
			"bust": 81,
			"waist": 58,
			"hip": 80
		},
		"imgs": [
			{
				"id": 100099,
				"title": "五十嵐響子（N）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100099.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100099.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100099.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/113/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100099.png"
			},
			{
				"id": 100100,
				"title": "五十嵐響子＋（N+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100100.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100100.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100100.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/113/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100100.png"
			},
			{
				"id": 100121,
				"title": "［スイートクリスマス］五十嵐響子（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100121.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100121.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100121.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/113/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100121.png"
			},
			{
				"id": 100122,
				"title": "［スイートクリスマス］五十嵐響子＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100122.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100122.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100122.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/113/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100122.png"
			},
			{
				"id": 100205,
				"title": "［あったかハート］五十嵐響子（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100205.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100205.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100205.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/113/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100205.png"
			},
			{
				"id": 100206,
				"title": "［あったかハート］五十嵐響子＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100206.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100206.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100206.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/113/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100206.png"
			},
			{
				"id": 100295,
				"title": "［ラブレター］五十嵐響子（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100295.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100295.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100295.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/113/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100295.png"
			},
			{
				"id": 100296,
				"title": "［ラブレター］五十嵐響子＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100296.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100296.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100296.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/113/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100296.png"
			},
			{
				"id": 100359,
				"title": "［ドラマティック・ナイト］五十嵐響子（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100359.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100359.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100359.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/113/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100359.png"
			},
			{
				"id": 100360,
				"title": "［ドラマティック・ナイト］五十嵐響子＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100360.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100360.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100360.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/113/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100360.png"
			},
			{
				"id": 100401,
				"title": "［With Love］五十嵐響子（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100401.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100401.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100401.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/113/11.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100401.png"
			},
			{
				"id": 100402,
				"title": "［With Love］五十嵐響子＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100402.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100402.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100402.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/113/12.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100402.png"
			},
			{
				"id": 100527,
				"title": "［桜の風］五十嵐響子（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100527.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100527.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100527.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/113/13.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100527.png"
			},
			{
				"id": 100528,
				"title": "［桜の風］五十嵐響子＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100528.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100528.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100528.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/113/14.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100528.png"
			},
			{
				"id": 100557,
				"title": "［P.C.S］五十嵐響子（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100557.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100557.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100557.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/113/15.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100557.png"
			},
			{
				"id": 100558,
				"title": "［P.C.S］五十嵐響子＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100558.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100558.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100558.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/113/16.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100558.png"
			},
			{
				"id": 100615,
				"title": "［Palette］五十嵐響子（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100615.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100615.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100615.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/113/17.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100615.png"
			},
			{
				"id": 100616,
				"title": "［Palette］五十嵐響子＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100616.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100616.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100616.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/113/18.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100616.png"
			},
			{
				"id": 100761,
				"title": "［スウィートハートロマンス］五十嵐響子（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100761.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100761.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100761.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/113/19.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100761.png"
			},
			{
				"id": 100762,
				"title": "［スウィートハートロマンス］五十嵐響子+（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100762.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100762.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100762.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/113/20.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100762.png"
			}
		]
	},
	{
		"name": "柳瀬美由紀",
		"kana": "やなせみゆき",
		"type": 1,
		"height": 144,
		"old": 14,
		"weight": 33,
		"birthday": "3月16日",
		"blood": "O",
		"hand": "右",
		"style": {
			"bust": 75,
			"waist": 54,
			"hip": 77
		},
		"imgs": [
			{
				"id": 100017,
				"title": "柳瀬美由紀（R）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100017.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100017.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100017.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/114/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100017.png"
			},
			{
				"id": 100018,
				"title": "柳瀬美由紀＋（R+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100018.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100018.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100018.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/114/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100018.png"
			},
			{
				"id": 100427,
				"title": "［夏色ガール］柳瀬美由紀（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100427.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100427.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100427.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/114/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100427.png"
			},
			{
				"id": 100428,
				"title": "［夏色ガール］柳瀬美由紀＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100428.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100428.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100428.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/114/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100428.png"
			},
			{
				"id": 100601,
				"title": "［かわいいコックさん］柳瀬美由紀（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100601.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100601.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100601.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/114/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100601.png"
			},
			{
				"id": 100602,
				"title": "［かわいいコックさん］柳瀬美由紀＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100602.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100602.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100602.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/114/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100602.png"
			},
			{
				"id": 100737,
				"title": "［ラスティックピース］柳瀬美由紀（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100737.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100737.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100737.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/114/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100737.png"
			},
			{
				"id": 100738,
				"title": "［ラスティックピース］柳瀬美由紀＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100738.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100738.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100738.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/114/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100738.png"
			}
		]
	},
	{
		"name": "櫻井桃華",
		"kana": "さくらいももか",
		"type": 1,
		"height": 145,
		"old": 12,
		"weight": 39,
		"birthday": "4月8日",
		"blood": "A",
		"hand": "右",
		"style": {
			"bust": 72,
			"waist": 53,
			"hip": 75
		},
		"imgs": [
			{
				"id": 100127,
				"title": "櫻井桃華（N）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100127.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100127.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100127.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/115/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100127.png"
			},
			{
				"id": 100128,
				"title": "櫻井桃華＋（N+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100128.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100128.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100128.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/115/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100128.png"
			},
			{
				"id": 100181,
				"title": "［薔薇色お姫様］櫻井桃華（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100181.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100181.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100181.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/115/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100181.png"
			},
			{
				"id": 100182,
				"title": "［薔薇色お姫様］櫻井桃華＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100182.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100182.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100182.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/115/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100182.png"
			},
			{
				"id": 100191,
				"title": "［ローズフルール］櫻井桃華（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100191.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100191.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100191.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/115/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100191.png"
			},
			{
				"id": 100192,
				"title": "［ローズフルール］櫻井桃華＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100192.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100192.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100192.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/115/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100192.png"
			},
			{
				"id": 100253,
				"title": "［明日また会えるよね］櫻井桃華（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100253.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100253.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100253.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/115/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100253.png"
			},
			{
				"id": 100254,
				"title": "［明日また会えるよね］櫻井桃華＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100254.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100254.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100254.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/115/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100254.png"
			},
			{
				"id": 100317,
				"title": "［ディアマイレディ］櫻井桃華（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100317.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100317.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100317.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/115/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100317.png"
			},
			{
				"id": 100318,
				"title": "［ディアマイレディ］櫻井桃華＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100318.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100318.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100318.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/115/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100318.png"
			},
			{
				"id": 100409,
				"title": "［Yes ! Party Time ! ! ］櫻井桃華（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100409.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100409.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100409.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/115/11.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100409.png"
			},
			{
				"id": 100410,
				"title": "［Yes ! Party Time ! ! ］櫻井桃華＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100410.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100410.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100410.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/115/12.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100410.png"
			},
			{
				"id": 100511,
				"title": "［キラッ ! 満開スマイル］櫻井桃華（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100511.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100511.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100511.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/115/13.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100511.png"
			},
			{
				"id": 100512,
				"title": "［キラッ ! 満開スマイル］櫻井桃華＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100512.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100512.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100512.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/115/14.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100512.png"
			},
			{
				"id": 100587,
				"title": "［ドレミファクトリー ! ］櫻井桃華（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100587.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100587.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100587.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/115/15.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100587.png"
			},
			{
				"id": 100588,
				"title": "［ドレミファクトリー ! ］櫻井桃華＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100588.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100588.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100588.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/115/16.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100588.png"
			},
			{
				"id": 100635,
				"title": "［イノセント・ホワイト］櫻井桃華（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100635.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100635.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100635.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/115/17.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100635.png"
			},
			{
				"id": 100636,
				"title": "［イノセント・ホワイト］櫻井桃華＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100636.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100636.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100636.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/115/18.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100636.png"
			}
		]
	},
	{
		"name": "江上椿",
		"kana": "えがみつばき",
		"type": 1,
		"height": 161,
		"old": 19,
		"weight": 46,
		"birthday": "2月6日",
		"blood": "A",
		"hand": "左",
		"style": {
			"bust": 80,
			"waist": 57,
			"hip": 80
		},
		"imgs": [
			{
				"id": 100331,
				"title": "江上椿（N）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100331.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100331.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100331.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/116/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100331.png"
			},
			{
				"id": 100332,
				"title": "江上椿＋（N+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100332.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100332.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100332.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/116/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100332.png"
			},
			{
				"id": 100449,
				"title": "［ゆかしい花椿］江上椿（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100449.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100449.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100449.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/116/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100449.png"
			},
			{
				"id": 100450,
				"title": "［ゆかしい花椿］江上椿＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100450.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100450.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100450.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/116/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100450.png"
			},
			{
				"id": 100653,
				"title": "［カメリア・ロワイヤル］江上椿（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100653.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100653.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100653.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/116/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100653.png"
			},
			{
				"id": 100654,
				"title": "［カメリア・ロワイヤル］江上椿＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100654.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100654.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100654.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/116/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100654.png"
			}
		]
	},
	{
		"name": "長富蓮実",
		"kana": "ながとみはすみ",
		"type": 1,
		"height": 161,
		"old": 16,
		"weight": 45,
		"birthday": "3月19日",
		"blood": "A",
		"hand": "右",
		"style": {
			"bust": 83,
			"waist": 56,
			"hip": 85
		},
		"imgs": [
			{
				"id": 100303,
				"title": "長富蓮実（N）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100303.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100303.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100303.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/117/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100303.png"
			},
			{
				"id": 100304,
				"title": "長富蓮実＋（N+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100304.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100304.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100304.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/117/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100304.png"
			},
			{
				"id": 100381,
				"title": "［フィーチャースイートピー］長富蓮実（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100381.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100381.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100381.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/117/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100381.png"
			},
			{
				"id": 100382,
				"title": "［フィーチャースイートピー］長富蓮実＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100382.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100382.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100382.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/117/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100382.png"
			},
			{
				"id": 100493,
				"title": "［コール・ミー・メイビー］長富蓮実（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100493.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100493.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100493.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/117/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100493.png"
			},
			{
				"id": 100494,
				"title": "［コール・ミー・メイビー］長富蓮実＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100494.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100494.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100494.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/117/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100494.png"
			},
			{
				"id": 100691,
				"title": "［まわって♪メモリー］長富蓮実（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100691.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100691.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100691.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/117/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100691.png"
			},
			{
				"id": 100692,
				"title": "［まわって♪メモリー］長富蓮実＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100692.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100692.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100692.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/117/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100692.png"
			}
		]
	},
	{
		"name": "横山千佳",
		"kana": "よこやまちか",
		"type": 1,
		"height": 127,
		"old": 9,
		"weight": 31,
		"birthday": "12月18日",
		"blood": "A",
		"hand": "右",
		"style": {
			"bust": 60,
			"waist": 55,
			"hip": 65
		},
		"imgs": [
			{
				"id": 100109,
				"title": "横山千佳（N）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100109.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100109.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100109.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/118/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100109.png"
			},
			{
				"id": 100110,
				"title": "横山千佳＋（N+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100110.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100110.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100110.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/118/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100110.png"
			},
			{
				"id": 100137,
				"title": "［マジカル☆プリティーハート］横山千佳（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100137.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100137.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100137.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/118/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100137.png"
			},
			{
				"id": 100138,
				"title": "［マジカル☆プリティーハート］横山千佳＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100138.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100138.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100138.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/118/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100138.png"
			},
			{
				"id": 100501,
				"title": "［小さなおひな様］横山千佳（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100501.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100501.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100501.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/118/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100501.png"
			},
			{
				"id": 100502,
				"title": "［小さなおひな様］横山千佳＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100502.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100502.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100502.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/118/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100502.png"
			},
			{
				"id": 100621,
				"title": "［朱きツワモノ］横山千佳（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100621.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100621.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100621.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/118/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100621.png"
			},
			{
				"id": 100622,
				"title": "［朱きツワモノ］横山千佳＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100622.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100622.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100622.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/118/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100622.png"
			},
			{
				"id": 100739,
				"title": "［おしゃれのまほう］横山千佳（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100739.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100739.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100739.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/118/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100739.png"
			},
			{
				"id": 100740,
				"title": "［おしゃれのまほう］横山千佳＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100740.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100740.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100740.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/118/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100740.png"
			}
		]
	},
	{
		"name": "関裕美",
		"kana": "せきひろみ",
		"type": 1,
		"height": 155,
		"old": 14,
		"weight": 43,
		"birthday": "8月17日",
		"blood": "A",
		"hand": "右",
		"style": {
			"bust": 78,
			"waist": 55,
			"hip": 80
		},
		"imgs": [
			{
				"id": 100197,
				"title": "関裕美（N）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100197.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100197.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100197.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/119/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100197.png"
			},
			{
				"id": 100198,
				"title": "関裕美＋（N+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100198.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100198.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100198.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/119/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100198.png"
			},
			{
				"id": 100259,
				"title": "［スパニッシュダンサー］関裕美（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100259.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100259.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100259.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/119/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100259.png"
			},
			{
				"id": 100260,
				"title": "［スパニッシュダンサー］関裕美＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100260.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100260.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100260.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/119/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100260.png"
			},
			{
				"id": 100369,
				"title": "［出逢えた憧憬］関裕美（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100369.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100369.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100369.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/119/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100369.png"
			},
			{
				"id": 100370,
				"title": "［出逢えた憧憬］関裕美＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100370.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100370.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100370.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/119/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100370.png"
			},
			{
				"id": 100471,
				"title": "［恋が咲く季節］関裕美（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100471.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100471.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100471.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/119/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100471.png"
			},
			{
				"id": 100472,
				"title": "［恋が咲く季節］関裕美＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100472.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100472.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100472.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/119/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100472.png"
			},
			{
				"id": 100515,
				"title": "［青春デビュー］関裕美（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100515.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100515.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100515.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/119/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100515.png"
			},
			{
				"id": 100516,
				"title": "［青春デビュー］関裕美＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100516.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100516.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100516.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/119/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100516.png"
			},
			{
				"id": 100705,
				"title": "［カントリー・ステップ］関裕美（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100705.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100705.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100705.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/119/11.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100705.png"
			},
			{
				"id": 100706,
				"title": "［カントリー・ステップ］関裕美＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100706.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100706.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100706.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/119/12.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100706.png"
			}
		]
	},
	{
		"name": "太田優",
		"kana": "おおたゆう",
		"type": 1,
		"height": 159,
		"old": 21,
		"weight": 45,
		"birthday": "1月28日",
		"blood": "AB",
		"hand": "両",
		"style": {
			"bust": 89,
			"waist": 57,
			"hip": 87
		},
		"imgs": [
			{
				"id": 100257,
				"title": "太田優（N）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100257.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100257.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100257.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/120/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100257.png"
			},
			{
				"id": 100258,
				"title": "太田優＋（N+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100258.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100258.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100258.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/120/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100258.png"
			},
			{
				"id": 100377,
				"title": "［わんダフルチアー］太田優（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100377.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100377.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100377.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/120/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100377.png"
			},
			{
				"id": 100378,
				"title": "［わんダフルチアー］太田優＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100378.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100378.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100378.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/120/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100378.png"
			},
			{
				"id": 100581,
				"title": "［ラブリーマイベイビー］太田優（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100581.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100581.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100581.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/120/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100581.png"
			},
			{
				"id": 100582,
				"title": "［ラブリーマイベイビー］太田優＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100582.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100582.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100582.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/120/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100582.png"
			},
			{
				"id": 100729,
				"title": "［ブラッシング・ユー ! ］太田優（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100729.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100729.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100729.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/120/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100729.png"
			},
			{
				"id": 100730,
				"title": "［ブラッシング・ユー ! ］太田優＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100730.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100730.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100730.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/120/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100730.png"
			}
		]
	},
	{
		"name": "棟方愛海",
		"kana": "むなかたあつみ",
		"type": 1,
		"height": 151,
		"old": 14,
		"weight": 41,
		"birthday": "8月1日",
		"blood": "A",
		"hand": "両",
		"style": {
			"bust": 73,
			"waist": 56,
			"hip": 75
		},
		"imgs": [
			{
				"id": 100159,
				"title": "棟方愛海（N）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100159.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100159.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100159.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/121/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100159.png"
			},
			{
				"id": 100160,
				"title": "棟方愛海＋（N+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100160.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100160.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100160.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/121/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100160.png"
			},
			{
				"id": 100239,
				"title": "［わきわきハンター］棟方愛海（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100239.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100239.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100239.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/121/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100239.png"
			},
			{
				"id": 100240,
				"title": "［わきわきハンター］棟方愛海＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100240.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100240.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100240.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/121/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100240.png"
			},
			{
				"id": 100407,
				"title": "［わきわきわんだほー］棟方愛海（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100407.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100407.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100407.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/121/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100407.png"
			},
			{
				"id": 100408,
				"title": "［わきわきわんだほー］棟方愛海＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100408.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100408.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100408.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/121/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100408.png"
			},
			{
				"id": 100537,
				"title": "［HARURUNRUN］棟方愛海（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100537.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100537.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100537.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/121/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100537.png"
			},
			{
				"id": 100538,
				"title": "［HARURUNRUN］棟方愛海＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100538.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100538.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100538.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/121/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100538.png"
			},
			{
				"id": 100559,
				"title": "［愛盛り☆フラッペ］棟方愛海（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100559.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100559.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100559.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/121/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100559.png"
			},
			{
				"id": 100560,
				"title": "［愛盛り☆フラッペ］棟方愛海＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100560.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100560.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100560.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/121/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100560.png"
			},
			{
				"id": 100667,
				"title": "［きゅん・きゅん・まっくす］棟方愛海（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100667.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100667.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100667.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/121/11.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100667.png"
			},
			{
				"id": 100668,
				"title": "［きゅん・きゅん・まっくす］棟方愛海＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100668.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100668.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100668.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/121/12.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100668.png"
			}
		]
	},
	{
		"name": "藤本里奈",
		"kana": "ふじもとりな",
		"type": 1,
		"height": 154,
		"old": 18,
		"weight": 41,
		"birthday": "10月14日",
		"blood": "A",
		"hand": "右",
		"style": {
			"bust": 77,
			"waist": 55,
			"hip": 80
		},
		"imgs": [
			{
				"id": 100071,
				"title": "藤本里奈（N）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100071.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100071.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100071.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/122/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100071.png"
			},
			{
				"id": 100072,
				"title": "藤本里奈＋（N+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100072.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100072.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100072.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/122/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100072.png"
			},
			{
				"id": 100161,
				"title": "［ラヴリー☆ハート］藤本里奈（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100161.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100161.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100161.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/122/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100161.png"
			},
			{
				"id": 100162,
				"title": "［ラヴリー☆ハート］藤本里奈＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100162.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100162.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100162.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/122/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100162.png"
			},
			{
				"id": 100231,
				"title": "［純情Midnight伝説］藤本里奈（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100231.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100231.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100231.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/122/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100231.png"
			},
			{
				"id": 100232,
				"title": "［純情Midnight伝説］藤本里奈＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100232.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100232.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100232.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/122/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100232.png"
			},
			{
				"id": 100383,
				"title": "［ラブモリ☆パーリィー］藤本里奈（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100383.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100383.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100383.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/122/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100383.png"
			},
			{
				"id": 100384,
				"title": "［ラブモリ☆パーリィー］藤本里奈＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100384.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100384.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100384.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/122/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100384.png"
			},
			{
				"id": 100543,
				"title": "［Virgin Love］藤本里奈（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100543.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100543.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100543.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/122/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100543.png"
			},
			{
				"id": 100544,
				"title": "［Virgin Love］藤本里奈＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100544.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100544.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100544.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/122/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100544.png"
			},
			{
				"id": 100693,
				"title": "［ラヴリー☆ライダー］藤本里奈（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100693.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100693.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100693.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/122/11.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100693.png"
			},
			{
				"id": 100694,
				"title": "［ラヴリー☆ライダー］藤本里奈＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100694.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100694.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100694.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/122/12.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100694.png"
			},
			{
				"id": 100735,
				"title": "［Gossip Club］藤本里奈（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100735.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100735.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100735.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/122/13.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100735.png"
			},
			{
				"id": 100736,
				"title": "［Gossip Club］藤本里奈＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100736.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100736.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100736.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/122/14.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100736.png"
			}
		]
	},
	{
		"name": "大原みちる",
		"kana": "おおはらみちる",
		"type": 1,
		"height": 153,
		"old": 15,
		"weight": 40,
		"birthday": "4月12日",
		"blood": "O",
		"hand": "右",
		"style": {
			"bust": 78,
			"waist": 55,
			"hip": 80
		},
		"imgs": [
			{
				"id": 100233,
				"title": "大原みちる（N）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100233.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100233.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100233.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/123/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100233.png"
			},
			{
				"id": 100234,
				"title": "大原みちる＋（N+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100234.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100234.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100234.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/123/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100234.png"
			},
			{
				"id": 100301,
				"title": "［モグモグバレンタイン］大原みちる（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100301.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100301.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100301.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/123/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100301.png"
			},
			{
				"id": 100302,
				"title": "［モグモグバレンタイン］大原みちる＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100302.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100302.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100302.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/123/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100302.png"
			},
			{
				"id": 100489,
				"title": "［モグモグオータム］大原みちる（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100489.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100489.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100489.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/123/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100489.png"
			},
			{
				"id": 100490,
				"title": "［モグモグオータム］大原みちる＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100490.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100490.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100490.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/123/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100490.png"
			},
			{
				"id": 100535,
				"title": "［パンパンの夢］大原みちる（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100535.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100535.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100535.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/123/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100535.png"
			},
			{
				"id": 100536,
				"title": "［パンパンの夢］大原みちる＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100536.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100536.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100536.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/123/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100536.png"
			},
			{
				"id": 100723,
				"title": "［焼きたてハピネス］大原みちる（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100723.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100723.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100723.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/123/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100723.png"
			},
			{
				"id": 100724,
				"title": "［焼きたてハピネス］大原みちる＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100724.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100724.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100724.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/123/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100724.png"
			}
		]
	},
	{
		"name": "遊佐こずえ",
		"kana": "ゆさこずえ",
		"type": 1,
		"height": 130,
		"old": 11,
		"weight": 28,
		"birthday": "2月19日",
		"blood": "B",
		"hand": "右",
		"style": {
			"bust": 62,
			"waist": 50,
			"hip": 65
		},
		"imgs": [
			{
				"id": 100283,
				"title": "遊佐こずえ（R）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100283.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100283.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100283.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/124/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100283.png"
			},
			{
				"id": 100284,
				"title": "遊佐こずえ＋（R+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100284.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100284.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100284.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/124/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100284.png"
			},
			{
				"id": 100319,
				"title": "［マジカルエンジェル］遊佐こずえ（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100319.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100319.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100319.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/124/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100319.png"
			},
			{
				"id": 100320,
				"title": "［マジカルエンジェル］遊佐こずえ＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100320.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100320.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100320.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/124/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100320.png"
			},
			{
				"id": 100389,
				"title": "［ようせいのこ］遊佐こずえ（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100389.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100389.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100389.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/124/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100389.png"
			},
			{
				"id": 100390,
				"title": "［ようせいのこ］遊佐こずえ＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100390.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100390.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100390.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/124/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100390.png"
			},
			{
				"id": 100503,
				"title": "［ホワイトテイル］遊佐こずえ（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100503.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100503.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100503.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/124/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100503.png"
			},
			{
				"id": 100504,
				"title": "［ホワイトテイル］遊佐こずえ＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100504.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100504.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100504.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/124/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100504.png"
			},
			{
				"id": 100759,
				"title": "［こずえからみんなへ］遊佐こずえ（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100759.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100759.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100759.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/124/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100759.png"
			},
			{
				"id": 100760,
				"title": "［こずえからみんなへ］遊佐こずえ+（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100760.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100760.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100760.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/124/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100760.png"
			},
			{
				"id": 100771,
				"title": "［夢をのぞいたら］遊佐こずえ（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100771.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100771.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100771.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/124/11.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100771.png"
			},
			{
				"id": 100772,
				"title": "［夢をのぞいたら］遊佐こずえ+（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100772.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100772.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100772.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/124/12.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100772.png"
			}
		]
	},
	{
		"name": "大沼くるみ",
		"kana": "おおぬまくるみ",
		"type": 1,
		"height": 145,
		"old": 13,
		"weight": 40,
		"birthday": "3月30日",
		"blood": "A",
		"hand": "右",
		"style": {
			"bust": 0,
			"waist": 0,
			"hip": 0
		},
		"imgs": [
			{
				"id": 100265,
				"title": "大沼くるみ（R）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100265.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100265.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100265.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/125/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100265.png"
			},
			{
				"id": 100266,
				"title": "大沼くるみ＋（R+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100266.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100266.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100266.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/125/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100266.png"
			},
			{
				"id": 100333,
				"title": "［だだもれエモーション］大沼くるみ（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100333.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100333.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100333.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/125/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100333.png"
			},
			{
				"id": 100334,
				"title": "［だだもれエモーション］大沼くるみ＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100334.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100334.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100334.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/125/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100334.png"
			},
			{
				"id": 100521,
				"title": "［ぷるんぷるんB.B］大沼くるみ（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100521.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100521.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100521.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/125/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100521.png"
			},
			{
				"id": 100522,
				"title": "［ぷるんぷるんB.B］大沼くるみ＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100522.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100522.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100522.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/125/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100522.png"
			},
			{
				"id": 100643,
				"title": "［しゅまいるプレゼント］大沼くるみ（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100643.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100643.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100643.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/125/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100643.png"
			},
			{
				"id": 100644,
				"title": "［しゅまいるプレゼント］大沼くるみ＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100644.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100644.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100644.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/125/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100644.png"
			},
			{
				"id": 100775,
				"title": "［ふくらむ初夢］大沼くるみ（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100775.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100775.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100775.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/125/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100775.png"
			},
			{
				"id": 100776,
				"title": "［ふくらむ初夢］大沼くるみ+（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100776.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100776.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100776.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/125/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100776.png"
			}
		]
	},
	{
		"name": "一ノ瀬志希",
		"kana": "いちのせしき",
		"type": 1,
		"height": 161,
		"old": 18,
		"weight": 43,
		"birthday": "5月30日",
		"blood": "O",
		"hand": "右",
		"style": {
			"bust": 83,
			"waist": 57,
			"hip": 82
		},
		"imgs": [
			{
				"id": 100087,
				"title": "一ノ瀬志希（N）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100087.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100087.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100087.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/126/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100087.png"
			},
			{
				"id": 100088,
				"title": "一ノ瀬志希＋（N+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100088.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100088.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100088.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/126/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100088.png"
			},
			{
				"id": 100101,
				"title": "［パフュームトリッパー］一ノ瀬志希（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100101.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100101.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100101.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/126/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100101.png"
			},
			{
				"id": 100102,
				"title": "［パフュームトリッパー］一ノ瀬志希＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100102.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100102.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100102.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/126/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100102.png"
			},
			{
				"id": 100153,
				"title": "［ミスティックエリクシル］一ノ瀬志希（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100153.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100153.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100153.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/126/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100153.png"
			},
			{
				"id": 100154,
				"title": "［ミスティックエリクシル］一ノ瀬志希＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100154.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100154.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100154.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/126/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100154.png"
			},
			{
				"id": 100203,
				"title": "［つぼみ］一ノ瀬志希（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100203.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100203.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100203.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/126/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100203.png"
			},
			{
				"id": 100204,
				"title": "［つぼみ］一ノ瀬志希＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100204.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100204.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100204.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/126/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100204.png"
			},
			{
				"id": 100281,
				"title": "［インビテーション・ダイブ］一ノ瀬志希（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100281.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100281.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100281.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/126/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100281.png"
			},
			{
				"id": 100282,
				"title": "［インビテーション・ダイブ］一ノ瀬志希＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100282.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100282.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100282.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/126/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100282.png"
			},
			{
				"id": 100499,
				"title": "［アイロニカル・エトランゼ］一ノ瀬志希（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100499.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100499.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100499.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/126/11.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100499.png"
			},
			{
				"id": 100500,
				"title": "［アイロニカル・エトランゼ］一ノ瀬志希＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100500.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100500.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100500.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/126/12.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100500.png"
			},
			{
				"id": 100571,
				"title": "［クレイジークレイジー］一ノ瀬志希（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100571.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100571.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100571.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/126/13.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100571.png"
			},
			{
				"id": 100572,
				"title": "［クレイジークレイジー］一ノ瀬志希＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100572.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100572.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100572.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/126/14.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100572.png"
			},
			{
				"id": 100703,
				"title": "［バベル］一ノ瀬志希（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100703.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100703.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100703.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/126/15.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100703.png"
			},
			{
				"id": 100704,
				"title": "［バベル］一ノ瀬志希＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100704.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100704.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100704.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/126/16.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100704.png"
			},
			{
				"id": 100749,
				"title": "［清澄のエッセンス］一ノ瀬志希（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100749.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100749.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100749.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/126/17.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100749.png"
			},
			{
				"id": 100750,
				"title": "［清澄のエッセンス］一ノ瀬志希+（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100750.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100750.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100750.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/126/18.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100750.png"
			}
		]
	},
	{
		"name": "前川みく",
		"kana": "まえかわみく",
		"type": 1,
		"height": 152,
		"old": 15,
		"weight": 45,
		"birthday": "2月22日",
		"blood": "B",
		"hand": "右",
		"style": {
			"bust": 85,
			"waist": 55,
			"hip": 81
		},
		"imgs": [
			{
				"id": 100019,
				"title": "前川みく（R）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100019.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100019.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100019.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/127/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100019.png"
			},
			{
				"id": 100020,
				"title": "前川みく＋（R+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100020.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100020.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100020.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/127/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100020.png"
			},
			{
				"id": 100043,
				"title": "［セクシーキャット］前川みく（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100043.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100043.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100043.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/127/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100043.png"
			},
			{
				"id": 100044,
				"title": "［セクシーキャット］前川みく＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100044.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100044.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100044.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/127/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100044.png"
			},
			{
				"id": 100091,
				"title": "［キャットパーティー］前川みく（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100091.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100091.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100091.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/127/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100091.png"
			},
			{
				"id": 100092,
				"title": "［キャットパーティー］前川みく＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100092.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100092.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100092.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/127/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100092.png"
			},
			{
				"id": 100193,
				"title": "［マジメ／ネコチャン］前川みく（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100193.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100193.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100193.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/127/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100193.png"
			},
			{
				"id": 100194,
				"title": "［マジメ／ネコチャン］前川みく＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100194.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100194.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100194.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/127/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100194.png"
			},
			{
				"id": 100227,
				"title": "［ドリーミンブライド］前川みく（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100227.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100227.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100227.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/127/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100227.png"
			},
			{
				"id": 100228,
				"title": "［ドリーミンブライド］前川みく＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100228.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100228.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100228.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/127/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100228.png"
			},
			{
				"id": 100329,
				"title": "［EVERMORE］前川みく（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100329.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100329.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100329.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/127/11.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100329.png"
			},
			{
				"id": 100330,
				"title": "［EVERMORE］前川みく＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100330.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100330.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100330.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/127/12.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100330.png"
			},
			{
				"id": 100395,
				"title": "［アヴァンチュール・シャト］前川みく（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100395.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100395.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100395.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/127/13.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100395.png"
			},
			{
				"id": 100396,
				"title": "［アヴァンチュール・シャト］前川みく＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100396.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100396.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100396.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/127/14.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100396.png"
			},
			{
				"id": 100429,
				"title": "［Take me☆Take you］前川みく（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100429.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100429.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100429.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/127/15.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100429.png"
			},
			{
				"id": 100430,
				"title": "［Take me☆Take you］前川みく＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100430.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100430.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100430.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/127/16.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100430.png"
			},
			{
				"id": 100575,
				"title": "［チャーミングキャット］前川みく（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100575.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100575.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100575.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/127/17.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100575.png"
			},
			{
				"id": 100576,
				"title": "［チャーミングキャット］前川みく＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100576.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100576.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100576.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/127/18.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100576.png"
			},
			{
				"id": 100595,
				"title": "［Starry-Go-Round］前川みく（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100595.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100595.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100595.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/127/19.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100595.png"
			},
			{
				"id": 100596,
				"title": "［Starry-Go-Round］前川みく＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100596.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100596.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100596.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/127/20.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100596.png"
			},
			{
				"id": 100773,
				"title": "［ハッピーにゃーイヤー］前川みく（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100773.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100773.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100773.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/127/21.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100773.png"
			},
			{
				"id": 100774,
				"title": "［ハッピーにゃーイヤー］前川みく+（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100774.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100774.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100774.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/127/22.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100774.png"
			}
		]
	},
	{
		"name": "赤西瑛梨華",
		"kana": "あかにしえりか",
		"type": 1,
		"height": 154,
		"old": 16,
		"weight": 55,
		"birthday": "7月7日",
		"blood": "O",
		"hand": "両",
		"style": {
			"bust": 92,
			"waist": 59,
			"hip": 88
		},
		"imgs": [
			{
				"id": 100341,
				"title": "赤西瑛梨華（R）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100341.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100341.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100341.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/128/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100341.png"
			},
			{
				"id": 100342,
				"title": "赤西瑛梨華＋（R+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100342.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100342.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100342.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/128/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100342.png"
			},
			{
				"id": 100405,
				"title": "［ぷるるんスポーティ］赤西瑛梨華（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100405.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100405.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100405.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/128/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100405.png"
			},
			{
				"id": 100406,
				"title": "［ぷるるんスポーティ］赤西瑛梨華＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100406.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100406.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100406.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/128/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100406.png"
			},
			{
				"id": 100585,
				"title": "［吸血貴族］赤西瑛梨華（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100585.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100585.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100585.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/128/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100585.png"
			},
			{
				"id": 100586,
				"title": "［吸血貴族］赤西瑛梨華＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100586.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100586.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100586.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/128/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100586.png"
			},
			{
				"id": 100741,
				"title": "［みんなの人気者］赤西瑛梨華（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100741.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100741.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100741.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/128/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100741.png"
			},
			{
				"id": 100742,
				"title": "［みんなの人気者］赤西瑛梨華+（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100742.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100742.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100742.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/128/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100742.png"
			}
		]
	},
	{
		"name": "松原早耶",
		"kana": "まつばらさや",
		"type": 1,
		"height": 156,
		"old": 18,
		"weight": 43,
		"birthday": "12月28日",
		"blood": "AB",
		"hand": "右",
		"style": {
			"bust": 83,
			"waist": 58,
			"hip": 86
		},
		"imgs": [
			{
				"id": 100217,
				"title": "松原早耶（R）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100217.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100217.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100217.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/129/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100217.png"
			},
			{
				"id": 100218,
				"title": "松原早耶＋（R+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100218.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100218.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100218.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/129/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100218.png"
			},
			{
				"id": 100365,
				"title": "［ロワイヤルハート］松原早耶（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100365.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100365.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100365.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/129/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100365.png"
			},
			{
				"id": 100366,
				"title": "［ロワイヤルハート］松原早耶＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100366.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100366.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100366.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/129/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100366.png"
			},
			{
				"id": 100589,
				"title": "［キューティーチアー］松原早耶（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100589.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100589.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100589.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/129/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100589.png"
			},
			{
				"id": 100590,
				"title": "［キューティーチアー］松原早耶＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100590.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100590.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100590.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/129/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100590.png"
			}
		]
	},
	{
		"name": "相原雪乃",
		"kana": "あいはらゆきの",
		"type": 1,
		"height": 160,
		"old": 22,
		"weight": 51,
		"birthday": "2月14日",
		"blood": "A",
		"hand": "左",
		"style": {
			"bust": 92,
			"waist": 58,
			"hip": 90
		},
		"imgs": [
			{
				"id": 100323,
				"title": "相原雪乃（R）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100323.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100323.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100323.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/130/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100323.png"
			},
			{
				"id": 100324,
				"title": "相原雪乃＋（R+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100324.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100324.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100324.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/130/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100324.png"
			},
			{
				"id": 100433,
				"title": "［フリルドウェスタン］相原雪乃（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100433.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100433.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100433.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/130/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100433.png"
			},
			{
				"id": 100434,
				"title": "［フリルドウェスタン］相原雪乃＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100434.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100434.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100434.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/130/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100434.png"
			},
			{
				"id": 100631,
				"title": "［笑門福来］相原雪乃（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100631.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100631.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100631.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/130/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100631.png"
			},
			{
				"id": 100632,
				"title": "［笑門福来］相原雪乃＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100632.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100632.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100632.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/130/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100632.png"
			},
			{
				"id": 100683,
				"title": "［いっぱいの感謝］相原雪乃（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100683.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100683.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100683.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/130/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100683.png"
			},
			{
				"id": 100684,
				"title": "［いっぱいの感謝］相原雪乃＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100684.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100684.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100684.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/130/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100684.png"
			}
		]
	},
	{
		"name": "宮本フレデリカ",
		"kana": "みやもとふれでりか",
		"type": 1,
		"height": 164,
		"old": 19,
		"weight": 46,
		"birthday": "2月14日",
		"blood": "B",
		"hand": "左",
		"style": {
			"bust": 83,
			"waist": 57,
			"hip": 85
		},
		"imgs": [
			{
				"id": 100021,
				"title": "宮本フレデリカ（R）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100021.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100021.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100021.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/131/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100021.png"
			},
			{
				"id": 100022,
				"title": "宮本フレデリカ＋（R+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100022.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100022.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100022.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/131/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100022.png"
			},
			{
				"id": 100057,
				"title": "［小悪魔メイド］宮本フレデリカ（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100057.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100057.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100057.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/131/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100057.png"
			},
			{
				"id": 100058,
				"title": "［小悪魔メイド］宮本フレデリカ＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100058.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100058.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100058.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/131/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100058.png"
			},
			{
				"id": 100157,
				"title": "［Tulip］宮本フレデリカ（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100157.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100157.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100157.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/131/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100157.png"
			},
			{
				"id": 100158,
				"title": "［Tulip］宮本フレデリカ＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100158.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100158.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100158.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/131/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100158.png"
			},
			{
				"id": 100251,
				"title": "［アベニュー・モード］宮本フレデリカ（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100251.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100251.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100251.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/131/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100251.png"
			},
			{
				"id": 100252,
				"title": "［アベニュー・モード］宮本フレデリカ＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100252.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100252.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100252.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/131/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100252.png"
			},
			{
				"id": 100325,
				"title": "［リュミエール・エトワール］宮本フレデリカ（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100325.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100325.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100325.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/131/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100325.png"
			},
			{
				"id": 100326,
				"title": "［リュミエール・エトワール］宮本フレデリカ＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100326.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100326.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100326.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/131/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100326.png"
			},
			{
				"id": 100569,
				"title": "［クレイジークレイジー］宮本フレデリカ（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100569.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100569.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100569.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/131/11.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100569.png"
			},
			{
				"id": 100570,
				"title": "［クレイジークレイジー］宮本フレデリカ＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100570.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100570.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100570.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/131/12.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100570.png"
			},
			{
				"id": 100597,
				"title": "［ソレイユ・エ・リュヌ］宮本フレデリカ（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100597.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100597.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100597.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/131/13.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100597.png"
			},
			{
				"id": 100598,
				"title": "［ソレイユ・エ・リュヌ］宮本フレデリカ＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100598.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100598.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100598.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/131/14.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100598.png"
			},
			{
				"id": 100685,
				"title": "［ル・マリアージュ］宮本フレデリカ（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100685.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100685.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100685.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/131/15.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100685.png"
			},
			{
				"id": 100686,
				"title": "［ル・マリアージュ］宮本フレデリカ＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100686.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100686.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100686.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/131/16.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100686.png"
			},
			{
				"id": 100747,
				"title": "［ミラーボール・ラブ］宮本フレデリカ（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100747.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100747.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100747.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/131/17.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100747.png"
			},
			{
				"id": 100748,
				"title": "［ミラーボール・ラブ］宮本フレデリカ+（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100748.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100748.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100748.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/131/18.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100748.png"
			}
		]
	},
	{
		"name": "小早川紗枝",
		"kana": "こばやかわさえ",
		"type": 1,
		"height": 148,
		"old": 15,
		"weight": 42,
		"birthday": "10月18日",
		"blood": "AB",
		"hand": "右",
		"style": {
			"bust": 78,
			"waist": 56,
			"hip": 80
		},
		"imgs": [
			{
				"id": 100023,
				"title": "小早川紗枝（R）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100023.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100023.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100023.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/132/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100023.png"
			},
			{
				"id": 100024,
				"title": "小早川紗枝＋（R+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100024.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100024.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100024.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/132/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100024.png"
			},
			{
				"id": 100167,
				"title": "［パステルピンクな恋］小早川紗枝（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100167.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100167.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100167.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/132/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100167.png"
			},
			{
				"id": 100168,
				"title": "［パステルピンクな恋］小早川紗枝＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100168.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100168.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100168.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/132/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100168.png"
			},
			{
				"id": 100189,
				"title": "［花舞うまほろば］小早川紗枝（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100189.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100189.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100189.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/132/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100189.png"
			},
			{
				"id": 100190,
				"title": "［花舞うまほろば］小早川紗枝＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100190.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100190.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100190.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/132/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100190.png"
			},
			{
				"id": 100311,
				"title": "［あいくるしい］小早川紗枝（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100311.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100311.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100311.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/132/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100311.png"
			},
			{
				"id": 100312,
				"title": "［あいくるしい］小早川紗枝＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100312.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100312.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100312.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/132/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100312.png"
			},
			{
				"id": 100345,
				"title": "［華ほころびる宴］小早川紗枝（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100345.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100345.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100345.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/132/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100345.png"
			},
			{
				"id": 100346,
				"title": "［華ほころびる宴］小早川紗枝＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100346.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100346.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100346.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/132/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100346.png"
			},
			{
				"id": 100487,
				"title": "［美に入り彩を穿つ］小早川紗枝（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100487.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100487.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100487.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/132/11.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100487.png"
			},
			{
				"id": 100488,
				"title": "［美に入り彩を穿つ］小早川紗枝＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100488.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100488.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100488.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/132/12.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100488.png"
			},
			{
				"id": 100603,
				"title": "［羽衣小町］小早川紗枝（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100603.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100603.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100603.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/132/13.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100603.png"
			},
			{
				"id": 100604,
				"title": "［羽衣小町］小早川紗枝＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100604.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100604.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100604.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/132/14.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100604.png"
			},
			{
				"id": 100745,
				"title": "［風まとう光］小早川紗枝（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100745.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100745.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100745.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/132/15.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100745.png"
			},
			{
				"id": 100746,
				"title": "［風まとう光］小早川紗枝+（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100746.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100746.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100746.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/132/16.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100746.png"
			}
		]
	},
	{
		"name": "西園寺琴歌",
		"kana": "さいおんじことか",
		"type": 1,
		"height": 156,
		"old": 17,
		"weight": 46,
		"birthday": "1月23日",
		"blood": "O",
		"hand": "右",
		"style": {
			"bust": 87,
			"waist": 57,
			"hip": 85
		},
		"imgs": [
			{
				"id": 100025,
				"title": "西園寺琴歌（R）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100025.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100025.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100025.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/133/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100025.png"
			},
			{
				"id": 100026,
				"title": "西園寺琴歌＋（R+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100026.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100026.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100026.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/133/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100026.png"
			},
			{
				"id": 100061,
				"title": "［はりきりお嬢様］西園寺琴歌（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100061.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100061.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100061.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/133/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100061.png"
			},
			{
				"id": 100062,
				"title": "［はりきりお嬢様］西園寺琴歌＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100062.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100062.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100062.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/133/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100062.png"
			},
			{
				"id": 100215,
				"title": "［花園の春風］西園寺琴歌（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100215.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100215.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100215.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/133/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100215.png"
			},
			{
				"id": 100216,
				"title": "［花園の春風］西園寺琴歌＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100216.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100216.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100216.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/133/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100216.png"
			},
			{
				"id": 100445,
				"title": "［ピュア・ユーフォリア］西園寺琴歌（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100445.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100445.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100445.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/133/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100445.png"
			},
			{
				"id": 100446,
				"title": "［ピュア・ユーフォリア］西園寺琴歌＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100446.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100446.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100446.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/133/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100446.png"
			},
			{
				"id": 100555,
				"title": "［絢爛華麗］西園寺琴歌（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100555.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100555.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100555.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/133/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100555.png"
			},
			{
				"id": 100556,
				"title": "［絢爛華麗］西園寺琴歌＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100556.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100556.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100556.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/133/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100556.png"
			}
		]
	},
	{
		"name": "双葉杏",
		"kana": "ふたばあんず",
		"type": 1,
		"height": 139,
		"old": 17,
		"weight": 30,
		"birthday": "9月2日",
		"blood": "B",
		"hand": "右",
		"style": {
			"bust": 0,
			"waist": 0,
			"hip": 0
		},
		"imgs": [
			{
				"id": 100027,
				"title": "双葉杏（R）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100027.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100027.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100027.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/134/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100027.png"
			},
			{
				"id": 100028,
				"title": "双葉杏＋（R+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100028.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100028.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100028.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/134/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100028.png"
			},
			{
				"id": 100077,
				"title": "［ぐうたら王国］双葉杏（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100077.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100077.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100077.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/134/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100077.png"
			},
			{
				"id": 100078,
				"title": "［ぐうたら王国］双葉杏＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100078.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100078.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100078.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/134/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100078.png"
			},
			{
				"id": 100243,
				"title": "［なまけものフェアリー］双葉杏（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100243.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100243.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100243.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/134/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100243.png"
			},
			{
				"id": 100244,
				"title": "［なまけものフェアリー］双葉杏＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100244.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100244.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100244.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/134/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100244.png"
			},
			{
				"id": 100315,
				"title": "［ハロウィンぷちデビル］双葉杏（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100315.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100315.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100315.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/134/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100315.png"
			},
			{
				"id": 100316,
				"title": "［ハロウィンぷちデビル］双葉杏＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100316.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100316.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100316.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/134/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100316.png"
			},
			{
				"id": 100339,
				"title": "［あんきら ! ？狂騒曲］双葉杏（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100339.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100339.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100339.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/134/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100339.png"
			},
			{
				"id": 100340,
				"title": "［あんきら ! ？狂騒曲］双葉杏＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100340.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100340.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100340.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/134/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100340.png"
			},
			{
				"id": 100415,
				"title": "［リトルリドル］双葉杏（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100415.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100415.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100415.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/134/11.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100415.png"
			},
			{
				"id": 100416,
				"title": "［リトルリドル］双葉杏＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100416.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100416.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100416.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/134/12.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100416.png"
			},
			{
				"id": 100479,
				"title": "［おーる・ふぉー・ふぁん］双葉杏（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100479.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100479.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100479.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/134/13.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100479.png"
			},
			{
				"id": 100480,
				"title": "［おーる・ふぉー・ふぁん］双葉杏＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100480.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100480.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100480.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/134/14.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100480.png"
			},
			{
				"id": 100651,
				"title": "［あんず色の青春］双葉杏（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100651.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100651.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100651.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/134/15.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100651.png"
			},
			{
				"id": 100652,
				"title": "［あんず色の青春］双葉杏＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100652.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100652.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100652.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/134/16.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100652.png"
			}
		]
	},
	{
		"name": "楊菲菲",
		"kana": "やおふぇいふぇい",
		"type": 1,
		"height": 152,
		"old": 15,
		"weight": 41,
		"birthday": "9月29日",
		"blood": "O",
		"hand": "右",
		"style": {
			"bust": 82,
			"waist": 58,
			"hip": 84
		},
		"imgs": [
			{
				"id": 100207,
				"title": "楊菲菲（R）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100207.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100207.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100207.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/135/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100207.png"
			},
			{
				"id": 100208,
				"title": "楊菲菲＋（R+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100208.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100208.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100208.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/135/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100208.png"
			},
			{
				"id": 100321,
				"title": "［繚乱の舞姫］楊菲菲（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100321.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100321.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100321.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/135/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100321.png"
			},
			{
				"id": 100322,
				"title": "［繚乱の舞姫］楊菲菲＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100322.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100322.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100322.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/135/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100322.png"
			},
			{
				"id": 100579,
				"title": "［ハートフェルトパーティー］楊菲菲（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100579.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100579.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100579.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/135/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100579.png"
			},
			{
				"id": 100580,
				"title": "［ハートフェルトパーティー］楊菲菲＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100580.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100580.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100580.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/135/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100580.png"
			},
			{
				"id": 100755,
				"title": "［華美爛漫］楊菲菲（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100755.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100755.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100755.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/135/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100755.png"
			},
			{
				"id": 100756,
				"title": "［華美爛漫］楊菲菲+（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100756.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100756.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100756.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/135/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100756.png"
			}
		]
	},
	{
		"name": "桃井あずき",
		"kana": "ももいあずき",
		"type": 1,
		"height": 145,
		"old": 15,
		"weight": 40,
		"birthday": "7月7日",
		"blood": "A",
		"hand": "右",
		"style": {
			"bust": 80,
			"waist": 55,
			"hip": 78
		},
		"imgs": [
			{
				"id": 100081,
				"title": "桃井あずき（R）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100081.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100081.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100081.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/136/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100081.png"
			},
			{
				"id": 100082,
				"title": "桃井あずき＋（R+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100082.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100082.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100082.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/136/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100082.png"
			},
			{
				"id": 100117,
				"title": "［艶娘大作戦］桃井あずき（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100117.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100117.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100117.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/136/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100117.png"
			},
			{
				"id": 100118,
				"title": "［艶娘大作戦］桃井あずき＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100118.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100118.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100118.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/136/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100118.png"
			},
			{
				"id": 100309,
				"title": "［湯けむり大作戦］桃井あずき（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100309.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100309.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100309.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/136/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100309.png"
			},
			{
				"id": 100310,
				"title": "［湯けむり大作戦］桃井あずき＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100310.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100310.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100310.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/136/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100310.png"
			},
			{
				"id": 100567,
				"title": "［お祭り小町大作戦］桃井あずき（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100567.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100567.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100567.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/136/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100567.png"
			},
			{
				"id": 100568,
				"title": "［お祭り小町大作戦］桃井あずき＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100568.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100568.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100568.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/136/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100568.png"
			},
			{
				"id": 100699,
				"title": "［メルヘン大作戦］桃井あずき（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100699.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100699.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100699.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/136/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100699.png"
			},
			{
				"id": 100700,
				"title": "［メルヘン大作戦］桃井あずき＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100700.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100700.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100700.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/136/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100700.png"
			}
		]
	},
	{
		"name": "涼宮星花",
		"kana": "すずみやせいか",
		"type": 1,
		"height": 158,
		"old": 19,
		"weight": 45,
		"birthday": "8月28日",
		"blood": "A",
		"hand": "右",
		"style": {
			"bust": 82,
			"waist": 57,
			"hip": 83
		},
		"imgs": [
			{
				"id": 100171,
				"title": "涼宮星花（R）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100171.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100171.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100171.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/137/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100171.png"
			},
			{
				"id": 100172,
				"title": "涼宮星花＋（R+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100172.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100172.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100172.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/137/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100172.png"
			},
			{
				"id": 100373,
				"title": "［小悪魔お嬢様］涼宮星花（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100373.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100373.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100373.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/137/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100373.png"
			},
			{
				"id": 100374,
				"title": "［小悪魔お嬢様］涼宮星花＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100374.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100374.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100374.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/137/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100374.png"
			},
			{
				"id": 100517,
				"title": "［お嬢様の一幕］涼宮星花（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100517.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100517.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100517.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/137/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100517.png"
			},
			{
				"id": 100518,
				"title": "［お嬢様の一幕］涼宮星花＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100518.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100518.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100518.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/137/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100518.png"
			},
			{
				"id": 100679,
				"title": "［星へのピチカート］涼宮星花（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100679.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100679.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100679.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/137/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100679.png"
			},
			{
				"id": 100680,
				"title": "［星へのピチカート］涼宮星花＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100680.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100680.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100680.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/137/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100680.png"
			}
		]
	},
	{
		"name": "月宮雅",
		"kana": "つきみやみやび",
		"type": 1,
		"height": 153,
		"old": 18,
		"weight": 44,
		"birthday": "10月30日",
		"blood": "B",
		"hand": "右",
		"style": {
			"bust": 86,
			"waist": 56,
			"hip": 82
		},
		"imgs": [
			{
				"id": 100183,
				"title": "月宮雅（R）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100183.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100183.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100183.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/138/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100183.png"
			},
			{
				"id": 100184,
				"title": "月宮雅＋（R+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100184.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100184.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100184.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/138/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100184.png"
			},
			{
				"id": 100305,
				"title": "［華･美･雅］月宮雅（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100305.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100305.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100305.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/138/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100305.png"
			},
			{
				"id": 100306,
				"title": "［華･美･雅］月宮雅＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100306.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100306.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100306.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/138/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100306.png"
			},
			{
				"id": 100513,
				"title": "［桜ガール］月宮雅（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100513.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100513.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100513.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/138/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100513.png"
			},
			{
				"id": 100514,
				"title": "［桜ガール］月宮雅＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100514.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100514.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100514.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/138/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100514.png"
			},
			{
				"id": 100677,
				"title": "［ガールズ・ギフト］月宮雅（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100677.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100677.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100677.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/138/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100677.png"
			},
			{
				"id": 100678,
				"title": "［ガールズ・ギフト］月宮雅＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100678.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100678.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100678.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/138/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100678.png"
			}
		]
	},
	{
		"name": "兵藤レナ",
		"kana": "ひょうどうれな",
		"type": 1,
		"height": 167,
		"old": 27,
		"weight": 48,
		"birthday": "10月3日",
		"blood": "O",
		"hand": "左",
		"style": {
			"bust": 92,
			"waist": 56,
			"hip": 84
		},
		"imgs": [
			{
				"id": 100129,
				"title": "兵藤レナ（R）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100129.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100129.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100129.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/139/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100129.png"
			},
			{
				"id": 100130,
				"title": "兵藤レナ＋（R+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100130.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100130.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100130.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/139/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100130.png"
			},
			{
				"id": 100145,
				"title": "［セクシーバニー］兵藤レナ（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100145.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100145.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100145.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/139/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100145.png"
			},
			{
				"id": 100146,
				"title": "［セクシーバニー］兵藤レナ＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100146.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100146.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100146.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/139/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100146.png"
			},
			{
				"id": 100473,
				"title": "［ビューティーウィッチ］兵藤レナ（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100473.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100473.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100473.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/139/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100473.png"
			},
			{
				"id": 100474,
				"title": "［ビューティーウィッチ］兵藤レナ＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100474.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100474.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100474.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/139/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100474.png"
			},
			{
				"id": 100619,
				"title": "［ディーラーズディライト］兵藤レナ（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100619.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100619.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100619.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/139/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100619.png"
			},
			{
				"id": 100620,
				"title": "［ディーラーズディライト］兵藤レナ＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100620.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100620.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100620.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/139/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100620.png"
			},
			{
				"id": 100753,
				"title": "［美しき挑発］兵藤レナ（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100753.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100753.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100753.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/139/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100753.png"
			},
			{
				"id": 100754,
				"title": "［美しき挑発］兵藤レナ+（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100754.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100754.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100754.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/139/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100754.png"
			}
		]
	},
	{
		"name": "丹羽仁美",
		"kana": "にわひとみ",
		"type": 1,
		"height": 157,
		"old": 18,
		"weight": 43,
		"birthday": "6月4日",
		"blood": "B",
		"hand": "右",
		"style": {
			"bust": 81,
			"waist": 55,
			"hip": 79
		},
		"imgs": [
			{
				"id": 100327,
				"title": "丹羽仁美（N）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100327.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100327.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100327.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/140/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100327.png"
			},
			{
				"id": 100328,
				"title": "丹羽仁美＋（N+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100328.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100328.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100328.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/140/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100328.png"
			},
			{
				"id": 100441,
				"title": "［大傾奇娘］丹羽仁美（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100441.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100441.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100441.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/140/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100441.png"
			},
			{
				"id": 100442,
				"title": "［大傾奇娘］丹羽仁美＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100442.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100442.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100442.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/140/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100442.png"
			},
			{
				"id": 100647,
				"title": "［天下御免☆ガール］丹羽仁美（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100647.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100647.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100647.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/140/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100647.png"
			},
			{
				"id": 100648,
				"title": "［天下御免☆ガール］丹羽仁美＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100648.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100648.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100648.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/140/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100648.png"
			},
			{
				"id": 100743,
				"title": "［戦国愛☆一代］丹羽仁美（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100743.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100743.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100743.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/140/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100743.png"
			},
			{
				"id": 100744,
				"title": "［戦国愛☆一代］丹羽仁美+（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100744.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100744.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100744.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/140/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100744.png"
			}
		]
	},
	{
		"name": "道明寺歌鈴",
		"kana": "どうみょうじかりん",
		"type": 1,
		"height": 155,
		"old": 17,
		"weight": 43,
		"birthday": "1月1日",
		"blood": "A",
		"hand": "右",
		"style": {
			"bust": 80,
			"waist": 55,
			"hip": 83
		},
		"imgs": [
			{
				"id": 100079,
				"title": "道明寺歌鈴（R）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100079.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100079.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100079.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/141/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100079.png"
			},
			{
				"id": 100080,
				"title": "道明寺歌鈴＋（R+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100080.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100080.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100080.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/141/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100080.png"
			},
			{
				"id": 100139,
				"title": "［大器晩成］道明寺歌鈴（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100139.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100139.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100139.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/141/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100139.png"
			},
			{
				"id": 100140,
				"title": "［大器晩成］道明寺歌鈴＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100140.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100140.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100140.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/141/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100140.png"
			},
			{
				"id": 100271,
				"title": "［サンシャインビーチ］道明寺歌鈴（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100271.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100271.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100271.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/141/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100271.png"
			},
			{
				"id": 100272,
				"title": "［サンシャインビーチ］道明寺歌鈴＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100272.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100272.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100272.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/141/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100272.png"
			},
			{
				"id": 100361,
				"title": "［桜の頃］道明寺歌鈴（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100361.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100361.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100361.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/141/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100361.png"
			},
			{
				"id": 100362,
				"title": "［桜の頃］道明寺歌鈴＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100362.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100362.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100362.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/141/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100362.png"
			},
			{
				"id": 100397,
				"title": "［えにしの結び手］道明寺歌鈴（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100397.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100397.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100397.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/141/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100397.png"
			},
			{
				"id": 100398,
				"title": "［えにしの結び手］道明寺歌鈴＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100398.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100398.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100398.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/141/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100398.png"
			},
			{
				"id": 100525,
				"title": "［ひたむきな歩み］道明寺歌鈴（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100525.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100525.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100525.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/141/11.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100525.png"
			},
			{
				"id": 100526,
				"title": "［ひたむきな歩み］道明寺歌鈴＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100526.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100526.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100526.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/141/12.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100526.png"
			},
			{
				"id": 100629,
				"title": "［義勇忍侠花吹雪］道明寺歌鈴（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100629.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100629.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100629.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/141/13.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100629.png"
			},
			{
				"id": 100630,
				"title": "［義勇忍侠花吹雪］道明寺歌鈴＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100630.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100630.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100630.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/141/14.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100630.png"
			}
		]
	},
	{
		"name": "柳清良",
		"kana": "やなぎきよら",
		"type": 1,
		"height": 158,
		"old": 23,
		"weight": 47,
		"birthday": "5月12日",
		"blood": "O",
		"hand": "右",
		"style": {
			"bust": 85,
			"waist": 58,
			"hip": 86
		},
		"imgs": [
			{
				"id": 100277,
				"title": "柳清良（R）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100277.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100277.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100277.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/145/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100277.png"
			},
			{
				"id": 100278,
				"title": "柳清良＋（R+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100278.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100278.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100278.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/145/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100278.png"
			},
			{
				"id": 100363,
				"title": "［二面性の天使］柳清良（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100363.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100363.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100363.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/145/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100363.png"
			},
			{
				"id": 100364,
				"title": "［二面性の天使］柳清良＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100364.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100364.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100364.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/145/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100364.png"
			},
			{
				"id": 100547,
				"title": "［グラマラス・ロワイヤル］柳清良（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100547.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100547.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100547.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/145/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100547.png"
			},
			{
				"id": 100548,
				"title": "［グラマラス・ロワイヤル］柳清良＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100548.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100548.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100548.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/145/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100548.png"
			},
			{
				"id": 100711,
				"title": "［真夏の天使］柳清良（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100711.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100711.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100711.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/145/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100711.png"
			},
			{
				"id": 100712,
				"title": "［真夏の天使］柳清良＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100712.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100712.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100712.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/145/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100712.png"
			}
		]
	},
	{
		"name": "井村雪菜",
		"kana": "いむらせつな",
		"type": 1,
		"height": 163,
		"old": 17,
		"weight": 48,
		"birthday": "8月27日",
		"blood": "AB",
		"hand": "右",
		"style": {
			"bust": 85,
			"waist": 60,
			"hip": 88
		},
		"imgs": [
			{
				"id": 100131,
				"title": "井村雪菜（R）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100131.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100131.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100131.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/147/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100131.png"
			},
			{
				"id": 100132,
				"title": "井村雪菜＋（R+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100132.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100132.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100132.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/147/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100132.png"
			},
			{
				"id": 100335,
				"title": "［ロマンチックナイト］井村雪菜（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100335.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100335.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100335.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/147/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100335.png"
			},
			{
				"id": 100336,
				"title": "［ロマンチックナイト］井村雪菜＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100336.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100336.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100336.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/147/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100336.png"
			},
			{
				"id": 100533,
				"title": "［花畑マキアージュ］井村雪菜（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100533.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100533.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100533.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/147/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100533.png"
			},
			{
				"id": 100534,
				"title": "［花畑マキアージュ］井村雪菜＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100534.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100534.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100534.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/147/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100534.png"
			},
			{
				"id": 100765,
				"title": "［私に恋をする私］井村雪菜（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100765.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100765.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100765.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/147/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100765.png"
			},
			{
				"id": 100766,
				"title": "［私に恋をする私］井村雪菜+（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100766.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100766.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100766.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/147/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100766.png"
			}
		]
	},
	{
		"name": "日下部若葉",
		"kana": "くさかべわかば",
		"type": 1,
		"height": 148,
		"old": 20,
		"weight": 40,
		"birthday": "5月4日",
		"blood": "O",
		"hand": "右",
		"style": {
			"bust": 77,
			"waist": 54,
			"hip": 78
		},
		"imgs": [
			{
				"id": 100163,
				"title": "日下部若葉（N）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100163.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100163.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100163.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/148/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100163.png"
			},
			{
				"id": 100164,
				"title": "日下部若葉＋（N+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100164.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100164.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100164.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/148/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100164.png"
			},
			{
				"id": 100393,
				"title": "［ロワイヤルリトル］日下部若葉（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100393.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100393.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100393.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/148/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100393.png"
			},
			{
				"id": 100394,
				"title": "［ロワイヤルリトル］日下部若葉＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100394.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100394.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100394.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/148/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100394.png"
			},
			{
				"id": 100541,
				"title": "［ローゼスゴシック］日下部若葉（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100541.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100541.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100541.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/148/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100541.png"
			},
			{
				"id": 100542,
				"title": "［ローゼスゴシック］日下部若葉＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100542.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100542.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100542.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/148/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100542.png"
			},
			{
				"id": 100717,
				"title": "［オーバーヒート］日下部若葉（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100717.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100717.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100717.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/148/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100717.png"
			},
			{
				"id": 100718,
				"title": "［オーバーヒート］日下部若葉＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100718.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100718.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100718.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/148/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100718.png"
			}
		]
	},
	{
		"name": "榊原里美",
		"kana": "さかきばらさとみ",
		"type": 1,
		"height": 162,
		"old": 17,
		"weight": 46,
		"birthday": "8月27日",
		"blood": "O",
		"hand": "右",
		"style": {
			"bust": 91,
			"waist": 56,
			"hip": 86
		},
		"imgs": [
			{
				"id": 100195,
				"title": "榊原里美（R）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100195.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100195.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100195.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/149/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100195.png"
			},
			{
				"id": 100196,
				"title": "榊原里美＋（R+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100196.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100196.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100196.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/149/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100196.png"
			},
			{
				"id": 100267,
				"title": "［シュガーリーボディ］榊原里美（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100267.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100267.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100267.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/149/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100267.png"
			},
			{
				"id": 100268,
				"title": "［シュガーリーボディ］榊原里美＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100268.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100268.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100268.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/149/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100268.png"
			},
			{
				"id": 100477,
				"title": "［スウィート・ロワイヤル］榊原里美（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100477.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100477.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100477.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/149/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100477.png"
			},
			{
				"id": 100478,
				"title": "［スウィート・ロワイヤル］榊原里美＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100478.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100478.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100478.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/149/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100478.png"
			},
			{
				"id": 100689,
				"title": "［ほわあまプリンセス］榊原里美（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100689.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100689.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100689.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/149/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100689.png"
			},
			{
				"id": 100690,
				"title": "［ほわあまプリンセス］榊原里美＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100690.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100690.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100690.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/149/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100690.png"
			}
		]
	},
	{
		"name": "輿水幸子",
		"kana": "こしみずさちこ",
		"type": 1,
		"height": 142,
		"old": 14,
		"weight": 37,
		"birthday": "11月25日",
		"blood": "B",
		"hand": "左",
		"style": {
			"bust": 74,
			"waist": 52,
			"hip": 75
		},
		"imgs": [
			{
				"id": 100073,
				"title": "輿水幸子（R）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100073.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100073.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100073.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/150/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100073.png"
			},
			{
				"id": 100074,
				"title": "輿水幸子＋（R+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100074.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100074.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100074.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/150/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100074.png"
			},
			{
				"id": 100123,
				"title": "［自称・カンペキ］輿水幸子（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100123.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100123.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100123.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/150/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100123.png"
			},
			{
				"id": 100124,
				"title": "［自称・カンペキ］輿水幸子＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100124.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100124.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100124.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/150/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100124.png"
			},
			{
				"id": 100209,
				"title": "［自称・カワイイ］輿水幸子（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100209.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100209.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100209.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/150/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100209.png"
			},
			{
				"id": 100210,
				"title": "［自称・カワイイ］輿水幸子＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100210.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100210.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100210.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/150/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100210.png"
			},
			{
				"id": 100297,
				"title": "［自称・スウィートヒロイン］輿水幸子（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100297.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100297.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100297.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/150/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100297.png"
			},
			{
				"id": 100298,
				"title": "［自称・スウィートヒロイン］輿水幸子＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100298.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100298.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100298.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/150/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100298.png"
			},
			{
				"id": 100347,
				"title": "［Lunatic Show］輿水幸子（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100347.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100347.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100347.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/150/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100347.png"
			},
			{
				"id": 100348,
				"title": "［Lunatic Show］輿水幸子＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100348.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100348.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100348.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/150/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100348.png"
			},
			{
				"id": 100411,
				"title": "［自称・パーリーピーポー］輿水幸子（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100411.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100411.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100411.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/150/11.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100411.png"
			},
			{
				"id": 100412,
				"title": "［自称・パーリーピーポー］輿水幸子＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100412.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100412.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100412.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/150/12.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100412.png"
			},
			{
				"id": 100583,
				"title": "［自称・魔法少女］輿水幸子（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100583.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100583.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100583.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/150/13.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100583.png"
			},
			{
				"id": 100584,
				"title": "［自称・魔法少女］輿水幸子＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100584.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100584.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100584.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/150/14.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100584.png"
			},
			{
				"id": 100751,
				"title": "［自称・美人の湯］輿水幸子（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100751.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100751.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100751.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/150/15.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100751.png"
			},
			{
				"id": 100752,
				"title": "［自称・美人の湯］輿水幸子+（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100752.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100752.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100752.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/150/16.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100752.png"
			}
		]
	},
	{
		"name": "安斎都",
		"kana": "あんざいみやこ",
		"type": 1,
		"height": 156,
		"old": 16,
		"weight": 41,
		"birthday": "1月6日",
		"blood": "B",
		"hand": "右",
		"style": {
			"bust": 78,
			"waist": 55,
			"hip": 77
		},
		"imgs": [
			{
				"id": 100273,
				"title": "安斎都（N）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100273.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100273.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100273.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/151/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100273.png"
			},
			{
				"id": 100274,
				"title": "安斎都＋（N+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100274.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100274.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100274.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/151/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100274.png"
			},
			{
				"id": 100431,
				"title": "［小さな名探偵］安斎都（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100431.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100431.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100431.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/151/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100431.png"
			},
			{
				"id": 100432,
				"title": "［小さな名探偵］安斎都＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100432.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100432.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100432.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/151/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100432.png"
			},
			{
				"id": 100529,
				"title": "［なぞときツアーズ］安斎都（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100529.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100529.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100529.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/151/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100529.png"
			},
			{
				"id": 100530,
				"title": "［なぞときツアーズ］安斎都＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100530.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100530.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100530.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/151/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100530.png"
			},
			{
				"id": 100681,
				"title": "［ミステリーチアー］安斎都（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100681.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100681.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100681.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/151/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100681.png"
			},
			{
				"id": 100682,
				"title": "［ミステリーチアー］安斎都＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100682.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100682.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100682.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/151/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100682.png"
			}
		]
	},
	{
		"name": "浅野風香",
		"kana": "あさのふうか",
		"type": 1,
		"height": 160,
		"old": 16,
		"weight": 48,
		"birthday": "2月11日",
		"blood": "A",
		"hand": "右",
		"style": {
			"bust": 88,
			"waist": 59,
			"hip": 84
		},
		"imgs": [
			{
				"id": 100313,
				"title": "浅野風香（R）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100313.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100313.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100313.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/152/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100313.png"
			},
			{
				"id": 100314,
				"title": "浅野風香＋（R+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100314.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100314.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100314.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/152/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100314.png"
			},
			{
				"id": 100413,
				"title": "［シークレットクイーン］浅野風香（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100413.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100413.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100413.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/152/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100413.png"
			},
			{
				"id": 100414,
				"title": "［シークレットクイーン］浅野風香＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100414.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100414.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100414.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/152/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100414.png"
			},
			{
				"id": 100599,
				"title": "［ランウェイモード］浅野風香（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100599.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100599.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100599.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/152/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100599.png"
			},
			{
				"id": 100600,
				"title": "［ランウェイモード］浅野風香＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100600.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100600.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100600.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/152/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100600.png"
			},
			{
				"id": 100727,
				"title": "［風のゆくさき］浅野風香（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100727.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100727.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100727.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/152/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100727.png"
			},
			{
				"id": 100728,
				"title": "［風のゆくさき］浅野風香＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100728.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100728.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100728.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/152/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100728.png"
			}
		]
	},
	{
		"name": "大西由里子",
		"kana": "おおにしゆりこ",
		"type": 1,
		"height": 156,
		"old": 20,
		"weight": 44,
		"birthday": "3月20日",
		"blood": "O",
		"hand": "右",
		"style": {
			"bust": 81,
			"waist": 58,
			"hip": 83
		},
		"imgs": [
			{
				"id": 100237,
				"title": "大西由里子（R）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100237.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100237.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100237.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/153/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100237.png"
			},
			{
				"id": 100238,
				"title": "大西由里子＋（R+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100238.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100238.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100238.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/153/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100238.png"
			},
			{
				"id": 100423,
				"title": "［目覚めし淑女］大西由里子（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100423.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100423.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100423.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/153/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100423.png"
			},
			{
				"id": 100424,
				"title": "［目覚めし淑女］大西由里子＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100424.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100424.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100424.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/153/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100424.png"
			},
			{
				"id": 100617,
				"title": "［レディライクバイオレット］大西由里子（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100617.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100617.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100617.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/153/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100617.png"
			},
			{
				"id": 100618,
				"title": "［レディライクバイオレット］大西由里子＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100618.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100618.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100618.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/153/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100618.png"
			},
			{
				"id": 100713,
				"title": "［ユリユリフェスティバル］大西由里子（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100713.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100713.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100713.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/153/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100713.png"
			},
			{
				"id": 100714,
				"title": "［ユリユリフェスティバル］大西由里子＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100714.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100714.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100714.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/153/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100714.png"
			}
		]
	},
	{
		"name": "安部菜々",
		"kana": "あべなな",
		"type": 1,
		"height": 146,
		"old": 0,
		"weight": 40,
		"birthday": "5月15日",
		"blood": "O",
		"hand": "右",
		"style": {
			"bust": 84,
			"waist": 57,
			"hip": 84
		},
		"imgs": [
			{
				"id": 100037,
				"title": "安部菜々（R）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100037.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100037.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100037.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/154/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100037.png"
			},
			{
				"id": 100038,
				"title": "安部菜々＋（R+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100038.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100038.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100038.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/154/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100038.png"
			},
			{
				"id": 100095,
				"title": "［アタシポンコツアンドロイド］安部菜々（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100095.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100095.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100095.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/154/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100095.png"
			},
			{
				"id": 100096,
				"title": "［アタシポンコツアンドロイド］安部菜々＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100096.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100096.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100096.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/154/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100096.png"
			},
			{
				"id": 100125,
				"title": "［プリプリウサミン］安部菜々（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100125.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100125.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100125.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/154/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100125.png"
			},
			{
				"id": 100126,
				"title": "［プリプリウサミン］安部菜々＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100126.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100126.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100126.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/154/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100126.png"
			},
			{
				"id": 100343,
				"title": "［ウサミン・ザ・シークレット］安部菜々（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100343.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100343.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100343.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/154/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100343.png"
			},
			{
				"id": 100344,
				"title": "［ウサミン・ザ・シークレット］安部菜々＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100344.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100344.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100344.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/154/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100344.png"
			},
			{
				"id": 100453,
				"title": "［Halloween♥Code］安部菜々（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100453.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100453.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100453.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/154/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100453.png"
			},
			{
				"id": 100454,
				"title": "［Halloween♥Code］安部菜々＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100454.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100454.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100454.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/154/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100454.png"
			},
			{
				"id": 100485,
				"title": "［ドリーミン☆ウサミン］安部菜々（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100485.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100485.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100485.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/154/11.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100485.png"
			},
			{
				"id": 100486,
				"title": "［ドリーミン☆ウサミン］安部菜々＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100486.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100486.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100486.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/154/12.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100486.png"
			},
			{
				"id": 100563,
				"title": "［凸凹スピードスター］安部菜々（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100563.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100563.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100563.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/154/13.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100563.png"
			},
			{
				"id": 100564,
				"title": "［凸凹スピードスター］安部菜々＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100564.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100564.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100564.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/154/14.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100564.png"
			},
			{
				"id": 100719,
				"title": "［ドレスアップ☆ウサミン］安部菜々（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100719.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100719.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100719.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/154/15.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100719.png"
			},
			{
				"id": 100720,
				"title": "［ドレスアップ☆ウサミン］安部菜々＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100720.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100720.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100720.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/154/16.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100720.png"
			}
		]
	},
	{
		"name": "工藤忍",
		"kana": "くどうしのぶ",
		"type": 1,
		"height": 154,
		"old": 16,
		"weight": 41,
		"birthday": "3月9日",
		"blood": "A",
		"hand": "左",
		"style": {
			"bust": 78,
			"waist": 54,
			"hip": 81
		},
		"imgs": [
			{
				"id": 100113,
				"title": "工藤忍（R）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100113.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100113.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100113.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/155/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100113.png"
			},
			{
				"id": 100114,
				"title": "工藤忍＋（R+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100114.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100114.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100114.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/155/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100114.png"
			},
			{
				"id": 100147,
				"title": "［ハッピーマジシャン］工藤忍（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100147.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100147.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100147.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/155/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100147.png"
			},
			{
				"id": 100148,
				"title": "［ハッピーマジシャン］工藤忍＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100148.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100148.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100148.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/155/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100148.png"
			},
			{
				"id": 100443,
				"title": "［私だけのステージ］工藤忍（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100443.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100443.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100443.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/155/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100443.png"
			},
			{
				"id": 100444,
				"title": "［私だけのステージ］工藤忍＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100444.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100444.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100444.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/155/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100444.png"
			},
			{
				"id": 100461,
				"title": "［夢追い人の光］工藤忍（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100461.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100461.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100461.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/155/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100461.png"
			},
			{
				"id": 100462,
				"title": "［夢追い人の光］工藤忍＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100462.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100462.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100462.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/155/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100462.png"
			},
			{
				"id": 100695,
				"title": "［雨の日に］工藤忍（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100695.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100695.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100695.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/155/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100695.png"
			},
			{
				"id": 100696,
				"title": "［雨の日に］工藤忍＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100696.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100696.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100696.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/155/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100696.png"
			}
		]
	},
	{
		"name": "栗原ネネ",
		"kana": "くりはらねね",
		"type": 1,
		"height": 161,
		"old": 15,
		"weight": 44,
		"birthday": "9月9日",
		"blood": "A",
		"hand": "右",
		"style": {
			"bust": 77,
			"waist": 54,
			"hip": 78
		},
		"imgs": [
			{
				"id": 100247,
				"title": "栗原ネネ（R）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100247.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100247.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100247.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/156/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100247.png"
			},
			{
				"id": 100248,
				"title": "栗原ネネ＋（R+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100248.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100248.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100248.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/156/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100248.png"
			},
			{
				"id": 100355,
				"title": "［水彩の乙姫］栗原ネネ（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100355.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100355.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100355.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/156/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100355.png"
			},
			{
				"id": 100356,
				"title": "［水彩の乙姫］栗原ネネ＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100356.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100356.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100356.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/156/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100356.png"
			},
			{
				"id": 100495,
				"title": "［すこやかな願い］栗原ネネ（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100495.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100495.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100495.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/156/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100495.png"
			},
			{
				"id": 100496,
				"title": "［すこやかな願い］栗原ネネ＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100496.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100496.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100496.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/156/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100496.png"
			},
			{
				"id": 100659,
				"title": "［さざ波の歌姫］栗原ネネ（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100659.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100659.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100659.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/156/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100659.png"
			},
			{
				"id": 100660,
				"title": "［さざ波の歌姫］栗原ネネ＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100660.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100660.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100660.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/156/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100660.png"
			}
		]
	},
	{
		"name": "古賀小春",
		"kana": "こがこはる",
		"type": 1,
		"height": 140,
		"old": 12,
		"weight": 35,
		"birthday": "4月1日",
		"blood": "O",
		"hand": "左",
		"style": {
			"bust": 72,
			"waist": 54,
			"hip": 77
		},
		"imgs": [
			{
				"id": 100287,
				"title": "古賀小春（N）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100287.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100287.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100287.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/157/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100287.png"
			},
			{
				"id": 100288,
				"title": "古賀小春＋（N+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100288.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100288.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100288.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/157/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100288.png"
			},
			{
				"id": 100385,
				"title": "［ふかふかプリンセス］古賀小春（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100385.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100385.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100385.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/157/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100385.png"
			},
			{
				"id": 100386,
				"title": "［ふかふかプリンセス］古賀小春＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100386.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100386.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100386.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/157/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100386.png"
			},
			{
				"id": 100455,
				"title": "［あこがれのプリンセス］古賀小春（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100455.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100455.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100455.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/157/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100455.png"
			},
			{
				"id": 100456,
				"title": "［あこがれのプリンセス］古賀小春＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100456.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100456.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100456.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/157/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100456.png"
			},
			{
				"id": 100641,
				"title": "［ドリーム☆プリンセス］古賀小春（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100641.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100641.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100641.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/157/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100641.png"
			},
			{
				"id": 100642,
				"title": "［ドリーム☆プリンセス］古賀小春＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100642.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100642.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100642.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/157/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100642.png"
			},
			{
				"id": 100783,
				"title": "［ファンシーチアー］古賀小春（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100783.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100783.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100783.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/157/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100783.png"
			},
			{
				"id": 100784,
				"title": "［ファンシーチアー］古賀小春+（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100784.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100784.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100784.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/157/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100784.png"
			}
		]
	},
	{
		"name": "クラリス",
		"kana": "くらりす",
		"type": 1,
		"height": 166,
		"old": 20,
		"weight": 45,
		"birthday": "8月26日",
		"blood": "AB",
		"hand": "右",
		"style": {
			"bust": 80,
			"waist": 55,
			"hip": 82
		},
		"imgs": [
			{
				"id": 100105,
				"title": "クラリス（R）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100105.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100105.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100105.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/158/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100105.png"
			},
			{
				"id": 100106,
				"title": "クラリス＋（R+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100106.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100106.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100106.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/158/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100106.png"
			},
			{
				"id": 100199,
				"title": "［微笑みの聖女］クラリス（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100199.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100199.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100199.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/158/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100199.png"
			},
			{
				"id": 100200,
				"title": "［微笑みの聖女］クラリス＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100200.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100200.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100200.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/158/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100200.png"
			},
			{
				"id": 100475,
				"title": "［祝福のまなざし］クラリス（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100475.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100475.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100475.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/158/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100475.png"
			},
			{
				"id": 100476,
				"title": "［祝福のまなざし］クラリス＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100476.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100476.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100476.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/158/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100476.png"
			},
			{
				"id": 100591,
				"title": "［サンクスクラウン］クラリス（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100591.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100591.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100591.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/158/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100591.png"
			},
			{
				"id": 100592,
				"title": "［サンクスクラウン］クラリス＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100592.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100592.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100592.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/158/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100592.png"
			},
			{
				"id": 100769,
				"title": "［癒しの贈り主］クラリス（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100769.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100769.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100769.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/158/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100769.png"
			},
			{
				"id": 100770,
				"title": "［癒しの贈り主］クラリス+（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100770.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100770.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100770.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/158/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100770.png"
			}
		]
	},
	{
		"name": "佐久間まゆ",
		"kana": "さくままゆ",
		"type": 1,
		"height": 153,
		"old": 16,
		"weight": 40,
		"birthday": "9月7日",
		"blood": "B",
		"hand": "両",
		"style": {
			"bust": 78,
			"waist": 54,
			"hip": 80
		},
		"imgs": [
			{
				"id": 100089,
				"title": "佐久間まゆ（R）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100089.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100089.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100089.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/159/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100089.png"
			},
			{
				"id": 100090,
				"title": "佐久間まゆ＋（R+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100090.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100090.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100090.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/159/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100090.png"
			},
			{
				"id": 100165,
				"title": "［フィールマイハート］佐久間まゆ（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100165.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100165.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100165.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/159/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100165.png"
			},
			{
				"id": 100166,
				"title": "［フィールマイハート］佐久間まゆ＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100166.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100166.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100166.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/159/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100166.png"
			},
			{
				"id": 100269,
				"title": "［Love∞Destiny］佐久間まゆ（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100269.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100269.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100269.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/159/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100269.png"
			},
			{
				"id": 100270,
				"title": "［Love∞Destiny］佐久間まゆ＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100270.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100270.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100270.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/159/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100270.png"
			},
			{
				"id": 100299,
				"title": "［トリート・オア・トリート］佐久間まゆ（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100299.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100299.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100299.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/159/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100299.png"
			},
			{
				"id": 100300,
				"title": "［トリート・オア・トリート］佐久間まゆ＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100300.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100300.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100300.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/159/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100300.png"
			},
			{
				"id": 100439,
				"title": "［イリュージョニスタ ! ］佐久間まゆ（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100439.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100439.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100439.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/159/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100439.png"
			},
			{
				"id": 100440,
				"title": "［イリュージョニスタ ! ］佐久間まゆ＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100440.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100440.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100440.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/159/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100440.png"
			},
			{
				"id": 100531,
				"title": "［魅惑のショウタイム］佐久間まゆ（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100531.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100531.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100531.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/159/11.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100531.png"
			},
			{
				"id": 100532,
				"title": "［魅惑のショウタイム］佐久間まゆ＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100532.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100532.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100532.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/159/12.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100532.png"
			},
			{
				"id": 100627,
				"title": "［想いプレゼント］佐久間まゆ（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100627.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100627.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100627.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/159/13.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100627.png"
			},
			{
				"id": 100628,
				"title": "［想いプレゼント］佐久間まゆ＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100628.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100628.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100628.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/159/14.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100628.png"
			},
			{
				"id": 100767,
				"title": "［ギュっとMilky Way］佐久間まゆ（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100767.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100767.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100767.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/159/15.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100767.png"
			},
			{
				"id": 100768,
				"title": "［ギュっとMilky Way］佐久間まゆ+（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100768.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100768.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100768.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/159/16.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100768.png"
			}
		]
	},
	{
		"name": "村松さくら",
		"kana": "むらまつさくら",
		"type": 1,
		"height": 145,
		"old": 15,
		"weight": 38,
		"birthday": "3月27日",
		"blood": "O",
		"hand": "右",
		"style": {
			"bust": 75,
			"waist": 55,
			"hip": 77
		},
		"imgs": [
			{
				"id": 100151,
				"title": "村松さくら（R）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100151.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100151.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100151.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/160/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100151.png"
			},
			{
				"id": 100152,
				"title": "村松さくら＋（R+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100152.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100152.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100152.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/160/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100152.png"
			},
			{
				"id": 100235,
				"title": "［ピーチウェーブ］村松さくら（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100235.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100235.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100235.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/160/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100235.png"
			},
			{
				"id": 100236,
				"title": "［ピーチウェーブ］村松さくら＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100236.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100236.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100236.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/160/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100236.png"
			},
			{
				"id": 100505,
				"title": "［ニューウェーブ・ピーチ］村松さくら（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100505.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100505.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100505.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/160/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100505.png"
			},
			{
				"id": 100506,
				"title": "［ニューウェーブ・ピーチ］村松さくら＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100506.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100506.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100506.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/160/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100506.png"
			},
			{
				"id": 100709,
				"title": "［ももいろはぁと］村松さくら（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100709.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100709.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100709.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/160/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100709.png"
			},
			{
				"id": 100710,
				"title": "［ももいろはぁと］村松さくら＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100710.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100710.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100710.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/160/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100710.png"
			}
		]
	},
	{
		"name": "白菊ほたる",
		"kana": "しらぎくほたる",
		"type": 1,
		"height": 156,
		"old": 13,
		"weight": 42,
		"birthday": "4月19日",
		"blood": "AB",
		"hand": "左",
		"style": {
			"bust": 77,
			"waist": 53,
			"hip": 79
		},
		"imgs": [
			{
				"id": 100119,
				"title": "白菊ほたる（R）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100119.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100119.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100119.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/161/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100119.png"
			},
			{
				"id": 100120,
				"title": "白菊ほたる＋（R+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100120.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100120.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100120.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/161/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100120.png"
			},
			{
				"id": 100245,
				"title": "［一輪の幸せ］白菊ほたる（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100245.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100245.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100245.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/161/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100245.png"
			},
			{
				"id": 100246,
				"title": "［一輪の幸せ］白菊ほたる＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100246.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100246.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100246.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/161/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100246.png"
			},
			{
				"id": 100391,
				"title": "［ヴォヤージュ・ブレイバー］白菊ほたる（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100391.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100391.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100391.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/161/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100391.png"
			},
			{
				"id": 100392,
				"title": "［ヴォヤージュ・ブレイバー］白菊ほたる＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100392.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100392.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100392.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/161/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100392.png"
			},
			{
				"id": 100421,
				"title": "［手折られぬ花］白菊ほたる（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100421.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100421.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100421.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/161/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100421.png"
			},
			{
				"id": 100422,
				"title": "［手折られぬ花］白菊ほたる＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100422.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100422.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100422.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/161/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100422.png"
			},
			{
				"id": 100687,
				"title": "［わたし色の羽根で］白菊ほたる（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100687.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100687.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100687.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/161/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100687.png"
			},
			{
				"id": 100688,
				"title": "［わたし色の羽根で］白菊ほたる＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100688.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100688.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100688.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/161/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100688.png"
			},
			{
				"id": 100725,
				"title": "［ステップ＆スキップ］白菊ほたる（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100725.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100725.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100725.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/161/11.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100725.png"
			},
			{
				"id": 100726,
				"title": "［ステップ＆スキップ］白菊ほたる＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100726.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100726.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100726.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/161/12.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100726.png"
			},
			{
				"id": 100781,
				"title": "［幸せの法則 ～ルール～］白菊ほたる（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100781.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100781.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100781.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/161/13.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100781.png"
			},
			{
				"id": 100782,
				"title": "［幸せの法則 ～ルール～］白菊ほたる+（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100782.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100782.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100782.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/161/14.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100782.png"
			}
		]
	},
	{
		"name": "早坂美玲",
		"kana": "はやさかみれい",
		"type": 1,
		"height": 147,
		"old": 14,
		"weight": 39,
		"birthday": "5月9日",
		"blood": "B",
		"hand": "右",
		"style": {
			"bust": 75,
			"waist": 54,
			"hip": 77
		},
		"imgs": [
			{
				"id": 100143,
				"title": "早坂美玲（R）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100143.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100143.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100143.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/162/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100143.png"
			},
			{
				"id": 100144,
				"title": "早坂美玲＋（R+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100144.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100144.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100144.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/162/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100144.png"
			},
			{
				"id": 100185,
				"title": "［ロック・ポップMIX］早坂美玲（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100185.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100185.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100185.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/162/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100185.png"
			},
			{
				"id": 100186,
				"title": "［ロック・ポップMIX］早坂美玲＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100186.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100186.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100186.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/162/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100186.png"
			},
			{
				"id": 100275,
				"title": "［メイク★インパクト］早坂美玲（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100275.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100275.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100275.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/162/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100275.png"
			},
			{
				"id": 100276,
				"title": "［メイク★インパクト］早坂美玲＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100276.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100276.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100276.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/162/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100276.png"
			},
			{
				"id": 100367,
				"title": "［∀NSWER］早坂美玲（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100367.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100367.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100367.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/162/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100367.png"
			},
			{
				"id": 100368,
				"title": "［∀NSWER］早坂美玲＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100368.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100368.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100368.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/162/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100368.png"
			},
			{
				"id": 100551,
				"title": "［モンスター・パーティー ! ］早坂美玲（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100551.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100551.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100551.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/162/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100551.png"
			},
			{
				"id": 100552,
				"title": "［モンスター・パーティー ! ］早坂美玲＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100552.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100552.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100552.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/162/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100552.png"
			},
			{
				"id": 100607,
				"title": "［individuals］早坂美玲（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100607.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100607.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100607.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/162/11.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100607.png"
			},
			{
				"id": 100608,
				"title": "［individuals］早坂美玲＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100608.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100608.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100608.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/162/12.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100608.png"
			}
		]
	},
	{
		"name": "有浦柑奈",
		"kana": "ありうらかんな",
		"type": 1,
		"height": 155,
		"old": 19,
		"weight": 44,
		"birthday": "3月6日",
		"blood": "O",
		"hand": "右",
		"style": {
			"bust": 78,
			"waist": 57,
			"hip": 80
		},
		"imgs": [
			{
				"id": 100221,
				"title": "有浦柑奈（R）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100221.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100221.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100221.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/163/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100221.png"
			},
			{
				"id": 100222,
				"title": "有浦柑奈＋（R+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100222.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100222.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100222.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/163/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100222.png"
			},
			{
				"id": 100379,
				"title": "［ピースドリーマー］有浦柑奈（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100379.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100379.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100379.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/163/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100379.png"
			},
			{
				"id": 100380,
				"title": "［ピースドリーマー］有浦柑奈＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100380.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100380.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100380.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/163/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100380.png"
			},
			{
				"id": 100553,
				"title": "［船上の音楽家］有浦柑奈（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100553.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100553.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100553.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/163/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100553.png"
			},
			{
				"id": 100554,
				"title": "［船上の音楽家］有浦柑奈＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100554.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100554.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100554.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/163/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100554.png"
			},
			{
				"id": 100731,
				"title": "［パワーオブラブ］有浦柑奈（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100731.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100731.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100731.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/163/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100731.png"
			},
			{
				"id": 100732,
				"title": "［パワーオブラブ］有浦柑奈＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100732.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100732.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100732.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/163/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100732.png"
			}
		]
	},
	{
		"name": "乙倉悠貴",
		"kana": "おとくらゆうき",
		"type": 1,
		"height": 164,
		"old": 13,
		"weight": 40,
		"birthday": "10月6日",
		"blood": "A",
		"hand": "右",
		"style": {
			"bust": 70,
			"waist": 53,
			"hip": 74
		},
		"imgs": [
			{
				"id": 100213,
				"title": "乙倉悠貴（N）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100213.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100213.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100213.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/164/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100213.png"
			},
			{
				"id": 100214,
				"title": "乙倉悠貴＋（N+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100214.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100214.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100214.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/164/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100214.png"
			},
			{
				"id": 100263,
				"title": "［スターティングデイズ］乙倉悠貴（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100263.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100263.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100263.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/164/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100263.png"
			},
			{
				"id": 100264,
				"title": "［スターティングデイズ］乙倉悠貴＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100264.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100264.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100264.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/164/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100264.png"
			},
			{
				"id": 100371,
				"title": "［カム・ウィズミー ! ］乙倉悠貴（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100371.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100371.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100371.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/164/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100371.png"
			},
			{
				"id": 100372,
				"title": "［カム・ウィズミー ! ］乙倉悠貴＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100372.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100372.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100372.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/164/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100372.png"
			},
			{
				"id": 100451,
				"title": "［Halloween♥Code］乙倉悠貴（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100451.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100451.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100451.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/164/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100451.png"
			},
			{
				"id": 100452,
				"title": "［Halloween♥Code］乙倉悠貴＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100452.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100452.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100452.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/164/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100452.png"
			},
			{
				"id": 100483,
				"title": "［華傘の芸達者］乙倉悠貴（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100483.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100483.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100483.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/164/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100483.png"
			},
			{
				"id": 100484,
				"title": "［華傘の芸達者］乙倉悠貴＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100484.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100484.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100484.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/164/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100484.png"
			},
			{
				"id": 100573,
				"title": "［憧れへのステップ］乙倉悠貴（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100573.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100573.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100573.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/164/11.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100573.png"
			},
			{
				"id": 100574,
				"title": "［憧れへのステップ］乙倉悠貴＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100574.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100574.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100574.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/164/12.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100574.png"
			},
			{
				"id": 100707,
				"title": "［夏色☆サニーデイ］乙倉悠貴（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100707.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100707.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100707.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/164/13.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100707.png"
			},
			{
				"id": 100708,
				"title": "［夏色☆サニーデイ］乙倉悠貴＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100708.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100708.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100708.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/164/14.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100708.png"
			}
		]
	},
	{
		"name": "原田美世",
		"kana": "はらだみよ",
		"type": 1,
		"height": 163,
		"old": 20,
		"weight": 46,
		"birthday": "11月14日",
		"blood": "O",
		"hand": "右",
		"style": {
			"bust": 86,
			"waist": 59,
			"hip": 85
		},
		"imgs": [
			{
				"id": 100133,
				"title": "原田美世（R）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100133.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100133.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100133.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/165/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100133.png"
			},
			{
				"id": 100134,
				"title": "原田美世＋（R+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100134.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100134.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100134.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/165/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100134.png"
			},
			{
				"id": 100175,
				"title": "［秘めた輝き］原田美世（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100175.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100175.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100175.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/165/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100175.png"
			},
			{
				"id": 100176,
				"title": "［秘めた輝き］原田美世＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100176.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100176.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100176.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/165/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100176.png"
			},
			{
				"id": 100261,
				"title": "［ドライブインサマー］原田美世（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100261.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100261.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100261.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/165/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100261.png"
			},
			{
				"id": 100262,
				"title": "［ドライブインサマー］原田美世＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100262.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100262.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100262.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/165/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100262.png"
			},
			{
				"id": 100523,
				"title": "［乙女の素顔］原田美世（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100523.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100523.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100523.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/165/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100523.png"
			},
			{
				"id": 100524,
				"title": "［乙女の素顔］原田美世＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100524.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100524.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100524.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/165/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100524.png"
			},
			{
				"id": 100593,
				"title": "［ライドオンステージ］原田美世（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100593.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100593.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100593.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/165/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100593.png"
			},
			{
				"id": 100594,
				"title": "［ライドオンステージ］原田美世＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100594.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100594.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100594.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/165/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100594.png"
			},
			{
				"id": 100757,
				"title": "［ドライブチアー］原田美世（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100757.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100757.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100757.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/165/11.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100757.png"
			},
			{
				"id": 100758,
				"title": "［ドライブチアー］原田美世+（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100758.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100758.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100758.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/165/12.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100758.png"
			}
		]
	},
	{
		"name": "池袋晶葉",
		"kana": "いけぶくろあきは",
		"type": 1,
		"height": 148,
		"old": 14,
		"weight": 39,
		"birthday": "6月10日",
		"blood": "B",
		"hand": "右",
		"style": {
			"bust": 75,
			"waist": 53,
			"hip": 74
		},
		"imgs": [
			{
				"id": 100279,
				"title": "池袋晶葉（R）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100279.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100279.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100279.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/166/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100279.png"
			},
			{
				"id": 100280,
				"title": "池袋晶葉＋（R+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100280.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100280.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100280.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/166/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100280.png"
			},
			{
				"id": 100437,
				"title": "［ハッピー☆ジーニアス］池袋晶葉（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100437.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100437.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100437.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/166/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100437.png"
			},
			{
				"id": 100438,
				"title": "［ハッピー☆ジーニアス］池袋晶葉＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100438.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100438.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100438.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/166/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100438.png"
			},
			{
				"id": 100545,
				"title": "［ひらめきロボティクス］池袋晶葉（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100545.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100545.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100545.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/166/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100545.png"
			},
			{
				"id": 100546,
				"title": "［ひらめきロボティクス］池袋晶葉＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100546.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100546.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100546.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/166/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100546.png"
			},
			{
				"id": 100675,
				"title": "［ロボティックチアー］池袋晶葉（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100675.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100675.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100675.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/166/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100675.png"
			},
			{
				"id": 100676,
				"title": "［ロボティックチアー］池袋晶葉＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100676.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100676.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100676.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/166/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100676.png"
			}
		]
	},
	{
		"name": "渋谷凛",
		"kana": "しぶやりん",
		"type": 2,
		"height": 165,
		"old": 15,
		"weight": 44,
		"birthday": "8月10日",
		"blood": "B",
		"hand": "右",
		"style": {
			"bust": 80,
			"waist": 56,
			"hip": 81
		},
		"imgs": [
			{
				"id": 200001,
				"title": "渋谷凛（R）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200001.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200001.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200001.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/167/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200001.png"
			},
			{
				"id": 200002,
				"title": "渋谷凛＋（R+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200002.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200002.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200002.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/167/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200002.png"
			},
			{
				"id": 200071,
				"title": "［ステージオブマジック］渋谷凛（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200071.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200071.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200071.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/167/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200071.png"
			},
			{
				"id": 200072,
				"title": "［ステージオブマジック］渋谷凛＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200072.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200072.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200072.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/167/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200072.png"
			},
			{
				"id": 200253,
				"title": "［オーバー・マイセルフ］渋谷凛（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200253.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200253.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200253.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/167/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200253.png"
			},
			{
				"id": 200254,
				"title": "［オーバー・マイセルフ］渋谷凛＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200254.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200254.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200254.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/167/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200254.png"
			},
			{
				"id": 200297,
				"title": "［STORY］渋谷凛（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200297.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200297.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200297.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/167/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200297.png"
			},
			{
				"id": 200298,
				"title": "［STORY］渋谷凛＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200298.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200298.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200298.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/167/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200298.png"
			},
			{
				"id": 200399,
				"title": "［エターナルブルーム］渋谷凛（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200399.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200399.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200399.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/167/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200399.png"
			},
			{
				"id": 200400,
				"title": "［エターナルブルーム］渋谷凛＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200400.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200400.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200400.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/167/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200400.png"
			},
			{
				"id": 200479,
				"title": "［Happy New Yeah ! ］渋谷凛（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200479.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200479.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200479.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/167/11.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200479.png"
			},
			{
				"id": 200480,
				"title": "［Happy New Yeah ! ］渋谷凛＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200480.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200480.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200480.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/167/12.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200480.png"
			},
			{
				"id": 200491,
				"title": "［ピュアバレンタイン］渋谷凛（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200491.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200491.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200491.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/167/13.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200491.png"
			},
			{
				"id": 200492,
				"title": "［ピュアバレンタイン］渋谷凛＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200492.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200492.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200492.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/167/14.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200492.png"
			},
			{
				"id": 200573,
				"title": "［ガールズインザフロンティア］渋谷凛（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200573.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200573.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200573.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/167/15.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200573.png"
			},
			{
				"id": 200574,
				"title": "［ガールズインザフロンティア］渋谷凛＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200574.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200574.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200574.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/167/16.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200574.png"
			},
			{
				"id": 200649,
				"title": "［Triad Primus］渋谷凛（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200649.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200649.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200649.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/167/17.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200649.png"
			},
			{
				"id": 200650,
				"title": "［Triad Primus］渋谷凛＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200650.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200650.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200650.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/167/18.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200650.png"
			}
		]
	},
	{
		"name": "黒川千秋",
		"kana": "くろかわちあき",
		"type": 2,
		"height": 163,
		"old": 20,
		"weight": 45,
		"birthday": "2月26日",
		"blood": "B",
		"hand": "右",
		"style": {
			"bust": 86,
			"waist": 57,
			"hip": 86
		},
		"imgs": [
			{
				"id": 200003,
				"title": "黒川千秋（N）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200003.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200003.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200003.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/168/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200003.png"
			},
			{
				"id": 200004,
				"title": "黒川千秋＋（N+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200004.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200004.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200004.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/168/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200004.png"
			},
			{
				"id": 200167,
				"title": "［黒真珠の輝き］黒川千秋（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200167.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200167.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200167.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/168/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200167.png"
			},
			{
				"id": 200168,
				"title": "［黒真珠の輝き］黒川千秋＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200168.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200168.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200168.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/168/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200168.png"
			},
			{
				"id": 200461,
				"title": "［夜を見る淑女］黒川千秋（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200461.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200461.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200461.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/168/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200461.png"
			},
			{
				"id": 200462,
				"title": "［夜を見る淑女］黒川千秋＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200462.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200462.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200462.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/168/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200462.png"
			},
			{
				"id": 200563,
				"title": "［流麗なるバカンス］黒川千秋（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200563.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200563.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200563.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/168/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200563.png"
			},
			{
				"id": 200564,
				"title": "［流麗なるバカンス］黒川千秋＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200564.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200564.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200564.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/168/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200564.png"
			},
			{
				"id": 200667,
				"title": "［ノブレス・ノワール］黒川千秋（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200667.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200667.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200667.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/168/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200667.png"
			},
			{
				"id": 200668,
				"title": "［ノブレス・ノワール］黒川千秋＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200668.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200668.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200668.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/168/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200668.png"
			}
		]
	},
	{
		"name": "松本沙理奈",
		"kana": "まつもとさりな",
		"type": 2,
		"height": 165,
		"old": 22,
		"weight": 48,
		"birthday": "9月1日",
		"blood": "A",
		"hand": "右",
		"style": {
			"bust": 92,
			"waist": 58,
			"hip": 85
		},
		"imgs": [
			{
				"id": 200069,
				"title": "松本沙理奈（N）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200069.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200069.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200069.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/169/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200069.png"
			},
			{
				"id": 200070,
				"title": "松本沙理奈＋（N+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200070.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200070.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200070.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/169/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200070.png"
			},
			{
				"id": 200217,
				"title": "［セクシービューティー］松本沙理奈（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200217.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200217.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200217.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/169/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200217.png"
			},
			{
				"id": 200218,
				"title": "［セクシービューティー］松本沙理奈＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200218.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200218.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200218.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/169/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200218.png"
			},
			{
				"id": 200443,
				"title": "［サンシャインマリナー］松本沙理奈（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200443.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200443.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200443.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/169/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200443.png"
			},
			{
				"id": 200444,
				"title": "［サンシャインマリナー］松本沙理奈＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200444.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200444.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200444.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/169/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200444.png"
			},
			{
				"id": 200647,
				"title": "［セクシースリル］松本沙理奈（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200647.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200647.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200647.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/169/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200647.png"
			},
			{
				"id": 200648,
				"title": "［セクシースリル］松本沙理奈＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200648.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200648.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200648.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/169/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200648.png"
			},
			{
				"id": 200791,
				"title": "［スペシャルセクシー］松本沙理奈（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200791.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200791.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200791.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/169/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200791.png"
			},
			{
				"id": 200792,
				"title": "［スペシャルセクシー］松本沙理奈+（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200792.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200792.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200792.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/169/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200792.png"
			}
		]
	},
	{
		"name": "桐野アヤ",
		"kana": "きりのあや",
		"type": 2,
		"height": 160,
		"old": 19,
		"weight": 43,
		"birthday": "4月8日",
		"blood": "A",
		"hand": "右",
		"style": {
			"bust": 86,
			"waist": 56,
			"hip": 86
		},
		"imgs": [
			{
				"id": 200273,
				"title": "桐野アヤ（N）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200273.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200273.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200273.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/170/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200273.png"
			},
			{
				"id": 200274,
				"title": "桐野アヤ＋（N+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200274.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200274.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200274.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/170/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200274.png"
			},
			{
				"id": 200375,
				"title": "［エレガントマリオネット］桐野アヤ（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200375.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200375.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200375.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/170/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200375.png"
			},
			{
				"id": 200376,
				"title": "［エレガントマリオネット］桐野アヤ＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200376.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200376.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200376.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/170/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200376.png"
			},
			{
				"id": 200529,
				"title": "［オープンスイート］桐野アヤ（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200529.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200529.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200529.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/170/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200529.png"
			},
			{
				"id": 200530,
				"title": "［オープンスイート］桐野アヤ＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200530.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200530.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200530.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/170/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200530.png"
			},
			{
				"id": 200731,
				"title": "［ファイト・ロワイヤル］桐野アヤ（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200731.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200731.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200731.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/170/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200731.png"
			},
			{
				"id": 200732,
				"title": "［ファイト・ロワイヤル］桐野アヤ＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200732.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200732.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200732.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/170/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200732.png"
			}
		]
	},
	{
		"name": "高橋礼子",
		"kana": "たかはしれいこ",
		"type": 2,
		"height": 167,
		"old": 31,
		"weight": 51,
		"birthday": "5月8日",
		"blood": "O",
		"hand": "右",
		"style": {
			"bust": 91,
			"waist": 62,
			"hip": 90
		},
		"imgs": [
			{
				"id": 200245,
				"title": "高橋礼子（R）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200245.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200245.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200245.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/171/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200245.png"
			},
			{
				"id": 200246,
				"title": "高橋礼子＋（R+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200246.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200246.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200246.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/171/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200246.png"
			},
			{
				"id": 200275,
				"title": "［妖しき雌豹］高橋礼子（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200275.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200275.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200275.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/171/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200275.png"
			},
			{
				"id": 200276,
				"title": "［妖しき雌豹］高橋礼子＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200276.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200276.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200276.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/171/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200276.png"
			},
			{
				"id": 200483,
				"title": "［魅惑のカクテルレディ］高橋礼子（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200483.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200483.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200483.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/171/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200483.png"
			},
			{
				"id": 200484,
				"title": "［魅惑のカクテルレディ］高橋礼子＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200484.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200484.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200484.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/171/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200484.png"
			},
			{
				"id": 200699,
				"title": "［セクシー・ロワイヤル］高橋礼子（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200699.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200699.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200699.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/171/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200699.png"
			},
			{
				"id": 200700,
				"title": "［セクシー・ロワイヤル］高橋礼子＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200700.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200700.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200700.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/171/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200700.png"
			}
		]
	},
	{
		"name": "相川千夏",
		"kana": "あいかわちなつ",
		"type": 2,
		"height": 161,
		"old": 23,
		"weight": 43,
		"birthday": "11月11日",
		"blood": "B",
		"hand": "右",
		"style": {
			"bust": 82,
			"waist": 56,
			"hip": 85
		},
		"imgs": [
			{
				"id": 200005,
				"title": "相川千夏（N）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200005.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200005.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200005.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/172/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200005.png"
			},
			{
				"id": 200006,
				"title": "相川千夏＋（N+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200006.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200006.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200006.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/172/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200006.png"
			},
			{
				"id": 200115,
				"title": "［ナイトエレガンス］相川千夏（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200115.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200115.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200115.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/172/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200115.png"
			},
			{
				"id": 200116,
				"title": "［ナイトエレガンス］相川千夏＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200116.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200116.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200116.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/172/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200116.png"
			},
			{
				"id": 200499,
				"title": "［招福萬来］相川千夏（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200499.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200499.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200499.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/172/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200499.png"
			},
			{
				"id": 200500,
				"title": "［招福萬来］相川千夏＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200500.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200500.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200500.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/172/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200500.png"
			},
			{
				"id": 200757,
				"title": "［モード・ラフィネ］相川千夏（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200757.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200757.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200757.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/172/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200757.png"
			},
			{
				"id": 200758,
				"title": "［モード・ラフィネ］相川千夏+（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200758.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200758.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200758.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/172/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200758.png"
			}
		]
	},
	{
		"name": "川島瑞樹",
		"kana": "かわしまみずき",
		"type": 2,
		"height": 159,
		"old": 28,
		"weight": 44,
		"birthday": "11月25日",
		"blood": "A",
		"hand": "右",
		"style": {
			"bust": 87,
			"waist": 57,
			"hip": 85
		},
		"imgs": [
			{
				"id": 200007,
				"title": "川島瑞樹（N）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200007.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200007.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200007.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/173/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200007.png"
			},
			{
				"id": 200008,
				"title": "川島瑞樹＋（N+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200008.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200008.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200008.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/173/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200008.png"
			},
			{
				"id": 200057,
				"title": "［永遠のプリンセス］川島瑞樹（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200057.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200057.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200057.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/173/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200057.png"
			},
			{
				"id": 200058,
				"title": "［永遠のプリンセス］川島瑞樹＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200058.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200058.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200058.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/173/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200058.png"
			},
			{
				"id": 200147,
				"title": "［ラグジュアリーメモリー］川島瑞樹（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200147.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200147.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200147.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/173/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200147.png"
			},
			{
				"id": 200148,
				"title": "［ラグジュアリーメモリー］川島瑞樹＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200148.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200148.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200148.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/173/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200148.png"
			},
			{
				"id": 200233,
				"title": "［サマカニ ! ! ］川島瑞樹（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200233.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200233.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200233.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/173/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200233.png"
			},
			{
				"id": 200234,
				"title": "［サマカニ ! ! ］川島瑞樹＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200234.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200234.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200234.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/173/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200234.png"
			},
			{
				"id": 200383,
				"title": "［Nocturne］川島瑞樹（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200383.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200383.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200383.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/173/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200383.png"
			},
			{
				"id": 200384,
				"title": "［Nocturne］川島瑞樹＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200384.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200384.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200384.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/173/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200384.png"
			},
			{
				"id": 200429,
				"title": "［アンビバレント・アクト］川島瑞樹（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200429.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200429.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200429.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/173/11.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200429.png"
			},
			{
				"id": 200430,
				"title": "［アンビバレント・アクト］川島瑞樹＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200430.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200430.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200430.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/173/12.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200430.png"
			},
			{
				"id": 200693,
				"title": "［アドバンス・アバンチュール］川島瑞樹（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200693.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200693.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200693.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/173/13.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200693.png"
			},
			{
				"id": 200694,
				"title": "［アドバンス・アバンチュール］川島瑞樹＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200694.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200694.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200694.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/173/14.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200694.png"
			}
		]
	},
	{
		"name": "神谷奈緒",
		"kana": "かみやなお",
		"type": 2,
		"height": 154,
		"old": 17,
		"weight": 44,
		"birthday": "9月16日",
		"blood": "AB",
		"hand": "左",
		"style": {
			"bust": 83,
			"waist": 58,
			"hip": 81
		},
		"imgs": [
			{
				"id": 200009,
				"title": "神谷奈緒（N）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200009.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200009.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200009.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/174/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200009.png"
			},
			{
				"id": 200010,
				"title": "神谷奈緒＋（N+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200010.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200010.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200010.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/174/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200010.png"
			},
			{
				"id": 200157,
				"title": "［オーバー・ザ・レインボー］神谷奈緒（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200157.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200157.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200157.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/174/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200157.png"
			},
			{
				"id": 200158,
				"title": "［オーバー・ザ・レインボー］神谷奈緒＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200158.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200158.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200158.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/174/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200158.png"
			},
			{
				"id": 200053,
				"title": "［恥じらい乙女］神谷奈緒（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200053.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200053.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200053.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/174/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200053.png"
			},
			{
				"id": 200054,
				"title": "［恥じらい乙女］神谷奈緒＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200054.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200054.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200054.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/174/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200054.png"
			},
			{
				"id": 200333,
				"title": "［ドレスアップナイト］神谷奈緒（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200333.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200333.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200333.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/174/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200333.png"
			},
			{
				"id": 200334,
				"title": "［ドレスアップナイト］神谷奈緒＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200334.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200334.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200334.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/174/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200334.png"
			},
			{
				"id": 200437,
				"title": "［アトラクトゴシック］神谷奈緒（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200437.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200437.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200437.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/174/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200437.png"
			},
			{
				"id": 200438,
				"title": "［アトラクトゴシック］神谷奈緒＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200438.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200438.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200438.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/174/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200438.png"
			},
			{
				"id": 200465,
				"title": "［Trinity Field］神谷奈緒（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200465.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200465.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200465.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/174/11.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200465.png"
			},
			{
				"id": 200466,
				"title": "［Trinity Field］神谷奈緒＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200466.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200466.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200466.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/174/12.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200466.png"
			},
			{
				"id": 200501,
				"title": "［Frost］神谷奈緒（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200501.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200501.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200501.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/174/13.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200501.png"
			},
			{
				"id": 200502,
				"title": "［Frost］神谷奈緒＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200502.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200502.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200502.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/174/14.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200502.png"
			},
			{
				"id": 200571,
				"title": "［一陣の情熱］神谷奈緒（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200571.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200571.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200571.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/174/15.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200571.png"
			},
			{
				"id": 200572,
				"title": "［一陣の情熱］神谷奈緒＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200572.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200572.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200572.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/174/16.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200572.png"
			},
			{
				"id": 200741,
				"title": "［魔性の夜会］神谷奈緒（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200741.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200741.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200741.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/174/17.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200741.png"
			},
			{
				"id": 200742,
				"title": "［魔性の夜会］神谷奈緒＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200742.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200742.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200742.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/174/18.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200742.png"
			}
		]
	},
	{
		"name": "上条春菜",
		"kana": "かみじょうはるな",
		"type": 2,
		"height": 156,
		"old": 18,
		"weight": 42,
		"birthday": "4月10日",
		"blood": "O",
		"hand": "右",
		"style": {
			"bust": 79,
			"waist": 56,
			"hip": 80
		},
		"imgs": [
			{
				"id": 200011,
				"title": "上条春菜（N）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200011.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200011.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200011.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/175/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200011.png"
			},
			{
				"id": 200012,
				"title": "上条春菜＋（N+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200012.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200012.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200012.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/175/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200012.png"
			},
			{
				"id": 200087,
				"title": "［眼鏡プリンセス］上条春菜（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200087.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200087.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200087.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/175/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200087.png"
			},
			{
				"id": 200088,
				"title": "［眼鏡プリンセス］上条春菜＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200088.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200088.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200088.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/175/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200088.png"
			},
			{
				"id": 200129,
				"title": "［Snow Wings］上条春菜（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200129.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200129.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200129.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/175/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200129.png"
			},
			{
				"id": 200130,
				"title": "［Snow Wings］上条春菜＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200130.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200130.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200130.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/175/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200130.png"
			},
			{
				"id": 200229,
				"title": "［澄みきった世界］上条春菜（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200229.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200229.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200229.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/175/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200229.png"
			},
			{
				"id": 200230,
				"title": "［澄みきった世界］上条春菜＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200230.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200230.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200230.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/175/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200230.png"
			},
			{
				"id": 200547,
				"title": "［エチュードは1曲だけ］上条春菜（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200547.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200547.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200547.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/175/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200547.png"
			},
			{
				"id": 200548,
				"title": "［エチュードは1曲だけ］上条春菜＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200548.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200548.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200548.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/175/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200548.png"
			},
			{
				"id": 200637,
				"title": "［Needle Light］上条春菜（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200637.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200637.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200637.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/175/11.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200637.png"
			},
			{
				"id": 200638,
				"title": "［Needle Light］上条春菜＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200638.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200638.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200638.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/175/12.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200638.png"
			}
		]
	},
	{
		"name": "荒木比奈",
		"kana": "あらきひな",
		"type": 2,
		"height": 157,
		"old": 20,
		"weight": 43,
		"birthday": "4月9日",
		"blood": "A",
		"hand": "右",
		"style": {
			"bust": 83,
			"waist": 57,
			"hip": 82
		},
		"imgs": [
			{
				"id": 200013,
				"title": "荒木比奈（N）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200013.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200013.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200013.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/176/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200013.png"
			},
			{
				"id": 200014,
				"title": "荒木比奈＋（N+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200014.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200014.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200014.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/176/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200014.png"
			},
			{
				"id": 200081,
				"title": "［ブルーフロートパーティー］荒木比奈（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200081.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200081.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200081.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/176/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200081.png"
			},
			{
				"id": 200082,
				"title": "［ブルーフロートパーティー］荒木比奈＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200082.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200082.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200082.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/176/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200082.png"
			},
			{
				"id": 200271,
				"title": "［夏の思い出］荒木比奈（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200271.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200271.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200271.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/176/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200271.png"
			},
			{
				"id": 200272,
				"title": "［夏の思い出］荒木比奈＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200272.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200272.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200272.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/176/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200272.png"
			},
			{
				"id": 200343,
				"title": "［ネクスト☆ページ］荒木比奈（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200343.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200343.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200343.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/176/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200343.png"
			},
			{
				"id": 200344,
				"title": "［ネクスト☆ページ］荒木比奈＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200344.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200344.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200344.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/176/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200344.png"
			},
			{
				"id": 200493,
				"title": "［always］荒木比奈（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200493.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200493.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200493.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/176/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200493.png"
			},
			{
				"id": 200494,
				"title": "［always］荒木比奈＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200494.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200494.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200494.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/176/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200494.png"
			},
			{
				"id": 200565,
				"title": "［シーサイドドリーム］荒木比奈（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200565.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200565.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200565.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/176/11.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200565.png"
			},
			{
				"id": 200566,
				"title": "［シーサイドドリーム］荒木比奈＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200566.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200566.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200566.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/176/12.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200566.png"
			},
			{
				"id": 200639,
				"title": "［Needle Light］荒木比奈（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200639.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200639.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200639.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/176/13.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200639.png"
			},
			{
				"id": 200640,
				"title": "［Needle Light］荒木比奈＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200640.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200640.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200640.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/176/14.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200640.png"
			}
		]
	},
	{
		"name": "東郷あい",
		"kana": "とうごうあい",
		"type": 2,
		"height": 167,
		"old": 23,
		"weight": 45,
		"birthday": "2月7日",
		"blood": "AB",
		"hand": "両",
		"style": {
			"bust": 82,
			"waist": 57,
			"hip": 83
		},
		"imgs": [
			{
				"id": 200171,
				"title": "東郷あい（N）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200171.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200171.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200171.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/177/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200171.png"
			},
			{
				"id": 200172,
				"title": "東郷あい＋（N+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200172.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200172.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200172.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/177/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200172.png"
			},
			{
				"id": 200239,
				"title": "［美貌の麗女］東郷あい（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200239.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200239.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200239.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/177/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200239.png"
			},
			{
				"id": 200240,
				"title": "［美貌の麗女］東郷あい＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200240.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200240.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200240.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/177/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200240.png"
			},
			{
				"id": 200415,
				"title": "［夏の戯れ］東郷あい（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200415.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200415.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200415.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/177/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200415.png"
			},
			{
				"id": 200416,
				"title": "［夏の戯れ］東郷あい＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200416.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200416.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200416.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/177/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200416.png"
			},
			{
				"id": 200531,
				"title": "［ビター・エレガンス］東郷あい（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200531.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200531.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200531.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/177/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200531.png"
			},
			{
				"id": 200532,
				"title": "［ビター・エレガンス］東郷あい＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200532.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200532.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200532.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/177/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200532.png"
			}
		]
	},
	{
		"name": "多田李衣菜",
		"kana": "ただりいな",
		"type": 2,
		"height": 152,
		"old": 17,
		"weight": 41,
		"birthday": "6月30日",
		"blood": "A",
		"hand": "右",
		"style": {
			"bust": 80,
			"waist": 55,
			"hip": 81
		},
		"imgs": [
			{
				"id": 200015,
				"title": "多田李衣菜（N）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200015.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200015.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200015.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/178/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200015.png"
			},
			{
				"id": 200016,
				"title": "多田李衣菜＋（N+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200016.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200016.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200016.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/178/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200016.png"
			},
			{
				"id": 200061,
				"title": "［新春ロッカー］多田李衣菜（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200061.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200061.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200061.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/178/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200061.png"
			},
			{
				"id": 200062,
				"title": "［新春ロッカー］多田李衣菜＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200062.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200062.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200062.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/178/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200062.png"
			},
			{
				"id": 200103,
				"title": "［ヒート＆ビート］多田李衣菜（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200103.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200103.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200103.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/178/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200103.png"
			},
			{
				"id": 200104,
				"title": "［ヒート＆ビート］多田李衣菜＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200104.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200104.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200104.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/178/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200104.png"
			},
			{
				"id": 200133,
				"title": "［ゴキゲンParty Night］多田李衣菜（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200133.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200133.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200133.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/178/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200133.png"
			},
			{
				"id": 200134,
				"title": "［ゴキゲンParty Night］多田李衣菜＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200134.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200134.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200134.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/178/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200134.png"
			},
			{
				"id": 200309,
				"title": "［Jet to the Future］多田李衣菜（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200309.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200309.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200309.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/178/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200309.png"
			},
			{
				"id": 200310,
				"title": "［Jet to the Future］多田李衣菜＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200310.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200310.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200310.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/178/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200310.png"
			},
			{
				"id": 200365,
				"title": "［目をあけてみる夢］多田李衣菜（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200365.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200365.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200365.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/178/11.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200365.png"
			},
			{
				"id": 200366,
				"title": "［目をあけてみる夢］多田李衣菜＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200366.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200366.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200366.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/178/12.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200366.png"
			},
			{
				"id": 200515,
				"title": "［放課後ロックスター］多田李衣菜（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200515.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200515.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200515.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/178/13.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200515.png"
			},
			{
				"id": 200516,
				"title": "［放課後ロックスター］多田李衣菜＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200516.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200516.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200516.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/178/14.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200516.png"
			},
			{
				"id": 200663,
				"title": "［ブランニュー・ビート］多田李衣菜（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200663.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200663.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200663.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/178/15.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200663.png"
			},
			{
				"id": 200664,
				"title": "［ブランニュー・ビート］多田李衣菜＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200664.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200664.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200664.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/178/16.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200664.png"
			}
		]
	},
	{
		"name": "水木聖來",
		"kana": "みずきせいら",
		"type": 2,
		"height": 155,
		"old": 23,
		"weight": 43,
		"birthday": "4月27日",
		"blood": "B",
		"hand": "右",
		"style": {
			"bust": 82,
			"waist": 55,
			"hip": 80
		},
		"imgs": [
			{
				"id": 200155,
				"title": "水木聖來（N）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200155.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200155.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200155.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/179/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200155.png"
			},
			{
				"id": 200156,
				"title": "水木聖來＋（N+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200156.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200156.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200156.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/179/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200156.png"
			},
			{
				"id": 200201,
				"title": "［ハートビートUSA］水木聖來（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200201.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200201.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200201.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/179/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200201.png"
			},
			{
				"id": 200202,
				"title": "［ハートビートUSA］水木聖來＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200202.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200202.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200202.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/179/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200202.png"
			},
			{
				"id": 200445,
				"title": "［サンライトマリナー］水木聖來（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200445.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200445.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200445.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/179/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200445.png"
			},
			{
				"id": 200446,
				"title": "［サンライトマリナー］水木聖來＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200446.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200446.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200446.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/179/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200446.png"
			},
			{
				"id": 200513,
				"title": "［ブレイク・ワン・モーメント］水木聖來（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200513.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200513.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200513.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/179/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200513.png"
			},
			{
				"id": 200514,
				"title": "［ブレイク・ワン・モーメント］水木聖來＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200514.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200514.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200514.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/179/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200514.png"
			},
			{
				"id": 200705,
				"title": "［情熱のゆくえ］水木聖來（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200705.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200705.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200705.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/179/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200705.png"
			},
			{
				"id": 200706,
				"title": "［情熱のゆくえ］水木聖來＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200706.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200706.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200706.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/179/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200706.png"
			}
		]
	},
	{
		"name": "佐々木千枝",
		"kana": "ささきちえ",
		"type": 2,
		"height": 139,
		"old": 11,
		"weight": 33,
		"birthday": "6月7日",
		"blood": "AB",
		"hand": "左",
		"style": {
			"bust": 73,
			"waist": 49,
			"hip": 73
		},
		"imgs": [
			{
				"id": 200017,
				"title": "佐々木千枝（N）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200017.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200017.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200017.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/180/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200017.png"
			},
			{
				"id": 200018,
				"title": "佐々木千枝＋（N+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200018.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200018.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200018.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/180/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200018.png"
			},
			{
				"id": 200139,
				"title": "［魔法のスマイル］佐々木千枝（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200139.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200139.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200139.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/180/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200139.png"
			},
			{
				"id": 200140,
				"title": "［魔法のスマイル］佐々木千枝＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200140.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200140.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200140.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/180/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200140.png"
			},
			{
				"id": 200193,
				"title": "［ハイファイ☆デイズ］佐々木千枝（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200193.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200193.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200193.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/180/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200193.png"
			},
			{
				"id": 200194,
				"title": "［ハイファイ☆デイズ］佐々木千枝＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200194.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200194.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200194.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/180/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200194.png"
			},
			{
				"id": 200397,
				"title": "［ステップトゥーミライ］佐々木千枝（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200397.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200397.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200397.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/180/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200397.png"
			},
			{
				"id": 200398,
				"title": "［ステップトゥーミライ］佐々木千枝＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200398.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200398.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200398.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/180/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200398.png"
			},
			{
				"id": 200411,
				"title": "［Yes ! Party Time ! ! ］佐々木千枝（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200411.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200411.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200411.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/180/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200411.png"
			},
			{
				"id": 200412,
				"title": "［Yes ! Party Time ! ! ］佐々木千枝＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200412.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200412.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200412.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/180/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200412.png"
			},
			{
				"id": 200507,
				"title": "［おしゃまなコアクマ］佐々木千枝（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200507.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200507.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200507.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/180/11.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200507.png"
			},
			{
				"id": 200508,
				"title": "［おしゃまなコアクマ］佐々木千枝＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200508.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200508.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200508.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/180/12.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200508.png"
			},
			{
				"id": 200709,
				"title": "［チャーミングチアー］佐々木千枝（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200709.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200709.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200709.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/180/13.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200709.png"
			},
			{
				"id": 200710,
				"title": "［チャーミングチアー］佐々木千枝＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200710.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200710.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200710.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/180/14.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200710.png"
			}
		]
	},
	{
		"name": "三船美優",
		"kana": "みふねみゆ",
		"type": 2,
		"height": 165,
		"old": 26,
		"weight": 46,
		"birthday": "2月25日",
		"blood": "AB",
		"hand": "右",
		"style": {
			"bust": 85,
			"waist": 60,
			"hip": 85
		},
		"imgs": [
			{
				"id": 200123,
				"title": "三船美優（N）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200123.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200123.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200123.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/181/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200123.png"
			},
			{
				"id": 200124,
				"title": "三船美優＋（N+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200124.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200124.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200124.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/181/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200124.png"
			},
			{
				"id": 200163,
				"title": "［癒しの女神］三船美優（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200163.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200163.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200163.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/181/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200163.png"
			},
			{
				"id": 200164,
				"title": "［癒しの女神］三船美優＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200164.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200164.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200164.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/181/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200164.png"
			},
			{
				"id": 200257,
				"title": "［ルージュクチュール］三船美優（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200257.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200257.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200257.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/181/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200257.png"
			},
			{
				"id": 200258,
				"title": "［ルージュクチュール］三船美優＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200258.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200258.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200258.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/181/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200258.png"
			},
			{
				"id": 200367,
				"title": "［こころ、酔わせて］三船美優（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200367.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200367.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200367.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/181/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200367.png"
			},
			{
				"id": 200368,
				"title": "［こころ、酔わせて］三船美優＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200368.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200368.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200368.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/181/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200368.png"
			},
			{
				"id": 200545,
				"title": "［エチュードは1曲だけ］三船美優（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200545.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200545.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200545.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/181/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200545.png"
			},
			{
				"id": 200546,
				"title": "［エチュードは1曲だけ］三船美優＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200546.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200546.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200546.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/181/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200546.png"
			},
			{
				"id": 200609,
				"title": "［聖夜の約束］三船美優（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200609.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200609.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200609.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/181/11.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200609.png"
			},
			{
				"id": 200610,
				"title": "［聖夜の約束］三船美優＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200610.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200610.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200610.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/181/12.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200610.png"
			},
			{
				"id": 200685,
				"title": "［優美なる花嫁］三船美優（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200685.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200685.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200685.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/181/13.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200685.png"
			},
			{
				"id": 200686,
				"title": "［優美なる花嫁］三船美優＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200686.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200686.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200686.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/181/14.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200686.png"
			},
			{
				"id": 200713,
				"title": "［サンセットヴィーナス］三船美優（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200713.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200713.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200713.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/181/15.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200713.png"
			},
			{
				"id": 200714,
				"title": "［サンセットヴィーナス］三船美優＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200714.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200714.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200714.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/181/16.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200714.png"
			}
		]
	},
	{
		"name": "服部瞳子",
		"kana": "はっとりとうこ",
		"type": 2,
		"height": 169,
		"old": 25,
		"weight": 48,
		"birthday": "10月11日",
		"blood": "O",
		"hand": "左",
		"style": {
			"bust": 78,
			"waist": 57,
			"hip": 80
		},
		"imgs": [
			{
				"id": 200289,
				"title": "服部瞳子（R）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200289.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200289.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200289.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/182/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200289.png"
			},
			{
				"id": 200290,
				"title": "服部瞳子＋（R+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200290.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200290.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200290.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/182/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200290.png"
			},
			{
				"id": 200427,
				"title": "［一輪の花］服部瞳子（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200427.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200427.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200427.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/182/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200427.png"
			},
			{
				"id": 200428,
				"title": "［一輪の花］服部瞳子＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200428.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200428.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200428.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/182/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200428.png"
			},
			{
				"id": 200633,
				"title": "［エターナルホープ］服部瞳子（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200633.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200633.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200633.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/182/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200633.png"
			},
			{
				"id": 200634,
				"title": "［エターナルホープ］服部瞳子＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200634.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200634.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200634.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/182/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200634.png"
			},
			{
				"id": 200787,
				"title": "［影に揺れる光］服部瞳子（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200787.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200787.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200787.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/182/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200787.png"
			},
			{
				"id": 200788,
				"title": "［影に揺れる光］服部瞳子+（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200788.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200788.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200788.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/182/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200788.png"
			}
		]
	},
	{
		"name": "木場真奈美",
		"kana": "きばまなみ",
		"type": 2,
		"height": 172,
		"old": 25,
		"weight": 50,
		"birthday": "8月8日",
		"blood": "AB",
		"hand": "右",
		"style": {
			"bust": 88,
			"waist": 60,
			"hip": 89
		},
		"imgs": [
			{
				"id": 220231,
				"title": "木場真奈美（R）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/220231.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/220231.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/220231.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/183/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/220231.png"
			},
			{
				"id": 220232,
				"title": "木場真奈美＋（R+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/220232.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/220232.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/220232.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/183/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/220232.png"
			},
			{
				"id": 200409,
				"title": "［ビーチクイーン］木場真奈美（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200409.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200409.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200409.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/183/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200409.png"
			},
			{
				"id": 200410,
				"title": "［ビーチクイーン］木場真奈美＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200410.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200410.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200410.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/183/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200410.png"
			},
			{
				"id": 200603,
				"title": "［ワイルドドライブ］木場真奈美（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200603.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200603.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200603.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/183/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200603.png"
			},
			{
				"id": 200604,
				"title": "［ワイルドドライブ］木場真奈美＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200604.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200604.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200604.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/183/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200604.png"
			}
		]
	},
	{
		"name": "藤原肇",
		"kana": "ふじわらはじめ",
		"type": 2,
		"height": 161,
		"old": 16,
		"weight": 43,
		"birthday": "6月15日",
		"blood": "B",
		"hand": "両",
		"style": {
			"bust": 80,
			"waist": 55,
			"hip": 84
		},
		"imgs": [
			{
				"id": 200135,
				"title": "藤原肇（N）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200135.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200135.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200135.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/184/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200135.png"
			},
			{
				"id": 200136,
				"title": "藤原肇＋（N+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200136.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200136.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200136.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/184/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200136.png"
			},
			{
				"id": 200261,
				"title": "［憧憬の絵姿］藤原肇（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200261.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200261.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200261.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/184/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200261.png"
			},
			{
				"id": 200262,
				"title": "［憧憬の絵姿］藤原肇＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200262.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200262.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200262.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/184/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200262.png"
			},
			{
				"id": 200307,
				"title": "［ただひとつの器］藤原肇（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200307.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200307.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200307.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/184/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200307.png"
			},
			{
				"id": 200308,
				"title": "［ただひとつの器］藤原肇＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200308.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200308.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200308.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/184/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200308.png"
			},
			{
				"id": 200471,
				"title": "［恋が咲く季節］藤原肇（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200471.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200471.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200471.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/184/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200471.png"
			},
			{
				"id": 200472,
				"title": "［恋が咲く季節］藤原肇＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200472.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200472.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200472.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/184/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200472.png"
			},
			{
				"id": 200583,
				"title": "［なよ竹の美器］藤原肇（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200583.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200583.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200583.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/184/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200583.png"
			},
			{
				"id": 200584,
				"title": "［なよ竹の美器］藤原肇＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200584.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200584.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200584.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/184/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200584.png"
			},
			{
				"id": 200605,
				"title": "［Sunshine See May］藤原肇（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200605.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200605.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200605.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/184/11.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200605.png"
			},
			{
				"id": 200606,
				"title": "［Sunshine See May］藤原肇＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200606.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200606.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200606.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/184/12.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200606.png"
			},
			{
				"id": 200673,
				"title": "［朱華色の夢］藤原肇（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200673.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200673.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200673.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/184/13.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200673.png"
			},
			{
				"id": 200674,
				"title": "［朱華色の夢］藤原肇＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200674.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200674.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200674.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/184/14.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200674.png"
			}
		]
	},
	{
		"name": "新田美波",
		"kana": "にったみなみ",
		"type": 2,
		"height": 165,
		"old": 19,
		"weight": 45,
		"birthday": "7月27日",
		"blood": "O",
		"hand": "右",
		"style": {
			"bust": 82,
			"waist": 55,
			"hip": 85
		},
		"imgs": [
			{
				"id": 200019,
				"title": "新田美波（N）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200019.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200019.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200019.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/185/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200019.png"
			},
			{
				"id": 200020,
				"title": "新田美波＋（N+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200020.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200020.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200020.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/185/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200020.png"
			},
			{
				"id": 200059,
				"title": "［笑顔の女神］新田美波（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200059.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200059.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200059.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/185/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200059.png"
			},
			{
				"id": 200060,
				"title": "［笑顔の女神］新田美波＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200060.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200060.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200060.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/185/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200060.png"
			},
			{
				"id": 200095,
				"title": "［ノーブルヴィーナス］新田美波（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200095.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200095.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200095.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/185/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200095.png"
			},
			{
				"id": 200096,
				"title": "［ノーブルヴィーナス］新田美波＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200096.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200096.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200096.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/185/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200096.png"
			},
			{
				"id": 200209,
				"title": "［生存本能ヴァルキュリア］新田美波（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200209.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200209.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200209.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/185/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200209.png"
			},
			{
				"id": 200210,
				"title": "［生存本能ヴァルキュリア］新田美波＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200210.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200210.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200210.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/185/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200210.png"
			},
			{
				"id": 200265,
				"title": "［夏色の南風］新田美波（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200265.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200265.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200265.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/185/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200265.png"
			},
			{
				"id": 200266,
				"title": "［夏色の南風］新田美波＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200266.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200266.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200266.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/185/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200266.png"
			},
			{
				"id": 200537,
				"title": "［渚の花嫁］新田美波（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200537.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200537.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200537.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/185/11.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200537.png"
			},
			{
				"id": 200538,
				"title": "［渚の花嫁］新田美波＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200538.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200538.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200538.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/185/12.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200538.png"
			},
			{
				"id": 200551,
				"title": "［銀のイルカと熱い風］新田美波（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200551.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200551.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200551.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/185/13.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200551.png"
			},
			{
				"id": 200552,
				"title": "［銀のイルカと熱い風］新田美波＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200552.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200552.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200552.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/185/14.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200552.png"
			},
			{
				"id": 200669,
				"title": "［無重力シャトル］新田美波（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200669.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200669.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200669.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/185/15.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200669.png"
			},
			{
				"id": 200670,
				"title": "［無重力シャトル］新田美波＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200670.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200670.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200670.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/185/16.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200670.png"
			},
			{
				"id": 200759,
				"title": "［Secret Daybreak］新田美波（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200759.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200759.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200759.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/185/17.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200759.png"
			},
			{
				"id": 200760,
				"title": "［Secret Daybreak］新田美波+（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200760.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200760.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200760.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/185/18.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200760.png"
			}
		]
	},
	{
		"name": "水野翠",
		"kana": "みずのみどり",
		"type": 2,
		"height": 164,
		"old": 18,
		"weight": 47,
		"birthday": "12月5日",
		"blood": "AB",
		"hand": "右",
		"style": {
			"bust": 80,
			"waist": 54,
			"hip": 81
		},
		"imgs": [
			{
				"id": 200185,
				"title": "水野翠（R）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200185.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200185.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200185.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/186/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200185.png"
			},
			{
				"id": 200186,
				"title": "水野翠＋（R+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200186.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200186.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200186.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/186/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200186.png"
			},
			{
				"id": 200305,
				"title": "［流麗な令嬢］水野翠（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200305.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200305.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200305.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/186/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200305.png"
			},
			{
				"id": 200306,
				"title": "［流麗な令嬢］水野翠＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200306.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200306.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200306.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/186/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200306.png"
			},
			{
				"id": 200521,
				"title": "［光彩の華］水野翠（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200521.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200521.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200521.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/186/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200521.png"
			},
			{
				"id": 200522,
				"title": "［光彩の華］水野翠＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200522.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200522.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200522.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/186/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200522.png"
			},
			{
				"id": 200749,
				"title": "［ブライト・ロワイヤル］水野翠（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200749.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200749.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200749.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/186/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200749.png"
			},
			{
				"id": 200750,
				"title": "［ブライト・ロワイヤル］水野翠+（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200750.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200750.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200750.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/186/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200750.png"
			}
		]
	},
	{
		"name": "古澤頼子",
		"kana": "ふるさわよりこ",
		"type": 2,
		"height": 166,
		"old": 17,
		"weight": 45,
		"birthday": "5月18日",
		"blood": "A",
		"hand": "左",
		"style": {
			"bust": 81,
			"waist": 59,
			"hip": 83
		},
		"imgs": [
			{
				"id": 200267,
				"title": "古澤頼子（R）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200267.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200267.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200267.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/187/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200267.png"
			},
			{
				"id": 200268,
				"title": "古澤頼子＋（R+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200268.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200268.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200268.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/187/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200268.png"
			},
			{
				"id": 200369,
				"title": "［クラシカルエレガント］古澤頼子（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200369.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200369.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200369.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/187/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200369.png"
			},
			{
				"id": 200370,
				"title": "［クラシカルエレガント］古澤頼子＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200370.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200370.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200370.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/187/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200370.png"
			},
			{
				"id": 200533,
				"title": "［未来の風向き］古澤頼子（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200533.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200533.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200533.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/187/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200533.png"
			},
			{
				"id": 200534,
				"title": "［未来の風向き］古澤頼子＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200534.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200534.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200534.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/187/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200534.png"
			},
			{
				"id": 200765,
				"title": "［知能派キョンシー］古澤頼子（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200765.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200765.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200765.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/187/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200765.png"
			},
			{
				"id": 200766,
				"title": "［知能派キョンシー］古澤頼子+（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200766.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200766.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200766.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/187/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200766.png"
			}
		]
	},
	{
		"name": "橘ありす",
		"kana": "たちばなありす",
		"type": 2,
		"height": 141,
		"old": 12,
		"weight": 34,
		"birthday": "7月31日",
		"blood": "A",
		"hand": "右",
		"style": {
			"bust": 68,
			"waist": 52,
			"hip": 67
		},
		"imgs": [
			{
				"id": 200067,
				"title": "橘ありす（N）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200067.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200067.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200067.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/188/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200067.png"
			},
			{
				"id": 200068,
				"title": "橘ありす＋（N+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200068.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200068.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200068.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/188/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200068.png"
			},
			{
				"id": 200181,
				"title": "［オンリーマイフラッグ］橘ありす（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200181.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200181.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200181.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/188/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200181.png"
			},
			{
				"id": 200182,
				"title": "［オンリーマイフラッグ］橘ありす＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200182.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200182.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200182.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/188/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200182.png"
			},
			{
				"id": 200205,
				"title": "［はじめての表情］橘ありす（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200205.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200205.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200205.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/188/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200205.png"
			},
			{
				"id": 200206,
				"title": "［はじめての表情］橘ありす＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200206.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200206.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200206.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/188/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200206.png"
			},
			{
				"id": 200277,
				"title": "［Near to You］橘ありす（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200277.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200277.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200277.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/188/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200277.png"
			},
			{
				"id": 200278,
				"title": "［Near to You］橘ありす＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200278.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200278.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200278.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/188/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200278.png"
			},
			{
				"id": 200453,
				"title": "［ありすのティーパーティー］橘ありす（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200453.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200453.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200453.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/188/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200453.png"
			},
			{
				"id": 200454,
				"title": "［ありすのティーパーティー］橘ありす＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200454.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200454.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200454.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/188/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200454.png"
			},
			{
				"id": 200643,
				"title": "［ありすの物語］橘ありす（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200643.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200643.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200643.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/188/11.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200643.png"
			},
			{
				"id": 200644,
				"title": "［ありすの物語］橘ありす＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200644.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200644.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200644.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/188/12.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200644.png"
			},
			{
				"id": 200715,
				"title": "［夏恋 -NATSU KOI-］橘ありす（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200715.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200715.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200715.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/188/13.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200715.png"
			},
			{
				"id": 200716,
				"title": "［夏恋 -NATSU KOI-］橘ありす＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200716.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200716.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200716.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/188/14.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200716.png"
			}
		]
	},
	{
		"name": "鷺沢文香",
		"kana": "さぎさわふみか",
		"type": 2,
		"height": 162,
		"old": 19,
		"weight": 45,
		"birthday": "10月27日",
		"blood": "AB",
		"hand": "右",
		"style": {
			"bust": 84,
			"waist": 54,
			"hip": 81
		},
		"imgs": [
			{
				"id": 200091,
				"title": "鷺沢文香（N）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200091.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200091.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200091.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/189/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200091.png"
			},
			{
				"id": 200092,
				"title": "鷺沢文香＋（N+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200092.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200092.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200092.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/189/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200092.png"
			},
			{
				"id": 200107,
				"title": "［ブライトメモリーズ］鷺沢文香（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200107.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200107.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200107.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/189/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200107.png"
			},
			{
				"id": 200108,
				"title": "［ブライトメモリーズ］鷺沢文香＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200108.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200108.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200108.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/189/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200108.png"
			},
			{
				"id": 200249,
				"title": "［咲いてJewel］鷺沢文香（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200249.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200249.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200249.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/189/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200249.png"
			},
			{
				"id": 200250,
				"title": "［咲いてJewel］鷺沢文香＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200250.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200250.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200250.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/189/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200250.png"
			},
			{
				"id": 200281,
				"title": "［密やかな饗宴］鷺沢文香（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200281.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200281.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200281.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/189/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200281.png"
			},
			{
				"id": 200282,
				"title": "［密やかな饗宴］鷺沢文香＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200282.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200282.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200282.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/189/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200282.png"
			},
			{
				"id": 200439,
				"title": "［イリュージョニスタ ! ］鷺沢文香（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200439.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200439.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200439.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/189/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200439.png"
			},
			{
				"id": 200440,
				"title": "［イリュージョニスタ ! ］鷺沢文香＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200440.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200440.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200440.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/189/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200440.png"
			},
			{
				"id": 200553,
				"title": "［星祭りの夜］鷺沢文香（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200553.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200553.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200553.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/189/11.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200553.png"
			},
			{
				"id": 200554,
				"title": "［星祭りの夜］鷺沢文香＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200554.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200554.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200554.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/189/12.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200554.png"
			},
			{
				"id": 200695,
				"title": "［潮風の一頁］鷺沢文香（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200695.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200695.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200695.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/189/13.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200695.png"
			},
			{
				"id": 200696,
				"title": "［潮風の一頁］鷺沢文香＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200696.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200696.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200696.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/189/14.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200696.png"
			}
		]
	},
	{
		"name": "八神マキノ",
		"kana": "やがみまきの",
		"type": 2,
		"height": 160,
		"old": 18,
		"weight": 45,
		"birthday": "11月7日",
		"blood": "B",
		"hand": "右",
		"style": {
			"bust": 85,
			"waist": 56,
			"hip": 83
		},
		"imgs": [
			{
				"id": 200127,
				"title": "八神マキノ（R）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200127.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200127.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200127.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/190/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200127.png"
			},
			{
				"id": 200128,
				"title": "八神マキノ＋（R+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200128.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200128.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200128.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/190/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200128.png"
			},
			{
				"id": 200159,
				"title": "［シークレットナイト］八神マキノ（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200159.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200159.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200159.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/190/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200159.png"
			},
			{
				"id": 200160,
				"title": "［シークレットナイト］八神マキノ＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200160.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200160.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200160.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/190/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200160.png"
			},
			{
				"id": 200353,
				"title": "［インサイト・エクステンド］八神マキノ（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200353.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200353.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200353.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/190/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200353.png"
			},
			{
				"id": 200354,
				"title": "［インサイト・エクステンド］八神マキノ＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200354.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200354.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200354.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/190/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200354.png"
			},
			{
				"id": 200519,
				"title": "［ハイ・リベレーション］八神マキノ（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200519.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200519.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200519.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/190/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200519.png"
			},
			{
				"id": 200520,
				"title": "［ハイ・リベレーション］八神マキノ＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200520.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200520.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200520.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/190/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200520.png"
			},
			{
				"id": 200599,
				"title": "［静寂のひととき］八神マキノ（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200599.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200599.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200599.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/190/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200599.png"
			},
			{
				"id": 200600,
				"title": "［静寂のひととき］八神マキノ＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200600.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200600.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200600.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/190/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200600.png"
			},
			{
				"id": 200745,
				"title": "［学び舎のペルソナ］八神マキノ（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200745.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200745.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200745.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/190/11.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200745.png"
			},
			{
				"id": 200746,
				"title": "［学び舎のペルソナ］八神マキノ＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200746.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200746.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200746.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/190/12.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200746.png"
			}
		]
	},
	{
		"name": "ライラ",
		"kana": "らいら",
		"type": 2,
		"height": 150,
		"old": 16,
		"weight": 40,
		"birthday": "5月21日",
		"blood": "O",
		"hand": "右",
		"style": {
			"bust": 75,
			"waist": 54,
			"hip": 78
		},
		"imgs": [
			{
				"id": 200161,
				"title": "ライラ（R）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200161.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200161.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200161.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/191/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200161.png"
			},
			{
				"id": 200162,
				"title": "ライラ＋（R+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200162.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200162.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200162.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/191/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200162.png"
			},
			{
				"id": 200321,
				"title": "［ミステリアスシエラザード］ライラ（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200321.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200321.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200321.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/191/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200321.png"
			},
			{
				"id": 200322,
				"title": "［ミステリアスシエラザード］ライラ＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200322.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200322.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200322.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/191/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200322.png"
			},
			{
				"id": 200467,
				"title": "［異国に吹く風］ライラ（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200467.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200467.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200467.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/191/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200467.png"
			},
			{
				"id": 200468,
				"title": "［異国に吹く風］ライラ＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200468.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200468.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200468.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/191/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200468.png"
			},
			{
				"id": 200601,
				"title": "［ガールズロッカー］ライラ（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200601.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200601.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200601.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/191/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200601.png"
			},
			{
				"id": 200602,
				"title": "［ガールズロッカー］ライラ＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200602.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200602.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200602.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/191/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200602.png"
			},
			{
				"id": 200775,
				"title": "［デザートマミー］ライラ（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200775.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200775.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200775.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/191/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200775.png"
			},
			{
				"id": 200776,
				"title": "［デザートマミー］ライラ+（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200776.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200776.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200776.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/191/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200776.png"
			}
		]
	},
	{
		"name": "浅利七海",
		"kana": "あさりななみ",
		"type": 2,
		"height": 151,
		"old": 14,
		"weight": 41,
		"birthday": "10月9日",
		"blood": "A",
		"hand": "右",
		"style": {
			"bust": 78,
			"waist": 55,
			"hip": 77
		},
		"imgs": [
			{
				"id": 220225,
				"title": "浅利七海（N）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/220225.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/220225.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/220225.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/192/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/220225.png"
			},
			{
				"id": 220226,
				"title": "浅利七海＋（N+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/220226.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/220226.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/220226.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/192/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/220226.png"
			},
			{
				"id": 200335,
				"title": "［いきものがかり］浅利七海（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200335.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200335.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200335.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/192/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200335.png"
			},
			{
				"id": 200336,
				"title": "［いきものがかり］浅利七海＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200336.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200336.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200336.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/192/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200336.png"
			},
			{
				"id": 200561,
				"title": "［すいすいオーシャン］浅利七海（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200561.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200561.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200561.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/192/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200561.png"
			},
			{
				"id": 200562,
				"title": "［すいすいオーシャン］浅利七海＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200562.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200562.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200562.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/192/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200562.png"
			},
			{
				"id": 200631,
				"title": "［おいしいりさーち］浅利七海（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200631.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200631.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200631.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/192/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200631.png"
			},
			{
				"id": 200632,
				"title": "［おいしいりさーち］浅利七海＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200632.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200632.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200632.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/192/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200632.png"
			}
		]
	},
	{
		"name": "ヘレン",
		"kana": "へれん",
		"type": 2,
		"height": 158,
		"old": 24,
		"weight": 46,
		"birthday": "4月4日",
		"blood": "AB",
		"hand": "右",
		"style": {
			"bust": 90,
			"waist": 58,
			"hip": 81
		},
		"imgs": [
			{
				"id": 220227,
				"title": "ヘレン（N）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/220227.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/220227.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/220227.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/193/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/220227.png"
			},
			{
				"id": 220228,
				"title": "ヘレン＋（N+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/220228.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/220228.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/220228.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/193/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/220228.png"
			},
			{
				"id": 200407,
				"title": "［ワールドイズマイン］ヘレン（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200407.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200407.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200407.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/193/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200407.png"
			},
			{
				"id": 200408,
				"title": "［ワールドイズマイン］ヘレン＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200408.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200408.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200408.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/193/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200408.png"
			},
			{
				"id": 200703,
				"title": "［パーフェクトティーチャー］ヘレン（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200703.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200703.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200703.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/193/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200703.png"
			},
			{
				"id": 200704,
				"title": "［パーフェクトティーチャー］ヘレン＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200704.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200704.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200704.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/193/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200704.png"
			}
		]
	},
	{
		"name": "松永涼",
		"kana": "まつながりょう",
		"type": 2,
		"height": 160,
		"old": 18,
		"weight": 47,
		"birthday": "10月1日",
		"blood": "AB",
		"hand": "右",
		"style": {
			"bust": 90,
			"waist": 56,
			"hip": 86
		},
		"imgs": [
			{
				"id": 200021,
				"title": "松永涼（R）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200021.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200021.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200021.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/194/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200021.png"
			},
			{
				"id": 200022,
				"title": "松永涼＋（R+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200022.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200022.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200022.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/194/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200022.png"
			},
			{
				"id": 200121,
				"title": "［ロッキンヴォーカリスト］松永涼（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200121.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200121.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200121.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/194/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200121.png"
			},
			{
				"id": 200122,
				"title": "［ロッキンヴォーカリスト］松永涼＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200122.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200122.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200122.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/194/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200122.png"
			},
			{
				"id": 200373,
				"title": "［SOUND A ROUND］松永涼（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200373.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200373.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200373.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/194/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200373.png"
			},
			{
				"id": 200374,
				"title": "［SOUND A ROUND］松永涼＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200374.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200374.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200374.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/194/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200374.png"
			},
			{
				"id": 200385,
				"title": "［Nocturne］松永涼（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200385.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200385.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200385.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/194/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200385.png"
			},
			{
				"id": 200386,
				"title": "［Nocturne］松永涼＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200386.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200386.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200386.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/194/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200386.png"
			},
			{
				"id": 200591,
				"title": "［アンデッド・ダンスロック］松永涼（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200591.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200591.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200591.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/194/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200591.png"
			},
			{
				"id": 200592,
				"title": "［アンデッド・ダンスロック］松永涼＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200592.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200592.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200592.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/194/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200592.png"
			}
		]
	},
	{
		"name": "小室千奈美",
		"kana": "こむろちなみ",
		"type": 2,
		"height": 164,
		"old": 19,
		"weight": 45,
		"birthday": "6月9日",
		"blood": "AB",
		"hand": "右",
		"style": {
			"bust": 84,
			"waist": 56,
			"hip": 82
		},
		"imgs": [
			{
				"id": 200327,
				"title": "小室千奈美（R）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200327.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200327.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200327.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/195/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200327.png"
			},
			{
				"id": 200328,
				"title": "小室千奈美＋（R+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200328.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200328.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200328.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/195/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200328.png"
			},
			{
				"id": 200423,
				"title": "［ステージディーヴァ］小室千奈美（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200423.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200423.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200423.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/195/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200423.png"
			},
			{
				"id": 200424,
				"title": "［ステージディーヴァ］小室千奈美＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200424.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200424.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200424.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/195/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200424.png"
			},
			{
				"id": 200569,
				"title": "［美しき品位］小室千奈美（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200569.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200569.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200569.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/195/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200569.png"
			},
			{
				"id": 200570,
				"title": "［美しき品位］小室千奈美＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200570.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200570.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200570.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/195/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200570.png"
			}
		]
	},
	{
		"name": "高峯のあ",
		"kana": "たかみねのあ",
		"type": 2,
		"height": 168,
		"old": 24,
		"weight": 48,
		"birthday": "3月25日",
		"blood": "B",
		"hand": "右",
		"style": {
			"bust": 87,
			"waist": 55,
			"hip": 86
		},
		"imgs": [
			{
				"id": 200303,
				"title": "高峯のあ（R）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200303.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200303.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200303.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/196/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200303.png"
			},
			{
				"id": 200304,
				"title": "高峯のあ＋（R+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200304.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200304.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200304.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/196/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200304.png"
			},
			{
				"id": 200371,
				"title": "［寡黙の女王］高峯のあ（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200371.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200371.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200371.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/196/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200371.png"
			},
			{
				"id": 200372,
				"title": "［寡黙の女王］高峯のあ＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200372.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200372.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200372.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/196/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200372.png"
			},
			{
				"id": 200549,
				"title": "［イン・ヒューマン］高峯のあ（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200549.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200549.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200549.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/196/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200549.png"
			},
			{
				"id": 200550,
				"title": "［イン・ヒューマン］高峯のあ＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200550.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200550.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200550.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/196/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200550.png"
			},
			{
				"id": 200641,
				"title": "［イグナイトアビリティーズ］高峯のあ（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200641.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200641.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200641.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/196/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200641.png"
			},
			{
				"id": 200642,
				"title": "［イグナイトアビリティーズ］高峯のあ＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200642.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200642.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200642.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/196/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200642.png"
			}
		]
	},
	{
		"name": "高垣楓",
		"kana": "たかがきかえで",
		"type": 2,
		"height": 171,
		"old": 25,
		"weight": 49,
		"birthday": "6月14日",
		"blood": "AB",
		"hand": "左",
		"style": {
			"bust": 81,
			"waist": 57,
			"hip": 83
		},
		"imgs": [
			{
				"id": 200023,
				"title": "高垣楓（R）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200023.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200023.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200023.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/197/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200023.png"
			},
			{
				"id": 200024,
				"title": "高垣楓＋（R+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200024.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200024.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200024.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/197/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200024.png"
			},
			{
				"id": 200051,
				"title": "［神秘の女神］高垣楓（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200051.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200051.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200051.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/197/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200051.png"
			},
			{
				"id": 200052,
				"title": "［神秘の女神］高垣楓＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200052.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200052.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200052.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/197/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200052.png"
			},
			{
				"id": 200099,
				"title": "［Nation Blue］高垣楓（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200099.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200099.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200099.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/197/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200099.png"
			},
			{
				"id": 200100,
				"title": "［Nation Blue］高垣楓＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200100.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200100.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200100.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/197/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200100.png"
			},
			{
				"id": 200165,
				"title": "［夜風の誘い］高垣楓（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200165.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200165.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200165.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/197/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200165.png"
			},
			{
				"id": 200166,
				"title": "［夜風の誘い］高垣楓＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200166.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200166.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200166.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/197/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200166.png"
			},
			{
				"id": 200293,
				"title": "［茜色の彩り］高垣楓（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200293.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200293.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200293.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/197/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200293.png"
			},
			{
				"id": 200294,
				"title": "［茜色の彩り］高垣楓＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200294.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200294.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200294.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/197/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200294.png"
			},
			{
				"id": 200349,
				"title": "［命燃やして恋せよ乙女］高垣楓（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200349.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200349.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200349.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/197/11.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200349.png"
			},
			{
				"id": 200350,
				"title": "［命燃やして恋せよ乙女］高垣楓＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200350.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200350.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200350.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/197/12.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200350.png"
			},
			{
				"id": 200441,
				"title": "［等身大の距離で］高垣楓（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200441.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200441.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200441.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/197/13.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200441.png"
			},
			{
				"id": 200442,
				"title": "［等身大の距離で］高垣楓＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200442.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200442.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200442.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/197/14.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200442.png"
			},
			{
				"id": 200581,
				"title": "［Pretty Liar］高垣楓（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200581.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200581.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200581.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/197/15.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200581.png"
			},
			{
				"id": 200582,
				"title": "［Pretty Liar］高垣楓＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200582.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200582.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200582.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/197/16.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200582.png"
			},
			{
				"id": 200619,
				"title": "［悠久の羽根］高垣楓（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200619.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200619.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200619.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/197/17.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200619.png"
			},
			{
				"id": 200620,
				"title": "［悠久の羽根］高垣楓＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200620.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200620.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200620.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/197/18.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200620.png"
			}
		]
	},
	{
		"name": "神崎蘭子",
		"kana": "かんざきらんこ",
		"type": 2,
		"height": 156,
		"old": 14,
		"weight": 41,
		"birthday": "4月8日",
		"blood": "A",
		"hand": "右",
		"style": {
			"bust": 81,
			"waist": 57,
			"hip": 80
		},
		"imgs": [
			{
				"id": 200025,
				"title": "神崎蘭子（R）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200025.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200025.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200025.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/198/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200025.png"
			},
			{
				"id": 200026,
				"title": "神崎蘭子＋（R+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200026.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200026.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200026.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/198/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200026.png"
			},
			{
				"id": 200073,
				"title": "［薔薇の闇姫］神崎蘭子（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200073.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200073.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200073.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/198/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200073.png"
			},
			{
				"id": 200074,
				"title": "［薔薇の闇姫］神崎蘭子＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200074.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200074.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200074.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/198/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200074.png"
			},
			{
				"id": 200097,
				"title": "［Nation Blue］神崎蘭子（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200097.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200097.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200097.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/198/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200097.png"
			},
			{
				"id": 200098,
				"title": "［Nation Blue］神崎蘭子＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200098.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200098.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200098.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/198/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200098.png"
			},
			{
				"id": 200247,
				"title": "［運命の待ち人］神崎蘭子（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200247.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200247.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200247.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/198/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200247.png"
			},
			{
				"id": 200248,
				"title": "［運命の待ち人］神崎蘭子＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200248.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200248.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200248.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/198/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200248.png"
			},
			{
				"id": 200431,
				"title": "［双翼の独奏歌］神崎蘭子（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200431.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200431.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200431.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/198/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200431.png"
			},
			{
				"id": 200432,
				"title": "［双翼の独奏歌］神崎蘭子＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200432.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200432.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200432.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/198/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200432.png"
			},
			{
				"id": 200525,
				"title": "［幻想と神話の紡ぎ手］神崎蘭子（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200525.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200525.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200525.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/198/11.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200525.png"
			},
			{
				"id": 200526,
				"title": "［幻想と神話の紡ぎ手］神崎蘭子＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200526.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200526.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200526.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/198/12.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200526.png"
			},
			{
				"id": 200621,
				"title": "［春暁の紅姫］神崎蘭子（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200621.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200621.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200621.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/198/13.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200621.png"
			},
			{
				"id": 200622,
				"title": "［春暁の紅姫］神崎蘭子＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200622.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200622.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200622.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/198/14.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200622.png"
			},
			{
				"id": 200729,
				"title": "［祝宴の白姫］神崎蘭子（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200729.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200729.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200729.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/198/15.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200729.png"
			},
			{
				"id": 200730,
				"title": "［祝宴の白姫］神崎蘭子＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200730.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200730.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200730.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/198/16.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200730.png"
			}
		]
	},
	{
		"name": "伊集院惠",
		"kana": "いじゅういんめぐみ",
		"type": 2,
		"height": 160,
		"old": 21,
		"weight": 44,
		"birthday": "9月24日",
		"blood": "O",
		"hand": "左",
		"style": {
			"bust": 86,
			"waist": 56,
			"hip": 81
		},
		"imgs": [
			{
				"id": 200325,
				"title": "伊集院惠（R）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200325.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200325.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200325.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/199/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200325.png"
			},
			{
				"id": 200326,
				"title": "伊集院惠＋（R+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200326.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200326.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200326.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/199/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200326.png"
			},
			{
				"id": 200351,
				"title": "［悠久の旅人］伊集院惠（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200351.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200351.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200351.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/199/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200351.png"
			},
			{
				"id": 200352,
				"title": "［悠久の旅人］伊集院惠＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200352.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200352.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200352.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/199/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200352.png"
			},
			{
				"id": 200535,
				"title": "［トラベル・ロワイヤル］伊集院惠（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200535.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200535.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200535.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/199/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200535.png"
			},
			{
				"id": 200536,
				"title": "［トラベル・ロワイヤル］伊集院惠＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200536.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200536.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200536.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/199/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200536.png"
			},
			{
				"id": 200773,
				"title": "［ヴォヤージュチアー］伊集院惠（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200773.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200773.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200773.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/199/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200773.png"
			},
			{
				"id": 200774,
				"title": "［ヴォヤージュチアー］伊集院惠+（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200774.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200774.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200774.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/199/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200774.png"
			}
		]
	},
	{
		"name": "柊志乃",
		"kana": "ひいらぎしの",
		"type": 2,
		"height": 167,
		"old": 31,
		"weight": 43,
		"birthday": "12月25日",
		"blood": "AB",
		"hand": "左",
		"style": {
			"bust": 84,
			"waist": 54,
			"hip": 83
		},
		"imgs": [
			{
				"id": 200101,
				"title": "柊志乃（N）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200101.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200101.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200101.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/200/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200101.png"
			},
			{
				"id": 200102,
				"title": "柊志乃＋（N+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200102.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200102.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200102.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/200/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200102.png"
			},
			{
				"id": 200421,
				"title": "［ドランカーパイレーツ］柊志乃（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200421.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200421.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200421.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/200/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200421.png"
			},
			{
				"id": 200422,
				"title": "［ドランカーパイレーツ］柊志乃＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200422.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200422.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200422.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/200/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200422.png"
			},
			{
				"id": 200629,
				"title": "［ドランク・ロワイヤル］柊志乃（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200629.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200629.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200629.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/200/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200629.png"
			},
			{
				"id": 200630,
				"title": "［ドランク・ロワイヤル］柊志乃＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200630.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200630.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200630.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/200/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200630.png"
			},
			{
				"id": 200771,
				"title": "［トワ・エ・モワ］柊志乃（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200771.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200771.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200771.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/200/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200771.png"
			},
			{
				"id": 200772,
				"title": "［トワ・エ・モワ］柊志乃+（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200772.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200772.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200772.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/200/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200772.png"
			}
		]
	},
	{
		"name": "北条加蓮",
		"kana": "ほうじょうかれん",
		"type": 2,
		"height": 155,
		"old": 16,
		"weight": 42,
		"birthday": "9月5日",
		"blood": "B",
		"hand": "右",
		"style": {
			"bust": 83,
			"waist": 55,
			"hip": 81
		},
		"imgs": [
			{
				"id": 200027,
				"title": "北条加蓮（R）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200027.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200027.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200027.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/201/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200027.png"
			},
			{
				"id": 200028,
				"title": "北条加蓮＋（R+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200028.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200028.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200028.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/201/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200028.png"
			},
			{
				"id": 200055,
				"title": "［煌めきの乙女］北条加蓮（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200055.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200055.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200055.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/201/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200055.png"
			},
			{
				"id": 200056,
				"title": "［煌めきの乙女］北条加蓮＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200056.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200056.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200056.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/201/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200056.png"
			},
			{
				"id": 200183,
				"title": "［煌めきのひととき］北条加蓮（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200183.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200183.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200183.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/201/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200183.png"
			},
			{
				"id": 200184,
				"title": "［煌めきのひととき］北条加蓮＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200184.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200184.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200184.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/201/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200184.png"
			},
			{
				"id": 200269,
				"title": "［Love∞Destiny］北条加蓮（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200269.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200269.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200269.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/201/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200269.png"
			},
			{
				"id": 200270,
				"title": "［Love∞Destiny］北条加蓮＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200270.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200270.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200270.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/201/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200270.png"
			},
			{
				"id": 200313,
				"title": "［ソング・フォー・ライフ］北条加蓮（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200313.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200313.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200313.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/201/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200313.png"
			},
			{
				"id": 200314,
				"title": "［ソング・フォー・ライフ］北条加蓮＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200314.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200314.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200314.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/201/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200314.png"
			},
			{
				"id": 200463,
				"title": "［Trinity Field］北条加蓮（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200463.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200463.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200463.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/201/11.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200463.png"
			},
			{
				"id": 200464,
				"title": "［Trinity Field］北条加蓮＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200464.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200464.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200464.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/201/12.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200464.png"
			},
			{
				"id": 200575,
				"title": "［トゥインクル・パーティー］北条加蓮（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200575.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200575.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200575.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/201/13.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200575.png"
			},
			{
				"id": 200576,
				"title": "［トゥインクル・パーティー］北条加蓮＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200576.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200576.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200576.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/201/14.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200576.png"
			},
			{
				"id": 200653,
				"title": "［未完成の歴史］北条加蓮（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200653.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200653.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200653.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/201/15.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200653.png"
			},
			{
				"id": 200654,
				"title": "［未完成の歴史］北条加蓮＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200654.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200654.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200654.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/201/16.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200654.png"
			},
			{
				"id": 200725,
				"title": "［プロミネンス・プライド］北条加蓮（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200725.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200725.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200725.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/201/17.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200725.png"
			},
			{
				"id": 200726,
				"title": "［プロミネンス・プライド］北条加蓮＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200726.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200726.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200726.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/201/18.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200726.png"
			}
		]
	},
	{
		"name": "ケイト",
		"kana": "けいと",
		"type": 2,
		"height": 157,
		"old": 20,
		"weight": 45,
		"birthday": "8月15日",
		"blood": "O",
		"hand": "右",
		"style": {
			"bust": 83,
			"waist": 59,
			"hip": 85
		},
		"imgs": [
			{
				"id": 200029,
				"title": "ケイト（R）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200029.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200029.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200029.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/202/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200029.png"
			},
			{
				"id": 200030,
				"title": "ケイト＋（R+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200030.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200030.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200030.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/202/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200030.png"
			},
			{
				"id": 200395,
				"title": "［シャッターチャンス］ケイト（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200395.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200395.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200395.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/202/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200395.png"
			},
			{
				"id": 200396,
				"title": "［シャッターチャンス］ケイト＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200396.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200396.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200396.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/202/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200396.png"
			},
			{
				"id": 200625,
				"title": "［スプラッシュビューティー］ケイト（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200625.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200625.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200625.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/202/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200625.png"
			},
			{
				"id": 200626,
				"title": "［スプラッシュビューティー］ケイト＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200626.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200626.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200626.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/202/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200626.png"
			}
		]
	},
	{
		"name": "瀬名詩織",
		"kana": "せなしおり",
		"type": 2,
		"height": 165,
		"old": 19,
		"weight": 48,
		"birthday": "1月10日",
		"blood": "A",
		"hand": "右",
		"style": {
			"bust": 85,
			"waist": 58,
			"hip": 83
		},
		"imgs": [
			{
				"id": 200287,
				"title": "瀬名詩織（R）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200287.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200287.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200287.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/203/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200287.png"
			},
			{
				"id": 200288,
				"title": "瀬名詩織＋（R+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200288.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200288.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200288.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/203/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200288.png"
			},
			{
				"id": 200379,
				"title": "［白波の歌姫］瀬名詩織（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200379.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200379.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200379.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/203/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200379.png"
			},
			{
				"id": 200380,
				"title": "［白波の歌姫］瀬名詩織＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200380.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200380.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200380.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/203/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200380.png"
			},
			{
				"id": 200615,
				"title": "［ラッシュ・ロワイヤル］瀬名詩織（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200615.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200615.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200615.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/203/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200615.png"
			},
			{
				"id": 200616,
				"title": "［ラッシュ・ロワイヤル］瀬名詩織＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200616.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200616.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200616.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/203/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200616.png"
			},
			{
				"id": 200707,
				"title": "［想いは深く、歌声は遠く］瀬名詩織（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200707.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200707.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200707.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/203/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200707.png"
			},
			{
				"id": 200708,
				"title": "［想いは深く、歌声は遠く］瀬名詩織＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200708.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200708.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200708.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/203/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200708.png"
			}
		]
	},
	{
		"name": "綾瀬穂乃香",
		"kana": "あやせほのか",
		"type": 2,
		"height": 161,
		"old": 17,
		"weight": 46,
		"birthday": "5月29日",
		"blood": "A",
		"hand": "右",
		"style": {
			"bust": 85,
			"waist": 57,
			"hip": 84
		},
		"imgs": [
			{
				"id": 200077,
				"title": "綾瀬穂乃香（R）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200077.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200077.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200077.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/204/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200077.png"
			},
			{
				"id": 200078,
				"title": "綾瀬穂乃香＋（R+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200078.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200078.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200078.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/204/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200078.png"
			},
			{
				"id": 200109,
				"title": "［クロネコチアー］綾瀬穂乃香（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200109.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200109.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200109.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/204/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200109.png"
			},
			{
				"id": 200110,
				"title": "［クロネコチアー］綾瀬穂乃香＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200110.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200110.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200110.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/204/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200110.png"
			},
			{
				"id": 200243,
				"title": "［ドキドキ☆チャレンジ］綾瀬穂乃香（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200243.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200243.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200243.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/204/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200243.png"
			},
			{
				"id": 200244,
				"title": "［ドキドキ☆チャレンジ］綾瀬穂乃香＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200244.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200244.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200244.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/204/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200244.png"
			},
			{
				"id": 200541,
				"title": "［クーリッシュラブリー］綾瀬穂乃香（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200541.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200541.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200541.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/204/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200541.png"
			},
			{
				"id": 200542,
				"title": "［クーリッシュラブリー］綾瀬穂乃香＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200542.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200542.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200542.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/204/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200542.png"
			},
			{
				"id": 200677,
				"title": "［歓びのアティチュード］綾瀬穂乃香（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200677.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200677.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200677.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/204/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200677.png"
			},
			{
				"id": 200678,
				"title": "［歓びのアティチュード］綾瀬穂乃香＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200678.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200678.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200678.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/204/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200678.png"
			}
		]
	},
	{
		"name": "佐城雪美",
		"kana": "さじょうゆきみ",
		"type": 2,
		"height": 137,
		"old": 10,
		"weight": 30,
		"birthday": "9月28日",
		"blood": "AB",
		"hand": "右",
		"style": {
			"bust": 63,
			"waist": 47,
			"hip": 65
		},
		"imgs": [
			{
				"id": 200075,
				"title": "佐城雪美（R）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200075.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200075.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200075.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/205/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200075.png"
			},
			{
				"id": 200076,
				"title": "佐城雪美＋（R+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200076.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200076.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200076.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/205/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200076.png"
			},
			{
				"id": 200079,
				"title": "［プチ・マドモアゼル］佐城雪美（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200079.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200079.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200079.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/205/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200079.png"
			},
			{
				"id": 200080,
				"title": "［プチ・マドモアゼル］佐城雪美＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200080.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200080.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200080.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/205/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200080.png"
			},
			{
				"id": 200381,
				"title": "［ひみつの小夜曲］佐城雪美（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200381.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200381.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200381.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/205/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200381.png"
			},
			{
				"id": 200382,
				"title": "［ひみつの小夜曲］佐城雪美＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200382.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200382.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200382.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/205/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200382.png"
			},
			{
				"id": 200469,
				"title": "［クリスマスドール］佐城雪美（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200469.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200469.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200469.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/205/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200469.png"
			},
			{
				"id": 200470,
				"title": "［クリスマスドール］佐城雪美＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200470.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200470.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200470.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/205/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200470.png"
			},
			{
				"id": 200665,
				"title": "［マーチング☆メロディー］佐城雪美（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200665.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200665.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200665.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/205/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200665.png"
			},
			{
				"id": 200666,
				"title": "［マーチング☆メロディー］佐城雪美＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200666.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200666.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200666.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/205/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200666.png"
			},
			{
				"id": 200739,
				"title": "［重ねた手と日々］佐城雪美（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200739.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200739.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200739.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/205/11.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200739.png"
			},
			{
				"id": 200740,
				"title": "［重ねた手と日々］佐城雪美＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200740.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200740.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200740.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/205/12.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200740.png"
			},
			{
				"id": 200769,
				"title": "［Sun ! High ! Gold ! ］佐城雪美（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200769.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200769.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200769.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/205/13.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200769.png"
			},
			{
				"id": 200770,
				"title": "［Sun ! High ! Gold ! ］佐城雪美+（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200770.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200770.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200770.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/205/14.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200770.png"
			}
		]
	},
	{
		"name": "篠原礼",
		"kana": "しのはられい",
		"type": 2,
		"height": 171,
		"old": 27,
		"weight": 49,
		"birthday": "11月22日",
		"blood": "B",
		"hand": "左",
		"style": {
			"bust": 93,
			"waist": 58,
			"hip": 88
		},
		"imgs": [
			{
				"id": 220249,
				"title": "篠原礼（R）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/220249.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/220249.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/220249.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/210/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/220249.png"
			},
			{
				"id": 220250,
				"title": "篠原礼＋（R+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/220250.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/220250.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/220250.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/210/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/220250.png"
			},
			{
				"id": 200363,
				"title": "［意外な一面］篠原礼（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200363.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200363.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200363.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/210/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200363.png"
			},
			{
				"id": 200364,
				"title": "［意外な一面］篠原礼＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200364.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200364.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200364.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/210/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200364.png"
			},
			{
				"id": 200557,
				"title": "［アトラクティブレディ］篠原礼（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200557.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200557.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200557.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/210/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200557.png"
			},
			{
				"id": 200558,
				"title": "［アトラクティブレディ］篠原礼＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200558.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200558.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200558.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/210/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200558.png"
			}
		]
	},
	{
		"name": "和久井留美",
		"kana": "わくいるみ",
		"type": 2,
		"height": 168,
		"old": 26,
		"weight": 49,
		"birthday": "4月7日",
		"blood": "A",
		"hand": "左",
		"style": {
			"bust": 81,
			"waist": 60,
			"hip": 86
		},
		"imgs": [
			{
				"id": 200207,
				"title": "和久井留美（R）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200207.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200207.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200207.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/211/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200207.png"
			},
			{
				"id": 200208,
				"title": "和久井留美＋（R+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200208.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200208.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200208.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/211/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200208.png"
			},
			{
				"id": 200223,
				"title": "［麗しの花嫁］和久井留美（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200223.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200223.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200223.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/211/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200223.png"
			},
			{
				"id": 200224,
				"title": "［麗しの花嫁］和久井留美＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200224.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200224.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200224.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/211/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200224.png"
			},
			{
				"id": 200455,
				"title": "［ミスティックブルー］和久井留美（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200455.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200455.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200455.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/211/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200455.png"
			},
			{
				"id": 200456,
				"title": "［ミスティックブルー］和久井留美＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200456.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200456.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200456.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/211/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200456.png"
			},
			{
				"id": 200585,
				"title": "［ダークネスクイーン］和久井留美（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200585.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200585.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200585.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/211/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200585.png"
			},
			{
				"id": 200586,
				"title": "［ダークネスクイーン］和久井留美＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200586.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200586.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200586.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/211/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200586.png"
			},
			{
				"id": 200701,
				"title": "［夜更けに咲く才媛］和久井留美（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200701.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200701.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200701.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/211/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200701.png"
			},
			{
				"id": 200702,
				"title": "［夜更けに咲く才媛］和久井留美＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200702.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200702.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200702.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/211/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200702.png"
			}
		]
	},
	{
		"name": "吉岡沙紀",
		"kana": "よしおかさき",
		"type": 2,
		"height": 166,
		"old": 17,
		"weight": 43,
		"birthday": "5月8日",
		"blood": "A",
		"hand": "右",
		"style": {
			"bust": 86,
			"waist": 60,
			"hip": 85
		},
		"imgs": [
			{
				"id": 200255,
				"title": "吉岡沙紀（N）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200255.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200255.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200255.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/212/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200255.png"
			},
			{
				"id": 200256,
				"title": "吉岡沙紀＋（N+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200256.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200256.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200256.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/212/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200256.png"
			},
			{
				"id": 200387,
				"title": "［ボーイッシュエレガント］吉岡沙紀（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200387.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200387.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200387.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/212/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200387.png"
			},
			{
				"id": 200388,
				"title": "［ボーイッシュエレガント］吉岡沙紀＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200388.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200388.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200388.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/212/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200388.png"
			},
			{
				"id": 200577,
				"title": "［アーティスティックチアー］吉岡沙紀（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200577.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200577.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200577.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/212/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200577.png"
			},
			{
				"id": 200578,
				"title": "［アーティスティックチアー］吉岡沙紀＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200578.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200578.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200578.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/212/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200578.png"
			},
			{
				"id": 200763,
				"title": "［ライフイズアート］吉岡沙紀（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200763.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200763.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200763.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/212/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200763.png"
			},
			{
				"id": 200764,
				"title": "［ライフイズアート］吉岡沙紀+（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200764.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200764.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200764.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/212/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200764.png"
			}
		]
	},
	{
		"name": "梅木音葉",
		"kana": "うめきおとは",
		"type": 2,
		"height": 172,
		"old": 19,
		"weight": 49,
		"birthday": "6月20日",
		"blood": "AB",
		"hand": "右",
		"style": {
			"bust": 86,
			"waist": 58,
			"hip": 85
		},
		"imgs": [
			{
				"id": 200187,
				"title": "梅木音葉（R）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200187.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200187.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200187.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/213/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200187.png"
			},
			{
				"id": 200188,
				"title": "梅木音葉＋（R+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200188.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200188.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200188.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/213/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200188.png"
			},
			{
				"id": 200299,
				"title": "［涼風のミンストレル］梅木音葉（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200299.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200299.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200299.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/213/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200299.png"
			},
			{
				"id": 200300,
				"title": "［涼風のミンストレル］梅木音葉＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200300.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200300.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200300.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/213/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200300.png"
			},
			{
				"id": 200457,
				"title": "［メロディ・ロワイヤル］梅木音葉（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200457.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200457.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200457.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/213/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200457.png"
			},
			{
				"id": 200458,
				"title": "［メロディ・ロワイヤル］梅木音葉＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200458.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200458.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200458.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/213/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200458.png"
			},
			{
				"id": 200661,
				"title": "［サクラアンダンテ］梅木音葉（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200661.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200661.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200661.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/213/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200661.png"
			},
			{
				"id": 200662,
				"title": "［サクラアンダンテ］梅木音葉＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200662.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200662.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200662.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/213/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200662.png"
			}
		]
	},
	{
		"name": "白坂小梅",
		"kana": "しらさかこうめ",
		"type": 2,
		"height": 142,
		"old": 13,
		"weight": 34,
		"birthday": "3月28日",
		"blood": "AB",
		"hand": "左",
		"style": {
			"bust": 65,
			"waist": 50,
			"hip": 70
		},
		"imgs": [
			{
				"id": 200083,
				"title": "白坂小梅（R）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200083.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200083.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200083.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/214/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200083.png"
			},
			{
				"id": 200084,
				"title": "白坂小梅＋（R+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200084.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200084.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200084.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/214/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200084.png"
			},
			{
				"id": 200089,
				"title": "［ハロウィンナイトメア］白坂小梅（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200089.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200089.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200089.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/214/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200089.png"
			},
			{
				"id": 200090,
				"title": "［ハロウィンナイトメア］白坂小梅＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200090.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200090.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200090.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/214/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200090.png"
			},
			{
				"id": 200179,
				"title": "［オルゴールの小箱］白坂小梅（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200179.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200179.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200179.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/214/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200179.png"
			},
			{
				"id": 200180,
				"title": "［オルゴールの小箱］白坂小梅＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200180.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200180.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200180.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/214/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200180.png"
			},
			{
				"id": 200213,
				"title": "［センリツノヨル］白坂小梅（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200213.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200213.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200213.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/214/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200213.png"
			},
			{
				"id": 200214,
				"title": "［センリツノヨル］白坂小梅＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200214.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200214.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200214.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/214/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200214.png"
			},
			{
				"id": 200355,
				"title": "［Lunatic Show］白坂小梅（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200355.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200355.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200355.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/214/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200355.png"
			},
			{
				"id": 200356,
				"title": "［Lunatic Show］白坂小梅＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200356.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200356.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200356.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/214/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200356.png"
			},
			{
				"id": 200389,
				"title": "［ヨモスガラ・パーティー］白坂小梅（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200389.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200389.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200389.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/214/11.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200389.png"
			},
			{
				"id": 200390,
				"title": "［ヨモスガラ・パーティー］白坂小梅＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200390.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200390.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200390.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/214/12.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200390.png"
			},
			{
				"id": 200417,
				"title": "［リトルリドル］白坂小梅（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200417.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200417.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200417.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/214/13.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200417.png"
			},
			{
				"id": 200418,
				"title": "［リトルリドル］白坂小梅＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200418.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200418.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200418.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/214/14.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200418.png"
			},
			{
				"id": 200517,
				"title": "［Vast world］白坂小梅（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200517.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200517.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200517.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/214/15.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200517.png"
			},
			{
				"id": 200518,
				"title": "［Vast world］白坂小梅＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200518.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200518.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200518.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/214/16.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200518.png"
			},
			{
				"id": 200593,
				"title": "［アンデッド・ダンスロック］白坂小梅（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200593.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200593.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200593.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/214/17.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200593.png"
			},
			{
				"id": 200594,
				"title": "［アンデッド・ダンスロック］白坂小梅＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200594.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200594.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200594.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/214/18.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200594.png"
			},
			{
				"id": 200655,
				"title": "［学園のヒロイン］白坂小梅（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200655.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200655.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200655.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/214/19.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200655.png"
			},
			{
				"id": 200656,
				"title": "［学園のヒロイン］白坂小梅＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200656.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200656.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200656.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/214/20.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200656.png"
			},
			{
				"id": 200767,
				"title": "［ホワイトスノードール］白坂小梅（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200767.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200767.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200767.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/214/21.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200767.png"
			},
			{
				"id": 200768,
				"title": "［ホワイトスノードール］白坂小梅+（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200768.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200768.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200768.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/214/22.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200768.png"
			}
		]
	},
	{
		"name": "岸部彩華",
		"kana": "きしべあやか",
		"type": 2,
		"height": 162,
		"old": 19,
		"weight": 46,
		"birthday": "11月13日",
		"blood": "A",
		"hand": "右",
		"style": {
			"bust": 89,
			"waist": 59,
			"hip": 85
		},
		"imgs": [
			{
				"id": 200301,
				"title": "岸部彩華（N）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200301.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200301.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200301.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/215/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200301.png"
			},
			{
				"id": 200302,
				"title": "岸部彩華＋（N+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200302.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200302.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200302.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/215/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200302.png"
			},
			{
				"id": 200357,
				"title": "［ゴージャスチアー］岸部彩華（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200357.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200357.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200357.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/215/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200357.png"
			},
			{
				"id": 200358,
				"title": "［ゴージャスチアー］岸部彩華＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200358.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200358.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200358.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/215/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200358.png"
			},
			{
				"id": 200559,
				"title": "［マジモード］岸部彩華（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200559.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200559.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200559.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/215/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200559.png"
			},
			{
				"id": 200560,
				"title": "［マジモード］岸部彩華＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200560.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200560.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200560.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/215/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200560.png"
			}
		]
	},
	{
		"name": "氏家むつみ",
		"kana": "うじいえむつみ",
		"type": 2,
		"height": 152,
		"old": 13,
		"weight": 42,
		"birthday": "7月13日",
		"blood": "AB",
		"hand": "右",
		"style": {
			"bust": 78,
			"waist": 57,
			"hip": 80
		},
		"imgs": [
			{
				"id": 220211,
				"title": "氏家むつみ（N）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/220211.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/220211.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/220211.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/216/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/220211.png"
			},
			{
				"id": 220212,
				"title": "氏家むつみ＋（N+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/220212.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/220212.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/220212.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/216/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/220212.png"
			},
			{
				"id": 200323,
				"title": "［ロワイヤルガール］氏家むつみ（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200323.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200323.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200323.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/216/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200323.png"
			},
			{
				"id": 200324,
				"title": "［ロワイヤルガール］氏家むつみ＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200324.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200324.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200324.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/216/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200324.png"
			},
			{
				"id": 200489,
				"title": "［心躍るアドベンチャー］氏家むつみ（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200489.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200489.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200489.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/216/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200489.png"
			},
			{
				"id": 200490,
				"title": "［心躍るアドベンチャー］氏家むつみ＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200490.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200490.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200490.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/216/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200490.png"
			},
			{
				"id": 200683,
				"title": "［冒険竜］氏家むつみ（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200683.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200683.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200683.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/216/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200683.png"
			},
			{
				"id": 200684,
				"title": "［冒険竜］氏家むつみ＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200684.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200684.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200684.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/216/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200684.png"
			}
		]
	},
	{
		"name": "西川保奈美",
		"kana": "にしかわほなみ",
		"type": 2,
		"height": 155,
		"old": 16,
		"weight": 55,
		"birthday": "10月23日",
		"blood": "A",
		"hand": "両",
		"style": {
			"bust": 88,
			"waist": 60,
			"hip": 86
		},
		"imgs": [
			{
				"id": 200315,
				"title": "西川保奈美（R）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200315.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200315.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200315.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/217/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200315.png"
			},
			{
				"id": 200316,
				"title": "西川保奈美＋（R+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200316.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200316.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200316.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/217/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200316.png"
			},
			{
				"id": 200403,
				"title": "［麗しきプリマドンナ］西川保奈美（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200403.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200403.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200403.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/217/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200403.png"
			},
			{
				"id": 200404,
				"title": "［麗しきプリマドンナ］西川保奈美＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200404.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200404.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200404.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/217/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200404.png"
			},
			{
				"id": 200543,
				"title": "［シンシアチアー］西川保奈美（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200543.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200543.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200543.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/217/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200543.png"
			},
			{
				"id": 200544,
				"title": "［シンシアチアー］西川保奈美＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200544.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200544.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200544.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/217/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200544.png"
			},
			{
				"id": 200751,
				"title": "［喝采のディーヴァ］西川保奈美（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200751.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200751.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200751.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/217/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200751.png"
			},
			{
				"id": 200752,
				"title": "［喝采のディーヴァ］西川保奈美+（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200752.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200752.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200752.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/217/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200752.png"
			}
		]
	},
	{
		"name": "成宮由愛",
		"kana": "なるみやゆめ",
		"type": 2,
		"height": 150,
		"old": 13,
		"weight": 40,
		"birthday": "11月3日",
		"blood": "AB",
		"hand": "両",
		"style": {
			"bust": 72,
			"waist": 51,
			"hip": 73
		},
		"imgs": [
			{
				"id": 200195,
				"title": "成宮由愛（N）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200195.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200195.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200195.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/218/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200195.png"
			},
			{
				"id": 200196,
				"title": "成宮由愛＋（N+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200196.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200196.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200196.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/218/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200196.png"
			},
			{
				"id": 200339,
				"title": "［リトルプリーステス］成宮由愛（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200339.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200339.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200339.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/218/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200339.png"
			},
			{
				"id": 200340,
				"title": "［リトルプリーステス］成宮由愛＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200340.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200340.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200340.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/218/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200340.png"
			},
			{
				"id": 200475,
				"title": "［マジカルガール・リーフ］成宮由愛（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200475.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200475.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200475.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/218/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200475.png"
			},
			{
				"id": 200476,
				"title": "［マジカルガール・リーフ］成宮由愛＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200476.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200476.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200476.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/218/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200476.png"
			},
			{
				"id": 200635,
				"title": "［色とりどりのゆめ］成宮由愛（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200635.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200635.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200635.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/218/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200635.png"
			},
			{
				"id": 200636,
				"title": "［色とりどりのゆめ］成宮由愛＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200636.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200636.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200636.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/218/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200636.png"
			}
		]
	},
	{
		"name": "藤居朋",
		"kana": "ふじいとも",
		"type": 2,
		"height": 163,
		"old": 19,
		"weight": 45,
		"birthday": "7月1日",
		"blood": "O",
		"hand": "右",
		"style": {
			"bust": 78,
			"waist": 57,
			"hip": 83
		},
		"imgs": [
			{
				"id": 200177,
				"title": "藤居朋（R）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200177.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200177.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200177.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/219/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200177.png"
			},
			{
				"id": 200178,
				"title": "藤居朋＋（R+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200178.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200178.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200178.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/219/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200178.png"
			},
			{
				"id": 200263,
				"title": "［フォーチュン★スター］藤居朋（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200263.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200263.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200263.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/219/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200263.png"
			},
			{
				"id": 200264,
				"title": "［フォーチュン★スター］藤居朋＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200264.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200264.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200264.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/219/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200264.png"
			},
			{
				"id": 200511,
				"title": "［フォーチュンチアー］藤居朋（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200511.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200511.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200511.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/219/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200511.png"
			},
			{
				"id": 200512,
				"title": "［フォーチュンチアー］藤居朋＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200512.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200512.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200512.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/219/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200512.png"
			},
			{
				"id": 200733,
				"title": "［幸せのお告げ］藤居朋（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200733.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200733.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200733.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/219/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200733.png"
			},
			{
				"id": 200734,
				"title": "［幸せのお告げ］藤居朋＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200734.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200734.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200734.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/219/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200734.png"
			}
		]
	},
	{
		"name": "塩見周子",
		"kana": "しおみしゅうこ",
		"type": 2,
		"height": 163,
		"old": 18,
		"weight": 45,
		"birthday": "12月12日",
		"blood": "B",
		"hand": "左",
		"style": {
			"bust": 82,
			"waist": 56,
			"hip": 81
		},
		"imgs": [
			{
				"id": 200085,
				"title": "塩見周子（N）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200085.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200085.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200085.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/220/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200085.png"
			},
			{
				"id": 200086,
				"title": "塩見周子＋（N+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200086.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200086.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200086.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/220/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200086.png"
			},
			{
				"id": 200169,
				"title": "［Tulip］塩見周子（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200169.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200169.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200169.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/220/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200169.png"
			},
			{
				"id": 200170,
				"title": "［Tulip］塩見周子＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200170.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200170.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200170.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/220/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200170.png"
			},
			{
				"id": 200221,
				"title": "［夜色の暁風］塩見周子（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200221.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200221.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200221.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/220/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200221.png"
			},
			{
				"id": 200222,
				"title": "［夜色の暁風］塩見周子＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200222.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200222.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200222.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/220/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200222.png"
			},
			{
				"id": 200345,
				"title": "［うつつの華模様］塩見周子（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200345.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200345.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200345.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/220/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200345.png"
			},
			{
				"id": 200346,
				"title": "［うつつの華模様］塩見周子＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200346.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200346.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200346.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/220/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200346.png"
			},
			{
				"id": 200425,
				"title": "［ブルー・ホライゾン］塩見周子（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200425.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200425.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200425.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/220/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200425.png"
			},
			{
				"id": 200426,
				"title": "［ブルー・ホライゾン］塩見周子＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200426.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200426.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200426.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/220/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200426.png"
			},
			{
				"id": 200487,
				"title": "［美に入り彩を穿つ］塩見周子（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200487.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200487.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200487.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/220/11.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200487.png"
			},
			{
				"id": 200488,
				"title": "［美に入り彩を穿つ］塩見周子＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200488.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200488.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200488.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/220/12.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200488.png"
			},
			{
				"id": 200623,
				"title": "［羽衣小町］塩見周子（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200623.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200623.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200623.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/220/13.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200623.png"
			},
			{
				"id": 200624,
				"title": "［羽衣小町］塩見周子＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200624.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200624.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200624.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/220/14.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200624.png"
			},
			{
				"id": 200717,
				"title": "［夏恋 -NATSU KOI-］塩見周子（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200717.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200717.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200717.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/220/15.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200717.png"
			},
			{
				"id": 200718,
				"title": "［夏恋 -NATSU KOI-］塩見周子＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200718.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200718.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200718.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/220/16.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200718.png"
			}
		]
	},
	{
		"name": "脇山珠美",
		"kana": "わきやまたまみ",
		"type": 2,
		"height": 145,
		"old": 16,
		"weight": 38,
		"birthday": "9月20日",
		"blood": "B",
		"hand": "右",
		"style": {
			"bust": 72,
			"waist": 53,
			"hip": 75
		},
		"imgs": [
			{
				"id": 200111,
				"title": "脇山珠美（R）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200111.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200111.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200111.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/221/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200111.png"
			},
			{
				"id": 200112,
				"title": "脇山珠美＋（R+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200112.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200112.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200112.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/221/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200112.png"
			},
			{
				"id": 200131,
				"title": "［小さな自信家］脇山珠美（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200131.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200131.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200131.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/221/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200131.png"
			},
			{
				"id": 200132,
				"title": "［小さな自信家］脇山珠美＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200132.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200132.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200132.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/221/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200132.png"
			},
			{
				"id": 200203,
				"title": "［ちびっこステージ］脇山珠美（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200203.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200203.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200203.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/221/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200203.png"
			},
			{
				"id": 200204,
				"title": "［ちびっこステージ］脇山珠美＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200204.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200204.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200204.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/221/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200204.png"
			},
			{
				"id": 200329,
				"title": "［Flip Flop］脇山珠美（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200329.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200329.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200329.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/221/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200329.png"
			},
			{
				"id": 200330,
				"title": "［Flip Flop］脇山珠美＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200330.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200330.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200330.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/221/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200330.png"
			},
			{
				"id": 200419,
				"title": "［真剣・一閃］脇山珠美（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200419.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200419.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200419.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/221/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200419.png"
			},
			{
				"id": 200420,
				"title": "［真剣・一閃］脇山珠美＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200420.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200420.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200420.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/221/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200420.png"
			},
			{
				"id": 200451,
				"title": "［キミのそばでずっと］脇山珠美（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200451.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200451.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200451.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/221/11.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200451.png"
			},
			{
				"id": 200452,
				"title": "［キミのそばでずっと］脇山珠美＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200452.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200452.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200452.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/221/12.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200452.png"
			},
			{
				"id": 200503,
				"title": "［Frost］脇山珠美（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200503.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200503.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200503.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/221/13.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200503.png"
			},
			{
				"id": 200504,
				"title": "［Frost］脇山珠美＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200504.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200504.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200504.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/221/14.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200504.png"
			},
			{
				"id": 200723,
				"title": "［流浪の剣客］脇山珠美（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200723.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200723.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200723.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/221/15.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200723.png"
			},
			{
				"id": 200724,
				"title": "［流浪の剣客］脇山珠美＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200724.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200724.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200724.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/221/16.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200724.png"
			}
		]
	},
	{
		"name": "岡崎泰葉",
		"kana": "おかざきやすは",
		"type": 2,
		"height": 153,
		"old": 16,
		"weight": 43,
		"birthday": "7月16日",
		"blood": "A",
		"hand": "左",
		"style": {
			"bust": 79,
			"waist": 55,
			"hip": 80
		},
		"imgs": [
			{
				"id": 200153,
				"title": "岡崎泰葉（R）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200153.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200153.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200153.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/222/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200153.png"
			},
			{
				"id": 200154,
				"title": "岡崎泰葉＋（R+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200154.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200154.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200154.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/222/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200154.png"
			},
			{
				"id": 200215,
				"title": "［プラネットスター］岡崎泰葉（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200215.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200215.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200215.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/222/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200215.png"
			},
			{
				"id": 200216,
				"title": "［プラネットスター］岡崎泰葉＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200216.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200216.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200216.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/222/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200216.png"
			},
			{
				"id": 200447,
				"title": "［ワンモアステップ］岡崎泰葉（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200447.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200447.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200447.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/222/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200447.png"
			},
			{
				"id": 200448,
				"title": "［ワンモアステップ］岡崎泰葉＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200448.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200448.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200448.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/222/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200448.png"
			},
			{
				"id": 200509,
				"title": "［爛漫ひな娘］岡崎泰葉（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200509.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200509.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200509.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/222/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200509.png"
			},
			{
				"id": 200510,
				"title": "［爛漫ひな娘］岡崎泰葉＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200510.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200510.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200510.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/222/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200510.png"
			},
			{
				"id": 200691,
				"title": "［トラストテイマー］岡崎泰葉（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200691.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200691.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200691.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/222/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200691.png"
			},
			{
				"id": 200692,
				"title": "［トラストテイマー］岡崎泰葉＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200692.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200692.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200692.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/222/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200692.png"
			},
			{
				"id": 200785,
				"title": "［あの日の私を受け止めて］岡崎泰葉（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200785.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200785.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200785.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/222/11.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200785.png"
			},
			{
				"id": 200786,
				"title": "［あの日の私を受け止めて］岡崎泰葉+（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200786.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200786.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200786.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/222/12.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200786.png"
			}
		]
	},
	{
		"name": "速水奏",
		"kana": "はやみかなで",
		"type": 2,
		"height": 162,
		"old": 17,
		"weight": 43,
		"birthday": "7月1日",
		"blood": "O",
		"hand": "右",
		"style": {
			"bust": 86,
			"waist": 55,
			"hip": 84
		},
		"imgs": [
			{
				"id": 200037,
				"title": "速水奏（R）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200037.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200037.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200037.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/223/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200037.png"
			},
			{
				"id": 200038,
				"title": "速水奏＋（R+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200038.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200038.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200038.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/223/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200038.png"
			},
			{
				"id": 200063,
				"title": "［蒼翼の乙女］速水奏（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200063.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200063.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200063.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/223/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200063.png"
			},
			{
				"id": 200064,
				"title": "［蒼翼の乙女］速水奏＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200064.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200064.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200064.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/223/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200064.png"
			},
			{
				"id": 200137,
				"title": "［エンドレスナイト］速水奏（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200137.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200137.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200137.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/223/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200137.png"
			},
			{
				"id": 200138,
				"title": "［エンドレスナイト］速水奏＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200138.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200138.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200138.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/223/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200138.png"
			},
			{
				"id": 200235,
				"title": "［あいくるしい］速水奏（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200235.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200235.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200235.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/223/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200235.png"
			},
			{
				"id": 200236,
				"title": "［あいくるしい］速水奏＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200236.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200236.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200236.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/223/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200236.png"
			},
			{
				"id": 200377,
				"title": "［エンド・オブ・ザ・ブルー］速水奏（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200377.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200377.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200377.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/223/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200377.png"
			},
			{
				"id": 200378,
				"title": "［エンド・オブ・ザ・ブルー］速水奏＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200378.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200378.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200378.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/223/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200378.png"
			},
			{
				"id": 200459,
				"title": "［ミスティック・ドーン］速水奏（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200459.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200459.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200459.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/223/11.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200459.png"
			},
			{
				"id": 200460,
				"title": "［ミスティック・ドーン］速水奏＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200460.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200460.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200460.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/223/12.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200460.png"
			},
			{
				"id": 200505,
				"title": "［ツインテールの風］速水奏（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200505.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200505.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200505.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/223/13.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200505.png"
			},
			{
				"id": 200506,
				"title": "［ツインテールの風］速水奏＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200506.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200506.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200506.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/223/14.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200506.png"
			},
			{
				"id": 200579,
				"title": "［Pretty Liar］速水奏（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200579.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200579.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200579.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/223/15.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200579.png"
			},
			{
				"id": 200580,
				"title": "［Pretty Liar］速水奏＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200580.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200580.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200580.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/223/16.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200580.png"
			},
			{
				"id": 200645,
				"title": "［夜を脱いで、一小節］速水奏（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200645.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200645.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200645.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/223/17.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200645.png"
			},
			{
				"id": 200646,
				"title": "［夜を脱いで、一小節］速水奏＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200646.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200646.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200646.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/223/18.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200646.png"
			},
			{
				"id": 200761,
				"title": "［Secret Daybreak］速水奏（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200761.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200761.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200761.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/223/19.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200761.png"
			},
			{
				"id": 200762,
				"title": "［Secret Daybreak］速水奏+（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200762.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200762.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200762.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/223/20.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200762.png"
			}
		]
	},
	{
		"name": "大石泉",
		"kana": "おおいしいずみ",
		"type": 2,
		"height": 157,
		"old": 15,
		"weight": 41,
		"birthday": "11月11日",
		"blood": "A",
		"hand": "右",
		"style": {
			"bust": 83,
			"waist": 55,
			"hip": 82
		},
		"imgs": [
			{
				"id": 200145,
				"title": "大石泉（R）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200145.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200145.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200145.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/224/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200145.png"
			},
			{
				"id": 200146,
				"title": "大石泉＋（R+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200146.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200146.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200146.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/224/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200146.png"
			},
			{
				"id": 200237,
				"title": "［ネイビーウェーブ］大石泉（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200237.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200237.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200237.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/224/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200237.png"
			},
			{
				"id": 200238,
				"title": "［ネイビーウェーブ］大石泉＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200238.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200238.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200238.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/224/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200238.png"
			},
			{
				"id": 200495,
				"title": "［ニューウェーブ・ネイビー］大石泉（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200495.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200495.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200495.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/224/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200495.png"
			},
			{
				"id": 200496,
				"title": "［ニューウェーブ・ネイビー］大石泉＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200496.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200496.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200496.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/224/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200496.png"
			},
			{
				"id": 200689,
				"title": "［ビット・パフォーマー］大石泉（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200689.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200689.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200689.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/224/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200689.png"
			},
			{
				"id": 200690,
				"title": "［ビット・パフォーマー］大石泉＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200690.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200690.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200690.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/224/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200690.png"
			},
			{
				"id": 200755,
				"title": "［ニューウェーブ・バースデー］大石泉（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200755.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200755.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200755.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/224/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200755.png"
			},
			{
				"id": 200756,
				"title": "［ニューウェーブ・バースデー］大石泉+（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200756.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200756.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200756.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/224/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200756.png"
			}
		]
	},
	{
		"name": "松尾千鶴",
		"kana": "まつおちづる",
		"type": 2,
		"height": 161,
		"old": 15,
		"weight": 45,
		"birthday": "3月21日",
		"blood": "A",
		"hand": "右",
		"style": {
			"bust": 78,
			"waist": 54,
			"hip": 81
		},
		"imgs": [
			{
				"id": 200285,
				"title": "松尾千鶴（N）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200285.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200285.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200285.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/225/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200285.png"
			},
			{
				"id": 200286,
				"title": "松尾千鶴＋（N+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200286.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200286.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200286.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/225/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200286.png"
			},
			{
				"id": 200393,
				"title": "［乙女の晴れ舞台］松尾千鶴（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200393.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200393.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200393.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/225/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200393.png"
			},
			{
				"id": 200394,
				"title": "［乙女の晴れ舞台］松尾千鶴＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200394.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200394.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200394.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/225/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200394.png"
			},
			{
				"id": 200613,
				"title": "［ポップ・モデル］松尾千鶴（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200613.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200613.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200613.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/225/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200613.png"
			},
			{
				"id": 200614,
				"title": "［ポップ・モデル］松尾千鶴＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200614.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200614.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200614.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/225/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200614.png"
			},
			{
				"id": 200747,
				"title": "［季節の風を感じて］松尾千鶴（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200747.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200747.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200747.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/225/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200747.png"
			},
			{
				"id": 200748,
				"title": "［季節の風を感じて］松尾千鶴＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200748.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200748.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200748.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/225/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200748.png"
			}
		]
	},
	{
		"name": "森久保乃々",
		"kana": "もりくぼのの",
		"type": 2,
		"height": 149,
		"old": 14,
		"weight": 38,
		"birthday": "8月27日",
		"blood": "AB",
		"hand": "左",
		"style": {
			"bust": 73,
			"waist": 55,
			"hip": 76
		},
		"imgs": [
			{
				"id": 200119,
				"title": "森久保乃々（R）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200119.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200119.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200119.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/226/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200119.png"
			},
			{
				"id": 200120,
				"title": "森久保乃々＋（R+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200120.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200120.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200120.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/226/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200120.png"
			},
			{
				"id": 200173,
				"title": "［ショコラバレンタイン］森久保乃々（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200173.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200173.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200173.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/226/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200173.png"
			},
			{
				"id": 200174,
				"title": "［ショコラバレンタイン］森久保乃々＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200174.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200174.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200174.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/226/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200174.png"
			},
			{
				"id": 200283,
				"title": "［ネガティヴ乙女］森久保乃々（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200283.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200283.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200283.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/226/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200283.png"
			},
			{
				"id": 200284,
				"title": "［ネガティヴ乙女］森久保乃々＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200284.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200284.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200284.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/226/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200284.png"
			},
			{
				"id": 200331,
				"title": "［森のものがたり］森久保乃々（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200331.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200331.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200331.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/226/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200331.png"
			},
			{
				"id": 200332,
				"title": "［森のものがたり］森久保乃々＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200332.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200332.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200332.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/226/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200332.png"
			},
			{
				"id": 200361,
				"title": "［Sweet Witches' Night］森久保乃々（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200361.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200361.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200361.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/226/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200361.png"
			},
			{
				"id": 200362,
				"title": "［Sweet Witches' Night］森久保乃々＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200362.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200362.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200362.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/226/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200362.png"
			},
			{
				"id": 200435,
				"title": "［ギフト・フォー・アンサー］森久保乃々（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200435.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200435.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200435.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/226/11.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200435.png"
			},
			{
				"id": 200436,
				"title": "［ギフト・フォー・アンサー］森久保乃々＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200436.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200436.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200436.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/226/12.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200436.png"
			},
			{
				"id": 200539,
				"title": "［エスケープブライド］森久保乃々（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200539.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200539.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200539.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/226/13.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200539.png"
			},
			{
				"id": 200540,
				"title": "［エスケープブライド］森久保乃々＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200540.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200540.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200540.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/226/14.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200540.png"
			},
			{
				"id": 200607,
				"title": "［individuals］森久保乃々（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200607.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200607.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200607.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/226/15.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200607.png"
			},
			{
				"id": 200608,
				"title": "［individuals］森久保乃々＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200608.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200608.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200608.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/226/16.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200608.png"
			},
			{
				"id": 200735,
				"title": "［ステップ＆スキップ］森久保乃々（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200735.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200735.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200735.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/226/17.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200735.png"
			},
			{
				"id": 200736,
				"title": "［ステップ＆スキップ］森久保乃々＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200736.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200736.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200736.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/226/18.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200736.png"
			},
			{
				"id": 200781,
				"title": "［一歩ずつ前へ］森久保乃々（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200781.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200781.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200781.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/226/19.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200781.png"
			},
			{
				"id": 200782,
				"title": "［一歩ずつ前へ］森久保乃々+（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200782.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200782.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200782.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/226/20.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200782.png"
			}
		]
	},
	{
		"name": "アナスタシア",
		"kana": "あなすたしあ",
		"type": 2,
		"height": 165,
		"old": 15,
		"weight": 43,
		"birthday": "9月19日",
		"blood": "O",
		"hand": "両",
		"style": {
			"bust": 80,
			"waist": 54,
			"hip": 80
		},
		"imgs": [
			{
				"id": 200039,
				"title": "アナスタシア（R）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200039.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200039.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200039.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/227/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200039.png"
			},
			{
				"id": 200040,
				"title": "アナスタシア＋（R+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200040.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200040.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200040.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/227/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200040.png"
			},
			{
				"id": 200065,
				"title": "［スターリービーチ］アナスタシア（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200065.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200065.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200065.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/227/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200065.png"
			},
			{
				"id": 200066,
				"title": "［スターリービーチ］アナスタシア＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200066.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200066.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200066.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/227/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200066.png"
			},
			{
				"id": 200117,
				"title": "［クリスタルスノー］アナスタシア（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200117.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200117.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200117.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/227/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200117.png"
			},
			{
				"id": 200118,
				"title": "［クリスタルスノー］アナスタシア＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200118.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200118.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200118.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/227/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200118.png"
			},
			{
				"id": 200175,
				"title": "［オルゴールの小箱］アナスタシア（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200175.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200175.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200175.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/227/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200175.png"
			},
			{
				"id": 200176,
				"title": "［オルゴールの小箱］アナスタシア＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200176.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200176.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200176.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/227/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200176.png"
			},
			{
				"id": 200291,
				"title": "［星巡る物語］アナスタシア（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200291.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200291.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200291.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/227/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200291.png"
			},
			{
				"id": 200292,
				"title": "［星巡る物語］アナスタシア＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200292.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200292.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200292.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/227/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200292.png"
			},
			{
				"id": 200391,
				"title": "［Nothing but You］アナスタシア（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200391.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200391.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200391.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/227/11.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200391.png"
			},
			{
				"id": 200392,
				"title": "［Nothing but You］アナスタシア＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200392.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200392.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200392.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/227/12.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200392.png"
			},
			{
				"id": 200449,
				"title": "［極光のしらべ］アナスタシア（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200449.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200449.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200449.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/227/13.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200449.png"
			},
			{
				"id": 200450,
				"title": "［極光のしらべ］アナスタシア＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200450.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200450.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200450.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/227/14.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200450.png"
			},
			{
				"id": 200527,
				"title": "［桜の風］アナスタシア（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200527.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200527.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200527.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/227/15.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200527.png"
			},
			{
				"id": 200528,
				"title": "［桜の風］アナスタシア＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200528.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200528.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200528.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/227/16.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200528.png"
			},
			{
				"id": 200617,
				"title": "［ウォーミング・ハート］アナスタシア（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200617.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200617.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200617.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/227/17.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200617.png"
			},
			{
				"id": 200618,
				"title": "［ウォーミング・ハート］アナスタシア＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200618.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200618.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200618.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/227/18.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200618.png"
			},
			{
				"id": 200727,
				"title": "［TRUE COLORS］アナスタシア（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200727.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200727.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200727.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/227/19.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200727.png"
			},
			{
				"id": 200728,
				"title": "［TRUE COLORS］アナスタシア＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200728.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200728.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200728.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/227/20.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200728.png"
			},
			{
				"id": 200783,
				"title": "［雪梅の羽衣］アナスタシア（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200783.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200783.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200783.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/227/21.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200783.png"
			},
			{
				"id": 200784,
				"title": "［雪梅の羽衣］アナスタシア+（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200784.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200784.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200784.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/227/22.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200784.png"
			}
		]
	},
	{
		"name": "大和亜季",
		"kana": "やまとあき",
		"type": 2,
		"height": 165,
		"old": 21,
		"weight": 51,
		"birthday": "12月16日",
		"blood": "O",
		"hand": "左",
		"style": {
			"bust": 92,
			"waist": 60,
			"hip": 85
		},
		"imgs": [
			{
				"id": 200125,
				"title": "大和亜季（R）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200125.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200125.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200125.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/228/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200125.png"
			},
			{
				"id": 200126,
				"title": "大和亜季＋（R+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200126.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200126.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200126.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/228/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200126.png"
			},
			{
				"id": 200319,
				"title": "［フォワードチアー］大和亜季（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200319.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200319.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200319.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/228/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200319.png"
			},
			{
				"id": 200320,
				"title": "［フォワードチアー］大和亜季＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200320.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200320.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200320.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/228/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200320.png"
			},
			{
				"id": 200413,
				"title": "［コマンドー・オブ・ステージ］大和亜季（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200413.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200413.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200413.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/228/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200413.png"
			},
			{
				"id": 200414,
				"title": "［コマンドー・オブ・ステージ］大和亜季＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200414.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200414.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200414.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/228/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200414.png"
			},
			{
				"id": 200555,
				"title": "［パーフェクトプレデター］大和亜季（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200555.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200555.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200555.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/228/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200555.png"
			},
			{
				"id": 200556,
				"title": "［パーフェクトプレデター］大和亜季＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200556.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200556.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200556.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/228/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200556.png"
			},
			{
				"id": 200679,
				"title": "［Max Beat］大和亜季（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200679.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200679.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200679.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/228/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200679.png"
			},
			{
				"id": 200680,
				"title": "［Max Beat］大和亜季＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200680.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200680.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200680.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/228/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200680.png"
			},
			{
				"id": 200743,
				"title": "［ハロウィンガンナー］大和亜季（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200743.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200743.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200743.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/228/11.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200743.png"
			},
			{
				"id": 200744,
				"title": "［ハロウィンガンナー］大和亜季＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200744.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200744.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200744.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/228/12.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200744.png"
			}
		]
	},
	{
		"name": "結城晴",
		"kana": "ゆうきはる",
		"type": 2,
		"height": 140,
		"old": 12,
		"weight": 37,
		"birthday": "7月17日",
		"blood": "A",
		"hand": "右",
		"style": {
			"bust": 74,
			"waist": 55,
			"hip": 78
		},
		"imgs": [
			{
				"id": 200141,
				"title": "結城晴（R）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200141.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200141.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200141.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/229/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200141.png"
			},
			{
				"id": 200142,
				"title": "結城晴＋（R+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200142.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200142.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200142.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/229/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200142.png"
			},
			{
				"id": 200189,
				"title": "［疾風のストライカー］結城晴（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200189.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200189.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200189.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/229/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200189.png"
			},
			{
				"id": 200190,
				"title": "［疾風のストライカー］結城晴＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200190.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200190.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200190.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/229/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200190.png"
			},
			{
				"id": 200497,
				"title": "［明日へのフラッグ］結城晴（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200497.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200497.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200497.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/229/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200497.png"
			},
			{
				"id": 200498,
				"title": "［明日へのフラッグ］結城晴＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200498.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200498.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200498.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/229/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200498.png"
			},
			{
				"id": 200523,
				"title": "［プレイ・ウィズ・ミー］結城晴（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200523.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200523.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200523.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/229/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200523.png"
			},
			{
				"id": 200524,
				"title": "［プレイ・ウィズ・ミー］結城晴＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200524.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200524.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200524.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/229/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200524.png"
			},
			{
				"id": 200587,
				"title": "［ドレミファクトリー ! ］結城晴（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200587.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200587.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200587.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/229/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200587.png"
			},
			{
				"id": 200588,
				"title": "［ドレミファクトリー ! ］結城晴＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200588.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200588.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200588.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/229/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200588.png"
			},
			{
				"id": 200627,
				"title": "［スウィート・ミント］結城晴（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200627.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200627.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200627.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/229/11.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200627.png"
			},
			{
				"id": 200628,
				"title": "［スウィート・ミント］結城晴＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200628.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200628.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200628.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/229/12.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200628.png"
			},
			{
				"id": 200687,
				"title": "［青空エール］結城晴（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200687.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200687.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200687.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/229/13.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200687.png"
			},
			{
				"id": 200688,
				"title": "［青空エール］結城晴＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200688.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200688.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200688.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/229/14.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200688.png"
			}
		]
	},
	{
		"name": "二宮飛鳥",
		"kana": "にのみやあすか",
		"type": 2,
		"height": 154,
		"old": 14,
		"weight": 42,
		"birthday": "2月3日",
		"blood": "B",
		"hand": "右",
		"style": {
			"bust": 75,
			"waist": 55,
			"hip": 78
		},
		"imgs": [
			{
				"id": 200093,
				"title": "二宮飛鳥（R）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200093.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200093.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200093.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/230/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200093.png"
			},
			{
				"id": 200094,
				"title": "二宮飛鳥＋（R+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200094.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200094.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200094.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/230/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200094.png"
			},
			{
				"id": 200113,
				"title": "［深淵への招待］二宮飛鳥（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200113.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200113.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200113.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/230/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200113.png"
			},
			{
				"id": 200114,
				"title": "［深淵への招待］二宮飛鳥＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200114.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200114.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200114.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/230/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200114.png"
			},
			{
				"id": 200197,
				"title": "［《偶像》のフラグメント］二宮飛鳥（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200197.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200197.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200197.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/230/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200197.png"
			},
			{
				"id": 200198,
				"title": "［《偶像》のフラグメント］二宮飛鳥＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200198.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200198.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200198.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/230/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200198.png"
			},
			{
				"id": 200251,
				"title": "［咲いてJewel］二宮飛鳥（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200251.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200251.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200251.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/230/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200251.png"
			},
			{
				"id": 200252,
				"title": "［咲いてJewel］二宮飛鳥＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200252.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200252.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200252.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/230/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200252.png"
			},
			{
				"id": 200359,
				"title": "［パレス・オブ・ファンタジア］二宮飛鳥（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200359.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200359.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200359.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/230/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200359.png"
			},
			{
				"id": 200360,
				"title": "［パレス・オブ・ファンタジア］二宮飛鳥＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200360.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200360.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200360.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/230/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200360.png"
			},
			{
				"id": 200433,
				"title": "［双翼の独奏歌］二宮飛鳥（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200433.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200433.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200433.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/230/11.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200433.png"
			},
			{
				"id": 200434,
				"title": "［双翼の独奏歌］二宮飛鳥＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200434.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200434.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200434.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/230/12.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200434.png"
			},
			{
				"id": 200597,
				"title": "［灼熱のリベリオン］二宮飛鳥（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200597.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200597.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200597.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/230/13.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200597.png"
			},
			{
				"id": 200598,
				"title": "［灼熱のリベリオン］二宮飛鳥＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200598.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200598.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200598.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/230/14.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200598.png"
			},
			{
				"id": 200651,
				"title": "［未完成の歴史］二宮飛鳥（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200651.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200651.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200651.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/230/15.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200651.png"
			},
			{
				"id": 200652,
				"title": "［未完成の歴史］二宮飛鳥＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200652.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200652.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200652.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/230/16.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200652.png"
			},
			{
				"id": 200711,
				"title": "［バベル］二宮飛鳥（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200711.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200711.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200711.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/230/17.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200711.png"
			},
			{
				"id": 200712,
				"title": "［バベル］二宮飛鳥＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200712.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200712.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200712.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/230/18.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200712.png"
			},
			{
				"id": 200779,
				"title": "［エクステンド・ワールド］二宮飛鳥（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200779.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200779.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200779.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/230/19.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200779.png"
			},
			{
				"id": 200780,
				"title": "［エクステンド・ワールド］二宮飛鳥+（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200780.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200780.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200780.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/230/20.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200780.png"
			}
		]
	},
	{
		"name": "桐生つかさ",
		"kana": "きりゅうつかさ",
		"type": 2,
		"height": 164,
		"old": 18,
		"weight": 45,
		"birthday": "2月24日",
		"blood": "A",
		"hand": "右",
		"style": {
			"bust": 83,
			"waist": 55,
			"hip": 82
		},
		"imgs": [
			{
				"id": 200279,
				"title": "桐生つかさ（R）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200279.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200279.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200279.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/231/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200279.png"
			},
			{
				"id": 200280,
				"title": "桐生つかさ＋（R+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200280.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200280.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200280.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/231/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200280.png"
			},
			{
				"id": 200341,
				"title": "［ランウェイのカリスマ］桐生つかさ（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200341.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200341.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200341.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/231/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200341.png"
			},
			{
				"id": 200342,
				"title": "［ランウェイのカリスマ］桐生つかさ＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200342.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200342.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200342.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/231/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200342.png"
			},
			{
				"id": 200473,
				"title": "［オーダー・フォー・トップ］桐生つかさ（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200473.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200473.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200473.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/231/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200473.png"
			},
			{
				"id": 200474,
				"title": "［オーダー・フォー・トップ］桐生つかさ＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200474.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200474.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200474.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/231/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200474.png"
			},
			{
				"id": 200567,
				"title": "［とれたてビーチガール］桐生つかさ（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200567.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200567.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200567.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/231/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200567.png"
			},
			{
				"id": 200568,
				"title": "［とれたてビーチガール］桐生つかさ＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200568.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200568.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200568.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/231/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200568.png"
			},
			{
				"id": 200753,
				"title": "［ワンマン・アイドルタイム］桐生つかさ（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200753.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200753.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200753.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/231/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200753.png"
			},
			{
				"id": 200754,
				"title": "［ワンマン・アイドルタイム］桐生つかさ+（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200754.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200754.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200754.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/231/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200754.png"
			}
		]
	},
	{
		"name": "望月聖",
		"kana": "もちづきひじり",
		"type": 2,
		"height": 150,
		"old": 13,
		"weight": 37,
		"birthday": "12月25日",
		"blood": "O",
		"hand": "右",
		"style": {
			"bust": 82,
			"waist": 59,
			"hip": 86
		},
		"imgs": [
			{
				"id": 200219,
				"title": "望月聖（R）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200219.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200219.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200219.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/232/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200219.png"
			},
			{
				"id": 200220,
				"title": "望月聖＋（R+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200220.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200220.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200220.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/232/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200220.png"
			},
			{
				"id": 200477,
				"title": "［聖なる乙女］望月聖（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200477.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200477.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200477.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/232/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200477.png"
			},
			{
				"id": 200478,
				"title": "［聖なる乙女］望月聖＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200478.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200478.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200478.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/232/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200478.png"
			},
			{
				"id": 200595,
				"title": "［純真少女］望月聖（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200595.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200595.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200595.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/232/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200595.png"
			},
			{
				"id": 200596,
				"title": "［純真少女］望月聖＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200596.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200596.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200596.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/232/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200596.png"
			},
			{
				"id": 200777,
				"title": "［聖歌の天使］望月聖（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200777.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200777.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200777.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/232/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200777.png"
			},
			{
				"id": 200778,
				"title": "［聖歌の天使］望月聖+（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200778.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200778.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200778.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/232/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200778.png"
			}
		]
	},
	{
		"name": "鷹富士茄子",
		"kana": "たかふじかこ",
		"type": 2,
		"height": 160,
		"old": 20,
		"weight": 43,
		"birthday": "1月1日",
		"blood": "AB",
		"hand": "右",
		"style": {
			"bust": 88,
			"waist": 57,
			"hip": 88
		},
		"imgs": [
			{
				"id": 200337,
				"title": "鷹富士茄子（N）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200337.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200337.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200337.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/233/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200337.png"
			},
			{
				"id": 200338,
				"title": "鷹富士茄子＋（N+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200338.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200338.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200338.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/233/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200338.png"
			},
			{
				"id": 200347,
				"title": "［幸運の女神］鷹富士茄子（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200347.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200347.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200347.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/233/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200347.png"
			},
			{
				"id": 200348,
				"title": "［幸運の女神］鷹富士茄子＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200348.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200348.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200348.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/233/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200348.png"
			},
			{
				"id": 200481,
				"title": "［福を呼ぶ舞姫］鷹富士茄子（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200481.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200481.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200481.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/233/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200481.png"
			},
			{
				"id": 200482,
				"title": "［福を呼ぶ舞姫］鷹富士茄子＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200482.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200482.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200482.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/233/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200482.png"
			},
			{
				"id": 200589,
				"title": "［巡り会えた彩り］鷹富士茄子（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200589.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200589.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200589.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/233/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200589.png"
			},
			{
				"id": 200590,
				"title": "［巡り会えた彩り］鷹富士茄子＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200590.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200590.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200590.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/233/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200590.png"
			},
			{
				"id": 200611,
				"title": "［君への詩］鷹富士茄子（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200611.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200611.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200611.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/233/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200611.png"
			},
			{
				"id": 200612,
				"title": "［君への詩］鷹富士茄子＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200612.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200612.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200612.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/233/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200612.png"
			},
			{
				"id": 200681,
				"title": "［Max Beat］鷹富士茄子（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200681.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200681.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200681.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/233/11.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200681.png"
			},
			{
				"id": 200682,
				"title": "［Max Beat］鷹富士茄子＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200682.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200682.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200682.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/233/12.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200682.png"
			},
			{
				"id": 200697,
				"title": "［星逢う夜に］鷹富士茄子（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200697.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200697.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200697.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/233/13.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200697.png"
			},
			{
				"id": 200698,
				"title": "［星逢う夜に］鷹富士茄子＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200698.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200698.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200698.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/233/14.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200698.png"
			},
			{
				"id": 200789,
				"title": "［幸せの法則 ～ルール～］鷹富士茄子（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200789.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200789.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200789.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/233/15.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200789.png"
			},
			{
				"id": 200790,
				"title": "［幸せの法則 ～ルール～］鷹富士茄子+（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200790.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200790.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200790.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/233/16.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200790.png"
			}
		]
	},
	{
		"name": "本田未央",
		"kana": "ほんだみお",
		"type": 3,
		"height": 161,
		"old": 15,
		"weight": 46,
		"birthday": "12月1日",
		"blood": "B",
		"hand": "右",
		"style": {
			"bust": 84,
			"waist": 58,
			"hip": 87
		},
		"imgs": [
			{
				"id": 300001,
				"title": "本田未央（R）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300001.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300001.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300001.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/234/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300001.png"
			},
			{
				"id": 300002,
				"title": "本田未央＋（R+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300002.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300002.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300002.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/234/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300002.png"
			},
			{
				"id": 300077,
				"title": "［ステージオブマジック］本田未央（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300077.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300077.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300077.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/234/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300077.png"
			},
			{
				"id": 300078,
				"title": "［ステージオブマジック］本田未央＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300078.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300078.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300078.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/234/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300078.png"
			},
			{
				"id": 300139,
				"title": "［ゴキゲンParty Night］本田未央（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300139.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300139.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300139.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/234/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300139.png"
			},
			{
				"id": 300140,
				"title": "［ゴキゲンParty Night］本田未央＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300140.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300140.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300140.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/234/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300140.png"
			},
			{
				"id": 300235,
				"title": "［ワンダーエンターテイナー］本田未央（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300235.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300235.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300235.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/234/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300235.png"
			},
			{
				"id": 300236,
				"title": "［ワンダーエンターテイナー］本田未央＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300236.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300236.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300236.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/234/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300236.png"
			},
			{
				"id": 300285,
				"title": "［STORY］本田未央（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300285.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300285.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300285.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/234/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300285.png"
			},
			{
				"id": 300286,
				"title": "［STORY］本田未央＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300286.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300286.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300286.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/234/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300286.png"
			},
			{
				"id": 300351,
				"title": "［情熱ファンファンファーレ］本田未央（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300351.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300351.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300351.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/234/11.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300351.png"
			},
			{
				"id": 300352,
				"title": "［情熱ファンファンファーレ］本田未央＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300352.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300352.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300352.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/234/12.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300352.png"
			},
			{
				"id": 300457,
				"title": "［カレイドスノー］本田未央（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300457.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300457.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300457.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/234/13.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300457.png"
			},
			{
				"id": 300458,
				"title": "［カレイドスノー］本田未央＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300458.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300458.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300458.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/234/14.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300458.png"
			},
			{
				"id": 300587,
				"title": "［君への詩］本田未央（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300587.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300587.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300587.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/234/15.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300587.png"
			},
			{
				"id": 300588,
				"title": "［君への詩］本田未央＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300588.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300588.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300588.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/234/16.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300588.png"
			},
			{
				"id": 300611,
				"title": "［ポジティブパッション］本田未央（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300611.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300611.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300611.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/234/17.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300611.png"
			},
			{
				"id": 300612,
				"title": "［ポジティブパッション］本田未央＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300612.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300612.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300612.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/234/18.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300612.png"
			},
			{
				"id": 300687,
				"title": "［Stage Bye Stage］本田未央（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300687.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300687.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300687.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/234/19.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300687.png"
			},
			{
				"id": 300688,
				"title": "［Stage Bye Stage］本田未央＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300688.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300688.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300688.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/234/20.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300688.png"
			},
			{
				"id": 300751,
				"title": "［Sun ! High ! Gold ! ］本田未央（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300751.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300751.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300751.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/234/21.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300751.png"
			},
			{
				"id": 300752,
				"title": "［Sun ! High ! Gold ! ］本田未央+（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300752.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300752.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300752.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/234/22.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300752.png"
			}
		]
	},
	{
		"name": "高森藍子",
		"kana": "たかもりあいこ",
		"type": 3,
		"height": 155,
		"old": 16,
		"weight": 42,
		"birthday": "7月25日",
		"blood": "O",
		"hand": "右",
		"style": {
			"bust": 74,
			"waist": 60,
			"hip": 79
		},
		"imgs": [
			{
				"id": 300003,
				"title": "高森藍子（N）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300003.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300003.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300003.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/235/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300003.png"
			},
			{
				"id": 300004,
				"title": "高森藍子＋（N+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300004.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300004.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300004.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/235/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300004.png"
			},
			{
				"id": 300065,
				"title": "［ゆるふわ乙女］高森藍子（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300065.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300065.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300065.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/235/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300065.png"
			},
			{
				"id": 300066,
				"title": "［ゆるふわ乙女］高森藍子＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300066.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300066.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300066.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/235/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300066.png"
			},
			{
				"id": 300163,
				"title": "［てづくりのしあわせ］高森藍子（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300163.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300163.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300163.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/235/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300163.png"
			},
			{
				"id": 300164,
				"title": "［てづくりのしあわせ］高森藍子＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300164.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300164.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300164.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/235/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300164.png"
			},
			{
				"id": 320225,
				"title": "［生存本能ヴァルキュリア］高森藍子（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/320225.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/320225.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/320225.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/235/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/320225.png"
			},
			{
				"id": 320226,
				"title": "［生存本能ヴァルキュリア］高森藍子＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/320226.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/320226.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/320226.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/235/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/320226.png"
			},
			{
				"id": 300303,
				"title": "［あたたかな居場所］高森藍子（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300303.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300303.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300303.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/235/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300303.png"
			},
			{
				"id": 300304,
				"title": "［あたたかな居場所］高森藍子＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300304.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300304.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300304.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/235/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300304.png"
			},
			{
				"id": 300353,
				"title": "［情熱ファンファンファーレ］高森藍子（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300353.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300353.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300353.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/235/11.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300353.png"
			},
			{
				"id": 300354,
				"title": "［情熱ファンファンファーレ］高森藍子＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300354.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300354.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300354.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/235/12.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300354.png"
			},
			{
				"id": 300435,
				"title": "［深緑の魔女］高森藍子（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300435.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300435.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300435.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/235/13.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300435.png"
			},
			{
				"id": 300436,
				"title": "［深緑の魔女］高森藍子＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300436.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300436.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300436.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/235/14.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300436.png"
			},
			{
				"id": 300553,
				"title": "［笑顔のレセプション］高森藍子（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300553.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300553.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300553.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/235/15.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300553.png"
			},
			{
				"id": 300554,
				"title": "［笑顔のレセプション］高森藍子＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300554.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300554.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300554.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/235/16.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300554.png"
			},
			{
				"id": 300607,
				"title": "［スパイスパラダイス］高森藍子（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300607.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300607.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300607.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/235/17.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300607.png"
			},
			{
				"id": 300608,
				"title": "［スパイスパラダイス］高森藍子＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300608.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300608.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300608.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/235/18.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300608.png"
			}
		]
	},
	{
		"name": "並木芽衣子",
		"kana": "なみきめいこ",
		"type": 3,
		"height": 160,
		"old": 22,
		"weight": 44,
		"birthday": "10月14日",
		"blood": "AB",
		"hand": "右",
		"style": {
			"bust": 80,
			"waist": 57,
			"hip": 82
		},
		"imgs": [
			{
				"id": 300199,
				"title": "並木芽衣子（R）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300199.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300199.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300199.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/236/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300199.png"
			},
			{
				"id": 300200,
				"title": "並木芽衣子＋（R+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300200.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300200.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300200.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/236/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300200.png"
			},
			{
				"id": 300267,
				"title": "［トラベルダンサー］並木芽衣子（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300267.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300267.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300267.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/236/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300267.png"
			},
			{
				"id": 300268,
				"title": "［トラベルダンサー］並木芽衣子＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300268.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300268.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300268.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/236/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300268.png"
			},
			{
				"id": 300449,
				"title": "［秋色のお出かけ］並木芽衣子（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300449.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300449.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300449.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/236/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300449.png"
			},
			{
				"id": 300450,
				"title": "［秋色のお出かけ］並木芽衣子＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300450.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300450.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300450.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/236/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300450.png"
			},
			{
				"id": 300517,
				"title": "［ときめきトラベラー］並木芽衣子（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300517.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300517.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300517.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/236/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300517.png"
			},
			{
				"id": 300518,
				"title": "［ときめきトラベラー］並木芽衣子＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300518.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300518.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300518.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/236/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300518.png"
			},
			{
				"id": 300649,
				"title": "［カントリーロード］並木芽衣子（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300649.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300649.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300649.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/236/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300649.png"
			},
			{
				"id": 300650,
				"title": "［カントリーロード］並木芽衣子＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300650.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300650.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300650.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/236/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300650.png"
			}
		]
	},
	{
		"name": "龍崎薫",
		"kana": "りゅうざきかおる",
		"type": 3,
		"height": 132,
		"old": 9,
		"weight": 32,
		"birthday": "7月20日",
		"blood": "O",
		"hand": "右",
		"style": {
			"bust": 65,
			"waist": 51,
			"hip": 70
		},
		"imgs": [
			{
				"id": 300007,
				"title": "龍崎薫（N）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300007.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300007.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300007.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/237/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300007.png"
			},
			{
				"id": 300008,
				"title": "龍崎薫＋（N+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300008.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300008.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300008.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/237/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300008.png"
			},
			{
				"id": 300087,
				"title": "［サンフラワーイエロー］龍崎薫（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300087.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300087.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300087.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/237/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300087.png"
			},
			{
				"id": 300088,
				"title": "［サンフラワーイエロー］龍崎薫＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300088.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300088.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300088.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/237/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300088.png"
			},
			{
				"id": 300193,
				"title": "［ハイファイ☆デイズ］龍崎薫（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300193.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300193.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300193.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/237/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300193.png"
			},
			{
				"id": 300194,
				"title": "［ハイファイ☆デイズ］龍崎薫＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300194.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300194.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300194.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/237/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300194.png"
			},
			{
				"id": 300321,
				"title": "［ひまわりサニーデイ］龍崎薫（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300321.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300321.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300321.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/237/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300321.png"
			},
			{
				"id": 300322,
				"title": "［ひまわりサニーデイ］龍崎薫＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300322.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300322.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300322.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/237/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300322.png"
			},
			{
				"id": 300505,
				"title": "［Spring Screaming］龍崎薫（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300505.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300505.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300505.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/237/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300505.png"
			},
			{
				"id": 300506,
				"title": "［Spring Screaming］龍崎薫＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300506.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300506.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300506.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/237/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300506.png"
			},
			{
				"id": 300637,
				"title": "［にこにこキッチン］龍崎薫（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300637.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300637.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300637.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/237/11.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300637.png"
			},
			{
				"id": 300638,
				"title": "［にこにこキッチン］龍崎薫＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300638.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300638.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300638.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/237/12.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300638.png"
			}
		]
	},
	{
		"name": "木村夏樹",
		"kana": "きむらなつき",
		"type": 3,
		"height": 159,
		"old": 18,
		"weight": 41,
		"birthday": "8月19日",
		"blood": "AB",
		"hand": "左",
		"style": {
			"bust": 82,
			"waist": 57,
			"hip": 83
		},
		"imgs": [
			{
				"id": 300009,
				"title": "木村夏樹（N）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300009.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300009.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300009.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/238/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300009.png"
			},
			{
				"id": 300010,
				"title": "木村夏樹＋（N+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300010.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300010.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300010.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/238/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300010.png"
			},
			{
				"id": 300085,
				"title": "［ロッキングラヴァー］木村夏樹（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300085.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300085.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300085.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/238/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300085.png"
			},
			{
				"id": 300086,
				"title": "［ロッキングラヴァー］木村夏樹＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300086.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300086.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300086.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/238/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300086.png"
			},
			{
				"id": 300205,
				"title": "［エモーショナルビート］木村夏樹（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300205.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300205.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300205.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/238/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300205.png"
			},
			{
				"id": 300206,
				"title": "［エモーショナルビート］木村夏樹＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300206.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300206.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300206.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/238/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300206.png"
			},
			{
				"id": 300295,
				"title": "［Jet to the Future］木村夏樹（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300295.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300295.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300295.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/238/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300295.png"
			},
			{
				"id": 300296,
				"title": "［Jet to the Future］木村夏樹＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300296.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300296.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300296.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/238/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300296.png"
			},
			{
				"id": 300397,
				"title": "［FEEL SO FREE］木村夏樹（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300397.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300397.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300397.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/238/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300397.png"
			},
			{
				"id": 300398,
				"title": "［FEEL SO FREE］木村夏樹＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300398.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300398.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300398.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/238/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300398.png"
			},
			{
				"id": 300531,
				"title": "［華夜紅炎］木村夏樹（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300531.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300531.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300531.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/238/11.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300531.png"
			},
			{
				"id": 300532,
				"title": "［華夜紅炎］木村夏樹＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300532.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300532.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300532.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/238/12.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300532.png"
			},
			{
				"id": 300551,
				"title": "［ガールズインザフロンティア］木村夏樹（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300551.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300551.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300551.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/238/13.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300551.png"
			},
			{
				"id": 300552,
				"title": "［ガールズインザフロンティア］木村夏樹＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300552.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300552.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300552.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/238/14.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300552.png"
			},
			{
				"id": 300659,
				"title": "［ロッキングメイド］木村夏樹（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300659.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300659.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300659.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/238/15.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300659.png"
			},
			{
				"id": 300660,
				"title": "［ロッキングメイド］木村夏樹＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300660.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300660.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300660.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/238/16.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300660.png"
			},
			{
				"id": 300731,
				"title": "［空想探査計画］木村夏樹（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300731.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300731.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300731.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/238/17.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300731.png"
			},
			{
				"id": 300732,
				"title": "［空想探査計画］木村夏樹+（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300732.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300732.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300732.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/238/18.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300732.png"
			}
		]
	},
	{
		"name": "松山久美子",
		"kana": "まつやまくみこ",
		"type": 3,
		"height": 161,
		"old": 21,
		"weight": 44,
		"birthday": "1月21日",
		"blood": "A",
		"hand": "右",
		"style": {
			"bust": 81,
			"waist": 56,
			"hip": 81
		},
		"imgs": [
			{
				"id": 300011,
				"title": "松山久美子（N）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300011.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300011.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300011.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/239/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300011.png"
			},
			{
				"id": 300012,
				"title": "松山久美子＋（N+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300012.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300012.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300012.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/239/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300012.png"
			},
			{
				"id": 300137,
				"title": "［南国の舞姫］松山久美子（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300137.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300137.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300137.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/239/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300137.png"
			},
			{
				"id": 300138,
				"title": "［南国の舞姫］松山久美子＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300138.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300138.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300138.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/239/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300138.png"
			},
			{
				"id": 300207,
				"title": "［アレグロ気分］松山久美子（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300207.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300207.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300207.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/239/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300207.png"
			},
			{
				"id": 300208,
				"title": "［アレグロ気分］松山久美子＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300208.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300208.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300208.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/239/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300208.png"
			},
			{
				"id": 300561,
				"title": "［フライハイ ! ］松山久美子（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300561.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300561.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300561.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/239/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300561.png"
			},
			{
				"id": 300562,
				"title": "［フライハイ ! ］松山久美子＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300562.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300562.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300562.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/239/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300562.png"
			},
			{
				"id": 300623,
				"title": "［舞台上のエレガンテ］松山久美子（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300623.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300623.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300623.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/239/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300623.png"
			},
			{
				"id": 300624,
				"title": "［舞台上のエレガンテ］松山久美子＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300624.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300624.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300624.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/239/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300624.png"
			},
			{
				"id": 300741,
				"title": "［芳しき青藍］松山久美子（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300741.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300741.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300741.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/239/11.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300741.png"
			},
			{
				"id": 300742,
				"title": "［芳しき青藍］松山久美子+（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300742.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300742.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300742.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/239/12.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300742.png"
			}
		]
	},
	{
		"name": "斉藤洋子",
		"kana": "さいとうようこ",
		"type": 3,
		"height": 157,
		"old": 20,
		"weight": 46,
		"birthday": "12月29日",
		"blood": "O",
		"hand": "右",
		"style": {
			"bust": 85,
			"waist": 57,
			"hip": 82
		},
		"imgs": [
			{
				"id": 320223,
				"title": "斉藤洋子（N）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/320223.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/320223.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/320223.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/240/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/320223.png"
			},
			{
				"id": 320224,
				"title": "斉藤洋子＋（N+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/320224.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/320224.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/320224.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/240/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/320224.png"
			},
			{
				"id": 300381,
				"title": "［アクティブビューティー］斉藤洋子（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300381.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300381.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300381.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/240/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300381.png"
			},
			{
				"id": 300382,
				"title": "［アクティブビューティー］斉藤洋子＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300382.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300382.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300382.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/240/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300382.png"
			},
			{
				"id": 300545,
				"title": "［ロワイヤルサマー］斉藤洋子（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300545.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300545.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300545.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/240/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300545.png"
			},
			{
				"id": 300546,
				"title": "［ロワイヤルサマー］斉藤洋子＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300546.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300546.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300546.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/240/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300546.png"
			},
			{
				"id": 300691,
				"title": "［シンクロビューティー］斉藤洋子（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300691.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300691.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300691.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/240/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300691.png"
			},
			{
				"id": 300692,
				"title": "［シンクロビューティー］斉藤洋子＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300692.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300692.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300692.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/240/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300692.png"
			}
		]
	},
	{
		"name": "沢田麻理菜",
		"kana": "さわだまりな",
		"type": 3,
		"height": 166,
		"old": 26,
		"weight": 47,
		"birthday": "5月6日",
		"blood": "B",
		"hand": "右",
		"style": {
			"bust": 87,
			"waist": 57,
			"hip": 87
		},
		"imgs": [
			{
				"id": 300271,
				"title": "沢田麻理菜（N）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300271.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300271.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300271.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/241/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300271.png"
			},
			{
				"id": 300272,
				"title": "沢田麻理菜＋（N+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300272.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300272.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300272.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/241/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300272.png"
			},
			{
				"id": 300379,
				"title": "［セクシーサーファー］沢田麻理菜（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300379.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300379.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300379.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/241/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300379.png"
			},
			{
				"id": 300380,
				"title": "［セクシーサーファー］沢田麻理菜＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300380.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300380.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300380.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/241/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300380.png"
			},
			{
				"id": 300565,
				"title": "［グルービー・ロワイヤル］沢田麻理菜（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300565.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300565.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300565.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/241/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300565.png"
			},
			{
				"id": 300566,
				"title": "［グルービー・ロワイヤル］沢田麻理菜＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300566.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300566.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300566.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/241/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300566.png"
			},
			{
				"id": 300709,
				"title": "［トップ・オブ・ウェーブ］沢田麻理菜（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300709.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300709.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300709.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/241/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300709.png"
			},
			{
				"id": 300710,
				"title": "［トップ・オブ・ウェーブ］沢田麻理菜＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300710.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300710.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300710.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/241/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300710.png"
			}
		]
	},
	{
		"name": "矢口美羽",
		"kana": "やぐちみう",
		"type": 3,
		"height": 150,
		"old": 14,
		"weight": 41,
		"birthday": "7月10日",
		"blood": "B",
		"hand": "右",
		"style": {
			"bust": 81,
			"waist": 56,
			"hip": 80
		},
		"imgs": [
			{
				"id": 300103,
				"title": "矢口美羽（N）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300103.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300103.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300103.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/242/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300103.png"
			},
			{
				"id": 300104,
				"title": "矢口美羽＋（N+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300104.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300104.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300104.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/242/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300104.png"
			},
			{
				"id": 300131,
				"title": "［悩めるお年頃］矢口美羽（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300131.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300131.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300131.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/242/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300131.png"
			},
			{
				"id": 300132,
				"title": "［悩めるお年頃］矢口美羽＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300132.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300132.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300132.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/242/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300132.png"
			},
			{
				"id": 300507,
				"title": "［ふわふわファクトリー］矢口美羽（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300507.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300507.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300507.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/242/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300507.png"
			},
			{
				"id": 300508,
				"title": "［ふわふわファクトリー］矢口美羽＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300508.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300508.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300508.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/242/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300508.png"
			},
			{
				"id": 300635,
				"title": "［天魔降臨］矢口美羽（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300635.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300635.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300635.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/242/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300635.png"
			},
			{
				"id": 300636,
				"title": "［天魔降臨］矢口美羽＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300636.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300636.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300636.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/242/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300636.png"
			},
			{
				"id": 300745,
				"title": "［ビーマイウェイ］矢口美羽（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300745.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300745.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300745.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/242/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300745.png"
			},
			{
				"id": 300746,
				"title": "［ビーマイウェイ］矢口美羽+（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300746.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300746.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300746.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/242/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300746.png"
			}
		]
	},
	{
		"name": "赤城みりあ",
		"kana": "あかぎみりあ",
		"type": 3,
		"height": 140,
		"old": 11,
		"weight": 36,
		"birthday": "4月14日",
		"blood": "AB",
		"hand": "左",
		"style": {
			"bust": 75,
			"waist": 55,
			"hip": 78
		},
		"imgs": [
			{
				"id": 300013,
				"title": "赤城みりあ（N）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300013.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300013.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300013.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/243/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300013.png"
			},
			{
				"id": 300014,
				"title": "赤城みりあ＋（N+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300014.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300014.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300014.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/243/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300014.png"
			},
			{
				"id": 300053,
				"title": "［しっぽもふもふ］赤城みりあ（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300053.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300053.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300053.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/243/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300053.png"
			},
			{
				"id": 300054,
				"title": "［しっぽもふもふ］赤城みりあ＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300054.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300054.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300054.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/243/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300054.png"
			},
			{
				"id": 300151,
				"title": "［ハッピーホイップ］赤城みりあ（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300151.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300151.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300151.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/243/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300151.png"
			},
			{
				"id": 300152,
				"title": "［ハッピーホイップ］赤城みりあ＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300152.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300152.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300152.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/243/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300152.png"
			},
			{
				"id": 300327,
				"title": "［メイクミー・キスユー］赤城みりあ（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300327.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300327.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300327.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/243/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300327.png"
			},
			{
				"id": 300328,
				"title": "［メイクミー・キスユー］赤城みりあ＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300328.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300328.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300328.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/243/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300328.png"
			},
			{
				"id": 300369,
				"title": "［shabon song］赤城みりあ（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300369.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300369.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300369.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/243/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300369.png"
			},
			{
				"id": 300370,
				"title": "［shabon song］赤城みりあ＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300370.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300370.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300370.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/243/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300370.png"
			},
			{
				"id": 300491,
				"title": "［ポッピン・ハイ☆］赤城みりあ（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300491.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300491.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300491.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/243/11.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300491.png"
			},
			{
				"id": 300492,
				"title": "［ポッピン・ハイ☆］赤城みりあ＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300492.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300492.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300492.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/243/12.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300492.png"
			},
			{
				"id": 300599,
				"title": "［一夜の魔法］赤城みりあ（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300599.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300599.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300599.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/243/13.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300599.png"
			},
			{
				"id": 300600,
				"title": "［一夜の魔法］赤城みりあ＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300600.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300600.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300600.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/243/14.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300600.png"
			},
			{
				"id": 300673,
				"title": "［青空エール］赤城みりあ（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300673.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300673.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300673.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/243/15.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300673.png"
			},
			{
				"id": 300674,
				"title": "［青空エール］赤城みりあ＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300674.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300674.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300674.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/243/16.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300674.png"
			}
		]
	},
	{
		"name": "愛野渚",
		"kana": "あいのなぎさ",
		"type": 3,
		"height": 163,
		"old": 18,
		"weight": 47,
		"birthday": "8月1日",
		"blood": "A",
		"hand": "右",
		"style": {
			"bust": 84,
			"waist": 58,
			"hip": 85
		},
		"imgs": [
			{
				"id": 300237,
				"title": "愛野渚（N）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300237.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300237.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300237.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/244/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300237.png"
			},
			{
				"id": 300238,
				"title": "愛野渚＋（N+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300238.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300238.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300238.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/244/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300238.png"
			},
			{
				"id": 300365,
				"title": "［センター・キャプテン］愛野渚（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300365.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300365.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300365.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/244/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300365.png"
			},
			{
				"id": 300366,
				"title": "［センター・キャプテン］愛野渚＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300366.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300366.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300366.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/244/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300366.png"
			},
			{
				"id": 300539,
				"title": "［シューティングチアー］愛野渚（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300539.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300539.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300539.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/244/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300539.png"
			},
			{
				"id": 300540,
				"title": "［シューティングチアー］愛野渚＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300540.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300540.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300540.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/244/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300540.png"
			},
			{
				"id": 300661,
				"title": "［ドリームアドベント］愛野渚（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300661.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300661.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300661.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/244/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300661.png"
			},
			{
				"id": 300662,
				"title": "［ドリームアドベント］愛野渚＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300662.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300662.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300662.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/244/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300662.png"
			}
		]
	},
	{
		"name": "真鍋いつき",
		"kana": "まなべいつき",
		"type": 3,
		"height": 165,
		"old": 22,
		"weight": 46,
		"birthday": "12月29日",
		"blood": "O",
		"hand": "右",
		"style": {
			"bust": 85,
			"waist": 57,
			"hip": 83
		},
		"imgs": [
			{
				"id": 300319,
				"title": "真鍋いつき（N）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300319.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300319.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300319.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/245/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300319.png"
			},
			{
				"id": 300320,
				"title": "真鍋いつき＋（N+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300320.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300320.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300320.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/245/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300320.png"
			},
			{
				"id": 300439,
				"title": "［ハッピープレジャー］真鍋いつき（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300439.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300439.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300439.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/245/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300439.png"
			},
			{
				"id": 300440,
				"title": "［ハッピープレジャー］真鍋いつき＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300440.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300440.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300440.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/245/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300440.png"
			},
			{
				"id": 300575,
				"title": "［拳舞酔客］真鍋いつき（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300575.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300575.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300575.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/245/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300575.png"
			},
			{
				"id": 300576,
				"title": "［拳舞酔客］真鍋いつき＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300576.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300576.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300576.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/245/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300576.png"
			},
			{
				"id": 300647,
				"title": "［無限大オーバーフロー］真鍋いつき（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300647.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300647.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300647.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/245/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300647.png"
			},
			{
				"id": 300648,
				"title": "［無限大オーバーフロー］真鍋いつき＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300648.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300648.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300648.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/245/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300648.png"
			},
			{
				"id": 300771,
				"title": "［ふるき待ち人］真鍋いつき（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300771.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300771.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300771.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/245/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300771.png"
			},
			{
				"id": 300772,
				"title": "［ふるき待ち人］真鍋いつき+（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300772.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300772.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300772.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/245/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300772.png"
			}
		]
	},
	{
		"name": "大槻唯",
		"kana": "おおつきゆい",
		"type": 3,
		"height": 155,
		"old": 17,
		"weight": 42,
		"birthday": "5月7日",
		"blood": "B",
		"hand": "左",
		"style": {
			"bust": 84,
			"waist": 56,
			"hip": 83
		},
		"imgs": [
			{
				"id": 300015,
				"title": "大槻唯（N）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300015.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300015.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300015.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/246/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300015.png"
			},
			{
				"id": 300016,
				"title": "大槻唯＋（N+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300016.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300016.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300016.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/246/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300016.png"
			},
			{
				"id": 300135,
				"title": "［Snow Wings］大槻唯（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300135.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300135.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300135.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/246/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300135.png"
			},
			{
				"id": 300136,
				"title": "［Snow Wings］大槻唯＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300136.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300136.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300136.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/246/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300136.png"
			},
			{
				"id": 300233,
				"title": "［サマータイム☆ハイ］大槻唯（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300233.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300233.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300233.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/246/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300233.png"
			},
			{
				"id": 300234,
				"title": "［サマータイム☆ハイ］大槻唯＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300234.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300234.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300234.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/246/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300234.png"
			},
			{
				"id": 300335,
				"title": "［ソル・パライソ］大槻唯（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300335.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300335.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300335.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/246/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300335.png"
			},
			{
				"id": 300336,
				"title": "［ソル・パライソ］大槻唯＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300336.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300336.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300336.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/246/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300336.png"
			},
			{
				"id": 300453,
				"title": "［ロリポップ・ハニー］大槻唯（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300453.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300453.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300453.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/246/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300453.png"
			},
			{
				"id": 300454,
				"title": "［ロリポップ・ハニー］大槻唯＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300454.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300454.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300454.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/246/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300454.png"
			},
			{
				"id": 300573,
				"title": "［Starry-Go-Round］大槻唯（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300573.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300573.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300573.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/246/11.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300573.png"
			},
			{
				"id": 300574,
				"title": "［Starry-Go-Round］大槻唯＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300574.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300574.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300574.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/246/12.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300574.png"
			},
			{
				"id": 300629,
				"title": "［ラブ・ワンダー］大槻唯（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300629.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300629.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300629.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/246/13.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300629.png"
			},
			{
				"id": 300630,
				"title": "［ラブ・ワンダー］大槻唯＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300630.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300630.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300630.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/246/14.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300630.png"
			},
			{
				"id": 300725,
				"title": "［Gossip Club］大槻唯（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300725.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300725.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300725.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/246/15.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300725.png"
			},
			{
				"id": 300726,
				"title": "［Gossip Club］大槻唯＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300726.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300726.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300726.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/246/16.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300726.png"
			}
		]
	},
	{
		"name": "姫川友紀",
		"kana": "ひめかわゆき",
		"type": 3,
		"height": 161,
		"old": 20,
		"weight": 44,
		"birthday": "9月14日",
		"blood": "A",
		"hand": "右",
		"style": {
			"bust": 80,
			"waist": 57,
			"hip": 80
		},
		"imgs": [
			{
				"id": 300017,
				"title": "姫川友紀（N）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300017.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300017.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300017.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/247/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300017.png"
			},
			{
				"id": 300018,
				"title": "姫川友紀＋（N+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300018.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300018.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300018.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/247/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300018.png"
			},
			{
				"id": 300061,
				"title": "［全力チアガール］姫川友紀（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300061.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300061.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300061.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/247/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300061.png"
			},
			{
				"id": 300062,
				"title": "［全力チアガール］姫川友紀＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300062.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300062.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300062.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/247/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300062.png"
			},
			{
				"id": 300147,
				"title": "［フルスイング☆エール］姫川友紀（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300147.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300147.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300147.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/247/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300147.png"
			},
			{
				"id": 300148,
				"title": "［フルスイング☆エール］姫川友紀＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300148.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300148.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300148.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/247/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300148.png"
			},
			{
				"id": 300247,
				"title": "［きみにいっぱい☆］姫川友紀（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300247.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300247.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300247.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/247/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300247.png"
			},
			{
				"id": 300248,
				"title": "［きみにいっぱい☆］姫川友紀＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300248.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300248.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300248.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/247/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300248.png"
			},
			{
				"id": 300357,
				"title": "［1番センター］姫川友紀（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300357.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300357.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300357.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/247/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300357.png"
			},
			{
				"id": 300358,
				"title": "［1番センター］姫川友紀＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300358.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300358.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300358.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/247/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300358.png"
			},
			{
				"id": 300377,
				"title": "［レッツゴー☆パレード］姫川友紀（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300377.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300377.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300377.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/247/11.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300377.png"
			},
			{
				"id": 300378,
				"title": "［レッツゴー☆パレード］姫川友紀＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300378.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300378.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300378.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/247/12.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300378.png"
			},
			{
				"id": 300461,
				"title": "［冬空プレシャス］姫川友紀（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300461.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300461.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300461.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/247/13.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300461.png"
			},
			{
				"id": 300462,
				"title": "［冬空プレシャス］姫川友紀＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300462.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300462.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300462.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/247/14.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300462.png"
			},
			{
				"id": 300699,
				"title": "［全力全開 ! サマーサプライズ］姫川友紀（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300699.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300699.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300699.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/247/15.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300699.png"
			},
			{
				"id": 300700,
				"title": "［全力全開 ! サマーサプライズ］姫川友紀＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300700.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300700.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300700.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/247/16.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300700.png"
			}
		]
	},
	{
		"name": "喜多見柚",
		"kana": "きたみゆず",
		"type": 3,
		"height": 156,
		"old": 15,
		"weight": 43,
		"birthday": "12月2日",
		"blood": "B",
		"hand": "左",
		"style": {
			"bust": 82,
			"waist": 57,
			"hip": 82
		},
		"imgs": [
			{
				"id": 300127,
				"title": "喜多見柚（N）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300127.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300127.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300127.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/249/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300127.png"
			},
			{
				"id": 300128,
				"title": "喜多見柚＋（N+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300128.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300128.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300128.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/249/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300128.png"
			},
			{
				"id": 300171,
				"title": "［フード☆メイド］喜多見柚（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300171.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300171.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300171.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/249/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300171.png"
			},
			{
				"id": 300172,
				"title": "［フード☆メイド］喜多見柚＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300172.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300172.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300172.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/249/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300172.png"
			},
			{
				"id": 300349,
				"title": "［ハイテンションスマッシュ］喜多見柚（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300349.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300349.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300349.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/249/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300349.png"
			},
			{
				"id": 300350,
				"title": "［ハイテンションスマッシュ］喜多見柚＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300350.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300350.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300350.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/249/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300350.png"
			},
			{
				"id": 300479,
				"title": "［ドキワク ! ユズレシピ］喜多見柚（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300479.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300479.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300479.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/249/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300479.png"
			},
			{
				"id": 300480,
				"title": "［ドキワク ! ユズレシピ］喜多見柚＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300480.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300480.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300480.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/249/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300480.png"
			},
			{
				"id": 300503,
				"title": "［Spring Screaming］喜多見柚（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300503.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300503.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300503.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/249/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300503.png"
			},
			{
				"id": 300504,
				"title": "［Spring Screaming］喜多見柚＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300504.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300504.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300504.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/249/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300504.png"
			},
			{
				"id": 300677,
				"title": "［TAKAMARI☆CLIMAXXX!!!!!］喜多見柚（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300677.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300677.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300677.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/249/11.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300677.png"
			},
			{
				"id": 300678,
				"title": "［TAKAMARI☆CLIMAXXX!!!!!］喜多見柚＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300678.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300678.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300678.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/249/12.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300678.png"
			},
			{
				"id": 300747,
				"title": "［フリータイム☆クリスマス］喜多見柚（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300747.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300747.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300747.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/249/13.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300747.png"
			},
			{
				"id": 300748,
				"title": "［フリータイム☆クリスマス］喜多見柚+（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300748.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300748.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300748.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/249/14.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300748.png"
			}
		]
	},
	{
		"name": "上田鈴帆",
		"kana": "うえだすずほ",
		"type": 3,
		"height": 156,
		"old": 14,
		"weight": 42,
		"birthday": "10月26日",
		"blood": "O",
		"hand": "右",
		"style": {
			"bust": 76,
			"waist": 55,
			"hip": 79
		},
		"imgs": [
			{
				"id": 300195,
				"title": "上田鈴帆（N）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300195.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300195.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300195.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/250/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300195.png"
			},
			{
				"id": 300196,
				"title": "上田鈴帆＋（N+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300196.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300196.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300196.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/250/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300196.png"
			},
			{
				"id": 300313,
				"title": "［みんなの太陽］上田鈴帆（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300313.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300313.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300313.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/250/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300313.png"
			},
			{
				"id": 300314,
				"title": "［みんなの太陽］上田鈴帆＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300314.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300314.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300314.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/250/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300314.png"
			},
			{
				"id": 300527,
				"title": "［笑うたい樹］上田鈴帆（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300527.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300527.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300527.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/250/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300527.png"
			},
			{
				"id": 300528,
				"title": "［笑うたい樹］上田鈴帆＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300528.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300528.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300528.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/250/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300528.png"
			}
		]
	},
	{
		"name": "海老原菜帆",
		"kana": "えびはらなほ",
		"type": 3,
		"height": 162,
		"old": 17,
		"weight": 58,
		"birthday": "8月3日",
		"blood": "O",
		"hand": "右",
		"style": {
			"bust": 92,
			"waist": 65,
			"hip": 93
		},
		"imgs": [
			{
				"id": 300297,
				"title": "海老原菜帆（R）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300297.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300297.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300297.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/251/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300297.png"
			},
			{
				"id": 300298,
				"title": "海老原菜帆＋（R+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300298.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300298.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300298.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/251/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300298.png"
			},
			{
				"id": 300405,
				"title": "［プニョフワ乙女］海老原菜帆（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300405.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300405.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300405.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/251/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300405.png"
			},
			{
				"id": 300406,
				"title": "［プニョフワ乙女］海老原菜帆＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300406.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300406.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300406.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/251/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300406.png"
			},
			{
				"id": 300585,
				"title": "［ぷにむにフィーリング］海老原菜帆（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300585.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300585.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300585.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/251/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300585.png"
			},
			{
				"id": 300586,
				"title": "［ぷにむにフィーリング］海老原菜帆＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300586.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300586.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300586.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/251/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300586.png"
			},
			{
				"id": 300703,
				"title": "［ぷにっとチアー］海老原菜帆（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300703.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300703.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300703.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/251/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300703.png"
			},
			{
				"id": 300704,
				"title": "［ぷにっとチアー］海老原菜帆＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300704.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300704.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300704.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/251/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300704.png"
			}
		]
	},
	{
		"name": "及川雫",
		"kana": "おいかわしずく",
		"type": 3,
		"height": 170,
		"old": 16,
		"weight": 56,
		"birthday": "6月3日",
		"blood": "O",
		"hand": "両",
		"style": {
			"bust": 105,
			"waist": 64,
			"hip": 92
		},
		"imgs": [
			{
				"id": 300071,
				"title": "及川雫（N）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300071.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300071.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300071.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/253/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300071.png"
			},
			{
				"id": 300072,
				"title": "及川雫＋（N+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300072.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300072.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300072.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/253/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300072.png"
			},
			{
				"id": 300101,
				"title": "［癒しの満月］及川雫（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300101.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300101.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300101.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/253/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300101.png"
			},
			{
				"id": 300102,
				"title": "［癒しの満月］及川雫＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300102.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300102.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300102.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/253/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300102.png"
			},
			{
				"id": 300225,
				"title": "［はつらつハーヴェスト］及川雫（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300225.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300225.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300225.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/253/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300225.png"
			},
			{
				"id": 300226,
				"title": "［はつらつハーヴェスト］及川雫＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300226.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300226.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300226.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/253/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300226.png"
			},
			{
				"id": 300385,
				"title": "［モーレツ★世直しギルティ ! ］及川雫（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300385.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300385.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300385.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/253/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300385.png"
			},
			{
				"id": 300386,
				"title": "［モーレツ★世直しギルティ ! ］及川雫＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300386.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300386.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300386.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/253/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300386.png"
			},
			{
				"id": 300403,
				"title": "［ラブ・モゥ・スイート］及川雫（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300403.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300403.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300403.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/253/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300403.png"
			},
			{
				"id": 300404,
				"title": "［ラブ・モゥ・スイート］及川雫＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300404.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300404.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300404.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/253/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300404.png"
			},
			{
				"id": 300613,
				"title": "［たっぷりクッキング］及川雫（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300613.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300613.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300613.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/253/11.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300613.png"
			},
			{
				"id": 300614,
				"title": "［たっぷりクッキング］及川雫＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300614.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300614.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300614.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/253/12.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300614.png"
			},
			{
				"id": 300737,
				"title": "［ミラーボール・ラブ］及川雫（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300737.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300737.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300737.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/253/13.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300737.png"
			},
			{
				"id": 300738,
				"title": "［ミラーボール・ラブ］及川雫+（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300738.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300738.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300738.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/253/14.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300738.png"
			}
		]
	},
	{
		"name": "小関麗奈",
		"kana": "こせきれいな",
		"type": 3,
		"height": 148,
		"old": 13,
		"weight": 41,
		"birthday": "3月5日",
		"blood": "B",
		"hand": "右",
		"style": {
			"bust": 75,
			"waist": 50,
			"hip": 77
		},
		"imgs": [
			{
				"id": 300177,
				"title": "小関麗奈（R）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300177.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300177.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300177.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/254/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300177.png"
			},
			{
				"id": 300178,
				"title": "小関麗奈＋（R+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300178.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300178.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300178.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/254/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300178.png"
			},
			{
				"id": 300239,
				"title": "［スクールデビル］小関麗奈（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300239.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300239.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300239.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/254/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300239.png"
			},
			{
				"id": 300240,
				"title": "［スクールデビル］小関麗奈＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300240.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300240.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300240.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/254/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300240.png"
			},
			{
				"id": 300451,
				"title": "［マジカルガール・フレイム］小関麗奈（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300451.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300451.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300451.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/254/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300451.png"
			},
			{
				"id": 300452,
				"title": "［マジカルガール・フレイム］小関麗奈＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300452.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300452.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300452.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/254/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300452.png"
			},
			{
				"id": 300497,
				"title": "［バーン・アンド・ドーン ! ! ］小関麗奈（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300497.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300497.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300497.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/254/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300497.png"
			},
			{
				"id": 300498,
				"title": "［バーン・アンド・ドーン ! ! ］小関麗奈＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300498.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300498.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300498.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/254/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300498.png"
			},
			{
				"id": 300621,
				"title": "［マーチング☆ラウド］小関麗奈（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300621.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300621.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300621.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/254/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300621.png"
			},
			{
				"id": 300622,
				"title": "［マーチング☆ラウド］小関麗奈＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300622.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300622.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300622.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/254/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300622.png"
			}
		]
	},
	{
		"name": "衛藤美紗希",
		"kana": "えとうみさき",
		"type": 3,
		"height": 160,
		"old": 22,
		"weight": 45,
		"birthday": "3月18日",
		"blood": "O",
		"hand": "左",
		"style": {
			"bust": 84,
			"waist": 56,
			"hip": 80
		},
		"imgs": [
			{
				"id": 300257,
				"title": "衛藤美紗希（R）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300257.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300257.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300257.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/255/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300257.png"
			},
			{
				"id": 300258,
				"title": "衛藤美紗希＋（R+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300258.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300258.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300258.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/255/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300258.png"
			},
			{
				"id": 300371,
				"title": "［あたしの磨き方］衛藤美紗希（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300371.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300371.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300371.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/255/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300371.png"
			},
			{
				"id": 300372,
				"title": "［あたしの磨き方］衛藤美紗希＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300372.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300372.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300372.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/255/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300372.png"
			},
			{
				"id": 300481,
				"title": "［ビターバレンタイン］衛藤美紗希（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300481.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300481.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300481.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/255/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300481.png"
			},
			{
				"id": 300482,
				"title": "［ビターバレンタイン］衛藤美紗希＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300482.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300482.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300482.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/255/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300482.png"
			},
			{
				"id": 300631,
				"title": "［華道の大和撫子］衛藤美紗希（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300631.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300631.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300631.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/255/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300631.png"
			},
			{
				"id": 300632,
				"title": "［華道の大和撫子］衛藤美紗希＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300632.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300632.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300632.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/255/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300632.png"
			},
			{
				"id": 300729,
				"title": "［ガールズアドバンス］衛藤美紗希（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300729.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300729.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300729.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/255/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300729.png"
			},
			{
				"id": 300730,
				"title": "［ガールズアドバンス］衛藤美紗希+（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300730.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300730.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300730.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/255/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300730.png"
			}
		]
	},
	{
		"name": "星輝子",
		"kana": "ほししょうこ",
		"type": 3,
		"height": 142,
		"old": 15,
		"weight": 35,
		"birthday": "6月6日",
		"blood": "B",
		"hand": "左",
		"style": {
			"bust": 73,
			"waist": 53,
			"hip": 75
		},
		"imgs": [
			{
				"id": 300069,
				"title": "星輝子（N）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300069.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300069.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300069.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/256/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300069.png"
			},
			{
				"id": 300070,
				"title": "星輝子＋（N+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300070.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300070.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300070.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/256/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300070.png"
			},
			{
				"id": 300091,
				"title": "［絶叫★ヴァンパイア］星輝子（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300091.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300091.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300091.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/256/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300091.png"
			},
			{
				"id": 300092,
				"title": "［絶叫★ヴァンパイア］星輝子＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300092.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300092.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300092.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/256/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300092.png"
			},
			{
				"id": 300183,
				"title": "［マッシュアップ★ボルテージ］星輝子（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300183.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300183.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300183.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/256/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300183.png"
			},
			{
				"id": 300184,
				"title": "［マッシュアップ★ボルテージ］星輝子＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300184.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300184.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300184.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/256/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300184.png"
			},
			{
				"id": 300281,
				"title": "［ぱーりぃー★ひゃっはー］星輝子（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300281.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300281.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300281.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/256/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300281.png"
			},
			{
				"id": 300282,
				"title": "［ぱーりぃー★ひゃっはー］星輝子＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300282.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300282.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300282.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/256/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300282.png"
			},
			{
				"id": 300363,
				"title": "［∀NSWER］星輝子（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300363.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300363.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300363.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/256/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300363.png"
			},
			{
				"id": 300364,
				"title": "［∀NSWER］星輝子＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300364.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300364.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300364.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/256/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300364.png"
			},
			{
				"id": 300577,
				"title": "［individuals］星輝子（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300577.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300577.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300577.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/256/11.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300577.png"
			},
			{
				"id": 300578,
				"title": "［individuals］星輝子＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300578.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300578.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300578.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/256/12.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300578.png"
			},
			{
				"id": 300739,
				"title": "［キノコがいっぱい］星輝子（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300739.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300739.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300739.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/256/13.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300739.png"
			},
			{
				"id": 300740,
				"title": "［キノコがいっぱい］星輝子+（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300740.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300740.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300740.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/256/14.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300740.png"
			}
		]
	},
	{
		"name": "片桐早苗",
		"kana": "かたぎりさなえ",
		"type": 3,
		"height": 152,
		"old": 28,
		"weight": 47,
		"birthday": "3月7日",
		"blood": "O",
		"hand": "右",
		"style": {
			"bust": 92,
			"waist": 58,
			"hip": 84
		},
		"imgs": [
			{
				"id": 300073,
				"title": "片桐早苗（N）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300073.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300073.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300073.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/257/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300073.png"
			},
			{
				"id": 300074,
				"title": "片桐早苗＋（N+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300074.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300074.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300074.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/257/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300074.png"
			},
			{
				"id": 300133,
				"title": "［デンジャラスアダルティ］片桐早苗（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300133.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300133.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300133.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/257/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300133.png"
			},
			{
				"id": 300134,
				"title": "［デンジャラスアダルティ］片桐早苗＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300134.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300134.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300134.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/257/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300134.png"
			},
			{
				"id": 300173,
				"title": "［やりすぎお姉さん］片桐早苗（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300173.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300173.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300173.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/257/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300173.png"
			},
			{
				"id": 300174,
				"title": "［やりすぎお姉さん］片桐早苗＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300174.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300174.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300174.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/257/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300174.png"
			},
			{
				"id": 300169,
				"title": "［Near to You］片桐早苗（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300169.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300169.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300169.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/257/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300169.png"
			},
			{
				"id": 300170,
				"title": "［Near to You］片桐早苗＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300170.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300170.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300170.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/257/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300170.png"
			},
			{
				"id": 300333,
				"title": "［命燃やして恋せよ乙女］片桐早苗（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300333.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300333.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300333.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/257/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300333.png"
			},
			{
				"id": 300334,
				"title": "［命燃やして恋せよ乙女］片桐早苗＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300334.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300334.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300334.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/257/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300334.png"
			},
			{
				"id": 300361,
				"title": "［セクシーBANG☆BANG］片桐早苗（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300361.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300361.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300361.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/257/11.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300361.png"
			},
			{
				"id": 300362,
				"title": "［セクシーBANG☆BANG］片桐早苗＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300362.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300362.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300362.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/257/12.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300362.png"
			},
			{
				"id": 300463,
				"title": "［冬空プレシャス］片桐早苗（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300463.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300463.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300463.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/257/13.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300463.png"
			},
			{
				"id": 300464,
				"title": "［冬空プレシャス］片桐早苗＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300464.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300464.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300464.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/257/14.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300464.png"
			},
			{
				"id": 300519,
				"title": "［永遠の相棒］片桐早苗（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300519.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300519.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300519.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/257/15.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300519.png"
			},
			{
				"id": 300520,
				"title": "［永遠の相棒］片桐早苗＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300520.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300520.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300520.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/257/16.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300520.png"
			}
		]
	},
	{
		"name": "堀裕子",
		"kana": "ほりゆうこ",
		"type": 3,
		"height": 157,
		"old": 16,
		"weight": 44,
		"birthday": "3月13日",
		"blood": "O",
		"hand": "右",
		"style": {
			"bust": 81,
			"waist": 58,
			"hip": 80
		},
		"imgs": [
			{
				"id": 300021,
				"title": "堀裕子（N）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300021.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300021.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300021.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/258/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300021.png"
			},
			{
				"id": 300022,
				"title": "堀裕子＋（N+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300022.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300022.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300022.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/258/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300022.png"
			},
			{
				"id": 300097,
				"title": "［湯けむりサイキッカー］堀裕子（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300097.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300097.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300097.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/258/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300097.png"
			},
			{
				"id": 300098,
				"title": "［湯けむりサイキッカー］堀裕子＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300098.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300098.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300098.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/258/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300098.png"
			},
			{
				"id": 300187,
				"title": "［絶対特権主張しますっ ! ］堀裕子（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300187.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300187.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300187.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/258/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300187.png"
			},
			{
				"id": 300188,
				"title": "［絶対特権主張しますっ ! ］堀裕子＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300188.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300188.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300188.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/258/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300188.png"
			},
			{
				"id": 300273,
				"title": "［セーシュンエナジー］堀裕子（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300273.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300273.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300273.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/258/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300273.png"
			},
			{
				"id": 300274,
				"title": "［セーシュンエナジー］堀裕子＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300274.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300274.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300274.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/258/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300274.png"
			},
			{
				"id": 300337,
				"title": "［さいきっく☆ボイス］堀裕子（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300337.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300337.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300337.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/258/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300337.png"
			},
			{
				"id": 300338,
				"title": "［さいきっく☆ボイス］堀裕子＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300338.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300338.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300338.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/258/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300338.png"
			},
			{
				"id": 300383,
				"title": "［モーレツ★世直しギルティ ! ］堀裕子（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300383.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300383.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300383.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/258/11.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300383.png"
			},
			{
				"id": 300384,
				"title": "［モーレツ★世直しギルティ ! ］堀裕子＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300384.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300384.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300384.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/258/12.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300384.png"
			},
			{
				"id": 300447,
				"title": "［トリック☆ジョーカー］堀裕子（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300447.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300447.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300447.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/258/13.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300447.png"
			},
			{
				"id": 300448,
				"title": "［トリック☆ジョーカー］堀裕子＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300448.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300448.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300448.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/258/14.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300448.png"
			},
			{
				"id": 300557,
				"title": "［サイキックマジシャン］堀裕子（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300557.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300557.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300557.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/258/15.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300557.png"
			},
			{
				"id": 300558,
				"title": "［サイキックマジシャン］堀裕子＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300558.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300558.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300558.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/258/16.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300558.png"
			},
			{
				"id": 300689,
				"title": "［彩☆きっく乙女］堀裕子（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300689.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300689.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300689.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/258/17.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300689.png"
			},
			{
				"id": 300690,
				"title": "［彩☆きっく乙女］堀裕子＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300690.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300690.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300690.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/258/18.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300690.png"
			}
		]
	},
	{
		"name": "西島櫂",
		"kana": "にしじまかい",
		"type": 3,
		"height": 172,
		"old": 19,
		"weight": 49,
		"birthday": "8月17日",
		"blood": "O",
		"hand": "右",
		"style": {
			"bust": 86,
			"waist": 59,
			"hip": 83
		},
		"imgs": [
			{
				"id": 300231,
				"title": "西島櫂（R）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300231.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300231.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300231.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/259/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300231.png"
			},
			{
				"id": 300232,
				"title": "西島櫂＋（R+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300232.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300232.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300232.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/259/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300232.png"
			},
			{
				"id": 300355,
				"title": "［人波のスイマー］西島櫂（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300355.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300355.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300355.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/259/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300355.png"
			},
			{
				"id": 300356,
				"title": "［人波のスイマー］西島櫂＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300356.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300356.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300356.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/259/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300356.png"
			},
			{
				"id": 300489,
				"title": "［ドルフィンチアー］西島櫂（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300489.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300489.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300489.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/259/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300489.png"
			},
			{
				"id": 300490,
				"title": "［ドルフィンチアー］西島櫂＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300490.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300490.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300490.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/259/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300490.png"
			},
			{
				"id": 300653,
				"title": "［ホットクルージング］西島櫂（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300653.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300653.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300653.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/259/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300653.png"
			},
			{
				"id": 300654,
				"title": "［ホットクルージング］西島櫂＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300654.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300654.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300654.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/259/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300654.png"
			},
			{
				"id": 300707,
				"title": "［プールサイド・マーメイド］西島櫂（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300707.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300707.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300707.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/259/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300707.png"
			},
			{
				"id": 300708,
				"title": "［プールサイド・マーメイド］西島櫂＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300708.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300708.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300708.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/259/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300708.png"
			}
		]
	},
	{
		"name": "的場梨沙",
		"kana": "まとばりさ",
		"type": 3,
		"height": 143,
		"old": 12,
		"weight": 38,
		"birthday": "11月19日",
		"blood": "B",
		"hand": "右",
		"style": {
			"bust": 71,
			"waist": 58,
			"hip": 73
		},
		"imgs": [
			{
				"id": 300155,
				"title": "的場梨沙（N）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300155.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300155.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300155.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/260/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300155.png"
			},
			{
				"id": 300156,
				"title": "的場梨沙＋（N+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300156.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300156.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300156.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/260/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300156.png"
			},
			{
				"id": 300213,
				"title": "［セクシーパンサー］的場梨沙（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300213.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300213.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300213.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/260/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300213.png"
			},
			{
				"id": 300214,
				"title": "［セクシーパンサー］的場梨沙＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300214.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300214.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300214.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/260/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300214.png"
			},
			{
				"id": 300409,
				"title": "［ビビッド★エゴイスト］的場梨沙（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300409.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300409.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300409.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/260/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300409.png"
			},
			{
				"id": 300410,
				"title": "［ビビッド★エゴイスト］的場梨沙＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300410.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300410.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300410.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/260/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300410.png"
			},
			{
				"id": 300485,
				"title": "［スウィートハニーハート］的場梨沙（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300485.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300485.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300485.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/260/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300485.png"
			},
			{
				"id": 300486,
				"title": "［スウィートハニーハート］的場梨沙＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300486.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300486.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300486.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/260/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300486.png"
			},
			{
				"id": 300555,
				"title": "［ファントムレディ］的場梨沙（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300555.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300555.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300555.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/260/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300555.png"
			},
			{
				"id": 300556,
				"title": "［ファントムレディ］的場梨沙＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300556.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300556.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300556.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/260/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300556.png"
			},
			{
				"id": 300773,
				"title": "［見つめて★レディ］的場梨沙（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300773.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300773.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300773.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/260/11.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300773.png"
			},
			{
				"id": 300774,
				"title": "［見つめて★レディ］的場梨沙+（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300774.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300774.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300774.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/260/12.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300774.png"
			}
		]
	},
	{
		"name": "財前時子",
		"kana": "ざいぜんときこ",
		"type": 3,
		"height": 168,
		"old": 21,
		"weight": 46,
		"birthday": "4月18日",
		"blood": "B",
		"hand": "右",
		"style": {
			"bust": 83,
			"waist": 55,
			"hip": 85
		},
		"imgs": [
			{
				"id": 300283,
				"title": "財前時子（R）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300283.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300283.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300283.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/261/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300283.png"
			},
			{
				"id": 300284,
				"title": "財前時子＋（R+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300284.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300284.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300284.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/261/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300284.png"
			},
			{
				"id": 300315,
				"title": "［ドミネイトクリスマス］財前時子（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300315.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300315.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300315.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/261/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300315.png"
			},
			{
				"id": 300316,
				"title": "［ドミネイトクリスマス］財前時子＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300316.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300316.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300316.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/261/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300316.png"
			},
			{
				"id": 300419,
				"title": "［メディアの女王］財前時子（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300419.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300419.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300419.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/261/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300419.png"
			},
			{
				"id": 300420,
				"title": "［メディアの女王］財前時子＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300420.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300420.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300420.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/261/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300420.png"
			},
			{
				"id": 300473,
				"title": "［クイーン・オブ・クイーン］財前時子（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300473.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300473.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300473.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/261/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300473.png"
			},
			{
				"id": 300474,
				"title": "［クイーン・オブ・クイーン］財前時子＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300474.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300474.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300474.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/261/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300474.png"
			},
			{
				"id": 300719,
				"title": "［月光の中で］財前時子（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300719.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300719.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300719.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/261/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300719.png"
			},
			{
				"id": 300720,
				"title": "［月光の中で］財前時子＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300720.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300720.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300720.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/261/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300720.png"
			}
		]
	},
	{
		"name": "依田芳乃",
		"kana": "よりたよしの",
		"type": 3,
		"height": 151,
		"old": 16,
		"weight": 40,
		"birthday": "7月3日",
		"blood": "O",
		"hand": "右",
		"style": {
			"bust": 73,
			"waist": 53,
			"hip": 73
		},
		"imgs": [
			{
				"id": 300141,
				"title": "依田芳乃（N）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300141.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300141.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300141.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/262/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300141.png"
			},
			{
				"id": 300142,
				"title": "依田芳乃＋（N+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300142.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300142.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300142.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/262/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300142.png"
			},
			{
				"id": 300217,
				"title": "［わだつみの導き手］依田芳乃（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300217.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300217.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300217.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/262/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300217.png"
			},
			{
				"id": 300218,
				"title": "［わだつみの導き手］依田芳乃＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300218.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300218.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300218.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/262/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300218.png"
			},
			{
				"id": 300301,
				"title": "［湯浴みの踊子］依田芳乃（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300301.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300301.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300301.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/262/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300301.png"
			},
			{
				"id": 300302,
				"title": "［湯浴みの踊子］依田芳乃＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300302.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300302.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300302.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/262/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300302.png"
			},
			{
				"id": 300329,
				"title": "［ことほぎの祈り］依田芳乃（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300329.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300329.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300329.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/262/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300329.png"
			},
			{
				"id": 300330,
				"title": "［ことほぎの祈り］依田芳乃＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300330.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300330.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300330.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/262/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300330.png"
			},
			{
				"id": 300359,
				"title": "［桜の頃］依田芳乃（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300359.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300359.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300359.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/262/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300359.png"
			},
			{
				"id": 300360,
				"title": "［桜の頃］依田芳乃＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300360.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300360.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300360.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/262/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300360.png"
			},
			{
				"id": 300415,
				"title": "［Take me☆Take you］依田芳乃（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300415.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300415.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300415.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/262/11.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300415.png"
			},
			{
				"id": 300416,
				"title": "［Take me☆Take you］依田芳乃＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300416.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300416.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300416.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/262/12.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300416.png"
			},
			{
				"id": 300529,
				"title": "［うたかたの結び手］依田芳乃（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300529.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300529.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300529.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/262/13.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300529.png"
			},
			{
				"id": 300530,
				"title": "［うたかたの結び手］依田芳乃＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300530.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300530.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300530.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/262/14.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300530.png"
			},
			{
				"id": 300579,
				"title": "［Sunshine See May］依田芳乃（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300579.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300579.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300579.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/262/15.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300579.png"
			},
			{
				"id": 300580,
				"title": "［Sunshine See May］依田芳乃＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300580.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300580.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300580.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/262/16.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300580.png"
			},
			{
				"id": 300701,
				"title": "［水影のうなさか］依田芳乃（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300701.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300701.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300701.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/262/17.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300701.png"
			},
			{
				"id": 300702,
				"title": "［水影のうなさか］依田芳乃＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300702.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300702.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300702.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/262/18.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300702.png"
			}
		]
	},
	{
		"name": "相葉夕美",
		"kana": "あいばゆみ",
		"type": 3,
		"height": 158,
		"old": 18,
		"weight": 42,
		"birthday": "4月15日",
		"blood": "O",
		"hand": "右",
		"style": {
			"bust": 81,
			"waist": 57,
			"hip": 80
		},
		"imgs": [
			{
				"id": 300089,
				"title": "相葉夕美（N）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300089.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300089.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300089.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/263/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300089.png"
			},
			{
				"id": 300090,
				"title": "相葉夕美＋（N+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300090.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300090.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300090.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/263/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300090.png"
			},
			{
				"id": 300115,
				"title": "［ムーンライトフラワー］相葉夕美（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300115.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300115.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300115.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/263/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300115.png"
			},
			{
				"id": 300116,
				"title": "［ムーンライトフラワー］相葉夕美＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300116.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300116.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300116.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/263/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300116.png"
			},
			{
				"id": 300203,
				"title": "［つぼみ］相葉夕美（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300203.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300203.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300203.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/263/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300203.png"
			},
			{
				"id": 300204,
				"title": "［つぼみ］相葉夕美＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300204.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300204.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300204.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/263/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300204.png"
			},
			{
				"id": 300243,
				"title": "［束ねた気持ち］相葉夕美（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300243.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300243.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300243.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/263/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300243.png"
			},
			{
				"id": 300244,
				"title": "［束ねた気持ち］相葉夕美＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300244.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300244.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300244.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/263/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300244.png"
			},
			{
				"id": 300343,
				"title": "［重ねた花びら］相葉夕美（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300343.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300343.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300343.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/263/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300343.png"
			},
			{
				"id": 300344,
				"title": "［重ねた花びら］相葉夕美＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300344.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300344.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300344.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/263/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300344.png"
			},
			{
				"id": 300445,
				"title": "［秋風に手を振って］相葉夕美（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300445.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300445.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300445.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/263/11.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300445.png"
			},
			{
				"id": 300446,
				"title": "［秋風に手を振って］相葉夕美＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300446.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300446.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300446.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/263/12.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300446.png"
			},
			{
				"id": 300541,
				"title": "［サマーサニーブーケ］相葉夕美（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300541.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300541.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300541.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/263/13.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300541.png"
			},
			{
				"id": 300542,
				"title": "［サマーサニーブーケ］相葉夕美＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300542.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300542.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300542.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/263/14.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300542.png"
			},
			{
				"id": 300655,
				"title": "［無重力シャトル］相葉夕美（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300655.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300655.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300655.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/263/15.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300655.png"
			},
			{
				"id": 300656,
				"title": "［無重力シャトル］相葉夕美＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300656.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300656.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300656.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/263/16.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300656.png"
			},
			{
				"id": 300685,
				"title": "［夜の一輪］相葉夕美（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300685.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300685.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300685.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/263/17.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300685.png"
			},
			{
				"id": 300686,
				"title": "［夜の一輪］相葉夕美＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300686.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300686.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300686.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/263/18.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300686.png"
			}
		]
	},
	{
		"name": "野々村そら",
		"kana": "ののむらそら",
		"type": 3,
		"height": 157,
		"old": 15,
		"weight": 46,
		"birthday": "1月3日",
		"blood": "B",
		"hand": "右",
		"style": {
			"bust": 84,
			"waist": 57,
			"hip": 85
		},
		"imgs": [
			{
				"id": 300023,
				"title": "野々村そら（R）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300023.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300023.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300023.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/264/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300023.png"
			},
			{
				"id": 300024,
				"title": "野々村そら＋（R+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300024.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300024.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300024.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/264/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300024.png"
			},
			{
				"id": 300401,
				"title": "［ろでお☆がーる］野々村そら（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300401.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300401.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300401.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/264/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300401.png"
			},
			{
				"id": 300402,
				"title": "［ろでお☆がーる］野々村そら＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300402.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300402.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300402.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/264/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300402.png"
			},
			{
				"id": 300581,
				"title": "［わいるどしゃうと］野々村そら（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300581.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300581.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300581.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/264/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300581.png"
			},
			{
				"id": 300582,
				"title": "［わいるどしゃうと］野々村そら＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300582.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300582.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300582.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/264/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300582.png"
			},
			{
				"id": 300671,
				"title": "［ぷりむすたいる］野々村そら（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300671.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300671.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300671.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/264/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300671.png"
			},
			{
				"id": 300672,
				"title": "［ぷりむすたいる］野々村そら＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300672.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300672.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300672.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/264/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300672.png"
			},
			{
				"id": 300767,
				"title": "［ごーごー ! すまいらー ! ! ］野々村そら（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300767.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300767.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300767.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/264/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300767.png"
			},
			{
				"id": 300768,
				"title": "［ごーごー ! すまいらー ! ! ］野々村そら+（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300768.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300768.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300768.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/264/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300768.png"
			}
		]
	},
	{
		"name": "浜川愛結奈",
		"kana": "はまかわあゆな",
		"type": 3,
		"height": 168,
		"old": 22,
		"weight": 50,
		"birthday": "5月25日",
		"blood": "B",
		"hand": "右",
		"style": {
			"bust": 92,
			"waist": 58,
			"hip": 85
		},
		"imgs": [
			{
				"id": 300025,
				"title": "浜川愛結奈（N）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300025.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300025.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300025.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/265/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300025.png"
			},
			{
				"id": 300026,
				"title": "浜川愛結奈＋（N+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300026.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300026.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300026.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/265/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300026.png"
			},
			{
				"id": 300421,
				"title": "［セクシーディーヴァ］浜川愛結奈（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300421.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300421.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300421.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/265/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300421.png"
			},
			{
				"id": 300422,
				"title": "［セクシーディーヴァ］浜川愛結奈＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300422.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300422.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300422.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/265/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300422.png"
			},
			{
				"id": 300591,
				"title": "［パナシェ・ロワイヤル］浜川愛結奈（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300591.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300591.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300591.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/265/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300591.png"
			},
			{
				"id": 300592,
				"title": "［パナシェ・ロワイヤル］浜川愛結奈＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300592.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300592.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300592.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/265/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300592.png"
			}
		]
	},
	{
		"name": "若林智香",
		"kana": "わかばやしともか",
		"type": 3,
		"height": 156,
		"old": 17,
		"weight": 45,
		"birthday": "8月30日",
		"blood": "A",
		"hand": "右",
		"style": {
			"bust": 82,
			"waist": 57,
			"hip": 83
		},
		"imgs": [
			{
				"id": 300083,
				"title": "若林智香（R）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300083.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300083.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300083.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/266/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300083.png"
			},
			{
				"id": 300084,
				"title": "若林智香＋（R+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300084.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300084.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300084.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/266/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300084.png"
			},
			{
				"id": 300117,
				"title": "［フレッシュチアガール］若林智香（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300117.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300117.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300117.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/266/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300117.png"
			},
			{
				"id": 300118,
				"title": "［フレッシュチアガール］若林智香＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300118.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300118.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300118.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/266/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300118.png"
			},
			{
				"id": 300425,
				"title": "［チアフル・ロワイヤル］若林智香（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300425.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300425.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300425.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/266/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300425.png"
			},
			{
				"id": 300426,
				"title": "［チアフル・ロワイヤル］若林智香＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300426.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300426.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300426.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/266/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300426.png"
			},
			{
				"id": 300681,
				"title": "［エール・フォー・オール］若林智香（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300681.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300681.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300681.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/266/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300681.png"
			},
			{
				"id": 300682,
				"title": "［エール・フォー・オール］若林智香＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300682.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300682.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300682.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/266/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300682.png"
			},
			{
				"id": 300769,
				"title": "［ハッピーチアー］若林智香（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300769.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300769.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300769.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/266/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300769.png"
			},
			{
				"id": 300770,
				"title": "［ハッピーチアー］若林智香+（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300770.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300770.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300770.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/266/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300770.png"
			}
		]
	},
	{
		"name": "城ヶ崎美嘉",
		"kana": "じょうがさきみか",
		"type": 3,
		"height": 162,
		"old": 17,
		"weight": 43,
		"birthday": "11月12日",
		"blood": "AB",
		"hand": "左",
		"style": {
			"bust": 80,
			"waist": 56,
			"hip": 82
		},
		"imgs": [
			{
				"id": 300027,
				"title": "城ヶ崎美嘉（R）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300027.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300027.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300027.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/267/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300027.png"
			},
			{
				"id": 300028,
				"title": "城ヶ崎美嘉＋（R+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300028.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300028.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300028.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/267/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300028.png"
			},
			{
				"id": 300055,
				"title": "［カリスマギャル］城ヶ崎美嘉（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300055.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300055.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300055.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/267/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300055.png"
			},
			{
				"id": 300056,
				"title": "［カリスマギャル］城ヶ崎美嘉＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300056.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300056.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300056.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/267/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300056.png"
			},
			{
				"id": 300111,
				"title": "［Orange Sapphire］城ヶ崎美嘉（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300111.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300111.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300111.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/267/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300111.png"
			},
			{
				"id": 300112,
				"title": "［Orange Sapphire］城ヶ崎美嘉＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300112.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300112.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300112.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/267/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300112.png"
			},
			{
				"id": 300125,
				"title": "［ハート★オーバーフロー］城ヶ崎美嘉（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300125.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300125.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300125.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/267/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300125.png"
			},
			{
				"id": 300126,
				"title": "［ハート★オーバーフロー］城ヶ崎美嘉＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300126.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300126.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300126.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/267/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300126.png"
			},
			{
				"id": 300279,
				"title": "［グロリアス★グロウ］城ヶ崎美嘉（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300279.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300279.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300279.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/267/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300279.png"
			},
			{
				"id": 300280,
				"title": "［グロリアス★グロウ］城ヶ崎美嘉＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300280.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300280.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300280.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/267/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300280.png"
			},
			{
				"id": 300317,
				"title": "［EVERMORE］城ヶ崎美嘉（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300317.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300317.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300317.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/267/11.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300317.png"
			},
			{
				"id": 300318,
				"title": "［EVERMORE］城ヶ崎美嘉＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300318.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300318.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300318.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/267/12.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300318.png"
			},
			{
				"id": 300427,
				"title": "［Twin☆くるっ★テール］城ヶ崎美嘉（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300427.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300427.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300427.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/267/13.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300427.png"
			},
			{
				"id": 300428,
				"title": "［Twin☆くるっ★テール］城ヶ崎美嘉＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300428.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300428.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300428.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/267/14.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300428.png"
			},
			{
				"id": 300487,
				"title": "［センター・オブ・ストリート］城ヶ崎美嘉（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300487.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300487.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300487.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/267/15.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300487.png"
			},
			{
				"id": 300488,
				"title": "［センター・オブ・ストリート］城ヶ崎美嘉＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300488.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300488.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300488.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/267/16.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300488.png"
			},
			{
				"id": 300537,
				"title": "［SUN♡FLOWER］城ヶ崎美嘉（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300537.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300537.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300537.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/267/17.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300537.png"
			},
			{
				"id": 300538,
				"title": "［SUN♡FLOWER］城ヶ崎美嘉＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300538.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300538.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300538.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/267/18.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300538.png"
			},
			{
				"id": 300669,
				"title": "［約束のまなざし］城ヶ崎美嘉（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300669.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300669.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300669.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/267/19.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300669.png"
			},
			{
				"id": 300670,
				"title": "［約束のまなざし］城ヶ崎美嘉＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300670.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300670.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300670.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/267/20.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300670.png"
			},
			{
				"id": 300713,
				"title": "［TRUE COLORS］城ヶ崎美嘉（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300713.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300713.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300713.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/267/21.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300713.png"
			},
			{
				"id": 300714,
				"title": "［TRUE COLORS］城ヶ崎美嘉＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300714.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300714.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300714.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/267/22.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300714.png"
			}
		]
	},
	{
		"name": "城ヶ崎莉嘉",
		"kana": "じょうがさきりか",
		"type": 3,
		"height": 149,
		"old": 12,
		"weight": 36,
		"birthday": "7月30日",
		"blood": "B",
		"hand": "左",
		"style": {
			"bust": 72,
			"waist": 54,
			"hip": 75
		},
		"imgs": [
			{
				"id": 300029,
				"title": "城ヶ崎莉嘉（R）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300029.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300029.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300029.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/268/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300029.png"
			},
			{
				"id": 300030,
				"title": "城ヶ崎莉嘉＋（R+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300030.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300030.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300030.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/268/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300030.png"
			},
			{
				"id": 300057,
				"title": "［カリスマちびギャル］城ヶ崎莉嘉（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300057.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300057.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300057.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/268/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300057.png"
			},
			{
				"id": 300058,
				"title": "［カリスマちびギャル］城ヶ崎莉嘉＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300058.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300058.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300058.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/268/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300058.png"
			},
			{
				"id": 300107,
				"title": "［キラデコ☆パレード］城ヶ崎莉嘉（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300107.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300107.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300107.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/268/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300107.png"
			},
			{
				"id": 300108,
				"title": "［キラデコ☆パレード］城ヶ崎莉嘉＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300108.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300108.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300108.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/268/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300108.png"
			},
			{
				"id": 300269,
				"title": "［ビヨンド・ザ・スターライト］城ヶ崎莉嘉（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300269.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300269.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300269.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/268/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300269.png"
			},
			{
				"id": 300270,
				"title": "［ビヨンド・ザ・スターライト］城ヶ崎莉嘉＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300270.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300270.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300270.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/268/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300270.png"
			},
			{
				"id": 300367,
				"title": "［サークル☆オブ☆フレンズ］城ヶ崎莉嘉（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300367.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300367.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300367.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/268/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300367.png"
			},
			{
				"id": 300368,
				"title": "［サークル☆オブ☆フレンズ］城ヶ崎莉嘉＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300368.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300368.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300368.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/268/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300368.png"
			},
			{
				"id": 300429,
				"title": "［Twin☆くるっ★テール］城ヶ崎莉嘉（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300429.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300429.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300429.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/268/11.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300429.png"
			},
			{
				"id": 300430,
				"title": "［Twin☆くるっ★テール］城ヶ崎莉嘉＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300430.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300430.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300430.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/268/12.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300430.png"
			},
			{
				"id": 300511,
				"title": "［シークレット☆モード］城ヶ崎莉嘉（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300511.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300511.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300511.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/268/13.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300511.png"
			},
			{
				"id": 300512,
				"title": "［シークレット☆モード］城ヶ崎莉嘉＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300512.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300512.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300512.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/268/14.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300512.png"
			},
			{
				"id": 300583,
				"title": "［キラピカ☆ホーリーナイト］城ヶ崎莉嘉（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300583.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300583.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300583.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/268/15.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300583.png"
			},
			{
				"id": 300584,
				"title": "［キラピカ☆ホーリーナイト］城ヶ崎莉嘉＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300584.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300584.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300584.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/268/16.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300584.png"
			},
			{
				"id": 300761,
				"title": "［トキメキ☆ラブハート］城ヶ崎莉嘉（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300761.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300761.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300761.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/268/17.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300761.png"
			},
			{
				"id": 300762,
				"title": "［トキメキ☆ラブハート］城ヶ崎莉嘉+（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300762.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300762.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300762.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/268/18.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300762.png"
			}
		]
	},
	{
		"name": "仙崎恵磨",
		"kana": "せんざきえま",
		"type": 3,
		"height": 156,
		"old": 21,
		"weight": 45,
		"birthday": "6月27日",
		"blood": "O",
		"hand": "左",
		"style": {
			"bust": 81,
			"waist": 55,
			"hip": 81
		},
		"imgs": [
			{
				"id": 300081,
				"title": "仙崎恵磨（R）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300081.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300081.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300081.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/269/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300081.png"
			},
			{
				"id": 300082,
				"title": "仙崎恵磨＋（R+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300082.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300082.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300082.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/269/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300082.png"
			},
			{
				"id": 300275,
				"title": "［アッパーテンション］仙崎恵磨（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300275.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300275.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300275.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/269/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300275.png"
			},
			{
				"id": 300276,
				"title": "［アッパーテンション］仙崎恵磨＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300276.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300276.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300276.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/269/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300276.png"
			},
			{
				"id": 300525,
				"title": "［パワフル・ロワイヤル］仙崎恵磨（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300525.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300525.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300525.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/269/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300525.png"
			},
			{
				"id": 300526,
				"title": "［パワフル・ロワイヤル］仙崎恵磨＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300526.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300526.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300526.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/269/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300526.png"
			},
			{
				"id": 300663,
				"title": "［クルーエルクロウ］仙崎恵磨（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300663.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300663.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300663.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/269/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300663.png"
			},
			{
				"id": 300664,
				"title": "［クルーエルクロウ］仙崎恵磨＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300664.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300664.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300664.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/269/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300664.png"
			},
			{
				"id": 300743,
				"title": "［ライジングビート］仙崎恵磨（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300743.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300743.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300743.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/269/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300743.png"
			},
			{
				"id": 300744,
				"title": "［ライジングビート］仙崎恵磨+（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300744.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300744.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300744.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/269/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300744.png"
			}
		]
	},
	{
		"name": "日野茜",
		"kana": "ひのあかね",
		"type": 3,
		"height": 148,
		"old": 17,
		"weight": 40,
		"birthday": "8月4日",
		"blood": "AB",
		"hand": "右",
		"style": {
			"bust": 80,
			"waist": 60,
			"hip": 82
		},
		"imgs": [
			{
				"id": 300031,
				"title": "日野茜（R）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300031.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300031.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300031.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/270/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300031.png"
			},
			{
				"id": 300032,
				"title": "日野茜＋（R+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300032.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300032.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300032.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/270/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300032.png"
			},
			{
				"id": 300119,
				"title": "［バーニングプレゼント］日野茜（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300119.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300119.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300119.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/270/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300119.png"
			},
			{
				"id": 300120,
				"title": "［バーニングプレゼント］日野茜＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300120.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300120.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300120.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/270/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300120.png"
			},
			{
				"id": 300259,
				"title": "［サマカニ ! ! ］日野茜（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300259.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300259.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300259.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/270/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300259.png"
			},
			{
				"id": 300260,
				"title": "［サマカニ ! ! ］日野茜＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300260.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300260.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300260.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/270/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300260.png"
			},
			{
				"id": 300311,
				"title": "［Flip Flop］日野茜（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300311.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300311.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300311.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/270/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300311.png"
			},
			{
				"id": 300312,
				"title": "［Flip Flop］日野茜＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300312.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300312.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300312.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/270/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300312.png"
			},
			{
				"id": 300375,
				"title": "［ポジティブパッション］日野茜（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300375.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300375.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300375.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/270/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300375.png"
			},
			{
				"id": 300376,
				"title": "［ポジティブパッション］日野茜＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300376.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300376.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300376.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/270/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300376.png"
			},
			{
				"id": 300499,
				"title": "［放課後トライ］日野茜（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300499.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300499.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300499.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/270/11.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300499.png"
			},
			{
				"id": 300500,
				"title": "［放課後トライ］日野茜＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300500.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300500.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300500.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/270/12.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300500.png"
			},
			{
				"id": 300609,
				"title": "［スパイスパラダイス］日野茜（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300609.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300609.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300609.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/270/13.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300609.png"
			},
			{
				"id": 300610,
				"title": "［スパイスパラダイス］日野茜＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300610.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300610.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300610.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/270/14.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300610.png"
			},
			{
				"id": 300715,
				"title": "［軌跡のギフト］日野茜（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300715.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300715.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300715.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/270/15.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300715.png"
			},
			{
				"id": 300716,
				"title": "［軌跡のギフト］日野茜＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300716.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300716.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300716.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/270/16.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300716.png"
			}
		]
	},
	{
		"name": "諸星きらり",
		"kana": "もろぼしきらり",
		"type": 3,
		"height": 182,
		"old": 17,
		"weight": 60,
		"birthday": "9月1日",
		"blood": "O",
		"hand": "右",
		"style": {
			"bust": 91,
			"waist": 64,
			"hip": 86
		},
		"imgs": [
			{
				"id": 300033,
				"title": "諸星きらり（R）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300033.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300033.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300033.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/271/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300033.png"
			},
			{
				"id": 300034,
				"title": "諸星きらり＋（R+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300034.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300034.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300034.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/271/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300034.png"
			},
			{
				"id": 300079,
				"title": "［グレイトプレゼント］諸星きらり（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300079.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300079.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300079.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/271/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300079.png"
			},
			{
				"id": 300080,
				"title": "［グレイトプレゼント］諸星きらり＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300080.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300080.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300080.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/271/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300080.png"
			},
			{
				"id": 300109,
				"title": "［Orange Sapphire］諸星きらり（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300109.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300109.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300109.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/271/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300109.png"
			},
			{
				"id": 300110,
				"title": "［Orange Sapphire］諸星きらり＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300110.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300110.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300110.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/271/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300110.png"
			},
			{
				"id": 300251,
				"title": "［めろめろサマー］諸星きらり（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300251.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300251.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300251.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/271/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300251.png"
			},
			{
				"id": 300252,
				"title": "［めろめろサマー］諸星きらり＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300252.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300252.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300252.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/271/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300252.png"
			},
			{
				"id": 300323,
				"title": "［あんきら ! ？狂騒曲］諸星きらり（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300323.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300323.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300323.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/271/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300323.png"
			},
			{
				"id": 300324,
				"title": "［あんきら ! ？狂騒曲］諸星きらり＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300324.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300324.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300324.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/271/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300324.png"
			},
			{
				"id": 300391,
				"title": "［With Love］諸星きらり（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300391.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300391.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300391.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/271/11.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300391.png"
			},
			{
				"id": 300392,
				"title": "［With Love］諸星きらり＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300392.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300392.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300392.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/271/12.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300392.png"
			},
			{
				"id": 300467,
				"title": "［はぴはぴ☆わんだーらんど］諸星きらり（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300467.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300467.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300467.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/271/13.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300467.png"
			},
			{
				"id": 300468,
				"title": "［はぴはぴ☆わんだーらんど］諸星きらり＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300468.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300468.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300468.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/271/14.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300468.png"
			},
			{
				"id": 300535,
				"title": "［SUN♡FLOWER］諸星きらり（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300535.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300535.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300535.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/271/15.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300535.png"
			},
			{
				"id": 300536,
				"title": "［SUN♡FLOWER］諸星きらり＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300536.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300536.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300536.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/271/16.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300536.png"
			},
			{
				"id": 300563,
				"title": "［はぴはぴ☆はろうぃん］諸星きらり（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300563.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300563.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300563.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/271/17.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300563.png"
			},
			{
				"id": 300564,
				"title": "［はぴはぴ☆はろうぃん］諸星きらり＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300564.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300564.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300564.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/271/18.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300564.png"
			}
		]
	},
	{
		"name": "十時愛梨",
		"kana": "とときあいり",
		"type": 3,
		"height": 161,
		"old": 18,
		"weight": 46,
		"birthday": "12月8日",
		"blood": "O",
		"hand": "右",
		"style": {
			"bust": 86,
			"waist": 58,
			"hip": 88
		},
		"imgs": [
			{
				"id": 300035,
				"title": "十時愛梨（R）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300035.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300035.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300035.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/272/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300035.png"
			},
			{
				"id": 300036,
				"title": "十時愛梨＋（R+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300036.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300036.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300036.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/272/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300036.png"
			},
			{
				"id": 300051,
				"title": "［スイートバレンタイン］十時愛梨（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300051.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300051.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300051.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/272/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300051.png"
			},
			{
				"id": 300052,
				"title": "［スイートバレンタイン］十時愛梨＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300052.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300052.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300052.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/272/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300052.png"
			},
			{
				"id": 300095,
				"title": "［パンプキンパーティー］十時愛梨（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300095.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300095.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300095.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/272/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300095.png"
			},
			{
				"id": 300096,
				"title": "［パンプキンパーティー］十時愛梨＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300096.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300096.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300096.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/272/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300096.png"
			},
			{
				"id": 300185,
				"title": "［絶対特権主張しますっ ! ］十時愛梨（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300185.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300185.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300185.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/272/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300185.png"
			},
			{
				"id": 300186,
				"title": "［絶対特権主張しますっ ! ］十時愛梨＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300186.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300186.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300186.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/272/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300186.png"
			},
			{
				"id": 300265,
				"title": "［カップオブラブ］十時愛梨（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300265.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300265.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300265.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/272/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300265.png"
			},
			{
				"id": 300266,
				"title": "［カップオブラブ］十時愛梨＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300266.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300266.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300266.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/272/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300266.png"
			},
			{
				"id": 300411,
				"title": "［プライベート・メイド］十時愛梨（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300411.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300411.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300411.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/272/11.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300411.png"
			},
			{
				"id": 300412,
				"title": "［プライベート・メイド］十時愛梨＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300412.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300412.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300412.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/272/12.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300412.png"
			},
			{
				"id": 300617,
				"title": "［エレガンス・プラス］十時愛梨（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300617.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300617.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300617.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/272/13.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300617.png"
			},
			{
				"id": 300618,
				"title": "［エレガンス・プラス］十時愛梨＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300618.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300618.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300618.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/272/14.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300618.png"
			},
			{
				"id": 300749,
				"title": "［ホーリーリゾートナイト］十時愛梨（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300749.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300749.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300749.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/272/15.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300749.png"
			},
			{
				"id": 300750,
				"title": "［ホーリーリゾートナイト］十時愛梨+（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300750.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300750.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300750.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/272/16.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300750.png"
			}
		]
	},
	{
		"name": "ナターリア",
		"kana": "なたーりあ",
		"type": 3,
		"height": 155,
		"old": 14,
		"weight": 43,
		"birthday": "6月29日",
		"blood": "A",
		"hand": "右",
		"style": {
			"bust": 84,
			"waist": 55,
			"hip": 86
		},
		"imgs": [
			{
				"id": 300075,
				"title": "ナターリア（R）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300075.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300075.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300075.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/273/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300075.png"
			},
			{
				"id": 300076,
				"title": "ナターリア＋（R+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300076.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300076.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300076.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/273/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300076.png"
			},
			{
				"id": 300165,
				"title": "［千夜一夜舞姫］ナターリア（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300165.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300165.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300165.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/273/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300165.png"
			},
			{
				"id": 300166,
				"title": "［千夜一夜舞姫］ナターリア＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300166.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300166.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300166.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/273/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300166.png"
			},
			{
				"id": 300219,
				"title": "［ハッピーブライダル］ナターリア（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300219.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300219.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300219.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/273/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300219.png"
			},
			{
				"id": 300220,
				"title": "［ハッピーブライダル］ナターリア＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300220.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300220.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300220.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/273/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300220.png"
			},
			{
				"id": 300431,
				"title": "［ヒートビート・サンバ ! ］ナターリア（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300431.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300431.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300431.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/273/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300431.png"
			},
			{
				"id": 300432,
				"title": "［ヒートビート・サンバ ! ］ナターリア＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300432.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300432.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300432.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/273/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300432.png"
			},
			{
				"id": 300589,
				"title": "［ヴォヤージュ・プリンセス］ナターリア（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300589.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300589.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300589.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/273/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300589.png"
			},
			{
				"id": 300590,
				"title": "［ヴォヤージュ・プリンセス］ナターリア＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300590.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300590.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300590.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/273/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300590.png"
			},
			{
				"id": 300755,
				"title": "［アットホーム・マイルーツ］ナターリア（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300755.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300755.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300755.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/273/11.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300755.png"
			},
			{
				"id": 300756,
				"title": "［アットホーム・マイルーツ］ナターリア+（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300756.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300756.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300756.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/273/12.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300756.png"
			}
		]
	},
	{
		"name": "相馬夏美",
		"kana": "そうまなつみ",
		"type": 3,
		"height": 160,
		"old": 25,
		"weight": 46,
		"birthday": "7月23日",
		"blood": "A",
		"hand": "右",
		"style": {
			"bust": 83,
			"waist": 60,
			"hip": 89
		},
		"imgs": [
			{
				"id": 300261,
				"title": "相馬夏美（N）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300261.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300261.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300261.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/274/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300261.png"
			},
			{
				"id": 300262,
				"title": "相馬夏美＋（N+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300262.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300262.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300262.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/274/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300262.png"
			},
			{
				"id": 300345,
				"title": "［明日へのフライト］相馬夏美（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300345.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300345.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300345.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/274/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300345.png"
			},
			{
				"id": 300346,
				"title": "［明日へのフライト］相馬夏美＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300346.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300346.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300346.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/274/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300346.png"
			},
			{
				"id": 300547,
				"title": "［ストイック・ロワイヤル］相馬夏美（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300547.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300547.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300547.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/274/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300547.png"
			},
			{
				"id": 300548,
				"title": "［ストイック・ロワイヤル］相馬夏美＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300548.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300548.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300548.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/274/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300548.png"
			}
		]
	},
	{
		"name": "槙原志保",
		"kana": "まきはらしほ",
		"type": 3,
		"height": 162,
		"old": 19,
		"weight": 46,
		"birthday": "4月27日",
		"blood": "B",
		"hand": "右",
		"style": {
			"bust": 86,
			"waist": 57,
			"hip": 91
		},
		"imgs": [
			{
				"id": 300255,
				"title": "槙原志保（R）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300255.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300255.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300255.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/275/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300255.png"
			},
			{
				"id": 300256,
				"title": "槙原志保＋（R+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300256.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300256.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300256.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/275/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300256.png"
			},
			{
				"id": 300341,
				"title": "［甘いひととき］槙原志保（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300341.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300341.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300341.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/275/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300341.png"
			},
			{
				"id": 300342,
				"title": "［甘いひととき］槙原志保＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300342.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300342.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300342.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/275/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300342.png"
			},
			{
				"id": 300515,
				"title": "［至福のボリューム］槙原志保（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300515.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300515.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300515.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/275/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300515.png"
			},
			{
				"id": 300516,
				"title": "［至福のボリューム］槙原志保＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300516.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300516.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300516.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/275/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300516.png"
			},
			{
				"id": 300633,
				"title": "［春色オーダーメイド］槙原志保（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300633.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300633.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300633.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/275/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300633.png"
			},
			{
				"id": 300634,
				"title": "［春色オーダーメイド］槙原志保＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300634.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300634.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300634.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/275/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300634.png"
			},
			{
				"id": 300735,
				"title": "［小悪魔ヴァンパイア］槙原志保（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300735.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300735.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300735.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/275/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300735.png"
			},
			{
				"id": 300736,
				"title": "［小悪魔ヴァンパイア］槙原志保+（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300736.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300736.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300736.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/275/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300736.png"
			}
		]
	},
	{
		"name": "向井拓海",
		"kana": "むかいたくみ",
		"type": 3,
		"height": 163,
		"old": 18,
		"weight": 53,
		"birthday": "8月7日",
		"blood": "A",
		"hand": "右",
		"style": {
			"bust": 95,
			"waist": 60,
			"hip": 87
		},
		"imgs": [
			{
				"id": 300105,
				"title": "向井拓海（R）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300105.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300105.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300105.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/280/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300105.png"
			},
			{
				"id": 300106,
				"title": "向井拓海＋（R+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300106.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300106.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300106.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/280/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300106.png"
			},
			{
				"id": 300143,
				"title": "［硬派乙女］向井拓海（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300143.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300143.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300143.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/280/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300143.png"
			},
			{
				"id": 300144,
				"title": "［硬派乙女］向井拓海＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300144.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300144.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300144.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/280/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300144.png"
			},
			{
				"id": 300191,
				"title": "［拳火上等］向井拓海（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300191.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300191.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300191.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/280/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300191.png"
			},
			{
				"id": 300192,
				"title": "［拳火上等］向井拓海＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300192.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300192.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300192.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/280/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300192.png"
			},
			{
				"id": 300221,
				"title": "［純情Midnight伝説］向井拓海（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300221.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300221.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300221.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/280/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300221.png"
			},
			{
				"id": 300222,
				"title": "［純情Midnight伝説］向井拓海＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300222.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300222.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300222.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/280/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300222.png"
			},
			{
				"id": 300413,
				"title": "［炎天の女王］向井拓海（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300413.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300413.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300413.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/280/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300413.png"
			},
			{
				"id": 300414,
				"title": "［炎天の女王］向井拓海＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300414.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300414.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300414.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/280/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300414.png"
			},
			{
				"id": 300465,
				"title": "［桃色怒髪天］向井拓海（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300465.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300465.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300465.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/280/11.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300465.png"
			},
			{
				"id": 300466,
				"title": "［桃色怒髪天］向井拓海＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300466.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300466.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300466.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/280/12.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300466.png"
			},
			{
				"id": 300521,
				"title": "［Virgin Love］向井拓海（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300521.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300521.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300521.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/280/13.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300521.png"
			},
			{
				"id": 300522,
				"title": "［Virgin Love］向井拓海＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300522.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300522.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300522.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/280/14.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300522.png"
			},
			{
				"id": 300601,
				"title": "［錦雅信念］向井拓海（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300601.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300601.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300601.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/280/15.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300601.png"
			},
			{
				"id": 300602,
				"title": "［錦雅信念］向井拓海＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300602.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300602.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300602.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/280/16.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300602.png"
			}
		]
	},
	{
		"name": "市原仁奈",
		"kana": "いちはらにな",
		"type": 3,
		"height": 128,
		"old": 9,
		"weight": 29,
		"birthday": "2月8日",
		"blood": "B",
		"hand": "左",
		"style": {
			"bust": 61,
			"waist": 57,
			"hip": 67
		},
		"imgs": [
			{
				"id": 300113,
				"title": "市原仁奈（R）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300113.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300113.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300113.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/283/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300113.png"
			},
			{
				"id": 300114,
				"title": "市原仁奈＋（R+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300114.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300114.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300114.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/283/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300114.png"
			},
			{
				"id": 300123,
				"title": "［ともだちたくさん］市原仁奈（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300123.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300123.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300123.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/283/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300123.png"
			},
			{
				"id": 300124,
				"title": "［ともだちたくさん］市原仁奈＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300124.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300124.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300124.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/283/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300124.png"
			},
			{
				"id": 300197,
				"title": "［きぐるみもふもふ］市原仁奈（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300197.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300197.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300197.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/283/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300197.png"
			},
			{
				"id": 300198,
				"title": "［きぐるみもふもふ］市原仁奈＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300198.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300198.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300198.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/283/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300198.png"
			},
			{
				"id": 300249,
				"title": "［きみにいっぱい☆］市原仁奈（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300249.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300249.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300249.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/283/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300249.png"
			},
			{
				"id": 300250,
				"title": "［きみにいっぱい☆］市原仁奈＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300250.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300250.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300250.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/283/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300250.png"
			},
			{
				"id": 300433,
				"title": "［はろうぃんもんすたー］市原仁奈（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300433.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300433.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300433.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/283/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300433.png"
			},
			{
				"id": 300434,
				"title": "［はろうぃんもんすたー］市原仁奈＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300434.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300434.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300434.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/283/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300434.png"
			},
			{
				"id": 300471,
				"title": "［にゅーいやー］市原仁奈（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300471.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300471.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300471.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/283/11.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300471.png"
			},
			{
				"id": 300472,
				"title": "［にゅーいやー］市原仁奈＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300472.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300472.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300472.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/283/12.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300472.png"
			},
			{
				"id": 300641,
				"title": "［ぴかぴかのさくらぐみ♪］市原仁奈（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300641.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300641.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300641.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/283/13.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300641.png"
			},
			{
				"id": 300642,
				"title": "［ぴかぴかのさくらぐみ♪］市原仁奈＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300642.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300642.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300642.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/283/14.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300642.png"
			}
		]
	},
	{
		"name": "喜多日菜子",
		"kana": "きたひなこ",
		"type": 3,
		"height": 151,
		"old": 15,
		"weight": 38,
		"birthday": "4月6日",
		"blood": "AB",
		"hand": "右",
		"style": {
			"bust": 78,
			"waist": 56,
			"hip": 78
		},
		"imgs": [
			{
				"id": 300121,
				"title": "喜多日菜子（R）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300121.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300121.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300121.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/284/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300121.png"
			},
			{
				"id": 300122,
				"title": "喜多日菜子＋（R+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300122.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300122.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300122.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/284/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300122.png"
			},
			{
				"id": 300201,
				"title": "［夢みるプリンセス］喜多日菜子（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300201.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300201.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300201.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/284/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300201.png"
			},
			{
				"id": 300202,
				"title": "［夢みるプリンセス］喜多日菜子＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300202.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300202.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300202.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/284/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300202.png"
			},
			{
				"id": 300407,
				"title": "［妄想お姫様］喜多日菜子（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300407.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300407.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300407.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/284/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300407.png"
			},
			{
				"id": 300408,
				"title": "［妄想お姫様］喜多日菜子＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300408.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300408.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300408.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/284/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300408.png"
			},
			{
				"id": 300559,
				"title": "［お菓子なドリーミング］喜多日菜子（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300559.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300559.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300559.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/284/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300559.png"
			},
			{
				"id": 300560,
				"title": "［お菓子なドリーミング］喜多日菜子＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300560.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300560.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300560.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/284/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300560.png"
			},
			{
				"id": 300595,
				"title": "［Trust me］喜多日菜子（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300595.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300595.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300595.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/284/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300595.png"
			},
			{
				"id": 300596,
				"title": "［Trust me］喜多日菜子＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300596.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300596.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300596.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/284/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300596.png"
			},
			{
				"id": 300711,
				"title": "［トゥルー・ドリーム］喜多日菜子（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300711.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300711.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300711.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/284/11.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300711.png"
			},
			{
				"id": 300712,
				"title": "［トゥルー・ドリーム］喜多日菜子＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300712.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300712.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300712.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/284/12.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300712.png"
			},
			{
				"id": 300759,
				"title": "［ギュっとMilky Way］喜多日菜子（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300759.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300759.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300759.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/284/13.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300759.png"
			},
			{
				"id": 300760,
				"title": "［ギュっとMilky Way］喜多日菜子+（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300760.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300760.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300760.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/284/14.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300760.png"
			}
		]
	},
	{
		"name": "杉坂海",
		"kana": "すぎさかうみ",
		"type": 3,
		"height": 162,
		"old": 18,
		"weight": 45,
		"birthday": "7月20日",
		"blood": "B",
		"hand": "右",
		"style": {
			"bust": 88,
			"waist": 58,
			"hip": 86
		},
		"imgs": [
			{
				"id": 320209,
				"title": "杉坂海（N）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/320209.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/320209.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/320209.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/285/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/320209.png"
			},
			{
				"id": 320210,
				"title": "杉坂海＋（N+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/320210.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/320210.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/320210.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/285/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/320210.png"
			},
			{
				"id": 300347,
				"title": "［エキゾチックサーファー］杉坂海（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300347.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300347.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300347.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/285/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300347.png"
			},
			{
				"id": 300348,
				"title": "［エキゾチックサーファー］杉坂海＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300348.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300348.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300348.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/285/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300348.png"
			},
			{
				"id": 300567,
				"title": "［エキゾチックドレッサー］杉坂海（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300567.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300567.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300567.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/285/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300567.png"
			},
			{
				"id": 300568,
				"title": "［エキゾチックドレッサー］杉坂海＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300568.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300568.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300568.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/285/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300568.png"
			},
			{
				"id": 300693,
				"title": "［エキゾチックプレイヤー］杉坂海（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300693.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300693.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300693.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/285/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300693.png"
			},
			{
				"id": 300694,
				"title": "［エキゾチックプレイヤー］杉坂海＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300694.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300694.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300694.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/285/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300694.png"
			}
		]
	},
	{
		"name": "北川真尋",
		"kana": "きたがわまひろ",
		"type": 3,
		"height": 158,
		"old": 17,
		"weight": 43,
		"birthday": "2月17日",
		"blood": "O",
		"hand": "右",
		"style": {
			"bust": 75,
			"waist": 57,
			"hip": 79
		},
		"imgs": [
			{
				"id": 300211,
				"title": "北川真尋（R）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300211.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300211.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300211.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/286/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300211.png"
			},
			{
				"id": 300212,
				"title": "北川真尋＋（R+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300212.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300212.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300212.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/286/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300212.png"
			},
			{
				"id": 300263,
				"title": "［ディアンドルガール］北川真尋（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300263.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300263.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300263.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/286/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300263.png"
			},
			{
				"id": 300264,
				"title": "［ディアンドルガール］北川真尋＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300264.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300264.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300264.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/286/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300264.png"
			},
			{
				"id": 300443,
				"title": "［ジョイフル・ロワイヤル］北川真尋（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300443.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300443.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300443.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/286/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300443.png"
			},
			{
				"id": 300444,
				"title": "［ジョイフル・ロワイヤル］北川真尋＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300444.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300444.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300444.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/286/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300444.png"
			},
			{
				"id": 300605,
				"title": "［バイタルシャウト］北川真尋（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300605.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300605.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300605.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/286/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300605.png"
			},
			{
				"id": 300606,
				"title": "［バイタルシャウト］北川真尋＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300606.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300606.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300606.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/286/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300606.png"
			},
			{
				"id": 300675,
				"title": "［アップビート・ラン］北川真尋（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300675.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300675.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300675.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/286/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300675.png"
			},
			{
				"id": 300676,
				"title": "［アップビート・ラン］北川真尋＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300676.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300676.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300676.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/286/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300676.png"
			}
		]
	},
	{
		"name": "メアリー・コクラン",
		"kana": "めありー・こくらん",
		"type": 3,
		"height": 152,
		"old": 11,
		"weight": 41,
		"birthday": "1月19日",
		"blood": "B",
		"hand": "左",
		"style": {
			"bust": 71,
			"waist": 59,
			"hip": 73
		},
		"imgs": [
			{
				"id": 300099,
				"title": "メアリー・コクラン（R）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300099.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300099.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300099.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/287/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300099.png"
			},
			{
				"id": 300100,
				"title": "メアリー・コクラン＋（R+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300100.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300100.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300100.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/287/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300100.png"
			},
			{
				"id": 300149,
				"title": "［オトメのお勉強］メアリー・コクラン（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300149.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300149.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300149.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/287/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300149.png"
			},
			{
				"id": 300150,
				"title": "［オトメのお勉強］メアリー・コクラン＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300150.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300150.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300150.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/287/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300150.png"
			},
			{
				"id": 300455,
				"title": "［おませなリトルガール］メアリー・コクラン（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300455.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300455.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300455.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/287/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300455.png"
			},
			{
				"id": 300456,
				"title": "［おませなリトルガール］メアリー・コクラン＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300456.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300456.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300456.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/287/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300456.png"
			},
			{
				"id": 300603,
				"title": "［碧眼の姫君］メアリー・コクラン（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300603.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300603.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300603.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/287/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300603.png"
			},
			{
				"id": 300604,
				"title": "［碧眼の姫君］メアリー・コクラン＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300604.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300604.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300604.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/287/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300604.png"
			},
			{
				"id": 300695,
				"title": "［レットイットキュート ! ］メアリー・コクラン（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300695.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300695.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300695.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/287/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300695.png"
			},
			{
				"id": 300696,
				"title": "［レットイットキュート ! ］メアリー・コクラン＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300696.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300696.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300696.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/287/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300696.png"
			}
		]
	},
	{
		"name": "小松伊吹",
		"kana": "こまついぶき",
		"type": 3,
		"height": 165,
		"old": 19,
		"weight": 48,
		"birthday": "11月17日",
		"blood": "O",
		"hand": "右",
		"style": {
			"bust": 85,
			"waist": 59,
			"hip": 88
		},
		"imgs": [
			{
				"id": 300189,
				"title": "小松伊吹（R）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300189.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300189.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300189.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/288/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300189.png"
			},
			{
				"id": 300190,
				"title": "小松伊吹＋（R+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300190.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300190.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300190.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/288/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300190.png"
			},
			{
				"id": 300293,
				"title": "［フェイバリット☆タイム］小松伊吹（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300293.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300293.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300293.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/288/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300293.png"
			},
			{
				"id": 300294,
				"title": "［フェイバリット☆タイム］小松伊吹＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300294.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300294.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300294.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/288/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300294.png"
			},
			{
				"id": 300495,
				"title": "［トロピカルダンサー］小松伊吹（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300495.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300495.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300495.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/288/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300495.png"
			},
			{
				"id": 300496,
				"title": "［トロピカルダンサー］小松伊吹＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300496.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300496.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300496.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/288/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300496.png"
			},
			{
				"id": 300569,
				"title": "［フリースタイル☆ライフ］小松伊吹（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300569.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300569.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300569.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/288/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300569.png"
			},
			{
				"id": 300570,
				"title": "［フリースタイル☆ライフ］小松伊吹＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300570.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300570.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300570.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/288/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300570.png"
			},
			{
				"id": 300705,
				"title": "［フレッシュソルジャー］小松伊吹（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300705.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300705.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300705.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/288/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300705.png"
			},
			{
				"id": 300706,
				"title": "［フレッシュソルジャー］小松伊吹＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300706.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300706.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300706.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/288/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300706.png"
			}
		]
	},
	{
		"name": "三好紗南",
		"kana": "みよしさな",
		"type": 3,
		"height": 149,
		"old": 14,
		"weight": 39,
		"birthday": "6月25日",
		"blood": "B",
		"hand": "右",
		"style": {
			"bust": 75,
			"waist": 56,
			"hip": 80
		},
		"imgs": [
			{
				"id": 300157,
				"title": "三好紗南（R）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300157.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300157.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300157.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/289/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300157.png"
			},
			{
				"id": 300158,
				"title": "三好紗南＋（R+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300158.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300158.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300158.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/289/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300158.png"
			},
			{
				"id": 300227,
				"title": "［ピコピコ☆ゲーマー］三好紗南（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300227.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300227.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300227.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/289/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300227.png"
			},
			{
				"id": 300228,
				"title": "［ピコピコ☆ゲーマー］三好紗南＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300228.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300228.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300228.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/289/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300228.png"
			},
			{
				"id": 300441,
				"title": "［プレイ・ザ・ゲーム ! ］三好紗南（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300441.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300441.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300441.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/289/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300441.png"
			},
			{
				"id": 300442,
				"title": "［プレイ・ザ・ゲーム ! ］三好紗南＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300442.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300442.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300442.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/289/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300442.png"
			},
			{
				"id": 300513,
				"title": "［ミッション☆コンプリート］三好紗南（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300513.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300513.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300513.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/289/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300513.png"
			},
			{
				"id": 300514,
				"title": "［ミッション☆コンプリート］三好紗南＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300514.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300514.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300514.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/289/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300514.png"
			},
			{
				"id": 300667,
				"title": "［冒険者］三好紗南（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300667.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300667.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300667.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/289/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300667.png"
			},
			{
				"id": 300668,
				"title": "［冒険者］三好紗南＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300668.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300668.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300668.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/289/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300668.png"
			}
		]
	},
	{
		"name": "キャシー・グラハム",
		"kana": "きゃしー・ぐらはむ",
		"type": 3,
		"height": 168,
		"old": 15,
		"weight": 49,
		"birthday": "9月19日",
		"blood": "O",
		"hand": "左",
		"style": {
			"bust": 83,
			"waist": 56,
			"hip": 85
		},
		"imgs": [
			{
				"id": 300307,
				"title": "キャシー・グラハム（R）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300307.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300307.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300307.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/290/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300307.png"
			},
			{
				"id": 300308,
				"title": "キャシー・グラハム＋（R+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300308.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300308.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300308.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/290/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300308.png"
			},
			{
				"id": 300399,
				"title": "［お喋りチアー］キャシー・グラハム（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300399.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300399.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300399.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/290/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300399.png"
			},
			{
				"id": 300400,
				"title": "［お喋りチアー］キャシー・グラハム＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300400.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300400.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300400.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/290/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300400.png"
			},
			{
				"id": 300523,
				"title": "［ラフ＆ガーリー］キャシー・グラハム（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300523.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300523.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300523.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/290/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300523.png"
			},
			{
				"id": 300524,
				"title": "［ラフ＆ガーリー］キャシー・グラハム＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300524.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300524.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300524.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/290/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300524.png"
			},
			{
				"id": 300727,
				"title": "［笑いの中心］キャシー・グラハム（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300727.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300727.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300727.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/290/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300727.png"
			},
			{
				"id": 300728,
				"title": "［笑いの中心］キャシー・グラハム+（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300728.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300728.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300728.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/290/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300728.png"
			}
		]
	},
	{
		"name": "難波笑美",
		"kana": "なんばえみ",
		"type": 3,
		"height": 158,
		"old": 17,
		"weight": 45,
		"birthday": "5月1日",
		"blood": "O",
		"hand": "右",
		"style": {
			"bust": 82,
			"waist": 56,
			"hip": 80
		},
		"imgs": [
			{
				"id": 300145,
				"title": "難波笑美（R）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300145.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300145.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300145.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/291/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300145.png"
			},
			{
				"id": 300146,
				"title": "難波笑美＋（R+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300146.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300146.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300146.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/291/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300146.png"
			},
			{
				"id": 300161,
				"title": "［浪速の派手娘］難波笑美（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300161.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300161.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300161.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/291/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300161.png"
			},
			{
				"id": 300162,
				"title": "［浪速の派手娘］難波笑美＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300162.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300162.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300162.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/291/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300162.png"
			},
			{
				"id": 300417,
				"title": "［本日の主役］難波笑美（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300417.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300417.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300417.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/291/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300417.png"
			},
			{
				"id": 300418,
				"title": "［本日の主役］難波笑美＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300418.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300418.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300418.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/291/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300418.png"
			},
			{
				"id": 300683,
				"title": "［お笑い☆伝道師］難波笑美（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300683.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300683.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300683.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/291/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300683.png"
			},
			{
				"id": 300684,
				"title": "［お笑い☆伝道師］難波笑美＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300684.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300684.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300684.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/291/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300684.png"
			}
		]
	},
	{
		"name": "浜口あやめ",
		"kana": "はまぐちあやめ",
		"type": 3,
		"height": 154,
		"old": 15,
		"weight": 42,
		"birthday": "1月13日",
		"blood": "A",
		"hand": "左",
		"style": {
			"bust": 78,
			"waist": 55,
			"hip": 80
		},
		"imgs": [
			{
				"id": 300093,
				"title": "浜口あやめ（R）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300093.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300093.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300093.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/292/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300093.png"
			},
			{
				"id": 300094,
				"title": "浜口あやめ＋（R+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300094.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300094.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300094.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/292/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300094.png"
			},
			{
				"id": 300181,
				"title": "［華麗なくのいち］浜口あやめ（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300181.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300181.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300181.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/292/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300181.png"
			},
			{
				"id": 300182,
				"title": "［華麗なくのいち］浜口あやめ＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300182.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300182.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300182.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/292/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300182.png"
			},
			{
				"id": 300287,
				"title": "［くのいちのいろは］浜口あやめ（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300287.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300287.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300287.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/292/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300287.png"
			},
			{
				"id": 300288,
				"title": "［くのいちのいろは］浜口あやめ＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300288.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300288.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300288.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/292/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300288.png"
			},
			{
				"id": 300437,
				"title": "［キミのそばでずっと］浜口あやめ（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300437.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300437.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300437.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/292/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300437.png"
			},
			{
				"id": 300438,
				"title": "［キミのそばでずっと］浜口あやめ＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300438.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300438.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300438.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/292/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300438.png"
			},
			{
				"id": 300615,
				"title": "［義勇忍侠花吹雪］浜口あやめ（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300615.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300615.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300615.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/292/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300615.png"
			},
			{
				"id": 300616,
				"title": "［義勇忍侠花吹雪］浜口あやめ＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300616.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300616.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300616.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/292/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300616.png"
			},
			{
				"id": 300733,
				"title": "［空想探査計画］浜口あやめ（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300733.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300733.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300733.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/292/11.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300733.png"
			},
			{
				"id": 300734,
				"title": "［空想探査計画］浜口あやめ+（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300734.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300734.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300734.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/292/12.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300734.png"
			}
		]
	},
	{
		"name": "村上巴",
		"kana": "むらかみともえ",
		"type": 3,
		"height": 146,
		"old": 13,
		"weight": 37,
		"birthday": "1月3日",
		"blood": "A",
		"hand": "右",
		"style": {
			"bust": 74,
			"waist": 53,
			"hip": 76
		},
		"imgs": [
			{
				"id": 300129,
				"title": "村上巴（R）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300129.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300129.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300129.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/293/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300129.png"
			},
			{
				"id": 300130,
				"title": "村上巴＋（R+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300130.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300130.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300130.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/293/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300130.png"
			},
			{
				"id": 300175,
				"title": "［紅の一指し］村上巴（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300175.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300175.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300175.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/293/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300175.png"
			},
			{
				"id": 300176,
				"title": "［紅の一指し］村上巴＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300176.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300176.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300176.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/293/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300176.png"
			},
			{
				"id": 300159,
				"title": "［緋色のプリンセス］村上巴（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300159.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300159.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300159.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/293/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300159.png"
			},
			{
				"id": 300160,
				"title": "［緋色のプリンセス］村上巴＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300160.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300160.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300160.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/293/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300160.png"
			},
			{
				"id": 300387,
				"title": "［こぶし・紅］村上巴（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300387.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300387.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300387.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/293/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300387.png"
			},
			{
				"id": 300388,
				"title": "［こぶし・紅］村上巴＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300388.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300388.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300388.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/293/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300388.png"
			},
			{
				"id": 300483,
				"title": "［always］村上巴（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300483.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300483.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300483.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/293/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300483.png"
			},
			{
				"id": 300484,
				"title": "［always］村上巴＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300484.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300484.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300484.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/293/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300484.png"
			},
			{
				"id": 300509,
				"title": "［姉御の心粋］村上巴（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300509.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300509.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300509.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/293/11.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300509.png"
			},
			{
				"id": 300510,
				"title": "［姉御の心粋］村上巴＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300510.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300510.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300510.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/293/12.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300510.png"
			},
			{
				"id": 300697,
				"title": "［緋色の一皿］村上巴（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300697.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300697.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300697.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/293/13.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300697.png"
			},
			{
				"id": 300698,
				"title": "［緋色の一皿］村上巴＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300698.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300698.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300698.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/293/14.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300698.png"
			},
			{
				"id": 300765,
				"title": "［心躍る新春］村上巴（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300765.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300765.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300765.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/293/15.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300765.png"
			},
			{
				"id": 300766,
				"title": "［心躍る新春］村上巴+（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300766.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300766.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300766.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/293/16.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300766.png"
			}
		]
	},
	{
		"name": "土屋亜子",
		"kana": "つちやあこ",
		"type": 3,
		"height": 156,
		"old": 15,
		"weight": 42,
		"birthday": "5月2日",
		"blood": "B",
		"hand": "右",
		"style": {
			"bust": 85,
			"waist": 54,
			"hip": 83
		},
		"imgs": [
			{
				"id": 300153,
				"title": "土屋亜子（R）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300153.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300153.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300153.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/294/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300153.png"
			},
			{
				"id": 300154,
				"title": "土屋亜子＋（R+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300154.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300154.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300154.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/294/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300154.png"
			},
			{
				"id": 300229,
				"title": "［サルファーウェーブ］土屋亜子（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300229.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300229.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300229.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/294/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300229.png"
			},
			{
				"id": 300230,
				"title": "［サルファーウェーブ］土屋亜子＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300230.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300230.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300230.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/294/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300230.png"
			},
			{
				"id": 300501,
				"title": "［ニューウェーブ・サルファー］土屋亜子（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300501.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300501.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300501.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/294/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300501.png"
			},
			{
				"id": 300502,
				"title": "［ニューウェーブ・サルファー］土屋亜子＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300502.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300502.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300502.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/294/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300502.png"
			},
			{
				"id": 300639,
				"title": "［黄金の好運］土屋亜子（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300639.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300639.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300639.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/294/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300639.png"
			},
			{
				"id": 300640,
				"title": "［黄金の好運］土屋亜子＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300640.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300640.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300640.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/294/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300640.png"
			}
		]
	},
	{
		"name": "首藤葵",
		"kana": "しゅとうあおい",
		"type": 3,
		"height": 145,
		"old": 13,
		"weight": 39,
		"birthday": "8月18日",
		"blood": "O",
		"hand": "右",
		"style": {
			"bust": 73,
			"waist": 53,
			"hip": 75
		},
		"imgs": [
			{
				"id": 300167,
				"title": "首藤葵（N）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300167.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300167.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300167.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/295/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300167.png"
			},
			{
				"id": 300168,
				"title": "首藤葵＋（N+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300168.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300168.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300168.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/295/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300168.png"
			},
			{
				"id": 300277,
				"title": "［まごころ若女将］首藤葵（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300277.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300277.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300277.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/295/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300277.png"
			},
			{
				"id": 300278,
				"title": "［まごころ若女将］首藤葵＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300278.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300278.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300278.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/295/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300278.png"
			},
			{
				"id": 300475,
				"title": "［手鞠の芸達者］首藤葵（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300475.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300475.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300475.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/295/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300475.png"
			},
			{
				"id": 300476,
				"title": "［手鞠の芸達者］首藤葵＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300476.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300476.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300476.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/295/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300476.png"
			},
			{
				"id": 300619,
				"title": "［チャキチャキ☆晴れ娘］首藤葵（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300619.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300619.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300619.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/295/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300619.png"
			},
			{
				"id": 300620,
				"title": "［チャキチャキ☆晴れ娘］首藤葵＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300620.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300620.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300620.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/295/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300620.png"
			},
			{
				"id": 300757,
				"title": "［チャーミー・ロワイヤル］首藤葵（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300757.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300757.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300757.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/295/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300757.png"
			},
			{
				"id": 300758,
				"title": "［チャーミー・ロワイヤル］首藤葵+（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300758.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300758.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300758.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/295/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300758.png"
			}
		]
	},
	{
		"name": "冴島清美",
		"kana": "さえじまきよみ",
		"type": 3,
		"height": 153,
		"old": 15,
		"weight": 43,
		"birthday": "9月26日",
		"blood": "A",
		"hand": "右",
		"style": {
			"bust": 76,
			"waist": 58,
			"hip": 78
		},
		"imgs": [
			{
				"id": 300291,
				"title": "冴島清美（N）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300291.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300291.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300291.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/296/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300291.png"
			},
			{
				"id": 300292,
				"title": "冴島清美＋（N+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300292.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300292.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300292.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/296/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300292.png"
			},
			{
				"id": 300373,
				"title": "［学園の超☆新星］冴島清美（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300373.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300373.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300373.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/296/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300373.png"
			},
			{
				"id": 300374,
				"title": "［学園の超☆新星］冴島清美＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300374.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300374.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300374.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/296/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300374.png"
			},
			{
				"id": 300477,
				"title": "［超☆スーパーモデル］冴島清美（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300477.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300477.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300477.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/296/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300477.png"
			},
			{
				"id": 300478,
				"title": "［超☆スーパーモデル］冴島清美＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300478.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300478.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300478.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/296/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300478.png"
			},
			{
				"id": 300533,
				"title": "［超☆志貫徹］冴島清美（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300533.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300533.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300533.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/296/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300533.png"
			},
			{
				"id": 300534,
				"title": "［超☆志貫徹］冴島清美＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300534.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300534.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300534.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/296/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300534.png"
			},
			{
				"id": 300651,
				"title": "［ガールズロッカー］冴島清美（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300651.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300651.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300651.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/296/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300651.png"
			},
			{
				"id": 300652,
				"title": "［ガールズロッカー］冴島清美＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300652.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300652.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300652.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/296/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300652.png"
			}
		]
	},
	{
		"name": "佐藤心",
		"kana": "さとうしん",
		"type": 3,
		"height": 166,
		"old": 26,
		"weight": 0,
		"birthday": "7月22日",
		"blood": "AB",
		"hand": "右",
		"style": {
			"bust": 0,
			"waist": 0,
			"hip": 0
		},
		"imgs": [
			{
				"id": 300241,
				"title": "佐藤心（R）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300241.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300241.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300241.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/297/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300241.png"
			},
			{
				"id": 300242,
				"title": "佐藤心＋（R+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300242.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300242.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300242.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/297/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300242.png"
			},
			{
				"id": 300289,
				"title": "［ハート・モデル］佐藤心（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300289.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300289.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300289.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/297/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300289.png"
			},
			{
				"id": 300290,
				"title": "［ハート・モデル］佐藤心＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300290.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300290.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300290.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/297/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300290.png"
			},
			{
				"id": 300309,
				"title": "［はぁとトゥハート］佐藤心（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300309.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300309.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300309.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/297/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300309.png"
			},
			{
				"id": 300310,
				"title": "［はぁとトゥハート］佐藤心＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300310.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300310.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300310.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/297/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300310.png"
			},
			{
				"id": 300393,
				"title": "［はぁとの嫁入り］佐藤心（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300393.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300393.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300393.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/297/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300393.png"
			},
			{
				"id": 300394,
				"title": "［はぁとの嫁入り］佐藤心＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300394.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300394.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300394.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/297/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300394.png"
			},
			{
				"id": 300423,
				"title": "［ブリリアント・はぁと］佐藤心（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300423.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300423.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300423.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/297/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300423.png"
			},
			{
				"id": 300424,
				"title": "［ブリリアント・はぁと］佐藤心＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300424.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300424.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300424.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/297/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300424.png"
			},
			{
				"id": 300469,
				"title": "［Happy New Yeah ! ］佐藤心（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300469.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300469.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300469.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/297/11.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300469.png"
			},
			{
				"id": 300470,
				"title": "［Happy New Yeah ! ］佐藤心＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300470.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300470.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300470.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/297/12.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300470.png"
			},
			{
				"id": 300543,
				"title": "［凸凹スピードスター］佐藤心（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300543.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300543.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300543.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/297/13.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300543.png"
			},
			{
				"id": 300544,
				"title": "［凸凹スピードスター］佐藤心＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300544.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300544.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300544.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/297/14.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300544.png"
			},
			{
				"id": 300571,
				"title": "［オーダーメイド・はぁと］佐藤心（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300571.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300571.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300571.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/297/15.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300571.png"
			},
			{
				"id": 300572,
				"title": "［オーダーメイド・はぁと］佐藤心＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300572.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300572.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300572.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/297/16.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300572.png"
			}
		]
	},
	{
		"name": "南条光",
		"kana": "なんじょうひかる",
		"type": 3,
		"height": 140,
		"old": 14,
		"weight": 41,
		"birthday": "9月13日",
		"blood": "B",
		"hand": "右",
		"style": {
			"bust": 79,
			"waist": 58,
			"hip": 80
		},
		"imgs": [
			{
				"id": 300245,
				"title": "南条光（R）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300245.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300245.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300245.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/298/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300245.png"
			},
			{
				"id": 300246,
				"title": "南条光＋（R+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300246.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300246.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300246.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/298/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300246.png"
			},
			{
				"id": 300339,
				"title": "［ミンナノミカタ］南条光（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300339.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300339.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300339.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/298/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300339.png"
			},
			{
				"id": 300340,
				"title": "［ミンナノミカタ］南条光＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300340.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300340.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300340.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/298/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300340.png"
			},
			{
				"id": 300493,
				"title": "［無限大の夢］南条光（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300493.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300493.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300493.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/298/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300493.png"
			},
			{
				"id": 300494,
				"title": "［無限大の夢］南条光＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300494.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300494.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300494.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/298/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300494.png"
			},
			{
				"id": 300549,
				"title": "［夢うたうチカラ］南条光（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300549.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300549.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300549.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/298/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300549.png"
			},
			{
				"id": 300550,
				"title": "［夢うたうチカラ］南条光＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300550.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300550.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300550.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/298/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300550.png"
			},
			{
				"id": 300593,
				"title": "［Trust me］南条光（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300593.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300593.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300593.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/298/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300593.png"
			},
			{
				"id": 300594,
				"title": "［Trust me］南条光＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300594.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300594.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300594.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/298/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300594.png"
			},
			{
				"id": 300679,
				"title": "［TAKAMARI☆CLIMAXXX!!!!!］南条光（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300679.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300679.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300679.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/298/11.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300679.png"
			},
			{
				"id": 300680,
				"title": "［TAKAMARI☆CLIMAXXX!!!!!］南条光＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300680.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300680.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300680.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/298/12.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300680.png"
			},
			{
				"id": 300723,
				"title": "［ヒーローオブシャドウ］南条光（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300723.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300723.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300723.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/298/13.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300723.png"
			},
			{
				"id": 300724,
				"title": "［ヒーローオブシャドウ］南条光＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300724.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300724.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300724.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/298/14.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300724.png"
			}
		]
	},
	{
		"name": "イヴ・サンタクロース",
		"kana": "いうﾞ・さんたくろーす",
		"type": 3,
		"height": 165,
		"old": 19,
		"weight": 44,
		"birthday": "12月24日",
		"blood": "B",
		"hand": "右",
		"style": {
			"bust": 81,
			"waist": 56,
			"hip": 80
		},
		"imgs": [
			{
				"id": 300305,
				"title": "イヴ・サンタクロース（N）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300305.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300305.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300305.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/300/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300305.png"
			},
			{
				"id": 300306,
				"title": "イヴ・サンタクロース＋（N+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300306.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300306.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300306.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/300/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300306.png"
			},
			{
				"id": 300325,
				"title": "［ハッピーホーリーナイト］イヴ・サンタクロース（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300325.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300325.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300325.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/300/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300325.png"
			},
			{
				"id": 300326,
				"title": "［ハッピーホーリーナイト］イヴ・サンタクロース＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300326.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300326.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300326.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/300/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300326.png"
			},
			{
				"id": 300459,
				"title": "［ふわふわホーリーナイト］イヴ・サンタクロース（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300459.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300459.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300459.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/300/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300459.png"
			},
			{
				"id": 300460,
				"title": "［ふわふわホーリーナイト］イヴ・サンタクロース＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300460.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300460.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300460.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/300/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300460.png"
			},
			{
				"id": 300597,
				"title": "［ミラクルホーリーナイト］イヴ・サンタクロース（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300597.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300597.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300597.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/300/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300597.png"
			},
			{
				"id": 300598,
				"title": "［ミラクルホーリーナイト］イヴ・サンタクロース＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300598.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300598.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300598.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/300/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300598.png"
			},
			{
				"id": 300753,
				"title": "［聖なる夜のその前に］イヴ・サンタクロース（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300753.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300753.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300753.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/300/9.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300753.png"
			},
			{
				"id": 300754,
				"title": "［聖なる夜のその前に］イヴ・サンタクロース+（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300754.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300754.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300754.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/300/10.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300754.png"
			}
		]
	},
	{
		"name": "辻野あかり",
		"kana": "つじのあかり",
		"type": 1,
		"height": 160,
		"old": 15,
		"weight": 44,
		"birthday": "11月5日",
		"blood": "A",
		"hand": "右",
		"style": {
			"bust": 80,
			"waist": 60,
			"hip": 86
		},
		"imgs": [
			{
				"id": 100671,
				"title": "辻野あかり（N）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100671.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100671.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100671.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/304/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100671.png"
			},
			{
				"id": 100672,
				"title": "辻野あかり＋（N+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100672.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100672.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100672.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/304/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100672.png"
			},
			{
				"id": 100701,
				"title": "［おめかし☆あかりんご］辻野あかり（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100701.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100701.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100701.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/304/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100701.png"
			},
			{
				"id": 100702,
				"title": "［おめかし☆あかりんご］辻野あかり＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100702.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100702.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100702.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/304/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100702.png"
			}
		]
	},
	{
		"name": "砂塚あきら",
		"kana": "すなづかあきら",
		"type": 2,
		"height": 154,
		"old": 15,
		"weight": 42,
		"birthday": "10月7日",
		"blood": "B",
		"hand": "右",
		"style": {
			"bust": 78,
			"waist": 56,
			"hip": 78
		},
		"imgs": [
			{
				"id": 200671,
				"title": "砂塚あきら（N）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200671.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200671.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200671.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/305/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200671.png"
			},
			{
				"id": 200672,
				"title": "砂塚あきら＋（N+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200672.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200672.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200672.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/305/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200672.png"
			},
			{
				"id": 200719,
				"title": "［ライフ・オンライン］砂塚あきら（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200719.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200719.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200719.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/305/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200719.png"
			},
			{
				"id": 200720,
				"title": "［ライフ・オンライン］砂塚あきら＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200720.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200720.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200720.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/305/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200720.png"
			}
		]
	},
	{
		"name": "夢見りあむ",
		"kana": "ゆめみりあむ",
		"type": 3,
		"height": 1049,
		"old": 19,
		"weight": 0,
		"birthday": "9月12日",
		"blood": "AB",
		"hand": "右",
		"style": {
			"bust": 0,
			"waist": 0,
			"hip": 0
		},
		"imgs": [
			{
				"id": 300657,
				"title": "夢見りあむ（N）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300657.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300657.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300657.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/306/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300657.png"
			},
			{
				"id": 300658,
				"title": "夢見りあむ＋（N+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300658.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300658.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300658.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/306/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300658.png"
			},
			{
				"id": 300717,
				"title": "［夢見りあむは救われたい］夢見りあむ（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300717.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300717.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300717.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/306/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300717.png"
			},
			{
				"id": 300718,
				"title": "［夢見りあむは救われたい］夢見りあむ＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300718.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300718.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300718.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/306/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300718.png"
			},
			{
				"id": 300763,
				"title": "［夢をのぞいたら］夢見りあむ（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300763.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300763.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300763.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/306/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300763.png"
			},
			{
				"id": 300764,
				"title": "［夢をのぞいたら］夢見りあむ+（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300764.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300764.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300764.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/306/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300764.png"
			}
		]
	},
	{
		"name": "黒埼ちとせ",
		"kana": "くろさきちとせ",
		"type": 1,
		"height": 164,
		"old": 19,
		"weight": 44,
		"birthday": "11月10日",
		"blood": "O",
		"hand": "右",
		"style": {
			"bust": 86,
			"waist": 58,
			"hip": 84
		},
		"imgs": [
			{
				"id": 100637,
				"title": "黒埼ちとせ（N）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100637.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100637.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100637.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/307/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100637.png"
			},
			{
				"id": 100638,
				"title": "黒埼ちとせ＋（N+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100638.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100638.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100638.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/307/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100638.png"
			},
			{
				"id": 100639,
				"title": "［Fascinate］黒埼ちとせ（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100639.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100639.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100639.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/307/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100639.png"
			},
			{
				"id": 100640,
				"title": "［Fascinate］黒埼ちとせ＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100640.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100640.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100640.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/307/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100640.png"
			},
			{
				"id": 100661,
				"title": "［緋薔薇の令嬢］黒埼ちとせ（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100661.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100661.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100661.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/307/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100661.png"
			},
			{
				"id": 100662,
				"title": "［緋薔薇の令嬢］黒埼ちとせ＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100662.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100662.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100662.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/307/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100662.png"
			}
		]
	},
	{
		"name": "白雪千夜",
		"kana": "しらゆきちよ",
		"type": 1,
		"height": 157,
		"old": 17,
		"weight": 40,
		"birthday": "2月4日",
		"blood": "O",
		"hand": "右",
		"style": {
			"bust": 72,
			"waist": 52,
			"hip": 74
		},
		"imgs": [
			{
				"id": 100655,
				"title": "白雪千夜（N）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100655.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100655.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100655.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/308/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100655.png"
			},
			{
				"id": 100656,
				"title": "白雪千夜＋（N+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100656.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100656.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100656.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/308/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100656.png"
			},
			{
				"id": 100657,
				"title": "［Fascinate］白雪千夜（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100657.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100657.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100657.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/308/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100657.png"
			},
			{
				"id": 100658,
				"title": "［Fascinate］白雪千夜＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100658.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100658.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100658.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/308/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100658.png"
			},
			{
				"id": 100663,
				"title": "［白面の騎士］白雪千夜（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100663.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100663.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100663.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/308/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100663.png"
			},
			{
				"id": 100664,
				"title": "［白面の騎士］白雪千夜＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/100664.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/100664.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/100664.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/308/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/100664.png"
			}
		]
	},
	{
		"name": "久川凪",
		"kana": "ひさかわなぎ",
		"type": 3,
		"height": 150,
		"old": 14,
		"weight": 40,
		"birthday": "6月16日",
		"blood": "B",
		"hand": "右",
		"style": {
			"bust": 76,
			"waist": 56,
			"hip": 80
		},
		"imgs": [
			{
				"id": 300643,
				"title": "久川凪（N）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300643.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300643.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300643.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/309/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300643.png"
			},
			{
				"id": 300644,
				"title": "久川凪＋（N+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300644.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300644.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300644.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/309/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300644.png"
			},
			{
				"id": 300645,
				"title": "［O-Ku-Ri-Mo-No Sunday ! ］久川凪（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300645.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300645.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300645.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/309/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300645.png"
			},
			{
				"id": 300646,
				"title": "［O-Ku-Ri-Mo-No Sunday ! ］久川凪＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300646.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300646.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300646.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/309/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300646.png"
			},
			{
				"id": 300665,
				"title": "［オフタイム・ナギルーム］久川凪（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300665.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300665.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300665.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/309/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300665.png"
			},
			{
				"id": 300666,
				"title": "［オフタイム・ナギルーム］久川凪＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/300666.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/300666.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/300666.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/309/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/300666.png"
			}
		]
	},
	{
		"name": "久川颯",
		"kana": "ひさかわはやて",
		"type": 2,
		"height": 151,
		"old": 14,
		"weight": 42,
		"birthday": "6月16日",
		"blood": "B",
		"hand": "右",
		"style": {
			"bust": 82,
			"waist": 56,
			"hip": 82
		},
		"imgs": [
			{
				"id": 200657,
				"title": "久川颯（N）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200657.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200657.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200657.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/310/1.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200657.png"
			},
			{
				"id": 200658,
				"title": "久川颯＋（N+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200658.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200658.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200658.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/310/2.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200658.png"
			},
			{
				"id": 200659,
				"title": "［O-Ku-Ri-Mo-No Sunday ! ］久川颯（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200659.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200659.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200659.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/310/3.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200659.png"
			},
			{
				"id": 200660,
				"title": "［O-Ku-Ri-Mo-No Sunday ! ］久川颯＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200660.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200660.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200660.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/310/4.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200660.png"
			},
			{
				"id": 200675,
				"title": "［オンタイム・ハーモニー］久川颯（SSR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200675.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200675.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200675.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/310/5.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200675.png"
			},
			{
				"id": 200676,
				"title": "［オンタイム・ハーモニー］久川颯＋（SSR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200676.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200676.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200676.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/310/6.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200676.png"
			},
			{
				"id": 200721,
				"title": "［comic cosmic］久川颯（SR）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200721.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200721.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200721.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/310/7.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200721.png"
			},
			{
				"id": 200722,
				"title": "［comic cosmic］久川颯＋（SR+）",
				"icon": "https://hidamarirhodonite.kirara.ca/icon_card/200722.png",
				"card": "https://hidamarirhodonite.kirara.ca/card/200722.png",
				"fullsize": "https://hidamarirhodonite.kirara.ca/spread/200722.png",
				"standalone": "https://hidamarirhodonite.kirara.ca/chara2/310/8.png",
				"petit": "https://hidamarirhodonite.kirara.ca/puchi/200722.png"
			}
		]
	}
]
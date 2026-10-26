const subsidyData = [
  {
    "cityCode": "011002",
    "id": "hokkaido-sapporo",
    "pref": "北海道",
    "city": "札幌市",
    "area": "北海道",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "札幌市 軽度・中等度難聴児補聴器購入費等助成事業",
        "amount": "基準額の2/3補助（非課税世帯は全額）",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）",
        "department": "保健福祉局 障がい福祉課",
        "officialUrl": "https://www.city.sapporo.jp/shogaifukushi/documents/nanchojihochoki.html",
        "notes": "※購入前の事前申請が必須です。指定医の意見書が必要です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/11/Emblem_of_Sapporo%2C_Hokkaido.svg/120px-Emblem_of_Sapporo%2C_Hokkaido.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "012025",
    "id": "hokkaido-hakodate",
    "pref": "北海道",
    "city": "函館市",
    "area": "北海道",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "函館市 軽度中等度難聴児補聴器購入等助成事業",
        "amount": "基準額の2/3助成（非課税世帯は全額助成）",
        "condition": "18歳未満、両耳30dB以上（手帳非該当）",
        "department": "保健福祉部 障がい保健福祉課",
        "officialUrl": "https://www.city.hakodate.hokkaido.jp/docs/2016040100059/",
        "notes": "※購入前申請必須です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cc/Emblem_of_Hakodate%2C_Hokkaido.svg/120px-Emblem_of_Hakodate%2C_Hokkaido.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "012041",
    "id": "hokkaido-asahikawa",
    "pref": "北海道",
    "city": "旭川市",
    "area": "北海道",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "旭川市 軽度・中等度難聴児補聴器等給付事業",
        "amount": "基準額の2/3給付（非課税世帯等は全額給付）",
        "condition": "18歳未満、聴力30dB以上（手帳非該当）",
        "department": "福祉安心部 障害福祉課",
        "officialUrl": "https://www.city.asahikawa.hokkaido.jp/kurashi/135/179/177/d059374.html",
        "notes": "※事前申請必須です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "旭川市 介護予防高齢者聞こえ支援事業",
        "amount": "上限 50,000円",
        "condition": "65歳以上、手帳非該当、耳鼻咽喉科医師意見書、在宅生活者",
        "department": "長寿社会課 介護予防担当",
        "officialUrl": "https://www.city.asahikawa.hokkaido.jp/kurashi/135/160/170/d081977.html",
        "notes": "※購入前申請必須です。アンケート調査等の協力が必要。",
        "specialNote": "※モデル事業（募集期間・定員あり）"
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d1/Emblem_of_Asahikawa%2C_Hokkaido.svg/120px-Emblem_of_Asahikawa%2C_Hokkaido.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "022012",
    "id": "aomori-aomori",
    "pref": "青森県",
    "city": "青森市",
    "area": "東北",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "青森市 軽度中等度難聴児補聴器購入費等助成事業",
        "amount": "基準額の2/3助成（非課税世帯は全額助成）",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）",
        "department": "福祉部 障がい者支援課",
        "officialUrl": "https://www.city.aomori.aomori.jp/hukushi_kenkou/hukushi/1002848/1002884/1002890.html",
        "notes": "※購入前申請必須です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "青森市 高齢者補聴器購入費助成事業",
        "amount": "上限 30,000円",
        "condition": "65歳以上、両耳30dB〜70dB未満（手帳非該当）、補聴器相談医意見書",
        "department": "福祉部 高齢者支援課",
        "officialUrl": "https://www.city.aomori.aomori.jp/hukushi_kenkou/hukushi/1002786/1002787/1010753.html",
        "notes": "※購入前の事前申請が必須です。認定補聴器技能者が在籍する店舗での購入が対象。",
        "specialNote": "※所得制限なし（市税滞納なし）"
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9f/Emblem_of_Aomori%2C_Aomori.svg/120px-Emblem_of_Aomori%2C_Aomori.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "022039",
    "id": "aomori-hachinohe",
    "pref": "青森県",
    "city": "八戸市",
    "area": "東北",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "八戸市 軽度・中等度難聴児補聴器購入費助成事業",
        "amount": "基準額の2/3助成（1,000円未満切捨）",
        "condition": "18歳未満、両耳30dB以上（手帳非該当）",
        "department": "福祉部 障がい福祉課",
        "officialUrl": "https://www.city.hachinohe.aomori.jp/soshikikarasagasu/shogaifukushika/fukushi_kaigo/1/3951.html",
        "notes": "※事前申請必須です。",
        "specialNote": "※所得制限撤廃（全世帯対象）"
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fa/Emblem_of_Hachinohe%2C_Aomori.svg/120px-Emblem_of_Hachinohe%2C_Aomori.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "032018",
    "id": "iwate-morioka",
    "pref": "岩手県",
    "city": "盛岡市",
    "area": "東北",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "盛岡市 難聴児補聴器購入費助成事業",
        "amount": "基準額の2/3助成（1円未満切上）",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）",
        "department": "保健福祉部 障がい福祉課 自立支援係",
        "officialUrl": "https://www.city.morioka.iwate.jp/kenko_fukushi/shogai/teate/1004110.html",
        "notes": "※事前申請必須です。市指定医・指定販売店が対象。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cc/Emblem_of_Morioka%2C_Iwate.svg/120px-Emblem_of_Morioka%2C_Iwate.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "041009",
    "id": "miyagi-sendai",
    "pref": "宮城県",
    "city": "仙台市",
    "area": "東北",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "仙台市 軽度・中等度難聴児補聴器購入費等助成事業",
        "amount": "基準額の2/3補助（非課税世帯は全額）",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）",
        "department": "健康福祉局 障害福祉企画課",
        "officialUrl": "https://www.city.sendai.jp/shogai-jigyo/kurashi/kenkotofukushi/shogai/shien/shiencenter/sogoshien/shogaisha/jose.html",
        "notes": "※購入前の事前申請が必須です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8f/Emblem_of_Sendai%2C_Miyagi.svg/120px-Emblem_of_Sendai%2C_Miyagi.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "052019",
    "id": "akita-akita",
    "pref": "秋田県",
    "city": "秋田市",
    "area": "東北",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "秋田市 こどもの補聴器購入又は修理費用助成",
        "amount": "基準額の2/3助成",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）",
        "department": "福祉保健部 障がい福祉課",
        "officialUrl": "https://www.city.akita.lg.jp/kurashi/shogaifukushi/1005378/1004940.html",
        "notes": "※購入前申請必須です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d6/Emblem_of_Akita%2C_Akita.svg/120px-Emblem_of_Akita%2C_Akita.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "062014",
    "id": "yamagata-yamagata",
    "pref": "山形県",
    "city": "山形市",
    "area": "東北",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "山形市 軽度・中等度難聴児補聴器購入費助成事業",
        "amount": "基準額の範囲内で購入費の2/3助成",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）",
        "department": "福祉推進部 障がい福祉課 給付係",
        "officialUrl": "https://www.city.yamagata-yamagata.lg.jp/kenkofukushi/syougaisha/1006656/1004592.html",
        "notes": "※事前申請必須です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "山形市 聴こえくっきり事業（高齢者補聴器購入費助成）",
        "amount": "購入費の1/2助成（上限 40,000円）",
        "condition": "65歳以上、住民税非課税世帯、補聴器相談医意見書、市内認定補聴器専門店",
        "department": "福祉推進部 長寿支援課",
        "officialUrl": "https://www.city.yamagata-yamagata.lg.jp/kenkofukushi/koureisha/1006643/1010290.html",
        "notes": "※事前申請必須です。初めて補聴器を購入する方が対象。",
        "specialNote": "※住民税非課税世帯のみ対象"
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b5/Emblem_of_Yamagata%2C_Yamagata.svg/120px-Emblem_of_Yamagata%2C_Yamagata.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "072010",
    "id": "fukushima-fukushima",
    "pref": "福島県",
    "city": "福島市",
    "area": "東北",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "福島市 軽度・中等度難聴児補聴器購入費助成事業",
        "amount": "基準額の2/3助成（非課税世帯等は全額助成）",
        "condition": "18歳未満、両耳30dB以上（手帳非該当）",
        "department": "こども未来部 こども家庭課 母子保健係",
        "officialUrl": "https://www.city.fukushima.fukushima.jp/kosodate-portal/mokuteki/seido_teate/shien/759.html",
        "notes": "※事前申請必須です。更新・修理も対象。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/25/Emblem_of_Fukushima%2C_Fukushima.svg/120px-Emblem_of_Fukushima%2C_Fukushima.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "072036",
    "id": "fukushima-koriyama",
    "pref": "福島県",
    "city": "郡山市",
    "area": "東北",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "郡山市 難聴児補聴器購入費等助成事業",
        "amount": "基準額の2/3助成（非課税世帯等は全額助成）",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）",
        "department": "保健福祉部 障がい福祉課",
        "officialUrl": "https://www.city.koriyama.lg.jp/soshiki/65/5411.html",
        "notes": "※購入前申請必須です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "郡山市 高齢者補聴器購入費助成事業",
        "amount": "購入費の1/2助成（上限 30,000円）",
        "condition": "65歳以上、市民税非課税世帯、両耳40dB以上（手帳非該当）、医師意見書",
        "department": "保健福祉部 健康長寿課",
        "officialUrl": "https://www.city.koriyama.lg.jp/soshiki/66/166227.html",
        "notes": "※購入前申請必須です。",
        "specialNote": "※市民税非課税世帯のみ対象"
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e0/Emblem_of_Koriyama%2C_Fukushima.svg/120px-Emblem_of_Koriyama%2C_Fukushima.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "072044",
    "id": "fukushima-iwaki",
    "pref": "福島県",
    "city": "いわき市",
    "area": "東北",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "いわき市 軽度・中等度難聴児のための補聴器購入費等助成事業",
        "amount": "基準額の2/3助成（修理費も対象）",
        "condition": "18歳未満、手帳6級非該当、医師意見書",
        "department": "保健福祉部 障がい福祉課",
        "officialUrl": "https://www.city.iwaki.lg.jp/www/contents/1454481214686/index.html",
        "notes": "※事前申請必須です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "いわき市 いきいきシニアきこえサポート事業",
        "amount": "上限 30,000円",
        "condition": "65歳以上、市民税非課税世帯、両耳40dB〜70dB未満（手帳非該当）、医師意見書",
        "department": "保健福祉部 地域包括ケア推進課",
        "officialUrl": "https://www.city.iwaki.lg.jp/www/contents/1782369987794/index.html",
        "notes": "※必ず購入前に申請が必要です（電子申請対応）。",
        "specialNote": "※市民税非課税世帯のみ対象"
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1a/Emblem_of_Iwaki%2C_Fukushima.svg/120px-Emblem_of_Iwaki%2C_Fukushima.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "082023",
    "id": "ibaraki-hitachi",
    "pref": "茨城県",
    "city": "日立市",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "日立市 軽度・中等度難聴児補聴器購入費助成事業",
        "amount": "基準額の2/3補助（非課税世帯は全額）",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）",
        "department": "保健福祉部 障害福祉課",
        "officialUrl": "https://www.city.hitachi.lg.jp/fukushi_kenko/shogai/1001865/1001873.html",
        "notes": "※購入前の事前申請が必須です。指定医師の意見書が必要です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/48/Emblem_of_Hitachi%2C_Ibaraki.svg/120px-Emblem_of_Hitachi%2C_Ibaraki.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "082031",
    "id": "ibaraki-tsuchiura",
    "pref": "茨城県",
    "city": "土浦市",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "土浦市 軽度・中等度難聴児補聴器購入補助事業",
        "amount": "基準額の2/3補助（非課税世帯は全額）",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）",
        "department": "保健福祉部 障害福祉課",
        "officialUrl": "https://www.city.tsuchiura.lg.jp/kenko-fukushi-iryo/fukushi/shogaishafukushi/kinsenmendenoshien/josei-teate/page009388.html",
        "notes": "※購入前の事前申請が必須です。専門医の意見書が必要です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#EFF6FF",
        "badgeColor": "#1D4ED8",
        "title": "土浦市 高齢者補聴器購入費助成事業",
        "amount": "上限 20,000円（本体1台購入費用の1/2）",
        "condition": "満65歳以上、手帳非該当、耳鼻咽喉科医師の意見書がある方",
        "department": "保健福祉部 高齢福祉課 高齢福祉係",
        "officialUrl": "https://www.city.tsuchiura.lg.jp/kenko-fukushi-iryo/fukushi/koreishafukushi/kakushujigyo-service/zaitakufukushiservice/kyufu-hojo/page018378.html",
        "notes": "※購入前の事前申請が必須です。1人1回限り。予算枠あり。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/33/Emblem_of_Tsuchiura%2C_Ibaraki.svg/120px-Emblem_of_Tsuchiura%2C_Ibaraki.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "082040",
    "id": "ibaraki-koga",
    "pref": "茨城県",
    "city": "古河市",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "古河市 軽度・中等度難聴児補聴器購入費助成金",
        "amount": "基準額の2/3補助（非課税世帯は全額）",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）",
        "department": "福祉部 障がい福祉課",
        "officialUrl": "https://www.city.ibaraki-koga.lg.jp/soshiki/syogaifukushi/10/1637.html",
        "notes": "※購入前の事前申請が必須です。指定医の受診・意見書が必要です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#EFF6FF",
        "badgeColor": "#1D4ED8",
        "title": "古河市 高齢者補聴器購入費助成事業",
        "amount": "上限 30,000円（本体購入費用の1/2）",
        "condition": "65歳以上、手帳非該当、耳鼻咽喉科医師の意見書がある方、市税滞納なし等",
        "department": "福祉部 高齢介護課",
        "officialUrl": "https://www.city.ibaraki-koga.lg.jp/soshiki/koureikaigo/6/12317.html",
        "notes": "※購入前の事前申請が必須です。指定医療機関等の意見書が必要です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0f/Emblem_of_Koga%2C_Ibaraki.svg/120px-Emblem_of_Koga%2C_Ibaraki.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "082201",
    "id": "ibaraki-tsukuba",
    "pref": "茨城県",
    "city": "つくば市",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "つくば市 軽度・中等度難聴児補聴器購入費等助成事業",
        "amount": "基準額の2/3補助（非課税世帯は全額）",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）",
        "department": "福祉部 障害福祉課",
        "officialUrl": "https://www.city.tsukuba.lg.jp/soshikikarasagasu/fukushibushogaifukushika/gyomuannai/2/2/3/1001372.html",
        "notes": "※購入前の事前申請が必須です。指定医師の意見書が必要です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#EFF6FF",
        "badgeColor": "#1D4ED8",
        "title": "つくば市 高齢者補聴器購入費助成事業",
        "amount": "上限 30,000円（本体購入費用の1/2）",
        "condition": "65歳以上、両耳40dB以上70dB未満（手帳非該当）、耳鼻咽喉科医師の証明書あり",
        "department": "福祉部 高齢福祉課",
        "officialUrl": "https://www.city.tsukuba.lg.jp/soshikikarasagasu/fukushibukoreifukushika/gyomuannai/6/1/19975.html",
        "notes": "※購入前の事前申請が必須です。交付決定前の購入は対象外。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/63/Emblem_of_Tsukuba%2C_Ibaraki.svg/120px-Emblem_of_Tsukuba%2C_Ibaraki.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "092011",
    "id": "tochigi-utsunomiya",
    "pref": "栃木県",
    "city": "宇都宮市",
    "area": "関東",
    "programs": [
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "宇都宮市 高齢者福祉補聴器交付事業",
        "amount": "上限 33,900円（自己負担: 所得税非課税世帯は無料、課税世帯は所得税額に応じ一部負担）",
        "condition": "65歳以上、両耳聴力50dB以上（手帳非該当）、市民税非課税〜基準内",
        "department": "保健福祉部 高齢福祉課",
        "officialUrl": "https://www.city.utsunomiya.lg.jp/kenko/koureisha/service/1004276.html",
        "notes": "※購入前の事前申請必須です（指定医療機関受診と指定業者からの交付）。",
        "specialNote": "※現物交付方式（差額自己負担可）"
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c2/Emblem_of_Utsunomiya%2C_Tochigi.svg/120px-Emblem_of_Utsunomiya%2C_Tochigi.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "092029",
    "id": "tochigi-ashikaga",
    "pref": "栃木県",
    "city": "足利市",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "足利市 軽度・中等度難聴児補聴器購入費等助成事業",
        "amount": "基準額の2/3補助（非課税世帯は全額）",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）",
        "department": "健康福祉部 障がい福祉課 障がい支援担当",
        "officialUrl": "https://www.city.ashikaga.tochigi.jp/health/000054/000284/000676/p001928.html",
        "notes": "※購入前の事前申請が必須です。指定医師の意見書が必要です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#EFF6FF",
        "badgeColor": "#1D4ED8",
        "title": "足利市 高齢者日常生活用具給付（ポケット型補聴器）",
        "amount": "ポケット型補聴器現物給付（原則1割負担・生活保護世帯無料）",
        "condition": "75歳以上（または65歳以上要支援・要介護）、市民税非課税世帯、手帳非該当",
        "department": "健康福祉部 元気高齢課 地域包括ケア推進担当",
        "officialUrl": "https://www.city.ashikaga.tochigi.jp/health/000053/000274/p001998.html",
        "notes": "※購入前の事前相談・申請が必要です。医師の意見書が必要です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a6/Emblem_of_Ashikaga%2C_Tochigi.svg/120px-Emblem_of_Ashikaga%2C_Tochigi.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "092037",
    "id": "tochigi-tochigi",
    "pref": "栃木県",
    "city": "栃木市",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "栃木市 軽度・中等度難聴児補聴器購入費等助成事業",
        "amount": "基準額の2/3補助（非課税世帯は全額）",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）",
        "department": "保健福祉部 障がい福祉課",
        "officialUrl": "https://www.city.tochigi.lg.jp/soshiki/8/35575.html",
        "notes": "※購入前の事前申請が必須です。指定医の意見書が必要です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#EFF6FF",
        "badgeColor": "#1D4ED8",
        "title": "栃木市 高齢者補聴器購入費助成事業",
        "amount": "上限 50,000円（購入費用が下回る場合は実費）",
        "condition": "65歳以上のみの世帯、住民税非課税世帯、両耳40dB以上（手帳非該当）、耳鼻咽喉科医師の意見書あり",
        "department": "保健福祉部 高齢介護課 高齢福祉係",
        "officialUrl": "https://www.city.tochigi.lg.jp/soshiki/28/79533.html",
        "notes": "※購入前の事前申請が必須です。認定補聴器技能者在籍店舗等での購入。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4a/Emblem_of_Tochigi%2C_Tochigi.svg/120px-Emblem_of_Tochigi%2C_Tochigi.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "092045",
    "id": "tochigi-sano",
    "pref": "栃木県",
    "city": "佐野市",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "佐野市 軽度・中等度難聴児補聴器購入費等助成事業",
        "amount": "基準額の2/3補助（非課税世帯は全額）",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）",
        "department": "こども福祉部 障がい福祉課",
        "officialUrl": "https://www.city.sano.lg.jp/soshikiichiran/kodomo/shogaifukushika/gyomuannai/10/3686.html",
        "notes": "※購入前の事前申請が必須です。指定医師の意見書が必要です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/69/Emblem_of_Sano%2C_Tochigi.svg/120px-Emblem_of_Sano%2C_Tochigi.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "092088",
    "id": "tochigi-oyama",
    "pref": "栃木県",
    "city": "小山市",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "小山市 軽度・中等度難聴児補聴器購入費等助成事業",
        "amount": "基準額の2/3補助（非課税世帯は全額）",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）",
        "department": "保健福祉部 障害福祉課",
        "officialUrl": "https://www.city.oyama.tochigi.jp/data/doc/1696916128_doc_5_0.pdf",
        "notes": "※購入前の事前申請が必須です。指定医師の意見書が必要です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b4/Emblem_of_Oyama%2C_Tochigi.svg/120px-Emblem_of_Oyama%2C_Tochigi.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "102016",
    "id": "gunma-maebashi",
    "pref": "群馬県",
    "city": "前橋市",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "前橋市 軽度・中等度難聴児補聴器購入費助成事業",
        "amount": "基準額の2/3助成（生活保護世帯等は全額助成）",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）",
        "department": "福祉部 障害福祉課 給付係",
        "officialUrl": "https://www.city.maebashi.gunma.jp/soshiki/fukushibu/shogaifukushi/shinseisho/27639.html",
        "notes": "※購入前の事前申請が必須です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "前橋市 中等度難聴高齢者補聴器購入費助成事業",
        "amount": "上限 25,000円",
        "condition": "65歳以上、中等度難聴（40dB〜70dB未満、手帳非該当）、住民税非課税世帯",
        "department": "福祉部 長寿包括ケア課 地域支援係",
        "officialUrl": "https://www.city.maebashi.gunma.jp/soshiki/fukushibu/chojuhokatsukea/shinseisho/32274.html",
        "notes": "※購入前の事前申請必須です。医師の意見書が必要です。",
        "specialNote": "※住民税非課税世帯のみ対象"
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1a/Emblem_of_Maebashi%2C_Gunma.svg/120px-Emblem_of_Maebashi%2C_Gunma.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "102024",
    "id": "gunma-takasaki",
    "pref": "群馬県",
    "city": "高崎市",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "高崎市 軽度・中等度難聴児補聴器購入費助成事業",
        "amount": "基準額の2/3助成（生活保護世帯等は全額助成）",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）",
        "department": "障害福祉課 支援担当",
        "officialUrl": "https://www.city.takasaki.gunma.jp/page/5729.html",
        "notes": "※購入前の事前申請が必須です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/82/Emblem_of_Takasaki%2C_Gunma.svg/120px-Emblem_of_Takasaki%2C_Gunma.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "102032",
    "id": "gunma-kiryu",
    "pref": "群馬県",
    "city": "桐生市",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "桐生市 難聴児補聴器購入等支援事業",
        "amount": "基準額の2/3補助（非課税世帯は全額）",
        "condition": "18歳未満、両耳30dB以上（手帳非該当）",
        "department": "保健福祉部 障害福祉課",
        "officialUrl": "https://www1.g-reiki.net/city.kiryu/reiki_honbun/e204RG00001207.html",
        "notes": "※購入前の事前申請が必須です。専門医の意見書が必要です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#EFF6FF",
        "badgeColor": "#1D4ED8",
        "title": "桐生市 在宅高齢者環境整備事業（補聴器購入費助成）",
        "amount": "上限 25,000円（実費または25,000円の少ない方）",
        "condition": "65歳以上、市民税非課税世帯、両耳40dB以上70dB未満（手帳非該当）、耳鼻咽喉科専門医意見書あり",
        "department": "保健福祉部 高齢介護課",
        "officialUrl": "https://www.city.kiryu.lg.jp/koureisha/fukushi/1001781.html",
        "notes": "※購入前の事前申請が必須です。1人1回限り。",
        "specialNote": ""
      }
    ],
    "emblemUrl": ""
  },
  {
    "cityCode": "102041",
    "id": "gunma-isesaki",
    "pref": "群馬県",
    "city": "伊勢崎市",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "伊勢崎市 軽度・中等度難聴児補聴器購入支援事業",
        "amount": "基準額の2/3補助（非課税世帯は全額）",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）",
        "department": "健康福祉部 障害福祉課",
        "officialUrl": "https://www.city.isesaki.lg.jp/soshiki/hukusiko/fukushi/13702.html",
        "notes": "※購入前の事前申請が必須です。専門医の受診・意見書が必要です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#EFF6FF",
        "badgeColor": "#1D4ED8",
        "title": "伊勢崎市 高齢者補聴器購入費助成事業",
        "amount": "上限 30,000円（購入費用の1/2）",
        "condition": "65歳以上、市民税非課税世帯、両耳40dB以上70dB未満（手帳非該当）、医師の証明書あり",
        "department": "健康福祉部 長寿社会課",
        "officialUrl": "https://www.city.isesaki.lg.jp/soshiki/tyozyu/senior/seikatusien/service/22991.html",
        "notes": "※購入前の事前申請が必須です。1人1回限り。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/51/Emblem_of_Isesaki%2C_Gunma.svg/120px-Emblem_of_Isesaki%2C_Gunma.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "102059",
    "id": "gunma-ota",
    "pref": "群馬県",
    "city": "太田市",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "太田市 難聴児補聴器購入等支援事業",
        "amount": "基準額の2/3補助（非課税世帯は全額）",
        "condition": "18歳未満、両耳30dB以上（手帳非該当）",
        "department": "福祉こども部 障がい福祉課",
        "officialUrl": "https://www.city.ota.gunma.jp/page/1042913.html",
        "notes": "※購入前の事前申請が必須です。指定医の意見書が必要です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#EFF6FF",
        "badgeColor": "#1D4ED8",
        "title": "太田市 高齢者補聴器購入費助成事業",
        "amount": "上限 30,000円（購入費用の1/2）",
        "condition": "65歳以上、両耳40dB以上70dB未満（手帳非該当）、耳鼻咽喉科医師の意見書あり",
        "department": "福祉こども部 長寿あんしん課",
        "officialUrl": "https://www.city.ota.gunma.jp/page/3807.html",
        "notes": "※購入前の事前申請が必須です。交付決定前の購入は対象外。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1c/Emblem_of_Ota%2C_Gunma.svg/120px-Emblem_of_Ota%2C_Gunma.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "102075",
    "id": "gunma-tatebayashi",
    "pref": "群馬県",
    "city": "館林市",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "館林市 難聴児補聴器購入支援事業補助金",
        "amount": "基準額の2/3補助（非課税世帯は全額）",
        "condition": "18歳未満、両耳30dB以上（手帳非該当）",
        "department": "福齢部 高齢障がい政策課 障がい福祉係",
        "officialUrl": "https://www.city.tatebayashi.gunma.jp/s028/kenko/110/090/040/20200106020000.html",
        "notes": "※購入前の事前申請が必須です。指定検査機関の意見書が必要です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#EFF6FF",
        "badgeColor": "#1D4ED8",
        "title": "館林市 高齢者補聴器購入費補助金",
        "amount": "上限 30,000円（本体購入費用の1/2）",
        "condition": "65歳以上、住民税非課税世帯、両耳40dB以上（手帳非該当）、耳鼻咽喉科医師の意見書あり",
        "department": "福齢部 高齢障がい政策課 高齢者支援係",
        "officialUrl": "https://www.city.tatebayashi.gunma.jp/s030/kenko/120/020/170/20230525145402.html",
        "notes": "※購入前の事前申請が必須です。市税滞納なし。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/ff/Emblem_of_Tatebayashi%2C_Gunma.svg/120px-Emblem_of_Tatebayashi%2C_Gunma.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "111007",
    "id": "saitama-saitama",
    "pref": "埼玉県",
    "city": "さいたま市",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "さいたま市 軽度・中等度難聴児補聴器購入費等助成事業",
        "amount": "基準額の2/3助成（非課税世帯は全額助成）",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）",
        "department": "保健福祉局 障害福祉部 障害福祉課",
        "officialUrl": "https://www.city.saitama.lg.jp/kosodate/shiritai/category10/p103567.html",
        "notes": "※購入前の事前申請が必須です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/17/Emblem_of_Saitama%2C_Saitama.svg/120px-Emblem_of_Saitama%2C_Saitama.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "112011",
    "id": "saitama-kawagoe",
    "pref": "埼玉県",
    "city": "川越市",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "川越市 軽度・中等度難聴児補聴器購入費助成事業",
        "amount": "基準額の2/3助成（市民税非課税世帯は全額助成）",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）",
        "department": "障害福祉課 自立支援担当",
        "officialUrl": "https://www.city.kawagoe.saitama.jp/kenko/fukushi/1006736/1006771/1006794/1006796.html",
        "notes": "※購入前の事前申請が必須です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "川越市 高齢者補聴器購入費補助金",
        "amount": "購入費の1/2（上限 30,000円）",
        "condition": "65歳以上、聴力40dB以上（手帳非該当）、市民税非課税世帯、耳鼻咽喉科医師意見書",
        "department": "高齢者夫婦・支援課 高齢福祉担当",
        "officialUrl": "https://www.city.kawagoe.saitama.jp/kenko/fukushi/1006679/1006705/1013885.html",
        "notes": "※購入前の事前申請必須です。",
        "specialNote": "※市民税非課税世帯のみ対象"
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ab/Emblem_of_Kawagoe%2C_Saitama.svg/120px-Emblem_of_Kawagoe%2C_Saitama.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "112020",
    "id": "saitama-kumagaya",
    "pref": "埼玉県",
    "city": "熊谷市",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "熊谷市 難聴児補聴器購入費助成事業",
        "amount": "基準額の2/3助成（非課税世帯等は全額）",
        "condition": "18歳以下、両耳25dB以上、手帳非該当",
        "department": "福祉部 障害福祉課",
        "officialUrl": "https://www.city.kumagaya.lg.jp/kenkouhukushi/syougaisya/hosougu/nannchoujihochouki.html",
        "notes": "※購入前の事前申請が必須です。指定医の意見書が必要です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7b/%E5%9F%BC%E7%8E%89%E7%9c%8C%E7%86%8A%E8%B0%B7%E5%B8%82%E5%B8%82%E7%AB%A0.svg/120px-%E5%9F%BC%E7%8E%89%E7%9c%8C%E7%86%8A%E8%B0%B7%E5%B8%82%E5%B8%82%E7%AB%A0.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "112038",
    "id": "saitama-kawaguchi",
    "pref": "埼玉県",
    "city": "川口市",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "川口市 軽度・中等度難聴児補聴器購入費助成事業",
        "amount": "基準額の2/3助成（非課税世帯等は全額）",
        "condition": "18歳未満、両耳25dB以上、手帳非該当",
        "department": "福祉部 障がい福祉課",
        "officialUrl": "https://www.city.kawaguchi.lg.jp/soshiki/01070/060/3_1/7945.html",
        "notes": "※購入前の事前申請が必須です。指定医の意見書が必要です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "川口市 高齢者補聴器購入費補助事業",
        "amount": "上限20,000円助成",
        "condition": "65歳以上、市民税非課税または生活保護、両耳40dB〜70dB未満、医師が必要と認める、手帳非該当",
        "department": "福祉部 長寿支援課",
        "officialUrl": "https://www.city.kawaguchi.lg.jp/soshiki/01070/040/4/44600.html",
        "notes": "※購入前の事前申請が必須です。医師の証明書が必要です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c0/%E5%9F%BC%E7%8E%89%E7%9c%8C%E5%B7%9D%E5%8F%A3%E5%B8%82%E5%B8%82%E7%AB%A0.svg/120px-%E5%9F%BC%E7%8E%89%E7%9c%8C%E5%B7%9D%E5%8F%A3%E5%B8%82%E5%B8%82%E7%AB%A0.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "112089",
    "id": "saitama-tokorozawa",
    "pref": "埼玉県",
    "city": "所沢市",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "所沢市 軽度・中等度難聴児補聴器購入費等助成事業",
        "amount": "基準額の2/3助成（非課税世帯等は全額）",
        "condition": "18歳以下、両耳25dB以上、手帳非該当",
        "department": "福祉部 障害福祉課",
        "officialUrl": "https://www.city.tokorozawa.saitama.jp/kenko/syogaifukushi/syogai3/kofuku_20130722134638413.html",
        "notes": "※購入前の事前申請が必須です。指定医の意見書が必要です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/47/Emblem_of_Tokorozawa%2C_Saitama.svg/120px-Emblem_of_Tokorozawa%2C_Saitama.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "112143",
    "id": "saitama-kasukabe",
    "pref": "埼玉県",
    "city": "春日部市",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "春日部市 軽度・中等度難聴児補聴器購入費等助成事業",
        "amount": "基準額の2/3助成（非課税世帯等は全額）",
        "condition": "18歳未満、両耳25dB以上、手帳非該当",
        "department": "福祉部 障がい者支援課",
        "officialUrl": "https://www.city.kasukabe.lg.jp/kenko_hoken_fukushi/shogaishafukushi/nichijoseikatsu_shakaiseikatsunoshien/8600.html",
        "notes": "※購入前の事前申請が必須です。指定医の意見書が必要です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "春日部市 高齢者補聴器購入費補助金",
        "amount": "上限20,000円助成",
        "condition": "65歳以上、市民税非課税世帯、両耳40dB以上、医師が必要と認めた方、手帳非該当",
        "department": "福祉部 介護保険課",
        "officialUrl": "https://www.city.kasukabe.lg.jp/kenko_hoken_fukushi/koreishafukushi/koreishanonichijoseikatsushien/30896.html",
        "notes": "※購入前の事前申請が必須です。指定医師の証明書が必要です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/05/Emblem_of_Kasukabe%2C_Saitama.svg/120px-Emblem_of_Kasukabe%2C_Saitama.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "112151",
    "id": "saitama-sayama",
    "pref": "埼玉県",
    "city": "狭山市",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "狭山市 軽度・中等度難聴児補聴器購入費助成事業",
        "amount": "基準額の2/3助成（非課税世帯等は全額）",
        "condition": "18歳以下、両耳25dB以上、手帳非該当",
        "department": "健康福祉部 障がい者福祉課",
        "officialUrl": "https://www.city.sayama.saitama.jp/fukushi/shogai/joseikyufu/nancho_jido_hochoki.html",
        "notes": "※購入前の事前申請が必須です。指定医の意見書が必要です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5d/%E5%9F%BC%E7%8E%89%E7%9c%8C%E7%8B%AD%E5%B1%B1%E5%B8%82%E5%B8%82%E7%AB%A0.svg/120px-%E5%9F%BC%E7%8E%89%E7%9c%8C%E7%8B%AD%E5%B1%B1%E5%B8%82%E5%B8%82%E7%AB%A0.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "112194",
    "id": "saitama-ageo",
    "pref": "埼玉県",
    "city": "上尾市",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "上尾市 軽度・中等度難聴児補聴器購入費等助成事業",
        "amount": "基準額の2/3助成（非課税世帯等は全額）",
        "condition": "18歳以下、両耳25dB以上、手帳非該当",
        "department": "保健福祉部 障害福祉課",
        "officialUrl": "https://www.city.ageo.lg.jp/page/027213031501.html",
        "notes": "※購入前の事前申請が必須です。指定医の意見書が必要です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "上尾市 高齢者補聴器購入費助成事業",
        "amount": "上限20,000円助成",
        "condition": "65歳以上、聴力レベル40dB以上、医師が補聴器の必要性を認める、手帳非該当",
        "department": "保健福祉部 高齢介護課",
        "officialUrl": "https://www.city.ageo.lg.jp/page/419727.html",
        "notes": "※購入前の事前申請が必須です。指定医師の証明書が必要です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f3/Emblem_of_Ageo%2C_Saitama.svg/120px-Emblem_of_Ageo%2C_Saitama.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "112216",
    "id": "saitama-soka",
    "pref": "埼玉県",
    "city": "草加市",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "草加市 軽度・中等度難聴児補聴器購入費等助成事業",
        "amount": "基準額の2/3助成（非課税世帯等は全額）",
        "condition": "18歳以下、両耳25dB以上、手帳非該当",
        "department": "健康福祉部 障がい福祉課",
        "officialUrl": "https://www.city.soka.saitama.jp/cont/s1601/010/010/050/PAGE000000000000033858.html",
        "notes": "※購入前の事前申請が必須です。指定医の意見書が必要です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "草加市 高齢者補聴器購入費補助事業",
        "amount": "実費補助（上限20,000円）",
        "condition": "65歳以上、住民税非課税、医師が補聴器の必要性を認めた方、手帳非該当",
        "department": "健康福祉部 長寿支援課",
        "officialUrl": "https://www.city.soka.saitama.jp/cont/s1502/020/010/040/PAGE000000000000076454.html",
        "notes": "※購入前の事前申請が必須です。指定医師の証明書が必要です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/dd/Emblem_of_Soka%2C_Saitama.svg/120px-Emblem_of_Soka%2C_Saitama.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "112224",
    "id": "saitama-koshigaya",
    "pref": "埼玉県",
    "city": "越谷市",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "越谷市 軽度・中等度難聴児補聴器購入費助成事業",
        "amount": "基準額の2/3助成（市民税非課税世帯等は全額助成）",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）",
        "department": "障害福祉課 支援係",
        "officialUrl": "https://www.city.koshigaya.saitama.jp/kurashi_shisei/fukushi/syogaisien/joseigenmen/koshigaya_contents_211410256.html",
        "notes": "※購入前の事前申請が必須です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "越谷市 高齢者補聴器購入費助成事業",
        "amount": "上限 30,000円",
        "condition": "65歳以上、聴力40dB以上（手帳非該当）、住民税非課税世帯、医師意見書",
        "department": "地域包括ケア推進課 高齢福祉係",
        "officialUrl": "https://www.city.koshigaya.saitama.jp/kurashi_shisei/fukushi/koureisha/zaitakufukushi/koshigaya_contents_hochouki.html",
        "notes": "※購入前の事前申請必須です。",
        "specialNote": "※住民税非課税世帯のみ対象"
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f3/Emblem_of_Koshigaya%2C_Saitama.svg/120px-Emblem_of_Koshigaya%2C_Saitama.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "112241",
    "id": "saitama-toda",
    "pref": "埼玉県",
    "city": "戸田市",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "戸田市 軽度・中等度難聴児補聴器購入費助成事業",
        "amount": "基準額の2/3助成（非課税世帯等は全額）",
        "condition": "18歳未満、両耳25dB以上、手帳非該当",
        "department": "福祉部 障がい福祉課",
        "officialUrl": "https://www.city.toda.saitama.jp/soshiki/233/syogaifuku-nanchoji-hochoki.html",
        "notes": "※購入前の事前申請が必須です。指定医の意見書が必要です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "戸田市 高齢者補聴器購入費助成事業",
        "amount": "上限40,000円助成",
        "condition": "65歳以上、両耳40dB以上、医師が必要と認める、手帳非該当",
        "department": "福祉部 長寿介護課",
        "officialUrl": "https://www.city.toda.saitama.jp/soshiki/234/chojukaigo-shien-zaitakufukusi.html",
        "notes": "※購入前の事前申請が必須です。指定医師の意見書が必要です。",
        "specialNote": "【手厚い上限40,000円】"
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/03/Emblem_of_Toda%2C_Saitama.svg/120px-Emblem_of_Toda%2C_Saitama.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "112275",
    "id": "saitama-asaka",
    "pref": "埼玉県",
    "city": "朝霞市",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "朝霞市 軽度・中等度難聴児補聴器購入費等助成事業",
        "amount": "基準額の2/3助成（非課税世帯等は全額）",
        "condition": "18歳未満、両耳25dB以上、手帳非該当、所得制限あり",
        "department": "福祉部 障害福祉課",
        "officialUrl": "https://www.city.asaka.lg.jp/soshiki/50/nanncyoujihocyoukikounyuuhijyoseijigyou.html",
        "notes": "※購入前の事前申請が必須です。指定医の意見書が必要です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/46/Emblem_of_Asaka%2C_Saitama.svg/120px-Emblem_of_Asaka%2C_Saitama.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "112305",
    "id": "saitama-niiza",
    "pref": "埼玉県",
    "city": "新座市",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "新座市 軽度・中等度難聴児補聴器購入費助成事業",
        "amount": "基準額の2/3助成（非課税世帯等は全額）",
        "condition": "18歳以下、両耳25dB以上、手帳非該当",
        "department": "福祉部 障がい者福祉課",
        "officialUrl": "https://www.city.niiza.lg.jp/soshiki/24/nantyouzihotyouki.html",
        "notes": "※購入前の事前申請が必須です。指定医の意見書が必要です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0b/Emblem_of_Niiza%2C_Saitama.svg/120px-Emblem_of_Niiza%2C_Saitama.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "112321",
    "id": "saitama-kuki",
    "pref": "埼玉県",
    "city": "久喜市",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "久喜市 軽度・中等度難聴児補聴器購入費等助成事業",
        "amount": "基準額の2/3助成（非課税世帯等は全額）",
        "condition": "18歳以下、両耳25dB以上、手帳非該当",
        "department": "福祉部 障がい者福祉課",
        "officialUrl": "https://www.city.kuki.lg.jp/kenko/shogai/shogai_service/1004026.html",
        "notes": "※購入前の事前申請が必須です。指定医の意見書が必要です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/62/Emblem_of_Kuki%2C_Saitama.svg/120px-Emblem_of_Kuki%2C_Saitama.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "112453",
    "id": "saitama-fujimino",
    "pref": "埼玉県",
    "city": "ふじみ野市",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "ふじみ野市 軽度・中等度難聴児補聴器購入費助成事業",
        "amount": "基準額の2/3助成（非課税世帯等は全額）",
        "condition": "18歳未満、両耳70dB未満、手帳非該当、所得制限あり",
        "department": "福祉部 障がい福祉課",
        "officialUrl": "https://www.city.fujimino.saitama.jp/soshikiichiran/shogaifukushika/shogaifukushigakari/seikatusien/1436.html",
        "notes": "※購入前の事前申請が必須です。指定医の意見書が必要です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/43/Emblem_of_Fujimino%2C_Saitama.svg/120px-Emblem_of_Fujimino%2C_Saitama.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "121002",
    "id": "chiba-chiba",
    "pref": "千葉県",
    "city": "千葉市",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "千葉市 軽度・中等度難聴児補聴器購入費助成事業",
        "amount": "基準額の2/3補助（非課税世帯は全額）",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）",
        "department": "保健福祉局 高齢障害部 障害福祉課",
        "officialUrl": "https://www.city.chiba.jp/hokenfukushi/koreishogai/jiritsu/documents/r7nanchouyoukou.pdf",
        "notes": "※事前申請が必須です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/39/Emblem_of_Chiba%2C_Chiba.svg/120px-Emblem_of_Chiba%2C_Chiba.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "122033",
    "id": "chiba-ichikawa",
    "pref": "千葉県",
    "city": "市川市",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "市川市 軽度・中等度難聴児補聴器購入費助成事業",
        "amount": "補助基準額の約2/3助成（非課税世帯等は全額）",
        "condition": "18歳未満、両耳30dB以上70dB未満、手帳非該当",
        "department": "福祉部 障がい者支援課",
        "officialUrl": "https://www.city.ichikawa.lg.jp/page/7892.html",
        "notes": "※購入前の事前申請が必須です。指定医の意見書が必要です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "市川市 高齢者補聴器購入費助成事業",
        "amount": "上限30,000円助成",
        "condition": "65歳以上、市民税非課税世帯、耳鼻科医師が必要と証明、手帳非該当",
        "department": "福祉部 地域包括支援課",
        "officialUrl": "https://www.city.ichikawa.lg.jp/page/7501.html",
        "notes": "※購入前の事前申請が必須です。指定医師の証明書が必要です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/96/%E5%8D%83%E8%91%89%E7%9c%8C%E5%B8%82%E5%B7%9D%E5%B8%82%E5%B8%82%E7%AB%A0.svg/120px-%E5%8D%83%E8%91%89%E7%9c%8C%E5%B8%82%E5%B7%9D%E5%B8%82%E5%B8%82%E7%AB%A0.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "122041",
    "id": "chiba-funabashi",
    "pref": "千葉県",
    "city": "船橋市",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "船橋市 軽度・中等度難聴児補聴器購入費助成事業",
        "amount": "基準額の2/3助成（市民税非課税世帯等は全額助成）",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）",
        "department": "療育支援課",
        "officialUrl": "https://www.city.funabashi.lg.jp/kodomo/hattatsu/002/p022920.html",
        "notes": "※購入前の事前申請が必須です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "船橋市 高齢者補聴器購入費用助成事業",
        "amount": "上限 30,000円（本体購入費用）",
        "condition": "65歳以上、手帳非該当、市民税所得割非課税世帯、耳鼻咽喉科医師の証明",
        "department": "健康福祉局 高齢者福祉課 支援係",
        "officialUrl": "https://www.city.funabashi.lg.jp/kenkou/koureisha/002/p001774.html",
        "notes": "※購入後1年以内の事後申請が可能です（医師の証明書等が必要）。",
        "specialNote": "※購入後1年以内申請可（所得割非課税世帯）"
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7b/Emblem_of_Funabashi%2C_Chiba.svg/120px-Emblem_of_Funabashi%2C_Chiba.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "122076",
    "id": "chiba-matsudo",
    "pref": "千葉県",
    "city": "松戸市",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "松戸市 軽度・中等度難聴児補聴器購入費助成事業",
        "amount": "基準額の2/3助成（非課税世帯等は全額）",
        "condition": "18歳未満、両耳30dB以上70dB未満、手帳非該当",
        "department": "子ども部 障害福祉課",
        "officialUrl": "https://www.city.matsudo.chiba.jp/kenko_fukushi/shougaifukushi/kakushuteate/yougu-jyosei/hotyouki.html",
        "notes": "※購入前の事前申請が必須です。指定医の意見書が必要です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "松戸市 高齢者補聴器購入費助成事業",
        "amount": "上限30,000円助成",
        "condition": "65歳以上、市民税非課税世帯、医師の診断、手帳非該当",
        "department": "福祉長寿部 高齢者支援課",
        "officialUrl": "https://www.city.matsudo.chiba.jp/matsudodeikiiki/mokuteki/seikatsushien/hotyoukijyosei.html",
        "notes": "※購入前の事前申請が必須です。指定医師の証明書が必要です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d0/Emblem_of_Matsudo%2C_Chiba.svg/120px-Emblem_of_Matsudo%2C_Chiba.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "122084",
    "id": "chiba-noda",
    "pref": "千葉県",
    "city": "野田市",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "野田市 軽度・中等度難聴児補聴器購入費助成事業",
        "amount": "基準額の2/3助成（非課税世帯等は全額）",
        "condition": "18歳未満、両耳30dB以上70dB未満、手帳非該当",
        "department": "児童家庭部 児童家庭課",
        "officialUrl": "https://www.city.noda.chiba.jp/kosodate/1017985/1018024.html",
        "notes": "※購入前の事前申請が必須です。指定医の意見書が必要です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/de/%E5%8D%83%E8%91%89%E7%9c%8C%E9%87%8E%E7%94%B0%E5%B8%82%E5%B8%82%E7%AB%A0.svg/120px-%E5%8D%83%E8%91%89%E7%9c%8C%E9%87%8E%E7%94%B0%E5%B8%82%E5%B8%82%E7%AB%A0.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "122114",
    "id": "chiba-narita",
    "pref": "千葉県",
    "city": "成田市",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "成田市 軽度・中等度難聴児補聴器購入費助成事業",
        "amount": "基準額の2/3助成（非課税世帯等は全額）",
        "condition": "18歳未満、指定医が必要と認めた方、手帳非該当",
        "department": "健康福祉部 障がい福祉課",
        "officialUrl": "https://www.city.narita.chiba.jp/kenko_fukushi/page130400.html",
        "notes": "※購入前の事前申請が必須です。指定医の意見書が必要です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/54/Emblem_of_Narita%2C_Chiba.svg/120px-Emblem_of_Narita%2C_Chiba.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "122122",
    "id": "chiba-sakura",
    "pref": "千葉県",
    "city": "佐倉市",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "佐倉市 軽度・中等度難聴児補聴器購入費等助成事業",
        "amount": "基準額の2/3助成（非課税世帯等は全額）",
        "condition": "18歳未満、両耳30dB以上、手帳非該当",
        "department": "福祉部 障害福祉課",
        "officialUrl": "https://www.city.sakura.lg.jp/soshiki/shogaifukushika/18153/18552.html",
        "notes": "※購入前の事前申請が必須です。指定医の意見書が必要です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a3/Emblem_of_Sakura%2C_Chiba.svg/120px-Emblem_of_Sakura%2C_Chiba.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "122165",
    "id": "chiba-narashino",
    "pref": "千葉県",
    "city": "習志野市",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "習志野市 軽度・中等度難聴児補聴器購入費助成事業",
        "amount": "基準額の2/3助成（非課税世帯等は全額）",
        "condition": "18歳未満、両耳30dB以上70dB未満、手帳非該当",
        "department": "健康福祉部 障がい福祉課",
        "officialUrl": "https://www.city.narashino.lg.jp/soshiki/shogaifukushi/gyomu/shogaishafukushi/nichijyo/hocyouki.html",
        "notes": "※購入前の事前申請が必須です。指定医の意見書が必要です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "習志野市 高齢者補聴器購入費助成事業",
        "amount": "上限20,000円助成",
        "condition": "65歳以上、市民税非課税、医師が必要と認める、手帳非該当",
        "department": "健康福祉部 高齢者支援課",
        "officialUrl": "https://www.city.narashino.lg.jp/soshiki/koreisha_shien/gyomu/koreisha/shien/26885.html",
        "notes": "※購入前の事前申請が必須です。指定医師の証明書が必要です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/33/Emblem_of_Narashino%2C_Chiba.svg/120px-Emblem_of_Narashino%2C_Chiba.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "122173",
    "id": "chiba-kashiwa",
    "pref": "千葉県",
    "city": "柏市",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "柏市 軽度・中等度難聴児補聴器購入費助成事業",
        "amount": "基準額の2/3助成（非課税世帯等は全額助成）",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）",
        "department": "障害福祉課 自立支援担当",
        "officialUrl": "https://www.city.kashiwa.lg.jp/shogaifukushi/kaigo/shougaishien/nichijoshien/1381.html",
        "notes": "※購入前の事前申請が必須です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/30/Emblem_of_Kashiwa%2C_Chiba.svg/120px-Emblem_of_Kashiwa%2C_Chiba.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "122190",
    "id": "chiba-ichihara",
    "pref": "千葉県",
    "city": "市原市",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "市原市 軽度・中等度難聴児補聴器購入費助成事業",
        "amount": "基準額の2/3助成（非課税世帯等は全額）",
        "condition": "18歳未満、両耳30dB以上70dB未満、手帳非該当",
        "department": "保健福祉部 障がい者支援課",
        "officialUrl": "https://www.city.ichihara.chiba.jp/article?articleId=6662b4d63d677f0b8cb01542",
        "notes": "※購入前の事前申請が必須です。指定医の意見書が必要です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "市原市 高齢者補聴器購入費助成事業",
        "amount": "上限30,000円助成",
        "condition": "65歳以上、市県民税非課税世帯、医師の証明、手帳非該当",
        "department": "保健福祉部 高齢者支援課",
        "officialUrl": "https://www.city.ichihara.chiba.jp/article?articleId=67c78fee56a83416c571f0d3",
        "notes": "※購入前の事前申請が必須です。指定医師の証明書が必要です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c3/Emblem_of_Ichihara%2C_Chiba.svg/120px-Emblem_of_Ichihara%2C_Chiba.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "122203",
    "id": "chiba-nagareyama",
    "pref": "千葉県",
    "city": "流山市",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "流山市 軽度・中等度難聴児補聴器購入費等助成事業",
        "amount": "基準額の2/3助成（非課税世帯等は全額）",
        "condition": "18歳未満、両耳30dB以上70dB未満、手帳非該当",
        "department": "健康福祉部 障害者支援課",
        "officialUrl": "https://www.city.nagareyama.chiba.jp/life/1000974/1000984/1001002.html",
        "notes": "※購入前の事前申請が必須です。指定医の意見書が必要です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "流山市 高齢者補聴器購入費助成事業",
        "amount": "上限30,000円助成",
        "condition": "65歳以上、市民税非課税世帯等、両耳40dB以上70dB未満、手帳非該当",
        "department": "健康福祉部 高齢者生きがい推進課",
        "officialUrl": "https://www.city.nagareyama.chiba.jp/life/1000909/1000912/1049236.html",
        "notes": "※購入前の事前申請が必須です。指定医の証明書が必要です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/89/%E5%8D%83%E8%91%89%E7%9C%8C%E6%B5%81%E5%B1%B1%E5%B8%82%E5%B8%82%E7%AB%A0.svg/120px-%E5%8D%83%E8%91%89%E7%9C%8C%E6%B5%81%E5%B1%B1%E5%B8%82%E5%B8%82%E7%AB%A0.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "122211",
    "id": "chiba-yachiyo",
    "pref": "千葉県",
    "city": "八千代市",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "八千代市 軽度・中等度難聴児補聴器購入費助成事業",
        "amount": "基準額の2/3助成（非課税世帯等は全額）",
        "condition": "18歳未満、指定医が効果を認める、手帳非該当",
        "department": "健康福祉部 障害者支援課",
        "officialUrl": "https://www.city.yachiyo.lg.jp/soshiki/26/49866.html",
        "notes": "※購入前の事前申請が必須です。指定医の意見書が必要です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/21/Emblem_of_Yachiyo%2C_Chiba.svg/120px-Emblem_of_Yachiyo%2C_Chiba.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "122220",
    "id": "chiba-abiko",
    "pref": "千葉県",
    "city": "我孫子市",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "我孫子市 軽度・中等度難聴児補聴器購入費助成事業",
        "amount": "基準額の2/3助成（非課税世帯等は全額）",
        "condition": "18歳未満、両耳30dB以上70dB未満、手帳非該当",
        "department": "健康福祉部 障害福祉課",
        "officialUrl": "https://www.city.abiko.chiba.jp/kenko/shogaishafukushi/josei_service/service/nancho.html",
        "notes": "※購入前の事前申請が必須です。指定医の意見書が必要です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f7/Emblem_of_Abiko%2C_Chiba.svg/120px-Emblem_of_Abiko%2C_Chiba.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "122246",
    "id": "chiba-kamagaya",
    "pref": "千葉県",
    "city": "鎌ケ谷市",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "鎌ケ谷市 軽度・中等度難聴児補聴器購入費等助成事業",
        "amount": "基準額の2/3助成（非課税世帯等は全額）",
        "condition": "18歳未満、両耳30dB以上70dB未満、手帳非該当",
        "department": "健康福祉部 障がい福祉課",
        "officialUrl": "https://www.city.kamagaya.chiba.jp/smph/kenko-fukushi/shougaishafukushi/seikatsu_enjyo/nanchouzihochouki.html",
        "notes": "※購入前の事前申請が必須です。指定医の意見書が必要です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "鎌ケ谷市 高齢者補聴器購入費助成事業",
        "amount": "上限20,000円助成（実費2万円未満は実費）",
        "condition": "65歳以上、住民税非課税、医師が必要と認めた方、手帳非該当",
        "department": "健康福祉部 高齢者支援課",
        "officialUrl": "https://www.city.kamagaya.chiba.jp/smph/kenko-fukushi/koureishafukushi/teate/hocyoukijyosei.html",
        "notes": "※購入前の事前申請が必須です。指定医師の証明書が必要です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8c/Emblem_of_Kamagaya%2C_Chiba.svg/120px-Emblem_of_Kamagaya%2C_Chiba.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "122271",
    "id": "chiba-urayasu",
    "pref": "千葉県",
    "city": "浦安市",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "浦安市 軽度・中等度難聴児補聴器購入等補助事業",
        "amount": "基準額の2/3助成（非課税世帯等は全額）",
        "condition": "18歳未満、両耳30dB以上70dB未満、手帳非該当",
        "department": "福祉部 障がい福祉課",
        "officialUrl": "https://www.city.urayasu.lg.jp/fukushi/shogai/enjo/yougu/1015715.html",
        "notes": "※購入前の事前申請が必須です。指定医の意見書が必要です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "浦安市 高齢者補聴器購入費助成事業",
        "amount": "上限35,000円助成",
        "condition": "65歳以上、市民税非課税、医師が補聴器の必要を認める、手帳非該当",
        "department": "福祉部 高齢者福祉課",
        "officialUrl": "https://www.city.urayasu.lg.jp/fukushi/koureisha/josei/iryo/1001204.html",
        "notes": "※購入前の事前申請が必須です。指定医師の証明書が必要です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/01/Emblem_of_Urayasu%2C_Chiba.svg/120px-Emblem_of_Urayasu%2C_Chiba.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "131016",
    "id": "tokyo-chiyoda",
    "pref": "東京都",
    "city": "千代田区",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "千代田区 軽度・中等度難聴児補聴器購入費助成事業",
        "amount": "基準額の範囲内で全額助成（自己負担なし）",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）、区内在住",
        "department": "保健福祉部 障害者福祉課 障害者給付係",
        "officialUrl": "https://www.city.chiyoda.lg.jp/koho/kenko/shogaisha/techo/sonota-service/hochoki.html",
        "notes": "※購入前の事前申請が必須です。指定医師の意見書が必要です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（60歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "千代田区 高齢者補聴器購入費の助成",
        "amount": "非課税世帯：最大 144,900円 ／ 課税世帯：最大 72,450円",
        "condition": "60歳以上、中等度難聴と診断、手帳非該当、過去に助成未受給",
        "department": "保健福祉部 高齢介護課 高齢者支援係",
        "officialUrl": "https://www.city.chiyoda.lg.jp/koho/kenko/koresha/sasaeai/hochoki-konyuhi.html",
        "notes": "※購入前の事前申請が必須です。指定医療機関での受診・見積もりが必要です。",
        "specialNote": "※対象: 60歳以上 / ※課税世帯も助成あり"
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b4/Emblem_of_Chiyoda%2C_Tokyo.svg/120px-Emblem_of_Chiyoda%2C_Tokyo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "131024",
    "id": "tokyo-chuo",
    "pref": "東京都",
    "city": "中央区",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "中央区 軽度・中等度難聴児補聴器購入費助成事業",
        "amount": "基準額の9割助成（非課税・生活保護世帯は10割）",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）",
        "department": "福祉保健部 障害者福祉課 相談支援係",
        "officialUrl": "https://www.city.chuo.lg.jp/a0023/kenkouiryou/shougaishafukushi/shienservice/fujiyuunakata/tyutoudonantyo.html",
        "notes": "※購入前申請必須。指定医の意見書が必要です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "中央区 高齢者補聴器購入費助成事業",
        "amount": "上限 25,000円（本体購入費用）",
        "condition": "65歳以上、手帳非該当、耳鼻咽喉科医師による証明がある方",
        "department": "福祉保健部 高齢者支援課 支援係",
        "officialUrl": "https://www.city.chuo.lg.jp/a0028/kenkouiryou/koureikaigo/zaitakuiryou/zaitakushienservice/sonota/hotyoki.html",
        "notes": "※購入前申請必須。医師の証明書受領後に区へ申請します。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/45/Emblem_of_Chuo%2C_Tokyo.svg/120px-Emblem_of_Chuo%2C_Tokyo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "131032",
    "id": "tokyo-minato",
    "pref": "東京都",
    "city": "港区",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "港区 軽度・中等度難聴児補聴器購入費助成事業",
        "amount": "基準額の全額（自己負担なし）",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）",
        "department": "保健福祉支援部 障害者福祉課 障害福祉係",
        "officialUrl": "https://www.city.minato.tokyo.jp/kenko/fukushi/shogaisha/nichijosekatsu/chudo-nancho.html",
        "notes": "※購入前の事前申請が必須です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（60歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "港区 高齢者補聴器購入費助成事業",
        "amount": "非課税：最大 144,900円 ／ 課税：最大 72,450円",
        "condition": "60歳以上、手帳非該当、日常生活に支障があり補聴器相談医が必要と認めた方",
        "department": "保健福祉支援部 高齢福祉課 在宅支援係",
        "officialUrl": "https://www.city.minato.tokyo.jp/zaitakushien/koureisya/hoctyouki/hotyoukijyosei.html",
        "notes": "※購入前の事前申請が必須です。区指定の相談医受診が必要です。",
        "specialNote": "※対象: 60歳以上"
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/73/Emblem_of_Minato%2C_Tokyo.svg/120px-Emblem_of_Minato%2C_Tokyo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "131041",
    "id": "tokyo-shinjuku",
    "pref": "東京都",
    "city": "新宿区",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "新宿区 軽度・中等度難聴児補聴器購入費助成事業",
        "amount": "基準額の全額助成（自己負担なし）",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）",
        "department": "福祉部 障害者福祉課 相談指導係",
        "officialUrl": "https://www.city.shinjuku.lg.jp/fukushi/shogai01_001043.html",
        "notes": "※購入前の事前申請が必須です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "新宿区 高齢者補聴器購入費助成事業",
        "amount": "上限 45,000円",
        "condition": "65歳以上、手帳非該当、補聴器相談医の受診証明",
        "department": "福祉部 高齢者福祉課 相談支援係",
        "officialUrl": "https://www.city.shinjuku.lg.jp/fukushi/file05_02_00009.html",
        "notes": "※購入前の事前申請が必須です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e6/Emblem_of_Shinjuku%2C_Tokyo.svg/120px-Emblem_of_Shinjuku%2C_Tokyo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "131059",
    "id": "tokyo-bunkyo",
    "pref": "東京都",
    "city": "文京区",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "文京区 軽度・中等度難聴児補聴器購入費助成事業",
        "amount": "基準額の全額助成（自己負担なし）",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）",
        "department": "福祉部 障害福祉課 給付係",
        "officialUrl": "https://www.city.bunkyo.lg.jp/b018/p003387.html",
        "notes": "※購入前の事前申請が必須です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "文京区 高齢者補聴器購入費助成事業",
        "amount": "上限 35,000円（非課税世帯は上限50,000円）",
        "condition": "65歳以上、手帳非該当、耳鼻科受診証明",
        "department": "福祉部 高齢福祉課 高齢者支援係",
        "officialUrl": "https://www.city.bunkyo.lg.jp/b017/p003186.html",
        "notes": "※購入前申請必須です。",
        "specialNote": "※課税世帯も助成あり"
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2b/Emblem_of_Bunkyo%2C_Tokyo.svg/120px-Emblem_of_Bunkyo%2C_Tokyo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "131067",
    "id": "tokyo-taito",
    "pref": "東京都",
    "city": "台東区",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "台東区 軽度・中等度難聴児補聴器購入費助成事業",
        "amount": "基準額の全額助成",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）",
        "department": "福祉保健部 障害福祉課 給付係",
        "officialUrl": "https://www.city.taito.lg.jp/kenkohukusi/shogai/service/enjo/ji/tyuutoudo.html",
        "notes": "※事前申請必須です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "台東区 高齢者補聴器購入費助成事業",
        "amount": "上限 30,000円（非課税世帯上限45,000円）",
        "condition": "65歳以上、手帳非該当、耳鼻科医師意見書",
        "department": "福祉保健部 高齢福祉課 相談支援係",
        "officialUrl": "https://www.city.taito.lg.jp/kenkohukusi/korei/serviceannai/kyuuhujosei/kikoe.html",
        "notes": "※事前申請必須です。",
        "specialNote": "※課税世帯も助成あり"
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2b/Emblem_of_Taito%2C_Tokyo.svg/120px-Emblem_of_Taito%2C_Tokyo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "131075",
    "id": "tokyo-sumida",
    "pref": "東京都",
    "city": "墨田区",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "墨田区 軽度・中等度難聴児補聴器購入費助成事業",
        "amount": "基準額の全額助成",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）",
        "department": "福祉保健部 障害者福祉課 給付係",
        "officialUrl": "https://www.city.sumida.lg.jp/kenko_fukushi/syougai/otetudai/nanchouji.html",
        "notes": "※事前申請必須です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "墨田区 高齢者補聴器購入費助成事業",
        "amount": "非課税世帯：最大 144,900円 ／ 課税世帯：最大 72,450円",
        "condition": "65歳以上、手帳非該当、補聴器相談医の証明",
        "department": "福祉保健部 高齢者福祉課 支援係",
        "officialUrl": "https://www.city.sumida.lg.jp/kenko_fukushi/koureisya_kaigohoken/ziritu_sien/ta90200020150714170.html",
        "notes": "※購入前の事前申請が必須です。",
        "specialNote": "※課税世帯も助成あり"
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1c/Emblem_of_Sumida%2C_Tokyo.svg/120px-Emblem_of_Sumida%2C_Tokyo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "131083",
    "id": "tokyo-koto",
    "pref": "東京都",
    "city": "江東区",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "江東区 軽度・中等度難聴児補聴器購入費助成事業",
        "amount": "基準額の9割〜全額助成",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）",
        "department": "福祉部 障害者支援課 給付係",
        "officialUrl": "https://www.city.koto.lg.jp/222020/fukushi/shogaisha/waribiki/jose/79553.html",
        "notes": "※事前申請必須です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "江東区 高齢者補聴器購入費助成事業",
        "amount": "上限 25,000円（非課税世帯は上限50,000円）",
        "condition": "65歳以上、手帳非該当、補聴器相談医意見書",
        "department": "福祉部 長寿応援課 相談係",
        "officialUrl": "https://www.city.koto.lg.jp/212106/fukushi/koresha/service/jisshi/6597.html",
        "notes": "※購入前の事前申請が必須です。",
        "specialNote": "※課税世帯も助成あり"
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/72/Emblem_of_Koto%2C_Tokyo.svg/120px-Emblem_of_Koto%2C_Tokyo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "131091",
    "id": "tokyo-shinagawa",
    "pref": "東京都",
    "city": "品川区",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "品川区 軽度・中等度難聴児補聴器購入費助成事業",
        "amount": "基準額の全額助成",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）",
        "department": "福祉保健部 障害者支援課 給付係",
        "officialUrl": "https://www.city.shinagawa.tokyo.jp/kenko/shogai/1009478/1002707/1002714.html",
        "notes": "※事前申請必須です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "品川区 高齢者補聴器購入費助成事業",
        "amount": "上限 35,000円（非課税世帯は上限70,000円）",
        "condition": "65歳以上、手帳非該当、耳鼻科受診証明",
        "department": "福祉保健部 高齢者福祉課 在宅係",
        "officialUrl": "https://www.city.shinagawa.tokyo.jp/kenko/koreisha/1009473/1002486.html",
        "notes": "※購入前申請必須です。",
        "specialNote": "※課税世帯も助成あり"
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f8/Emblem_of_Shinagawa%2C_Tokyo.svg/120px-Emblem_of_Shinagawa%2C_Tokyo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "131105",
    "id": "tokyo-meguro",
    "pref": "東京都",
    "city": "目黒区",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "目黒区 軽度・中等度難聴児補聴器購入費助成事業",
        "amount": "基準額の全額助成",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）",
        "department": "健康福祉部 障害福祉課 給付係",
        "officialUrl": "https://www.city.meguro.tokyo.jp/shougaishien/kenkoufukushi/shougaisha/tyutoudonanchouji.html",
        "notes": "※事前申請必須です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "目黒区 高齢者補聴器購入費助成事業",
        "amount": "非課税世帯：最大 144,900円 ／ 課税世帯：最大 72,450円",
        "condition": "65歳以上、手帳非該当、耳鼻咽喉科医師意見書",
        "department": "健康福祉部 高齢福祉課 相談係",
        "officialUrl": "https://www.city.meguro.tokyo.jp/kenkoufukushi/koureisha/koureishashien/josei/index.html",
        "notes": "※購入前申請必須です。",
        "specialNote": "※課税世帯も助成あり"
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/98/Emblem_of_Meguro%2C_Tokyo.svg/120px-Emblem_of_Meguro%2C_Tokyo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "131113",
    "id": "tokyo-ota",
    "pref": "東京都",
    "city": "大田区",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "大田区 軽度・中等度難聴児補聴器購入費助成事業",
        "amount": "基準額の全額助成",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）",
        "department": "福祉部 障害福祉課 給付担当",
        "officialUrl": "https://www.city.ota.tokyo.jp/seikatsu/fukushi/shougai/seikatsushien/otetsudai/otetsudai/cyuutodo-nantyouji.html",
        "notes": "※事前申請必須です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "大田区 高齢者補聴器購入費助成事業",
        "amount": "上限 44,000円（非課税世帯は上限88,000円）",
        "condition": "65歳以上、手帳非該当、相談医意見書",
        "department": "福祉部 高齢福祉課 高齢者支援担当",
        "officialUrl": "https://www.city.ota.tokyo.jp/seikatsu/fukushi/kourei/kyufu/hocyouki.html",
        "notes": "※事前申請必須です。",
        "specialNote": "※課税世帯も助成あり"
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/db/Emblem_of_%C5%8Cta%2C_Tokyo.svg/120px-Emblem_of_%C5%8Cta%2C_Tokyo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "131121",
    "id": "tokyo-setagaya",
    "pref": "東京都",
    "city": "世田谷区",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "世田谷区 軽度・中等度難聴児補聴器購入費助成事業",
        "amount": "基準額の全額助成（自己負担なし）",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）",
        "department": "障害福祉部 障害施策推進課",
        "officialUrl": "https://www.city.setagaya.lg.jp/02083/2719.html",
        "notes": "※事前申請必須です。各総合支所保健福祉課で受付。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "世田谷区 高齢者補聴器購入費助成事業",
        "amount": "非課税世帯：最大 144,900円 ／ 課税世帯：最大 72,450円",
        "condition": "65歳以上、手帳非該当、補聴器相談医意見書",
        "department": "高齢福祉部 高齢福祉課",
        "officialUrl": "https://www.city.setagaya.lg.jp/02082/10803.html",
        "notes": "※購入前の事前申請が必須です。",
        "specialNote": "※課税世帯も助成あり"
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e7/Emblem_of_Setagaya%2C_Tokyo.svg/120px-Emblem_of_Setagaya%2C_Tokyo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "131130",
    "id": "tokyo-shibuya",
    "pref": "東京都",
    "city": "渋谷区",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "渋谷区 中等度難聴児発達支援事業（補聴器購入費助成）",
        "amount": "基準額の9/10（非課税世帯等は全額助成）",
        "condition": "18歳未満、両耳30dB以上（手帳非該当）、所得制限あり",
        "department": "福祉部 障がい者福祉課 身体福祉係",
        "officialUrl": "https://www.city.shibuya.tokyo.jp/kenko/shogai-seikatsu/shogaiji-shien/tyutodonantyo.html",
        "notes": "※事前申請必須です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "渋谷区 高齢者補聴器購入費助成事業",
        "amount": "上限 72,000円",
        "condition": "65歳以上、手帳非該当、耳鼻咽喉科医師意見書、非課税または合計所得135万円以下",
        "department": "福祉部 高齢者福祉課 高齢者支援係",
        "officialUrl": "https://www.city.shibuya.tokyo.jp/kenko/koreisha-fukushi/koreisha-shien/hochoki.html",
        "notes": "※事前申請必須です。",
        "specialNote": "※所得制限あり（合計所得135万円以下）"
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c7/Emblem_of_Shibuya%2C_Tokyo.svg/120px-Emblem_of_Shibuya%2C_Tokyo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "131148",
    "id": "tokyo-nakano",
    "pref": "東京都",
    "city": "中野区",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "中野区 軽度・中等度難聴児補聴器購入費助成事業",
        "amount": "基準額の9/10（非課税世帯等は全額助成）",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）",
        "department": "地域支えあい推進部 障害福祉課 給付係",
        "officialUrl": "https://www.city.tokyo-nakano.lg.jp/kosodate/kosodatesite_ohirune/mokuteki/teate/iryohijyosei/nancyo.html",
        "notes": "※事前申請必須です。",
        "specialNote": "※所得制限なし"
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "中野区 高齢者補聴器購入費用助成事業",
        "amount": "片耳上限 45,000円 ／ 両耳上限 90,000円",
        "condition": "65歳以上、手帳非該当、医師意見書、合計所得350万円未満",
        "department": "地域支えあい推進部 地域包括ケア推進課",
        "officialUrl": "https://www.city.tokyo-nakano.lg.jp/kenko_hukushi/kourei/hokenhukushi/0235245120240605163422503.html",
        "notes": "※購入前申請必須です。認定補聴器技能者が在籍する店舗での購入が対象。",
        "specialNote": "※所得制限あり（350万円未満）"
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/46/Emblem_of_Nakano%2C_Tokyo.svg/120px-Emblem_of_Nakano%2C_Tokyo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "131156",
    "id": "tokyo-suginami",
    "pref": "東京都",
    "city": "杉並区",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "杉並区 軽度・中等度難聴児補聴器購入費助成事業",
        "amount": "基準額の全額助成",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）",
        "department": "保健福祉部 障害者施策課 給付係",
        "officialUrl": "https://www.city.suginami.tokyo.jp/guide/fukushi/shougaisha/1004652.html",
        "notes": "※事前申請必須です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "杉並区 高齢者補聴器購入費助成事業",
        "amount": "非課税世帯：上限 48,300円 ／ 課税世帯：上限 24,200円",
        "condition": "65歳以上、手帳非該当、耳鼻科受診証明書",
        "department": "保健福祉部 高齢者施策課 在宅支援係",
        "officialUrl": "https://www.city.suginami.tokyo.jp/guide/fukushi/koureisha/1054231.html",
        "notes": "※購入前の事前申請が必須です。",
        "specialNote": "※課税世帯も助成あり"
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2b/Emblem_of_Suginami%2C_Tokyo.svg/120px-Emblem_of_Suginami%2C_Tokyo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "131164",
    "id": "tokyo-toshima",
    "pref": "東京都",
    "city": "豊島区",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "豊島区 軽度・中等度難聴児補聴器購入費助成事業",
        "amount": "基準額の全額助成",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）",
        "department": "保健福祉部 障害福祉課 給付グループ",
        "officialUrl": "https://www.city.toshima.lg.jp/160/fukushi/shogai/jose/014603.html",
        "notes": "※事前申請必須です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "豊島区 高齢者補聴器購入費助成事業",
        "amount": "非課税世帯等：上限 50,000円 ／ 課税世帯：上限 20,000円",
        "condition": "65歳以上、手帳非該当、耳鼻科医師意見書",
        "department": "保健福祉部 高齢者福祉課 相談グループ",
        "officialUrl": "https://www.city.toshima.lg.jp/156/fukushi/kore/hochoki.html",
        "notes": "※購入前申請必須です。",
        "specialNote": "※課税世帯も助成あり"
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fe/Emblem_of_Toshima%2C_Tokyo.svg/120px-Emblem_of_Toshima%2C_Tokyo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "131172",
    "id": "tokyo-kita",
    "pref": "東京都",
    "city": "北区",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "北区 中等度難聴児発達支援事業（補聴器購入費助成）",
        "amount": "基準額の9/10（非課税世帯等は全額助成）",
        "condition": "18歳未満、両耳30dB以上（手帳非該当）",
        "department": "健康福祉部 障害福祉課（王子・赤羽障害相談係）",
        "officialUrl": "https://www.city.kita.lg.jp/socialcare-health/disabilities/1008784/1008790/1008791.html",
        "notes": "※事前申請必須です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "北区 高齢者補聴器購入費用助成事業",
        "amount": "上限 70,000円",
        "condition": "65歳以上、手帳非該当、相談医意見書、住民税非課税または均等割のみ課税",
        "department": "健康福祉部 高齢福祉課 在宅支援係",
        "officialUrl": "https://www.city.kita.lg.jp/socialcare-health/elderly/1008607/1008625.html",
        "notes": "※購入前申請必須です。",
        "specialNote": "※住民税非課税・均等割のみ課税者対象"
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e3/Emblem_of_Kita%2C_Tokyo.svg/120px-Emblem_of_Kita%2C_Tokyo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "131181",
    "id": "tokyo-arakawa",
    "pref": "東京都",
    "city": "荒川区",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "荒川区 軽度・中等度難聴児補聴器購入費助成事業",
        "amount": "基準額の全額助成",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）",
        "department": "福祉部 障害者福祉課 給付係",
        "officialUrl": "https://www.city.arakawa.tokyo.jp/a037/shougaisha/josei/nanchoji.html",
        "notes": "※事前申請必須です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "荒川区 高齢者補聴器購入費助成事業",
        "amount": "上限 72,450円",
        "condition": "65歳以上、手帳非該当、医師意見書",
        "department": "福祉部 高齢者福祉課 相談係",
        "officialUrl": "https://www.city.arakawa.tokyo.jp/a038/koureisha/hochoki.html",
        "notes": "※事前申請必須です。",
        "specialNote": "※所得制限なし（課税世帯も同額助成）"
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d6/Emblem_of_Arakawa%2C_Tokyo.svg/120px-Emblem_of_Arakawa%2C_Tokyo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "131199",
    "id": "tokyo-itabashi",
    "pref": "東京都",
    "city": "板橋区",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "板橋区 軽度・中等度難聴児補聴器購入費助成事業",
        "amount": "基準額の全額助成",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）",
        "department": "福祉部 障がい政策課 認定給付係",
        "officialUrl": "https://www.city.itabashi.tokyo.jp/kenko/shogai/jose/1004128.html",
        "notes": "※事前申請必須です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "板橋区 高齢者補聴器購入費助成事業",
        "amount": "上限 50,000円",
        "condition": "65歳以上、手帳非該当、耳鼻科受診証明、住民税非課税世帯",
        "department": "福祉部 おとしより保健福祉課 在宅支援係",
        "officialUrl": "https://www.city.itabashi.tokyo.jp/kenko/otoshiyori/shien/1035210.html",
        "notes": "※事前申請必須です。",
        "specialNote": "※住民税非課税世帯のみ対象"
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ef/Emblem_of_Itabashi%2C_Tokyo.svg/120px-Emblem_of_Itabashi%2C_Tokyo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "131202",
    "id": "tokyo-nerima",
    "pref": "東京都",
    "city": "練馬区",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "練馬区 中等度難聴児発達支援事業（補聴器購入費助成）",
        "amount": "基準額の9/10（非課税世帯等は全額助成）",
        "condition": "18歳未満、両耳30dB以上（手帳非該当）",
        "department": "福祉部 総合福祉事務所 障害者支援係",
        "officialUrl": "https://www.city.nerima.tokyo.jp/hokenfukushi/shogai/nichijo/seikatsushien/hochoukikounyuuhi.html",
        "notes": "※事前申請必須です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "練馬区 高齢者聞こえのコミュニケーション支援事業",
        "amount": "非課税者：上限 72,000円 ／ 課税者：上限 36,000円",
        "condition": "65歳以上、手帳非該当、耳鼻咽喉科医師意見書",
        "department": "福祉部 高齢者支援課 相談係",
        "officialUrl": "https://www.city.nerima.tokyo.jp/hokenfukushi/koreisha/nichijo/20210419134246065.html",
        "notes": "※事前申請必須です。",
        "specialNote": "※課税世帯も助成あり"
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ed/Emblem_of_Nerima%2C_Tokyo.svg/120px-Emblem_of_Nerima%2C_Tokyo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "131211",
    "id": "tokyo-adachi",
    "pref": "東京都",
    "city": "足立区",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "足立区 中等度難聴児発達支援事業（補聴器購入費助成）",
        "amount": "基準額の全額助成",
        "condition": "18歳未満、両耳30dB以上（手帳非該当）",
        "department": "福祉部 障がい福祉課 障がい給付係",
        "officialUrl": "https://www.city.adachi.tokyo.jp/s-engo/tyutoudonancho.html",
        "notes": "※事前申請必須です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "足立区 高齢者補聴器購入費用助成事業",
        "amount": "上限 50,000円",
        "condition": "65歳以上、手帳非該当、耳鼻咽喉科医師意見書",
        "department": "福祉部 高齢福祉課 在宅支援係",
        "officialUrl": "https://www.city.adachi.tokyo.jp/k-fukushi/kaigohokengai.html",
        "notes": "※事前申請必須です。",
        "specialNote": "※所得制限なし"
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/60/Emblem_of_Adachi%2C_Tokyo.svg/120px-Emblem_of_Adachi%2C_Tokyo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "131229",
    "id": "tokyo-katsushika",
    "pref": "東京都",
    "city": "葛飾区",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "葛飾区 軽度・中等度難聴児補聴器購入費助成事業",
        "amount": "基準額の9割〜全額助成",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）",
        "department": "福祉部 障害福祉課 障害給付係",
        "officialUrl": "https://www.city.katsushika.lg.jp/kurashi/1000057/1002447/1002570.html",
        "notes": "※事前申請必須です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "葛飾区 高齢者補聴器購入費助成事業",
        "amount": "非課税世帯：最大 144,900円 ／ 課税世帯：最大 72,450円",
        "condition": "65歳以上、手帳非該当、耳鼻咽喉科医師意見書",
        "department": "福祉部 高齢福祉課 高齢者支援係",
        "officialUrl": "https://www.city.katsushika.lg.jp/kurashi/1000057/1002448/1029837.html",
        "notes": "※購入前申請必須です。",
        "specialNote": "※課税世帯も助成あり"
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3e/Emblem_of_Katsushika%2C_Tokyo.svg/120px-Emblem_of_Katsushika%2C_Tokyo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "131237",
    "id": "tokyo-edogawa",
    "pref": "東京都",
    "city": "江戸川区",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "江戸川区 軽度・中等度難聴児補聴器購入費助成事業",
        "amount": "基準額の全額（自己負担なし）",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）",
        "department": "福祉部 障害者福祉課 給付係",
        "officialUrl": "https://www.city.edogawa.tokyo.jp/e041/kenko/fukushi/shogaisha/nancho.html",
        "notes": "※事前申請必須です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "江戸川区 高齢者補聴器購入費助成事業",
        "amount": "非課税の方：上限 40,000円 ／ 課税の方：上限 20,000円",
        "condition": "65歳以上、手帳非該当、補聴器相談医意見書、課税者は所得割46万円未満",
        "department": "福祉部 福祉推進課 相談係",
        "officialUrl": "https://www.city.edogawa.tokyo.jp/e040/kenko/fukushi/koreisha/hochoki.html",
        "notes": "※購入前申請必須です。",
        "specialNote": "※課税世帯も助成あり"
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9c/Emblem_of_Edogawa%2C_Tokyo.svg/120px-Emblem_of_Edogawa%2C_Tokyo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "132012",
    "id": "tokyo-hachioji",
    "pref": "東京都",
    "city": "八王子市",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "八王子市 軽度・中等度難聴児補聴器購入費等助成事業",
        "amount": "基準額の全額（自己負担なし・都県制度準拠）",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）",
        "department": "福祉部 障害者福祉課",
        "officialUrl": "https://www.city.hachioji.tokyo.jp/tantoumadoguchi/012/006/p004240.html",
        "notes": "※購入前の事前申請が必須です（所得制限撤廃）。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "八王子市 高齢者聞こえのコミュニケーション支援事業（補聴器購入費助成）",
        "amount": "5万円を超える本体購入費に対し 上限 50,000円助成",
        "condition": "65歳以上、手帳非該当、耳鼻咽喉科医師意見書（所得制限なし）",
        "department": "福祉部 高齢者いきいき課",
        "officialUrl": "https://www.city.hachioji.tokyo.jp/kurashi/welfare/004/004/001/p035080.html",
        "notes": "※購入前の事前申請が必須です。所得制限なしで全市民利用可能。",
        "specialNote": "※所得制限なし（5万円超の購入に対し最大5万円）"
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/53/Emblem_of_Hachioji%2C_Tokyo.svg/120px-Emblem_of_Hachioji%2C_Tokyo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "132021",
    "id": "tokyo-tachikawa",
    "pref": "東京都",
    "city": "立川市",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "立川市 軽度・中等度難聴児補聴器購入費等助成事業",
        "amount": "基準額の9/10助成（非課税世帯等は全額）",
        "condition": "18歳未満、両耳30dB以上、手帳非該当",
        "department": "福祉保健部 障害福祉課",
        "officialUrl": "https://www.city.tachikawa.lg.jp/kenko/shogai/1003561/1003586/1003620.html",
        "notes": "※購入前の事前申請が必須です。指定医の意見書が必要です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者・成人",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "立川市 補聴器購入費助成事業",
        "amount": "上限40,000円助成",
        "condition": "18歳以上、両耳40dB以上または医師が必要と判断、所得基準あり（前年所得210万円未満）",
        "department": "福祉保健部 高齢福祉課",
        "officialUrl": "https://www.city.tachikawa.lg.jp/kenko/korei/1003482/1021649.html",
        "notes": "※購入前の事前申請が必須です。指定医師の意見書が必要です。",
        "specialNote": "【対象: 18歳以上（成人全般）】"
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/03/Emblem_of_Tachikawa%2C_Tokyo.svg/120px-Emblem_of_Tachikawa%2C_Tokyo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "132039",
    "id": "tokyo-musashino",
    "pref": "東京都",
    "city": "武蔵野市",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "武蔵野市 軽度・中等度難聴児補聴器購入費助成事業",
        "amount": "基準額の90%助成（非課税世帯は全額）",
        "condition": "18歳未満、両耳30dB以上、手帳非該当",
        "department": "健康福祉部 障害者福祉課",
        "officialUrl": "https://www.city.musashino.lg.jp/kenko_fukushi/shogaisha_fukushi/shien_josei/seikatsu_yogu_kyufu_taiyo/1006487.html",
        "notes": "※購入前の事前申請が必須です。指定医の意見書が必要です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "武蔵野市 高齢者補聴器購入費助成事業",
        "amount": "本体購入費用の半額（上限50,000円）",
        "condition": "65歳以上、両耳40dB以上70dB未満または医師が必要と認める、手帳非該当",
        "department": "健康福祉部 高齢者支援課",
        "officialUrl": "https://www.city.musashino.lg.jp/kenko_fukushi/koureisha_fukushi/koreishafukushi_service/zaitakuservice/1046469.html",
        "notes": "※購入前の事前申請が必須です。指定医師の証明書が必要です。",
        "specialNote": "【手厚い上限50,000円】"
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3c/Emblem_of_Musashino%2C_Tokyo.svg/120px-Emblem_of_Musashino%2C_Tokyo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "132047",
    "id": "tokyo-mitaka",
    "pref": "東京都",
    "city": "三鷹市",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "三鷹市 軽度・中等度難聴児補聴器購入費等助成事業",
        "amount": "基準額の9割助成（非課税・生保は全額）",
        "condition": "18歳未満、両耳30dB以上、手帳非該当",
        "department": "健康福祉部 障がい者支援課",
        "officialUrl": "https://www.city.mitaka.lg.jp/c_service/064/064349.html",
        "notes": "※購入前の事前申請が必須です。指定医の意見書が必要です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者・成人",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "三鷹市 補聴器購入費助成事業",
        "amount": "購入費用の1/2助成（上限40,000円）",
        "condition": "18歳以上、本人合計所得210万円未満、医師が必要と認める、手帳非該当",
        "department": "健康福祉部 高齢者支援課",
        "officialUrl": "https://www.city.mitaka.lg.jp/c_service/099/099672.html",
        "notes": "※購入前の事前申請が必須です。指定医師の意見書が必要です。",
        "specialNote": "【対象: 18歳以上（成人全般）】"
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a8/Emblem_of_Mitaka%2C_Tokyo.svg/120px-Emblem_of_Mitaka%2C_Tokyo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "132055",
    "id": "tokyo-ome",
    "pref": "東京都",
    "city": "青梅市",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "青梅市 難聴児補聴器購入費等助成事業",
        "amount": "基準額の9割助成（非課税世帯等は全額）",
        "condition": "18歳未満、両耳30dB以上、手帳非該当",
        "department": "健康福祉部 障がい者福祉課",
        "officialUrl": "https://www.city.ome.tokyo.jp/soshiki/31/1254.html",
        "notes": "※購入前の事前申請が必須です。指定医の意見書が必要です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "青梅市 高齢者補聴器購入費助成事業",
        "amount": "本体及び付属品の購入費上限40,000円助成",
        "condition": "65歳以上、住民税非課税、両耳40dB以上70dB未満、手帳非該当",
        "department": "健康福祉部 高齢介護課",
        "officialUrl": "https://www.city.ome.tokyo.jp/soshiki/30/78337.html",
        "notes": "※購入前の事前申請が必須です。指定医師の意見書が必要です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/af/Emblem_of_%C5%8Cme%2C_Tokyo.svg/120px-Emblem_of_%C5%8Cme%2C_Tokyo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "132063",
    "id": "tokyo-fuchu",
    "pref": "東京都",
    "city": "府中市",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "府中市 軽度・中等度難聴児補聴器購入費等助成事業",
        "amount": "基準価格の9割（非課税世帯等は10割）",
        "condition": "18歳未満、両耳30dB以上、手帳非該当、所得制限あり",
        "department": "福祉保健部 障害者福祉課",
        "officialUrl": "https://www.city.fuchu.tokyo.jp/kenko/shogai/shogainoarukata/nanchouzi.html",
        "notes": "※購入前の事前申請が必須です。指定医の意見書が必要です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "府中市 高齢者補聴器購入費助成事業",
        "amount": "本体購入費用の1/2（上限40,000円）",
        "condition": "65歳以上、前年所得210万円未満、両耳40dB以上または片耳70dB以上、手帳非該当",
        "department": "福祉保健部 高齢者支援課",
        "officialUrl": "https://www.city.fuchu.tokyo.jp/kenko/korenokata/koreisha/hochouki.html",
        "notes": "※購入前の事前申請が必須です。指定医師の意見書が必要です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d2/Emblem_of_Fuchu%2C_Tokyo.svg/120px-Emblem_of_Fuchu%2C_Tokyo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "132071",
    "id": "tokyo-akishima",
    "pref": "東京都",
    "city": "昭島市",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "昭島市 難聴児補聴器購入費等助成事業",
        "amount": "基準額の9割助成（非課税世帯等は全額）",
        "condition": "18歳未満、両耳30dB以上、手帳非該当",
        "department": "保健福祉部 障害福祉課",
        "officialUrl": "https://www.city.akishima.lg.jp/kenko/shogai/1003310/1003311.html",
        "notes": "※購入前の事前申請が必須です。指定医の意見書が必要です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "昭島市 高齢者補聴器購入費助成事業",
        "amount": "購入費用の1/2助成（上限40,000円・非課税世帯は全額）",
        "condition": "65歳以上、合計所得210万円未満、医師が必要と認める、手帳非該当",
        "department": "保健福祉部 高齢福祉課",
        "officialUrl": "https://www.city.akishima.lg.jp/kenko/korei/1003133/1003101/1003092.html",
        "notes": "※購入前の事前申請が必須です。指定医師の意見書が必要です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7d/Emblem_of_Akishima%2C_Tokyo.svg/120px-Emblem_of_Akishima%2C_Tokyo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "132080",
    "id": "tokyo-chofu",
    "pref": "東京都",
    "city": "調布市",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "調布市 難聴児補聴器購入費等助成事業",
        "amount": "基準額の9割助成（非課税世帯等は全額）",
        "condition": "18歳未満、両耳30dB以上、手帳非該当",
        "department": "福祉健康部 障害福祉課",
        "officialUrl": "https://www.city.chofu.lg.jp/060050/p035180.html",
        "notes": "※購入前の事前申請が必須です。指定医の意見書が必要です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者・成人",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "調布市 補聴器購入費助成事業",
        "amount": "上限40,000円助成",
        "condition": "18歳以上（65歳以上は本人が住民税非課税）、両耳40dB以上70dB未満、医師が必要と判断、手帳非該当",
        "department": "福祉健康部 高齢者支援室",
        "officialUrl": "https://www.city.chofu.lg.jp/060030/p033143.html",
        "notes": "※購入前の事前申請が必須です。指定医師の意見書が必要です。",
        "specialNote": "【対象: 18歳以上（成人全般）】"
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d7/Emblem_of_Ch%C5%8Dfu%2C_Tokyo.svg/120px-Emblem_of_Ch%C5%8Dfu%2C_Tokyo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "132098",
    "id": "tokyo-machida",
    "pref": "東京都",
    "city": "町田市",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "町田市 軽度・中等度難聴児補聴器購入費等助成事業",
        "amount": "基準価格の9割（非課税世帯等は10割）",
        "condition": "18歳未満、両耳30dB以上、手帳非該当",
        "department": "子ども生活部 子育て推進課",
        "officialUrl": "https://kosodate-machida.tokyo.jp/soshiki/4/6/service/5919.html",
        "notes": "※購入前の事前申請が必須です。指定医の意見書が必要です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "町田市 高齢者補聴器購入費助成事業",
        "amount": "本体購入費上限30,000円助成",
        "condition": "65歳以上、住民税非課税、両耳40dB以上70dB未満、医師が必要と認める、手帳非該当",
        "department": "いきいき生活部 高齢者支援課",
        "officialUrl": "https://www.city.machida.tokyo.jp/iryo/old/shiminnokatae/seikatsukurashi/hocyouki.html",
        "notes": "※購入前の事前申請が必須です。指定医師の証明書が必要です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8a/Emblem_of_Machida%2C_Tokyo.svg/120px-Emblem_of_Machida%2C_Tokyo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "132101",
    "id": "tokyo-koganei",
    "pref": "東京都",
    "city": "小金井市",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "小金井市 軽度・中等度難聴児補聴器購入費等助成事業",
        "amount": "基準価格の9割（非課税世帯等は10割）",
        "condition": "18歳未満、両耳30dB以上、手帳非該当、所得制限あり",
        "department": "福祉保健部 自立生活支援課",
        "officialUrl": "https://www.city.koganei.lg.jp/kenkofukuhsi/shogaishafukushi/service/chutodonanchou.html",
        "notes": "※購入前の事前申請が必須です。指定医の意見書が必要です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "小金井市 高齢者補聴器購入費助成事業",
        "amount": "本体購入費上限30,000円助成",
        "condition": "65歳以上、住民税非課税、両耳40dB以上70dB未満（または医師が必要と認めた方）、手帳非該当",
        "department": "福祉保健部 介護福祉課",
        "officialUrl": "https://www.city.koganei.lg.jp/kenkofukuhsi/koreishafukushi/kaigohokengai/index.html",
        "notes": "※購入前の事前申請が必須です。指定医師の意見書が必要です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ae/Emblem_of_Koganei%2C_Tokyo.svg/120px-Emblem_of_Koganei%2C_Tokyo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "132110",
    "id": "tokyo-kodaira",
    "pref": "東京都",
    "city": "小平市",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "小平市 中等度難聴児発達支援事業（補聴器購入費等助成）",
        "amount": "基準価格の9割（非課税世帯等は10割）",
        "condition": "18歳未満、両耳30dB以上、手帳非該当、所得制限あり",
        "department": "健康福祉部 障がい者支援課",
        "officialUrl": "https://www.city.kodaira.tokyo.jp/reiki/reiki_honbun/g135RG00001094.html",
        "notes": "※購入前の事前申請が必須です。指定医の意見書が必要です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "小平市 高齢者補聴器購入費助成事業",
        "amount": "本体購入費用の1/2（上限40,000円）",
        "condition": "65歳以上、住民税非課税、両耳40dB以上（中等度難聴以上）、手帳非該当",
        "department": "健康福祉部 高齢者支援課",
        "officialUrl": "https://www.city.kodaira.tokyo.jp/reiki/reiki_honbun/g135RG00001383.html",
        "notes": "※購入前の事前申請が必須です。指定医師の意見書が必要です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/21/Emblem_of_Kodaira%2C_Tokyo.svg/120px-Emblem_of_Kodaira%2C_Tokyo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "132128",
    "id": "tokyo-hino",
    "pref": "東京都",
    "city": "日野市",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "日野市 軽度・中等度難聴児補聴器購入費等助成事業",
        "amount": "基準額の9割助成（非課税世帯等は全額）",
        "condition": "18歳未満、両耳30dB以上、手帳非該当",
        "department": "健康福祉部 セーフティネット課",
        "officialUrl": "https://www.city.hino.lg.jp/fukushi/nanbyo/service/shogaiji/1003757.html",
        "notes": "※購入前の事前申請が必須です。指定医の意見書が必要です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "日野市 高齢者補聴器購入費助成事業",
        "amount": "本体購入費用上限35,000円助成",
        "condition": "65歳以上、住民税非課税、医師が必要と認める、手帳非該当",
        "department": "健康福祉部 高齢福祉課",
        "officialUrl": "https://www.city.hino.lg.jp/fukushi/kourei/1023834.html",
        "notes": "※購入前の事前申請が必須です。指定医師の意見書が必要です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7c/Emblem_of_Hino%2C_Tokyo.svg/120px-Emblem_of_Hino%2C_Tokyo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "132136",
    "id": "tokyo-higashimurayama",
    "pref": "東京都",
    "city": "東村山市",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "東村山市 中等度難聴児発達支援事業（補聴器等購入費助成）",
        "amount": "基準価格の9割（非課税世帯等は10割）",
        "condition": "18歳未満、両耳30dB以上、手帳非該当、所得制限あり",
        "department": "健康福祉部 障害狭窄課",
        "officialUrl": "https://www.city.higashimurayama.tokyo.jp/kenko/shogai/service/nichijyouseikatsu-s/chutodo-nanchou.html",
        "notes": "※購入前の事前申請が必須です。指定医の意見書が必要です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "東村山市 高齢者補聴器購入費助成事業",
        "amount": "本体購入費用上限40,000円助成",
        "condition": "65歳以上、住民税非課税、中等度難聴（両耳40dB以上70dB未満）、手帳非該当",
        "department": "健康福祉部 介護保険課",
        "officialUrl": "https://www.city.higashimurayama.tokyo.jp/kenko/korei/korei/hochouki.html",
        "notes": "※購入前の事前申請が必須です。指定医師の意見書が必要です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/09/Emblem_of_Higashimurayama%2C_Tokyo.svg/120px-Emblem_of_Higashimurayama%2C_Tokyo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "132144",
    "id": "tokyo-kokubunji",
    "pref": "東京都",
    "city": "国分寺市",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "国分寺市 軽度・中等度難聴児補聴器購入費助成事業",
        "amount": "基準額の9割助成（非課税世帯等は全額）",
        "condition": "18歳未満、両耳30dB以上、手帳非該当",
        "department": "健康部 障害福祉課",
        "officialUrl": "https://www.city.kokubunji.tokyo.jp/kenkou-fukushi/syougaishien/1011466/yougu/1008577.html",
        "notes": "※購入前の事前申請が必須です。指定医の意見書が必要です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "国分寺市 高齢者補聴器購入費助成事業",
        "amount": "上限30,000円助成",
        "condition": "65歳以上、住民税非課税世帯、両耳40dB以上70dB未満または医師が必要と認めた方、手帳非該当",
        "department": "健康部 高齢福祉課",
        "officialUrl": "https://www.city.kokubunji.tokyo.jp/kenkou-fukushi/koureishien/1011655/1037384.html",
        "notes": "※購入前の事前申請が必須です。指定医師の意見書が必要です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/35/Emblem_of_Kokubunji%2C_Tokyo.svg/120px-Emblem_of_Kokubunji%2C_Tokyo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "132152",
    "id": "tokyo-kunitachi",
    "pref": "東京都",
    "city": "国立市",
    "area": "関東",
    "programs": [
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "国立市 高齢者補聴器購入費助成事業",
        "amount": "上限20,000円助成",
        "condition": "65歳以上、住民税非課税世帯、耳鼻咽喉科医師の意見書を得た方、手帳非該当",
        "department": "福祉部 高齢福祉課",
        "officialUrl": "https://www.city.kunitachi.tokyo.jp/soshiki/Dept03/Div03/Sec02/gyomu/0146/12775.html",
        "notes": "※購入前の事前申請が必須です。指定医師の意見書が必要です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/98/Emblem_of_Kunitachi%2C_Tokyo.svg/120px-Emblem_of_Kunitachi%2C_Tokyo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "132187",
    "id": "tokyo-fussa",
    "pref": "東京都",
    "city": "福生市",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "福生市 中等度難聴児発達支援事業（補聴器等購入費助成）",
        "amount": "基準額の9割助成（非課税世帯等は全額）",
        "condition": "18歳未満、両耳30dB以上、手帳非該当",
        "department": "福祉保健部 障害福祉課",
        "officialUrl": "https://www.city.fussa.tokyo.jp/life/health/shogai/1005277/1005281/1005274.html",
        "notes": "※購入前の事前申請が必須です。指定医の意見書が必要です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "福生市 高齢者補聴器購入費助成事業",
        "amount": "上限35,000円助成",
        "condition": "65歳以上、住民税非課税、医師が必要と認めた方、手帳非該当",
        "department": "福祉保健部 介護福祉課",
        "officialUrl": "https://www.city.fussa.tokyo.jp/life/health/elderlypeople/1019957.html",
        "notes": "※購入前の事前申請が必須です。指定医師の意見書が必要です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1f/Emblem_of_Fussa%2C_Tokyo.svg/120px-Emblem_of_Fussa%2C_Tokyo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "132195",
    "id": "tokyo-komae",
    "pref": "東京都",
    "city": "狛江市",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "狛江市 軽度・中等度難聴児補聴器購入費助成事業",
        "amount": "基準額の9割助成（非課税世帯等は全額）",
        "condition": "18歳未満、両耳30dB以上、手帳非該当",
        "department": "福祉保健部 高齢障がい課",
        "officialUrl": "https://www.city.komae.tokyo.jp/index.cfm/44,134457,340,2075,html",
        "notes": "※購入前の事前申請が必須です。指定医の意見書が必要です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/de/Emblem_of_Komae%2C_Tokyo.svg/120px-Emblem_of_Komae%2C_Tokyo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "132209",
    "id": "tokyo-higashiyamato",
    "pref": "東京都",
    "city": "東大和市",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "東大和市 難聴児補聴器購入費等助成事業",
        "amount": "基準額の9割助成（非課税世帯等は全額）",
        "condition": "18歳未満、両耳30dB以上、手帳非該当",
        "department": "福祉部 障害福祉課",
        "officialUrl": "https://www.city.higashiyamato.lg.jp/kenkofukushi/shogaisha/1002997/1003013/1003021.html",
        "notes": "※購入前の事前申請が必須です。指定医の意見書が必要です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5c/Emblem_of_Higashiyamato%2C_Tokyo.svg/120px-Emblem_of_Higashiyamato%2C_Tokyo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "132217",
    "id": "tokyo-kiyose",
    "pref": "東京都",
    "city": "清瀬市",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "清瀬市 難聴児補聴器購入費等助成事業",
        "amount": "基準額の9割助成（非課税世帯等は全額）",
        "condition": "18歳未満、両耳30dB以上、手帳非該当",
        "department": "健康推進部 障害福祉課",
        "officialUrl": "https://www.city.kiyose.lg.jp/kenkouiryouhukusi/syougaisien/syougaisyajosei/1004261.html",
        "notes": "※購入前の事前申請が必須です。指定医の意見書が必要です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3c/Emblem_of_Kiyose%2C_Tokyo.svg/120px-Emblem_of_Kiyose%2C_Tokyo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "132225",
    "id": "tokyo-higashikurume",
    "pref": "東京都",
    "city": "東久留米市",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "東久留米市 難聴児補聴器購入費等助成事業",
        "amount": "基準額の9割助成（上限144,900円・非課税世帯は全額）",
        "condition": "18歳未満、両耳30dB以上、手帳非該当",
        "department": "福祉保健部 障害福祉課",
        "officialUrl": "https://www.city.higashikurume.lg.jp/kurashi/fukushi/shogai/1000435.html",
        "notes": "※購入前の事前申請が必須です。指定医の意見書が必要です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/ce/Emblem_of_Higashikurume%2C_Tokyo.svg/120px-Emblem_of_Higashikurume%2C_Tokyo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "132233",
    "id": "tokyo-musashimurayama",
    "pref": "東京都",
    "city": "武蔵村山市",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "武蔵村山市 難聴児補聴器購入費等助成事業",
        "amount": "基準額の9割助成（非課税世帯等は全額）",
        "condition": "18歳未満、両耳30dB以上、手帳非該当、所得制限あり",
        "department": "福祉部 障害福祉課",
        "officialUrl": "https://www.city.musashimurayama.lg.jp/kurashi/shougai/kyufu/1011998.html",
        "notes": "※購入前の事前申請が必須です。指定医の意見書が必要です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7e/Emblem_of_Musashimurayama%2C_Tokyo.svg/120px-Emblem_of_Musashimurayama%2C_Tokyo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "132241",
    "id": "tokyo-tama",
    "pref": "東京都",
    "city": "多摩市",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "多摩市 中等度難聴児発達支援事業（補聴器等購入費助成）",
        "amount": "基準額の9割助成（非課税世帯等は全額）",
        "condition": "18歳未満、両耳30dB以上、手帳非該当",
        "department": "健康福祉部 障害福祉課",
        "officialUrl": "https://www.city.tama.lg.jp/kenkofukushi/1008237/shoigai/hatatsu/1003078.html",
        "notes": "※購入前の事前申請が必須です。指定医の意見書が必要です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/74/Emblem_of_Tama%2C_Tokyo.svg/120px-Emblem_of_Tama%2C_Tokyo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "132250",
    "id": "tokyo-inagi",
    "pref": "東京都",
    "city": "稲城市",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "稲城市 軽度・中等度難聴児補聴器購入費助成事業",
        "amount": "基準額の9割助成（非課税世帯等は全額）",
        "condition": "18歳未満、両耳30dB以上、手帳非該当",
        "department": "福祉部 障害福祉課",
        "officialUrl": "https://www.city.inagi.tokyo.jp/kenko/syougaifukushi/1003546/1010575.html",
        "notes": "※購入前の事前申請が必須です。指定医の意見書が必要です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/05/Emblem_of_Inagi%2C_Tokyo.svg/120px-Emblem_of_Inagi%2C_Tokyo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "132276",
    "id": "tokyo-hamura",
    "pref": "東京都",
    "city": "羽村市",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "羽村市 軽度・中等度難聴児補聴器購入費助成事業",
        "amount": "基準額の9割助成（非課税世帯等は全額）",
        "condition": "18歳未満、両耳30dB以上、手帳非該当",
        "department": "福祉健康部 障害福祉課",
        "officialUrl": "https://www.city.hamura.tokyo.jp/0000019094.html",
        "notes": "※購入前の事前申請が必須です。指定医の意見書が必要です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "羽村市 高齢者補聴器購入費助成事業",
        "amount": "上限40,000円助成",
        "condition": "65歳以上、住民税非課税、両耳40dB以上70dB未満、医師の意見書、手帳非該当",
        "department": "福祉健康部 高齢福祉介護課",
        "officialUrl": "https://www.city.hamura.tokyo.jp/0000019749.html",
        "notes": "※購入前の事前申請が必須です。指定医師の意見書が必要です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ea/Emblem_of_Hamura%2C_Tokyo.svg/120px-Emblem_of_Hamura%2C_Tokyo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "132284",
    "id": "tokyo-akiruno",
    "pref": "東京都",
    "city": "あきる野市",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "あきる野市 難聴児補聴器購入費等助成事業",
        "amount": "基準価格の9割（非課税世帯等は10割）",
        "condition": "18歳未満、両耳30dB以上、手帳非該当",
        "department": "健康福祉部 障がい者福祉課",
        "officialUrl": "https://www.city.akiruno.tokyo.jp/0000006782.html",
        "notes": "※購入前の事前申請が必須です。指定医の意見書が必要です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "あきる野市 高齢者補聴器購入費助成事業",
        "amount": "上限40,000円助成",
        "condition": "65歳以上、住民税非課税、医師が必要と診断、手帳非該当",
        "department": "健康福祉部 高齢者支援課",
        "officialUrl": "https://www.city.akiruno.tokyo.jp/0000020382.html",
        "notes": "※購入前の事前申請が必須です。指定医師の意見書が必要です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0a/Emblem_of_Akiruno%2C_Tokyo.svg/120px-Emblem_of_Akiruno%2C_Tokyo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "132292",
    "id": "tokyo-nishitokyo",
    "pref": "東京都",
    "city": "西東京市",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "西東京市 難聴児補聴器購入費助成事業",
        "amount": "基準額の9割助成（非課税世帯等は全額）",
        "condition": "18歳未満、両耳30dB以上、手帳非該当",
        "department": "健康福祉部 障害福祉課",
        "officialUrl": "https://www.city.nishitokyo.lg.jp/kenko_hukusi/syogaisyasien/dailylife/shuwatuuyaku.html",
        "notes": "※購入前の事前申請が必須です。指定医の意見書が必要です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "西東京市 高齢者補聴器購入費助成事業",
        "amount": "購入費用の1/2助成（上限40,000円）",
        "condition": "65歳以上、市民税非課税、両耳40dB以上または医師が必要と認めた方、手帳非該当",
        "department": "健康福祉部 高齢者支援課",
        "officialUrl": "https://www.city.nishitokyo.lg.jp/kenko_hukusi/koreisyasien/kaigo_dailylife/koureisyakikoe.html",
        "notes": "※購入前の事前申請が必須です。指定医師の証明書が必要です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/aa/Emblem_of_Nishitokyo%2C_Tokyo.svg/120px-Emblem_of_Nishitokyo%2C_Tokyo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "133035",
    "id": "tokyo-mizuho",
    "pref": "東京都",
    "city": "瑞穂町",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "瑞穂町 難聴児補聴器購入費等助成事業",
        "amount": "基準額の9割助成（非課税世帯等は全額）",
        "condition": "18歳未満、両耳30dB以上、手帳非該当",
        "department": "福祉部 福祉課",
        "officialUrl": "https://www.town.mizuho.tokyo.jp/kenkofukushi/004/004/p001306.html",
        "notes": "※購入前の事前申請が必須です。指定医の意見書が必要です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "瑞穂町 高齢者補聴器購入費助成事業",
        "amount": "上限40,000円助成",
        "condition": "65歳以上、住民税非課税、装用耳40dB以上または医師が必要と診断、手帳非該当",
        "department": "福祉部 高齢者福祉課",
        "officialUrl": "https://www.town.mizuho.tokyo.jp/kenkofukushi/002/002/p011529.html",
        "notes": "※購入前の事前申請が必須です。指定医師の診断書が必要です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a7/Emblem_of_Mizuho%2C_Tokyo.svg/120px-Emblem_of_Mizuho%2C_Tokyo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "133051",
    "id": "tokyo-hinode",
    "pref": "東京都",
    "city": "日の出町",
    "area": "関東",
    "programs": [
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "日の出町 高齢者補聴器購入費補助事業",
        "amount": "本体及び付属品の購入費上限50,000円助成",
        "condition": "65歳以上、両耳40dB以上70dB未満または医師が必要と認めた方、手帳非該当",
        "department": "いきいき健康課",
        "officialUrl": "https://www.town.hinode.tokyo.jp/0000004248.html",
        "notes": "※購入前の事前申請が必須です。指定医師の意見書が必要です。",
        "specialNote": "【手厚い上限50,000円】"
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9b/Emblem_of_Hinode%2C_Tokyo.svg/120px-Emblem_of_Hinode%2C_Tokyo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "133078",
    "id": "tokyo-hinohara",
    "pref": "東京都",
    "city": "檜原村",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "檜原村 中等度難聴児発達支援事業（補聴器等購入費助成）",
        "amount": "基準額の9/10助成（低所得・生保は全額）",
        "condition": "18歳未満、両耳30dB以上、手帳非該当、所得制限あり",
        "department": "福祉けんこう課",
        "officialUrl": "https://www.vill.hinohara.tokyo.jp/0000001124.html",
        "notes": "※購入前の事前申請が必須です。指定医の意見書が必要です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "檜原村 高齢者補聴器購入費助成事業",
        "amount": "本体購入費用上限70,000円助成",
        "condition": "65歳以上、両耳40dB以上70dB未満または医師が必要と認めた方、手帳非該当",
        "department": "福祉けんこう課",
        "officialUrl": "https://www.vill.hinohara.tokyo.jp/0000002070.html",
        "notes": "※購入前の事前申請が必須です。指定医師の意見書が必要です。",
        "specialNote": "【手厚い上限70,000円】"
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/af/Emblem_of_Hinohara%2C_Tokyo.svg/120px-Emblem_of_Hinohara%2C_Tokyo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "133086",
    "id": "tokyo-okutama",
    "pref": "東京都",
    "city": "奥多摩町",
    "area": "関東",
    "programs": [
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "奥多摩町 高齢者補聴器購入費助成事業",
        "amount": "本体及び付属品上限70,000円助成",
        "condition": "65歳以上、両耳40dB以上70dB未満または医師が必要と認めた方、手帳非該当",
        "department": "福祉保健課 高齢者福祉・介護係",
        "officialUrl": "https://www.town.okutama.tokyo.jp/1/fukushihokenka/koreishafukushi_kaigo/1/3253.html",
        "notes": "※購入前の事前申請が必須です。指定医師の意見書が必要です。",
        "specialNote": "【手厚い上限70,000円】"
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0a/Emblem_of_Okutama%2C_Tokyo.svg/120px-Emblem_of_Okutama%2C_Tokyo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "141003",
    "id": "kanagawa-yokohama",
    "pref": "神奈川県",
    "city": "横浜市",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "横浜市 軽度・中等度難聴児補聴器購入費助成事業",
        "amount": "基準額の2/3補助（非課税世帯等は全額助成）",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）",
        "department": "健康福祉局 障害福祉保健部 障害福祉課",
        "officialUrl": "https://www.pref.kanagawa.jp/docs/yv4/cnt/f536418/index.html",
        "notes": "※購入前の事前申請が必須です。各区役所高齢・障害支援課が窓口です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者・中高年（50歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "横浜市 難聴者補聴器購入費助成事業",
        "amount": "上限 20,000円",
        "condition": "50歳以上、手帳非該当、市民税非課税世帯、耳鼻咽喉科意見書",
        "department": "健康福祉局 高齢健康福祉課",
        "officialUrl": "https://www.city.yokohama.lg.jp/kenko-iryo-fukushi/kenko-iryo/iryo/seisaku/hochokijosei.html",
        "notes": "※事前申請が必須です。モデル事業のため要件をご確認ください。",
        "specialNote": "※対象: 50歳以上（モデル事業）"
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/26/Emblem_of_Yokohama%2C_Kanagawa.svg/120px-Emblem_of_Yokohama%2C_Kanagawa.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "141305",
    "id": "kanagawa-kawasaki",
    "pref": "神奈川県",
    "city": "川崎市",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "川崎市 軽度・中等度難聴児補聴器購入費助成事業",
        "amount": "基準額の2/3補助（非課税世帯は全額）",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）",
        "department": "健康福祉局 障害保健福祉推進部 障害福祉課",
        "officialUrl": "https://www.city.kawasaki.jp/350/page/0000023034.html",
        "notes": "※事前申請必須です。各区役所地域みち・障害者支援担当が窓口です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d9/%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E5%B7%9D%E5%B4%8E%E5%B8%82%E5%B8%82%E7%AB%A0.svg/120px-%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E5%B7%9D%E5%B4%8E%E5%B8%82%E5%B8%82%E7%AB%A0.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "142018",
    "id": "kanagawa-yokosuka",
    "pref": "神奈川県",
    "city": "横須賀市",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "横須賀市 軽度・中等度難聴児補聴器購入費等助成事業",
        "amount": "基準額の2/3助成（非課税世帯等は全額助成）",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）",
        "department": "こども育成部 こども青少年給付課",
        "officialUrl": "https://www.city.yokosuka.kanagawa.jp/2625/hotyouki.html",
        "notes": "※購入前の事前申請が必須です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "横須賀市 高齢難聴者補聴器購入助成事業",
        "amount": "購入費用の1/2（上限 50,000円）",
        "condition": "65歳以上、両耳40dB以上（手帳非該当）、住民税非課税、補聴器相談医の証明",
        "department": "民生局 福祉こども部 地域福祉課",
        "officialUrl": "https://www.city.yokosuka.kanagawa.jp/0533/yokosuka_plus/news/2026_111.html",
        "notes": "※購入前の事前申請必須です。神奈川県と連携した助成事業。",
        "specialNote": "※住民税非課税者対象（上限50,000円）"
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/14/Emblem_of_Yokosuka%2C_Kanagawa.svg/120px-Emblem_of_Yokosuka%2C_Kanagawa.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "142034",
    "id": "kanagawa-hiratsuka",
    "pref": "神奈川県",
    "city": "平塚市",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "平塚市 軽度・中等度難聴児補聴器購入費助成事業",
        "amount": "基準額の2/3助成（非課税世帯等は全額）",
        "condition": "18歳未満、両耳30dB以上、手帳非該当",
        "department": "福祉部 障がい福祉課",
        "officialUrl": "https://www.city.hiratsuka.kanagawa.jp/fukushi/page-c_01005.html",
        "notes": "※購入前の事前申請が必須です。指定医の意見書が必要です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "平塚市 高齢者補聴器購入費助成事業",
        "amount": "上限25,000円助成",
        "condition": "65歳以上、加齢性難聴、補聴器相談医の診断、市税滞納なし、手帳非該当",
        "department": "福祉部 高齢福祉課",
        "officialUrl": "https://www.city.hiratsuka.kanagawa.jp/fukushi/page-c_01160.html",
        "notes": "※購入前の事前申請が必須です。指定医師の診断が必要です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d9/%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E5%B9%B3%E5%A1%9A%E5%B8%82%E5%B8%82%E7%AB%A0.svg/120px-%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E5%B9%B3%E5%A1%9A%E5%B8%82%E5%B8%82%E7%AB%A0.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "142042",
    "id": "kanagawa-kamakura",
    "pref": "神奈川県",
    "city": "鎌倉市",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "鎌倉市 軽度・中等度難聴児補聴器購入費助成事業",
        "amount": "基準額の2/3助成（非課税世帯等は全額）",
        "condition": "18歳未満、両耳30dB以上、手帳非該当",
        "department": "健康福祉部 障害福祉課",
        "officialUrl": "https://www.city.kamakura.kanagawa.jp/syougaijisha/keitocyuutou.html",
        "notes": "※購入前の事前申請が必須です。指定医の意見書が必要です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/42/Emblem_of_Kamakura%2C_Kanagawa.svg/120px-Emblem_of_Kamakura%2C_Kanagawa.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "142051",
    "id": "kanagawa-fujisawa",
    "pref": "神奈川県",
    "city": "藤沢市",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "藤沢市 軽度・中等度難聴児補聴器購入費等助成事業",
        "amount": "基準額の2/3助成（非課税世帯等は全額）",
        "condition": "18歳未満、両耳30dB以上、手帳非該当",
        "department": "福祉健康部 障がい福祉課",
        "officialUrl": "https://fujimado.city.fujisawa.kanagawa.jp/ctz/contents/a0IGC00001HUJJG2A5/hochokijyosei",
        "notes": "※購入前の事前申請が必須です。指定医の意見書が必要です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/46/%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E8%97%A4%E6%B2%A2%E5%B8%82%E5%B8%82%E7%AB%A0.svg/120px-%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E8%97%A4%E6%B2%A2%E5%B8%82%E5%B8%82%E7%AB%A0.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "142069",
    "id": "kanagawa-odawara",
    "pref": "神奈川県",
    "city": "小田原市",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "小田原市 軽度・中等度難聴児補聴器購入費助成事業",
        "amount": "基準額の2/3助成（非課税世帯等は全額）",
        "condition": "18歳未満、両耳30dB以上、手帳非該当",
        "department": "福祉健康部 障がい福祉課",
        "officialUrl": "https://www.city.odawara.kanagawa.jp/field/welfare/handic-s/topics/p23180.html",
        "notes": "※購入前の事前申請が必須です。指定医の意見書が必要です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "小田原市 高齢者補聴器購入費助成事業",
        "amount": "上限30,000円助成",
        "condition": "65歳以上、加齢性難聴、補聴器相談医の証明、事前相談必須、手帳非該当",
        "department": "福祉健康部 高齢介護課",
        "officialUrl": "https://www.city.odawara.kanagawa.jp/field/welfare/s-support/nursing/p41037.html",
        "notes": "※購入前の事前相談・申請が必須です。指定医師の証明書が必要です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8b/%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E5%B0%8F%E7%94%B0%E5%8E%9F%E5%B8%82%E5%B8%82%E7%AB%A0.svg/120px-%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E5%B0%8F%E7%94%B0%E5%8E%9F%E5%B8%82%E5%B8%82%E7%AB%A0.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "142077",
    "id": "kanagawa-chigasaki",
    "pref": "神奈川県",
    "city": "茅ヶ崎市",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "茅ヶ崎市 軽度・中等度難聴児補聴器購入費助成事業",
        "amount": "基準額の2/3助成（非課税世帯等は全額）",
        "condition": "18歳未満、両耳30dB以上、手帳非該当",
        "department": "保健福祉部 障がい福祉課",
        "officialUrl": "https://www.city.chigasaki.kanagawa.jp/shogai/1028467.html",
        "notes": "※購入前の事前申請が必須です。指定医の意見書が必要です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8d/%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E8%8C%85%E3%83%B6%E5%B4%8E%E5%B8%82%E5%B8%82%E7%AB%A0.svg/120px-%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E8%8C%85%E3%83%B6%E5%B4%8E%E5%B8%82%E5%B8%82%E7%AB%A0.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "142115",
    "id": "kanagawa-hadano",
    "pref": "神奈川県",
    "city": "秦野市",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "秦野市 軽度・中等度難聴児補聴器購入費助成事業",
        "amount": "基準額の2/3助成（非課税世帯等は全額）",
        "condition": "18歳未満、両耳30dB以上、手帳非該当",
        "department": "くらし安心部 障害福祉課",
        "officialUrl": "https://www.city.hadano.kanagawa.jp/soshiki/5/1037/3/10/902.html",
        "notes": "※購入前の事前申請が必須です。指定医の意見書が必要です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/51/%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E7%A7%A6%E9%87%8E%E5%B8%82%E5%B8%82%E7%AB%A0.svg/120px-%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E7%A7%A6%E9%87%8E%E5%B8%82%E5%B8%82%E7%AB%A0.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "142123",
    "id": "kanagawa-atsugi",
    "pref": "神奈川県",
    "city": "厚木市",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "厚木市 軽度・中等度難聴児補聴器購入費助成事業",
        "amount": "基準額の2/3助成（非課税世帯等は全額）",
        "condition": "18歳未満、両耳30dB以上、手帳非該当",
        "department": "福祉部 障がい福祉課",
        "officialUrl": "https://www.city.atsugi.kanagawa.jp/soshiki/shogaifukushika/9/19/3585.html",
        "notes": "※購入前の事前申請が必須です。指定医の意見書が必要です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（75歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "厚木市 高齢者補聴器購入費助成事業",
        "amount": "上限20,000円助成",
        "condition": "75歳以上、在宅生活、市内指定店舗で購入、手帳非該当",
        "department": "福祉部 福祉総務課",
        "officialUrl": "https://www.city.atsugi.kanagawa.jp/soshiki/fukushisomuka/41017.html",
        "notes": "※購入前の事前申請が必須です。領収書等の提出が必要です。",
        "specialNote": "【対象: 75歳以上】"
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/dd/%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E5%8E%9A%E6%9C%A8%E5%B8%82%E5%B8%82%E7%AB%A0.svg/120px-%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E5%8E%9A%E6%9C%A8%E5%B8%82%E5%B8%82%E7%AB%A0.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "142131",
    "id": "kanagawa-yamato",
    "pref": "神奈川県",
    "city": "大和市",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "大和市 軽度・中等度難聴児補聴器購入費助成事業",
        "amount": "基準額の2/3助成（非課税世帯等は全額）",
        "condition": "18歳未満、両耳30dB以上、手帳非該当",
        "department": "保健福祉部 障がい福祉課",
        "officialUrl": "https://www.city.yamato.lg.jp/section/ehon_no_machi/purpose/L/L00003.html",
        "notes": "※購入前の事前申請が必須です。指定医の意見書が必要です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9c/%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E5%A4%A7%E5%92%8C%E5%B8%82%E5%B8%82%E7%AB%A0.svg/120px-%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E5%A4%A7%E5%92%8C%E5%B8%82%E5%B8%82%E7%AB%A0.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "142140",
    "id": "kanagawa-isehara",
    "pref": "神奈川県",
    "city": "伊勢原市",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "伊勢原市 軽度・中等度難聴児補聴器購入費助成事業",
        "amount": "基準額の2/3助成（非課税世帯等は全額）",
        "condition": "18歳未満、両耳30dB以上、手帳非該当",
        "department": "保健福祉部 障がい福祉課",
        "officialUrl": "https://www.city.isehara.kanagawa.jp/docs/2017040100025/",
        "notes": "※購入前の事前申請が必須です。指定医の意見書が必要です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1f/%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E4%BC%8A%E5%8B%A2%E5%8E%9F%E5%B8%82%E5%B8%82%E7%AB%A0.svg/120px-%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E4%BC%8A%E5%8B%A2%E5%8E%9F%E5%B8%82%E5%B8%82%E7%AB%A0.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "142158",
    "id": "kanagawa-ebina",
    "pref": "神奈川県",
    "city": "海老名市",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "海老名市 軽度・中等度難聴児補聴器購入等補助事業",
        "amount": "基準額の2/3助成（非課税世帯等は全額）",
        "condition": "18歳未満、両耳30dB以上、手帳非該当",
        "department": "保健福祉部 障がい福祉課",
        "officialUrl": "https://www.city.ebina.kanagawa.jp/guide/shogaisha/shogaisha/1003202.html",
        "notes": "※購入前の事前申請が必須です。指定医の意見書が必要です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0c/Emblem_of_Ebina%2C_Kanagawa.svg/120px-Emblem_of_Ebina%2C_Kanagawa.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "142166",
    "id": "kanagawa-zama",
    "pref": "神奈川県",
    "city": "座間市",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "座間市 軽度・中等度難聴児補聴器購入費助成事業",
        "amount": "基準額の2/3助成（非課税世帯等は全額）",
        "condition": "18歳未満、両耳30dB以上、手帳非該当",
        "department": "地域福祉部 障がい福祉課",
        "officialUrl": "https://www.city.zama.kanagawa.jp/fukushi/shogai/josei/1002883.html",
        "notes": "※購入前の事前申請が必須です。指定医の意見書が必要です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d2/%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E5%BA%A7%E9%96%93%E5%B8%82%E5%B8%82%E7%AB%A0.svg/120px-%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E5%BA%A7%E9%96%93%E5%B8%82%E5%B8%82%E7%AB%A0.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "142182",
    "id": "kanagawa-ayase",
    "pref": "神奈川県",
    "city": "綾瀬市",
    "area": "関東",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "綾瀬市 軽度・中等度難聴児補聴器購入等補助事業",
        "amount": "基準額の2/3助成（非課税世帯等は全額）",
        "condition": "18歳未満、両耳30dB以上、手帳非該当",
        "department": "福祉部 障がい福祉課",
        "officialUrl": "https://www.city.ayase.kanagawa.jp/soshiki/shogaifukushika/shogaishafukushi/4/525.html",
        "notes": "※購入前の事前申請が必須です。指定医の意見書が必要です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5e/Emblem_of_Ayase%2C_Kanagawa.svg/120px-Emblem_of_Ayase%2C_Kanagawa.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "162019",
    "id": "toyama-toyama",
    "pref": "富山県",
    "city": "富山市",
    "area": "中部",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "富山市 軽度・中等度難聴児補聴器購入費助成事業",
        "amount": "基準額の2/3助成（所得制限あり）",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）、医師意見書",
        "department": "福祉保健部 障害福祉課",
        "officialUrl": "https://www.city.toyama.lg.jp/health/shogaisha/1010515/1003589.html",
        "notes": "※購入前の事前申請が必須です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "富山市 高齢者補聴器購入費助成事業",
        "amount": "本体購入費の1/2（上限 30,000円）",
        "condition": "65歳以上、両耳40dB以上70dB未満（手帳非該当）、医師装用必要認める者",
        "department": "福祉保健部 長寿福祉課",
        "officialUrl": "https://www.city.toyama.lg.jp/health/kourei/1018741/index.html",
        "notes": "※購入前の事前申請必須です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1b/Emblem_of_Toyama%2C_Toyama.svg/120px-Emblem_of_Toyama%2C_Toyama.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "172014",
    "id": "ishikawa-kanazawa",
    "pref": "石川県",
    "city": "金沢市",
    "area": "中部",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "金沢市 軽度・中等度難聴児補聴器購入費等助成事業",
        "amount": "片耳につき上限 44,200円（非課税世帯は上限 49,100円）",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）、医師意見書",
        "department": "福祉局 障害福祉課",
        "officialUrl": "https://www4.city.kanazawa.lg.jp/soshikikarasagasu/shogaifukushika/gyomuannai/3/9/9287.html",
        "notes": "※購入前の事前申請が必須です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cd/Emblem_of_Kanazawa%2C_Ishikawa.svg/120px-Emblem_of_Kanazawa%2C_Ishikawa.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "182010",
    "id": "fukui-fukui",
    "pref": "福井県",
    "city": "福井市",
    "area": "中部",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "福井市 軽度・中等度難聴児補聴器購入費助成事業",
        "amount": "購入費用の2/3（基準額内）",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）、医師診断",
        "department": "福祉保健部 障がい福祉課",
        "officialUrl": "https://www.city.fukui.lg.jp/fukusi/sfukusi/seido/p016639.html",
        "notes": "※購入前の事前申請が必須です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "福井市 高齢者補聴器購入費助成事業",
        "amount": "購入費用の2/3（上限 50,000円）",
        "condition": "65歳以上、市民税非課税世帯、両耳30dB以上70dB未満（手帳非該当）、耳鼻咽喉科医師意見書",
        "department": "福祉保健部 地域包括ケア推進課",
        "officialUrl": "https://www.city.fukui.lg.jp/fukusi/kfukusi/kaigoyobo/hotyouki.html",
        "notes": "※購入前の事前申請必須です。",
        "specialNote": "※市民税非課税世帯のみ対象"
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c9/Emblem_of_Fukui%2C_Fukui.svg/120px-Emblem_of_Fukui%2C_Fukui.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "192015",
    "id": "yamanashi-kofu",
    "pref": "山梨県",
    "city": "甲府市",
    "area": "中部",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "甲府市 軽度・中等度難聴児補聴器購入費等助成事業",
        "amount": "基準額の2/3助成（所得制限あり）",
        "condition": "18歳未満、両耳30dB以上（手帳非該当）、指定医意見書",
        "department": "福祉保健部 障がい福祉課",
        "officialUrl": "https://www.city.kofu.yamanashi.jp/shogaifukushi/kenko/fukushi/shogai/jose/iryo/documents/keido_tyuutoudo_nantyouji.html",
        "notes": "※購入前の事前申請が必須です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "甲府市 高齢者補聴器購入費助成金",
        "amount": "保険料第1〜3段階: 上限 50,000円（両耳 100,000円）／ 第4段階: 上限 32,000円（両耳 64,000円）",
        "condition": "65歳以上、介護保険料第1〜4段階、医師装用必要認める者（手帳非該当）",
        "department": "健康支援センター 健康政策課",
        "officialUrl": "https://www.city.kofu.yamanashi.jp/kenko_seisaku/hocyoki/2025.html",
        "notes": "※購入前の事前申請必須です。両耳購入の場合は上限額が2倍になります。",
        "specialNote": "※両耳申請時は上限最大10万円"
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/41/Emblem_of_Kofu%2C_Yamanashi.svg/120px-Emblem_of_Kofu%2C_Yamanashi.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "202011",
    "id": "nagano-nagano",
    "pref": "長野県",
    "city": "長野市",
    "area": "中部",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "長野市 軽度・中等度難聴児補聴器購入費助成事業",
        "amount": "基準額の2/3助成（市民税非課税世帯等は全額助成）",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）",
        "department": "保健福祉部 障害福祉課",
        "officialUrl": "https://www.city.nagano.nagano.jp/n102000/contents/p002311.html",
        "notes": "※購入前の事前申請が必須です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "長野市 加齢性難聴者補聴器購入費補助金",
        "amount": "購入費用の1/2（上限 30,000円）",
        "condition": "65歳以上、両耳40dB以上（手帳非該当）、市民税非課税世帯、耳鼻咽喉科医師意見書",
        "department": "保健福祉部 高齢者福祉課",
        "officialUrl": "https://www.city.nagano.nagano.jp/n101000/contents/p005882.html",
        "notes": "※購入前の事前申請必須です。市内協力店舗等での購入。",
        "specialNote": "※市民税非課税世帯のみ対象"
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b8/Emblem_of_Nagano%2C_Nagano.svg/120px-Emblem_of_Nagano%2C_Nagano.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "202029",
    "id": "nagano-matsumoto",
    "pref": "長野県",
    "city": "松本市",
    "area": "中部",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "松本市 軽度・中等度難聴児補聴器購入等費助成事業",
        "amount": "基準額の2/3助成（市民税非課税世帯等は全額助成）",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）",
        "department": "こども部 こども育成課",
        "officialUrl": "https://www.city.matsumoto.nagano.jp/soshiki/226/205977.html",
        "notes": "※購入前の事前申請が必須です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "成人・高齢者（18歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "松本市 軽度・中等度難聴者補聴器購入費助成事業",
        "amount": "購入費用の1/2（上限 30,000円）",
        "condition": "18歳以上（高齢者含む成人全般）、両耳30dB〜70dB未満（手帳非該当）、市民税非課税世帯",
        "department": "福祉部 高齢福祉課 支援担当",
        "officialUrl": "https://www.city.matsumoto.nagano.jp/site/kourei/195721.html",
        "notes": "※購入前の事前申請必須です。18歳以上の成人・高齢者を広く支援。",
        "specialNote": "※18歳以上成人・高齢者対象（非課税世帯）"
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e7/Emblem_of_Matsumoto%2C_Nagano.svg/120px-Emblem_of_Matsumoto%2C_Nagano.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "212016",
    "id": "gifu-gifu",
    "pref": "岐阜県",
    "city": "岐阜市",
    "area": "中部",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "岐阜市 軽度・中等度難聴児補聴器購入費助成事業",
        "amount": "基準額の2/3助成（非課税世帯等は全額助成）",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）、指定医判定",
        "department": "福祉部 障がい福祉課",
        "officialUrl": "https://www.city.gifu.lg.jp/kenko/syougaisyafukushi/1004706/1004712.html",
        "notes": "※購入前の事前申請が必須です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e0/Emblem_of_Gifu%2C_Gifu.svg/120px-Emblem_of_Gifu%2C_Gifu.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "221007",
    "id": "shizuoka-shizuoka",
    "pref": "静岡県",
    "city": "静岡市",
    "area": "東海",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "静岡市 軽度・中等度難聴児補聴器購入費等助成事業",
        "amount": "基準額の2/3補助（非課税世帯は全額）",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）",
        "department": "葵区・駿河区・清水区 障害者支援課",
        "officialUrl": "https://www.city.shizuoka.lg.jp/s5498/s002818.html",
        "notes": "※購入前の事前申請が必須です。指定医の意見書が必要です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "静岡市 難聴高齢者補聴器購入費補助金",
        "amount": "上限額あり（補聴器相談医診断）",
        "condition": "65歳以上、相談会受診・相談医が認めた方（手帳非該当）",
        "department": "福祉総務課・各区地域総務課",
        "officialUrl": "https://www.city.shizuoka.lg.jp/s2837/youkou/s00001.html",
        "notes": "※購入前の事前申請が必須です。聞こえの相談会への参加が必要です。",
        "specialNote": "【相談会受診要件】"
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6c/Emblem_of_Shizuoka%2C_Shizuoka.svg/120px-Emblem_of_Shizuoka%2C_Shizuoka.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "221309",
    "id": "shizuoka-hamamatsu",
    "pref": "静岡県",
    "city": "浜松市",
    "area": "東海",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "浜松市 軽度・中等度難聴児補聴器購入費等助成事業",
        "amount": "基準額の2/3補助（非課税世帯は全額）",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）",
        "department": "障害保健福祉課・各区福祉課",
        "officialUrl": "https://www.city.hamamatsu.shizuoka.jp/syoghuku/welfare/tiikiseikatusienjigyou/keityuu20250717.html",
        "notes": "※購入前の事前申請が必須です。指定医療機関の意見書が必要です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "浜松市 高齢者補聴器装用検証事業",
        "amount": "上限30,000円（購入費の1/2）",
        "condition": "65歳以上、両耳30〜70dB、初装用・アンケート協力（手帳非該当）",
        "department": "高齢者福祉課",
        "officialUrl": "https://www.city.hamamatsu.shizuoka.jp/kourei/welfare/elderly/kareihotyoki.html",
        "notes": "※購入前の事前申請が必須です。補聴器相談医の診断・指定店購入が必要です。",
        "specialNote": "【定員・アンケート要件】"
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/98/Emblem_of_Hamamatsu%2C_Shizuoka.svg/120px-Emblem_of_Hamamatsu%2C_Shizuoka.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "222038",
    "id": "shizuoka-numazu",
    "pref": "静岡県",
    "city": "沼津市",
    "area": "東海",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "沼津市 軽度・中等度難聴児補聴器購入費等助成事業",
        "amount": "基準額の1/3補助（基準額上限あり）",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）",
        "department": "障がい福祉課",
        "officialUrl": "https://www.city.numazu.shizuoka.jp/kurashi/fukushi/shogaifukushi/service/nanchoji.htm",
        "notes": "※購入前の事前申請が必須です。指定医師の意見書が必要です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "沼津市 難聴高齢者補聴器購入費助成事業",
        "amount": "上限30,000円（購入費の1/2）",
        "condition": "65歳以上、両耳40dB以上70dB未満、医師が必要と認めた方（手帳非該当）",
        "department": "長寿福祉課",
        "officialUrl": "https://www.city.numazu.shizuoka.jp/kurashi/fukushi/kaigo/shimin/hochoki.htm",
        "notes": "※購入前の事前申請が必須です。指定医の受診・意見書が必要です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": ""
  },
  {
    "cityCode": "222062",
    "id": "shizuoka-mishima",
    "pref": "静岡県",
    "city": "三島市",
    "area": "東海",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "三島市 軽度・中等度難聴児補聴器購入費助成事業",
        "amount": "基準額の2/3補助（非課税世帯は全額）",
        "condition": "18歳未満、両耳30dB以上（手帳非該当、所得制限あり）",
        "department": "障がい福祉課",
        "officialUrl": "https://www.city.mishima.shizuoka.jp/page/1746.html",
        "notes": "※購入前の事前申請が必須です。指定精密聴力検査機関の意見書が必要です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（40歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "三島市 みみサポみしま（加齢性中等度難聴者補聴器装用モニター助成実証事業）",
        "amount": "片耳上限20,000円 / 両耳上限40,000円（1/2補助）",
        "condition": "40歳以上、聴力40dB以上、初装用・アンケート協力（手帳非該当）",
        "department": "長寿政策課",
        "officialUrl": "https://www.city.mishima.shizuoka.jp/page/3468.html",
        "notes": "※購入前の事前申請が必須です。補聴器相談医の診断・アンケート協力が必要です。",
        "specialNote": "【対象: 40歳以上】"
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/86/%E9%9D%99%E5%B2%A1%E7%9C%8C%E4%B8%89%E5%B3%B6%E5%B8%82%E5%B8%82%E7%AB%A0.svg/120px-%E9%9D%99%E5%B2%A1%E7%9C%8C%E4%B8%89%E5%B3%B6%E5%B8%82%E5%B8%82%E7%AB%A0.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "222071",
    "id": "shizuoka-fujinomiya",
    "pref": "静岡県",
    "city": "富士宮市",
    "area": "東海",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "富士宮市 軽度・中等度難聴児補聴器購入費助成事業",
        "amount": "基準額の2/3補助（非課税世帯は全額）",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）",
        "department": "障がい療育支援課",
        "officialUrl": "https://www.city.fujinomiya.lg.jp/citizen/llti2b0000002n45.html",
        "notes": "※購入前の事前申請が必須です。指定医の受診・意見書が必要です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "富士宮市 高齢者補聴器購入費助成金",
        "amount": "上限30,000円（購入費の1/2）",
        "condition": "65歳以上、両耳40dB以上、医師証明書要（手帳非該当）",
        "department": "福祉企画課 福祉企画係",
        "officialUrl": "https://www.city.fujinomiya.lg.jp/1035100000/p001459.html",
        "notes": "※耳鼻咽喉科医師の証明を受けた後、購入後2か月以内に申請が必要です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0c/%E9%9D%99%E5%B2%A1%E7%9C%8C%E5%AF%8C%E5%A3%AB%E5%AE%AE%E5%B8%82%E5%B8%82%E7%AB%A0.svg/120px-%E9%9D%99%E5%B2%A1%E7%9C%8C%E5%AF%8C%E5%A3%AB%E5%AE%AE%E5%B8%82%E5%B8%82%E7%AB%A0.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "222097",
    "id": "shizuoka-shimada",
    "pref": "静岡県",
    "city": "島田市",
    "area": "東海",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "島田市 軽度・中等度難聴児補聴器購入費助成事業",
        "amount": "基準額の2/3補助（非課税世帯は全額）",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）",
        "department": "福祉課 障がい福祉係",
        "officialUrl": "https://www.city.shimada.shizuoka.jp/gyosei-docs/709087595.html",
        "notes": "※購入前の事前申請が必須です。指定医の意見書が必要です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者等（40歳以上非課税）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "島田市 高齢者等補聴器購入助成事業",
        "amount": "上限50,000円（購入費の1/2）",
        "condition": "40歳以上、市民税非課税世帯、両耳30dB以上（手帳非該当）",
        "department": "長寿介護課",
        "officialUrl": "https://www.city.shimada.shizuoka.jp/gyosei-docs/795959675.html",
        "notes": "※購入前の事前申請が必須です。助成券の交付後に購入してください。",
        "specialNote": "【対象: 40歳以上非課税】"
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7e/Emblem_of_Shimada%2C_Shizuoka.svg/120px-Emblem_of_Shimada%2C_Shizuoka.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "222101",
    "id": "shizuoka-fuji",
    "pref": "静岡県",
    "city": "富士市",
    "area": "東海",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "富士市 軽度・中等度難聴児補聴器購入費等助成事業",
        "amount": "基準額の2/3補助（非課税世帯は全額）",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）",
        "department": "障害福祉課",
        "officialUrl": "https://www.city.fuji.shizuoka.jp/1020030000/p005534.html",
        "notes": "※購入前の事前申請が必須です。指定医療機関の意見書が必要です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "富士市 難聴高齢者補聴器購入費用助成事業",
        "amount": "上限30,000円（購入費の1/2）",
        "condition": "65歳以上、聴力40dB以上70dB未満、医師が必要と認めた方（手帳非該当）",
        "department": "高齢者支援課",
        "officialUrl": "https://www.city.fuji.shizuoka.jp/1020030000/p005534.html",
        "notes": "※購入前の事前申請が必須です。認定補聴器技能者が在籍する店舗での購入が条件です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5b/Emblem_of_Fuji%2C_Shizuoka.svg/120px-Emblem_of_Fuji%2C_Shizuoka.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "222119",
    "id": "shizuoka-iwata",
    "pref": "静岡県",
    "city": "磐田市",
    "area": "東海",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "磐田市 軽度・中等度難聴児補聴器購入費等助成事業",
        "amount": "基準額の2/3補助（非課税世帯は全額）",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）",
        "department": "福祉課 障害福祉グループ",
        "officialUrl": "https://www.city.iwata.shizuoka.jp/kosodate_kyouiku/1006502/1006511.html",
        "notes": "※購入前の事前申請が必須です。指定医師の意見書が必要です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "磐田市 高齢者補聴器購入費助成事業",
        "amount": "上限30,000円（購入費の1/2）",
        "condition": "65歳以上、所得割46万円未満、両耳30dB以上、医師意見書要（手帳非該当）",
        "department": "高齢者支援課",
        "officialUrl": "https://www.city.iwata.shizuoka.jp/_res/projects/default_project/_page_/001/001/891/hochoki_chirashi.pdf",
        "notes": "※購入前の事前申請が必須です。耳鼻咽喉科医師の意見書が必要です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/61/Emblem_of_Iwata%2C_Shizuoka.svg/120px-Emblem_of_Iwata%2C_Shizuoka.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "222127",
    "id": "shizuoka-yaizu",
    "pref": "静岡県",
    "city": "焼津市",
    "area": "東海",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "焼津市 軽度・中等度難聴児補聴器購入費等助成事業",
        "amount": "基準額の2/3補助（非課税世帯は全額）",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）",
        "department": "福祉課 障害福祉担当",
        "officialUrl": "https://www.city.yaizu.lg.jp/g05-001/hochouki.html",
        "notes": "※購入前の事前申請が必須です。指定医の受診・意見書が必要です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上非課税）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "焼津市 高齢者補聴器購入費助成事業",
        "amount": "片耳上限30,000円 / 両耳上限60,000円（購入費の1/2）",
        "condition": "65歳以上、住民税非課税世帯、両耳30dB以上、医師診断要（手帳非該当）",
        "department": "地域包括ケア推進課",
        "officialUrl": "https://www.city.yaizu.lg.jp/documents/518/20260909082909.pdf",
        "notes": "※購入前の事前申請が必須です。耳鼻咽喉科医師の証明が必要です。",
        "specialNote": "【非課税世帯対象・両耳最大6万円】"
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d5/%E9%9D%99%E5%B2%A1%E7%9C%8C%E7%84%BC%E6%B4%A5%E5%B8%82%E5%B8%82%E7%AB%A0.svg/120px-%E9%9D%99%E5%B2%A1%E7%9C%8C%E7%84%BC%E6%B4%A5%E5%B8%82%E5%B8%82%E7%AB%A0.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "222135",
    "id": "shizuoka-kakegawa",
    "pref": "静岡県",
    "city": "掛川市",
    "area": "東海",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "掛川市 軽度・中等度難聴児補聴器購入費等助成事業",
        "amount": "基準額の2/3補助（非課税世帯は全額）",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）",
        "department": "福祉課 障がい福祉係",
        "officialUrl": "https://www.city.kakegawa.shizuoka.jp/gyosei/docs/737930.html",
        "notes": "※購入前の事前申請が必須です。指定医療機関の意見書が必要です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "難聴者（40歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "掛川市 難聴者補聴器購入費等助成事業",
        "amount": "65歳以上: 上限50,000円 / 40〜64歳: 上限20,000円（1/2補助）",
        "condition": "40歳以上、所得割46万円未満、両耳30〜70dB、医師意見書要（手帳非該当）",
        "department": "長寿支援課",
        "officialUrl": "https://www.city.kakegawa.shizuoka.jp/gyosei/docs/409182.html",
        "notes": "※購入前の事前申請が必須です。医師の意見書・指定登録店での購入が必要です。",
        "specialNote": "【対象: 40歳以上】"
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0d/Emblem_of_Kakegawa%2C_Shizuoka.svg/120px-Emblem_of_Kakegawa%2C_Shizuoka.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "222143",
    "id": "shizuoka-fujieda",
    "pref": "静岡県",
    "city": "藤枝市",
    "area": "東海",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "藤枝市 軽度・中等度難聴児補聴器購入費等助成事業",
        "amount": "基準額の2/3補助（非課税世帯は全額）",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）",
        "department": "障がい福祉課",
        "officialUrl": "https://www.city.fujieda.shizuoka.jp/soshiki/kenkofukushi/chiikihokatsu/oshirase/18764.html",
        "notes": "※購入前の事前申請が必須です。指定医の受診・意見書が必要です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上非課税）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "藤枝市 高齢者補聴器購入費助成事業",
        "amount": "上限50,000円（購入費の1/2）",
        "condition": "65歳以上、市民税非課税世帯、医師証明要（手帳非該当）",
        "department": "地域包括ケア推進課",
        "officialUrl": "https://www.city.fujieda.shizuoka.jp/soshiki/kenkofukushi/chiikihokatsu/oshirase/18764.html",
        "notes": "※購入前の事前申請が必須です。耳鼻咽喉科医師の証明が必要です。",
        "specialNote": "【非課税世帯対象・上限5万円】"
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d6/Emblem_of_Fujieda%2C_Shizuoka.svg/120px-Emblem_of_Fujieda%2C_Shizuoka.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "222151",
    "id": "shizuoka-gotemba",
    "pref": "静岡県",
    "city": "御殿場市",
    "area": "東海",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "御殿場市 軽度・中等度難聴児補聴器購入費等助成事業",
        "amount": "基準額の2/3補助（非課税世帯は全額）",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）",
        "department": "社会福祉課 障がい福祉スタッフ",
        "officialUrl": "https://www.city.gotemba.lg.jp/kenkou/kanri/assets/uploads/2023/04/hotyouki-1.pdf",
        "notes": "※購入前の事前申請が必須です。指定医の受診・意見書が必要です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "御殿場市 高齢者補聴器購入費助成金",
        "amount": "上限30,000円（購入費の1/2）",
        "condition": "65歳以上、両耳70dB未満、医師証明要（手帳非該当）",
        "department": "長寿福祉課 長寿福祉スタッフ",
        "officialUrl": "https://www.city.gotemba.lg.jp/kenkou/kanri/assets/uploads/2023/04/hotyouki-1.pdf",
        "notes": "※購入前の事前申請が必須です。耳鼻咽喉科医師の証明が必要です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/90/%E9%9D%99%E5%B2%A1%E7%9C%8C%E5%BE%A1%E6%AE%BF%E5%A0%B4%E5%B8%82%E5%B8%82%E7%AB%A0.svg/120px-%E9%9D%99%E5%B2%A1%E7%9C%8C%E5%BE%A1%E6%AE%BF%E5%A0%B4%E5%B8%82%E5%B8%82%E7%AB%A0.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "231002",
    "id": "aichi-nagoya",
    "pref": "愛知県",
    "city": "名古屋市",
    "area": "中部",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "名古屋市 軽度・中等度難聴児補聴器購入費助成事業",
        "amount": "基準額の10分の9助成（非課税・生保は10割全額）",
        "condition": "18歳以下、原則30dB以上、手帳非該当",
        "department": "健康福祉局 障害福祉部 障害者支援課",
        "officialUrl": "https://www.city.nagoya.jp/kenkofukushi/shougaisha/1011194/1011196.html",
        "notes": "※購入前の事前申請が必須です。各区役所福祉課が窓口となります。",
        "specialNote": "※原則30dB以上"
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d0/Emblem_of_Nagoya%2C_Aichi.svg/120px-Emblem_of_Nagoya%2C_Aichi.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "232017",
    "id": "aichi-toyohashi",
    "pref": "愛知県",
    "city": "豊橋市",
    "area": "中部",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "豊橋市 軽度・中等度難聴児補聴器購入費補助事業",
        "amount": "基準価格と購入費用のいずれか低い額の2/3補助",
        "condition": "18歳以下、両耳30dB以上（手帳非該当）、医師意見書",
        "department": "福祉部 障害福祉課",
        "officialUrl": "https://www.city.toyohashi.lg.jp/25696.htm",
        "notes": "※購入前の事前申請が必須です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "豊橋市 高齢者補聴器購入費補助事業",
        "amount": "本体購入費用の1/2（上限 30,000円）",
        "condition": "65歳以上、市民税非課税世帯、両耳30dB以上（手帳非該当）、耳鼻咽喉科専門医意見書",
        "department": "福祉部 長寿介護課",
        "officialUrl": "https://www.city.toyohashi.lg.jp/62228.htm",
        "notes": "※購入前の事前申請必須です。",
        "specialNote": "※市民税非課税世帯のみ対象"
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c2/Emblem_of_Toyohashi%2C_Aichi.svg/120px-Emblem_of_Toyohashi%2C_Aichi.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "232025",
    "id": "aichi-okazaki",
    "pref": "愛知県",
    "city": "岡崎市",
    "area": "中部",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "岡崎市 軽度・中等度難聴児補聴器購入費助成事業",
        "amount": "基準額の2/3助成（生活保護・非課税世帯等は全額助成）",
        "condition": "18歳以下、両耳30dB以上（医師装用必要認める場合）、手帳非該当",
        "department": "福祉部 障がい福祉課",
        "officialUrl": "https://www.city.okazaki.lg.jp/kenko/fukushi/1003856/1004052/1004072/1004074.html",
        "notes": "※購入前の事前申請が必須です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b3/Emblem_of_Okazaki%2C_Aichi.svg/120px-Emblem_of_Okazaki%2C_Aichi.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "232033",
    "id": "aichi-ichinomiya",
    "pref": "愛知県",
    "city": "一宮市",
    "area": "中部",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "一宮市 軽度・中等度難聴児補聴器購入費助成事業",
        "amount": "基準額の9割補助（機種により上限50,600〜137,000円範囲内）",
        "condition": "18歳未満、両耳70dB未満（手帳非該当）、医師診断",
        "department": "福祉子ども部 障害福祉課",
        "officialUrl": "https://www.city.ichinomiya.aichi.jp/fukushi/shougaifukushi/1044107/1000147/1010683/1001068.html",
        "notes": "※購入前の事前申請が必須です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "一宮市 高齢者補聴器購入費補助事業",
        "amount": "本体購入費用の1/2（上限 30,000円、片耳1台）",
        "condition": "65歳以上、市民税非課税世帯または生活保護世帯、両耳30dB以上70dB未満（手帳非該当）",
        "department": "福祉子ども部 高年福祉課",
        "officialUrl": "https://www.city.ichinomiya.aichi.jp/fukushi/kounenfukushi/kourei/1000146/1010613/1061448.html",
        "notes": "※購入前の事前申請必須です。",
        "specialNote": "※市民税非課税世帯のみ対象"
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bb/Emblem_of_Ichinomiya%2C_Aichi.svg/120px-Emblem_of_Ichinomiya%2C_Aichi.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "232041",
    "id": "aichi-seto",
    "pref": "愛知県",
    "city": "瀬戸市",
    "area": "中部",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "瀬戸市 軽度・中等度難聴児補聴器購入費等助成事業",
        "amount": "基準額または費用の低い額の1/2助成",
        "condition": "18歳未満、両耳30〜70dB未満（手帳非該当）、所得制限あり",
        "department": "健康福祉部 社会福祉課 障害福祉係",
        "officialUrl": "https://www.city.seto.aichi.jp/docs/2010/11/10/01175/index.html",
        "notes": "※購入前の事前申請が必須です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "瀬戸市 軽度・中等度難聴高齢者補聴器購入費助成事業",
        "amount": "購入費用の1/2（上限 30,000円）",
        "condition": "65歳以上、市民税非課税世帯等、両耳30dB以上（手帳非該当）、医師意見書",
        "department": "健康福祉部 高齢者福祉課",
        "officialUrl": "https://www.city.seto.aichi.jp/docs/2026/03/22/00708042202/00708042202.html",
        "notes": "※購入前の事前申請必須です。",
        "specialNote": "※市民税非課税世帯のみ対象"
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/65/Emblem_of_Seto%2C_Aichi.svg/120px-Emblem_of_Seto%2C_Aichi.svg.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "232050",
    "id": "aichi-handa",
    "pref": "愛知県",
    "city": "半田市",
    "area": "中部",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "半田市 軽度・中等度難聴児補聴器購入費助成事業",
        "amount": "基準額の9割助成（非課税・生保は10割全額助成）",
        "condition": "18歳未満、両耳30dB以上（医師装用必要認める者）、手帳非該当、所得制限あり",
        "department": "福祉部 地域福祉課（障がい福祉担当）",
        "officialUrl": "https://www.city.handa.lg.jp/kosodate/kosodate/1002056/1002059.html",
        "notes": "※購入前の事前申請が必須です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/32/Emblem_of_Handa%2C_Aichi.svg/120px-Emblem_of_Handa%2C_Aichi.svg.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "232068",
    "id": "aichi-kasugai",
    "pref": "愛知県",
    "city": "春日井市",
    "area": "中部",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "春日井市 軽度・中等度難聴児補聴器購入費等助成事業",
        "amount": "基準額の2/3助成（市民税非課税世帯は全額助成）",
        "condition": "18歳未満、両耳30dB以上（医師意見書）、手帳非該当",
        "department": "健康福祉部 障がい福祉課",
        "officialUrl": "https://www.city.kasugai.lg.jp/kenko/syogai/1033621/1002007.html",
        "notes": "※購入前の事前申請が必須です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "春日井市 高齢者補聴器購入費支給事業",
        "amount": "非課税: 上限 30,000円 ／ 課税: 上限 15,000円（購入費の1/2）",
        "condition": "65歳以上、片耳40dB以上（手帳非該当）、耳鼻咽喉科医師意見書",
        "department": "健康福祉部 介護・高齢福祉課",
        "officialUrl": "https://www.city.kasugai.lg.jp/kenko/1011073/kaigo/1035278.html",
        "notes": "※購入前の事前申請必須です。片耳40dB以上が対象。",
        "specialNote": "※課税世帯も15,000円助成"
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cc/Emblem_of_Kasugai%2C_Aichi.svg/120px-Emblem_of_Kasugai%2C_Aichi.svg.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "232106",
    "id": "aichi-kariya",
    "pref": "愛知県",
    "city": "刈谷市",
    "area": "中部",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "刈谷市 軽度・中等度難聴児補聴器購入費等助成事業",
        "amount": "基準額の2/3助成（所得制限あり）",
        "condition": "18歳到達年度末まで、両耳30dB以上（手帳非該当）、医師診断",
        "department": "福祉健康部 障害福祉課",
        "officialUrl": "https://www.city.kariya.lg.jp/kurashi/fukushikaigo/shogaifukushi/1003545/1003572/1003574.html",
        "notes": "※購入前の事前申請が必須です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "刈谷市 難聴高齢者補聴器購入費助成事業",
        "amount": "非課税: 上限 30,000円 ／ 課税: 上限 15,000円（購入費の1/2）",
        "condition": "65歳以上、両耳30dB以上（手帳非該当）、認定補聴器相談医または指定医の診断",
        "department": "福祉健康部 長寿課（高齢福祉係）",
        "officialUrl": "https://www.city.kariya.lg.jp/kurashi/fukushikaigo/koureishafukushi/1003434/1020039.html",
        "notes": "※購入前の事前申請必須です。過去5年間助成なし。",
        "specialNote": "※課税世帯も15,000円助成"
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/df/Emblem_of_Kariya%2C_Aichi.svg/120px-Emblem_of_Kariya%2C_Aichi.svg.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "232114",
    "id": "aichi-toyota",
    "pref": "愛知県",
    "city": "豊田市",
    "area": "中部",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "豊田市 軽度・中等度難聴児補聴器購入費助成事業",
        "amount": "基準額の2/3助成（所得制限あり）",
        "condition": "18歳以下、手帳非該当、医師装用必要性判定",
        "department": "福祉部 障がい福祉課",
        "officialUrl": "https://www.city.toyota.aichi.jp/kenkoiryo/shogai/1073266/1030039/1073729/1003221.html",
        "notes": "※購入前の事前申請が必須です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "成人・高齢者（18歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "豊田市 高齢者・難聴者補聴器購入費助成事業",
        "amount": "課税世帯: 上限 15,000円 ／ 市民税非課税世帯: 上限 30,000円",
        "condition": "18歳以上、市内在住、身体障害者手帳交付対象外、医師装用必要認める者",
        "department": "福祉部 高齢福祉課",
        "officialUrl": "https://www.city.toyota.aichi.jp/kenkoiryo/korei/1073713/1073628/1073380/1058154.html",
        "notes": "※購入前の事前申請必須です。18歳以上全般が対象。",
        "specialNote": "※18歳以上成人・高齢者対象（課税者も1.5万円助成）"
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2f/Emblem_of_Toyota%2C_Aichi.svg/120px-Emblem_of_Toyota%2C_Aichi.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "232122",
    "id": "aichi-anjo",
    "pref": "愛知県",
    "city": "安城市",
    "area": "中部",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "安城市 軽度・中等度難聴児補聴器購入費用等助成事業",
        "amount": "基準額の2/3助成（1個: 上限 37,000円／2個: 上限 74,000円）",
        "condition": "18歳到達年度末まで、医師診断装用必要、手帳非該当",
        "department": "福祉部 障害福祉課 障害給付係",
        "officialUrl": "https://www.city.anjo.aichi.jp/kurasu/fukushikaigo/shogai/hotyouki.html",
        "notes": "※購入前の事前申請が必須です。両耳助成あり。",
        "specialNote": "※両耳上限74,000円"
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "安城市 高齢者補聴器購入費助成事業",
        "amount": "非課税: 上限 30,000円 ／ 課税: 上限 15,000円（購入費の1/2）",
        "condition": "65歳以上、両耳30dB以上（手帳非該当）、補聴器相談医意見書",
        "department": "福祉部 高齢福祉課 高齢福祉係",
        "officialUrl": "https://www.city.anjo.aichi.jp/kurasu/fukushikaigo/koureisya/koureifukushi/koureifukushi.html",
        "notes": "※購入前の事前申請必須です。認定補聴器技能者在籍店で購入。",
        "specialNote": "※課税世帯も15,000円助成"
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f3/Emblem_of_Anjo%2C_Aichi.svg/120px-Emblem_of_Anjo%2C_Aichi.svg.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "232131",
    "id": "aichi-nishio",
    "pref": "愛知県",
    "city": "西尾市",
    "area": "中部",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "西尾市 軽度・中等度難聴児補聴器購入等助成事業",
        "amount": "購入費用の2/3助成（1個: 上限 36,000円／2個: 上限 72,000円）",
        "condition": "18歳到達年度末まで、両耳30dB以上（指定医意見書）、手帳非該当、所得制限あり",
        "department": "健康福祉部 福祉課（障がい福祉担当）",
        "officialUrl": "https://www.city.nishio.aichi.jp/kenkofukushi/shogai/index.html",
        "notes": "※購入前の事前申請が必須です。両耳助成あり。",
        "specialNote": "※両耳上限72,000円"
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "西尾市 難聴高齢者補聴器購入費助成事業",
        "amount": "第1〜3段階: 上限 30,000円 ／ 第4〜7段階: 上限 15,000円（購入費の1/2）",
        "condition": "65歳以上、両耳30dB以上（手帳非該当）、補聴器相談医意見書、介護保険料第1〜7段階",
        "department": "健康福祉部 長寿課（高齢福祉担当）",
        "officialUrl": "https://www.city.nishio.aichi.jp/kenkofukushi/kourei/1001451/1011583.html",
        "notes": "※購入前の事前申請必須です。認定補聴器技能者在籍店で購入。",
        "specialNote": "※第4〜7段階も15,000円助成"
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4e/Emblem_of_Nishio%2C_Aichi.svg/120px-Emblem_of_Nishio%2C_Aichi.svg.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "232173",
    "id": "aichi-konan",
    "pref": "愛知県",
    "city": "江南市",
    "area": "中部",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "江南市 軽度・中等度難聴児補聴器購入費等給付事業",
        "amount": "基準額の2/3給付（所得制限・世帯状況による）",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）、指定医意見書",
        "department": "ふくし部 ふくし支援課 障がい者支援グループ",
        "officialUrl": "https://www.city.konan.lg.jp/dl-list/fukushi/1002351.html",
        "notes": "※購入前の事前申請が必須です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "江南市 難聴高齢者補聴器購入費助成事業",
        "amount": "購入費用の1/2（上限 30,000円）",
        "condition": "65歳以上、住民税非課税世帯、両耳30〜70dB未満（手帳非該当）、指定医意見書",
        "department": "ふくし部 地域ふくし課",
        "officialUrl": "https://www.city.konan.lg.jp/kurashi/kaigo/1007060/1016134.html",
        "notes": "※購入前の事前申請必須です。",
        "specialNote": "※住民税非課税世帯のみ対象"
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5c/Emblem_of_Konan%2C_Aichi.svg/120px-Emblem_of_Konan%2C_Aichi.svg.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "232190",
    "id": "aichi-komaki",
    "pref": "愛知県",
    "city": "小牧市",
    "area": "中部",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "小牧市 軽度・中等度難聴児補聴器購入費助成事業",
        "amount": "基準額の2/3助成（市民税非課税・生保は全額）",
        "condition": "18歳未満、両耳30dB以上（医師装用必要判定）、手帳非該当",
        "department": "福祉部 障がい福祉課（障がい福祉係）",
        "officialUrl": "https://www.city.komaki.aichi.jp/admin/soshiki/fukushi/shogaifukushi/shogaifukushi/1_1/6/3/41870.html",
        "notes": "※購入前の事前申請が必須です。市契約業者で購入。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "成人・高齢者（18歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "小牧市 中等度難聴者補聴器購入費給付事業",
        "amount": "購入費用の2/3（上限 35,266円）",
        "condition": "18歳以上、生活保護または市民税非課税世帯、両耳40dB以上（手帳非該当）、医師意見書",
        "department": "福祉部 障がい福祉課（障がい福祉係）",
        "officialUrl": "https://www.city.komaki.aichi.jp/admin/soshiki/fukushi/shogaifukushi/shogaifukushi/1_1/6/3/45404.html",
        "notes": "※購入前の事前申請必須です。18歳以上全般（非課税世帯等）が対象。",
        "specialNote": "※18歳以上対象・非課税世帯等限定"
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3b/Logo_of_Komaki_City.svg/120px-Logo_of_Komaki_City.svg.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "232203",
    "id": "aichi-inazawa",
    "pref": "愛知県",
    "city": "稲沢市",
    "area": "中部",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "稲沢市 軽度・中等度難聴児の補聴器購入費の助成",
        "amount": "基準額と費用の低い額の一定割合助成",
        "condition": "18歳未満、両耳30dB以上（または医師装用必要診断）、手帳非該当",
        "department": "市民福祉部 福祉課 障害福祉グループ",
        "officialUrl": "https://www.city.inazawa.aichi.jp/0000001473.html",
        "notes": "※購入前の事前申請が必須です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "稲沢市 難聴高齢者補聴器購入費助成事業",
        "amount": "購入費用の1/2（上限 37,000円）",
        "condition": "65歳以上、市町村民税非課税世帯等、両耳30〜70dB未満（手帳非該当）、指定医意見書",
        "department": "市民福祉部 福祉課 障害福祉グループ",
        "officialUrl": "https://www.city.inazawa.aichi.jp/0000001524.html",
        "notes": "※購入前の事前申請必須です。言語聴覚士または認定補聴器技能者が調整。",
        "specialNote": "※市町村民税非課税世帯のみ対象"
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f1/Emblem_of_Inazawa%2C_Aichi.svg/120px-Emblem_of_Inazawa%2C_Aichi.svg.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "232220",
    "id": "aichi-tokai",
    "pref": "愛知県",
    "city": "東海市",
    "area": "中部",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "東海市 軽度・中等度難聴児補聴器購入費等補助金",
        "amount": "購入費用の2/3補助（千円未満切り捨て、上限額あり）",
        "condition": "18歳未満、両耳30dB以上（手帳非該当）、指定医意見書、所得制限あり",
        "department": "福祉部 こども課",
        "officialUrl": "https://www.city.tokai.aichi.jp/kosodate/1002083/1002148/1002155.html",
        "notes": "※購入前の事前申請が必須です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "東海市 難聴高齢者補聴器購入費補助事業",
        "amount": "非課税: 上限 50,000円 ／ 課税: 上限 25,000円（購入費の1/2）",
        "condition": "65歳以上、両耳30dB以上（手帳非該当）、補聴器相談医または指定医の診断",
        "department": "福祉部 高齢福祉課",
        "officialUrl": "https://www.city.tokai.aichi.jp/kurashi/1008160/1008874.html",
        "notes": "※購入前の事前申請必須です。手厚い上限5万円助成。",
        "specialNote": "※課税世帯も25,000円助成"
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f0/Emblem_of_Tokai%2C_Aichi.svg/120px-Emblem_of_Tokai%2C_Aichi.svg.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "232238",
    "id": "aichi-obu",
    "pref": "愛知県",
    "city": "大府市",
    "area": "中部",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "大府市 難聴児の補聴器の助成（購入・修理）",
        "amount": "基準額の2/3助成（所得制限あり）",
        "condition": "18歳未満、両耳30dB以上（または医師装用必要認める者）、手帳非該当",
        "department": "健康福祉部 高齢障がい支援課 障がい支援係",
        "officialUrl": "https://www.city.obu.aichi.jp/kenko/shogai_shien/shogai_service/1026230/1004944.html",
        "notes": "※購入前の事前申請が必須です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "大府市 難聴高齢者補聴器助成事業",
        "amount": "非課税: 上限 30,000円 ／ 課税: 上限 15,000円（購入費の1/2）",
        "condition": "65歳以上、両耳30dB以上（手帳非該当）、補聴器相談医または指定医の判定",
        "department": "健康福祉部 高齢障がい支援課 高齢福祉係",
        "officialUrl": "https://www.city.obu.aichi.jp/kenko/shogai_shien/shogai_service/1026230/1026748.html",
        "notes": "※購入前の事前申請必須です。",
        "specialNote": "※課税世帯も15,000円助成"
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/56/Emblem_of_%C5%8Cbu%2C_Aichi.svg/120px-Emblem_of_%C5%8Cbu%2C_Aichi.svg.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "252018",
    "id": "shiga-otsu",
    "pref": "滋賀県",
    "city": "大津市",
    "area": "近畿",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "大津市 軽度・中等度難聴児補聴器購入費等助成事業",
        "amount": "基準額の2/3助成（生活保護・非課税世帯等は全額助成）",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）、指定医意見書",
        "department": "福祉子ども部 障害福祉課",
        "officialUrl": "https://www.city.otsu.lg.jp/soshiki/020/1408/g/d/139591.html",
        "notes": "※購入前の事前申請が必須です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/11/Emblem_of_Otsu%2C_Shiga.svg/120px-Emblem_of_Otsu%2C_Shiga.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "252026",
    "id": "shiga-hikone",
    "pref": "滋賀県",
    "city": "彦根市",
    "area": "近畿",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "彦根市 軽度・中等度難聴児補聴器購入費助成事業",
        "amount": "基準額の2/3（非課税世帯は全額）",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）",
        "department": "福祉保健部 障害福祉課",
        "officialUrl": "https://www.city.hikone.lg.jp/section/reiki_int/act/110002003.html",
        "notes": "※購入前の事前申請が必須です。指定医師の意見書が必要です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fb/Emblem_of_Hikone%2C_Shiga.svg/120px-Emblem_of_Hikone%2C_Shiga.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "252042",
    "id": "shiga-omihachiman",
    "pref": "滋賀県",
    "city": "近江八幡市",
    "area": "近畿",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "近江八幡市 軽度・中等度難聴児補聴器購入費助成事業",
        "amount": "基準額の2/3（非課税世帯は全額）",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）",
        "department": "健康福祉部 障がい福祉課",
        "officialUrl": "https://www1.g-reiki.net/city.omihachiman/reiki_honbun/r389RG00001519.html",
        "notes": "※購入前の事前申請が必須です。専門医の意見書が必要です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#EFF6FF",
        "badgeColor": "#1D4ED8",
        "title": "近江八幡市 高齢者補聴器購入費助成事業",
        "amount": "上限 20,000円（購入費用の1/2）",
        "condition": "65歳以上、中等度難聴（両耳40dB以上70dB未満）、耳鼻咽喉科医師の意見書がある方、市民税非課税世帯等",
        "department": "健康福祉部 高齢福祉課",
        "officialUrl": "https://www.city.omihachiman.lg.jp/soshiki/choju/shien/27651.html",
        "notes": "※購入前の事前申請が必須です。認定補聴器技能者等の要件あり。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1b/Emblem_of_%C5%8Cmihachiman%2C_Shiga.svg/120px-Emblem_of_%C5%8Cmihachiman%2C_Shiga.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "252069",
    "id": "shiga-kusatsu",
    "pref": "滋賀県",
    "city": "草津市",
    "area": "近畿",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "草津市 軽度・中等度難聴児補聴器購入等助成事業",
        "amount": "基準額の2/3（非課税世帯は全額）",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）",
        "department": "健康福祉部 障害福祉課",
        "officialUrl": "https://www1.g-reiki.net/kusatsu/reiki_honbun/k007RG00001031.html",
        "notes": "※購入前の事前申請が必須です。指定医の受診・意見書が必要です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c2/Emblem_of_Kusatsu%2C_Shiga.svg/120px-Emblem_of_Kusatsu%2C_Shiga.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "252077",
    "id": "shiga-moriyama",
    "pref": "滋賀県",
    "city": "守山市",
    "area": "近畿",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "守山市 軽度・中等度難聴児補聴器購入費助成事業",
        "amount": "基準額の2/3（非課税世帯は全額）",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）",
        "department": "健康福祉部 障害福祉課",
        "officialUrl": "https://www.city.moriyama.lg.jp/kenkoufukushi/koureihukushi/1002580/1011439.html",
        "notes": "※購入前の事前申請が必須です。指定医師の意見書が必要です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#EFF6FF",
        "badgeColor": "#1D4ED8",
        "title": "守山市 高齢者補聴器購入費助成事業",
        "amount": "非課税世帯: 上限 40,000円 / 課税世帯: 上限 20,000円（本体購入費用の1/2）",
        "condition": "65歳以上、聴力40dB以上（医師の証明書必須）、市民税課税状況に応じた助成",
        "department": "健康福祉部 高齢福祉課",
        "officialUrl": "https://www.city.moriyama.lg.jp/kenkoufukushi/koureihukushi/1002580/1011439.html",
        "notes": "※購入前の事前申請が必須です。指定医療機関等の証明書が必要です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/11/Emblem_of_Moriyama%2C_Shiga.svg/120px-Emblem_of_Moriyama%2C_Shiga.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "261009",
    "id": "kyoto-kyoto",
    "pref": "京都府",
    "city": "京都市",
    "area": "近畿",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "京都市 軽度・中等度難聴児補聴器購入費等助成事業",
        "amount": "基準額の2/3助成（非課税世帯は全額）",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）",
        "department": "保健福祉局 障害保健福祉推進室",
        "officialUrl": "https://www.city.kyoto.lg.jp/hagukumi/page/0000254466.html",
        "notes": "※事前申請必須です。各区役所保健福祉センターが窓口です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/83/Emblem_of_Kyoto%2C_Kyoto.svg/120px-Emblem_of_Kyoto%2C_Kyoto.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "262048",
    "id": "kyoto-uji",
    "pref": "京都府",
    "city": "宇治市",
    "area": "近畿",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "宇治市 軽度・中等度難聴児補聴器購入費等助成事業",
        "amount": "基準額の2/3（非課税世帯は全額）",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）",
        "department": "福祉保健部 障害福祉課",
        "officialUrl": "https://www.city.uji.kyoto.jp/soshiki/50/6307.html",
        "notes": "※購入前の事前申請が必須です。指定医師の意見書が必要です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ea/Emblem_of_Uji%2C_Kyoto.svg/120px-Emblem_of_Uji%2C_Kyoto.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "262064",
    "id": "kyoto-kameoka",
    "pref": "京都府",
    "city": "亀岡市",
    "area": "近畿",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "亀岡市 軽度・中等度難聴児補聴器購入費等助成事業",
        "amount": "基準額の2/3（非課税世帯は全額）",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）",
        "department": "健康福祉部 障がい福祉課",
        "officialUrl": "https://www.city.kameoka.kyoto.jp/reiki_int/reiki_honbun/k108RG00001225.html",
        "notes": "※購入前の事前申請が必須です。指定医療機関等の意見書が必要です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#EFF6FF",
        "badgeColor": "#1D4ED8",
        "title": "亀岡市 高齢者補聴器購入費等助成事業",
        "amount": "上限 20,000円（購入費用の1/2）",
        "condition": "65歳以上、両耳40dB以上70dB未満（中等度難聴）、耳鼻咽喉科医師意見書あり、市民税非課税世帯等",
        "department": "健康福祉部 高齢福祉課",
        "officialUrl": "https://www.city.kameoka.kyoto.jp/soshiki/25/87516.html",
        "notes": "※購入前の事前申請が必須です。医師の意見書が必要です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ab/Emblem_of_Kameoka%2C_Kyoto.svg/120px-Emblem_of_Kameoka%2C_Kyoto.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "262099",
    "id": "kyoto-nagaokakyo",
    "pref": "京都府",
    "city": "長岡京市",
    "area": "近畿",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "長岡京市 軽度・中等度難聴児補聴器購入費等助成事業",
        "amount": "基準額の2/3（非課税世帯は全額）",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）",
        "department": "福祉部 障がい福祉課",
        "officialUrl": "https://www.city.nagaokakyo.lg.jp/0000004740.html",
        "notes": "※購入前の事前申請が必須です。指定医療機関等の意見書が必要です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": ""
  },
  {
    "cityCode": "262111",
    "id": "kyoto-kyotanabe",
    "pref": "京都府",
    "city": "京田辺市",
    "area": "近畿",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "京田辺市 軽度・中等度難聴児補聴器購入費等助成事業",
        "amount": "基準額の2/3（非課税世帯は全額）",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）",
        "department": "健康福祉部 障がい福祉課",
        "officialUrl": "https://www.city.kyotanabe.lg.jp/kosodate/0000006696.html",
        "notes": "※購入前の事前申請が必須です。指定医師の意見書が必要です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#EFF6FF",
        "badgeColor": "#1D4ED8",
        "title": "京田辺市 高齢者補聴器購入費補助金",
        "amount": "上限 20,000円（購入費用の1/2）",
        "condition": "65歳以上、耳鼻咽喉科医師の受診等により補聴器装用が必要と認められた方、市民税非課税世帯等",
        "department": "健康福祉部 高齢介護課",
        "officialUrl": "https://www.city.kyotanabe.lg.jp/0000020734.html",
        "notes": "※購入前の事前申請が必須です。医師の証明書が必要です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": ""
  },
  {
    "cityCode": "262145",
    "id": "kyoto-kizugawa",
    "pref": "京都府",
    "city": "木津川市",
    "area": "近畿",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "木津川市 軽度・中等度難聴児補聴器購入費助成事業",
        "amount": "基準額の2/3（非課税世帯は全額）",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）",
        "department": "健康福祉部 社会福祉課 障害福祉係",
        "officialUrl": "https://www.city.kizugawa.lg.jp/0000001048.html",
        "notes": "※購入前の事前申請が必須です。指定医の受診・意見書が必要です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/88/Emblem_of_Kizugawa%2C_Kyoto.svg/120px-Emblem_of_Kizugawa%2C_Kyoto.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "271004",
    "id": "osaka-osaka",
    "pref": "大阪府",
    "city": "大阪市",
    "area": "近畿",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "大阪市 難聴児補聴器購入費等支給事業",
        "amount": "基準額（約5.9万円〜）の9割助成（非課税・生保は10割全額）※所得制限なし",
        "condition": "18歳未満、両耳30dB以上、手帳非該当（令和6年4月より所得制限撤廃）",
        "department": "福祉局 障がい者施策部 障がい福祉課",
        "officialUrl": "https://www.city.osaka.lg.jp/fukushi/page/0000117931.html",
        "notes": "※購入前の事前申請が必須です。各区役所保健福祉課が窓口です。",
        "specialNote": "※所得制限なし（令和6年撤廃）"
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "大阪市 “聞こえ”のサポート事業（補聴器購入助成）",
        "amount": "上限 25,000円（本体購入費用）",
        "condition": "65歳以上、両耳30dB以上70dB未満、手帳非該当、相談医意見書、購入後の介護予防活動参加報告",
        "department": "福祉局 高齢者施策部 高齢福祉課",
        "officialUrl": "https://www.city.osaka.lg.jp/fukushi/page/0000648793.html",
        "notes": "※購入前申請必須。購入後に介護予防活動（アスマイル活用等）への参加報告が必要です。",
        "specialNote": "※受給後に介護予防活動への参加報告が必要"
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2e/Emblem_of_Osaka%2C_Osaka.svg/120px-Emblem_of_Osaka%2C_Osaka.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "271403",
    "id": "osaka-sakai",
    "pref": "大阪府",
    "city": "堺市",
    "area": "近畿",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "堺市 軽度・中等度難聴児補聴器購入費等助成事業",
        "amount": "基準額の9割〜全額助成",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）",
        "department": "健康福祉局 障害福祉部 障害支援課",
        "officialUrl": "https://www.city.sakai.lg.jp/kenko/fukushi/shogai/sonota/kikoenikusa.html",
        "notes": "※購入前の事前申請が必須です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f8/Emblem_of_Sakai%2C_Osaka.svg/120px-Emblem_of_Sakai%2C_Osaka.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "272027",
    "id": "osaka-kishiwada",
    "pref": "大阪府",
    "city": "岸和田市",
    "area": "近畿",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "岸和田市 軽度・中等度難聴児補聴器購入費等助成事業",
        "amount": "基準額の2/3助成（非課税世帯等は全額）",
        "condition": "18歳未満、両耳30dB以上70dB未満、手帳非該当",
        "department": "福祉部 障害者支援課",
        "officialUrl": "https://www.city.kishiwada.lg.jp/page/105-nannchouji-hochouki-2024.html",
        "notes": "※購入前の事前申請が必須です。指定医の意見書が必要です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "岸和田市 高齢者補聴器購入費助成事業",
        "amount": "上限20,000円助成",
        "condition": "65歳以上、市民税非課税世帯、耳鼻科受診証明、手帳非該当",
        "department": "福祉部 高齢介護課",
        "officialUrl": "https://www.city.kishiwada.lg.jp/page/08koureisya-hotyoukizyosei.html",
        "notes": "※購入前の事前申請が必須です。指定医師の証明書が必要です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c5/Emblem_of_Kishiwada%2C_Osaka.svg/120px-Emblem_of_Kishiwada%2C_Osaka.svg.png"
  },
  {
    "cityCode": "272035",
    "id": "osaka-toyonaka",
    "pref": "大阪府",
    "city": "豊中市",
    "area": "近畿",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "豊中市 難聴児補聴器交付事業",
        "amount": "基準額の約2/3助成（非課税世帯等は全額）",
        "condition": "18歳未満、両耳30dB以上70dB未満、手帳非該当",
        "department": "福祉部 障害福祉課",
        "officialUrl": "https://www.city.toyonaka.osaka.jp/joho/reiki/youkou/fukushi/shougaifukushi/kyufu.html",
        "notes": "※購入前の事前申請が必須です。指定医の意見書が必要です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c4/Emblem_of_Toyonaka%2C_Osaka.svg/120px-Emblem_of_Toyonaka%2C_Osaka.svg.png"
  },
  {
    "cityCode": "272051",
    "id": "osaka-suita",
    "pref": "大阪府",
    "city": "吹田市",
    "area": "近畿",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "吹田市 軽度・中等度難聴児補聴器購入費助成事業",
        "amount": "基準額の2/3助成（非課税世帯等は全額）",
        "condition": "18歳未満、両耳30dB以上70dB未満、手帳非該当",
        "department": "福祉部 障がい福祉室",
        "officialUrl": "https://www.city.suita.osaka.jp/kenko/1018669/1018678/1014912.html",
        "notes": "※購入前の事前申請が必須です。指定医の意見書が必要です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0d/Emblem_of_Suita%2C_Osaka.svg/120px-Emblem_of_Suita%2C_Osaka.svg.png"
  },
  {
    "cityCode": "272078",
    "id": "osaka-takatsuki",
    "pref": "大阪府",
    "city": "高槻市",
    "area": "近畿",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "高槻市 難聴児特別補聴器購入費助成事業",
        "amount": "基準額の2/3助成（生活保護世帯等は全額助成・所得制限撤廃）",
        "condition": "18歳未満、両耳30dB以上（手帳非該当）、医師意見書",
        "department": "健康福祉部 障がい福祉課",
        "officialUrl": "https://www.city.takatsuki.osaka.jp/soshiki/36/139534.html",
        "notes": "※購入前の事前申請が必須です（所得制限なし）。",
        "specialNote": "※所得制限撤廃"
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "高槻市 高齢者補聴器購入費助成事業",
        "amount": "購入費用の1/2（上限 30,000円）",
        "condition": "65歳以上、両耳40dB以上（手帳非該当）、健幸パスポート取得者、医師装用必要認める者",
        "department": "健康福祉部 長寿介護課",
        "officialUrl": "https://www.city.takatsuki.osaka.jp/site/koreisha-ikiiki/176791.html",
        "notes": "※購入前の事前申請必須です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cf/Emblem_of_Takatsuki%2C_Osaka.svg/120px-Emblem_of_Takatsuki%2C_Osaka.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "272094",
    "id": "osaka-moriguchi",
    "pref": "大阪府",
    "city": "守口市",
    "area": "近畿",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "守口市 軽度難聴児補聴器交付事業",
        "amount": "基準額の2/3助成（非課税世帯等は全額）",
        "condition": "18歳未満、両耳30dB以上、手帳非該当、所得制限あり",
        "department": "健康福祉部 障がい福祉課",
        "officialUrl": "https://www.city.moriguchi.osaka.jp/material/files/group/77/keidonanchoujihochouki.pdf",
        "notes": "※購入前の事前申請が必須です。指定医の意見書が必要です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "守口市 高齢者補聴器購入費助成事業",
        "amount": "購入費の1/2（上限25,000円助成）",
        "condition": "65歳以上、耳鼻咽喉科医師が必要性を証明、手帳非該当",
        "department": "健康福祉部 高齢介護課",
        "officialUrl": "https://www.city.moriguchi.osaka.jp/kakukanoannai/kenkofukushibu/koreikaigoka/koureikaigo/korei_fukushi/seikatsu_shien/20351.html",
        "notes": "※購入前の事前申請が必須です。指定医師の証明書が必要です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/91/Emblem_of_Moriguchi%2C_Osaka.svg/120px-Emblem_of_Moriguchi%2C_Osaka.svg.png"
  },
  {
    "cityCode": "272108",
    "id": "osaka-hirakata",
    "pref": "大阪府",
    "city": "枚方市",
    "area": "近畿",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "枚方市 軽度・中度難聴児への補聴器交付事業",
        "amount": "基準額の2/3助成（所得制限あり）",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）、指定医判定",
        "department": "福祉部 障害企画課",
        "officialUrl": "https://www.city.hirakata.osaka.jp/0000049772.html",
        "notes": "※購入前の事前申請が必須です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "枚方市 高齢者補聴器購入費助成事業",
        "amount": "上限 25,000円（1台、1人1回限り）",
        "condition": "65歳以上、手帳非該当、医師の補聴器必要意見書、過去に未受給",
        "department": "福祉部 長寿社会推進室 高齢支援担当",
        "officialUrl": "https://www.city.hirakata.osaka.jp/kourei/0000051005.html",
        "notes": "※購入前の事前申請必須です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/52/Emblem_of_Hirakata%2C_Osaka.svg/120px-Emblem_of_Hirakata%2C_Osaka.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "272116",
    "id": "osaka-ibaraki",
    "pref": "大阪府",
    "city": "茨木市",
    "area": "近畿",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "茨木市 軽度難聴児補聴器購入等費用補助金",
        "amount": "基準額の2/3助成（所得制限撤廃、非課税世帯等は全額）",
        "condition": "18歳未満、両耳30dB以上、手帳非該当",
        "department": "こども育成部 発達支援課",
        "officialUrl": "https://www.city.ibaraki.osaka.jp/kikou/kodomoikusei/hattatsu/menu/40353.html",
        "notes": "※購入前の事前申請が必須です。医師の意見書が必要です。",
        "specialNote": "【所得制限なし】"
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/40/Emblem_of_Ibaraki%2C_Osaka.svg/120px-Emblem_of_Ibaraki%2C_Osaka.svg.png"
  },
  {
    "cityCode": "272124",
    "id": "osaka-yao",
    "pref": "大阪府",
    "city": "八尾市",
    "area": "近畿",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "八尾市 難聴児補聴器等助成事業",
        "amount": "基準額の2/3助成（非課税世帯等は全額助成）",
        "condition": "18歳未満、両耳30dB以上（手帳非該当）、医師意見書",
        "department": "健康福祉部 障がい福祉課",
        "officialUrl": "https://www.city.yao.osaka.jp/kenkou_fukushi/shougaisha_hukushi/1008105/1008108.html",
        "notes": "※購入前の事前申請が必須です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "八尾市 高齢者補聴器購入費助成事業",
        "amount": "購入費用相当額（上限 25,000円）",
        "condition": "65歳以上、住民税非課税、手帳非該当、医師の必要性意見書",
        "department": "健康福祉部 高齢介護課",
        "officialUrl": "https://www.city.yao.osaka.jp/kenkou_fukushi/koureisha_hukushi/1007883/1007903.html",
        "notes": "※購入前の事前申請必須です。",
        "specialNote": "※住民税非課税世帯のみ対象"
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cb/Emblem_of_Yao%2C_Osaka.svg/120px-Emblem_of_Yao%2C_Osaka.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "272159",
    "id": "osaka-neyagawa",
    "pref": "大阪府",
    "city": "寝屋川市",
    "area": "近畿",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "寝屋川市 子ども用補聴器購入等費用助成事業",
        "amount": "基準額の2/3助成（所得制限あり）",
        "condition": "18歳未満、手帳非該当、指定医師判定",
        "department": "福祉部 障害福祉課",
        "officialUrl": "https://www.city.neyagawa.osaka.jp/organization_list/fukushi/shogaifukushi/other/yuusoutaiou/1586408335353.html",
        "notes": "※購入前の事前申請が必須です（郵送申請対応）。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4b/Emblem_of_Neyagawa%2C_Osaka.svg/120px-Emblem_of_Neyagawa%2C_Osaka.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "272191",
    "id": "osaka-izumi",
    "pref": "大阪府",
    "city": "和泉市",
    "area": "近畿",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "和泉市 軽度・中等度難聴児補聴器購入費助成事業",
        "amount": "基準額の2/3助成（非課税世帯等は全額）",
        "condition": "18歳未満、両耳30dB以上60dB未満、手帳非該当",
        "department": "福祉部 障がい福祉課",
        "officialUrl": "https://www.city.osaka-izumi.lg.jp/kakukano/fukusibu/syoufukusika/gixyoumu/shiminmuke/jixyosei/hosougu/14120.html",
        "notes": "※購入前の事前申請が必須です。指定医の意見書が必要です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e5/Emblem_of_Izumi%2C_Osaka.svg/120px-Emblem_of_Izumi%2C_Osaka.svg.png"
  },
  {
    "cityCode": "272230",
    "id": "osaka-kadoma",
    "pref": "大阪府",
    "city": "門真市",
    "area": "近畿",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "門真市 軽度・中等度難聴児補聴器交付事業",
        "amount": "基準額の給付/助成（非課税世帯等は全額）",
        "condition": "18歳未満、両耳30dB以上60dB未満、手帳非該当",
        "department": "健康福祉部 障がい福祉課",
        "officialUrl": "https://www.city.kadoma.osaka.jp/sukusuku/kakuka/shogaihukushi/kyufuiryou/6231.html",
        "notes": "※購入前の事前申請が必須です。指定医の意見書が必要です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9f/Emblem_of_Kadoma%2C_Osaka.svg/120px-Emblem_of_Kadoma%2C_Osaka.svg.png"
  },
  {
    "cityCode": "272272",
    "id": "osaka-higashiosaka",
    "pref": "大阪府",
    "city": "東大阪市",
    "area": "近畿",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "東大阪市 難聴児特別補聴器購入等費用一部支給事業",
        "amount": "基準額の2/3助成（非課税世帯等は全額助成）",
        "condition": "18歳未満、両耳30dB以上（手帳非該当）、医師意見書",
        "department": "福祉部 障害福祉課",
        "officialUrl": "https://www.city.higashiosaka.lg.jp/0000025245.html",
        "notes": "※購入前の事前申請が必須です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "東大阪市 高齢者補聴器購入費助成事業",
        "amount": "助成上限 30,000円（1人1回限り）",
        "condition": "65歳以上、住民税非課税世帯、手帳非該当、耳鼻咽喉科医師意見書",
        "department": "福祉部 高齢介護課",
        "officialUrl": "https://www.city.higashiosaka.lg.jp/0000039824.html",
        "notes": "※購入前の事前申請必須です。",
        "specialNote": "※住民税非課税世帯のみ対象"
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f6/Emblem_of_Higashiosaka%2C_Osaka.svg/120px-Emblem_of_Higashiosaka%2C_Osaka.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "281000",
    "id": "hyogo-kobe",
    "pref": "兵庫県",
    "city": "神戸市",
    "area": "近畿",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "神戸市 軽度・中等度難聴児補聴器購入費等助成事業",
        "amount": "基準額の2/3補助（非課税世帯等は全額助成）",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）",
        "department": "福祉局 障害福祉課 給付係",
        "officialUrl": "https://www.city.kobe.lg.jp/a95295/kenko/handicap/zaitakufukushi/kigu/nanchojihochoki.html",
        "notes": "※購入前の事前申請が必須です。各区役所保健福祉課が窓口です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b4/Emblem_of_Kobe%2C_Hyogo.svg/120px-Emblem_of_Kobe%2C_Hyogo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "282014",
    "id": "hyogo-himeji",
    "pref": "兵庫県",
    "city": "姫路市",
    "area": "近畿",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "姫路市 軽・中度難聴児補聴器購入費等助成制度",
        "amount": "基準額の2/3助成（非課税世帯等は全額助成）",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）、指定医意見書",
        "department": "健康福祉局 障害福祉課",
        "officialUrl": "https://www.city.himeji.lg.jp/kurashi/0000000900.html",
        "notes": "※購入前の事前申請が必須です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/90/Emblem_of_Himeji%2C_Hyogo.svg/120px-Emblem_of_Himeji%2C_Hyogo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "282022",
    "id": "hyogo-amagasaki",
    "pref": "兵庫県",
    "city": "尼崎市",
    "area": "近畿",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "尼崎市 軽・中度難聴児補聴器購入費等助成事業",
        "amount": "基準額の2/3助成（非課税世帯等は全額助成）",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）、指定医意見書",
        "department": "健康福祉局 障害福祉課",
        "officialUrl": "https://www.city.amagasaki.hyogo.jp/kurashi/syogaisya/tetyou/1004253.html",
        "notes": "※購入前の事前申請が必須です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cf/Emblem_of_Amagasaki%2C_Hyogo.svg/120px-Emblem_of_Amagasaki%2C_Hyogo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "282031",
    "id": "hyogo-akashi",
    "pref": "兵庫県",
    "city": "明石市",
    "area": "近畿",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "明石市 軽・中度難聴児補聴器購入費等助成事業",
        "amount": "基準額の2/3助成（非課税世帯等は全額助成）",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）、指定医意見書",
        "department": "福祉局 障害福祉課",
        "officialUrl": "https://www.city.akashi.lg.jp/fukushi/shougai_fu_ka/hosougu/hosougu-keityuudonanntyoujihotyouki.html",
        "notes": "※購入前の事前申請が必須です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "明石市 高齢者補聴器購入費助成事業",
        "amount": "上限 20,000円（1人1回限り）",
        "condition": "65歳以上、手帳非該当、中等度難聴程度で耳鼻科医師が必要認める者",
        "department": "福祉局 高年介護室 高年福祉係",
        "officialUrl": "https://www.city.akashi.lg.jp/fukushi/k_kaigo_shitsu/konenfukushi/hochoukijosei.html",
        "notes": "※購入前の事前申請必須です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/86/Emblem_of_Akashi%2C_Hyogo.svg/120px-Emblem_of_Akashi%2C_Hyogo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "282049",
    "id": "hyogo-nishinomiya",
    "pref": "兵庫県",
    "city": "西宮市",
    "area": "近畿",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "西宮市 軽・中度難聴児補聴器購入費等助成事業",
        "amount": "基準額の2/3助成（非課税世帯等は全額助成）",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）、医師意見書",
        "department": "健康福祉局 福祉総務部 障害福祉課",
        "officialUrl": "https://www.nishi.or.jp/kenko/fukushi/hosogu/hochokikonyu.html",
        "notes": "※購入前の事前申請が必須です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/52/Emblem_of_Nishinomiya%2C_Hyogo.svg/120px-Emblem_of_Nishinomiya%2C_Hyogo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "282073",
    "id": "hyogo-itami",
    "pref": "兵庫県",
    "city": "伊丹市",
    "area": "近畿",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "伊丹市 軽度・中等度難聴児補聴器購入費等助成事業",
        "amount": "基準額を上限として購入費の一部を助成",
        "condition": "18歳以下、両耳30dB以上70dB未満、手帳非該当",
        "department": "こども未来部 障害児福祉課",
        "officialUrl": "https://www.city.itami.lg.jp/SOSIKI/KENKOFUKUSHI/KODOMOF/SHOUGAIJI_FUKUSHI/1553478217015.html",
        "notes": "※購入前の事前申請が必須です。指定医の意見書が必要です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/84/Emblem_of_Itami%2C_Hyogo.svg/120px-Emblem_of_Itami%2C_Hyogo.svg.png"
  },
  {
    "cityCode": "282103",
    "id": "hyogo-kakogawa",
    "pref": "兵庫県",
    "city": "加古川市",
    "area": "近畿",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "加古川市 軽・中等度難聴児補聴器購入費助成事業",
        "amount": "器種ごとの基準額を上限として助成",
        "condition": "18歳以下、両耳30dB以上70dB未満、手帳非該当",
        "department": "福祉部 障がい者支援課",
        "officialUrl": "https://www.city.kakogawa.lg.jp/soshikikarasagasu/fukushibu/shogaishashienka/hosogunichijoseikatsuyogu/1413466387236.html",
        "notes": "※購入前の事前申請が必須です。指定医の意見書が必要です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/38/Emblem_of_Kakogawa%2C_Hyogo.svg/120px-Emblem_of_Kakogawa%2C_Hyogo.svg.png"
  },
  {
    "cityCode": "282146",
    "id": "hyogo-takarazuka",
    "pref": "兵庫県",
    "city": "宝塚市",
    "area": "近畿",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "宝塚市 軽度・中等度難聴児補聴器購入費助成事業",
        "amount": "基準額と購入価格の低い方を助成",
        "condition": "18歳以下、両耳30dB以上70dB未満、手帳非該当",
        "department": "健康福祉部 障害福祉課",
        "officialUrl": "https://www.city.takarazuka.hyogo.jp/kenkofukushi/shogaisha/1027154/1000632.html",
        "notes": "※購入前の事前申請が必須です。指定医の意見書が必要です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ed/Emblem_of_Takarazuka%2C_Hyogo.svg/120px-Emblem_of_Takarazuka%2C_Hyogo.svg.png"
  },
  {
    "cityCode": "282171",
    "id": "hyogo-kawanishi",
    "pref": "兵庫県",
    "city": "川西市",
    "area": "近畿",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "川西市 軽度・中等度難聴児補聴器購入費等助成事業",
        "amount": "器種ごとの基準額を上限として助成",
        "condition": "18歳以下、両耳30dB以上70dB未満、手帳非該当",
        "department": "福祉推進部 障がい福祉課",
        "officialUrl": "https://www.city.kawanishi.hyogo.jp/kurashi/fukushi_kaigo/syougai/1001000/1001004.html",
        "notes": "※購入前の事前申請が必須です。指定医の意見書が必要です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/78/Emblem_of_Kawanishi%2C_Hyogo.svg/120px-Emblem_of_Kawanishi%2C_Hyogo.svg.png"
  },
  {
    "cityCode": "282197",
    "id": "hyogo-sanda",
    "pref": "兵庫県",
    "city": "三田市",
    "area": "近畿",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "三田市 軽度・中等度難聴児補聴器購入費助成事業",
        "amount": "基準額と購入価格の低い方を助成",
        "condition": "18歳以下、両耳30dB以上70dB未満、手帳非該当",
        "department": "共生社会推進部 障害福祉課",
        "officialUrl": "https://www.city.sanda.lg.jp/soshiki/29/gyoumuannai/kakusyuseidosabis/27935.html",
        "notes": "※購入前の事前申請が必須です。指定医の意見書が必要です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/21/Emblem_of_Sanda%2C_Hyogo.svg/120px-Emblem_of_Sanda%2C_Hyogo.svg.png"
  },
  {
    "cityCode": "292010",
    "id": "nara-nara",
    "pref": "奈良県",
    "city": "奈良市",
    "area": "近畿",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "奈良市 軽度・中等度難聴児への補聴器購入助成事業",
        "amount": "基準額の2/3助成（生活保護・非課税世帯は全額助成）",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）、医師意見書",
        "department": "福祉部 障がい福祉課",
        "officialUrl": "https://www.city.nara.lg.jp/soshiki/34/217943.html",
        "notes": "※購入前の事前申請が必須です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "奈良市 高齢者補聴器購入費補助事業",
        "amount": "上限 25,000円（1台につき1人1回限り）",
        "condition": "65歳以上、市民税非課税世帯または生活保護受給世帯、手帳非該当、耳鼻咽喉科医師意見書",
        "department": "福祉部 長寿福祉課",
        "officialUrl": "https://www.city.nara.lg.jp/soshiki/36/238808.html",
        "notes": "※購入前の事前申請必須です。",
        "specialNote": "※市民税非課税世帯のみ対象"
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1b/Emblem_of_Nara%2C_Nara.svg/120px-Emblem_of_Nara%2C_Nara.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "292052",
    "id": "nara-kashihara",
    "pref": "奈良県",
    "city": "橿原市",
    "area": "近畿",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "橿原市 軽度・中等度難聴児補聴器購入費助成事業",
        "amount": "基準額の2/3（非課税世帯は全額）",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）",
        "department": "福祉部 障がい福祉課",
        "officialUrl": "https://www.city.kashihara.nara.jp/soshiki/1035/gyomu/5/9/4/1358.html",
        "notes": "※購入前の事前申請が必須です。指定医の意見書が必要です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e2/Emblem_of_Kashihara%2C_Nara.svg/120px-Emblem_of_Kashihara%2C_Nara.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "292095",
    "id": "nara-ikoma",
    "pref": "奈良県",
    "city": "生駒市",
    "area": "近畿",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "生駒市 軽度・中等度難聴児補聴器購入費等助成事業",
        "amount": "基準額の2/3（非課税世帯は全額）",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）",
        "department": "福祉部 障がい福祉課",
        "officialUrl": "https://www.city.ikoma.lg.jp/0000001129.html",
        "notes": "※購入前の事前申請が必須です。指定医療機関等の意見書が必要です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/11/Emblem_of_Ikoma%2C_Nara.svg/120px-Emblem_of_Ikoma%2C_Nara.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "292109",
    "id": "nara-kashiba",
    "pref": "奈良県",
    "city": "香芝市",
    "area": "近畿",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "香芝市 軽度・中等度難聴児補聴器購入費等助成事業",
        "amount": "基準額の2/3（非課税世帯は全額）",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）",
        "department": "福祉健康部 福祉課",
        "officialUrl": "https://www.city.kashiba.lg.jp/soshiki/18/38969.html",
        "notes": "※購入前の事前申請が必須です。指定医の意見書が必要です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#EFF6FF",
        "badgeColor": "#1D4ED8",
        "title": "香芝市 高齢者補聴器購入費助成事業",
        "amount": "上限 20,000円（購入費用の1/2）",
        "condition": "65歳以上、市民税非課税世帯、耳鼻咽喉科医師の証明を受けた中等度難聴等",
        "department": "福祉健康部 長寿福祉課",
        "officialUrl": "https://www.city.kashiba.lg.jp/soshiki/22/38838.html",
        "notes": "※購入前の事前申請が必須です。指定医師の証明書が必要です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d2/Emblem_of_Kashiba%2C_Nara.svg/120px-Emblem_of_Kashiba%2C_Nara.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "302015",
    "id": "wakayama-wakayama",
    "pref": "和歌山県",
    "city": "和歌山市",
    "area": "近畿",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "和歌山市 難聴児補聴器購入費助成事業",
        "amount": "基準額の2/3助成（非課税世帯等は全額助成）",
        "condition": "18歳未満、手帳非該当、指定医判定",
        "department": "健康局 保健所 地域保健課",
        "officialUrl": "https://www.city.wakayama.wakayama.jp/kurashi/kourei_kaigo/1001098/1001670.html",
        "notes": "※購入前の事前申請が必須です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "和歌山市 高齢者補聴器購入費助成事業",
        "amount": "上限 20,000円（または実支出額のいずれか低い方）",
        "condition": "65歳以上、住民税非課税世帯、両耳50dB以上（手帳非該当）、医師装用必要認める者",
        "department": "健康局 高齢者支援課",
        "officialUrl": "https://www.city.wakayama.wakayama.jp/kurashi/kourei_kaigo/1001096/1049637.html",
        "notes": "※購入前の事前申請必須です。",
        "specialNote": "※住民税非課税世帯のみ対象"
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/90/Emblem_of_Wakayama%2C_Wakayama.svg/120px-Emblem_of_Wakayama%2C_Wakayama.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "312011",
    "id": "tottori-tottori",
    "pref": "鳥取県",
    "city": "鳥取市",
    "area": "中国",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "鳥取市 軽度・中等度難聴児補聴器購入費助成事業",
        "amount": "基準額の2/3助成（非課税世帯等は全額助成）",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）、指定医判定",
        "department": "障がい福祉課",
        "officialUrl": "https://www.city.tottori.lg.jp/page/4570.html",
        "notes": "※購入前の事前申請が必須です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c9/Emblem_of_Tottori%2C_Tottori.svg/120px-Emblem_of_Tottori%2C_Tottori.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "322016",
    "id": "shimane-matsue",
    "pref": "島根県",
    "city": "松江市",
    "area": "中国",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "松江市 難聴児補聴器助成事業",
        "amount": "基準額の2/3助成（所得制限あり）",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）、医師意見書",
        "department": "健康福祉部 障がい者福祉課",
        "officialUrl": "https://www.city.matsue.lg.jp/soshikikarasagasu/kenkofukushibu_shogaishafukushika/2/4/1629.html",
        "notes": "※購入前の事前申請が必須です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "松江市 高齢者補聴器購入費助成事業",
        "amount": "50,000円以上の補聴器購入に対し 25,000円助成",
        "condition": "65歳以上、市民税非課税世帯または生活保護受給世帯、40dB以上（手帳非該当）、医師証明",
        "department": "健康福祉部 介護保険課",
        "officialUrl": "https://www.city.matsue.lg.jp/soshikikarasagasu/kenkofukushibu_kaigohokenka/koreishafukushi_kaigo/2/22130.html",
        "notes": "※購入前の事前申請必須です。",
        "specialNote": "※市民税非課税世帯のみ対象"
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1b/Emblem_of_Matsue%2C_Shimane.svg/120px-Emblem_of_Matsue%2C_Shimane.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "332020",
    "id": "okayama-kurashiki",
    "pref": "岡山県",
    "city": "倉敷市",
    "area": "中国",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "倉敷市 難聴児補聴器購入費等給付事業",
        "amount": "基準額の2/3助成（所得制限あり）",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）、指定医意見書",
        "department": "保健福祉局 障がい福祉課",
        "officialUrl": "https://www.city.kurashiki.okayama.jp/fukushi/shogai/1013727/1026071.html",
        "notes": "※購入前の事前申請が必須です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "倉敷市 高齢者補聴器購入費助成事業",
        "amount": "購入費用の1/2（上限 25,000円）",
        "condition": "65歳以上、市民税非課税世帯又は生活保護世帯、両耳40dB以上（手帳非該当）、耳鼻咽喉科医師意見書",
        "department": "保健福祉局 高齢福祉課",
        "officialUrl": "https://www.city.kurashiki.okayama.jp/fukushi/elderly/1004318/1018238.html",
        "notes": "※購入前の事前申請必須です。",
        "specialNote": "※市民税非課税世帯のみ対象"
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4c/Emblem_of_Kurashiki%2C_Okayama.svg/120px-Emblem_of_Kurashiki%2C_Okayama.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "341002",
    "id": "hiroshima-hiroshima",
    "pref": "広島県",
    "city": "広島市",
    "area": "中国",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "広島市 軽度・中等度難聴児補聴器購入費等助成事業",
        "amount": "基準額の2/3補助（非課税世帯は全額）",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）",
        "department": "健康福祉局 障害福祉部 障害福祉課",
        "officialUrl": "https://www.city.hiroshima.lg.jp/living/fukushi-kaigo/1014921/1006099/1025781/1014328.html",
        "notes": "※購入前の事前申請が必須です。各区福祉課が窓口です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7a/Emblem_of_Hiroshima%2C_Hiroshima.svg/120px-Emblem_of_Hiroshima%2C_Hiroshima.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "342025",
    "id": "hiroshima-kure",
    "pref": "広島県",
    "city": "呉市",
    "area": "中国",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "呉市 軽度・中等度難聴児補聴器購入費助成事業",
        "amount": "基準額の2/3助成（非課税世帯等は全額助成）",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）、指定医意見書",
        "department": "福祉保健部 障害福祉課",
        "officialUrl": "https://www.city.kure.lg.jp/soshiki/56/syougai1106-2600.html",
        "notes": "※購入前の事前申請が必須です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "呉市 高齢者補聴器等購入費補助事業",
        "amount": "初期費用の2/3を補助（上限 44,000円）",
        "condition": "65歳以上、両耳40dB以上（手帳非該当）、医師意見書、過去5年間に受給歴なし",
        "department": "福祉保健部 高齢者支援課",
        "officialUrl": "https://www.city.kure.lg.jp/soshiki/150/kourei-hotyouki.html",
        "notes": "※購入前の事前申請必須です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d4/Emblem_of_Kure%2C_Hiroshima.svg/120px-Emblem_of_Kure%2C_Hiroshima.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "342076",
    "id": "hiroshima-fukuyama",
    "pref": "広島県",
    "city": "福山市",
    "area": "中国",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "福山市 軽度・中等度難聴児補聴器購入費等助成事業",
        "amount": "基準額の2/3助成（所得制限あり）",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）、医師意見書",
        "department": "保健福祉局 障がい福祉課",
        "officialUrl": "https://www.city.fukuyama.hiroshima.jp/soshiki/shogaifukushi/244531.html",
        "notes": "※購入前の事前申請が必須です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "福山市 高齢者補聴器購入費助成事業",
        "amount": "上限 25,000円（1人1回限り）",
        "condition": "65歳以上、手帳非該当、耳鼻咽喉科医師の装用必要意見書",
        "department": "保健福祉局 高齢者支援課",
        "officialUrl": "https://www.city.fukuyama.hiroshima.jp/site/koureisha-shien/378919.html",
        "notes": "※購入前の事前申請必須です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ad/Emblem_of_Fukuyama%2C_Hiroshima.svg/120px-Emblem_of_Fukuyama%2C_Hiroshima.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "352012",
    "id": "yamaguchi-shimonoseki",
    "pref": "山口県",
    "city": "下関市",
    "area": "中国",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "下関市 軽度・中等度難聴児補聴器購入費等助成事業",
        "amount": "基準額の2/3助成（非課税世帯等は全額助成）",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）、指定医判定",
        "department": "福祉部 障害者支援課",
        "officialUrl": "https://www.city.shimonoseki.lg.jp/site/shogaishafukushi/1850.html",
        "notes": "※購入前の事前申請が必須です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "下関市 高齢者補聴器購入費助成事業",
        "amount": "本体購入費の1/2（上限 30,000円）",
        "condition": "65歳以上、住民税非課税、中等度難聴（40dB〜70dB未満、手帳非該当）、医師意見書",
        "department": "福祉部 長寿支援課",
        "officialUrl": "https://www.city.shimonoseki.lg.jp/soshiki/40/111806.html",
        "notes": "※購入前の事前申請必須です。",
        "specialNote": "※住民税非課税世帯のみ対象"
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7b/Emblem_of_Shimonoseki%2C_Yamaguchi.svg/120px-Emblem_of_Shimonoseki%2C_Yamaguchi.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "372013",
    "id": "kagawa-takamatsu",
    "pref": "香川県",
    "city": "高松市",
    "area": "四国",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "高松市 難聴児補聴器購入費用助成事業",
        "amount": "基準額の2/3助成（所得制限あり）",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）、指定医意見書",
        "department": "健康福祉局 障がい福祉課",
        "officialUrl": "https://www.city.takamatsu.kagawa.jp/smph/kurashi/kenkou/shogai_shien/nichijo_shien/zaitaku_shien/hochouki.html",
        "notes": "※購入前の事前申請が必須です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "高松市 高齢者補聴器購入費助成事業（香川県協調）",
        "amount": "補聴器購入費用の1/2（上限 30,000円、1人1回限り）",
        "condition": "65歳以上、対象講座受講者、医師意見書、手帳非該当（県決定通知後購入）",
        "department": "健康福祉局 長寿福祉課 介護予防係",
        "officialUrl": "https://www.city.takamatsu.kagawa.jp/kurashi/kenkou/kenkonotameni/choju/kareiseinantyou.html",
        "notes": "※市の講座受講と事前申請が必須です（香川県加齢性難聴対策推進事業）。",
        "specialNote": "※講座受講必須・県協調事業"
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/23/Emblem_of_Takamatsu%2C_Kagawa.svg/120px-Emblem_of_Takamatsu%2C_Kagawa.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "382019",
    "id": "ehime-matsuyama",
    "pref": "愛媛県",
    "city": "松山市",
    "area": "四国",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "松山市 軽度・中等度難聴児補聴器購入助成事業",
        "amount": "基準額の2/3助成（所得制限あり）",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）、指定医判定",
        "department": "保健福祉部 障がい福祉課",
        "officialUrl": "https://www.city.matsuyama.ehime.jp/kurashi/fukushi/shogai/hosougu_nisseigu/keidochuutoudo.html",
        "notes": "※購入前の事前申請が必須です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "松山市 高齢者補聴器購入費助成事業",
        "amount": "上限 30,000円（本体および附属品）",
        "condition": "65歳以上、市民税所得割非課税世帯、両耳40dB以上（手帳非該当）、耳鼻咽喉科医師意見書",
        "department": "保健福祉部 高齢福祉課",
        "officialUrl": "https://www.city.matsuyama.ehime.jp/kurashi/fukushi/korei/koureishakazoku/kourei_hochouki.html",
        "notes": "※購入前の事前申請必須です。",
        "specialNote": "※市民税所得割非課税世帯対象"
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2e/Emblem_of_Matsuyama%2C_Ehime.svg/120px-Emblem_of_Matsuyama%2C_Ehime.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "392014",
    "id": "kochi-kochi",
    "pref": "高知県",
    "city": "高知市",
    "area": "四国",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "高知市 難聴児補聴器購入助成事業",
        "amount": "基準額の2/3助成（生活保護・非課税世帯等は全額助成）",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）、指定医意見書",
        "department": "健康福祉部 障がい福祉課",
        "officialUrl": "https://www.city.kochi.kochi.jp/soshiki/29/nanchoujihochouki.html",
        "notes": "※購入前の事前申請が必須です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/29/Emblem_of_Kochi%2C_Kochi.svg/120px-Emblem_of_Kochi%2C_Kochi.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "401005",
    "id": "fukuoka-kitakyushu",
    "pref": "福岡県",
    "city": "北九州市",
    "area": "九州",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "北九州市 軽度・中等度難聴児補聴器購入費等助成事業",
        "amount": "基準額の2/3助成（非課税世帯は全額）",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）",
        "department": "保健福祉局 障害福祉部 障害福祉企画課",
        "officialUrl": "https://www.city.kitakyushu.lg.jp/contents/29800138_00001.html",
        "notes": "※購入前の事前申請が必須です。各区役所保健福祉課が窓口です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/67/Emblem_of_Kitakyushu%2C_Fukuoka.svg/120px-Emblem_of_Kitakyushu%2C_Fukuoka.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "401307",
    "id": "fukuoka-fukuoka",
    "pref": "福岡県",
    "city": "福岡市",
    "area": "九州",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "福岡市 軽度・中等度難聴児補聴器購入費等助成事業",
        "amount": "基準額の2/3助成（非課税世帯等は全額助成）",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）",
        "department": "福祉局 障がい福祉部 障がい支援課",
        "officialUrl": "https://www.city.fukuoka.lg.jp/fukushi/syougaisyashien/health/nitijyoseikatuyougu.html",
        "notes": "※購入前の事前申請が必須です。各区役所福祉・介護保険課が窓口です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e5/Emblem_of_Fukuoka%2C_Fukuoka.svg/120px-Emblem_of_Fukuoka%2C_Fukuoka.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "402028",
    "id": "fukuoka-omuta",
    "pref": "福岡県",
    "city": "大牟田市",
    "area": "九州・沖縄",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "大牟田市 軽度・中等度難聴児補聴器購入費助成事業",
        "amount": "基準額の2/3補助（非課税世帯は全額）",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）",
        "department": "福祉課 障害福祉担当",
        "officialUrl": "https://www.city.omuta.lg.jp/kiji0036434/index.html",
        "notes": "※購入前の事前申請が必須です。指定医師の意見書が必要です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/06/Emblem_of_Omuta%2C_Fukuoka.svg/120px-Emblem_of_Omuta%2C_Fukuoka.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "402036",
    "id": "fukuoka-kurume",
    "pref": "福岡県",
    "city": "久留米市",
    "area": "九州",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "久留米市 軽度・中等度難聴児補聴器購入費助成事業",
        "amount": "基準額の2/3助成（生活保護・非課税世帯等は全額助成）",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）、指定医意見書",
        "department": "健康福祉部 障害者福祉課",
        "officialUrl": "https://www.city.kurume.fukuoka.jp/1070kenkou/2010fukushi/3030shougaishazaitaku/keidotyuutoudonanntyoujihotyouki.html",
        "notes": "※購入前の事前申請が必須です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e0/Emblem_of_Kurume%2C_Fukuoka.svg/120px-Emblem_of_Kurume%2C_Fukuoka.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "402052",
    "id": "fukuoka-iizuka",
    "pref": "福岡県",
    "city": "飯塚市",
    "area": "九州・沖縄",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "飯塚市 軽度・中等度難聴児補聴器購入費助成事業",
        "amount": "基準額の2/3補助（非課税世帯は全額）",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）",
        "department": "福祉部 高齢障がい課 障がい福祉係",
        "officialUrl": "https://www.city.iizuka.lg.jp/uploaded/attachment/4978.pdf",
        "notes": "※購入前の事前申請が必須です。指定医療機関の意見書が必要です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f9/Emblem_of_Iizuka%2C_Fukuoka.svg/120px-Emblem_of_Iizuka%2C_Fukuoka.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "402061",
    "id": "fukuoka-tagawa",
    "pref": "福岡県",
    "city": "田川市",
    "area": "九州・沖縄",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "田川市 軽度・中等度難聴児補聴器購入費助成事業",
        "amount": "基準額の2/3補助（非課税世帯は全額）",
        "condition": "18歳未満、両耳30dB以上（手帳非該当、所得制限あり）",
        "department": "高齢障がい課 障がい者支援係",
        "officialUrl": "https://www.joho.tagawa.fukuoka.jp/kiji0035115/index.html",
        "notes": "※購入前の事前申請が必須です。指定医の意見書が必要です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "難聴者（均等割以下世帯）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "田川市 難聴者補聴器購入助成（社会参加支援事業）",
        "amount": "上限23,200円（購入費の1/2）",
        "condition": "両耳50〜70dB等、生保・非課税・均等割のみ課税世帯（手帳非該当）",
        "department": "高齢障がい課 障がい者支援係",
        "officialUrl": "https://www.joho.tagawa.fukuoka.jp/kiji0035115/index.html",
        "notes": "※購入前の事前申請が必須です。耳鼻咽喉科医師の受診が必要です。",
        "specialNote": "【低所得世帯対象・上限23,200円】"
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/08/Emblem_of_Tagawa%2C_Fukuoka.svg/120px-Emblem_of_Tagawa%2C_Fukuoka.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "402176",
    "id": "fukuoka-chikushino",
    "pref": "福岡県",
    "city": "筑紫野市",
    "area": "九州・沖縄",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "筑紫野市 軽度・中等度難聴児補聴器購入費助成事業",
        "amount": "基準額の2/3補助（非課税世帯は全額）",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）",
        "department": "健康福祉部 障がい福祉課 障がい福祉担当",
        "officialUrl": "https://www.city.chikushino.fukuoka.jp/site/shogai/2919.html",
        "notes": "※購入前の事前申請が必須です。指定医の受診・意見書が必要です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3f/Emblem_of_Chikushino%2C_Fukuoka.svg/120px-Emblem_of_Chikushino%2C_Fukuoka.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "402184",
    "id": "fukuoka-kasuga",
    "pref": "福岡県",
    "city": "春日市",
    "area": "九州・沖縄",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "春日市 軽度・中等度難聴児補聴器購入費等助成事業",
        "amount": "基準額の2/3補助（非課税世帯は全額）",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）",
        "department": "福祉支援課 障がい福祉担当",
        "officialUrl": "https://www.city.kasuga.fukuoka.jp/kosodate/shougai/1014670.html",
        "notes": "※購入前の事前申請が必須です。指定医療機関の意見書が必要です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e1/Emblem_of_Kasuga%2C_Fukuoka.svg/120px-Emblem_of_Kasuga%2C_Fukuoka.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "402192",
    "id": "fukuoka-onojo",
    "pref": "福岡県",
    "city": "大野城市",
    "area": "九州・沖縄",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "大野城市 軽度・中等度難聴児補聴器購入費等助成事業",
        "amount": "基準額の2/3補助（非課税世帯は全額）",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）",
        "department": "すこやか長寿課 障がい福祉担当",
        "officialUrl": "https://www.city.onojo.fukuoka.jp/kiji0035745/index.html",
        "notes": "※購入前の事前申請が必須です。指定医の意見書が必要です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "難聴者（18歳以上非課税）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "大野城市 難聴者補聴器購入費助成事業",
        "amount": "基準額の2/3補助（上限約30,900円）",
        "condition": "18歳以上、市民税非課税世帯、両耳30〜70dB（手帳非該当）",
        "department": "すこやか長寿課 障がい福祉担当",
        "officialUrl": "https://www.city.onojo.fukuoka.jp/kiji0035745/index.html",
        "notes": "※購入前の事前申請が必須です。医師意見書および見積書が必要です。",
        "specialNote": "【対象: 18歳以上非課税】"
      }
    ],
    "emblemUrl": ""
  },
  {
    "cityCode": "402206",
    "id": "fukuoka-munakata",
    "pref": "福岡県",
    "city": "宗像市",
    "area": "九州・沖縄",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "宗像市 軽度・中等度難聴児補聴器購入費助成事業",
        "amount": "基準額の2/3補助（非課税世帯は全額）",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）",
        "department": "福祉課 障がい福祉係",
        "officialUrl": "https://www.city.munakata.lg.jp/kiji003194/3_194_8_27061508.pdf",
        "notes": "※購入前の事前申請が必須です。指定医療機関の意見書が必要です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4b/Emblem_of_Munakata%2C_Fukuoka.svg/120px-Emblem_of_Munakata%2C_Fukuoka.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "402214",
    "id": "fukuoka-dazaifu",
    "pref": "福岡県",
    "city": "太宰府市",
    "area": "九州・沖縄",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "太宰府市 軽度・中等度難聴児補聴器購入費助成事業",
        "amount": "基準額の2/3補助（非課税世帯は全額）",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）",
        "department": "障がい福祉課 障がい福祉係",
        "officialUrl": "https://www.city.dazaifu.lg.jp/soshiki/13/3392.html",
        "notes": "※購入前の事前申請が必須です。指定医の意見書が必要です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f1/Emblem_of_Dazaifu%2C_Fukuoka.svg/120px-Emblem_of_Dazaifu%2C_Fukuoka.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "402231",
    "id": "fukuoka-koga",
    "pref": "福岡県",
    "city": "古賀市",
    "area": "九州・沖縄",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "古賀市 軽度・中等度難聴児補聴器購入費助成事業",
        "amount": "基準額の2/3補助（非課税世帯は全額）",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）",
        "department": "福祉課 障がい福祉係",
        "officialUrl": "https://www.city.koga.fukuoka.jp/cityhall/reiki/reiki_honbun/q025RG00001110.html",
        "notes": "※購入前の事前申請が必須です。指定医療機関の意見書が必要です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e6/Emblem_of_Koga%2C_Fukuoka.svg/120px-Emblem_of_Koga%2C_Fukuoka.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "402249",
    "id": "fukuoka-fukutsu",
    "pref": "福岡県",
    "city": "福津市",
    "area": "九州・沖縄",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "福津市 軽度・中等度難聴児補聴器購入費助成事業",
        "amount": "基準額の2/3補助（非課税世帯は全額）",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）",
        "department": "福祉課 障がい福祉係",
        "officialUrl": "https://www.city.fukutsu.lg.jp/soshiki/fukushi/shogai/1_1/1184.html",
        "notes": "※購入前の事前申請が必須です。指定医の受診・意見書が必要です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/19/Emblem_of_Fukutsu%2C_Fukuoka.svg/120px-Emblem_of_Fukutsu%2C_Fukuoka.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "402303",
    "id": "fukuoka-itoshima",
    "pref": "福岡県",
    "city": "糸島市",
    "area": "九州・沖縄",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "糸島市 軽度・中等度難聴児補聴器購入費等助成事業",
        "amount": "基準額の2/3補助（非課税世帯は全額）",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当、所得割46万未満）",
        "department": "福祉課 障がい福祉支援係",
        "officialUrl": "https://www.city.itoshima.lg.jp/s016/020/030/020/060/keido-tyuutoudo.html",
        "notes": "※購入前の事前申請が必須です。指定医の受診・意見書が必要です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0d/Emblem_of_Itoshima%2C_Fukuoka.svg/120px-Emblem_of_Itoshima%2C_Fukuoka.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "402311",
    "id": "fukuoka-nakagawa",
    "pref": "福岡県",
    "city": "那珂川市",
    "area": "九州・沖縄",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "那珂川市 軽度・中等度難聴児補聴器購入費助成事業",
        "amount": "基準額の2/3補助（非課税世帯は全額）",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）",
        "department": "福祉課 障がい福祉担当",
        "officialUrl": "https://www.city.nakagawa.lg.jp/reiki/act/content/content110001049.htm",
        "notes": "※購入前の事前申請が必須です。指定医の受診・意見書が必要です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/16/Emblem_of_Nakagawa%2C_Fukuoka.svg/120px-Emblem_of_Nakagawa%2C_Fukuoka.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "422011",
    "id": "nagasaki-nagasaki",
    "pref": "長崎県",
    "city": "長崎市",
    "area": "九州",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "長崎市 軽度・中等度難聴児補聴器購入費補助制度",
        "amount": "基準額の2/3助成（所得制限あり）",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）、指定医意見書",
        "department": "福祉部 障害福祉課",
        "officialUrl": "https://www.city.nagasaki.lg.jp/site/e-kao/6433.html",
        "notes": "※購入前の事前申請が必須です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d4/Emblem_of_Nagasaki%2C_Nagasaki.svg/120px-Emblem_of_Nagasaki%2C_Nagasaki.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "422029",
    "id": "nagasaki-sasebo",
    "pref": "長崎県",
    "city": "佐世保市",
    "area": "九州",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "佐世保市 軽度・中等度難聴児補聴器購入費助成事業",
        "amount": "基準額の2/3助成（非課税世帯等は全額助成）",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）、指定医判定",
        "department": "保健福祉部 障がい福祉課",
        "officialUrl": "https://www.city.sasebo.lg.jp/hokenhukusi/syogai/keichu.html",
        "notes": "※購入前の事前申請が必須です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f6/Emblem_of_Sasebo%2C_Nagasaki.svg/120px-Emblem_of_Sasebo%2C_Nagasaki.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "452017",
    "id": "miyazaki-miyazaki",
    "pref": "宮崎県",
    "city": "宮崎市",
    "area": "九州",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "宮崎市 軽度・中等度難聴児補聴器購入費等助成事業",
        "amount": "基準額の2/3助成（所得制限あり）",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）、指定医意見書",
        "department": "福祉部 障がい福祉課",
        "officialUrl": "https://www.city.miyazaki.miyazaki.jp/health/disabilities_welfare/care/2354.html",
        "notes": "※購入前の事前申請が必須です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "宮崎市 高齢者補聴器購入費助成事業",
        "amount": "購入費用の助成（上限 30,000円）",
        "condition": "65歳以上、在宅生活、市税滞納なし、手帳非該当、両耳40dB以上70dB未満、医師装用必要認める者",
        "department": "福祉部 介護保険課",
        "officialUrl": "https://www.city.miyazaki.miyazaki.jp/business/welfare/long_term_care_insurance/399413.html",
        "notes": "※購入前の事前申請必須です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fe/Emblem_of_Miyazaki%2C_Miyazaki.svg/120px-Emblem_of_Miyazaki%2C_Miyazaki.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "462012",
    "id": "kagoshima-kagoshima",
    "pref": "鹿児島県",
    "city": "鹿児島市",
    "area": "九州",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "鹿児島市 難聴児補聴器購入費助成事業",
        "amount": "基準額の2/3助成（非課税世帯等は全額助成）",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）、指定医意見書",
        "department": "健康福祉局 障害福祉課",
        "officialUrl": "https://www.city.kagoshima.lg.jp/faq-kenkofukushi/syofuku-syo/q55.html",
        "notes": "※購入前の事前申請が必須です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b3/Emblem_of_Kagoshima%2C_Kagoshima.svg/120px-Emblem_of_Kagoshima%2C_Kagoshima.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "cityCode": "472018",
    "id": "okinawa-naha",
    "pref": "沖縄県",
    "city": "那覇市",
    "area": "沖縄",
    "programs": [
      {
        "target": "child",
        "targetLabel": "子ども（18歳未満）",
        "badgeBg": "#DCFCE7",
        "badgeColor": "#15803D",
        "title": "那覇市 軽度・中等度難聴児補聴器購入費等助成事業",
        "amount": "基準額の2/3助成（非課税世帯等は全額助成）",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）、指定医師意見書",
        "department": "福祉部 障がい福祉課",
        "officialUrl": "https://www.city.naha.okinawa.jp/fukusi/syougaifukushi/1007399/1003236/1003240.html",
        "notes": "※購入前の事前申請が必須です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "那覇市 高齢者補聴器購入費助成事業",
        "amount": "補聴器本体購入費の上限 25,000円助成",
        "condition": "65歳以上、住民税非課税、手帳非該当、医師意見書（※年度定員枠あり）",
        "department": "福祉部 高齢者福祉課 在宅福祉グループ",
        "officialUrl": "https://www.city.naha.okinawa.jp/fukusi/koureisyafukusi/1003057/1003062/1003063.html",
        "notes": "※購入前の事前申請必須です（年度ごとの定員枠あり）。",
        "specialNote": "※住民税非課税世帯対象（年度定員制）"
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ee/Emblem_of_Naha%2C_Okinawa.svg/120px-Emblem_of_Naha%2C_Okinawa.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  }
];

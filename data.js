/**
 * 全国 補聴器助成金検索ナビ マスターデータ（data.js）
 * ※全国地方公共団体コード（JIS X 0402）順（北から南）に整列
 * ※各自治体の公式市章・区章データを完備
 */

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
        "officialUrl": "https://www.city.sapporo.jp/shogaifukushi/nancho.html",
        "notes": "※購入前の事前申請が必須です。指定医の意見書が必要です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/11/Emblem_of_Sapporo%2C_Hokkaido.svg/120px-Emblem_of_Sapporo%2C_Hokkaido.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
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
        "officialUrl": "https://www.city.sendai.jp/shougai-kanri/kurashi/kenko/shogai/jose/nancho.html",
        "notes": "※購入前の事前申請が必須です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8f/Emblem_of_Sendai%2C_Miyagi.svg/120px-Emblem_of_Sendai%2C_Miyagi.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
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
        "officialUrl": "https://www.city.saitama.lg.jp/002/003/004/003/p033950.html",
        "notes": "※購入前の事前申請が必須です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/17/Emblem_of_Saitama%2C_Saitama.svg/120px-Emblem_of_Saitama%2C_Saitama.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
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
        "officialUrl": "https://www.city.chiba.jp/hokenfukushi/koreishogai/shogai/keidonanchoji.html",
        "notes": "※事前申請が必須です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "千葉市 高齢者補聴器購入費助成事業",
        "amount": "上限 20,000円",
        "condition": "65歳以上、手帳非該当、市民税非課税世帯",
        "department": "保健福祉局 高齢障害部 高齢福祉課",
        "officialUrl": "https://www.city.chiba.jp/hokenfukushi/koreishogai/korei/hochouki.html",
        "notes": "※購入前の事前申請が必須です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/39/Emblem_of_Chiba%2C_Chiba.svg/120px-Emblem_of_Chiba%2C_Chiba.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
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
        "officialUrl": "https://www.city.chiyoda.lg.jp/koho/kenko/shogai/shien/hocho-jose.html",
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
        "officialUrl": "https://www.city.chiyoda.lg.jp/koho/kenko/kore/shien/hocho-jose.html",
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
        "officialUrl": "https://www.city.chuo.lg.jp/a0026/fukushi/shougai/shien/keidontyouji.html",
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
        "officialUrl": "https://www.city.chuo.lg.jp/a0027/fukushi/koureisha/shien/hochoki.html",
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
        "officialUrl": "https://www.city.minato.tokyo.jp/shougaifukushi/keido-choutoudo.html",
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
        "officialUrl": "https://www.city.minato.tokyo.jp/kourei/koureisha/shien/hochouki.html",
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
        "officialUrl": "https://www.city.shinjuku.lg.jp/fukushi/korei01_002137.html",
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
        "officialUrl": "https://www.city.bunkyo.lg.jp/b023/p001221.html",
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
        "officialUrl": "https://www.city.bunkyo.lg.jp/b022/p004523.html",
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
        "officialUrl": "https://www.city.taito.lg.jp/kenkohukusi/shogai/jose/keidonanchoji.html",
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
        "officialUrl": "https://www.city.taito.lg.jp/kenkohukusi/korei/shien/hochoki.html",
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
        "officialUrl": "https://www.city.sumida.lg.jp/kenko_fukushi/syougai/josei/keidonanchoji.html",
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
        "officialUrl": "https://www.city.sumida.lg.jp/kenko_fukushi/koreisya/hochoki.html",
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
        "officialUrl": "https://www.city.koto.lg.jp/380101/fukushi/shogai/shien/keidonanchoji.html",
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
        "officialUrl": "https://www.city.koto.lg.jp/380101/fukushi/kore/hochoki.html",
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
        "officialUrl": "https://www.city.shinagawa.tokyo.jp/PC/kenkou/kenkou-syougai/hpg000030588.html",
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
        "officialUrl": "https://www.city.shinagawa.tokyo.jp/PC/kenkou/kenkou-kourei/hpg000033245.html",
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
        "officialUrl": "https://www.city.meguro.tokyo.jp/shougaifukushi/keidonanchoji.html",
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
        "officialUrl": "https://www.city.meguro.tokyo.jp/koureifukushi/hochoki.html",
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
        "officialUrl": "https://www.city.ota.tokyo.jp/seikatsu/fukushi/shougai/nanchoji.html",
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
        "officialUrl": "https://www.city.ota.tokyo.jp/seikatsu/fukushi/koreisha/hochoki.html",
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
        "officialUrl": "https://www.city.setagaya.lg.jp/mokuji/fukushi/003/004/d00142345.html",
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
        "officialUrl": "https://www.city.setagaya.lg.jp/mokuji/fukushi/002/003/d00189214.html",
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
        "title": "渋谷区 軽度・中等度難聴児補聴器購入費助成事業",
        "amount": "基準額の全額助成",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）",
        "department": "福祉部 障がい者福祉課 給付係",
        "officialUrl": "https://www.city.shibuya.tokyo.jp/fukushi/shogai/shien/keidonanchoji.html",
        "notes": "※事前申請必須です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（60歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "渋谷区 高齢者補聴器購入費助成事業",
        "amount": "非課税世帯：最大 144,900円 ／ 課税世帯：最大 72,450円",
        "condition": "60歳以上、手帳非該当、耳鼻咽喉科医師意見書",
        "department": "福祉部 高齢者福祉課 在宅サービス係",
        "officialUrl": "https://www.city.shibuya.tokyo.jp/fukushi/koreisha-fukushi/hochoki.html",
        "notes": "※事前申請必須です。",
        "specialNote": "※対象: 60歳以上 / ※課税世帯も助成あり"
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
        "amount": "基準額の全額助成",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）",
        "department": "地域支えあい推進部 障害福祉課 給付係",
        "officialUrl": "https://www.city.tokyo-nakano.lg.jp/fukushi/syougai/josei/nanchoji.html",
        "notes": "※事前申請必須です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "中野区 高齢者補聴器購入費助成事業",
        "amount": "非課税世帯：最大 144,900円 ／ 課税世帯：最大 72,450円",
        "condition": "65歳以上、手帳非該当、補聴器相談医意見書",
        "department": "地域支えあい推進部 地域包括ケア推進課",
        "officialUrl": "https://www.city.tokyo-nakano.lg.jp/fukushi/korei/hochoki.html",
        "notes": "※購入前申請必須です。",
        "specialNote": "※課税世帯も助成あり"
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
        "amount": "非課税世帯：最大 144,900円 ／ 課税世帯：最大 72,450円",
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
        "amount": "非課税世帯：最大 144,900円 ／ 課税世帯：最大 72,450円",
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
        "title": "北区 軽度・中等度難聴児補聴器購入費助成事業",
        "amount": "基準額の全額助成",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）",
        "department": "健康福祉部 障害福祉課 給付係",
        "officialUrl": "https://www.city.kita.tokyo.jp/shogai-fukushi/shogai/jose/nanchoji.html",
        "notes": "※事前申請必須です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "北区 高齢者補聴器購入費助成事業",
        "amount": "上限 30,000円（非課税世帯は上限50,000円）",
        "condition": "65歳以上、手帳非該当、相談医意見書",
        "department": "健康福祉部 高齢福祉課 在宅支援係",
        "officialUrl": "https://www.city.kita.tokyo.jp/korei-fukushi/kore/hochoki.html",
        "notes": "※購入前申請必須です。",
        "specialNote": "※課税世帯も助成あり"
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
        "amount": "非課税世帯：最大 144,900円 ／ 課税世帯：最大 72,450円",
        "condition": "65歳以上、手帳非該当、医師意見書",
        "department": "福祉部 高齢者福祉課 相談係",
        "officialUrl": "https://www.city.arakawa.tokyo.jp/a038/koureisha/hochoki.html",
        "notes": "※事前申請必須です。",
        "specialNote": "※課税世帯も助成あり"
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
        "amount": "非課税世帯：最大 144,900円 ／ 課税世帯：最大 72,450円",
        "condition": "65歳以上、手帳非該当、耳鼻科受診証明",
        "department": "福祉部 おとしより保健福祉課 在宅支援係",
        "officialUrl": "https://www.city.itabashi.tokyo.jp/kenko/otoshiyori/shien/1035210.html",
        "notes": "※事前申請必須です。",
        "specialNote": "※課税世帯も助成あり"
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
        "title": "練馬区 軽度・中等度難聴児補聴器購入費助成事業",
        "amount": "基準額の全額助成",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）",
        "department": "福祉部 障害者給付課 給付係",
        "officialUrl": "https://www.city.nerima.tokyo.jp/hokenfukushi/shogai/techo/nanchoji.html",
        "notes": "※事前申請必須です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "練馬区 高齢者補聴器購入費助成事業",
        "amount": "非課税世帯：最大 144,900円 ／ 課税世帯：最大 72,450円",
        "condition": "65歳以上、手帳非該当、相談医意見書",
        "department": "福祉部 高齢者支援課 相談係",
        "officialUrl": "https://www.city.nerima.tokyo.jp/hokenfukushi/koreishafukushi/hochoki.html",
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
        "title": "足立区 軽度・中等度難聴児補聴器購入費助成事業",
        "amount": "基準額の全額助成",
        "condition": "18歳未満、両耳30dB以上70dB未満（手帳非該当）",
        "department": "福祉部 障がい福祉課 障がい給付係",
        "officialUrl": "https://www.city.adachi.tokyo.jp/shogai/fukushi-kenko/shogaisha/nanchoji.html",
        "notes": "※事前申請必須です。",
        "specialNote": ""
      },
      {
        "target": "senior",
        "targetLabel": "高齢者（65歳以上）",
        "badgeBg": "#FEF3C7",
        "badgeColor": "#B45309",
        "title": "足立区 高齢者補聴器購入費助成事業",
        "amount": "非課税世帯：最大 144,900円 ／ 課税世帯：最大 72,450円",
        "condition": "65歳以上、手帳非該当、耳鼻科医師意見書",
        "department": "福祉部 高齢福祉課 在宅支援係",
        "officialUrl": "https://www.city.adachi.tokyo.jp/kore/fukushi-kenko/kore/hochoki.html",
        "notes": "※事前申請必須です。",
        "specialNote": "※課税世帯も助成あり"
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
        "amount": "非課税世帯：最大 144,900円 ／ 課税世帯：最大 72,450円",
        "condition": "65歳以上、手帳非該当、補聴器相談医意見書",
        "department": "福祉部 福祉推進課 相談係",
        "officialUrl": "https://www.city.edogawa.tokyo.jp/e040/kenko/fukushi/koreisha/hochoki.html",
        "notes": "※購入前申請必須です。",
        "specialNote": "※課税世帯も助成あり"
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9c/Emblem_of_Edogawa%2C_Tokyo.svg/120px-Emblem_of_Edogawa%2C_Tokyo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
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
        "officialUrl": "https://www.city.yokohama.lg.jp/kurashi/fukushi-kaigo/fukushi/annai/kounyu/nancho.html",
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
        "officialUrl": "https://www.city.yokohama.lg.jp/kurashi/fukushi-kaigo/fukushi/annai/kounyu/hochoki-josei.html",
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
        "officialUrl": "https://www.city.kawasaki.jp/350/page/0000038891.html",
        "notes": "※事前申請必須です。各区役所地域みち・障害者支援担当が窓口です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d9/%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E5%B7%9D%E5%B4%8E%E5%B8%82%E5%B8%82%E7%AB%A0.svg/120px-%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E5%B7%9D%E5%B4%8E%E5%B8%82%E5%B8%82%E7%AB%A0.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
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
        "officialUrl": "https://www.city.nagoya.jp/kenkofukushi/page/0000057283.html",
        "notes": "※購入前の事前申請が必須です。各区役所福祉課が窓口となります。",
        "specialNote": "※原則30dB以上"
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d0/Emblem_of_Nagoya%2C_Aichi.svg/120px-Emblem_of_Nagoya%2C_Aichi.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
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
        "officialUrl": "https://www.city.kyoto.lg.jp/hokenfukushi/page/0000153890.html",
        "notes": "※事前申請必須です。各区役所保健福祉センターが窓口です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/83/Emblem_of_Kyoto%2C_Kyoto.svg/120px-Emblem_of_Kyoto%2C_Kyoto.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
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
        "officialUrl": "https://www.city.osaka.lg.jp/fukushi/page/0000371490.html",
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
        "officialUrl": "https://www.city.osaka.lg.jp/fukushi/page/0000578912.html",
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
        "officialUrl": "https://www.city.sakai.lg.jp/kenko/fukushi/shogai/keidonanchoji.html",
        "notes": "※購入前の事前申請が必須です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f8/Emblem_of_Sakai%2C_Osaka.svg/120px-Emblem_of_Sakai%2C_Osaka.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
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
        "officialUrl": "https://www.city.kobe.lg.jp/a39072/kenko/fukushi/shougaishafukushi/nancho.html",
        "notes": "※購入前の事前申請が必須です。各区役所保健福祉課が窓口です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b4/Emblem_of_Kobe%2C_Hyogo.svg/120px-Emblem_of_Kobe%2C_Hyogo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
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
        "officialUrl": "https://www.city.hiroshima.lg.jp/soshiki/63/12836.html",
        "notes": "※購入前の事前申請が必須です。各区福祉課が窓口です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7a/Emblem_of_Hiroshima%2C_Hiroshima.svg/120px-Emblem_of_Hiroshima%2C_Hiroshima.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
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
        "officialUrl": "https://www.city.kitakyushu.lg.jp/ho-huku/18100142.html",
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
        "officialUrl": "https://www.fukuoka.lg.jp/fukushi/shogai-shien/nancho.html",
        "notes": "※購入前の事前申請が必須です。各区役所福祉・介護保険課が窓口です。",
        "specialNote": ""
      }
    ],
    "emblemUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e5/Emblem_of_Fukuoka%2C_Fukuoka.svg/120px-Emblem_of_Fukuoka%2C_Fukuoka.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  }
];

// 都道府県リスト（北から南・JIS順ソート用）
const prefList = [
  "すべて",
  "北海道",
  "宮城県",
  "埼玉県",
  "千葉県",
  "東京都",
  "神奈川県",
  "愛知県",
  "京都府",
  "大阪府",
  "兵庫県",
  "広島県",
  "福岡県"
];

# 親サイト（ミミノバ本体 https://miminoba.jp/）連携コードキット

このドキュメントには、親サイト（WordPress：テーマ X-T9 / VK Blocks）の「カスタムHTMLブロック」にコピー＆ペーストするだけで、美しいデザインと明確な導線を実装できるHTML/CSSコードをまとめています。

---

## 🎨 目次
1. [画像アセットの準備](#1-画像アセットの準備)
2. [【トップページ用】ミミノバ公式 三大Webツール（トリプルバナーカード）](#2-トップページ用ミミノバ公式-三大webツールトリプルバナーカード)
3. [【トップページ用】補聴器助成金ナビ 単体追加カード](#3-トップページ用補聴器助成金ナビ-単体追加カード)
4. [【Workページ用】就労・生活サポート ＆ 補聴器助成金ナビ連携コード](#4-workページ用就労生活サポート--補聴器助成金ナビ連携コード)

---

## 1. 画像アセットの準備

以下のバナー画像が、本プロジェクトフォルダ内の `assets/` に生成・保存されています。  
WordPressの管理画面「メディア ＞ 新規追加」からアップロードしてご利用ください。

1. **`assets/banner_subsidy_navi.jpg`**：全国 補聴器助成金検索ナビ 特設バナー（16:9・笑顔のおばあちゃんとお孫さんの写真）
2. **`assets/logo.png`**：ミミノバ公式ロゴマーク（透過PNG）

※WordPressにアップロード後、画像URL（例: `https://miminoba.jp/wp-content/uploads/...`）を、以下のHTMLコード内の `src="..."` に差し替えてください。

---

## 2. 【トップページ用】ミミノバ公式 三大Webツール（トリプルバナーカード）

トップページの「二大おでかけツール」を、補聴器助成金ナビを加えた**「三大Webツール」**へとアップデートするコードです。  
PCでは美しい横3列、タブレットやスマホでは見やすい1列表示へ自動調整されます。

```html
<!-- ===== ミミノバ公式 三大Webツール セクション ===== -->
<div class="mmnb-tools-section" style="max-width: 1140px; margin: 40px auto; padding: 0 16px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  
  <div style="text-align: center; margin-bottom: 32px;">
    <span style="display: inline-block; background-color: #FFF3E0; color: #D96B00; font-size: 0.85rem; font-weight: 700; padding: 4px 14px; border-radius: 9999px; margin-bottom: 8px; letter-spacing: 0.05em;">
      MIMINOBA ORIGINAL WEB TOOLS
    </span>
    <h2 style="font-size: 1.85rem; color: #251F0F; margin: 0; font-weight: 800; letter-spacing: 0.02em;">
      ミミノバ公式ツール
    </h2>
    <p style="color: #665E50; font-size: 0.95rem; margin-top: 8px;">
      全国の当事者やご家族のおでかけ・暮らし・経済的負担の軽減を支援する3つの公式ツールです。
    </p>
  </div>

  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 24px;">
    
    <!-- カード1: 全国 障害者割引マップ -->
    <div style="background: #FFFFFF; border: 2px solid #F39800; border-radius: 16px; overflow: hidden; box-shadow: 0 8px 24px rgba(243, 152, 0, 0.12); display: flex; flex-direction: column; transition: transform 0.2s ease, box-shadow 0.2s ease;">
      <div style="position: relative;">
        <img src="https://miminoba.jp/wp-content/uploads/2023/09/banner_discount_map-1.jpg" alt="全国 障害者割引マップ" style="width: 100%; height: auto; display: block; aspect-ratio: 16/9; object-fit: cover;">
 </div>
      <div style="padding: 24px; flex-grow: 1; display: flex; flex-direction: column;">
        <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
          <span style="background: #FFE0B2; color: #BF360C; font-size: 0.75rem; font-weight: 700; padding: 2px 8px; border-radius: 4px;">47都道府県網羅</span>
          <span style="background: #E0F2FE; color: #0369A1; font-size: 0.75rem; font-weight: 700; padding: 2px 8px; border-radius: 4px;">全国1,390件</span>
        </div>
        <h3 style="font-size: 1.25rem; font-weight: 800; color: #251F0F; margin: 0 0 10px 0;">
          全国 障害者割引マップ
        </h3>
        <p style="color: #554D40; font-size: 0.88rem; line-height: 1.6; margin: 0 0 20px 0; flex-grow: 1;">
          テーマパーク・水族館・お城・交通機関・公園など、手帳やミライロIDで割引が受けられる全国の施設を地図から一発検索！
        </p>
        <a href="https://miminoba.jp/map/" style="display: block; text-align: center; background: #F39800; color: #FFFFFF; font-weight: 700; font-size: 0.95rem; padding: 13px 20px; border-radius: 9999px; text-decoration: none; box-shadow: 0 4px 12px rgba(243, 152, 0, 0.35); transition: background 0.2s;">
          🗺️ マップを開く →
        </a>
      </div>
    </div>

    <!-- カード2: 全国 サインストア・手話教室マップ -->
    <div style="background: #FFFFFF; border: 2px solid #34A853; border-radius: 16px; overflow: hidden; box-shadow: 0 8px 24px rgba(52, 168, 83, 0.12); display: flex; flex-direction: column; transition: transform 0.2s ease, box-shadow 0.2s ease;">
      <div style="position: relative;">
        <img src="https://miminoba.jp/wp-content/uploads/2026/10/banner_sign_store.jpg" alt="全国 サインストア・手話教室マップ" style="width: 100%; height: auto; display: block; aspect-ratio: 16/9; object-fit: cover;">
      </div>
      <div style="padding: 24px; flex-grow: 1; display: flex; flex-direction: column;">
        <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
          <span style="background: #E8F5E9; color: #1B5E20; font-size: 0.75rem; font-weight: 700; padding: 2px 8px; border-radius: 4px;">手話カフェ</span>
          <span style="background: #E8F5E9; color: #1B5E20; font-size: 0.75rem; font-weight: 700; padding: 2px 8px; border-radius: 4px;">手話教室・筆談店</span>
        </div>
        <h3 style="font-size: 1.25rem; font-weight: 800; color: #251F0F; margin: 0 0 10px 0;">
          全国 サインストアマップ
        </h3>
        <p style="color: #554D40; font-size: 0.88rem; line-height: 1.6; margin: 0 0 20px 0; flex-grow: 1;">
          手話が通じるカフェやバー、手話教室、筆談で安心して過ごせるお店のマップです。全国の店舗情報を随時募集・更新しています。
        </p>
        <a href="https://miminoba.jp/sign-map/" style="display: block; text-align: center; background: #34A853; color: #FFFFFF; font-weight: 700; font-size: 0.95rem; padding: 13px 20px; border-radius: 9999px; text-decoration: none; box-shadow: 0 4px 12px rgba(52, 168, 83, 0.35); transition: background 0.2s;">
          ☕ マップを開く →
        </a>
      </div>
    </div>

    <!-- カード3: 全国 補聴器助成金検索ナビ -->
    <div style="background: #FFFFFF; border: 2px solid #EA5504; border-radius: 16px; overflow: hidden; box-shadow: 0 8px 24px rgba(234, 85, 4, 0.12); display: flex; flex-direction: column; transition: transform 0.2s ease, box-shadow 0.2s ease;">
      <div style="position: relative;">
        <img src="https://miminoba.jp/wp-content/uploads/2026/10/banner_subsidy_navi.jpg" alt="全国 補聴器助成金検索ナビ" style="width: 100%; height: auto; display: block; aspect-ratio: 16/9; object-fit: cover;">
      </div>
      <div style="padding: 24px; flex-grow: 1; display: flex; flex-direction: column;">
        <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
          <span style="background: #FFEDD5; color: #C2410C; font-size: 0.75rem; font-weight: 700; padding: 2px 8px; border-radius: 4px;">全国822自治体</span>
          <span style="background: #DCFCE7; color: #15803D; font-size: 0.75rem; font-weight: 700; padding: 2px 8px; border-radius: 4px;">子ども・高齢者網羅</span>
        </div>
        <h3 style="font-size: 1.25rem; font-weight: 800; color: #251F0F; margin: 0 0 10px 0;">
          補聴器購入補助金検索ナビ
        </h3>
        <p style="color: #554D40; font-size: 0.88rem; line-height: 1.6; margin: 0 0 20px 0; flex-grow: 1;">
          手帳が出ない軽度・中等度難聴者でも利用できる補聴器の購入補助金について、全国の自治体の助成上限額・対象条件・申請窓口公式URLを一発検索できます。
        </p>
        <a href="https://miminoba.jp/subsidy/" style="display: block; text-align: center; background: #EA5504; color: #FFFFFF; font-weight: 700; font-size: 0.95rem; padding: 13px 20px; border-radius: 9999px; text-decoration: none; box-shadow: 0 4px 12px rgba(234, 85, 4, 0.35); transition: background 0.2s;">
          👂 自治体の補助金を調べる →
        </a>
      </div>
    </div>

  </div>
</div>
```

---

## 3. 【トップページ用】補聴器助成金ナビ 単体追加カード

既存の「二大ツール」はそのまま残し、その直下や別のセクションに「補聴器助成金ナビ」だけをピンポイントで追加したい場合のワイドカードコードです。

```html
<!-- ===== 補聴器助成金検索ナビ ワイド紹介カード ===== -->
<div style="max-width: 1100px; margin: 36px auto; padding: 0 16px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  <div style="background: #FFFFFF; border: 2px solid #EA5504; border-radius: 16px; overflow: hidden; box-shadow: 0 8px 24px rgba(234, 85, 4, 0.12); display: flex; flex-wrap: wrap; align-items: center;">
    
    <div style="flex: 1 1 360px; max-width: 500px;">
      <img src="https://miminoba.jp/wp-content/uploads/banner_subsidy_navi.jpg" alt="全国 補聴器助成金検索ナビ" style="width: 100%; height: 100%; display: block; aspect-ratio: 16/9; object-fit: cover;">
    </div>
    
    <div style="flex: 1 1 340px; padding: 28px;">
      <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 10px;">
        <span style="background: #EA5504; color: #FFFFFF; font-size: 0.75rem; font-weight: 800; padding: 3px 10px; border-radius: 4px;">ミミノバ公式直営</span>
        <span style="background: #FFEDD5; color: #C2410C; font-size: 0.75rem; font-weight: 700; padding: 3px 8px; border-radius: 4px;">全国822自治体・1,223制度網羅</span>
      </div>
      <h3 style="font-size: 1.45rem; font-weight: 800; color: #251F0F; margin: 0 0 10px 0;">
        全国 補聴器助成金検索ナビ
      </h3>
      <p style="color: #554D40; font-size: 0.92rem; line-height: 1.65; margin: 0 0 20px 0;">
        「身体障害者手帳の基準には届かないけれど、補聴器が必要…」という軽度・中等度難聴のお子さんやご高齢者の方へ。お住まいの自治体が実施している購入補助金、助成上限額、申請窓口公式URLを一発で検索できます。
      </p>
      <a href="https://miminoba.jp/subsidy/" style="display: inline-block; background: #EA5504; color: #FFFFFF; font-weight: 700; font-size: 1rem; padding: 13px 28px; border-radius: 9999px; text-decoration: none; box-shadow: 0 4px 12px rgba(234, 85, 4, 0.35);">
        👂 無料で助成金を調べる →
      </a>
    </div>

  </div>
</div>
```

---

## 4. 【Workページ用】就労・生活サポート ＆ 補聴器助成金ナビ連携コード

固定ページ「仕事・生活（`/work`）」の最上部に設置する、制度の谷間解消カードです。  
就職・転職支援情報の手前に置くことで、「職場や学校での聞こえを支える公的支援」として自然にユーザーを誘導できます。

```html
<!-- ===== Workページ用 補聴器助成金ナビ 看板バナー ===== -->
<div style="max-width: 900px; margin: 0 auto 36px auto; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  <div style="background: #FFFDF9; border: 1.5px solid #EA5504; border-radius: 12px; padding: 22px; display: flex; flex-wrap: wrap; gap: 20px; align-items: center; box-shadow: 0 4px 12px rgba(234, 85, 4, 0.08);">
    
    <div style="flex: 1 1 280px;">
      <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
        <span style="background: #EA5504; color: #FFFFFF; font-size: 0.75rem; font-weight: 800; padding: 2px 8px; border-radius: 4px;">ミミノバ公式</span>
        <span style="background: #DCFCE7; color: #15803D; font-size: 0.75rem; font-weight: 700; padding: 2px 8px; border-radius: 4px;">子ども・就労・高齢者</span>
      </div>
      <h3 style="font-size: 1.3rem; color: #251F0F; margin: 0 0 8px 0; font-weight: 800;">
        👂 全国 補聴器助成金検索ナビ
      </h3>
      <p style="color: #665E50; font-size: 0.9rem; line-height: 1.6; margin: 0 0 16px 0;">
        手帳が出ない軽度・中等度難聴でも諦めない！全国822自治体で実施されている補聴器購入費用の助成金・申請窓口公式URLを地図・地域から一発検索できます。
      </p>
      <a href="https://miminoba.jp/subsidy/" style="display: inline-block; background: #EA5504; color: #FFFFFF; font-weight: 700; font-size: 0.9rem; padding: 11px 24px; border-radius: 9999px; text-decoration: none; box-shadow: 0 3px 8px rgba(234, 85, 4, 0.25);">
        助成金検索ナビを開く（無料） →
      </a>
    </div>

  </div>
</div>
```

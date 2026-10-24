/**
 * 全国 補聴器助成金検索ナビ ロジック（app.js）
 * ・全国自治体コード（JISコード）順ソート
 * ・公式市章・区章アイコンの表示
 * ・子ども（緑）・高齢者（アンバー）公式ボタンの色分け
 * ・公式ボタンの完全右寄せ・整列レイアウト
 */

document.addEventListener("DOMContentLoaded", () => {
  // DOM要素
  const prefSelect = document.getElementById("pref-select");
  const searchInput = document.getElementById("search-input");
  const tabBtns = document.querySelectorAll(".tab-btn");
  const subsidyList = document.getElementById("subsidy-list");
  const resultCount = document.getElementById("result-count");
  const tabBadgeAll = document.getElementById("count-all");
  const tabBadgeChild = document.getElementById("count-child");
  const tabBadgeSenior = document.getElementById("count-senior");

  // 現在の検索状態
  let currentPref = "すべて";
  let currentKeyword = "";
  let currentTarget = "all"; // "all" | "child" | "senior"

  // 1. 都道府県プルダウンの初期化
  function initPrefSelect() {
    prefSelect.innerHTML = "";
    prefList.forEach((pref) => {
      const option = document.createElement("option");
      option.value = pref;
      option.textContent = pref;
      prefSelect.appendChild(option);
    });
  }

  // 2. タブごとの件数バッジを更新
  function updateTabCounts() {
    const totalCount = subsidyData.length;
    const childCount = subsidyData.filter(item => 
      item.programs.some(p => p.target === "child")
    ).length;
    const seniorCount = subsidyData.filter(item => 
      item.programs.some(p => p.target === "senior")
    ).length;

    tabBadgeAll.textContent = totalCount;
    tabBadgeChild.textContent = childCount;
    tabBadgeSenior.textContent = seniorCount;
  }

  // 3. データのフィルタリング ＆ 全国自治体コード順ソート
  function filterData() {
    const filtered = subsidyData.filter((item) => {
      // ① 都道府県フィルター
      if (currentPref !== "すべて" && item.pref !== currentPref) {
        return false;
      }

      // ② フリーワード検索（都道府県名・自治体名・担当部署など）
      if (currentKeyword.trim() !== "") {
        const kw = currentKeyword.trim().toLowerCase();
        const matchPref = item.pref.toLowerCase().includes(kw);
        const matchCity = item.city.toLowerCase().includes(kw);
        const matchProgram = item.programs.some(p => 
          p.department.toLowerCase().includes(kw) ||
          p.amount.toLowerCase().includes(kw) ||
          (p.specialNote && p.specialNote.toLowerCase().includes(kw))
        );
        if (!matchPref && !matchCity && !matchProgram) {
          return false;
        }
      }

      // ③ 対象区分タブフィルター（child / senior）
      if (currentTarget !== "all") {
        const hasTarget = item.programs.some(p => p.target === currentTarget);
        if (!hasTarget) {
          return false;
        }
      }

      return true;
    });

    // 全国地方公共団体コード（JISコード）の昇順に並べ替え（北から南）
    return filtered.sort((a, b) => {
      const codeA = a.cityCode || "";
      const codeB = b.cityCode || "";
      return codeA.localeCompare(codeB);
    });
  }

  // 4. カードのHTML生成・レンダリング（ボタン完全右端整列）
  function renderCards() {
    const filtered = filterData();
    resultCount.textContent = filtered.length;

    if (filtered.length === 0) {
      subsidyList.innerHTML = `
        <div class="empty-result">
          <div class="empty-icon">🔍</div>
          <h3 class="empty-title">該当する自治体が見つかりませんでした</h3>
          <p class="empty-desc">
            条件を変えて検索してみてください。<br>
            ※お探しの自治体が未掲載の場合でも、国の「医療費控除」を活用して購入費の一部を取り戻すことができます。
          </p>
        </div>
      `;
      return;
    }

    let html = "";
    filtered.forEach((item) => {
      // 表示対象プログラムの絞り込み（タブ選択に連動）
      let displayPrograms = item.programs;
      if (currentTarget !== "all") {
        displayPrograms = item.programs.filter(p => p.target === currentTarget);
      }

      // 市章・区章アイコン
      const emblemHtml = item.emblemUrl ? `
        <img src="${item.emblemUrl}" alt="${item.city}の紋章" class="city-emblem-img" loading="lazy" onerror="this.style.display='none';">
      ` : `<span class="city-fallback-icon">🏛️</span>`;

      // 自治体名横の実施事業ミニバッジ
      const badgesHtml = item.programs.map(p => `
        <span class="program-badge" style="background:${p.badgeBg}; color:${p.badgeColor};">
          ${p.target === "child" ? "👶 子ども" : "🧓 高齢者"}
        </span>
      `).join("");

      // 各助成プログラム行の生成（ボタンを完全に右端へ固定）
      const programsHtml = displayPrograms.map(p => `
        <div class="compact-program-row">
          <div class="program-info-area">
            <div class="info-primary">
              <span class="target-tag ${p.target}">
                ${p.target === "child" ? "👶 子ども助成" : "🧓 高齢者助成"}
              </span>
              <div class="amount-wrap">
                <span class="amount-label">助成額:</span>
                <span class="amount-value">${p.amount}</span>
              </div>
              ${p.specialNote ? `
                <span class="special-note-badge" title="例外的な要件・特記事項">${p.specialNote}</span>
              ` : ""}
            </div>

            <div class="dept-wrap" title="担当窓口">
              <span class="dept-icon">🏢</span>
              <span class="dept-text">${p.department}</span>
            </div>
          </div>

          <div class="btn-wrap">
            <a href="${p.officialUrl}" target="_blank" rel="noopener noreferrer" class="official-compact-btn ${p.target}">
              ${p.target === "child" ? "子ども公式窓口 ↗" : "高齢者公式窓口 ↗"}
            </a>
          </div>
        </div>
      `).join("");

      html += `
        <div class="subsidy-card compact-card">
          <div class="card-header compact-header">
            <h3 class="card-city-name">
              ${emblemHtml}
              <span>${item.pref} ${item.city}</span>
            </h3>
            <div class="card-badges">
              ${badgesHtml}
            </div>
          </div>
          <div class="card-body compact-body">
            ${programsHtml}
          </div>
        </div>
      `;
    });

    subsidyList.innerHTML = html;
  }

  // イベントリスナー設定
  prefSelect.addEventListener("change", (e) => {
    currentPref = e.target.value;
    renderCards();
  });

  searchInput.addEventListener("input", (e) => {
    currentKeyword = e.target.value;
    renderCards();
  });

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      tabBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentTarget = btn.dataset.target;
      renderCards();
    });
  });

  // 初期化実行
  initPrefSelect();
  updateTabCounts();
  renderCards();
});

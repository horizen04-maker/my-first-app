const app = document.getElementById("app");

// ルーティング設定
const routes = {
  "/top": "pages/top.html",
  "/settings": "pages/settings.html",
  "/list": "pages/list.html",
  "/detail": "pages/detail.html",
  "/sim": "pages/sim.html",
  "/history": "pages/history.html"
};

// 画面読み込み
async function loadPage(path) {
  const file = routes[path] || routes["/top"];

  try {
    const res = await fetch(file);
    const html = await res.text();
    app.innerHTML = html;
  } catch (e) {
    app.innerHTML = "<h2>ページ読み込みエラー</h2>";
  }
}

// ハッシュ変更時
function router() {
  const hash = location.hash.replace("#", "") || "/top";
  loadPage(hash);
}

// 初期表示
window.addEventListener("load", router);

// URL変更検知
window.addEventListener("hashchange", router);

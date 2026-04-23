const routes = {
  "/": "pages/top.html",
  "/settings": "pages/settings.html",
  "/list": "pages/list.html",
  "/detail": "pages/detail.html",
  "/sim": "pages/sim.html",
  "/history": "pages/history.html"
};

async function loadPage(path) {
  const app = document.getElementById("app");

  const file = routes[path] || "pages/top.html";

  try {
    const res = await fetch(file);
    const html = await res.text();
    app.innerHTML = html;
  } catch (e) {
    app.innerHTML = "<h2>ページ読み込みエラー</h2>";
  }
}

// 初期表示
window.addEventListener("DOMContentLoaded", () => {
  loadPage(location.pathname);
});

// リンククリック制御
document.addEventListener("click", (e) => {
  const link = e.target.closest("[data-link]");
  if (!link) return;

  e.preventDefault();

  const path = link.getAttribute("href");

  history.pushState(null, "", path);
  loadPage(path);
});

// 戻る・進む対応
window.addEventListener("popstate", () => {
  loadPage(location.pathname);
});

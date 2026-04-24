const BASE_PATH = "/my-first-app";

// ← これが超重要（グローバル化）
window.navigate = function(path) {
  history.pushState({}, "", BASE_PATH + path);
  router();
};

function router() {
  const path = location.pathname.replace(BASE_PATH, "") || "/";

  if (path === "/" || path === "") {
    loadPage("pages/top.html");
  } else if (path === "/settings") {
    loadPage("pages/settings.html");
  } else if (path === "/list") {
    loadPage("pages/list.html");
  } else if (path === "/detail") {
    loadPage("pages/detail.html");
  } else if (path === "/sim") {
    loadPage("pages/sim.html");
  } else if (path === "/history") {
    loadPage("pages/history.html");
  } else {
    loadPage("pages/top.html");
  }
}

function loadPage(url) {
  fetch(url)
    .then(res => res.text())
    .then(html => {
      document.getElementById("app").innerHTML = html;
    });
}

// ← data-link無視してOK（onclickでやるので）

window.addEventListener("popstate", router);
window.addEventListener("DOMContentLoaded", router);

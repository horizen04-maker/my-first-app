const BASE_PATH = "/my-first-app";

function navigate(path) {
  history.pushState({}, "", BASE_PATH + path);
  router();
}

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
  }
}

function loadPage(url) {
  fetch(url)
    .then(res => res.text())
    .then(html => {
      document.getElementById("app").innerHTML = html;
    });
}

window.addEventListener("popstate", router);
window.addEventListener("DOMContentLoaded", router);

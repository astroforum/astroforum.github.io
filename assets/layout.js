// 모든 페이지에 공통 헤더(메뉴)와 푸터를 넣는 스크립트.
// 메뉴를 추가/변경하려면 아래 NAV 목록만 고치면 됩니다.
const LAB_NAME = "Astro Lab";
const NAV = [
  ["index.html", "Home"],
  ["people.html", "People"],
  ["research.html", "Research"],
  ["publications.html", "Publications"],
  ["news.html", "News"],
  ["contact.html", "Contact"],
];

(function () {
  const current = location.pathname.split("/").pop() || "index.html";
  const links = NAV.map(([href, label]) =>
    `<a href="${href}"${href === current ? ' class="active"' : ""}>${label}</a>`
  ).join("");

  document.body.insertAdjacentHTML("afterbegin", `
    <header class="site-header">
      <div class="wrap">
        <a class="logo" href="index.html">Astro<span>Lab</span></a>
        <nav class="nav">${links}</nav>
      </div>
    </header>`);

  document.body.insertAdjacentHTML("beforeend", `
    <footer class="site-footer">
      <div class="wrap">© ${new Date().getFullYear()} ${LAB_NAME}. All rights reserved.</div>
    </footer>`);
})();

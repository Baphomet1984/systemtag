(async function () {

  console.log("Gate activo");

  const params = new URLSearchParams(window.location.search);
  const level = params.get("lvl");
  const target = params.get("go");

  if (!level || !target) {
    window.location.href = "../denied.html";
    return;
  }

  const response = await fetch("rules.json");
  const rules = await response.json();

  const userRule = rules[level];

  if (!userRule || !userRule.access.includes(target)) {
    window.location.href = "../denied.html";
    return;
  }

  sessionStorage.setItem("authorized", "true");
  sessionStorage.setItem("level", level);

  if (target === "signal-core") {
    window.location.href = "../signal/core/";
  } else if (target === "signal-unlkd") {
    window.location.href = "../signal/unlkd/";
  } else {
    window.location.href = "../denied.html";
  }

})();

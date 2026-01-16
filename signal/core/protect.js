if (
  sessionStorage.getItem("authorized") !== "true" ||
  sessionStorage.getItem("level") !== "core"
) {
  window.location.href = "../../denied.html";
}

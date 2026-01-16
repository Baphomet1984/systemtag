if (sessionStorage.getItem("authorized") !== "true") {
  window.location.href = "../../denied.html";
}

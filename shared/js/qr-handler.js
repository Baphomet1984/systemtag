const QR = {
  getParam(name) {
    return new URLSearchParams(window.location.search).get(name);
  }
};

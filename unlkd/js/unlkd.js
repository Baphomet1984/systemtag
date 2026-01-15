fetch("data.json")
  .then(res => res.json())
  .then(data => {
    document.getElementById("username").innerText =
      `Bienvenido ${data.name}`;

    fetch(`playlists/${data.playlist}`)
      .then(res => res.text())
      .then(html => {
        document.getElementById("content").innerHTML = html;
      });
  });

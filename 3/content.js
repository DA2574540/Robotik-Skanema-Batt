const content = [
    {
        judul       : "judul",
        status      : "gagal",
        deskripsi   : "ahay",
        gambar      : "../gambar/test+image.png"
    }
];

const container = document.getElementById(content-box);

content.forEach(item => {
   const contentDiv = document.createElement("div");
   contentDiv.classList.add("content");

   contentDiv.innerHTML = `
    <img src="${item.gambar}" alt="${item.judul}">
        <div class="content-header">
            <h2>${item.judul}l</h2> <p class="status ${item.status.toLowerCase().replace(" ","-")}">${item.status}</p>
        </div>
    <p>${item.deskripsi}</p>
   `;

   container.appendChild(contentDiv);
});
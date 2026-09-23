
const form = document.querySelector("#form-kontak");
const preview = document.querySelector("#preview-form");

if (form && preview) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(form);

    preview.textContent = [
      `Nama: ${data.get("nama")}`,
      `Email: ${data.get("email")}`,
      `WhatsApp: ${data.get("whatsapp")}`,
      `Produk: ${data.get("paket")}`,
      `Topik: ${data.get("topik")}`,
      `Waktu dihubungi: ${data.get("waktu")}`,
      `Pesan: ${data.get("pesan")}`,
    ].join("\n");
  });
}
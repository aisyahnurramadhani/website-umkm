
"use strict";
const produkUMKM = [
  {
    nama: "Apem Original",
    kategori: "Apem",
    harga: 3000,
    satuan: "pcs",
    stok: 20,
    unggulan: true,
    deskripsi: "Apem dengan rasa original."
  },
  {
    nama: "Apem Isi Matcha",
    kategori: "Apem",
    harga: 4000,
    satuan: "pcs",
    stok: 0,
    unggulan: false,
    deskripsi: "Apem dengan isian matcha."
  },
  {
    nama: "Apem Isi Selai Nanas",
    kategori: "Apem",
    harga: 4000,
    satuan: "pcs",
    stok: 10,
    unggulan: false,
    deskripsi: "Apem dengan isian selai nanas."
  },
  {
    nama: "Kamir Original",
    kategori: "Kamir",
    harga: 3000,
    satuan: "pcs",
    stok: 15,
    unggulan: false,
    deskripsi: "Kamir dengan rasa original."
  },
  {
    nama: "Kamir Isi Khunafa",
    kategori: "Kamir",
    harga: 5000,
    satuan: "pcs",
    stok: 15,
    unggulan: true,
    deskripsi: "Kamir dengan isian khunafa."
  },
  {
    nama: "Kamir Isi Matcha",
    kategori: "Kamir",
    harga: 4500,
    satuan: "pcs",
    stok: 8,
    unggulan: false,
    deskripsi: "Kamir dengan isian matcha."
  },
  {
    nama: "Kamir Isi Selai Nanas",
    kategori: "Kamir",
    harga: 3500,
    satuan: "pcs",
    stok: 10,
    unggulan: false,
    deskripsi: "Kamir dengan isian selai nanas."
  },
  {
    nama: "Kue Dongkal Original",
    kategori: "Kue Dongkal",
    harga: 10000,
    satuan: "box",
    stok: 12,
    unggulan: true,
    deskripsi: "Kue dongkal tradisional."
  },
  {
    nama: "Kue Dongkal Pandan",
    kategori: "Kue Dongkal",
    harga: 12000,
    satuan: "box",
    stok: 10,
    unggulan: false,
    deskripsi: "Kue dongkal dengan aroma pandan."
  },
  {
    nama: "Ogel Ogel Original",
    kategori: "Ogel Ogel",
    harga: 10000,
    satuan: "box",
    stok: 0,
    unggulan: false,
    deskripsi: "Ogel ogel dengan rasa original."
  }
];

console.table(produkUMKM);
const formatRupiah = (harga) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0
  }).format(harga);
};

function renderProduk() {
  const container = document.querySelector("#produk-dinamis");
  if (!container) return;
  let hasilProduk = "";
  produkUMKM.forEach((produk) => {
    // status stok
    let statusStok;
    let kelasStok;
    if (produk.stok > 0) {
      statusStok = `Tersedia (${produk.stok})`;
      kelasStok = "stock-available";
    } else {
      statusStok = "Habis (0)";
      kelasStok = "stock-empty";
    }
    // produk unggulan
    let labelProduk;
    if (produk.unggulan === true) {
      labelProduk = "Produk Unggulan";
    } else {
      labelProduk = "Produk Reguler";
    }
    // card produk
    hasilProduk += `
      <article class="product-card">
        <span class="product-label">
          ${labelProduk}
        </span>
        <p class="product-category">
          ${produk.kategori}
        </p>
        <h3>${produk.nama}</h3>
        <p class="product-description">
          ${produk.deskripsi}
        </p>
        <p class="product-price">
          ${formatRupiah(produk.harga)} / ${produk.satuan}
        </p>
        <p class="product-stock ${kelasStok}">
          Stok: ${statusStok}
        </p>
      </article>
    `;
  });
  container.innerHTML = hasilProduk;
  console.log("Produk berhasil ditampilkan:", produkUMKM.length);
}
renderProduk();

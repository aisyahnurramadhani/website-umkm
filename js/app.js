"use strict";

//DATA PRODUK UMKM (ARRAY OF OBJECT)
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
    stok: 5,
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

//FUNCTION FORMAT RUPIAH
function formatRupiah(nilai) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0
  }).format(nilai);
}

//FUNCTION STATUS STOK
function statusStok(stok) {
  if (stok > 0) {
    return {
      label: `Tersedia (${stok})`,
      class: "stock-available"
    };
  }

  return {
    label: "Habis (0)",
    class: "stock-empty"
  };
}


//FUNCTION MEMBUAT KARTU PRODUK
function buatKartuProduk(produk) {
  const stok = statusStok(produk.stok);

  const labelProduk = produk.unggulan
    ? "Produk Unggulan"
    : "Produk Reguler";

  return `
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

      <p class="product-stock ${stok.class}">
        Stok: ${stok.label}
      </p>
    </article>
  `;
}


//ARRAY METHOD FILTER
const produkTersedia = produkUMKM.filter(
  (produk) => produk.stok > 0
);

//ARRAY METHOD FIND
const produkRekomendasi = produkUMKM.find(
  (produk) => produk.unggulan === true
);

//ARRAY METHOD MAP
const daftarKartuProduk = produkTersedia.map(
  (produk) => buatKartuProduk(produk)
);

//RENDER PRODUK KE HTML
function renderProduk() {
  const container = document.querySelector(
    "#produk-dinamis"
  );

  if (!container) return;

  container.innerHTML = daftarKartuProduk.join("");

  console.log(
    "Jumlah produk ditampilkan:",
    produkTersedia.length
  );
}

//FOREACH
produkTersedia.forEach((produk, index) => {
  console.log(
    `Produk ${index + 1}:`,
    produk.nama,
    formatRupiah(produk.harga)
  );
});


//PENGUJIAN DAN DEBUGGING
console.log("=== DATA SELURUH PRODUK ===");
console.table(produkUMKM);

console.log("=== PRODUK TERSEDIA ===");
console.table(produkTersedia);

console.log("=== PRODUK REKOMENDASI ===");
console.log(produkRekomendasi);

console.log("=== UJI FORMAT RUPIAH ===");
console.log(formatRupiah(3000));

console.log("=== UJI STATUS STOK ===");
console.log(statusStok(10));
console.log(statusStok(0));
console.log(statusStok(5));

console.log("=== UJI KARTU PRODUK ===");
console.log(buatKartuProduk(produkUMKM[0]));


//JALANKAN RENDER
renderProduk();

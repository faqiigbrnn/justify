import RumahArif from "../../assets/images/legal-stories/sewa-menyewa/rumaharif.png";
import RumahRina from "../../assets/images/legal-stories/sewa-menyewa/rumahranii.jpg";
import RumahArif1 from "../../assets/images/legal-stories/sewa-menyewa/rumah-arif1.jpg";
import Pertemuan from "../../assets/images/legal-stories/sewa-menyewa/pertemuan.png";
import Perjanjian from "../../assets/images/legal-stories/sewa-menyewa/perjanjian.png";
import PenyerahanKunci from "../../assets/images/legal-stories/sewa-menyewa/setuju.png";
import Chat from "../../assets/images/legal-stories/sewa-menyewa/chat.png";
import Background from "../../assets/images/legal-stories/sewa-menyewa/background-rumah.png";
import Scene7 from "../../assets/images/legal-stories/sewa-menyewa/scene-7.png";
import Scene8 from "../../assets/images/legal-stories/sewa-menyewa/scene-8.png";
const sewaMenyewa = {
  id: "sewa-menyewa",
  title: "Sewa Menyewa",

  scenes: [
    {
      id: 1,
      title: "1. Nadia melihat iklan rumah",

      rentalProperties: [
        {
          id: 1,
          name: "Rumah Disewa",
          price: "Rp 2,5 jt",
          period: "/ bulan",
          location: "Pusat Kota",
          image: RumahArif,
          owner: "Rumah Pak Arif",
          code: "L-2049",

          facilities: [
            { label: "Dekat tempat kerja", icon: "kerja" },
            { label: "2 kamar tidur", icon: "kamar" },
            { label: "1 kamar mandi", icon: "mandi" },
            { label: "Dapur & ruang tamu", icon: "dapur" },
          ],
        },
        {
          id: 2,
          name: "Rumah Disewa",
          price: "Rp 3 jt",
          period: "/ bulan",
          location: "Pusat Kota",
          image: RumahRina,
          owner: "Rumah Bu Rina",
          code: "L-2050",

          facilities: [
            { label: "Dekat tempat kerja", icon: "kerja" },
            { label: "2 kamar tidur", icon: "kamar" },
            { label: "1 kamar mandi", icon: "mandi" },
            { label: "Dapur & ruang tamu", icon: "dapur" },
          ],
        },
        {
          id: 3,
          name: "Rumah Disewa",
          price: "Rp 2,4 jt",
          period: "/ bulan",
          location: "Pusat Kota",
          image: RumahArif1,
          owner: "Rumah Pak Arif",
          code: "L-2049",

          facilities: [
            { label: "Dekat tempat kerja", icon: "kerja" },
            { label: "2 kamar tidur", icon: "kamar" },
            { label: "1 kamar mandi", icon: "mandi" },
            { label: "Dapur & ruang tamu", icon: "dapur" },
          ],
        },
      ],

      propertyNarration:
        "Nadia menemukan rumah Pak Arif yang menurutnya cocok karena dekat dengan tempat kerja.",

      activityTitle: "Nadia melihat beberapa iklan disewa",

      activityDescription:
        "Eksplorasi opsi properti sebelum mengambil keputusan sewa.",
    },
    {
      id: 2,
      layout: "negosiasi",
      title:
        "2. Nadia bertemu pak Arif untuk membicarakan harga sewa rumah",

      // Sementara menggunakan gambar yang tersedia.
      // Ganti dengan ilustrasi Nadia dan Pak Arif saat asetnya siap.
      image: Pertemuan,

      negotiation: {
        details: [
          {
            label: "Harga sewa",
            value: "Rp24.000.000/tahun",
            highlight: true,
          },
          {
            label: "Pembayaran",
            value: "Dilakukan di awal",
          },
          {
            label: "Ketentuan",
            value: "Rumah dapat langsung ditempati",
          },
        ],
      },

      considerations: [
        {
          icon: "rumah",
          title: "Kondisi Rumah",
          description: "Struktur fisik, kelistrikan & air",
        },
        {
          icon: "harga",
          title: "Harga Sewa",
          description: "Kesesuaian budget & ketentuan cicilan",
        },
        {
          icon: "waktu",
          title: "Jangka Waktu",
          description: "Durasi sewa & batas perpanjangan",
        },
      ],

      buttonLabel: "Lanjut",
    },
    {
  id: 3,
  layout: "perjanjian",
  title: "3. Nadia dan Pak Arif membuat perjanjian sewa menyewa",

  image: Perjanjian,

  introduction: {
    title: "Membuat Perjanjian Sewa Menyewa",
    description:
      "Sebelum menyewa rumah, Nadia dan Pak Arif perlu menyepakati beberapa hal dalam perjanjian. Poin-poin ini dicatat bersama agar kedua belah pihak memiliki pemahaman yang sama tentang hak, tanggung jawab, dan aturan penggunaan rumah selama masa sewa berjalan.",
  },

  agreementItems: [
    {
      number: 1,
      title: "Kondisi Rumah",
      description:
        "Kondisi rumah saat awal ditempati, termasuk fasilitas dan perlengkapan.",
    },
    {
      number: 2,
      title: "Harga Sewa",
      description:
        "Rp24 juta per tahun.",
    },
    {
      number: 3,
      title: "Jangka Waktu",
      description:
        "1 tahun.",
    },
    {
      number: 4,
      title: "Cara Pembayaran",
      description:
        "Dibayar di awal sesuai kesepakatan kedua belah pihak.",
    },
    {
      number: 5,
      title: "Pemeliharaan, Perbaikan, dan Kerusakan",
      description:
        "Menentukan tanggung jawab pemeliharaan rumah, perbaikan kerusakan, serta biaya yang ditanggung masing-masing pihak.",
      span: 2,
    },
    {
      number: 6,
      title: "Pengakhiran Sewa",
      description:
        "Jika Nadia mengakhiri sewa sebelum masa sewa habis, biaya sewa yang sudah dibayar tidak dapat dikembalikan.",
    },
    {
      number: 7,
      title: "Jika Terjadi Masalah",
      description:
        "Ketentuan mengenai langkah yang perlu dilakukan jika terjadi masalah selama masa sewa.",
      span: 2,
    },
  ],

  note:
    "Kesepakatan sewa disepakati secara bersama sebelum surat perjanjian ditandatangani.",

  buttonLabel: "Lanjut",
},
{
  id: 4,
  layout: "penyerahan-kunci",
  title: "4. Pak Arif menyerahkan kunci rumah kepada Nadia",

  image: PenyerahanKunci,

  introduction: {
    title: "Setelah kesepakatan dibuat, Pak Arif menyerahkan kunci rumah kepada Nadia.",
    description:
      "Nadia mulai menempati rumah tersebut sesuai dengan perjanjian sewa.",
  },

  status: {
    icon: "rumah",
    title: "Status Rumah Sewa",
    description:
      "Kesepakatan telah dibuat dan rumah siap ditempati.",
  },

  note:
    "Tahap awal sewa berjalan lancar karena kedua belah pihak telah menyepakati perjanjian.",

  buttonLabel: "Lanjut",
},
{
  id: 5,
  layout: "masalah",
  title: "5. Muncul Masalah!",

 
  image: Chat,

  description:
    "Hujan deras turun selama beberapa jam. Dan membuat atap rumah yang sebelumnya sudah lama tidak dilakukan pemeliharaan mulai bocor.",

  dialogues: [
    {
      speaker: "nadia",
      name: "Nadia (Penyewa)",
      initial: "ND",
      message:
        "Pak Arif, mau menagih kalau atap rumah bocor setelah hujan deras tadi.",
    },
    {
      speaker: "arif",
      name: "Pak Arif (Pemilik Rumah)",
      initial: "PA",
      message:
        "Bocornya di bagian mana, Nadia?",
    },
    {
      speaker: "nadia",
      name: "Nadia (Penyewa)",
      initial: "ND",
      message:
        "Di bagian atap ruang tengah, Pak. Airnya sampai masuk ke dalam rumah dan beberapa barang saya jadi rusak.",
    },
    {
      speaker: "nadia",
      name: "Nadia (Penyewa)",
      initial: "ND",
      message:
        "Bisa tolong diperbaiki, Pak?",
    },
    {
      speaker: "arif",
      name: "Pak Arif (Pemilik Rumah)",
      initial: "PA",
      message:
        "Mungkin karena hujannya terlalu deras, Nadia. Coba Nadia perbaiki dulu.",
    },
    {
      speaker: "nadia",
      name: "Nadia (Penyewa)",
      initial: "ND",
      message:
        "Tapi sebelumnya kita sudah membicarakan soal kondisi atap dan perbaikan dalam perjanjian, Pak.",
    },
    {
      speaker: "arif",
      name: "Pak Arif (Pemilik Rumah)",
      initial: "PA",
      message:
        "Iya, tapi coba diperiksa dulu ya, Nadia.",
    },
  ],

  conclusion:
    "Nadia mulai bingung karena kerusakan terjadi pada bagian rumah yang sebelumnya sudah diketahui kondisinya.",

  buttonLabel: "Lanjut",
},
{
  id: 6,
  layout: "keputusan",
  title: "6. Nadia mencari solusi atas masalah rumah",

  image: Background,

  conclusion: {
    title: "Kesimpulan Dari Percakapan Sebelumnya",
    description:
      "Atap rumah Nadia bocor setelah hujan deras dan beberapa barangnya rusak. Nadia sudah meminta Pak Arif memperbaikinya, tetapi Pak Arif meminta Nadia mencoba memperbaikinya sendiri. Nadia pun perlu mengetahui siapa yang bertanggung jawab atas kerusakan tersebut.",
  },

  question: {
    title: "Apa yang harus Nadia lakukan?",
    instruction:
      "Pilih tindakan yang tepat untuk mengetahui langkah selanjutnya.",
  },

  choices: [
    {
      id: "A",
      text: "Langsung melakukan perbaikan secara sendiri.",
    },
    {
      id: "B",
      text: "Memeriksa isi perjanjian dan mencari tahu siapa yang bertanggung jawab.",
    },
    {
      id: "C",
      text: "Langsung menghentikan sewa rumah.",
    },
  ],

  correctAnswer: "B",

  legalPopup: {
    title: "Senjata Hukum",
    subtitle:
      "Sebelum masuk ke sesi konfrontasi, jangan lupa hal ini:",

    description:
      "Dalam perjanjian sewa Nadia dan Pak Arif, perbaikan rumah menjadi tanggung jawab Pak Arif, kecuali kerusakan akibat kelalaian Nadia.",

    basis:
      "Pasal 1550 KUHPerdata: Pihak yang menyewakan wajib melakukan perbaikan yang diperlukan selama masa sewa.",

    responsibilities: [
      {
        title: "Isi Perjanjian",
        description:
          "Periksa kesepakatan tentang pemeliharaan dan perbaikan rumah.",
      },
      {
        title: "Tanggung Jawab",
        description:
          "Kerusakan bukan akibat kelalaian penyewa menjadi tanggung jawab pemilik sesuai ketentuan perjanjian dan hukum.",
      },
    ],
  },

  feedback: {
    correct:
      "Tepat! Nadia perlu memeriksa isi perjanjian untuk mengetahui tanggung jawab masing-masing pihak.",

    incorrect:
      "Belum tepat. Nadia sebaiknya memeriksa isi perjanjian terlebih dahulu sebelum mengambil tindakan.",
  },

  buttonLabel: "Lanjut",
},

{
  id: 7,
  layout: "konfrontasi",
  title: "Konfrontasi",

  image: Scene7,

  dialogues: [
    {
      speaker: "nadia",
      name: "Nadia (Penyewa)",
      initial: "ND",
      message:
        "Pak Arif, saya sudah membaca kembali perjanjian sewa yang kita buat. Di dalamnya ada kesepakatan mengenai pemeliharaan dan perbaikan rumah."
    },
    {
      speaker: "arif",
      name: "Pak Arif (Pemilik Rumah)",
      initial: "PA",
      message:
        "Iya, Nadia. Memangnya apa yang ingin kamu sampaikan?"
    },
    {
      speaker: "nadia",
      name: "Nadia (Penyewa)",
      initial: "ND",
      message:
        "Atap yang bocor ini bukan karena kelalaian saya, Pak. Kondisi atap memang sudah lama tidak diperbaiki dan kerusakannya terjadi saat hujan deras."
    },
    {
      speaker: "arif",
      name: "Pak Arif (Pemilik Rumah)",
      initial: "PA",
      message:
        "Begitu ya? Saya kira kerusakan tersebut terjadi karena penggunaan rumah selama kamu menyewa."
    },
    {
      speaker: "nadia",
      name: "Nadia (Penyewa)",
      initial: "ND",
      message:
        "Saya memahami bahwa sebagai penyewa, saya juga memiliki tanggung jawab menjaga rumah. Namun, perbaikan kerusakan yang bukan disebabkan kelalaian penyewa perlu menjadi tanggung jawab pemilik rumah sesuai kesepakatan dan ketentuan hukum."
    },
    {
      speaker: "arif",
      name: "Pak Arif (Pemilik Rumah)",
      initial: "PA",
      message:
        "Baiklah, Nadia. Setelah melihat kembali perjanjian kita, saya akan bertanggung jawab untuk memeriksa dan memperbaiki bagian atap yang bocor."
    },
    {
      speaker: "nadia",
      name: "Nadia (Penyewa)",
      initial: "ND",
      message:
        "Terima kasih, Pak. Saya berharap kita bisa menyelesaikan masalah ini sesuai kesepakatan yang sudah dibuat bersama."
    },
    {
      speaker: "arif",
      name: "Pak Arif (Pemilik Rumah)",
      initial: "PA",
      message:
        "Tentu, Nadia. Ke depannya kita akan lebih memperhatikan isi perjanjian agar tidak terjadi kesalahpahaman lagi."
    },
  ],

  conclusion:
    "Kedua pihak akhirnya memahami hak dan kewajibannya masing-masing berdasarkan perjanjian sewa menyewa.",

  buttonLabel: "Lanjut",
},
{
  id: 8,
  layout: "ending",
  title: "Ending",

  image: Scene8,

  endingCards: [
    {
      title: "Masalah Terselesaikan",
      description:
        "Perjanjian membantu Nadia dan Pak Arif memahami tanggung jawab masing-masing. Pak Arif bersedia melakukan perbaikan atap rumah karena kerusakan tersebut bukan disebabkan oleh kelalaian Nadia."
    },
    {
      title: "Apa yang Bisa Dipelajari?",
      description:
        "Memahami isi dan ketentuan perjanjian sangat penting agar setiap pihak mengetahui hak dan kewajibannya. Perjanjian sewa menyewa juga menjadi pedoman ketika terjadi perselisihan di kemudian hari."
    },
  ],

  buttonLabel: "Lanjut",
},

{
  id: 9,
  layout: "hasil-pilihan",
  title: "Penjelasan Pilihan User",

  correctAnswer: "B",

  choiceTexts: {
    A: "Langsung melakukan perbaikan secara mandiri.",
    B: "Memeriksa isi perjanjian dan mencari tahu siapa yang bertanggung jawab.",
    C: "Langsung menghentikan sewa rumah.",
  },

  result: {
    correctTitle: "Benar",
    wrongTitle: "Salah",

    correctDescription:
      "Memeriksa isi perjanjian dan mencari tahu siapa yang bertanggung jawab.",

    wrongDescription:
      "Jawaban yang Benar adalah: Memeriksa isi perjanjian dan mencari tahu siapa yang bertanggung jawab.",
  },

  lesson: {
    title: "Pelajaran Hukum",

    description:
      "Sebelum melakukan tindakan, penting untuk memeriksa kembali isi perjanjian untuk mengetahui hak dan tanggung jawab masing-masing pihak. Dengan begitu, Nadia memiliki dasar yang jelas sebelum menghadapi masalah tersebut.",

    points: [
      "Pasal KUHP 1550 – Pemilik wajib memelihara rumah agar dapat digunakan sebagaimana mestinya.",
      "Pasal 1551 – Pemilik wajib melakukan perbaikan yang diperlukan selama masa sewa, kecuali yang menjadi kewajiban penyewa.",
      "Pasal 1564 – Penyewa bertanggung jawab atas kerusakan yang disebabkan olehnya, kecuali kerusakan terjadi di luar kesalahannya.",
    ],
  },
},

  ],
};

export default sewaMenyewa;
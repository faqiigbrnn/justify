import rumah from "../../assets/images/legal-stories/jual-beli/rumah1.png"
import andi from "../../assets/images/legal-stories/jual-beli/character-jualbeli.png"
import penjual from "../../assets/images/legal-stories/jual-beli/uncle-jualbeli.png"
import sertifikat from "../../assets/images/legal-stories/jual-beli/sertifikat-tanah.png"
import mbak from "../../assets/images/legal-stories/jual-beli/mbak-mbak.png"
import melongo from "../../assets/images/legal-stories/jual-beli/andi-melongo.png"
import caution from "../../assets/images/legal-stories/jual-beli/rumah-caution.png"
import andikaget from "../../assets/images/legal-stories/jual-beli/andi-kaget.png"
import andipergi from "../../assets/images/legal-stories/jual-beli/andi-kecewa.png"
import merenung from "../../assets/images/legal-stories/jual-beli/merenung.png"
import merenunglagi from "../../assets/images/legal-stories/jual-beli/merenung-1.png"
const tunda = merenung;
const jualBeli = {
    id: "jual-beli",
    title: "Jual Beli",
    scenes: [
        {
            id: 1,
            name: "Scene 1",
            background: {
                background: rumah,
                width: "w-full",
                height: "h-full",
            },
            character: {

            },

            dialog: null,
            fyi: null,
        },
        {
            id: 2,
            name: "Scene 1 Andi Menemukan Rumah",
            background: {
                background: rumah,
                width: "w-full",
                height: "h-full",
            },
            character: {
                image: andi,
                width: "w-[25%]",
                position: "absolute bottom-0 right-[20%]",
            },
            overlay: "bg-black/50",
            dialog: {
                text: "Rumah ini memiliki lokasi dan harga sesuai dengan yang kuinginkan!",
                width: "w-[25%]",
                position: " left-[30%] top-[40%]",
            },
            fyi: {
                title: "FYI (For Your Information)",
                content: [
                    "Jual beli merupakan kesepakatan antara pihak yang menjual dan pihak yang membeli mengenai suatu objek dengan harga tertentu.",

                    "Namun, tertarik pada objek dan harga belum berarti transaksi harus langsung dilakukan.",

                    "Sebelum melanjutkan, pembeli perlu memastikan kondisi objek dan hal-hal yang berkaitan dengan transaksi."
                ],

            },
        },
        {
            id: 3,
            name: "Scene 2 - Jual Beli",

            background: {
                background: rumah,
                width: "w-full",
                height: "h-full",
            },

            overlay: "bg-black/50",

            character: [
                {
                    name: "Penjual",
                    image: penjual,
                    width: "w-[23%]",
                    position: "absolute bottom-0 left-[2%]",
                },
                {
                    name: "Andi",
                    image: andi,
                    width: "w-[23%]",
                    position: "absolute bottom-0 right-[20%]",
                },
            ],

            dialog: [
                {
                    id: 1,
                    speaker: "Penjual",
                    text: "Rumah ini saya jual seharga 300 juta dengan uang muka 100 juta. Bagaimana, Deal?",
                    width: "w-[30%]",
                    position: "absolute left-[18%] top-[20%]",
                },
                {
                    id: 2,
                    speaker: "Andi",
                    text: "Baik, saya akan membayar 100 juta sebagai uang muka.",
                    width: "w-[30%]",
                    position: "absolute left-[30%] top-[50%]",
                },
                {
                    id: 3,
                    speaker: "Andi",
                    text: "Sebelum saya bayar uang muka, apa saja yang harus kita sepakati pak?",
                    width: "w-[30%]",
                    position: "absolute left-[30%] top-[70%]",
                },
            ],

            fyi: {
                title: "For Your Information",

                sections: [
                    {
                        heading: "Coba Pikirkan:",
                        question:
                            "Apa saja yang perlu disepakati oleh pembeli sebelum melakukan transaksi?",
                        list: [
                            "Harga",
                            "Objek",
                            "Pembayaran",
                            "Penyerahan",
                            "Ketentuan lainnya",
                        ],
                    },
                    {
                        question:
                            "Apa saja yang harus diperiksa sebelum melakukan kesepakatan dan membayar uang muka?",
                        list: [
                            "Dokumen tanah",
                            "Status kepemilikan tanah",
                            "Ada atau tidaknya sengketa",
                        ],
                    },
                ],

                buttonLabel: "Periksa",
            },
        },

        {
            id: 4,
            name: "Scene 3 - Periksa Dokumen",

            background: {
                background: rumah,
                width: "w-full",
                height: "h-full",
            },

            overlay: "bg-black/50",

            character: {
                name: "Sertifikat Tanah",
                image: sertifikat,
                width: "w-[48%]",
                position: "absolute bottom-0 left-[20%]",
            },


            dialog: {
                text: "Baik saya periksa dokumennya ya pak",
                width: "w-[30%]",
                position: "absolute left-[12%] top-[18%]",
            },


            fyi: {
                title: "For Your Information",

                content: [
                    "Sebelum melakukan transaksi, pembeli perlu memeriksa objek dan dokumen yang berkaitan dengan jual beli.",
                ],

                sections: [
                    {
                        question: "Hal yang dapat diperhatikan antara lain:",
                        list: [
                            "Dokumen tanah/rumah",
                            "Status kepemilikan",
                            "Ada atau tidaknya sengketa",
                            "Kesesuaian objek dengan yang ditawarkan",
                        ],
                    },
                ],

                footer: "Jangan hanya melihat harga dan lokasi. Kenali juga risiko hukumnya.",

                buttonLabel: "Next",
            },
        },


        {
            id: 5,
            name: "Scene Yang sudah login",
            background: {
                background: rumah,
                width: "w-full",
                height: "h-full",
            },
            overlay: "bg-black/50",

            character: [
                {
                    name: "Mbak",
                    image: mbak,
                    width: "w-[18%]",
                    position: "absolute bottom-0 left-[4%]",
                },
                {
                    name: "Penjual",
                    image: penjual,
                    width: "w-[24%]",
                    position: "absolute bottom-0 left-[55%]",
                },
                {
                    name: "Andi",
                    image: andikaget,
                    width: "w-[17%]",
                    position: "absolute bottom-0 right-[2%]",
                },
            ],

            dialog: [
                {
                    id: 1,
                    speaker: "Mbak",
                    text: "Pak Budi! Anda menjual rumah ini lagi!",
                    width: "w-[30%]",
                    position: "absolute left-[18%] top-[20%]",
                },
                {
                    id: 2,
                    speaker: "Penjual",
                    text: "Iya memang, kenapa?",
                    width: "w-[27%]",
                    position: "absolute left-[28%] top-[33%]",
                },
                {
                    id: 3,
                    speaker: "Mbak",
                    text: "Bukankah rumah ini masih ada masalah dengan pemilik sebelumnya?!",
                    width: "w-[31%]",
                    position: "absolute left-[20%] top-[46%]",
                },
                {
                    id: 4,
                    speaker: "Penjual",
                    text: "Masalah nya akan saya selesaikan kok!",
                    width: "w-[29%]",
                    position: "absolute left-[27%] top-[65%]",
                },
                {
                    id: 5,
                    speaker: "Andi",
                    text: "Masalah??",
                    width: "w-[15%]",
                    position: "absolute right-[14%] top-[28%]",
                },
            ],

            fyi: null,
        },


        {
            id: 6,
            name: "Scene 4 Jual Beli",
            background: {
                background: rumah,
                width: "w-full",
                height: "h-full",
            },
            overlay: "bg-black/50",

            narration: "Sebelum melakukan pembayaran, Andi mengetahui bahwa rumah tersebut sedang bermasalah dengan pihak lain.",

            character: {
                name: "Andi",
                image: melongo,
                width: "w-[22%]",
                position: "absolute bottom-0 left-[5%]",
            },

            dialog: {
                text: "Apakah saya tetap melanjutkan pembayaran?\n Pilih dari 3 Pilihan di bawah ini!",
                width: "w-[28%]",
                position: "absolute left-[26%] top-[32%]",
            },

            choices: [
                {
                    text: "Lanjutkan Pembayaran",
                    nextSceneId: 7,
                },
                {
                    text: "Batalkan Pembayaran",
                    nextSceneId: 8,
                },
                {
                    text: "Tunda Pembayaran",
                    nextSceneId: 9,
                },
            ],
            choicesPosition: "absolute left-[32%] top-[53%] w-[26%]",

            fyi: {
                title: "For Your Information",
                heading: "Sebelum Memilih:",
                content: [
                    "Sebelum mengambil keputusan, perhatikan hak, kewajiban, dan risiko dalam kesepakatan jual beli. Sebagai pembeli, Andi perlu memperhatikan:",
                ],
                sections: [
                    {
                        list: [
                            "Kewajiban membayar sesuai kesepakatan.",
                            "Kondisi dan status objek yang akan dibeli.",
                            "Isi kesepakatan yang telah dibuat.",
                        ],
                    },
                    {
                        heading: "Sebagai penjual, Budi berkewajiban:",
                        list: [
                            "Memberikan informasi yang benar mengenai objek.",
                            "Memenuhi kewajiban sesuai kesepakatan.",
                        ],
                    },
                ],
                footer: "Jika salah satu pihak tidak memenuhi kewajibannya, hal tersebut dapat menimbulkan persoalan wanprestasi, tergantung pada isi perjanjian dan keadaan kasus.",
                hideButton: true,

                legalBasis: {
                    title: "Dasar Hukum",
                    subtitle: "Materi ini berkaitan dengan:",
                    items: [
                        {
                            title: "1. Pasal 1458 KUHPerdata",
                            subtitle: "Kesepakatan dalam Jual Beli",
                            text: "Jual beli dianggap telah terjadi ketika penjual dan pembeli telah mencapai kesepakatan mengenai barang dan harga.",
                        },
                        {
                            title: "2. Pasal 1320 KUHPerdata",
                            subtitle: "Syarat Sah Perjanjian",
                            text: "Perjanjian harus memenuhi empat syarat: kesepakatan, kecakapan, objek tertentu, dan sebab yang tidak terlarang.",
                        },
                    ],
                },
            },
        },

        {
            id: 7,
            name: "Ending Lanjutkan",
            background: {
                background: rumah,
                width: "w-full",
                height: "h-full",
            },
            overlay: "bg-black/50",

            character: {
                name: "Andi",
                image: andi,
                width: "w-[30%]",
                position: "absolute bottom-0 right-[0%]",
            },

            narration: "Andi memutuskan untuk tetap melanjutkan pembelian.\n\nNamun, karena rumah tersebut masih memiliki permasalahan dengan pihak lain, keputusan tersebut dapat menimbulkan permasalahan hukum di kemudian hari.",
            narrationPosition: "absolute top-[24%] left-[6%] w-[66%]",
            narrationTextClass: "text-lg md:text-2xl lg:text-3xl text-left leading-relaxed font-bold",

            nextSceneId: 10,
        },

        {
            id: 8,
            name: "Scene Batalkan Pembayaran",
            background: {
                background: rumah,
                width: "w-full",
                height: "h-full",
            },
            overlay: "bg-black/50",

            character: {
                name: "Andi",
                image: andipergi,
                width: "w-[20%]",
                position: "absolute bottom-0 right-[40%]",
            },

            dialog: {
                text: "Batal aja deh",
                width: "w-[24%]",
                position: "absolute left-[60%] top-[25%]",
            },

            fyi: null,

            nextSceneId: 11,
        },

        {
            id: 9,
            name: "Scene Tunda Pembayaran",
            background: {
                background: merenunglagi,
                width: "w-full",
                height: "h-full",
            },
            overlay: null,

            character: null,

            dialog: null,

            fyi: null,

            nextSceneId: 12,
        },

        {
            id: 10,
            name: "Ending Lanjutkan 1",
            background: {
                background: caution,
                width: "w-full",
                height: "h-full",
            },
            overlay: "bg-black/50",

            character: {
                name: "Andi Kaget",
                image: andikaget,
                width: "w-[20%]",
                position: "absolute bottom-0 right-[4%]",
            },

            resultCard: {
                title: "Wah, kamu salah mengambil keputusan!",
                subtitle: "Yang Perlu Kamu Ketahui",
                list: [
                    "Periksa dokumen dan status objek sebelum melakukan pembayaran.",
                    "Pastikan pihak yang menjual berhak melakukan transaksi atas objek tersebut.",
                    "Perhatikan adanya sengketa atau permasalahan hukum yang berkaitan dengan objek.",
                    "Sepakati dengan jelas harga, objek, pembayaran, penyerahan, dan ketentuan lainnya.",
                    "Pahami hak dan kewajiban masing-masing pihak dalam kesepakatan.",
                    "Jika kewajiban dalam kesepakatan tidak dipenuhi, dapat timbul persoalan wanprestasi, tergantung pada isi perjanjian dan keadaan kasus.",
                ],
                footer: "Jangan terburu-buru melakukan pembayaran hanya karena harga dan objek terlihat sesuai. Pastikan dokumen, status objek, dan kesepakatan telah diperiksa dan dipahami terlebih dahulu.",
                restartLabel: "Ulangi Story",
                exitLabel: "Pilih Story Lainnya",
            },

            fyi: null,
        },

        {
            id: 11,
            name: "Ending Batal",
            background: {
                background: rumah,
                width: "w-full",
                height: "h-full",
            },
            overlay: "bg-black/50",

            character: {
                name: "Andi Batal",
                image: andipergi,
                width: "w-[20%]",
                position: "absolute bottom-0 right-[6%]",
            },

            fyi: null,

            resultCard: {
                title: "Wah, kamu mengambil keputusan yang tepat!",
                subtitle: "Yang Perlu Kamu Ketahui",
                list: [
                    "Periksa dokumen dan status objek sebelum melakukan pembayaran.",
                    "Pastikan pihak yang menjual memiliki hak yang sah atas objek tersebut.",
                    "Jika ditemukan sengketa atau permasalahan hukum, sebaiknya jangan terburu-buru melanjutkan transaksi.",
                    "Pembatalan transaksi dapat menjadi pilihan untuk menghindari risiko kerugian dan permasalahan hukum lebih lanjut.",
                ],
                footer: "Jangan terburu-buru melanjutkan transaksi hanya karena sudah memberikan uang muka. Pastikan status dan dokumen objek telah jelas sebelum melakukan pembayaran berikutnya.",
                restartLabel: "Ulangi Story",
                exitLabel: "Pilih Story Lainnya",
            },


        },

        {
            id: 12,
            name: "Ending Tunda",
            background: {
                background: merenunglagi,
                width: "w-full",
                height: "h-full",
            },
            overlay: null,

            character: null,
            fyi: null,

            resultCard: {
                title: "Keputusanmu cukup aman, tetapi masih ada yang perlu diperhatikan.",
                subtitle: "Yang Perlu Kamu Ketahui",
                list: [
                    "Menunda pembayaran memberi kesempatan untuk memeriksa kembali dokumen dan status rumah.",
                    "Pastikan permasalahan pada rumah benar-benar jelas sebelum melanjutkan transaksi.",
                    "Jangan melakukan pembayaran berikutnya sebelum status dan dokumen objek dapat dipastikan.",
                    "Jika terdapat sengketa, sebaiknya pertimbangkan kembali kelanjutan transaksi.",
                ],
                footer: "Menunda pembayaran dapat menjadi langkah awal yang lebih aman. Namun, Andi tetap perlu memastikan status hukum dan dokumen rumah sebelum memutuskan untuk melanjutkan transaksi.",
                restartLabel: "Ulangi Story",
                exitLabel: "Pilih Story Lainnya",
            },


        },


    ]
}

export default jualBeli;

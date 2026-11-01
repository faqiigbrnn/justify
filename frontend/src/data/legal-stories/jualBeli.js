import rumah from "../../assets/images/legal-stories/jual-beli/rumah1.png"
import andi from "../../assets/images/legal-stories/jual-beli/character-jualbeli.png"
import penjual from "../../assets/images/legal-stories/jual-beli/uncle-jualbeli.png"
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

        // CHARACTERS
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

        // DIALOGS
        dialog: [
            {
            id: 1,
            speaker: "Penjual",
            text: "Rumah ini saya jual seharga 300 juta dengan uang muka 100 juta. Bagaimana, Deal?",
            width: "w-[30%]",
            position: "absolute left-[18%] top-[38%]",
            },
            {
            id: 2,
            speaker: "Andi",
            text: "Baik, saya akan membayar 100 juta sebagai uang muka.",
            width: "w-[30%]",
            position: "absolute left-[30%] top-[56%]",
            },
            {
            id: 3,
            speaker: "Andi",
            text: "Sebelum saya bayar uang muka, apa saja yang harus kita sepakati pak?",
            width: "w-[30%]",
            position: "absolute left-[30%] top-[70%]",
            },
        ],

        // FYI
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
    ]
}

export default jualBeli;
import kantor from "../../assets/images/legalstories/kontrakkerja/bg.png";
import budi from "../../assets/images/legalstories/kontrakkerja/karakterkontrak.png";
import nanda from "../../assets/images/legalstories/kontrakkerja/siteteh.png";
import bgsaja from "../../assets/images/legalstories/kontrakkerja/background.png";
import kontrak from "../../assets/images/legalstories/kontrakkerja/perjanjiankerja.jpg"
import bingung from "../../assets/images/legalstories/kontrakkerja/tetehbingung.png"
import hilangarah from "../../assets/images/legalstories/kontrakkerja/tetehhilangarah.png"
import struk from "../../assets/images/legalstories/kontrakkerja/struk.png"
import employment from "../../assets/images/legalstories/kontrakkerja/employment.png"
import penjelasan from "../../assets/images/legalstories/kontrakkerja/penjelasan.png"

const kontrakkerja = {
    id: "kontrak-kerja",
    title: "Kontrak Kerja",
    scenes: [
        {
            id: 1,
            name: "Scene 1 - Intro Kontrak Kerja",
            background: {
                background: kantor,
                width: "w-full",
                height: "h-fit",
                objectFit: "object-cover",
                objectPosition: "center 25%",

            },
            character: null,
            dialog: null,
            narration: null,
            fyi: null,
        },
        {
            id: 2,
            name: "Scene 2 - Memeriksa Klausul Kontrak",
            background: {
                background: kantor,
                width: "w-full",
                height: "h-full",
                objectFit: "object-cover",
            },
            overlay: "bg-black/80",
            character: [
                {
                    name: "Budi",
                    image: budi,
                    width: "w-[40%]",
                    position: "absolute bottom-0 left-[5%]",
                },
                {
                    name: "Nanda",
                    image: nanda,
                    width: "w-[35%]",
                    position: "absolute bottom-0 right-[2%]",
                }
            ],

            dialog: [
                {
                    id: 1,
                    text: "Selamat Nanda! Kamu diterima di perusahaan ini dengan gaji Rp.4.500.000 seperti yang tertera di Email.Silahkan dibaca dan ditanda tangani kontrak kerjanya",
                    position: "absolute right-[40%] top-[18%]",
                    width: "w-[34%]",
                },
                {
                    id: 2,
                    text: "Baik Pak, akan saya baca dahulu",
                    position: "absolute left-[40%] top-[48%]",
                    width: "w-[34%]",
                }
            ],
            narration: null,
            fyi: null,
        },

        {
            id: 3,
            name: "Scene 3 - Membaca Kontrak",
            background: {
                background: kantor,
                width: "w-full",
                height: "h-full",
                objectFit: "object-cover",
            },
            overlay: "bg-black/80",
            character: {
                name: "kontrak",
                image: kontrak,
                width: "w-[40%]",
                position: "absolute bottom-0 left-[32%]",
            },

            dialog: null,
            narration: null,
            fyi: null,
        },

        {
            id: 4,
            name: "Scene 4 - nanda bingung",
            background: {
                background: kantor,
                width: "w-full",
                height: "h-full",
                objectFit: "object-cover",
            },
            overlay: "bg-black/80",
            character: {
                name: "nanda",
                image: bingung,
                width: "w-[40%]",
                position: "absolute bottom-0 left-[0%]",
            },

            dialog: {
                id: 1,
                text: "Kok gaji yang tertera di lembar kontrak berbeda dengan penawaran? Aku harus apa ya?",
                position: "absolute left-[35%] top-[15%]",
                width: "w-[34%]",
            },
            narration: null,
            choices: [
                {
                    text: "Meminta penjelasan HRD",
                    nextSceneId: 5,
                },
                {
                    text: "Langsung Mendatangani saja",
                    nextSceneId: 8,
                }
            ],
            choicesPosition: "absolute right-[32%] top-[49%] w-[26%]",
            fyi: null,
        },

        {
            id: 5,
            name: "Scene 5A - TTD",
            background: {
                background: kantor,
                width: "w-full",
                height: "h-full",
                objectFit: "object-cover",
            },
            overlay: "bg-black/80",
            character: {
                name: "nanda",
                image: hilangarah,
                width: "w-[30%]",
                position: "absolute bottom-0 left-[8%]",
            },

            dialog: {
                id: 1,
                text: "Baiklah, langsungku tanda tangani saja berkas ini",
                position: "absolute left-[35%] top-[30%]",
                width: "w-[34%]",
            },
            narration: null,
            choices: null,
            fyi: null,
        },

        {
            id: 6,
            name: "Scene 6A - Minta Klarifikasi",
            background: {
                background: kantor,
                width: "w-full",
                height: "h-full",
                objectFit: "object-cover",
            },
            overlay: "bg-black/80",
            character: null,

            dialog: {
                id: 1,
                text: "Satu Bulan Berlalu...",
                position: "absolute left-[40%] top-[35%]",
                width: "w-[%]",
            },
            narration: null,
            choices: null,
            fyi: null,
        },

        {
            id: 7,
            name: "Scene 7A - Nanda Menerima Gaji",
            background: {
                background: kantor,
                width: "w-full",
                height: "h-full",
                objectFit: "object-cover",
            },
            overlay: "bg-black/80",
            character: {
                name: "nanda",
                image: struk,
                width: "w-[32%]",
                position: "absolute bottom-5 left-[28%]",
            },

            dialog: {
                id: 1,
                text: "Ternyata yang aku terima\n tidak sesuai dengan\n penawaran diawal ya...",
                position: "absolute right-[7%] top-[30%]",
                width: "w-[30%]",
            },
            narration: null,
            choices: null,
            fyi: null,
            nextSceneId: 11,
        },

        {
            id: 8,
            name: "Scene 5B - klarif",
            background: {
                background: kantor,
                width: "w-full",
                height: "h-full",
                objectFit: "object-cover",
            },
            overlay: "bg-black/80",
            character: {
                name: "nanda",
                image: bingung,
                width: "w-[40%]",
                position: "absolute bottom-0 left-[6%]",
            },

            dialog: {
                id: 1,
                text: "Gaji yang tertera dikontrak Rp.3.500.000,\n sedangkan sesuai diskusi saya dijanjikan\n mendapat gaji Rp.4.500.000. Apa bisa \ndijelaskan?",
                position: "absolute left-[38%] top-[28%]",
                width: "w-[32%]",
            },
            narration: null,
            choices: null,
            fyi: null,
        },

        {
            id: 9,
            name: "Scene 6B - Klarifikasi ",
            background: {
                background: kantor,
                width: "w-full",
                height: "h-full",
                objectFit: "object-cover",
            },
            overlay: "bg-black/80",
            character: [
                {
                    name: "HRD",
                    image: budi,
                    width: "w-[45%]",
                    position: "absolute bottom-0 left-[4%]",
                },
                {
                    name: "nanda",
                    image: bingung,
                    width: "w-[40%]",
                    position: "absolute bottom-0 right-[-2%]",
                }
            ],


            dialog: [
                {
                    id: 1,
                    text: "Oh, mengenai perbedaan nominal gaji\n tersebut, angka Rp.3.500.000 yang\n tercantuk dalam kontrak merupakan\n nominal awal yang digunakan perusahaan",
                    position: "absolute left-[30%] top-[15%]",
                    width: "w-[32%]",
                },
                {
                    id: 2,
                    text: "Namun saat wawancara saya\n diinfromasikan bahwa gaji yang akan saya\n terima sebesar Rp.4.500.000. Apakah\n nominal tersebut masih berlaku?",
                    position: "absolute right-[28%] bottom-[28%]",
                    width: "w-[32%]",
                },
            ],
            narration: null,
            choices: null,
            fyi: null,
        },

        {
            id: 10,
            name: "Scene 6B - Klarifikasi ",
            background: {
                background: kantor,
                width: "w-full",
                height: "h-full",
                objectFit: "object-cover",
            },
            overlay: "bg-black/80",
            character:
            {
                name: "HRD",
                image: budi,
                width: "w-[45%]",
                position: "absolute bottom-0 left-[15%]",
            },


            dialog: {
                id: 1,
                text: "Kami memahami informasi yang disampaikan.\n Penyesuaian gaji akan kami usahakan\n setelah kamu mulai bekerja. Untuk saat ini,\n kamu bisa menggunakan kontrak yang sudah\n kami berikan dahulu",
                position: "absolute left-[42%] top-[20%]",
                width: "w-[34%]",
            },
            narration: null,
            choices: null,
            fyi: null,
            nextSceneId: 11,
        },

        {
            id: 11,
            name: "scene 11",
            background: {
                background: kantor,
                width: "w-full",
                height: "h-full",
                objectFit: "object-cover",
            },
            overlay: "bg-black/80",
            character: {
                name: "employment",
                image: employment,
                width: "w-[55%]",
                position: "absolute top-[76px] left-[20%]",
            },
            choices: [
                {
                    text: "Apa yang harus Nanda lakukan?",
                    nextSceneId: 12,
                },
            ],
            choicesPosition: "absolute bottom-10 left-[35%] w-[30%]",
            dialog: null,
            narration: null,
            fyi: null,
        },

        {
            id: 12,
            name: "scene 12",
            background: {
                background: kantor,
                width: "w-full",
                height: "h-full",
                objectFit: "object-cover",
            },
            overlay: "bg-black/80",
            character: {
                name: "penjelasan",
                image: penjelasan,
                width: "w-[55%]",
                position: "absolute top-[10%] left-1/2 -translate-x-1/2",
            },
            actionButtons: {
                restartLabel: "Ulangi Story",
                exitLabel: "Pilih Story Lainnya",
            },
            actionButtonsPosition: "bottom-6 left-1/2 -translate-x-1/2 w-[55%] flex items-center justify-between",
            dialog: null,
            narration: null,
            choices: null,
            fyi: null,
        },
    ],
};

export default kontrakkerja;


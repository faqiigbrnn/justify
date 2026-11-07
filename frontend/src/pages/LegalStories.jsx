import { Link } from "react-router-dom";
import LegalApproach from "../assets/images/legal-approach.png";
import rumahImg from "../assets/images/legal-stories/jual-beli/rumah.png";

const JualBeli = rumahImg;
const SewaMenyewa = rumahImg;
const KontrakKerja = rumahImg;

export default function LegalStories() {
  const stories = [
    {
      id: 1,
      slug: "jual-beli",
      category: "Kasus Jual Beli",
      title: "Permasalahan dalam Transaksi Jual Beli",
      image: JualBeli,
    },
    {
      id: 2,
      slug: "sewa-menyewa",
      category: "Kasus Sewa Menyewa",
      title: "Permasalahan dalam Perjanjian Sewa Menyewa",
      image: SewaMenyewa,
    },
    {
      id: 3,
      slug: "kontrak-kerja",
      category: "Kontrak Kerja",
      title: "Memahami Hak dan Kewajiban dalam Kontrak",
      image: KontrakKerja,
    },
  ];

  return (
    <div className="min-h-screen bg-[#D2EAF0]">

      <main className="max-w-[1200px] mx-auto px-6 md:px-12 py-7">

        <section className="bg-white border border-[#258BD1] rounded-2xl px-5 md:px-10 py-6 md:py-8 flex items-center justify-between min-h-[155px]">
          <div className="w-1/2">
            <h1 className="text-xl md:text-2xl font-semibold leading-snug text-black">
              What Would You Do?
              <br />
              Explore the Case
            </h1>

            <div className="flex gap-2 mt-5">
              <span className="w-9 h-2 rounded-full bg-[#B6D9E6]"></span>
              <span className="w-9 h-2 rounded-full bg-[#B6D9E6]"></span>
              <span className="w-9 h-2 rounded-full bg-[#B6D9E6]"></span>
              <span className="w-9 h-2 rounded-full bg-[#B6D9E6]"></span>
            </div>
          </div>

          <div className="w-/3 flex justify-end">
            <img
              src={LegalApproach}
              alt="Legal Approach Illustration"
              className="w-full max-w-[220px] h-[110px] object-contain scale-155 origin-right"
            />
          </div>
        </section>

        <section className="mt-5">
          <div className="flex items-center justify-between border-b border-[#9FC8D6] pb-2">
            <div>
              <h2 className="text-lg font-medium text-[#202020]">
                All Story
              </h2>
              <p className="text-[11px] text-gray-500">
                Complete the story, learn the law
              </p>
            </div>

            <Link
              to="/legal-stories/all"
              className="text-xs font-medium text-black hover:text-[#258BD1] transition"
            >
              Lihat semua
            </Link>
          </div>
        </section>

        <section
          id="stories"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5"
        >
          {stories.map((story) => (
            <div
              key={story.id}
              className="relative h-[190px] rounded-xl overflow-hidden group shadow-sm bg-gray-300"
            >
              <img
                src={story.image}
                alt={story.title}
                className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

              <div className="absolute top-3 left-3 z-10">
                <span className="bg-white/90 text-gray-800 text-[10px] px-2.5 py-1 rounded-sm font-semibold shadow-xs">
                  {story.category}
                </span>
              </div>

              <div className="absolute bottom-12 left-3 right-3 z-10">
                <p className="text-white text-xs font-semibold drop-shadow-md line-clamp-2">
                  {story.title}
                </p>
              </div>

              <div className="absolute bottom-3 right-3 z-10">
                <Link
                  to={`/legal-stories/${story.slug}`}
                  className="inline-block bg-[#258BD1] text-white text-[11px] font-semibold px-3.5 py-1.5 rounded-md hover:bg-[#17658B] transition shadow cursor-pointer"
                >
                  Mulai Story
                </Link>
              </div>
            </div>
          ))}
        </section>

      </main>
    </div>
  );
}

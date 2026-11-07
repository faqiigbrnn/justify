import { useState } from "react";
import { Link } from "react-router-dom";
import jualbeli from "../assets/images/legal-stories/jual-beli/rumahdanandi.png";
import kontrakkerja from "../assets/images/legal-stories/jual-beli/kontrak-kerja.png";
import sewa from "../assets/images/legal-stories/jual-beli/sewa-rumah.png";
const casesData = [
  {
    id: 1,
    slug: "jual-beli",
    category: "Kasus Jual Beli",
    title: "Sengketa Jual Beli Tanah",
    description: "Ketika kesepakatan jual beli tanah berubah menjadi sengketa.",
    image: jualbeli,
  },
  {
    id: 2,
    slug: "kontrak-kerja",
    category: "Perjanjian Kontrak",
    title: "Kontrak Kerja",
    description: "Memahami Hak, Kewajiban dan Hal yang perlu diperhatikan sebelum tanda tangan",
    image: kontrakkerja,
  },
  {
    id: 3,
    slug: "jual-beli",
    category: "Kasus Jual Beli",
    title: "Sengketa Jual Beli Tanah",
    description: "Ketika kesepakatan jual beli tanah berubah menjadi sengketa.",
    image: jualbeli,

  },
  {
    id: 4,
    slug: "jual-beli",
    category: "Kasus Jual Beli",
    title: "Sengketa Jual Beli Tanah",
    description: "Ketika kesepakatan jual beli tanah berubah menjadi sengketa.",
    iamge:jualbeli,
  },
  {
    id: 5,
    slug: "kontrak-kerja",
    category: "Perjanjian Kontrak",
    title: "Kontrak Kerja",
    description: "Memahami Hak, Kewajiban dan Hal yang perlu diperhatikan sebelum tanda tangan",
    image:kontrakkerja,
  },
  {
    id: 6,
    slug: "sewa-rumah",
    category: "Kasus Sewa Menyewa",
    title: "Sengketa Sewa Rumah",
    description: "Atap bocor dan barang penyewa rusak, siapa yang bertanggung jawab?",
    image:sewa,
  },
];

export default function AllCases() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCases = casesData.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-7xl mx-auto px-6 lg:px-12 py-10">

        {/* HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 border-b border-[#258BD1] pb-3 mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-normal text-black tracking-tight">
              All Cases
            </h1>
            <p className="text-xs text-gray-400 font-normal mt-0.5">
              Complete the story, learn the law
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full sm:w-80">
            <span className="absolute inset-y-0 left-3 flex items-center text-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
                />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Cari Kasus"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-[#258BD1] py-1.5 pl-9 pr-4 text-xs text-gray-800 placeholder-gray-400 outline-none focus:ring-1 focus:ring-[#258BD1] transition bg-white"
            />
          </div>
        </div>

        {/* CARDS*/}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCases.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-gray-200 overflow-hidden bg-white shadow-xs hover:shadow-md transition flex flex-col justify-between"
            >
              <div className="relative h-48 bg-slate-200 overflow-hidden">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition duration-300 hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs font-medium">
                    Image Placeholder
                  </div>
                )}

                <span className="absolute top-3 left-3 rounded-md bg-white/95 px-3 py-1 text-xs font-semibold text-gray-800 shadow-xs z-10">
                  {item.category}
                </span>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-[#2071a3] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="flex justify-end pt-2">
                  <Link
                    to={`/legal-stories/${item.slug}`}
                    className="inline-block rounded-full bg-[#2071a3] px-5 py-1.5 text-xs font-semibold text-white hover:bg-[#185a82] transition shadow-xs cursor-pointer"
                  >
                    Mulai Kasus
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </main>
    </div>
  );
}


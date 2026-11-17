import { Link } from "react-router-dom";
import {
  CircleUserRound,
  CircleHelp,
  Zap,
  Smile,
BookOpen,
} from "lucide-react";


import EducationImage from "../assets/images/pusat-edukasilogo.png";
import StoriesImage from "../assets/images/legal-storieslogo.png";

export default function Beranda() {
    const completedStories = 3;
const totalStories = 6;
// Data progres Legal Stories sementara
const activeStory = {
  title: "Kasus Sewa-Menyewa",
  theme: "sewa-menyewa",
  completedScenes: 3,
  totalScenes: 6,
};

const storyProgress = Math.round(
  (activeStory.completedScenes / activeStory.totalScenes) * 100
);

  return (
    <div className="w-full">


      {/* MAIN CONTENT */}
      <main className="px-6 py-6 sm:px-8 lg:px-9 lg:py-7">   

        {/* WELCOME CARD */}
        <section className="rounded-2xl border border-[#91C5E5] bg-white px-7 py-7 lg:px-8 lg:py-8">

          <h1 className="flex flex-wrap items-center gap-2 text-xl font-bold text-gray-900 sm:text-2xl">

            Selamat Datang, User

            <Smile
              size={23}
              className="text-[#258BD1]"
              strokeWidth={2.5}
            />

          </h1>

          <p className="mt-2 text-sm text-gray-600 sm:text-base">
            Perjalanan Belajarmu di Justify masih panjang!
          </p>

      
        </section>
        {/* PROGRES LEGAL STORIES */}
     
{/* PROGRES LEGAL STORIES */}
<section className="mt-6 rounded-3xl border border-[#B5D8E9] bg-white px-7 py-7 sm:px-9 lg:px-10 lg:py-8">

  {/* HEADER */}
  <div className="flex flex-wrap items-center justify-between gap-4">
    <h2 className="flex items-center gap-3 text-lg font-bold text-gray-900 sm:text-xl">
      <BookOpen
        size={29}
        className="text-[#258BD1]"
      />
      Progres Legal Stories
    </h2>

    <span className="rounded-lg bg-[#D2EAF0] px-4 py-1 text-sm font-medium text-[#258BD1] sm:text-base">
      Cerita Interaktif
    </span>
  </div>

  {/* DESCRIPTION */}
  <p className="mt-5 text-sm leading-relaxed text-slate-500 sm:text-base">
    Pantau perjalananmu dalam menyelesaikan cerita hukum interaktif
    di JUSTIFY. Lanjutkan cerita yang belum selesai dan pahami
    penerapan hukum dalam kehidupan sehari-hari.
  </p>

  {/* STORY PROGRESS CARD */}
  <div className="mt-6 rounded-3xl border border-slate-100 bg-slate-50 px-5 py-5 sm:px-6">

    <div className="flex flex-wrap items-center justify-between gap-2">
      <p className="text-sm font-semibold text-slate-800 sm:text-base">
        {activeStory.title}
      </p>

      <p className="text-sm font-bold text-[#258BD1] sm:text-base">
        {activeStory.completedScenes} dari {activeStory.totalScenes} scene
      </p>
    </div>

    {/* PROGRESS BAR */}
    <div className="mt-4 h-3 w-full overflow-hidden rounded-full bg-slate-200">
      <div
        className="h-full rounded-full bg-[#258BD1] transition-all duration-500"
        style={{ width: `${storyProgress}%` }}
      />
    </div>

    {/* PROGRESS INFORMATION */}
    <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
      <p className="text-xs text-slate-400 sm:text-sm">
        {storyProgress}% selesai
      </p>

      <span className="text-xs font-medium text-[#258BD1] sm:text-sm">
        Sedang berlangsung
      </span>
    </div>

    {/* CONTINUE BUTTON */}
    <div className="mt-5">
      <Link
        to={`/legal-stories/${activeStory.theme}`}
        className="inline-flex items-center justify-center rounded-lg bg-[#258BD1] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1D6FA5]"
      >
        Lanjutkan Cerita
      </Link>
    </div>

  </div>
</section>


        {/* ALL FEATURES */}
        <section className="mt-8">

          {/* SECTION TITLE */}
          <div className="border-b border-[#91C5E5] pb-3">

            <h2 className="text-base font-bold text-gray-900 sm:text-lg">
              All Features
            </h2>

            <p className="mt-1 text-xs text-gray-600 sm:text-sm">
              Explore everything JUSTIFY has to offer.
            </p>

          </div>

          {/* FEATURE CARDS */}
          <div className="mt-5 grid grid-cols-1 gap-6 px-1 md:grid-cols-2">

            {/* PUSAT EDUKASI */}
            <div className="group relative flex h-52 items-center justify-center overflow-hidden rounded-xl bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-lg lg:h-60">

              <img
                src={EducationImage}
                alt="Pusat Edukasi"
                className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
              />

              <Link
                    to="/beranda/pusat-edukasi"
                    className="absolute bottom-4 rounded-lg bg-[#258BD1]/75 px-6 py-2.5 text-sm font-semibold text-white shadow-sm backdrop-blur-sm transition duration-300 hover:bg-[#258BD1]/90 hover:shadow-md sm:text-base"
                    >
                    Pusat Edukasi
                </Link>

            </div>

            {/* LEGAL STORIES */}
            <div className="group relative flex h-52 items-center justify-center overflow-hidden rounded-xl bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-lg lg:h-60">

              <img
                src={StoriesImage}
                alt="Legal Stories"
                className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
              />

               <Link
                    to="/beranda/legal-stories"
                    className="absolute bottom-4 rounded-lg bg-[#258BD1]/75 px-6 py-2.5 text-sm font-semibold text-white shadow-sm backdrop-blur-sm transition duration-300 hover:bg-[#258BD1]/90 hover:shadow-md sm:text-base"
                    >
                    Legal Stories
                </Link>


            </div>

          </div>

        </section>

      </main>
    </div>
  );
}

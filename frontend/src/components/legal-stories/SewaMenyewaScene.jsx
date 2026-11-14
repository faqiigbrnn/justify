import { useState, useEffect } from "react";
import {
  Home,
  MapPin,
  BedDouble,
  Bath,
  CookingPot,
  BriefcaseBusiness,
  ArrowLeft,
  ArrowRight,
  Search,
  Tags,
  CalendarDays,
  FileText,
  CheckCircle2,
} from "lucide-react";
import Chibi from "../../assets/images/legal-stories/sewa-menyewa/chibi.png";
import Confront from "../../assets/images/legal-stories/sewa-menyewa/confront.png";
import Character from "../../assets/images/legal-stories/sewa-menyewa/character.png";
const facilityIcons = {
  kerja: BriefcaseBusiness,
  kamar: BedDouble,
  mandi: Bath,
  dapur: CookingPot,
};

function SewaMenyewaScene({
  scene,
  currentScene,
  onBack,
  onNext,
  onRestart,
  onChooseStory,
}) {
  const properties = scene?.rentalProperties || [];

  const [selectedPropertyId, setSelectedPropertyId] = useState(
    properties[2]?.id || properties[0]?.id
  );

  // Mengatur ulang pilihan ketika berpindah scene
  useEffect(() => {
    setSelectedPropertyId(properties[2]?.id || properties[0]?.id);
  }, [currentScene]);
  const [showLegalPopup, setShowLegalPopup] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  useEffect(() => {
      if (currentScene === 0) {
    setSelectedAnswer(null);
  }
    setShowLegalPopup(false);
  }, [currentScene]);

  const activeProperty =
    properties.find((property) => property.id === selectedPropertyId) ||
    properties[0];
  
    // Tampilan Scene 2: Negosiasi harga sewa
  if (scene?.id === 2) {
    const considerationIcons = {
      rumah: Home,
      harga: Tags,
      waktu: CalendarDays,
    };

    return (
      <main className="min-h-screen bg-white">
        <div className="min-h-screen flex flex-col">

          {/* Header */}
          <header className="h-14.5 flex items-center px-6 mt-4">
            <button
              onClick={onBack}
              className="rounded-lg bg-white px-8 py-2 text-md font-semibold text-gray-800 shadow-md hover:bg-[#BBD9E8] border-2 border-[#2580AE] cursor-pointer"
            >
              ← Back
            </button>
          </header>

          {/* Konten Scene 2 */}
          <div className="w-full max-w-312.5 mx-auto px-6 md:px-12 py-8 flex-1">

            {/* Judul */}
            <div className="rounded-lg border border-[#75A9CE] bg-[#E3EFF9] px-4 py-3 mb-6">
              <h1 className="text-lg md:text-xl font-bold text-slate-800">
                {scene?.title}
              </h1>
            </div>

            {/* Ilustrasi negosiasi */}
            <div className="w-full max-w-180 mx-auto h-64 md:h-80 rounded-lg bg-[#F5F8FB] border border-[#BBD9E8] overflow-hidden flex items-center justify-center mb-8">
              {scene?.image ? (
                <img
                  src={scene.image}
                  alt="Nadia bertemu Pak Arif"
                  className="w-full h-full object-contain"
                />
              ) : (
                <div className="text-center text-[#2580AE]">
                  <Home size={55} className="mx-auto mb-2" />
                  <p className="text-sm">Ilustrasi negosiasi</p>
                </div>
              )}
            </div>

            {/* Hasil negosiasi */}
            <section className="max-w-220 mx-auto mb-8">
              <h2 className="text-center text-base md:text-lg font-bold text-slate-800 mb-4">
                HASIL NEGOSIASI
              </h2>

              <div className="rounded-lg border border-[#BBD9E8] overflow-hidden">
                {scene?.negotiation?.details?.map((item, index) => (
                  <div
                    key={index}
                    className={`flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-5 py-3 ${
                      index !== scene.negotiation.details.length - 1
                        ? "border-b border-[#BBD9E8]"
                        : ""
                    } ${
                      item.highlight ? "bg-[#E3EFF9]" : "bg-white"
                    }`}
                  >
                    <span className="text-sm font-semibold text-slate-700">
                      {item.label}
                    </span>

                    <span
                      className={`text-sm ${
                        item.highlight
                          ? "font-bold text-[#2580AE]"
                          : "text-slate-600"
                      }`}
                    >
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Hal yang perlu diperhatikan */}
            <section className="mb-8">
              <h2 className="text-center text-base md:text-lg font-bold text-slate-800 mb-5">
                Sebelum menyewa rumah, Perhatikan
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {scene?.considerations?.map((item, index) => {
                  const Icon =
                    considerationIcons[item.icon] || Home;

                  return (
                    <div
                      key={index}
                      className="rounded-lg border border-[#BBD9E8] bg-white p-5 text-center"
                    >
                      <div className="w-12 h-12 mx-auto rounded-full bg-[#E3EFF9] text-[#2580AE] flex items-center justify-center mb-3">
                        <Icon size={23} />
                      </div>

                      <h3 className="text-sm font-bold text-slate-800 mb-2">
                        {item.title}
                      </h3>

                      <p className="text-xs leading-relaxed text-slate-500">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Tombol lanjut */}
            <div className="flex justify-end">
              <button
                type="button"
                onClick={onNext}
                className="flex items-center gap-3 rounded-lg bg-[#2580AE] px-5 py-2 text-xs font-semibold text-white hover:bg-[#17658D] transition cursor-pointer"
              >
                Lanjut
                <ArrowRight size={15} />
              </button>
            </div>

          </div>
        </div>
      </main>
    );
  }
  // Tampilan Scene 3: Membuat perjanjian sewa menyewa
if (scene?.id === 3) {
  return (
    <main className="min-h-screen bg-[#F5F8FB]">
      <div className="min-h-screen flex flex-col">

        {/* Header */}
        <header className="h-14 flex items-center px-6 mt-4">
          <button
            onClick={onBack}
            className="rounded-lg bg-white px-8 py-2 text-md font-semibold text-gray-800 shadow-md hover:bg-[#BBD9E8] border-2 border-[#2580AE] cursor-pointer"
          >
            ← Back
          </button>
        </header>

        {/* Konten Scene 3 */}
        <div className="w-full max-w-312.5 mx-auto px-6 md:px-12 py-6 flex-1">

          <div className="rounded-lg border border-[#BBD9E8] bg-white p-5 md:p-8">

            {/* Judul dan pengantar */}
            <section className="mb-6">

              <h1 className="text-lg md:text-xl font-bold text-slate-800 mb-4">
                {scene?.introduction?.title}
              </h1>

              <div className="grid grid-cols-1 md:grid-cols-[40%_1fr] gap-5 items-center">

                {/* Ilustrasi */}
                <div className="h-48 md:h-52 rounded-lg overflow-hidden bg-[#F5F8FB]">
                  {scene?.image && (
                    <img
                      src={scene.image}
                      alt="Nadia dan Pak Arif membuat perjanjian sewa menyewa"
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>

                {/* Penjelasan */}
                <div>
                  <h2 className="text-sm md:text-base font-bold text-slate-800 mb-2">
                    Sebelum menyewa rumah, Nadia dan Pak Arif perlu menyepakati beberapa hal dalam perjanjian.
                  </h2>

                  <p className="text-xs leading-relaxed text-slate-500">
                    {scene?.introduction?.description}
                  </p>
                </div>

              </div>
            </section>

            {/* Daftar Kesepakatan */}
            <section className="mb-6">

              <div className="relative w-full">

                {/* Grid Kartu */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
                  {scene?.agreementItems?.map((item) => (
                    <div
                      key={item.number}
                      className={`min-h-19 rounded-lg border border-[#75A9CE] bg-[#C5DFEC] p-3 flex items-start gap-3 ${
                        item.span === 2 ? "md:col-span-2" : ""
                      }`}
                    >
                      <div className="w-6 h-6 shrink-0 rounded-md bg-white border border-[#75A9CE] flex items-center justify-center">
                        <span className="text-[12px] font-bold text-[#2580AE]">
                          {item.number}
                        </span>
                      </div>

                      <div className="min-w-0 flex-1">
                        <h3 className="text-[10px] md:text-[14px] font-bold text-slate-800 mb-1">
                          {item.title}
                        </h3>

                        <p className="text-[12px] leading-relaxed text-slate-600">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chibi */}
                <img
                  src={Chibi}
                  alt="Karakter pendamping"
                  className="hidden md:block absolute z-20 w-55 h-55 object-contain right-0 -bottom-12 pointer-events-none"
                />

              </div>
            </section>

            {/* Garis pemisah */}
            <div className="border-t border-[#BBD9E8] mb-4" />

            {/* Catatan edukasi dan tombol */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">

              <div className="flex items-start gap-2">
                <div className="text-[#2580AE] shrink-0 mt-0.5">
                  <FileText size={15} />
                </div>

                <p className="text-[10px] leading-relaxed text-slate-500">
                  {scene?.note}
                </p>
              </div>

              <button
                type="button"
                onClick={onNext}
                className="self-end sm:self-auto flex items-center gap-3 rounded-lg bg-[#2580AE] px-5 py-2 text-xs font-semibold text-white hover:bg-[#17658D] transition cursor-pointer"
              >
                {scene?.buttonLabel || "Lanjut"}
                <ArrowRight size={15} />
              </button>

            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
// ==========================================
// SCENE 4: PENYERAHAN KUNCI RUMAH
// ==========================================
if (scene?.id === 4) {
  return (
    <main className="min-h-screen bg-[#F5F8FB]">
      <div className="min-h-screen flex flex-col">

        {/* Header */}
        <header className="h-14 flex items-center px-6 mt-4">
          <button
            type="button"
            onClick={onBack}
            className="flex items-center gap-2 rounded-lg bg-white px-5 py-2 text-sm font-semibold text-gray-800 shadow-sm hover:bg-[#BBD9E8] border border-[#2580AE] cursor-pointer transition"
          >
            <ArrowLeft size={15} />
            Kembali
          </button>
        </header>

        {/* Konten Scene 4 */}
        <div className="w-full max-w-250 mx-auto px-5 md:px-10 py-6 flex-1">

          <div className="rounded-xl border border-[#BBD9E8] bg-white p-5 md:p-8">

            {/* Judul */}
            <h1 className="text-base md:text-lg font-bold text-slate-800 mb-3">
              Kunci Rumah Diserahkan
            </h1>

            {/* Ilustrasi */}
            <div className="w-full h-52 md:h-80 rounded-lg overflow-hidden bg-[#F5F8FB] mb-5">
              {scene?.image ? (
                <img
                  src={scene.image}
                  alt="Pak Arif menyerahkan kunci rumah kepada Nadia"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-[#2580AE]">
                  <Home size={55} />
                </div>
              )}
            </div>

            {/* Narasi */}
            <section className="rounded-lg border border-[#BBD9E8] bg-[#F8FBFD] px-5 py-4 mb-4">
              <h2 className="text-sm font-semibold text-slate-800 mb-2">
                {scene?.introduction?.title}
              </h2>

              <p className="text-[10px] md:text-xs leading-relaxed text-slate-500">
                {scene?.introduction?.description}
              </p>
            </section>

            {/* Status Rumah */}
            <section className="rounded-lg border border-[#BBD9E8] bg-[#E3EFF9] px-4 py-4 flex items-center gap-3 mb-5">

              {/* Icon */}
              <div className="w-10 h-10 shrink-0 rounded-lg bg-white flex items-center justify-center text-[#2580AE]">
                <Home size={21} />
              </div>

              {/* Informasi */}
              <div className="min-w-0">
                <h3 className="text-xs md:text-sm font-bold text-slate-800 mb-1">
                  {scene?.status?.title}
                </h3>

                <p className="text-[10px] leading-relaxed text-slate-500">
                  {scene?.status?.description}
                </p>
              </div>

            </section>

            {/* Garis Pembatas */}
            <div className="border-t border-[#BBD9E8] pt-4">

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">

                {/* Catatan */}
                <div className="flex items-start gap-2">
                  <CheckCircle2
                    size={14}
                    className="text-[#2580AE] shrink-0 mt-0.5"
                  />

                  <p className="text-[10px] leading-relaxed text-slate-500">
                    {scene?.note}
                  </p>
                </div>

                {/* Tombol Lanjut */}
                <button
                  type="button"
                  onClick={onNext}
                  className="self-end sm:self-auto flex items-center gap-3 rounded-lg bg-[#2580AE] px-5 py-2 text-xs font-semibold text-white hover:bg-[#17658D] transition cursor-pointer"
                >
                  {scene?.buttonLabel || "Lanjut"}
                  <ArrowRight size={15} />
                </button>

              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
// ==========================================
// SCENE 5: MUNCUL MASALAH
// ==========================================
if (scene?.id === 5) {
  return (
    <main className="min-h-screen bg-[#F5F8FB]">
      <div className="min-h-screen flex flex-col">

        {/* Header */}
        <header className="h-14 flex items-center px-6 mt-4">
          <button
            type="button"
            onClick={onBack}
            className="flex items-center gap-2 rounded-lg bg-white px-5 py-2 text-sm font-semibold text-gray-800 shadow-sm hover:bg-[#BBD9E8] border border-[#2580AE] cursor-pointer transition"
          >
            <ArrowLeft size={15} />
            Kembali
          </button>
        </header>

        {/* Konten Scene 5 */}
        <div className="w-full max-w-250 mx-auto px-5 md:px-10 py-6 flex-1">

          <div className="rounded-xl border border-[#BBD9E8] bg-white p-5 md:p-7">

            {/* Judul */}
            <h1 className="text-center text-base md:text-lg font-bold text-slate-800 mb-5">
              Muncul Masalah!
            </h1>

            {/* Deskripsi */}
            <p className="text-[12px] leading-relaxed text-slate-700 mb-3">
              {scene?.description}
            </p>

            {/* Ilustrasi */}
            <div className="w-full max-w-200 mx-auto h-44 md:h-64 rounded-lg overflow-hidden bg-[#F5F8FB] mb-5">
              {scene?.image ? (
                <img
                  src={scene.image}
                  alt="Nadia dan Pak Arif menghadapi masalah atap bocor"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-[#2580AE]">
                  <Home size={55} />
                </div>
              )}
            </div>

            {/* Garis Pembatas */}
            <div className="border-t border-[#75A9CE] mb-5" />

            {/* Percakapan */}
            <section className="flex flex-col gap-3 px-1 md:px-5 mb-5">

              {scene?.dialogues?.map((dialogue, index) => {
                const isNadia = dialogue.speaker === "nadia";

                return (
                  <div
                    key={index}
                    className={`flex items-center gap-3 ${
                      isNadia
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >

                    {/* Identitas Pak Arif */}
                    {!isNadia && (
                      <div className="w-8 h-8 shrink-0 rounded-md border border-[#BBD9E8] bg-[#F0F7FF] flex items-center justify-center">
                        <span className="text-[9px] font-semibold text-[#2580AE]">
                          {dialogue.initial}
                        </span>
                      </div>
                    )}

                    {/* Chat Bubble */}
                    <div
                      className={`max-w-[85%] md:max-w-[70%] rounded-md px-3 py-3 ${
                        isNadia
                          ? "bg-[#E3EFF9] text-slate-700"
                          : "bg-[#2580AE] text-white"
                      }`}
                    >
                      <p
                        className={`text-[12px] font-semibold mb-1 ${
                          isNadia
                            ? "text-[#2580AE] text-right"
                            : "text-white"
                        }`}
                      >
                        {dialogue.name}
                      </p>

                      <p
                        className={`text-[12px] leading-relaxed ${
                          isNadia
                            ? "text-right"
                            : "text-left"
                        }`}
                      >
                        "{dialogue.message}"
                      </p>
                    </div>

                    {/* Identitas Nadia */}
                    {isNadia && (
                      <div className="w-8 h-8 shrink-0 rounded-md border border-[#BBD9E8] bg-[#F0F7FF] flex items-center justify-center">
                        <span className="text-[9px] font-semibold text-[#2580AE]">
                          {dialogue.initial}
                        </span>
                      </div>
                    )}

                  </div>
                );
              })}

            </section>

            {/* Kesimpulan */}
            <div className="border-t border-[#BBD9E8] pt-4">

              <div className="max-w-180 mx-auto rounded-md border border-slate-300 bg-[#F0F4FA] px-4 py-3 text-center">
                <p className="text-[12px] leading-relaxed text-slate-700 font-bold">
                  {scene?.conclusion}
                </p>
              </div>

              {/* Tombol Lanjut */}
              <div className="flex justify-end mt-5">
                <button
                  type="button"
                  onClick={onNext}
                  className="flex items-center gap-3 rounded-lg bg-[#2580AE] px-5 py-2 text-xs font-semibold text-white hover:bg-[#17658D] transition cursor-pointer"
                >
                  {scene?.buttonLabel || "Lanjut"}
                  <ArrowRight size={15} />
                </button>
              </div>

            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
// ==========================================
// SCENE 6: KEPUTUSAN NADIA
// ==========================================
if (scene?.id === 6) {
  return (
    <main className="min-h-screen relative isolate overflow-hidden">
      {/* Background memenuhi layar, termasuk area di belakang header */}
      <div className="absolute inset-0 z-0">
        {scene?.image && (
          <img
            src={scene.image}
            alt="Rumah Pak Arif"
            className="w-full h-full object-cover"
          />
        )}
      </div>
      <img
        src={Confront}
        alt="Karakter pendamping"
        className=" absolute z-30 w-36 md:w-52 lg:w-80 h-auto object-contain right-35 bottom-0 pointer-events-none"
      />


      {/* Header transparan di atas background */}
      <header className="relative z-10 h-14 shrink-0 flex items-center px-6">
          <button
            type="button"
            onClick={onBack}
            className="flex items-center gap-2 rounded-lg bg-white px-5 py-2 text-sm font-semibold text-gray-800 shadow-sm border border-[#2580AE] hover:bg-[#BBD9E8] cursor-pointer"
          >
            <ArrowLeft size={15} />
            Kembali
          </button>
        </header>

        {/* Konten utama */}
        <div className="relative z-10 w-full max-w-230 mx-auto px-5 md:px-10 py-10">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

              {/* Kesimpulan */}
              <section className="rounded-xl border border-[#BBD9E8] bg-white pt-10 pb-10 px-6 py-10 shadow-sm">

                <h2 className="text-center text-lg font-bold  text-slate-800 mb-6">
                  {scene?.conclusion?.title}
                </h2>

                <div className="rounded-lg bg-[#C5DFEC] border border-[#75A9CE] p-4">
                  <p className="text-md leading-relaxed text-slate-700 text-center pt-6 pb-4 font-semibold">
                    {scene?.conclusion?.description}
                  </p>
                </div>

              </section>

              {/* Pilihan Jawaban */}
              <section className="relative rounded-xl border border-[#BBD9E8] bg-white p-5 shadow-sm">

                <h2 className="text-md font-bold text-slate-800 mb-2">
                  {scene?.question?.title}
                </h2>

                <p className="text-[13px] leading-relaxed text-slate-500 mb-4">
                  {scene?.question?.instruction}
                </p>

                <div className="flex flex-col gap-3">

                  {scene?.choices?.map((choice) => {
                    const isSelected =
                      selectedAnswer === choice.id;

                    return (
                      <button
                        key={choice.id}
                        type="button"
                        onClick={() => {
                          setSelectedAnswer(choice.id);
                          setShowLegalPopup(true);
                        }}
                        className={`w-full rounded-lg border px-3 py-3 flex items-start gap-3 text-left transition cursor-pointer ${
                          isSelected
                            ? "border-[#2580AE] bg-[#DCEBFA]"
                            : "border-[#BBD9E8] bg-white hover:bg-[#F0F7FC]"
                        }`}
                      >
                        <span className="w-5 h-6 shrink-0 rounded-md border border-[#75A9CE] bg-white flex items-center justify-center text-[10px] font-bold text-[#2580AE]">
                          {choice.id}
                        </span>

                        <span className="text-[13px] leading-relaxed text-slate-700">
                          {choice.text}
                        </span>
                      </button>
                    );
                  })}

                </div>
                

              </section>

            </div>
        </div>

        {/* POPUP SENJATA HUKUM */}
        {showLegalPopup && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 px-4 py-5">

              <div className="relative w-full max-w-150 max-h-full overflow-y-auto rounded-xl bg-white p-8 md:p-10 shadow-xl">

                {/* Judul Popup */}
                <div className="text-center mb-4">
                  <h2 className="inline-block rounded-md border border-[#75A9CE] bg-[#E3EFF9] px-8 py-2 text-sm md:text-lg  font-bold text-slate-800">
                    {scene?.legalPopup?.title}
                  </h2>
                </div>

                <p className="text-center text-md font-semibold text-slate-800 mb-3">
                  {scene?.legalPopup?.subtitle}
                </p>

                {/* Dasar Hukum */}
                <div className="rounded-lg bg-[#2580AE] p-8 mb-4">
                  <p className="text-md leading-relaxed text-white text-center">
                    {scene?.legalPopup?.description}
                  </p>

                  <p className="text-[14px] leading-relaxed text-blue-100 mt-3">
                    {scene?.legalPopup?.basis}
                  </p>
                </div>

                {/* Isi Perjanjian dan Tanggung Jawab */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">

                  {scene?.legalPopup?.responsibilities?.map(
                    (item, index) => (
                      <div
                        key={index}
                        className="rounded-lg border border-[#BBD9E8] bg-[#F8FBFD] p-5"
                      >
                        <h3 className="text-[14px] font-bold text-slate-800 mb-2">
                          {item.title}
                        </h3>

                        <p className="text-[12px] leading-relaxed text-slate-600">
                          {item.description}
                        </p>
                      </div>
                    )
                  )}

                </div>

                {/* Lanjut */}
                {/* Tombol Popup */}
<div className="flex items-center justify-between gap-3">

  {/* Pilih Kembali */}
  <button
    type="button"
    onClick={() => {
      setShowLegalPopup(false);
    }}
    className="rounded-lg border border-[#2580AE] bg-white px-4 py-2 text-xs font-semibold text-[#2580AE] hover:bg-[#E3EFF9] transition cursor-pointer"
  >
    ← Pilih Kembali
  </button>

  {/* Lanjut */}
  <button
    type="button"
    onClick={onNext}
    className="flex items-center gap-3 rounded-lg bg-[#2580AE] px-5 py-2 text-xs font-semibold text-white hover:bg-[#17658D] transition cursor-pointer"
  >
    Lanjut
    <ArrowRight size={15} />
  </button>

</div>

              </div>
          </div>
        )}

    </main>
  );
}

{/* ==========================================
    SCENE 7: KONFRONTASI
========================================== */}
if (scene?.id === 7) {
  return (
    <main className="min-h-screen bg-[#F5F8FB]">
      <div className="min-h-screen flex flex-col">

         <header className="h-14 flex items-center px-6 mt-4">
          <button
            onClick={onBack}
            className="rounded-lg bg-white px-8 py-2 text-md font-semibold text-gray-800 shadow-md hover:bg-[#BBD9E8] border-2 border-[#2580AE] cursor-pointer"
          >
            ← Back
          </button>
        </header>

        {/* Konten */}
        <div className="w-full max-w-250 mx-auto px-5 md:px-10 py-6 flex-1">

          <div className="rounded-xl border border-[#BBD9E8] bg-white p-5 md:p-7">

            {/* Judul */}
            <h1 className="text-base md:text-lg font-bold text-slate-800 mb-5">
              {scene?.title}
            </h1>

            {/* Ilustrasi */}
            <div className="w-full max-w-190 mx-auto h-44 md:h-64 rounded-xl overflow-hidden mb-5">
              {scene?.image && (
                <img
                  src={scene.image}
                  alt="Nadia dan Pak Arif melakukan konfrontasi"
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            {/* Percakapan */}
            <section className="flex flex-col gap-4 px-1 md:px-5 py-3">

              {scene?.dialogues?.map((dialogue, index) => {
                const isNadia = dialogue.speaker === "nadia";

                return (
                  <div
                    key={index}
                    className={`flex items-start gap-3 ${
                      isNadia ? "justify-end" : "justify-start"
                    }`}
                  >

                    {!isNadia && (
                      <div className="w-8 h-8 shrink-0 rounded-md border border-[#BBD9E8] bg-[#F0F7FF] flex items-center justify-center">
                        <span className="text-[9px] font-semibold text-[#2580AE]">
                          {dialogue.initial}
                        </span>
                      </div>
                    )}

                    <div
                      className={`max-w-[85%] md:max-w-[70%] rounded-md px-4 py-3 ${
                        isNadia
                          ? "bg-[#E3EFF9] text-slate-700"
                          : "bg-[#2580AE] text-white"
                      }`}
                    >
                      <p
                        className={`text-[11px] font-semibold mb-1 ${
                          isNadia
                            ? "text-[#2580AE] text-right"
                            : "text-white"
                        }`}
                      >
                        {dialogue.name}
                      </p>

                      <p className="text-[11px] leading-relaxed">
                        {dialogue.message}
                      </p>
                    </div>

                    {isNadia && (
                      <div className="w-8 h-8 shrink-0 rounded-md border border-[#BBD9E8] bg-[#F0F7FF] flex items-center justify-center">
                        <span className="text-[9px] font-semibold text-[#2580AE]">
                          {dialogue.initial}
                        </span>
                      </div>
                    )}

                  </div>
                );
              })}

            </section>

            {/* Kesimpulan */}
            <div className="border-t border-[#BBD9E8] pt-4 mt-3">

              <div className="max-w-180 mx-auto rounded-md border border-slate-300 bg-[#F0F4FA] px-4 py-3 text-center">
                <p className="text-[11px] leading-relaxed text-slate-700 font-semibold">
                  {scene?.conclusion}
                </p>
              </div>

              <div className="flex justify-end mt-5">
                <button
                  type="button"
                  onClick={onNext}
                  className="flex items-center gap-3 rounded-lg bg-[#2580AE] px-5 py-2 text-xs font-semibold text-white hover:bg-[#17658D] transition cursor-pointer"
                >
                  Lanjut
                  <ArrowRight size={15} />
                </button>
              </div>

            </div>

          </div>
        </div>
      </div>
    </main>
  );
}

{/* ==========================================
    SCENE 8: ENDING
========================================== */}
if (scene?.id === 8) {
  return (
    <main className="min-h-screen bg-[#F5F8FB]">
      <div className="min-h-screen flex flex-col">

        <header className="h-14 flex items-center px-6 mt-4">
          <button
            onClick={onBack}
            className="rounded-lg bg-white px-8 py-2 text-md font-semibold text-gray-800 shadow-md hover:bg-[#BBD9E8] border-2 border-[#2580AE] cursor-pointer"
          >
            ← Back
          </button>
        </header>

        {/* Konten */}
        <div className="w-full max-w-250 mx-auto px-5 md:px-10 py-8 flex-1">

          {/* Judul */}
          <h1 className="text-center text-lg md:text-xl font-semibold text-slate-800 mb-6">
            {scene?.title}
          </h1>

          {/* Ilustrasi Ending */}
          <div className="w-full max-w-190 mx-auto h-48 md:h-80 rounded-lg overflow-hidden mb-6">
            {scene?.image && (
              <img
                src={scene.image}
                alt="Nadia dan Pak Arif setelah masalah terselesaikan"
                className="w-full h-full object-cover"
              />
            )}
          </div>

          {/* Dua Card Ending */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {scene?.endingCards?.map((item, index) => (
              <div
                key={index}
                className="rounded-lg border border-[#75A9CE] bg-[#D1E7EF] p-4 md:p-5"
              >
                <h2 className="text-sm font-bold text-slate-800 text-center mb-3">
                  {item.title}
                </h2>

                <p className="text-[11px] leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}

          </div>

          {/* Tombol */}
          <div className="flex justify-end mt-5">
            <button
              type="button"
              onClick={onNext}
              className="flex items-center gap-3 rounded-lg bg-[#2580AE] px-5 py-2 text-xs font-semibold text-white hover:bg-[#17658D] transition cursor-pointer"
            >
              {scene?.buttonLabel || "Selesai"}
              <ArrowRight size={15} />
            </button>
          </div>

        </div>
      </div>
    </main>
  );
}

if (scene?.id === 9) {
  const isCorrect = selectedAnswer === scene.correctAnswer;

  return (
    <main className="min-h-screen bg-[#CFE5EC] flex items-center justify-center px-4 py-8 md:px-10">

      

      {/* Card Utama */}
      <div className="relative w-full max-w-250 rounded-lg border border-[#75A9CE] bg-white px-5 py-7 md:px-10 md:py-8 shadow-sm">

        {/* Judul */}
        <h1 className="text-center text-lg md:text-xl font-bold text-slate-800 mb-10">
          {scene.title}
        </h1>

        {/* Konten Utama */}
        <div className="relative">

          {/* Karakter Chibi */}
         
          {/* Penjelasan Pilihan */}
          <section className="max-w-190 md:pr-32">

            <h2 className="text-xs md:text-lg font-bold text-slate-800 mb-2">
              Pilihan Kamu{" "}
              <span
                className={
                  isCorrect
                    ? "text-green-600"
                    : "text-red-600"
                }
              >
                {selectedAnswer
                  ? isCorrect
                    ? scene.result.correctTitle
                    : scene.result.wrongTitle
                  : "Belum dipilih"}
              </span>
            </h2>

            {/* Pilihan Pengguna */}
            <p className="text-[11px] md:text-xs leading-relaxed text-slate-700">
              {selectedAnswer
                ? scene.choiceTexts[selectedAnswer]
                : "Tidak ada jawaban yang tersimpan."}
            </p>

            {/* Penjelasan Jika Salah */}
            {!isCorrect && selectedAnswer && (
              <p className="text-[12px] md:text-[11px] leading-relaxed text-[#2580AE] mt-3">
                {scene.result.wrongDescription}
              </p>
            )}

          </section>

          {/* Garis Pemisah */}
          <div className="border-t border-[#BBD9E8] mt-8 mb-5" />

          {/* Pelajaran Hukum */}
          <section className="max-w-190 md:pr-32">

            <h2 className="text-[14px] md:text-sm font-bold text-slate-800 mb-4">
              {scene.lesson.title}
            </h2>

            <p className="text-[13px] md:text-[11px] leading-relaxed text-slate-600 mb-4">
              {scene.lesson.description}
            </p>

            {/* Daftar Pasal */}
            <ul className="list-disc pl-5 space-y-1.5">
              {scene.lesson.points.map((point, index) => (
                <li
                  key={index}
                  className="text-[13px] md:text-[11px] leading-relaxed text-slate-700"
                >
                  {point}
                </li>
              ))}
            </ul>

          </section>

        </div>

        {/* Tombol Bawah */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-8 md:pr-24">

          {/* Ulangi Cerita */}
          <button
            type="button"
            onClick={() => onRestart?.()}
            className="w-full sm:w-auto rounded-lg border border-[#75A9CE] bg-white px-6 py-2 text-[11px] font-semibold text-slate-700 hover:bg-[#E3EFF9] transition cursor-pointer"
          >
            Ulangi Cerita
          </button>

          {/* Pilih Story Lainnya */}
          <button
            type="button"
            onClick={() => onChooseStory?.()}
            className="w-full sm:w-auto rounded-lg bg-[#2580AE] px-6 py-2 text-[11px] font-semibold text-white hover:bg-[#17658D] transition cursor-pointer"
          >
            Pilih Story Lainnya
          </button>
          

        </div>
         <img
            src={Character}
            alt="Karakter pendamping JUSTIFY"
            className="hidden md:block absolute z-10 w-44 lg:w-60 h-auto object-contain right-0 bottom-0 pointer-events-none"
          />


      </div>
    </main>
  );
}



  return (
    <main className="min-h-screen bg-gray-100 relative">
      <div className="min-h-screen bg-white flex flex-col">

        {/* Header */}{/* Navigasi Back & Next */}
        <header className="h-14.5   flex items-center px-6 mt-4">
            <button
                onClick={onBack}
                className="pointer-events-auto rounded-lg bg-white px-8 py-2 text-md font-semibold text-gray-800 shadow-md hover:bg-[#BBD9E8] border-2 border-[#2580AE] cursor-pointer"
            >
                ← Back
            </button>
        </header>    

        {/* Konten Scene */}
        <div className="w-full max-w-312.5 mx-auto px-6 md:px-12 py-10 flex-1">

          {/* Judul */}
          <div className="rounded-lg border border-[#75A9CE] bg-[#E3EFF9] px-4 py-3 mb-10">
            <h1 className="text-lg md:text-xl font-bold text-slate-800">
              {scene?.title}
            </h1>
          </div>

          {/* Dua kolom */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">

            {/* Kolom kiri: pilihan properti */}
            <div className="flex flex-col gap-4 pt-1">
              {properties.map((property, index) => {
                const isSelected =
                  property.id === selectedPropertyId;

                return (
                  <button
                    key={property.id}
                    type="button"
                    onClick={() =>
                      setSelectedPropertyId(property.id)
                    }
                    className={`w-full min-h-19 rounded-lg border px-3 py-3 flex items-center gap-3 text-left transition cursor-pointer ${
                      isSelected
                        ? "border-[#2580AE] bg-[#DCEBFA]"
                        : "border-[#BBD9E8] bg-white hover:bg-slate-50"
                    }`}
                  >
                    <div className="w-10 h-10 shrink-0 rounded-md bg-[#2580AE] flex items-center justify-center text-white">
                      <Home size={21} />
                    </div>

                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-slate-800">
                        {property.name}
                      </p>

                      <p className="text-xs text-slate-700">
                        {property.price}
                        <span className="text-slate-400">
                          {" "}{property.period}
                        </span>
                      </p>

                      <p className="flex items-center gap-1 mt-1 text-[10px] text-slate-500">
                        <MapPin size={11} />
                        Lokasi: {property.location}
                      </p>
                    </div>

                    <span
                      className={`self-start rounded px-2 py-0.5 text-[9px] font-medium ${
                        isSelected
                          ? "bg-[#2580AE] text-white"
                          : "bg-[#D6EAF3] text-[#2580AE]"
                      }`}
                    >
                      {isSelected ? "Dipilih" : `Opsi ${index + 1}`}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Kolom kanan: detail properti */}
            {activeProperty && (
              <div className="flex flex-col gap-4">

                <div className="overflow-hidden rounded-lg border border-[#BBD9E8] bg-white">

                  {/* Gambar rumah */}
                  <div className="relative h-47.5 md:h-51.25 bg-[#E3EFF9]">
                    {activeProperty.image ? (
                      <img
                        src={activeProperty.image}
                        alt={activeProperty.name}
                        className="w-full h-full "
                      />
                    ) : (
                      <div className="h-full flex items-center justify-center text-[#2580AE]">
                        <Home size={55} />
                      </div>
                    )}

                    <span className="absolute top-3 right-3 bg-[#2580AE] text-white text-[10px] px-3 py-1 rounded">
                      Disewa
                    </span>
                  </div>

                  {/* Informasi rumah */}
                  <div className="p-4">
                    <h2 className="text-sm font-bold text-slate-800">
                      {activeProperty.owner}
                    </h2>

                    <p className="text-[10px] text-slate-500 mt-1">
                      Kode Listing: {activeProperty.code}
                    </p>

                    <div className="border-t border-[#BBD9E8] my-3" />

                    {/* Fasilitas rumah */}
                    <div className="grid grid-cols-2 gap-2">
                      {activeProperty.facilities?.map(
                        (facility, index) => {
                          const Icon =
                            facilityIcons[facility.icon] || Home;

                          return (
                            <div
                              key={index}
                              className="min-h-9 rounded-md bg-[#F5F8FB] px-2 py-2 flex items-center gap-2"
                            >
                              <Icon
                                size={14}
                                className="text-[#2580AE] shrink-0"
                              />

                              <span className="text-[10px] text-slate-600">
                                {facility.label}
                              </span>
                            </div>
                          );
                        }
                      )}
                    </div>
                  </div>
                </div>

                {/* Narasi properti */}
                <div className="rounded-lg bg-[#E3EFF9] p-4 flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-[#2580AE] shrink-0">
                    <Search size={14} />
                  </div>

                  <p className="text-xs leading-relaxed text-slate-700">
                    {scene?.propertyNarration}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Informasi aktivitas dan tombol lanjut */}
          <div className="max-w-250 mx-auto mt-8 rounded-lg border border-[#BBD9E8] px-4 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-sm font-semibold text-slate-800">
                {scene?.activityTitle}
              </h3>

              <p className="text-[10px] text-slate-400 mt-1">
                {scene?.activityDescription}
              </p>
            </div>

            <button
              type="button"
              onClick={onNext}
              className="self-end sm:self-auto flex items-center gap-3 rounded-lg bg-[#2580AE] px-5 py-2 text-xs font-semibold text-white hover:bg-[#17658D] transition cursor-pointer"
            >
              Lanjut
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default SewaMenyewaScene;
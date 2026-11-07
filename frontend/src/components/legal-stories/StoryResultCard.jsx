function StoryResultCard({ resultCard, onRestart, onExit }) {
  if (!resultCard) return null;

  return (
    <div
      className={`absolute z-30 ${resultCard.position || "left-[25%] top-1/2 -translate-y-1/2 w-[56%] max-w-2xl"
        }`}
    >
      <div className="relative rounded-[28px] bg-[#E8F4F8] p-7 md:p-9 shadow-2xl border border-white/60">
        <div className="absolute -top-7 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <div className="relative flex flex-col items-center">
            <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-b from-[#FFD700] via-[#FFA500] to-[#FF8C00] p-1 shadow-lg border-2 border-white">
              <svg
                viewBox="0 0 24 24"
                className="h-8 w-8 text-white fill-current drop-shadow-sm"
              >
                <path d="M12 2l2.4 4.8 5.3.8-3.8 3.7.9 5.3L12 16.1 7.2 18.6l.9-5.3-3.8-3.7 5.3-.8L12 2z" />
              </svg>
            </div>

            <div className="flex gap-1 -mt-1.5">
              <div className="h-4 w-3 bg-[#E53E3E] rounded-b-[2px] shadow-sm transform -rotate-12"></div>
              <div className="h-4 w-3 bg-[#C53030] rounded-b-[2px] shadow-sm transform rotate-12"></div>
            </div>
          </div>
        </div>

        <h2 className="mt-5 text-center text-xl md:text-2xl font-bold text-gray-900 leading-snug">
          {resultCard.title || "Wah, kamu salah mengambil keputusan!"}
        </h2>

        {resultCard.subtitle && (
          <h3 className="mt-5 text-sm font-bold text-gray-900">
            {resultCard.subtitle}
          </h3>
        )}

        {/* List */}
        {resultCard.list && (
          <ul className="mt-2.5 space-y-1.5 text-xs md:text-sm text-gray-700 leading-relaxed list-disc pl-5">
            {resultCard.list.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        )}

        {/*  Conclusion text (Bold) */}
        {resultCard.footer && (
          <p className="mt-5 text-xs md:text-sm font-bold text-gray-900 leading-relaxed">
            {resultCard.footer}
          </p>
        )}

        {/* Bottom Actions */}
        <div className="mt-8 flex items-center justify-between pt-2">
          <button
            type="button"
            onClick={onRestart}
            className="rounded-lg bg-white border border-gray-300 px-6 py-2.5 text-xs md:text-sm font-semibold text-gray-800 shadow-sm hover:bg-gray-100 transition cursor-pointer"
          >
            {resultCard.restartLabel || "Ulangi Story"}
          </button>

          <button
            type="button"
            onClick={onExit}
            className="rounded-lg bg-[#2580AE] px-6 py-2.5 text-xs md:text-sm font-semibold text-white shadow-sm hover:bg-[#1a5d80] transition cursor-pointer"
          >
            {resultCard.exitLabel || "Pilih Story Lainnya"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default StoryResultCard;


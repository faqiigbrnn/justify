import StoryCharacter from "./StoryCharacter.jsx";
import StoryFYI from "./StoryFYI.jsx";
import StoryDialog from "./StoryDialog.jsx";
import StoryResultCard from "./StoryResultCard.jsx";

function StoryScene({
  scene,
  onBack,
  onNext,
  onSelectChoice,
  onRestart,
  onExit,
}) {
  return (
    <main className="fixed inset-0 overflow-hidden bg-gray-100">
      <div className="relative h-full w-full overflow-hidden">

        {/* Background */}
        <img
          src={scene.background.background}
          alt="Background cerita"
          className={`absolute inset-0 ${scene.background.width || "w-full"} ${scene.background.height || "h-full"} ${scene.background.objectFit || "object-cover"} ${scene.background.objectPosition || ""}`}
        />
        {scene.overlay && (
          <div
            className={`absolute inset-0 z-10 ${scene.overlay}`}
          />
        )}

        {/* Narasi Teks */}
        {scene.narration && (
          <div
            className={`z-30 px-6 pointer-events-none ${scene.narrationPosition ||
              "absolute top-25 left-[45%] -translate-x-1/2 max-w-2xl"
              }`}
          >
            <p
              className={`text-white drop-shadow-md whitespace-pre-line ${scene.narrationTextClass || "text-base md:text-2xl text-left font-bold leading-relaxed"
                }`}
            >
              {scene.narration}
            </p>
          </div>
        )}

        {/* Karakter & Dialog */}
        <StoryCharacter character={scene.character} />
        <StoryDialog dialog={scene.dialog} />

        {/* Kartu Hasil / Ending (Frame 248) */}
        {scene.resultCard && (
          <StoryResultCard
            resultCard={scene.resultCard}
            onRestart={onRestart}
            onExit={onExit}
          />
        )}

        {/* Tombol Pilihan Interaktif (Choices) */}
        {scene.choices && (
          <div
            className={`absolute z-20 flex flex-col gap-3.5 ${scene.choicesPosition || "left-[32%] top-[48%] w-[28%]"
              }`}
          >
            {scene.choices.map((choice, index) => {
              const label = typeof choice === "string" ? choice : choice.text;
              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => {
                    if (choice.onClick) {
                      choice.onClick();
                    } else if (onSelectChoice) {
                      onSelectChoice(choice, index);
                    } else {
                      onNext();
                    }
                  }}
                  className="w-full rounded-2xl border-2 border-[#BBD9E8] bg-white py-3 px-6 text-center text-sm md:text-base font-semibold text-gray-800 shadow-md transition-all duration-200 hover:bg-[#2580AE] hover:text-white cursor-pointer active:scale-95"
                >
                  {label}
                </button>
              );
            })}
          </div>
        )}

        {/* Navigasi Back & Next */}
        <div className="absolute inset-x-0 top-0 z-50 flex items-center justify-between p-5 pointer-events-none">
          <button
            onClick={onBack}
            className="pointer-events-auto rounded-lg bg-white px-8 py-2 text-md font-semibold text-gray-800 shadow-md hover:bg-[#BBD9E8] border-2 border-[#2580AE] cursor-pointer"
          >
            ← Back
          </button>

          {!scene.fyi && !scene.resultCard && (
            <button
              onClick={onNext}
              className="pointer-events-auto rounded-lg bg-white px-8 py-2 text-md font-semibold text-gray-800 shadow-md hover:bg-[#BBD9E8] border-2 border-[#2580AE] cursor-pointer"
            >
              {scene.buttonLabel || (scene.isEnding ? "Selesai ✓" : "Next →")}
            </button>
          )}
        </div>

        {/* Panel FYI di Kanan */}
        <StoryFYI fyi={scene.fyi} onNext={onNext} />

      </div>
    </main>
  );
}

export default StoryScene;

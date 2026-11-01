import StoryCharacter from "./StoryCharacter.jsx";
import StoryFYI from "./StoryFYI.jsx";
import StoryDialog from "./StoryDialog.jsx";
function StoryScene({
  scene,
  onBack,
  onNext,
}) {
  return (
    <main className="fixed inset-0 overflow-hidden bg-gray-100">
      <div className="relative h-full w-full overflow-hidden">

        {/* Background */}
        <img
          src={scene.background.background}
          alt="Background cerita"
          className={`absolute inset-0  ${scene.background.width} ${scene.background.height} ` }
        />
        {scene.overlay && (
            <div
                className={`absolute inset-0 z-10 ${scene.overlay}`}
            />
        )}

        <StoryCharacter character={scene.character} />
        <StoryDialog dialog={scene.dialog} />
        {/* Navigasi */}
        <div className="absolute inset-x-0 top-0 z-50 flex items-center justify-between p-5">
          <button
            onClick={onBack}
            className="rounded-lg bg-white px-8 py-2 text-md font-semibold text-gray-800 shadow-md  hover:bg-[#BBD9E8] border-2 border-[#2580AE] cursor-pointer"
          >
            ← Back
          </button>

          {!scene.fyi && (
            <button
                onClick={onNext}
                className="rounded-lg bg-white px-8 py-2 text-md font-semibold text-gray-800 shadow-md hover:bg-[#BBD9E8] border-2 border-[#2580AE] cursor-pointer"
                >
                Next →
                </button>
            )}
        </div>

        {/* FYI */}
        <StoryFYI fyi={scene.fyi} onNext={onNext}/>

      </div>
    </main>
  );
}

export default StoryScene;

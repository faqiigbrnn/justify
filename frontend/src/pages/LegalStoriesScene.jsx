
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import StoryScene from "../components/legal-stories/StoryScene";
import legalStories from "../data/legal-stories";

function LegalStoriesScene() {
  const { theme } = useParams();
  const navigate = useNavigate();

  // Mengambil data cerita berdasarkan ID dari URL
  const story = legalStories.find(
    (item) => item.id === theme
  );

  const [currentScene, setCurrentScene] = useState(0);

  // Mengatur tampilan dialog dan FYI
  const [showFYI, setShowFYI] = useState(false);

  // Jika cerita tidak ditemukan
  if (!story) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800">
            Cerita Tidak Ditemukan
          </h1>

          <p className="mt-2 text-gray-500">
            Cerita yang kamu cari belum tersedia.
          </p>

          <button
            onClick={() => navigate("/legal-stories")}
            className="mt-5 rounded-lg bg-sky-600 px-5 py-2 text-white transition hover:bg-sky-700"
          >
            Kembali
          </button>
        </div>
      </main>
    );
  }

  // Mengambil data scene aktif
  const scene = story.scenes[currentScene];

  // Fungsi tombol Back
  const handleBack = () => {
    if (showFYI) {
      setShowFYI(false);
    } else if (currentScene > 0) {
      setCurrentScene((prev) => prev - 1);
    } else {
      navigate("/legal-stories");
    }
  };

  // Fungsi tombol Next
  const handleNext = () => {
  if (currentScene < story.scenes.length - 1) {
    setCurrentScene((prev) => prev + 1);
  }
};

  return (
    <main className="min-h-screen bg-gray-100">
      <StoryScene
        story={story}
        scene={scene}
        currentScene={currentScene}
        showFYI={showFYI}
        onBack={handleBack}
        onNext={handleNext}
      />
    </main>
  );
}

export default LegalStoriesScene;

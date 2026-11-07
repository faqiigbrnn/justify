import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import StoryScene from "../components/legal-stories/StoryScene";
import SignInModal from "../components/legal-stories/SignInModal";
import legalStories from "../data/legal-stories";

function LegalStoriesScene() {
  const { theme } = useParams();
  const navigate = useNavigate();

  // Mengambil data cerita berdasarkan ID dari URL
  const story = legalStories.find(
    (item) => item.id === theme
  );

  const [currentScene, setCurrentScene] = useState(0);
  const [sceneHistory, setSceneHistory] = useState([0]); // Menyimpan riwayat scene untuk tombol Back
  const [showSignInModal, setShowSignInModal] = useState(false);

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
            className="mt-5 rounded-lg bg-sky-600 px-5 py-2 text-white transition hover:bg-sky-700 cursor-pointer"
          >
            Kembali
          </button>
        </div>
      </main>
    );
  }

  // Mengambil data scene aktif
  const scene = story.scenes[currentScene];

  // Fungsi tombol Back (mengikuti history navigasi pilihan)
  const handleBack = () => {
    if (showSignInModal) {
      setShowSignInModal(false);
      return;
    }
    if (showFYI) {
      setShowFYI(false);
      return;
    }

    if (sceneHistory.length > 1) {
      const newHistory = [...sceneHistory];
      newHistory.pop(); // Buang scene aktif
      const prevSceneIndex = newHistory[newHistory.length - 1];
      setSceneHistory(newHistory);
      setCurrentScene(prevSceneIndex);
    } else if (currentScene > 0) {
      setCurrentScene((prev) => prev - 1);
    } else {
      navigate("/legal-stories");
    }
  };

  // Fungsi tombol Next
  const handleNext = () => {
    // Jika dari scene 2 (index 2) mau lanjut ke scene 3 (index 3)
    if (currentScene === 2) {
      const nextIndex = 3;
      setCurrentScene(nextIndex);
      setSceneHistory((prev) => [...prev, nextIndex]);
      setShowSignInModal(true); // Tampilkan modal Sign In di atas Scene 3
    } else if (
      scene &&
      (scene.isEnding ||
        scene.buttonLabel === "Selesai" ||
        scene.fyi?.buttonLabel === "Selesai")
    ) {
      // Jika scene ini adalah ending, selesaikan cerita dan kembali ke daftar kasus
      navigate("/legal-stories");
    } else if (scene && scene.nextSceneId) {
      // Jika scene menentukan scene tujuan khusus
      const targetIndex = story.scenes.findIndex((s) => s.id === scene.nextSceneId);
      if (targetIndex !== -1) {
        setCurrentScene(targetIndex);
        setSceneHistory((prev) => [...prev, targetIndex]);
        return;
      }
    } else if (currentScene < story.scenes.length - 1) {
      const nextIndex = currentScene + 1;
      setCurrentScene(nextIndex);
      setSceneHistory((prev) => [...prev, nextIndex]);
    } else {
      navigate("/legal-stories");
    }
  };

  // Fungsi saat memilih opsi pilihan (Branching / Percabangan Cerita)
  const handleSelectChoice = (choice) => {
    if (choice && choice.nextSceneId) {
      const targetIndex = story.scenes.findIndex((s) => s.id === choice.nextSceneId);
      if (targetIndex !== -1) {
        setCurrentScene(targetIndex);
        setSceneHistory((prev) => [...prev, targetIndex]);
        return;
      }
    }

    // Default jika tanpa nextSceneId khusus
    handleNext();
  };

  // Fungsi saat ulangi cerita (kembali ke scene pilihan agar bisa mencoba pilihan lain)
  const handleRestart = () => {
    const choiceSceneIndex = story.scenes.findIndex((s) => s.id === 6);
    const target = choiceSceneIndex !== -1 ? choiceSceneIndex : 0;
    setCurrentScene(target);
    setSceneHistory((prev) => [...prev, target]);
  };

  return (
    <main className="min-h-screen bg-gray-100 relative">
      <StoryScene
        story={story}
        scene={scene}
        currentScene={currentScene}
        showFYI={showFYI}
        onBack={handleBack}
        onNext={handleNext}
        onSelectChoice={handleSelectChoice}
        onRestart={handleRestart}
        onExit={() => navigate("/legal-stories")}
      />

      {/* Modal Sign In muncul di atas Scene 3 */}
      {showSignInModal && (
        <SignInModal onClose={() => setShowSignInModal(false)} />
      )}
    </main>
  );
}

export default LegalStoriesScene;

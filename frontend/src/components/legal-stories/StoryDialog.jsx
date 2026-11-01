function StoryDialog({ dialog }) {
  if (!dialog) return null;

  // Mendukung satu dialog maupun beberapa dialog
  const dialogs = Array.isArray(dialog) ? dialog : [dialog];

  return (
    <>
      {dialogs.map((item, index) => (
        <div
          key={item.id || index}
          className={`
            absolute z-20
            rounded-xl border-2 border-[#2580AE]
            bg-white px-8 py-4
            shadow-md
            ${item.width || "w-[38%]"}
            ${item.position || ""}
          `}
        >
          <p className="text-lg leading-relaxed text-gray-800">
            {item.text}
          </p>
        </div>
      ))}
    </>
  );
}

export default StoryDialog;
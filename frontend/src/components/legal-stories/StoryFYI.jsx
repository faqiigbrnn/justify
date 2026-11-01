
function StoryFYI({ fyi, onNext }) {
  if (!fyi) return null;

  return (
    <div
      className={`
        absolute right-0 top-0 z-30
        flex h-full w-[22%] flex-col
        bg-white p-5 shadow-lg rounded-l-[20px]
        ${fyi.position || ""}
      `}
    >
      {/* Icon */}
      <div className="mb-3 flex justify-end">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#2580AE] text-xs font-bold text-white">
          i
        </span>
      </div>

      {/* Title */}
      <div className="mt-8 mb-8 text-center">
        <h2 className="
          flex flex-col items-center
          text-xl font-bold text-[#2580AE]
        ">
          <span className="flex items-center gap-2">
            <span className="
              flex h-5 w-5 items-center justify-center
              rounded-full bg-[#2580AE]
              text-xs text-white
            ">
              ?
            </span>
            FYI
          </span>

          <span className="mt-1">
            ({fyi.title})
          </span>
        </h2>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="flex flex-col gap-6">

          {/* Format lama: array paragraf */}
          {fyi.content && fyi.content.map((paragraph, index) => (
            <p
              key={index}
              className="text-md leading-relaxed text-black text-center"
            >
              {paragraph}
            </p>
          ))}

          {/* Format baru: sections */}
          {fyi.sections && fyi.sections.map((section, index) => (
            <div key={index} className="space-y-4">

              {section.heading && (
                <h3 className="text-md font-bold text-black">
                  {section.heading}
                </h3>
              )}

              {section.question && (
                <p className="text-md leading-relaxed text-black">
                  {section.question}
                </p>
              )}

              {section.list && (
                <ol className="list-decimal pl-6 text-left text-md text-black space-y-1">
                  {section.list.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      {item}
                    </li>
                  ))}
                </ol>
              )}

            </div>
          ))}

        </div>
      </div>

      {/* Next Button */}
      <div className="mt-4 flex justify-center">
        <button
          onClick={onNext}
          className="
            rounded-md border border-[#2580AE]
            px-8 py-2 text-lg font-semibold
            text-[#2580AE] hover:bg-[#BBD9E8]
            cursor-pointer
          "
        >
          {fyi.buttonLabel || "Next"} →
        </button>
      </div>
    </div>
  );
}

export default StoryFYI;

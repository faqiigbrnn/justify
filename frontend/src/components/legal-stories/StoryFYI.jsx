import { useState } from "react";

function StoryFYI({ fyi, onNext }) {
  const [showLegalModal, setShowLegalModal] = useState(false);

  if (!fyi) return null;

  return (
    <>
      <div
        className={`
          absolute right-0 top-0 z-30
          flex h-full w-[22%] flex-col
          bg-white p-5 shadow-lg rounded-l-[20px]
          ${fyi.position || ""}
        `}
      >
        {/* Icon Info */}
        <div className="mb-3 flex justify-end">
          <button
            type="button"
            onClick={() => setShowLegalModal(true)}
            className="flex h-6 w-6 items-center justify-center rounded-full bg-[#2580AE] text-xs font-bold text-white hover:bg-[#1a5d80] transition cursor-pointer shadow-sm"
            title="Klik untuk melihat Dasar Hukum"
          >
            i
          </button>
        </div>

        {/* Title */}
        <div className="mt-4 mb-6 text-center">
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

            <span className="mt-1 text-sm font-semibold">
              ({fyi.title})
            </span>
          </h2>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto pr-1">
          <div className="flex flex-col gap-5 text-sm">

            {/* Subtitle / Heading utama */}
            {fyi.heading && (
              <h3 className="font-bold text-gray-900 text-base">
                {fyi.heading}
              </h3>
            )}

            {/* Paragraf pembuka */}
            {fyi.content && fyi.content.map((paragraph, index) => (
              <p
                key={index}
                className="leading-relaxed text-gray-700"
              >
                {paragraph}
              </p>
            ))}

            {/* Format sections */}
            {fyi.sections && fyi.sections.map((section, index) => (
              <div key={index} className="space-y-2">
                {section.heading && (
                  <h4 className="font-semibold text-gray-900">
                    {section.heading}
                  </h4>
                )}

                {section.question && (
                  <p className="leading-relaxed text-gray-700">
                    {section.question}
                  </p>
                )}

                {section.list && (
                  <ul className="list-disc pl-5 text-gray-700 space-y-1 text-xs leading-relaxed">
                    {section.list.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {/* Footer text */}
            {fyi.footer && (
              <p className="text-xs leading-relaxed text-gray-700 font-medium pt-2">
                {fyi.footer}
              </p>
            )}

          </div>
        </div>

        {/* Next Button (hanya muncul jika tidak disembunyikan) */}
        {!fyi.hideButton && (
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
        )}
      </div>

      {/* MODAL POPUP DASAR HUKUM (Frame 247) */}
      {showLegalModal && (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-black/60 p-4"
          onClick={() => setShowLegalModal(false)}
        >
          <div
            className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowLegalModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 cursor-pointer p-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Header Modal */}
            <div className="flex items-center gap-3 mb-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#2580AE] text-xs font-bold text-white">
                i
              </span>
              <h3 className="text-lg font-bold text-gray-900">
                {fyi.legalBasis?.title || "Dasar Hukum"}
              </h3>
            </div>

            <p className="text-xs text-gray-500 mb-4">
              {fyi.legalBasis?.subtitle || "Materi ini berkaitan dengan:"}
            </p>

            {/* Daftar Pasal / Materi */}
            <div className="space-y-4 text-xs leading-relaxed text-gray-700">
              {fyi.legalBasis?.items ? (
                fyi.legalBasis.items.map((item, idx) => (
                  <div key={idx} className="space-y-1">
                    <p className="font-bold text-gray-900">{item.title}</p>
                    {item.subtitle && <p className="font-semibold text-gray-800">{item.subtitle}</p>}
                    <p className="text-gray-600">{item.text}</p>
                  </div>
                ))
              ) : (
                <>
                  <div className="space-y-1">
                    <p className="font-bold text-gray-900">1. Pasal 1458 KUHPerdata</p>
                    <p className="font-semibold text-gray-800">Kesepakatan dalam Jual Beli</p>
                    <p className="text-gray-600">
                      Jual beli dianggap telah terjadi ketika penjual dan pembeli telah mencapai kesepakatan mengenai barang dan harga.
                    </p>
                  </div>

                  <div className="space-y-1 pt-2">
                    <p className="font-bold text-gray-900">2. Pasal 1320 KUHPerdata</p>
                    <p className="font-semibold text-gray-800">Syarat Sah Perjanjian</p>
                    <p className="text-gray-600">
                      Perjanjian harus memenuhi empat syarat: kesepakatan, kecakapan, objek tertentu, dan sebab yang tidak terlarang.
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default StoryFYI;

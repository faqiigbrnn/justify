import Lawyer from "../assets/images/lawyer-illustration.png";

import LegalStories from "../assets/images/legal-stories.png";
import LegalQuizzes from "../assets/images/legal-quiz.png";
import LegalApproach from "../assets/images/legal-approach.png";
function LandingPage() {
    const features = [
        {
            title: "Interactive Legal Stories",
            description:
                "Learn about common legal problems through engaging stories based on real-life situations, helping you understand what happens and explore the possible outcomes.",
            image: LegalStories,
            imageAlt: "Interactive legal stories illustration",
            reverse: false,
        },
        {
            title: "Interactive Quizzes",
            description:
                "Test your understanding of legal concepts through interactive quizzes. Answer questions, check your results, and reinforce what you've learned.",
            image: LegalQuizzes,
            imageAlt: "Interactive quizzes illustration",
            reverse: true,
        },
         {
            title: "Law Explained Simply",
            description:
                "Explore legal concepts in comprehensible language, helping you understand the basics of laws and legal terms through clear explanations.",
            image: LegalApproach,
            imageAlt: "Law explained simply illustration",
            reverse: false,
        },
    ];
  return (
    <div className="min-h-screen bg-white ">
      <section className="flex min-h-75 w-full items-center justify-between gap-6 bg-[#cfe2eb] px-6 py-8 sm:px-10 md:min-h-80 md:px-14 lg:px-20">

        <div className="ml-4 w-full max-w-200 shrink md:ml-8 lg:ml-10">
          <h1 className="text-4xl max-w-150 font-extrabold leading-tight text-slate-900 md:text-4xl">
            Learn Law & Legal Basics with{" "}
            <span>Interactive Stories</span> and Quizzes
          </h1>

            <p className="mt-2 max-w-none font-bold text-xs leading-relaxed text-slate-600 md:text-sm">
                Explore everyday law through interactive stories, real-world cases, quizzes, and simple legal explanations.
            </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <button className="rounded-[14px] border border-[#2071a3] bg-white px-6 py-3 text-xs font-semibold text-[#1e5f86] transition hover:bg-slate-50 cursor-pointer">
              Start Learning For Free
            </button>

            <button className="rounded-[14px] bg-[#2071a3] px-6 py-3 text-xs font-semibold text-white transition hover:bg-[#1a5d86] cursor-pointer">
              Explore Legal Stories
            </button>
          </div>
        </div>

        <div className="flex shrink-0 items-center justify-center">
          <img
            src={Lawyer}
            alt="Lawyer illustration"
            className="h-110 w-110 object-contain sm:w-30 md:w-45 lg:w-110"
          />
        </div>
      </section>

         <section className="mx-auto w-full  px-6 py-12 sm:px-10 md:px-14 lg:px-20">
            <h2 className="mb-3 text-center text-xl font-bold text-[#2071a3] md:text-2xl">
                Learn Law Through Real-World Cases
            </h2>
            <hr className="border-[#9bcbe5] mb-10 w-full max-w-xs mx-auto border" />

            <div className="space-y-8 md:space-y-10">
            {features.map((feature) => (
                <div
                key={feature.title}
                className={`flex flex-col items-center gap-5 md:flex-row md:gap-10 ${
                    feature.reverse ? "md:flex-row-reverse" : ""
                }`}
                >
                <div className="  md:flex-1">
                    <div className="rounded-lg border border-[#9bcbe5] p-4">
                    <h3 className="text-md font-bold text-[#2071a3] md:text-base">
                        {feature.title}
                    </h3>

                    <p className=" max-w-150 mt-2 text-xs font-semibold leading-relaxed text-slate-600 md:text-sm">
                        {feature.description}
                    </p>
                    <div className="mt-5 flex justify-end">
                        <button className="rounded-full border border-[#2071a3] px-3 py-1 text-[10px] text-[#2071a3] transition hover:bg-[#2071a3] hover:text-white cursor-pointer">
                            Lanjut →
                        </button>
                    </div>
                    </div>
                </div>

                <div className="flex w-full items-center justify-center md:flex-1">
                    <img
                    src={feature.image}
                    alt={feature.imageAlt}
                    className="h-50 w-full max-w-80 object-contain md:h-50 md:max-w-80"
                    />
                </div>
                </div>
            ))}
            </div>
      </section>

      <section className=" mx-auto min-h-20 w-full  bg-[#cfe2eb] px-6 py-8 sm:px-10 md:min-h-20 md:px-14 lg:px-20">
             <h2 className=" mt-4 mb-3 text-center text-2xl font-bold text-[#1B5E84] md:text-2xl">
                Start Learning Law for Free
            </h2>
            <p className="mb-6 text-center text-xs  leading-relaxed text-[#2580AE] md:text-sm">
                Join our platform and start your journey to understanding law and legal basics through interactive stories and quizzes.
            </p>
            <div className="flex justify-center mb-10">
                <button className="rounded-[14px] bg-white px-8 py-5 border border-[#1C5D83] text-xs font-semibold text-[#1B5E84] transition hover:bg-[#1a5d86] hover:text-white cursor-pointer">
                    Start Learning For Free
                </button>
            </div>

      </section>

    </div>
  );
}

export default LandingPage;
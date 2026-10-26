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
    <div className="w-full bg-white">
      {/* HERO SECTION */}
      <section className="w-full bg-[#cfe2eb]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-16 flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Konten Kiri: Teks & Tombol */}
          <div className="flex-1 max-w-3xl text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-extrabold text-slate-900 leading-[1.2]">
              <span className="block lg:whitespace-nowrap">Learn Law & Legal Basics with</span>
              <span className="block lg:whitespace-nowrap">Interactive Stories and Quizzes</span>
            </h1>

            <p className="mt-4 text-sm lg:text-base font-medium text-slate-700">
              Explore everyday law through interactive stories, real-world cases, quizzes, and simple legal explanations.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button className="rounded-full border border-[#2071a3] bg-white px-7 py-3 text-sm font-semibold text-[#2071a3] hover:bg-slate-50 transition cursor-pointer">
                Start Learning For Free
              </button>

              <button className="rounded-full bg-[#2071a3] px-7 py-3 text-sm font-semibold text-white hover:bg-[#185a82] transition cursor-pointer">
                Explore Legal Stories
              </button>
            </div>
          </div>

          {/* Konten Kanan: Ilustrasi Pengacara */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <img
              src={Lawyer}
              alt="Lawyer illustration"
              className="w-full max-w-md h-auto object-contain"
            />
          </div>

        </div>
      </section>

      {/* FITUR SECTION */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <h2 className="mb-3 text-center text-2xl font-bold text-[#2071a3]">
          Learn Law Through Real-World Cases
        </h2>
        <hr className="border-[#9bcbe5] mb-12 w-48 mx-auto" />

        <div className="space-y-10">
          {features.map((feature) => (
            <div
              key={feature.title}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                feature.reverse ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1">
                <div className="rounded-xl border border-[#9bcbe5] p-6 bg-white">
                  <h3 className="text-lg font-bold text-[#2071a3]">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="mt-4 flex justify-end">
                    <button className="rounded-full border border-[#2071a3] px-4 py-1.5 text-xs font-semibold text-[#2071a3] hover:bg-[#2071a3] hover:text-white transition cursor-pointer">
                      Lanjut →
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex-1 flex justify-center">
                <img
                  src={feature.image}
                  alt={feature.imageAlt}
                  className="max-w-xs h-auto object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="w-full bg-[#cfe2eb] py-14 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1b5e84]">
            Start Learning Law for Free
          </h2>
          <p className="mt-2 text-sm text-[#2580ae]">
            Join our platform and start your journey to understanding law and legal basics through interactive stories and quizzes.
          </p>
          <div className="mt-6">
            <button className="rounded-full bg-white px-8 py-3.5 border border-[#1b5e84] text-sm font-semibold text-[#1b5e84] hover:bg-[#1a5d86] hover:text-white transition cursor-pointer">
              Start Learning For Free
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
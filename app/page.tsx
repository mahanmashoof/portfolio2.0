import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 relative overflow-hidden">
      {/* Elegant background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100"></div>
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="max-w-5xl mx-auto px-6 pt-20 pb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4 tracking-tight">
            i am <span className="text-green-400">mahan</span>
          </h1>
          <p className="text-2xl md:text-3xl text-slate-600 mb-2">
            Software development + AI integrated experiences
          </p>
        </section>

        {/* Featured Project */}
        <section className="max-w-5xl mx-auto px-6 py-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-slate-200/50">
            {/* Project Image */}
            <div className="relative w-full aspect-video bg-slate-100">
              <Image
                src="/ai-dashboard.gif"
                alt="AI Data Insights Dashboard"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Project Info */}
            <div className="p-8 md:p-10">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                AI Data Insights Dashboard
              </h2>
              <p className="text-lg text-slate-500 mt-2 mb-6 leading-relaxed">
                Analyze and visualize csv data with AI-powered insights and
                interactive charts
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 mb-8">
                <a
                  href="https://ai-mini-nine.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-colors"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/mahanmashoof/ai-mini"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border-2 border-slate-900 text-slate-900 rounded-lg font-medium hover:bg-slate-50 transition-colors"
                >
                  GitHub Repo
                </a>
              </div>

              {/* Tech Stack */}
              <div>
                <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Next.js",
                    "TypeScript",
                    "Vite",
                    "Recharts",
                    "PapaParse",
                    "Vercel Functions",
                    "Secure API Proxy",
                    "OpenAI API",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-md text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="max-w-5xl mx-auto px-6 py-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 md:p-10 border border-slate-200/50">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Profile Photo - discreet and elegant */}
              <div className="flex-shrink-0">
                <div className="relative w-24 h-24 rounded-full overflow-hidden ring-2 ring-slate-200/50 shadow-md">
                  <Image
                    src="/Mahan.jpeg"
                    alt="Profile"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* About Text */}
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  About
                </h2>
                <div className="text-lg text-slate-600 space-y-4 leading-relaxed">
                  <p>
                    Frontend developer going full-stack and enthusiastically
                    exploring AI integrations.
                  </p>
                  <p>
                    My background is in engineering and working with complex
                    systems, trying to solve everyday problems.
                  </p>
                  <p>
                    When I'm not coding, I'm spending my time with my family.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="max-w-5xl mx-auto px-6 py-16 pb-24">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Contact</h2>
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:mahan.mashoof@gmail.com"
              className="px-6 py-3 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-colors inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/mahan-mashoof-974a3039/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border-2 border-slate-900 text-slate-900 rounded-lg font-medium hover:bg-slate-50 transition-colors inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
              </svg>
              LinkedIn
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}

import StarBorder from './StarBorder';

export default function Resume() {
  const handleDownload = () => {
    // This will download the resume PDF from public folder
    const link = document.createElement('a');
    link.href = '/KNRISHAB_main.pdf';
    link.download = 'KNRishabPuranika_Resume.pdf';
    link.click();
  };

  return (
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Resume
            </span>
          </h2>
          <p className="text-gray-400 mb-8">
            Download my resume or explore my professional background
          </p>

            <StarBorder
              as="button"
              onClick={handleDownload}
              className="inline-flex items-center gap-2 px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-full font-medium hover:shadow-lg hover:shadow-slate-500/50 hover:scale-105 transition-all duration-300 border border-slate-600"
              color="cyan"
              speed="5s"
            >
              <span>Resume</span>
            </StarBorder>

        </div>

      </div>
    </section>
  );
}
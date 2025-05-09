import { RevealOnScroll } from "../RevealOnScroll";
import { Bubbles } from "./Bubbles"; // 👈 Create this component

export const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 py-25 md:py-20">
      <RevealOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl w-full items-center">
          {/* Left: Text Content */}
          <div className="text-center md:text-left z-100">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Hi, I'm Divya Verma
            </h1>
            <p className="text-gray-500 text-base sm:text-lg mb-7 max-w-lg mx-auto md:mx-0">
              I’m a full-stack developer who loves crafting clean, scalable web
              applications. My goal is to build solutions that offer both
              exceptional performance and a delightful user experience.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://drive.google.com/file/d/1lluS-wNlO6wdlc9tNARFRqov96pRg-w0/view"
                className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
              >
                @Resume
              </a>
              <a
                href="#contact"
                className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Right: Bubbles */}
          <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden">
            <Bubbles />
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

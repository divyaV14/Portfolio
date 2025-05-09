import { RevealOnScroll } from "../RevealOnScroll";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaPython,
  FaJsSquare,
  FaCuttlefish,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiJest,
  SiChartdotjs,
  SiMongodb,
  SiPostgresql,
  SiExpress,
  SiJira ,
} from "react-icons/si";
import frogImage from '/assets/frog.jpg';
import photo from '/assets/photography.jpg';


const languageSkills = [
  { name: "JavaScript", icon: <FaJsSquare size={24} className="text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript size={24} className="text-blue-700" /> },
  { name: "Python", icon: <FaPython size={24} className="text-yellow-600" /> },
  { name: "C/C++", icon: <FaCuttlefish size={24} className="text-gray-600" /> },
  
];
const toolsSkills = [
  { name: "Git", icon: <FaGitAlt size={24} className="text-red-500" /> },
  { name: "Jira", icon: <SiJira size={24} className="text-blue-500" /> },
];


const frameworkSkills = [
  { name: "React", icon: <FaReact size={24} className="text-blue-500" /> },
  { name: "Node.js", icon: <FaNodeJs size={24} className="text-green-600" /> },
  { name: "Express.js", icon: <SiExpress size={24} className="text-gray-700" /> },
  { name: "MongoDB", icon: <SiMongodb size={24} className="text-green-700" /> },
  { name: "PostgreSQL", icon: <SiPostgresql size={24} className="text-blue-800" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss size={24} className="text-teal-500" /> },
  { name: "Chart.js", icon: <SiChartdotjs size={24} className="text-pink-500" /> },
  { name: "Jest", icon: <SiJest size={24} className="text-red-500" /> },
];

export const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen py-20 bg-gradient-to-r from-blue-50 to-cyan-100"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4">
          {/* <h2 className="text-4xl font-extrabold mb-16 text-center text-blue-600">
            About Me
          </h2> */}

          {/* Grid: Skills + Education + Experience */}
          <div className="grid md:grid-cols-3 gap-10 mb-20">
            {/* Frontend Skills */}
         {/* Language Skills */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:-translate-y-1 transition">
            <h3 className="text-3xl font-bold mb-6 text-blue-700"> Languages</h3>
            <div className="flex flex-wrap gap-4">
              {languageSkills.map(({ name, icon }, i) => (
                <span
                  key={i}
                  className="flex items-center gap-2 bg-blue-50 text-blue-700 py-2 px-4 rounded-full font-medium text-base shadow"
                >
                  {icon}
                  {name}
                </span>
              ))}
            </div>
             {/* Tools Skills */}
          <div className="mt-17">
            <h3 className="text-3xl font-bold mb-6 text-blue-700"> Tools</h3>
            <div className="flex flex-wrap gap-4">
              {toolsSkills.map(({ name, icon }, i) => (
                <span
                  key={i}
                  className="flex items-center gap-2 bg-blue-50 text-blue-700 py-2 px-4 rounded-full font-medium text-base shadow"
                >
                  {icon}
                  {name}
                </span>
              ))}
            </div>
          </div>

          </div>

          {/* Framework Skills */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:-translate-y-1 transition">
            <h3 className="text-3xl font-bold mb-6 text-blue-700"> Frameworks</h3>
            <div className="flex flex-wrap gap-4">
              {frameworkSkills.map(({ name, icon }, i) => (
                <span
                  key={i}
                  className="flex items-center gap-2 bg-blue-50 text-blue-700 py-2 px-4 rounded-full font-medium text-base shadow"
                >
                  {icon}
                  {name}
                </span>
              ))}
            </div>
          </div>
         


         
          {/* Experience Timeline */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-3xl font-bold mb-10 text-blue-700">Experience</h3>
            <ol className="relative border-l-4 border-blue-200 pl-6 space-y-10">
              {/* Experience Item 1 */}
              <li>
                <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2.5 top-1.5 border-2 border-white"></div>
                <time className="mb-2 text-sm font-medium text-blue-600">Apr, 2023- Oct, 2024</time>
                <h4 className="text-lg font-semibold text-gray-800">Software Developer – LTTS, Mysuru</h4>
                <p className="text-gray-600 mt-2">
                  Built scalable React applications with TypeScript, TailwindCSS, and integrated real-time APIs using WebSockets. Led UI/UX improvements and performance tuning.
                </p>
              </li>

              {/* Experience Item 2 */}
              <li>
                <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2.5 top-1.5 border-2 border-white"></div>
                <time className="mb-2 text-sm font-medium text-blue-600">Oct, 2022 - Apr, 2023</time>
                <h4 className="text-lg font-semibold text-gray-800">GET –L&T, Chennai</h4>
                <p className="text-gray-600 mt-2">
                  Worked across frontend and backend using MERN stack. Developed dashboards, optimized APIs, and contributed to database design and CI/CD automation.
                </p>
              </li>

   
    
              </ol>
            </div>

              </div>
         
          

          {/* Grid: About Me + Hobbies */}
          <div className="grid md:grid-cols-2 gap-10">
           {/* About Me */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-3xl font-bold mb-6 text-blue-700">👩‍💻 About Me</h3>
              <ul className="space-y-4 text-lg text-gray-700">
                <li>
                  <span className="font-semibold text-blue-600">Name:</span> Divya Verma
                </li>
                <li>
                  <span className="font-semibold text-blue-600">Age:</span> 24
                </li>
                <li>
                  <span className="font-semibold text-blue-600">Languages:</span> English, Hindi
                </li>
                <li>
                  <span className="font-semibold text-blue-600">Education:</span> B.Tech in Information Technology, GB Pant University of Agriculture and Technology 
                  <li>2018-2022</li>
                </li>
              </ul>
            </div>


            {/* Hobbies */}
          
            <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-3xl font-bold mb-6 text-blue-700">Hobbies</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Hobby 1 */}
              <div className="flex flex-col items-center">
               <img
                src={frogImage}
                alt="Drawing and Art"
                className="w-full h-64 object-cover rounded-xl shadow-md"
              />
                <p className="mt-4 text-lg text-gray-700 text-center">Drawing and Art</p>
              </div>

              {/* Hobby 2 */}
              <div className="flex flex-col items-center">
                <img
                  src={photo}
                  alt="Photography"
                  className="w-full h-64 object-cover rounded-xl shadow-md"
                />
                <p className="mt-4 text-lg text-gray-700 text-center">Photography</p>
              </div>
            </div>


  
            </div>

          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

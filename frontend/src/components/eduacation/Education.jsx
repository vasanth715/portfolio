import { GraduationCap, School, BookOpen } from "lucide-react";

const educationData = [
  {
    title: "Master of Computer Science (MCA)",
    institute: "JNTU-GV University",
    year: "2023 - 2025",
    score: "CGPA: 8.0",
    icon: <GraduationCap size={28} />,
  },
  {
    title: "Bachelor of Chemistry",
    institute: "Andhra University",
    year: "2017 - 2020",
    score: "CGPA: 80",
    icon: <BookOpen size={28} />,
  },
  {
    title: "Intermediate Education",
    institute: "Aditya Jr. College, Andhra Pradesh",
    year: "2015 - 2017",
    score: "Marks: 931/1000",
    icon: <School size={28} />,
  },
  {
    title: "Secondary Education (SSC)",
    institute: "Z.P.H. School, Andhra Pradesh",
    year: "2014 - 2015",
    score: "CGPA: 9.3",
    icon: <School size={28} />,
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="w-full py-20 bg-gradient-to-b from-white to-green-50"
    >
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold text-gray-900">
            Education
          </h2>
          <p className="text-gray-600 mt-3">
            My academic journey and qualifications
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="
                group
                bg-white
                border border-green-100
                rounded-2xl
                p-6
                shadow-md
                hover:shadow-xl
                transition-all
                duration-300
                hover:-translate-y-2
              "
            >
              {/* Icon */}
              <div
                className="
                  w-14 h-14 flex items-center justify-center
                  rounded-full
                  bg-green-100 text-green-700
                  group-hover:bg-yellow-300
                  group-hover:text-black
                  transition-all duration-300
                "
              >
                {edu.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mt-4">
                {edu.title}
              </h3>

              <p className="text-gray-600 mt-1">
                {edu.institute}
              </p>

              <div className="flex justify-between mt-4 text-sm font-medium">
                <span className="text-green-700">{edu.year}</span>
                <span className="text-yellow-600">{edu.score}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Extra Coursework */}
        <div className="mt-14 text-center">
          <p className="text-gray-700 font-medium">
            Relevant Coursework:
          </p>
          <p className="text-gray-600 mt-2">
            Data Analysis • Software Engineering • Operating Systems • Web Technologies
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;

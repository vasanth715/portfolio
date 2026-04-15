const About = () => {
  return (
    <section
      id="aboutme"
      className="w-full bg-[#f9fbe7] py-20 px-6"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        
        {/* Left Side – Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-6">
            About Me
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-5">
            I am <span className="font-semibold text-green-700">Lakshmanarao Jada</span>, 
            an Associate Engineer with a strong foundation in software development, 
            problem-solving, and modern web technologies.
          </p>

          <p className="text-gray-700 leading-relaxed mb-5">
            I am currently pursuing my <span className="font-semibold">MCA</span> and have hands-on
            experience working with <span className="font-semibold">Java, MySQL, React</span>, and 
            <span className="font-semibold"> AI/ML-based projects</span>. I enjoy building scalable
            applications and learning new technologies that solve real-world problems.
          </p>

          <p className="text-gray-700 leading-relaxed">
            I have worked on projects such as <span className="font-semibold">
            Unsupervised Anomaly Detection in Energy Consumption</span>, 
            <span className="font-semibold"> Employee Record Systems</span>, and 
            an <span className="font-semibold">AI-based Resume Screening System</span>.
            I believe in continuous learning, clean code, and collaborative development.
          </p>
        </div>

        {/* Right Side – Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          
          <div className="bg-white border border-green-200 rounded-xl p-6 shadow-sm">
            <h4 className="text-green-700 font-semibold mb-2">Role</h4>
            <p className="text-gray-600">Associate Engineer</p>
          </div>

          <div className="bg-white border border-green-200 rounded-xl p-6 shadow-sm">
            <h4 className="text-green-700 font-semibold mb-2">Education</h4>
            <p className="text-gray-600">MCA (Pursuing)</p>
          </div>

          <div className="bg-white border border-green-200 rounded-xl p-6 shadow-sm">
            <h4 className="text-green-700 font-semibold mb-2">Tech Stack</h4>
            <p className="text-gray-600">Java, React, MySQL, AI/ML</p>
          </div>

          <div className="bg-white border border-green-200 rounded-xl p-6 shadow-sm">
            <h4 className="text-green-700 font-semibold mb-2">Location</h4>
            <p className="text-gray-600">Andhra Pradesh, India</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;

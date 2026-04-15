const SkillCard = ({ skill }) => {
  const Icon = skill.icon;

  return (
    <div className="group relative bg-white border border-green-100 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
      
      {/* Icon */}
      <div className="text-green-700 flex justify-center">
        <Icon size={34} />
      </div>

      {/* Name */}
      <h3 className="text-center font-bold mt-3 text-gray-900">
        {skill.name}
      </h3>

      {/* Hover Tooltip */}
      <div className="absolute top-0 right-0 h-full w-full bg-green-700 text-white rounded-2xl flex flex-col justify-center px-6 opacity-0 translate-x-full group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
        <p className="font-semibold mb-2">Key Topics:</p>
        <ul className="text-sm space-y-1">
          {skill.topics.map((topic, i) => (
            <li key={i}>✔ {topic}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SkillCard;

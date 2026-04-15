const CapabilityText = ({ position, title, description }) => {
  return (
    <div
      className={`text-${
        position === "left" ? "left" : "right"
      }`}
    >
      {title && (
        <h2 className="text-4xl font-bold mb-4">
          {title}
        </h2>
      )}
      {description && (
        <p className="text-lg text-gray-200 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default CapabilityText;

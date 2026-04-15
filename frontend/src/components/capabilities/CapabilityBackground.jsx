const CapabilityBackground = ({ image, progress }) => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      
      {/* Base background (previous image stays visible) */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${image})`,
          filter: "brightness(0.35)",
        }}
      />

      {/* Curtain reveal layer */}
      <div
        className="absolute top-0 left-0 w-full bg-cover bg-center"
        style={{
          height: `${Math.min(progress * 120, 100)}%`,
          backgroundImage: `url(${image})`,
          filter: "brightness(0.35)",
          transition: "height 0.15s linear",
        }}
      />
    </div>
  );
};

export default CapabilityBackground;

import { capabilities } from "./capabilities.data";

const CapabilitiesCircle = ({ progress, activeIndex, total }) => {
  const radius = 120;
  const center = 150;
  const segmentAngle = 360 / total;

  const polarToCartesian = (angle, r) => {
    const rad = (angle - 90) * (Math.PI / 180);
    return {
      x: center + r * Math.cos(rad),
      y: center + r * Math.sin(rad),
    };
  };

  const describeArc = (startAngle, endAngle) => {
    const start = polarToCartesian(endAngle, radius);
    const end = polarToCartesian(startAngle, radius);
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    return `
      M ${start.x} ${start.y}
      A ${radius} ${radius} 0 ${largeArcFlag} 0 ${end.x} ${end.y}
    `;
  };

  return (
    <svg width="300" height="300" className="mx-auto">
      {capabilities.map((cap, index) => {
        const startAngle = index * segmentAngle;
        const endAngle = startAngle + segmentAngle;

        const iconPos = polarToCartesian(
          startAngle + segmentAngle / 2,
          radius - 35
        );

        const isActive = index === activeIndex;

        return (
          <g key={index}>
            {/* Segment */}
            <path
              d={describeArc(startAngle, endAngle)}
              fill="none"
              stroke={isActive ? "#34d399" : "rgba(255,255,255,0.25)"}
              strokeWidth={isActive ? 8 : 4}
              style={{
                transition: "stroke 0.5s ease, stroke-width 0.5s ease",
              }}
            />

            {/* Icon */}
            <text
              x={iconPos.x}
              y={iconPos.y}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize={isActive ? "26" : "20"}
              style={{
                transition: "all 0.5s ease",
                opacity: isActive ? 1 : 0.7,
              }}
            >
              {cap.icon}
            </text>
          </g>
        );
      })}
    </svg>
  );
};

export default CapabilitiesCircle;

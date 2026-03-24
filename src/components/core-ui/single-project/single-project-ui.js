import React from "react";
import Fade from "react-reveal/Fade";
import "./single-project.css";

const gradients = [
  // Blue gradients (using primary color #1D9BF0)
  { gradient: "linear-gradient(135deg, #1D9BF0 0%, #0F0C41 100%)", dark: false },
  { gradient: "linear-gradient(135deg, #1D9BF0 0%, #8B98A5 100%)", dark: false },
  { gradient: "linear-gradient(135deg, #0F0C41 0%, #EFF3F4 100%)", dark: false },
  { gradient: "linear-gradient(135deg, #1D9BF0 0%, #EFF3F4 100%)", dark: false },
  // Lighter purple/blue gradients
  { gradient: "linear-gradient(135deg, #1D9BF0 0%, #0F0C41 100%)", dark: false },
  { gradient: "linear-gradient(135deg, #8B98A5 0%, #EFF3F4 100%)", dark: false },
  // Gray variations
  { gradient: "linear-gradient(135deg, #8B98A5 0%, #EFF3F4 100%)", dark: false },
  { gradient: "linear-gradient(135deg, #EFF3F4 0%, #1D9BF0 100%)", dark: false },
  { gradient: "linear-gradient(135deg, #8B98A5 0%, #1D9BF0 100%)", dark: false },
  { gradient: "linear-gradient(135deg, #EFF3F4 0%, #8B98A5 100%)", dark: false },
];

const getGradientStyle = (id) => {
  const { gradient } = gradients[id % gradients.length];
  return { background: gradient };
};

const getTextColor = (id) => {
  const { dark } = gradients[id % gradients.length];
  return dark ? '#ffffff' : '#333333';
};

function SingleProjectUI({
  id,
  name,
  desc,
  theme,
}) {
  return (
    <Fade bottom>
      <div
        key={id}
        className="singleProject"
        style={{ background: getGradientStyle(id).background }}
      >
        <div className="projectContent">
          <h2
            id={name.replace(" ", "-").toLowerCase()}
            style={{ color: getTextColor(id) }}
          >
            {name}
          </h2>
          <p
            className="project--desc"
            style={{
              color: getTextColor(id),
              backgroundColor: getTextColor(id) === '#ffffff' ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.5)',
            }}
          >
            {desc}
          </p>
        </div>
      </div>
    </Fade>
  );
}

export default SingleProjectUI;

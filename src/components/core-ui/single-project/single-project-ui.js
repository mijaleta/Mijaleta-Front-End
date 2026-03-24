import React from "react";
import Fade from "react-reveal/Fade";
import "./single-project.css";

const gradients = [
  { gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", dark: true },
  { gradient: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)", dark: false },
  { gradient: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)", dark: false },
  { gradient: "linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)", dark: false },
  { gradient: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)", dark: false },
  { gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)", dark: true },
  { gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)", dark: false },
  { gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)", dark: false },
  { gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)", dark: false },
  { gradient: "linear-gradient(135deg, #a6c0fe 0%, #f68084 100%)", dark: false },
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

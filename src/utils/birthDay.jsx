import React from "react";

const BirthDay = ({ birth }) => {
  return (
    <div className="d-flex flex-column">
      {birth.map((bir) => (
        <div class="media mt-2">
          <img
            class="d-flex align-self-center mr-3 img-media"
            src="/images/index.png"
            alt="Generic placeholder "
          />
          <div class="media-body text-white">
            <h6 class="mt-0">{bir.name}</h6>
            <p>{bir.class}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BirthDay;

import React from "react";

// a terrifying amalgamation of blobs with custom set transformations
const Blob = () => {
  return (
    <>
      <svg
        className="overflow-hidden fill-accent/50 absolute -z-10 transform translate-x-[7vw] translate-y-16"
        width={750}
        height={750}
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M37.1,-30.9C43.5,-21.6,40.9,-6.4,37.2,7.9C33.5,22.3,28.6,35.9,19.9,39.3C11.1,42.8,-1.6,36.2,-20.8,31.5C-40.1,26.7,-66,23.8,-70.6,13.3C-75.3,2.8,-58.7,-15.4,-43.4,-26.7C-28.1,-38.1,-14,-42.6,0.7,-43.1C15.4,-43.7,30.7,-40.2,37.1,-30.9Z"
          transform="translate(100 100)"
        />
      </svg>
      <svg
        className="overflow-hidden fill-accent/50 absolute -left-[70vw] md:-left-[16vw] -z-10 transform -translate-y-10 scale-150"
        width={350}
        height={350}
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M48.5,-41.1C59.2,-25.2,61.8,-5.2,55.8,9.4C49.8,24,35.2,33.4,17.8,44.6C0.5,55.9,-19.6,69.2,-36.1,65C-52.5,60.9,-65.4,39.4,-64.6,21C-63.8,2.6,-49.4,-12.6,-36.3,-29.1C-23.3,-45.5,-11.6,-63.2,3.6,-66.1C18.9,-69,37.7,-57,48.5,-41.1Z"
          transform="translate(100 100)"
        />
      </svg>
      <svg
        className="overflow-hidden fill-accent/50 absolute -left-[33vw] -z-10 transform -translate-y-24 scale-50"
        width={400}
        height={400}
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M64.9,-51.3C80.3,-32.6,86.1,-5.8,80.9,19.1C75.7,44,59.5,66.9,37.1,78.1C14.7,89.3,-13.9,88.7,-35.7,77.1C-57.6,65.4,-72.9,42.8,-77.7,18.6C-82.5,-5.6,-77,-31.3,-62.3,-49.9C-47.6,-68.5,-23.8,-79.9,0.5,-80.3C24.8,-80.7,49.6,-70,64.9,-51.3Z"
          transform="translate(100 100)"
        />
      </svg>
      <svg
        className="overflow-hidden fill-accent/50 absolute -left-[50vw] -z-10 transform -translate-y-12"
        width={400}
        height={400}
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.9,13.1C15.3,19.5,-6.2,17.7,-12.3,10.5C-18.4,3.3,-9.2,-9.4,1.5,-8.6C12.2,-7.7,24.5,6.8,19.9,13.1Z"
          transform="translate(100 100)"
        />
      </svg>
      <svg
        className="overflow-hidden fill-accent/50 absolute -left-[40vw] -z-10 transform scale-[70%] translate-y-10"
        width={400}
        height={400}
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M41.3,23.7C28.1,46.8,-25.7,46.4,-39.4,23C-53,-0.4,-26.5,-46.6,0.4,-46.4C27.3,-46.2,54.6,0.5,41.3,23.7Z"
          transform="translate(100 100)"
        />
      </svg>
    </>
  );
};

export default Blob;

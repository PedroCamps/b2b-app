import React from "react";

function Featured() {
  return (
    <section className="featured flex items-center justify-center h-full">
      <img
        src={"./OPENBAR3.png"}
        alt="Image 1"
        className="featured-image w-[70%] h-[100%] object-cover"
      />
      <img
        src={"./OPENBAR3_mobile.png"}
        alt="Image 1 Mobile"
        className="featured-image-mobile w-[70%] h-[100%] object-cover"
      />
    </section>
  );
}

export default Featured;

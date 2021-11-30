import React from "react";
export default function About() {
  return (
    <div className="about">
      <h1>
        Hi my name is Jordan Lindgren and I am a current student in the U of
        Minnesota full stack web development program. I am from Minnesota and
        currently live in Hawaii. I would like to work remotely and be able to
        travel while using my skills aquired from this course.
      </h1>
      <img
        src={process.env.PUBLIC_URL + "/images/jordansface.jpg"}
        alt="Work Examples"
      />
    </div>
  );
}

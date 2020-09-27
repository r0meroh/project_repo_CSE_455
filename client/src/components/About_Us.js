import React from "react";

const About_Us = () => {
  const data = [
    {
      name: "Test Dummy",
      description: "Coded",
      photo:
        "https://image.shutterstock.com/image-photo/duck-on-white-background-260nw-1037486434.jpg",
    },
  ];
  return (
    <div className="card">
      {data.map((profile) => (
        <div>
          <h1>{profile.name}</h1>
          <p>{profile.description}</p>
          <img src={profile.photo}></img>
        </div>
      ))}
    </div>
  );
};

export default About_Us;

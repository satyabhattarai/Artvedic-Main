import React from "react";

const workshops = [
  {
    id: 1,
    title: "Art of Expression",
    description: "Unlock your creativity through various artistic forms.",
    zoomLink: "https://zoom.us/artofexpression",
  },
  // Add more workshops as needed
];
const Workshopdashboard = () => {
  return (
    <div>
      <div className="container p-8 mx-auto ">
        <h1 className="mt-8 mb-8 text-4xl font-bold text-white">
          Workshop Dashboard
        </h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {workshops.map((workshop) => (
            <div
              key={workshop.id}
              className="p-6 transition duration-300 bg-white rounded-lg shadow-md hover:shadow-lg"
            >
              <h2 className="mb-4 text-2xl font-semibold">{workshop.title}</h2>
              <p className="mb-4 text-gray-600">{workshop.description}</p>
              <a
                href={workshop.zoomLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Join Workshop on Zoom
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Workshopdashboard;

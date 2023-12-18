import React from 'react'

const Workshopdashboard = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation Bar */}
      <nav className="py-4 mt-8 text-center text-white ">
        <h1 className="text-4xl font-bold">Workshop</h1>
      </nav>

      {/* Main Content */}
      <div className="container p-4 mx-auto mt-8">
        <h2 className="mb-4 text-2xl font-semibold text-white">Title</h2>

        {/* Workshop Details */}
        <div className="p-4 bg-white rounded-md shadow-md">
          <p className="font-bold">Organizer: </p>
          <p>desc</p>
          <p>time</p>

          {/* Join Button */}
          <button className="px-4 py-2 mt-4 text-white bg-blue-500 rounded">
            Join Workshop
          </button>
        </div>
      </div>
    </div>
  );
};
export default Workshopdashboard;

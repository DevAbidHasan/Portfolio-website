import React from "react";

const Education = () => {
  const educationData = [
    {
      degree: "SSC - Science Group",
      year: "2019",
      result: "GPA 5.00",
    },
    {
      degree: "HSC - Science Group",
      year: "2021",
      result: "GPA 5.00",
    },
    {
      degree: "Undergrad - CSE Dept, Jahangirnagar University",
      year: "2023 - Running",
      result: "",
    },
  ];

  return (
    <section id="education" className="w-11/12 mx-auto py-20">
      <h2 className="text-3xl md:text-4xl font-bold poppins text-indigo-600 mb-12 text-center">
        Education
      </h2>

      <div className="relative border-l-2 border-indigo-300 ml-4 md:ml-12">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="mb-10 ml-4 md:ml-8 relative"
          >
            {/* Timeline Circle */}
            <span className="absolute -left-6 md:-left-8 top-1 w-4 h-4 md:w-5 md:h-5 rounded-full bg-indigo-600 border-2 border-white"></span>

            {/* Education Content */}
            <div className="bg-gray-50 p-5 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <h3 className="poppins font-bold text-indigo-600 text-lg md:text-xl">
                {edu.degree}
              </h3>
              <p className="ibm text-gray-600 text-sm md:text-base">
                Year: {edu.year}
              </p>
              {edu.result && (
                <p className="ibm text-gray-600 text-sm md:text-base">
                  Result: {edu.result}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;

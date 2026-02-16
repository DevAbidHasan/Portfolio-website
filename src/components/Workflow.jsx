import React from "react";

const Workflow = () => {
  const steps = [
    {
      number: "01",
      title: "Planning",
      desc: "Understanding requirements and defining project structure."
    },
    {
      number: "02",
      title: "Design",
      desc: "Creating clean and user-friendly UI layouts."
    },
    {
      number: "03",
      title: "Development",
      desc: "Building scalable frontend and backend systems."
    },
    {
      number: "04",
      title: "Testing",
      desc: "Ensuring performance, security and responsiveness."
    },
    {
      number: "05",
      title: "Deployment",
      desc: "Deploying optimized applications to production."
    }
  ];

  return (
    <section className=" py-16 bg-white dark:bg-gray-900">
      <div className="w-[90%] mx-auto">

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-700 dark:text-white mb-6">
          My Workflow
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-16 text-center">A structured approach I follow to design and build efficient, scalable applications.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {steps.map((step, index) => (
            <div
              key={index}
              className="border border-gray-200 bg-gray-50 dark:border-gray-700 
              rounded-2xl p-8 hover:shadow-md transition-all duration-500"
            >
              <span className="text-lg font-bold tracking-[0.2em] text-green-500">
                {step.number}
              </span>

              <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
                {step.title}
              </h3>

              <p className="mt-4 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Workflow;

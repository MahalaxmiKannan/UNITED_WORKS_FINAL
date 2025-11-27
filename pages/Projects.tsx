import React, { useState, useRef, useEffect } from "react";
import {
  PROJECTS_DATA,
  MILESTONES_TIMELINE,
  TESTIMONIALS_DATA,
} from "../constants";
import { ArrowRightIcon, CpuChipIcon, StarIcon } from "../components/Icons";
import type { Testimonial } from "../types";
// Use public/static paths for images to avoid missing module/type errors for binary assets
const ProjectMain = "/ProjectMain.jpeg";
const Map = "/SingaporeMap.png";

const setup = "/setup.jpg";

const HeroSection = () => (
  <div
    className="relative h-[50vh] sm:h-[55vh] md:h-[60vh] bg-cover bg-center"
    style={{ backgroundImage: `url(${ProjectMain})` }}
  >
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 sm:px-6 md:px-12 lg:px-24 text-center">
      <p className="text-sm sm:text-base lg:text-lg">Our Projects</p>
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mt-2 leading-tight max-w-2xl">
        Engineering a Connected Singapore.
      </h1>
      <p className="mt-4 sm:mt-6 max-w-xl text-sm sm:text-base lg:text-lg text-gray-200">
        Here, we present the projects that define our capabilities. From complex
        electrical engineering to large-scale power systems, these works are a
        testament to our role in building a connected Singapore.
      </p>
    </div>
  </div>
);

const MilestonesSection = () => {
  return (
    <div className="py-16 lg:py-24 bg-uw-grey-2 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-uw-dark mb-4">
            Legacy of Milestones
          </h2>
          <div className="w-24 h-1.5 bg-uw-orange mx-auto rounded-full"></div>
          <p className="mt-4 text-uw-grey-1 max-w-2xl mx-auto">
            Over the years, we have consistently delivered excellence in
            infrastructure, building a foundation of trust and quality across
            Singapore.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {MILESTONES_TIMELINE.map((milestone, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-5 h-5 bg-uw-orange rounded-full border-4 border-white shadow-md transform -translate-x-1/2 z-10 mt-6 md:mt-0"></div>

                {/* Content Spacer for Desktop (Empty side) */}
                <div className="hidden md:block w-1/2"></div>

                {/* Content Card */}
                <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-10">
                  <div className="group relative bg-white rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300 border border-gray-100">
                    <div className="aspect-[3/2] overflow-hidden relative">
                      <img
                        src={milestone.imageUrl}
                        alt={`Milestone ${milestone.year}`}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300"></div>

                      <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <span className="inline-block px-3 py-1 bg-uw-orange text-white text-xs font-bold tracking-widest rounded-full mb-2">
                          YEAR
                        </span>
                        <h3 className="text-4xl font-bold text-white tracking-wider">
                          {milestone.year}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectsGallery = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 8;
  const totalPages = Math.ceil(PROJECTS_DATA.length / projectsPerPage);
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = PROJECTS_DATA.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="py-12 sm:py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {currentProjects.map((project, index) => (
            <div
              key={index}
              className="bg-uw-grey-2 rounded-lg overflow-hidden shadow-lg group"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-40 sm:h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="p-4 sm:p-6">
                <p className="text-xs sm:text-sm text-uw-orange font-semibold">
                  {project.category}
                </p>
                <h3 className="text-lg sm:text-xl font-bold mt-2 text-uw-dark">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-uw-grey-1">
                  {project.location}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* Pagination */}
        <div className="mt-8 sm:mt-12 lg:mt-16 flex justify-center items-center space-x-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
            <button
              key={number}
              onClick={() => paginate(number)}
              className={`px-3 sm:px-4 py-2 rounded-md text-xs sm:text-sm font-medium ${
                currentPage === number
                  ? "bg-uw-orange text-white"
                  : "bg-uw-grey-3 text-uw-dark hover:bg-gray-300"
              }`}
            >
              {number}
            </button>
          ))}
          {currentPage < totalPages && (
            <button
              onClick={() => paginate(currentPage + 1)}
              className="px-3 sm:px-4 py-2 rounded-md text-xs sm:text-sm font-medium flex items-center space-x-2 bg-uw-grey-3 text-uw-dark hover:bg-gray-300"
            >
              <span className="hidden sm:inline">Next Page</span>
              <span className="sm:hidden">Next</span>
              <ArrowRightIcon className="w-3 h-3 sm:w-4 sm:h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  const defaultTestimonial =
    TESTIMONIALS_DATA.find((t) => t.name === "Mr. Benjamin Lee") ||
    TESTIMONIALS_DATA[0];
  const [selectedTestimonial, setSelectedTestimonial] =
    useState<Testimonial>(defaultTestimonial);

  const testimonialToDisplay = selectedTestimonial;

  return (
    <div
      className="py-12 sm:py-16 lg:py-24 bg-uw-grey-3"
      onMouseLeave={() => setSelectedTestimonial(defaultTestimonial)}
    >
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif mb-6 sm:mb-8 text-uw-dark">
          Voices Of Trust !
        </h2>

        {/* Desktop Map View */}
        <div className="hidden lg:block relative max-w-5xl mx-auto min-h-[40rem]">
          <img
            src={Map}
            alt="Singapore Map Background"
            className="w-full h-auto"
          />

          {/* Floating Avatars */}
          {TESTIMONIALS_DATA.map((testimonial) => (
            <div
              key={testimonial.name}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-transform duration-300 hover:scale-125 hover:z-30"
              style={{
                top: testimonial.position.top,
                left: testimonial.position.left,
              }}
              onMouseEnter={() => setSelectedTestimonial(testimonial)}
            >
              <img
                src={testimonial.avatarUrl}
                alt={testimonial.name}
                className={`w-16 h-16 rounded-full border-4 object-cover transition-all duration-300 shadow-lg ${
                  testimonialToDisplay.name === testimonial.name
                    ? "border-yellow-400 scale-125 z-20"
                    : "border-uw-orange"
                }`}
              />
            </div>
          ))}

          {/* Testimonial Card */}
          {testimonialToDisplay && (
            <div
              key={testimonialToDisplay.name}
              className="absolute w-[28rem] z-10 animate-push-in"
              style={{ top: "35%", left: "55%" }}
            >
              <div className="relative bg-white rounded-2xl shadow-2xl p-8 pt-12 text-left border border-gray-100">
                {/* Avatar overlapping top */}
                <div className="absolute -top-10 left-8">
                  <div className="relative">
                    <img
                      src={testimonialToDisplay.avatarUrl}
                      alt={testimonialToDisplay.name}
                      className="w-20 h-20 rounded-full border-4 border-white shadow-lg object-cover"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-uw-orange text-white p-1.5 rounded-full shadow-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.678 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="mb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-xl text-uw-dark">
                        {testimonialToDisplay.name}
                      </h3>
                      <p className="text-sm text-uw-orange font-medium">
                        {testimonialToDisplay.location}
                      </p>
                    </div>
                    <div className="flex space-x-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <StarIcon
                          key={i}
                          className={`w-4 h-4 ${
                            i < testimonialToDisplay.rating
                              ? "text-yellow-400"
                              : "text-gray-200"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <span className="absolute -top-2 -left-2 text-6xl text-uw-grey-3 opacity-30 font-serif">
                    "
                  </span>
                  <p className="text-uw-grey-1 leading-relaxed relative z-10 italic">
                    {testimonialToDisplay.quote}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Mobile Testimonials */}
        <div className="lg:hidden space-y-6">
          {TESTIMONIALS_DATA.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-white rounded-lg shadow-lg p-6 text-left"
            >
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={testimonial.avatarUrl}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full border-4 border-uw-orange object-cover"
                />
                <div>
                  <h3 className="font-bold text-lg text-uw-dark">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-uw-grey-1">
                    {testimonial.location}
                  </p>
                  <div className="flex items-center space-x-1 mt-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i}>
                        <StarIcon
                          className={`w-4 h-4 ${
                            i < testimonial.rating
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-uw-grey-1 leading-relaxed text-sm sm:text-base">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  // Made-by images with labels and captions
  const [madeByPage, setMadeByPage] = useState(1);

  const madeByImages: { src: string; label: string; caption: string }[] = [
    {
      src: "/15 Nov 21 N105 Thomson Rd Toolbox mtg.jpg",
      label: "Toolbox Meeting",
      caption: "Safety briefing and pre-shift checks",
    },
    {
      src: "/Cable Lay 3.jpg",
      label: "Cable Laying",
      caption: "Precision cable trenching and placement",
    },
    {
      src: "/IMG-20230522-WA0078.jpg",
      label: "Installation Team",
      caption: "Skilled team carrying out installations",
    },
    {
      src: "/setup.jpg",
      label: "Equipment Setup",
      caption: "Mobilisation and heavy equipment setup",
    },
    {
      src: "/reinstatement.jpeg",
      label: "Reinstatement",
      caption: "Quality reinstatement and surfacing",
    },
    {
      src: "/IMG_1116.jpg",
      label: "Site Progress",
      caption: "Ongoing site progress and coordination",
    },
    // next page single image
    {
      src: "/WhatsApp_Image_2025-09-06_at_14.14.36_5c8c50f7.jpg",
      label: "Special Project",
      caption: "Featured highlight project",
    },
  ];

  const imagesPerPage = 6;
  const totalPages = Math.ceil(madeByImages.length / imagesPerPage);
  const startIndex = (madeByPage - 1) * imagesPerPage;
  const displayed = madeByImages.slice(startIndex, startIndex + imagesPerPage);

  return (
    <div>
      <HeroSection />
      <MilestonesSection />

      {/* Made By United Works — paginated 2 rows x 3 columns image grid */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-4xl font-bold mb-8 text-uw-orange">
            Made By United Works
          </h2>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {displayed.map((item, i) => (
                <div
                  key={startIndex + i}
                  className="overflow-hidden rounded-lg shadow-lg bg-uw-grey-2"
                >
                  <img
                    src={item.src}
                    alt={item.label}
                    className="w-full h-48 object-cover sm:h-56 md:h-48 lg:h-56"
                  />
                  <div className="p-3 text-left">
                    <p className="font-semibold text-uw-dark">{item.label}</p>
                    <p className="text-sm text-uw-grey-1 mt-1">
                      {item.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination controls */}
            <div className="mt-6 flex justify-center items-center space-x-3">
              <button
                onClick={() => setMadeByPage((p) => Math.max(1, p - 1))}
                disabled={madeByPage === 1}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  madeByPage === 1
                    ? "bg-uw-grey-3 text-uw-dark opacity-50 cursor-not-allowed"
                    : "bg-uw-orange text-white hover:opacity-90"
                }`}
              >
                Previous
              </button>

              <span className="text-sm text-uw-dark">
                Page {madeByPage} of {totalPages}
              </span>

              <button
                onClick={() =>
                  setMadeByPage((p) => Math.min(totalPages, p + 1))
                }
                disabled={madeByPage === totalPages}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  madeByPage === totalPages
                    ? "bg-uw-grey-3 text-uw-dark opacity-50 cursor-not-allowed"
                    : "bg-uw-orange text-white hover:opacity-90"
                }`}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSection />
    </div>
  );
};

export default Projects;

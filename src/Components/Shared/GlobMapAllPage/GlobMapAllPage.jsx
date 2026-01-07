import React from "react";

const GlobMapAllPage = () => {
  const companies = [
    {
      name: "Transistor",
      src: "https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-white.svg",
      width: 158,
      height: 48,
    },
    {
      name: "Reform",
      src: "https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-white.svg",
      width: 158,
      height: 48,
    },
    {
      name: "Tuple",
      src: "https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-white.svg",
      width: 158,
      height: 48,
    },
    {
      name: "SavvyCal",
      src: "https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-white.svg",
      width: 158,
      height: 48,
    },
    {
      name: "Statamic",
      src: "https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-white.svg",
      width: 158,
      height: 48,
    },
    {
      name: "Laravel",
      src: "https://tailwindcss.com/plus-assets/img/logos/158x48/laravel-logo-white.svg",
      width: 158,
      height: 48,
    },
  ];

  return (
    <div>
      <div className="bg-[#282828] pt-28 py-4 ">
        <div className="mx-auto  px-2  mt-6 md:mt-6 w-9/12 mx-auto">
          <h2 className="text-center text-xs font-semibold text-white underline">
            Trusted by the world's most innovative
          </h2>

          <div
            className="mx-auto mt-4 grid 
              grid-cols-3 
              sm:grid-cols-6 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-6
              gap-x-8 gap-y-4 
              max-w-7xl"
          >
            {companies.map((company) => (
              <img
                key={company.name}
                alt={company.name}
                src={company.src}
                width={company.width}
                height={company.height}
                className="max-h-12 w-full object-contain mx-auto"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobMapAllPage;

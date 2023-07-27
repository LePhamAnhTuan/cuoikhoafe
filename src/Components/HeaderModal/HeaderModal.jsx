import React from "react";

const HeaderModal = () => {
  return (
    <div
      id="defaultModal"
      tabIndex={-1}
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div className="relative w-full max-w-2xl max-h-full">
        {/* Modal content */}
        <div className="relative bg-white  shadow ">
          {/* Modal header */}
          <div className="flex items-start justify-between p-4 ">
            <a href="/">Chỗ ở</a>
            <a href="/">Trải nghiệm</a>
            <a href="/">Trải nghiệm thực tế</a>
          </div>
          {/* <div className="flex items-start justify-between p-4  ">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Terms of Service
            </h3>
          </div> */}
          {/* Modal body */}
          {/* <div className="p-6 space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              With less than a month to go before the European Union enacts new
              consumer privacy laws for its citizens, companies around the world
              are updating their terms of service agreements to comply.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              The European Union’s General Data Protection Regulation (G.D.P.R.)
              goes into effect on May 25 and is meant to ensure a common set of
              data rights in the European Union. It requires organizations to
              notify users as soon as possible of high-risk data breaches that
              could personally affect them.
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default HeaderModal;

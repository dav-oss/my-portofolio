import React, { useEffect, useState } from "react";

const WelcomePopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");

    if (!hasVisited) {
      setShowPopup(true); // show this popup only on first load
      localStorage.setItem("hasVisited", "true");
    }
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-md w-full text-center relative animate-fade-in-up">
        <h2 className="text-2xl font-bold mb-2">Open Thinker</h2>
        <p className="text-gray-700 mb-4">
          You will never know our potential until you make mistakes and be stuck on fixing them.
          Until then, you have the freedom of doing what makes you happy!
          So be happy, you are the master of your fate!

          Ok?
        </p>
        <button
          onClick={closePopup}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default WelcomePopup;

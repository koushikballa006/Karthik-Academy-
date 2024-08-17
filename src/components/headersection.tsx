import React from "react";
import RetroGrid from "../components/magicui/retro-grid"; // Adjust path if needed
import WordPullUp from "../components/magicui/word-pull-up"; // Adjust path if needed
import NumberTicker from "../components/magicui/number-ticker"; // Adjust path if needed

const HeaderSection: React.FC = () => {
  return (
    <header className="relative h-screen w-screen overflow-hidden">
      {/* Background grid effect */}
      <RetroGrid className="absolute inset-0 z-0" angle={65} />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-start h-full w-full px-6 sm:px-10 mt-[-60px]">
        <div className="flex flex-col justify-center items-start h-full">
          <WordPullUp
            words="Karthik Academy"
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-primary leading-tight"
          />
          {/* Additional text with NumberTicker */}
          <div className="mt-4 text-base sm:text-lg md:text-xl font-medium text-primary">
            <p>
              With over <NumberTicker value={10000} />+ successful graduates,
              our academy stands as a beacon of excellence, reflecting our
              commitment to delivering superior education and fostering academic
              success.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;

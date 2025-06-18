import React from "react";
import { ColourfulText } from "@/components/ui/colourful-text";


export function CoverDemo() {
  return (
    <div>
      <h1 className="text-3xl md:text-6xl 
       font-medium
        max-w-7xl 
        mx-auto 
        md:text-center 
        relative
         z-20 
         bg-clip-text
          text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
            {/* <Cover>SubhChintak</Cover><br /> */}
        Go from Idea to Reality in 21 Days with <br />
        <ColourfulText text="SubhChintak" />
      </h1>
    </div>
  );
}

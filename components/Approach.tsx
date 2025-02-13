"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./ui/CanvasReveal";

const Approach = () => {
    const futureCareerPhases = [
        {
          title: "Internship",
          order: "Phase 1",
          description:
            "As an Intern, I'll dive into the basics of full-stack development. This phase will involve learning core technologies, contributing to small projects, and gaining practical experience under the guidance of seasoned developers. My focus will be on understanding the development process and building a solid foundation of skills.",
          animationSpeed: 4.5,
          containerClassName: "bg-blue-500",
        },
        {
          title: "Experience",
          order: "Phase 2",
          description:
            "In the Experience phase, I'll take on a more active role in development projects. I'll work on larger projects, collaborate with cross-functional teams, and apply my skills to solve complex problems. This stage will allow me to refine my expertise in technologies like Next.js and the MERN stack while assuming greater responsibilities and contributing significantly to project success.",
          animationSpeed: 3.5,
          containerClassName: " bg-red-500",
          colors: [
            [240, 126, 94],
            [192, 224, 230],
          ],
          dotSize: 3,
        },
        {
          title: "Senior Developer & Project Manager",
          order: "Phase 3",
          description:
            "As a Senior Developer and Project Manager, I'll lead development teams, oversee project lifecycles, and ensure the successful delivery of complex projects. This phase will involve strategic planning, mentoring junior developers, and managing client relationships. I'll be responsible for high-level decision-making, optimizing workflows, and driving innovation within my projects.",
          animationSpeed: 4.8,
          containerClassName: "bg-purple-600",
          colors: [[99, 102, 241]],
        },
      ];
      
  return (
    <section className=" w-full py-20">
      <h1 className=" heading">
        My Future<span className=" text-purple"> Approach</span>
      </h1>
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center gap-3 ">
        {futureCareerPhases.map(
          (
            {
              title,
              order,
              description,
              animationSpeed,
              containerClassName,
              colors,
              dotSize,
            },
            i
          ) => (
            <Card
              title={title}
              icon={<AceternityIcon order={order} />}
              description={description}
            >
              <CanvasRevealEffect
                animationSpeed={animationSpeed}
                containerClassName={containerClassName}
                colors={colors}
                dotSize={dotSize}
              />
            </Card>
          )
        )}
      </div>
    </section>
  );
};

const Card = ({
  title,
  icon,
  children,
  description,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  description: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 rounded-3xl lg:h-[30rem] relative"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 ">
        <div className="text-center  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white text-3xl text-center opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
        <p className="dark:text-white text-xs md:text-sm text-center opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-normal group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {description}
        </p>
      </div>
    </div>
  );
};

const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div >
      <button className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-3 py-2 text-xl lg:text-2xl  font-bold text-white backdrop-blur-3xl">
          {order}
        </span>
      </button>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

export default Approach;

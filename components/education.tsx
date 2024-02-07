"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import northeasternLogo from "@/public/northeastern-logo.svg";
import Image from "next/image";

export default function Education() {
  const { ref } = useSectionInView("Education");

  return (
    <motion.section
      id="education"
      ref={ref}
      className="mb-20 sm:mb-28 scroll-mt-28 w-full md:w-[700px]"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>My Education</SectionHeading>

      <div className="mt-4 flex gap-6 border border-black/5 rounded-lg pt-4 pb-7 px-5 md:p-10 bg-gray-100 dark:bg-white/10 dark:hover:bg-white/20">
        <div>
          <Image src={northeasternLogo} alt="QUT" width="150" />
        </div>

        <div>
          <p className="text-lg font-medium">
            MS in Information Systems
          </p>
          <p>Northeastern University</p>
          <p className="mt-1">Graduating in 2024</p>
          <p className="my-1">GPA 3.77</p>
          <ul className="list-disc pl-6">
            <li>Industry experience of 4 years</li>
            <li>Looking for roles in Product Management</li>
            <li>Designing and developing quality web pages</li>
            <li>Interned at Philips Healthcare</li>
          </ul>
        </div>
      </div>
    </motion.section>
  );
}

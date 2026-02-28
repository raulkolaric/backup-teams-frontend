"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface WordFadeInProps {
  words: string;
  className?: string;
  delay?: number;
  highlightWords?: string[];
}

export function WordFadeIn({
  words,
  delay = 0.1,
  className,
  highlightWords = [],
}: WordFadeInProps) {
  const _words = words.split(" ");
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: delay,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0, filter: "blur(10px)" },
    show: { y: 0, opacity: 1, filter: "blur(0px)", transition: { duration: 0.5 } },
  };

  return (
    <motion.h2
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10%" }}
      className={cn("font-bold tracking-tight text-foreground", className)}
    >
      {_words.map((word, i) => {
        // match highlighted words without punctuation
        const cleanWord = word.replace(/[.,!?]/g, "");
        const isHighlighted = highlightWords.includes(cleanWord);
        
        return (
          <span key={i}>
            <motion.span
              variants={item}
              className={cn("inline-block", isHighlighted && "text-accent")}
            >
              {word}
            </motion.span>
            {i < _words.length - 1 && " "}
          </span>
        );
      })}
    </motion.h2>
  );
}

import { motion } from "framer-motion";
import React from "react";

const SplitText = ({ children, className }) => {
  const containerVariant = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.03 },
    },
  };

  const childVariant = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  };

  const splitWords = (node) => {
    if (typeof node === "string") {
      return node.split(" ").map((word, i) => (
        <span key={i} className="inline-block whitespace-nowrap">
          {word.split("").map((char, j) => (
            <motion.span
              key={j}
              variants={childVariant}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
          &nbsp;
        </span>
      ));
    }

    if (React.isValidElement(node) && node.props.children) {
      return React.cloneElement(node, {
        children: React.Children.map(node.props.children, splitWords),
      });
    }

    return node;
  };

  return (
    <motion.span
      className={className}
      variants={containerVariant}
      initial="hidden"
      animate="show"
    >
      {React.Children.map(children, (child) => splitWords(child))}
    </motion.span>
  );
};

export default SplitText;

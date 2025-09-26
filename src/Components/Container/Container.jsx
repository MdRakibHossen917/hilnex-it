// src/components/Container.jsx
import React from "react";

/**
 * Simple container component
 * - by default centers content and uses w-9/12
 * - accepts className to extend/override classes
 *
 * Usage:
 * <Container> ...children... </Container>
 * or
 * <Container className="w-full md:w-9/12"> ... </Container>
 */
const Container = ({ children, className = "" }) => {
  // defaultClasses uses w-9/12 and centers horizontally
  const defaultClasses = "w-9/12 mx-auto";

  return (
    <div className={`${defaultClasses} ${className}`.trim()}>
      {children}
    </div>
  );
};

export default Container;

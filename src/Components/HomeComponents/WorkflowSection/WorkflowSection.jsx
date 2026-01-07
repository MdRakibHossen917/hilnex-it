import React from "react";

import WorkflowMobile from "../../WorkflowMobile/WorkflowMobile";
import WorkflowDiagram from "../../WorkflowDiagram/WorkflowDiagram";

const WorkflowSection = () => {
  return (
    <div className="w-full">
      <div className="block md:hidden">
        <WorkflowMobile />
      </div>

      <div className="hidden md:block">
        <WorkflowDiagram />
      </div>
    </div>
  );
};

export default WorkflowSection;

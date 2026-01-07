import React from 'react';
import { FaUsers, FaTasks, FaGlobe, FaClipboardCheck, FaFileContract, FaPaperPlane, FaPen } from 'react-icons/fa';
import './ExactWorkflowDiagram.css';

const workflowSteps = [
    { name: "Management Workflow", icon: FaUsers, cx: 80, cy: 100, labelY: -40, gradient: "g-blue-primary" },
    { name: "Implementation Workflow", icon: FaTasks, cx: 200, cy: 100, labelY: 140, gradient: "g-blue-secondary" },
    { name: "Environment Workflow", icon: FaGlobe, cx: 320, cy: 100, labelY: -40, gradient: "g-green" },
    { name: "Assessment Workflow", icon: FaClipboardCheck, cx: 440, cy: 100, labelY: 140, gradient: "g-purple-light" },
    { name: "Requirements Workflow", icon: FaFileContract, cx: 560, cy: 100, labelY: -40, gradient: "g-purple-dark" },
    { name: "Deployment Workflow", icon: FaPaperPlane, cx: 680, cy: 100, labelY: 140, gradient: "g-magenta" },
    { name: "Design Workflow", icon: FaPen, cx: 800, cy: 100, labelY: -40, gradient: "g-pink" },
];

const WorkflowNode = ({ step }) => (
    <g transform={`translate(${step.cx}, ${step.cy})`} className="workflow-node-group">
        {/* Main circle */}
        <circle cx="0" cy="0" r="32" fill="white" className="node-shadow-border" />
        <circle cx="0" cy="0" r="28" fill={`url(#${step.gradient})`} className="node-fill-circle" />
        
        {/* Icon */}
        <foreignObject x="-15" y="-15" width="30" height="30">
            <div className="svg-icon-container">
                {React.createElement(step.icon, { className: "workflow-svg-icon" })}
            </div>
        </foreignObject>

        {/* Label */}
        <text x="0" y={step.labelY} className="workflow-svg-label">
            {step.name}
        </text>
    </g>
);

const ExactWorkflowDiagram = () => {
    const pathD = `
        M 80 100 
        C 120 80, 160 80, 200 100 
        C 240 120, 280 120, 320 100
        C 360 80, 400 80, 440 100
        C 480 120, 520 120, 560 100
        C 600 80, 640 80, 680 100
        C 720 120, 760 120, 800 100
    `;

    return (
        <div className="exact-workflow-container">
            <div className="header-section">
                <h1 className="main-title">Software Project</h1>
                <h1 className="main-title">Management Workflows</h1>
            </div>
            
            <div className="svg-container">
                <svg viewBox="0 0 880 200" className="exact-workflow-svg">
                    
                    <defs>
                        {/* Path gradient */}
                        <linearGradient id="flowPathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style={{stopColor: "#4f46e5", stopOpacity: 0.9}} />
                            <stop offset="50%" style={{stopColor: "#7c3aed", stopOpacity: 0.9}} />
                            <stop offset="100%" style={{stopColor: "#ec4899", stopOpacity: 0.9}} />
                        </linearGradient>

                        {/* Node gradients */}
                        <linearGradient id="g-blue-primary" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style={{stopColor: "#4f46e5"}} />
                            <stop offset="100%" style={{stopColor: "#6366f1"}} />
                        </linearGradient>
                        <linearGradient id="g-blue-secondary" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style={{stopColor: "#06b6d4"}} />
                            <stop offset="100%" style={{stopColor: "#10b981"}} />
                        </linearGradient>
                        <linearGradient id="g-green" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style={{stopColor: "#10b981"}} />
                            <stop offset="100%" style={{stopColor: "#22c55e"}} />
                        </linearGradient>
                        <linearGradient id="g-purple-light" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style={{stopColor: "#8b5cf6"}} />
                            <stop offset="100%" style={{stopColor: "#a855f7"}} />
                        </linearGradient>
                        <linearGradient id="g-purple-dark" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style={{stopColor: "#7c3aed"}} />
                            <stop offset="100%" style={{stopColor: "#8b5cf6"}} />
                        </linearGradient>
                        <linearGradient id="g-magenta" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style={{stopColor: "#ef4444"}} />
                            <stop offset="100%" style={{stopColor: "#f97316"}} />
                        </linearGradient>
                        <linearGradient id="g-pink" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style={{stopColor: "#ec4899"}} />
                            <stop offset="100%" style={{stopColor: "#f973ab"}} />
                        </linearGradient>
                    </defs>
                    
                    {/* Main Path */}
                    <path 
                        d={pathD} 
                        fill="none" 
                        stroke="url(#flowPathGradient)" 
                        strokeWidth="8"
                        strokeLinecap="round"
                        className="flow-path"
                    />

                    {/* Nodes */}
                    {workflowSteps.map(step => (
                        <WorkflowNode key={step.name} step={step} />
                    ))}

                </svg>
            </div>

            <div className="footer">
                <p className="copyright-tag">Powered by Google AI</p>
            </div>
        </div>
    );
};

export default ExactWorkflowDiagram;
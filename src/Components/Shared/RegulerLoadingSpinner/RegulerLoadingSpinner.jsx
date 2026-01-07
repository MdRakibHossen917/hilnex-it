import './RegulerLoadingSpinner.css';

const RegulerLoadingSpinner = ({ 
  message = "Loading...", 
  size = "md",
  className = "",
  showMessage = true,
  center = true,
  darkBackground = true,
  fullScreen = true
}) => {
  const sizeClasses = {
    sm: "reguler-spinner-sm",
    md: "reguler-spinner-md", 
    lg: "reguler-spinner-lg"
  };

  const containerClass = center ? "reguler-loading-container-center" : "reguler-loading-container";
  const backgroundClass = darkBackground ? "reguler-loading-dark-bg" : "";
  const fullScreenClass = fullScreen ? "reguler-loading-fullscreen" : "";

  return (
    <div className={`${containerClass} ${backgroundClass} ${fullScreenClass} ${className}`}>
      <div className={`reguler-spinner ${sizeClasses[size]}`}></div>
      {showMessage && message && (
        <p className="reguler-loading-message">{message}</p>
      )}
    </div>
  );
};

export default RegulerLoadingSpinner;
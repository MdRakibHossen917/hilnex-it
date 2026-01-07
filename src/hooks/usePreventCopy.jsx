import { useEffect } from 'react';

const usePreventCopy = () => {
  useEffect(() => {
    // Block right-click
    const handleContextMenu = (e) => e.preventDefault();
    // Block text selection
    const handleSelectStart = (e) => e.preventDefault();
    // Block copy/cut
    const handleCopyCut = (e) => e.preventDefault();
    // Block key shortcuts
    const handleKeyDown = (e) => {
      const key = e.key.toLowerCase();
      if (e.ctrlKey && ['c','x','s','u'].includes(key)) e.preventDefault();
      if ((e.ctrlKey && e.shiftKey && key === 'i') || e.key === 'f12') e.preventDefault();
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('selectstart', handleSelectStart);
    document.addEventListener('copy', handleCopyCut);
    document.addEventListener('cut', handleCopyCut);
    document.addEventListener('keydown', handleKeyDown);

    // Cleanup
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('selectstart', handleSelectStart);
      document.removeEventListener('copy', handleCopyCut);
      document.removeEventListener('cut', handleCopyCut);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
};

export default usePreventCopy;

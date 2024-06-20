// components/ResumeButton.tsx
import React, { useState } from 'react';
import ResumeViewer from './ResumeViewer'; // Adjust the import path as necessary
import { Button } from 'src/components/ui/button'; // Adjust the import path as necessary

const ResumeButton: React.FC = () => {
  const [showResume, setShowResume] = useState(false);

  const handleButtonClick = () => {
    setShowResume(true);
  };

  return (
    <>
      <Button variant="outline" onClick={handleButtonClick}>
        View Resume
      </Button>
      {showResume && <ResumeViewer />}
    </>
  );
}

export default ResumeButton;

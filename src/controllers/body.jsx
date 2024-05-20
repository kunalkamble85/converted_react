import React, { useEffect } from 'react';

const BodyController = ({ mockLoader }) => {
  useEffect(() => {
    mockLoader.loadData();
    // Assuming 'main.options' is a route, you can navigate using history or any routing library.
    // Replace this with your actual routing logic.
    // For example, using react-router-dom:
    // history.push('/main/options');
  }, [mockLoader]);

  return <div>{/* Your JSX content */}</div>;
};

export default BodyController;

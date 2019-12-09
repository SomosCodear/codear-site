import { useState, useEffect } from 'react';
import { browser } from '../utils/browser';

export const useEdgeHTML = () => {
  const [isEdgeHTML, setIsEdgeHTML] = useState(false);
  useEffect(() => {
    setIsEdgeHTML(browser.isEdgeHTML);
  }, []);

  return isEdgeHTML;
};

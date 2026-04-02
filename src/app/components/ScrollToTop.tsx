import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import React from 'react';
export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const id = hash?.replace(/^#/, '');
    if (id) {
      const el = document.getElementById(id);
      if (el) {
        requestAnimationFrame(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
        return;
      }
    }
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    });
  }, [pathname, hash]);

  return null;
}
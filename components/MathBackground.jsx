import { useEffect, useRef } from 'react';
import { MathJaxContext, MathJax } from 'better-react-mathjax';

const MathBackground = () => {
  const containerRef = useRef(null);
  
  const formulas = [
    'E=mc^2',
    'a^2 + b^2 = c^2',
    '\\int_0^\\infty e^{-x} dx = 1',
    '\\sum_{n=1}^\\infty \\frac{1}{n^2} = \\frac{\\pi^2}{6}',
    'F = G\\frac{m_1 m_2}{r^2}',
    'e^{i\\pi} + 1 = 0',
    '\\lim_{x\\to 0} \\frac{\\sin x}{x} = 1',
    '\\nabla \\cdot \\vec{E} = \\frac{\\rho}{\\varepsilon_0}'
  ];
  
  useEffect(() => {
    const container = containerRef.current;
    const count = 25;
    
    // Clear existing formulas if any
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    
    // Create floating math items
    for (let i = 0; i < count; i++) {
      const formula = formulas[Math.floor(Math.random() * formulas.length)];
      const span = document.createElement('div');
      span.className = 'math-item absolute text-white/40 pointer-events-none';
      
      // Create a wrapper for MathJax to render inside
      const formulaDiv = document.createElement('div');
      formulaDiv.innerHTML = `\\(${formula}\\)`;
      span.appendChild(formulaDiv);
      
      // Set random positions and animation properties
      const startX = Math.random() * 100;
      const dx = (Math.random() - 0.5) * 50;
      const duration = 12 + Math.random() * 8;
      const delay = -Math.random() * duration;
      const rot = (Math.random() - 0.5) * 60 + 'deg';
      
      span.style.left = `${startX}vw`;
      span.style.animationDuration = `${duration}s`;
      span.style.animationDelay = `${delay}s`;
      span.style.setProperty('--dx', `${dx}vw`);
      span.style.setProperty('--rot', rot);
      
      container.appendChild(span);
    }
  }, []);

  return (
    <MathJaxContext>
      <div 
        ref={containerRef} 
        className="fixed inset-0 overflow-hidden pointer-events-none z-0"
      />
    </MathJaxContext>
  );
};

export default MathBackground;


import React from 'react';
import { ReactSVG } from 'react-svg';

const Logo = ({ className = "w-16 h-16" }: { className?: string }) => {
  return (
    <div className={`${className} relative group`}>
      {/* Effet de lueur statique derrière le logo */}
      <div className="absolute inset-0 bg-primary/10 blur-lg rounded-full"></div>
      
      <ReactSVG
        src="/spirit-bird.svg"
        beforeInjection={(svg) => {
          // Couleur principale argentée métallique avec un effet de dégradé
          svg.style.filter = 'drop-shadow(0 0 8px rgba(0, 229, 255, 0.3))';
          svg.classList.add('text-[#E8EDF0]');
          svg.setAttribute('width', '100%');
          svg.setAttribute('height', '100%');
          
          const paths = svg.querySelectorAll('path');
          paths.forEach(path => {
            path.classList.add('fill-current');
            path.style.transition = 'filter 0.3s ease-in-out';
          });

          // Ajoute un effet de brillance métallique
          const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
          const linearGradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
          linearGradient.setAttribute('id', 'metallic-gradient');
          linearGradient.innerHTML = `
            <stop offset="0%" style="stop-color:#E8EDF0"/>
            <stop offset="50%" style="stop-color:#FFFFFF"/>
            <stop offset="100%" style="stop-color:#E8EDF0"/>
          `;
          defs.appendChild(linearGradient);
          svg.insertBefore(defs, svg.firstChild);

          paths.forEach(path => {
            path.style.fill = 'url(#metallic-gradient)';
          });
        }}
        afterInjection={(svg) => {
          // Effet de survol subtil
          svg.addEventListener('mouseenter', () => {
            const paths = svg.querySelectorAll('path');
            paths.forEach(path => {
              path.style.filter = 'brightness(1.1) drop-shadow(0 0 10px rgba(0, 229, 255, 0.5))';
            });
          });

          svg.addEventListener('mouseleave', () => {
            const paths = svg.querySelectorAll('path');
            paths.forEach(path => {
              path.style.filter = 'drop-shadow(0 0 8px rgba(0, 229, 255, 0.3))';
            });
          });
        }}
        className="relative z-10 transform group-hover:scale-102 transition-transform duration-300"
      />
    </div>
  );
};

export default Logo;
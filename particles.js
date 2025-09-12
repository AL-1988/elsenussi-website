document.addEventListener('DOMContentLoaded', () => {
  // Create particles container
  const particlesContainer = document.createElement('div');
  particlesContainer.className = 'particles';
  document.body.appendChild(particlesContainer);

  // Create particles
  const particleCount = 30;
  const colors = ['rgba(0, 170, 255, 0.8)', 'rgba(100, 255, 255, 0.6)', 'rgba(255, 255, 255, 0.4)'];

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random size between 2px and 6px
    const size = Math.random() * 4 + 2;
    
    // Random position
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    
    // Random animation duration between 10s and 25s
    const duration = Math.random() * 15 + 10;
    
    // Random delay
    const delay = Math.random() * -20;
    
    // Random color
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    // Apply styles
    Object.assign(particle.style, {
      width: `${size}px`,
      height: `${size}px`,
      left: `${posX}%`,
      top: `${posY}%`,
      background: color,
      animationDuration: `${duration}s`,
      animationDelay: `${delay}s`,
      opacity: Math.random() * 0.5 + 0.1,
      transform: `scale(${Math.random()})`
    });
    
    // Make some particles move in different patterns
    if (i % 3 === 0) {
      particle.style.animationName = 'floatParticleHorizontal';
    } else if (i % 5 === 0) {
      particle.style.animationName = 'floatParticleCircle';
    }
    
    particlesContainer.appendChild(particle);
  }
});

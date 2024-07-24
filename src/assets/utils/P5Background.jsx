import React, { useRef, useEffect } from 'react';
import p5 from 'p5';

const P5Background = () => {
  const p5ContainerRef = useRef();

  useEffect(() => {
    const sketch = (p) => {
      let yoff = 0;
      const lines = 11; // Reducido de 50 a 20
      const lineSpacing = 30; // Aumentado el espacio entre puntos

      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
        p.noFill();
        p.stroke(0, 40); // Reducida la opacidad para un efecto más sutil
        p.strokeWeight(1.5); // Aumentado el grosor de la línea para mejor visibilidad
      };

      p.draw = () => {
        p.background(255);
        
        yoff = p.frameCount * 0.004; // Movimiento más lento
        for (let i = 0; i < lines; i++) {
          p.beginShape();
          let xoff = 0;
          for (let x = 0; x <= p.width; x += lineSpacing) {
            let y = p.map(p.noise(xoff, yoff), 0, 1, 0, p.height);
            p.curveVertex(x, y + i * (p.height / lines));
            xoff += 0.1;
          }
          p.endShape();
          yoff += 0.1;
        }
      };

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
      };

      p.mouseMoved = () => {
        yoff += (p.mouseY - p.pmouseY) * 0.005; // Interacción más sutil
      };
    };

    const p5Instance = new p5(sketch, p5ContainerRef.current);

    return () => {
      p5Instance.remove();
    };
  }, []);

  return (
    <div
      ref={p5ContainerRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
      }}
    />
  );
};

export default P5Background;
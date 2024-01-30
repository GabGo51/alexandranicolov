import React, { useEffect } from "react";
import styled from "styled-components";

const Container = styled.span`
  display: block;
`;
//imma be real this is stolen and modified 
//component that creates the fade away fairy dust following the cursor
const FairyDust = () => {
  const possibleColors = ["#cdb4db", "#ffc8dd", "#ffafcc", "#bde0fe", "#a2d2ff"];
  let width = window.innerWidth;
  let height = window.innerHeight;
  const cursor = { x: width/2, y: height/2 };
  const particles = [];

  useEffect(() => {
    
    const init = () => {
      bindEvents();
      loop();
    };

    const bindEvents = () => {
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("touchmove", onTouchMove);
      document.addEventListener("touchstart", onTouchMove);
      window.addEventListener("resize", onWindowResize);
    };

    const onWindowResize = (e) => {
      width = window.innerWidth;
      height = window.innerHeight;
    };

    const onTouchMove = (e) => {
      if (e.touches.length > 0) {
        for (let i = 0; i < e.touches.length; i++) {
          addParticle(
            e.touches[i].clientX,
            e.touches[i].clientY,
            possibleColors[Math.floor(Math.random() * possibleColors.length)]
          );
        }
      }
    };

    const onMouseMove = (e) => {
      cursor.x = e.clientX;
      cursor.y = e.clientY + window.scrollY;;
      addParticle(
        cursor.x,
        cursor.y,
        possibleColors[Math.floor(Math.random() * possibleColors.length)]
      );
    };

    const addParticle = (x, y, color) => {
      const probability = 0.35; 

  if (Math.random() < probability) {
    const particle = new Particle();
    particle.init(x, y, color);
    particles.push(particle);
  }
    };

    const updateParticles = () => {
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
      }
      for (let i = particles.length - 1; i >= 0; i--) {
        if (particles[i].lifeSpan < 0) {
          particles[i].die();
          particles.splice(i, 1);
        }
      }
    };

    const loop = () => {
      requestAnimationFrame(loop);
      updateParticles();
    };
    

    const applyProperties = (target, properties) => {
      for (let key in properties) {
        target.style[key] = properties[key];
      }
    };

    class Particle {
      constructor() {
        this.character = "*";
        this.lifeSpan = 120;
        this.initialStyles = {
          position: "absolute",
          display: "block",
          pointerEvents: "none",
          zIndex: "10000000",
          fontSize: "16px",
          willChange: "transform",
          
        };
      }

      init(x, y, color) {
        this.velocity = {
          x: (Math.random() < 0.5 ? -1 : 1) * (Math.random() / 2),
          y: 1,
        };

        this.position = { x: x - 10, y: y - 20 };
        this.initialStyles.color = color;
        this.size = Math.floor(Math.random() * (25 - 10 + 1)) + 10;
        this.element = document.createElement("span");
        this.element.innerHTML = this.character;
        applyProperties(this.element, {
          ...this.initialStyles,
          fontSize: `${this.size}px`, // Set the font size based on the randomized size
        });
        this.update();

        document.querySelector(".container").appendChild(this.element);
      }

      update() {
        this.position.x += this.velocity.x /1.5;
        this.position.y += this.velocity.y /1.5;
        this.lifeSpan--;

        const windowWidth = window.innerWidth;
        const xOffsetPercentage = -48; // Adjust this percentage based on your preference
        const xOffset = (windowWidth * xOffsetPercentage) / 98.7;
    
        this.element.style.transform = `translate3d(${this.position.x + xOffset}px, ${this.position.y+15}px, 0) scale(${this.lifeSpan / 120})`;
      }
      

      die() {
        this.element.parentNode.removeChild(this.element);
      }
    }

    init();

    // Cleanup function
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("touchmove", onTouchMove);
      document.removeEventListener("touchstart", onTouchMove);
      window.removeEventListener("resize", onWindowResize);
    };
  }, []);

  return (
    
      <Container className="container"></Container>
    
  );
};

export default FairyDust;

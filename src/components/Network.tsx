"use client";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
export default function NetworkParticles() {
  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine);
  }, []);
  return (
    <Particles
      id="network-bg"
      init={particlesInit}
      className="absolute inset-0"
      options={{
        background: {
          color: { value: "transparent" }, // keep section background
        },
        fpsLimit: 60,
        particles: {
          number: { value: 80, density: { enable: true, area: 1200 } },
          color: { value: "#0271B1" },
          links: {
            enable: true,
            color: "#0271B1",
            distance: 150,
            opacity: 0.2,
            width: 1,
          },
          collisions: { enable: false },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            outModes: "out",
          },
          size: { value: { min: 1, max: 3 } },
          opacity: {
            value: 0.5,
            random: true,
            animation: { enable: true, speed: 1, minimumValue: 0.1 },
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "grab" },
            onClick: { enable: true, mode: "push" },
          },
          modes: {
            grab: { distance: 200, links: { opacity: 0.5 } },
            push: { quantity: 3 },
          },
        },
        detectRetina: true,
      }}
    />
  );
} 




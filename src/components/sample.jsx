import { useEffect, useRef } from 'react';
import FluidSimulation from 'fluid-simulation-react';

const MyComponent = () => {
  const fluidRef = useRef(null);

  useEffect(() => {
    if (fluidRef.current) {
      fluidRef.current.mapBehaviors({
        sim_resolution: 128,
        dye_resolution: 512,
        paused: false,
        embedded_dither: true,
        dissipation: 0.97,
        velocity: 0.98,
        pressure: 10.9,
        pressure_iteration: 20,
        curl: 60,
        emitter_size: 0.5,
        render_shaders: true,
        multi_color: true,
        render_bloom: false,
        background_color: { r: 15, g: 15, b: 15 },
        transparent: false,
      });
    }
  }, []);


 // Enhanced Default configuration for higher resolution and rendering
const enhancedDefaultConfig = {
    textureDownsample: 10,  // Keeping it low for better performance, change to lower values for higher resolution
    densityDissipation: 0.97,
    velocityDissipation: 0.98,
    pressureDissipation: 0.9,
    pressureIterations: 20,
    curl: 10,
    splatRadius: 0.0040,
    sim_resolution: 256,  // Increased simulation resolution
    dye_resolution: 1024,  // Increased dye resolution for better color detail
};

// Custom configuration with higher rendering settings
const customConfig = {
    ...enhancedDefaultConfig,
    textureDownsample: 50,  // Lowering downsample for higher quality textures
    densityDissipation: 0.97,
    paused: false,  // Ensuring the simulation runs
    embedded_dither: true,  // Dithering for smoother gradients
    emitter_size: 0.5,  // Size of the fluid emitter
    render_shaders: true,  // Enabling shaders for better visual effects
    multi_color: true,  // Allowing multiple colors in the simulation
    render_bloom: true,  // Enabling bloom for glowing effects
    background_color: { r: 15, g: 15, b: 15 },  // Setting background color
    transparent: true,  // Allowing transparency in the simulation
};

// Rainbow colors array (same as before)
const rainbowColors = [
    [1, 0, 0], // Red
    [1, 0.5, 0], // Orange
    [1, 1, 0], // Yellow
    [0, 1, 0], // Green
    [0, 0, 1], // Blue
    [0.5, 0, 0.5], // Indigo
    [0.8, 0.2, 0.8], // Violet
];

// Generate a random color within a colorful range
const randomColor = [
    Math.random(), // Random Red (0-1)
    Math.random(), // Random Green (0-1)
    Math.random(), // Random Blue (0-1)
];

// Custom colors array with rainbow colors and a random color
const customColors = [
    ...rainbowColors, // Spread the rainbow colors
    randomColor, // Adding a random color
];


  return <FluidSimulation ref={fluidRef} config={customConfig} color={customColors} className="fluid-simulation"/>;
};

export default MyComponent; 
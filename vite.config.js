import { defineConfig } from "vite";

export default defineConfig({
  server: {
    host: "0.0.0.0", // Allows external access
    port: 5173, // Change if using a different port
    allowedHosts: ["https://b997-39-46-180-236.ngrok-free.app/"], // Add your Ngrok domain here
  },
});

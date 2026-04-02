module.exports = {
  apps: [
    {
      name: "jellystat",
      script: "backend/server.js",
      interpreter: "bun",
      cwd: "/home/arnaud/dev/jellystat-next",
      env: {
        NODE_ENV: "production",
      },
      watch: false,
      max_memory_restart: "512M",
      restart_delay: 5000,
    },
  ],
};

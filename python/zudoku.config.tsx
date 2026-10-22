import type { ZudokuConfig } from "zudoku";

const config: ZudokuConfig = {
  // GitHub Pages: https://staxaf.github.io/task-manager-python-sdk/
  basePath: "/task-manager-python-sdk",
  site: {
    title: "Task Management API",
    logo: {
      src: { light: "/logo-light.svg", dark: "/logo-dark.svg" },
      alt: "Task Management API",
      width: "130px",
    },
  },
  navigation: [
    {
      type: "category",
      label: "Documentation",
      items: [
        {
          type: "doc",
          file: "installation",
          label: "Installation",
        },
        {
          type: "doc",
          file: "authorization",
          label: "Authorization",
        },
        {
          type: "doc",
          file: "about",
          label: "About",
        },
      ],
    },
    {
      type: "doc",
      file: "about",
      label: "About",
    },
    {
      type: "link",
      to: "/api",
      label: "API Reference",
    },
  ],
  redirects: [{ from: "/", to: "/installation" }],
  apis: [
    {
      type: "file",
      input: "../openapi.yaml",
      path: "/api",
    },
  ],
  docs: {
    files: "/pages/**/*.{md,mdx}",
  },
};

export default config;

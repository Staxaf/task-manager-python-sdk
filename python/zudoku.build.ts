import type { ZudokuBuildConfig } from "zudoku";

const LOCAL_API_URL = "http://localhost:3000";

type Server = { url: string; description: string };

/**
 * Absolute server URLs for the OpenAPI playground only.
 * Static docs on GitHub Pages do not need a live API.
 * - Default: http://localhost:3000
 * - Optional: ZUDOKU_PUBLIC_API_URL for a real deployed API
 */
async function addServers({ schema }: { schema: Record<string, unknown> }) {
  const deployed = process.env.ZUDOKU_PUBLIC_API_URL?.replace(/\/$/, "");
  const servers: Server[] = [
    { url: LOCAL_API_URL, description: "Local development" },
  ];

  if (deployed && deployed !== LOCAL_API_URL) {
    servers.unshift({ url: deployed, description: "Deployed API" });
  } else if (!deployed) {
    servers.push({
      url: "https://api.example.com",
      description: "Deployed API (set ZUDOKU_PUBLIC_API_URL)",
    });
  }

  return {
    ...schema,
    servers,
  };
}

const buildConfig: ZudokuBuildConfig = {
  processors: [addServers],
};

export default buildConfig;

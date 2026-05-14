/**
 * Centralized API configuration for the frontend.
 * This ensures that the API URL is always consistent and provides
 * a clear error if the environment variable is missing.
 */

const getApiUrl = () => {
  const envUrl = import.meta.env.VITE_API_URL;
  
  if (!envUrl) {
    console.error(
      "❌ VITE_API_URL is not defined! \n" +
      "Please ensure you have set VITE_API_URL in your environment variables. \n" +
      "On Vercel: Settings > Environment Variables > Add VITE_API_URL"
    );
    // Fallback to localhost if undefined (for development safety)
    return "http://localhost:3000/user-api";
  }

  // Remove trailing slash if present to prevent double-slashes in fetch calls
  return envUrl.endsWith('/') ? envUrl.slice(0, -1) : envUrl;
};

export const API_URL = getApiUrl();

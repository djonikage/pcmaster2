import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Для GitHub Pages используйте base: '/your-repo-name/'
  // Для кастомного домена используйте base: '/'
  const isGitHubPages = process.env.GITHUB_PAGES === 'true';
  const repoName = process.env.REPO_NAME || '';
  
  return {
    base: isGitHubPages && repoName ? `/${repoName}/` : '/',
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [
      react(),
      mode === 'development' &&
      componentTagger(),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom'],
            ui: ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu']
          }
        }
      },
      sourcemap: false,
      target: 'esnext',
    },
  };
});

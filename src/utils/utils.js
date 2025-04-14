export function envData() {
    return {
        environment: import.meta.env.VITE_ENVIRONMENT,
        project_url: import.meta.env.VITE_PROJECT_URL
    };
}
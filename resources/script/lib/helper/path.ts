export const URLGenerator = (relativePath: string) => {
    return `${import.meta.env.VITE_APP_URL}/${relativePath}`
}
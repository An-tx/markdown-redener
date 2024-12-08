// globals.d.ts
export {}

declare global {
    interface Window {
        versions: {
            chrome: () => string;
            node: () => string;
            electron: () => string;
        };
    }
}
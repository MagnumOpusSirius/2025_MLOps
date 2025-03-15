export interface AppConfig {
    apiUrl: string;
}

const getConfig = (): AppConfig => {
    //@ts-ignore
    return window.__config as AppConfig;
};

export default getConfig;

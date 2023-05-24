interface AuthConfig {
    appAk: string;
    userToken: string;
    timestamp: string;
    sign: string;
}

interface APIResponse {
    code: number;
    data: any;
    msg: string;
    success: boolean;
}

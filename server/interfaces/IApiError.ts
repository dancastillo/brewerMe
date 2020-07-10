export interface IApiError {
    error: boolean|undefined;
    error_msg: string|undefined;
    status: number|undefined;
    url: string|undefined;
    request?: string|undefined;
    message?: string|undefined;
    valid_state?: {
        name?: string;
        url?: string;
        description?: string;
        short_description?: string;
        facebook_url?: string;
        twitter_url?: string;
        instagram_url?: string;
    },
    valid_msg?: {
        name?: string;
        url?: string;
        description?: string;
        short_description?: string;
        facebook_url?: string;
        twitter_url?: string;
        instagram_url?: string;
    }
}

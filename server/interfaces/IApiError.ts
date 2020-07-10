export interface IApiError {
    error: boolean;
    error_msg: string;
    status: number;
    url: string;
    request?: any;
    message?: string|any;
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

export interface ILocationResponse {
    object?: string;
    url?: string;
    has_more?: boolean;
    next_cursor?: string;
    data: [];
    distance?: number;
    units?: string;
}

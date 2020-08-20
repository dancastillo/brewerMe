export interface IBreweries {
    object: string;
    url: string;
    has_more: boolean;
    next_cursor: string;
    data: IBreweryData[];
}

export interface IBreweryData {
    id: string;
    name: string;
}

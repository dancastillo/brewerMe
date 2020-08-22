export interface IBreweries {
    object: string;
    url: string;
    has_more: boolean;
    next_cursor: string;
    data: Breweries[];
}

interface Breweries {
    id: string;
    name: string;
}

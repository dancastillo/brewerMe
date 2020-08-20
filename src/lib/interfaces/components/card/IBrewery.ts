export interface IBrewery {
    id: string;
    object: string;
    name: string;
    description: string;
    short_description: string;
    url: string;
    cb_verified: boolean;
    brewer_verified: boolean;
    facebook_url: string;
    twitter_url: string;
    instagram_url: string;
}

export interface IBreweryCard {
    brewery: IBrewery;
}

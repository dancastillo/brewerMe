import React from "react";
import SocialMediaIcons from "../shared/sociaMediaIcons";
import UrlButton from "../shared/urlButton";
import { ILocationResponse } from "@interfaces/components/card/ILocationResponse";

export default function LocationCard({ location, distance, brewer }: ILocationResponse) {
    const btnText = "Brewery Website";

    return (
        <>
            <div className="card text-center card-div border-bottom-0 border-right-5">
                <h5 className="card-header">{location.name}</h5>
                <div className="card-body">
                    <h5 className="card-title">{brewer.short_description}</h5>
                    <p className="card-text">
                        {location.address.city}, {location.address.state_long}
                    </p>
                    <p className="card-text">
                        Distance: {distance.distance} {distance.units}
                    </p>
                    <SocialMediaIcons
                        facebook_url={brewer.facebook_url}
                        instagram_url={brewer.instagram_url}
                        twitter_url={brewer.twitter_url}
                    />
                    <UrlButton btnText={btnText} url={brewer.url}/>
                </div>
                <hr/>
            </div>
        </>
    );
}

import React from "react";

import SocialMediaIcons from "../shared/sociaMediaIcons";
import UrlButton from "../shared/urlButton";
import BackButton from "../../back-button";
import { IBeerCard } from "@interfaces/components/card/IBeer";

export default function BeerCard({ beer }: IBeerCard) {
    const { brewer } = beer;
    const { facebook_url, instagram_url, twitter_url } = brewer;
    const btnText = "Brewery Website";

    return (
        <>
            <BackButton />
            <div className="card text-center card-div border-bottom-0 border-right-5">
            <h5 className="card-header">{beer.name}</h5>
            <div className="card-body">
                <h5 className="card-title">{brewer.name}</h5>
                <p className="card-text">
                    {beer.description}
                </p>
                <p className="card-text">{beer.style}</p>
                <p className="card-text">{beer.abv}% ABV</p>
                <SocialMediaIcons
                    facebook_url={facebook_url}
                    instagram_url={instagram_url}
                    twitter_url={twitter_url}
                />
                <UrlButton btnText={btnText} url={brewer.url}/>
            </div>
            <style jsx>{`
                .card-div {
                    min-width: 30%;
                    min-height: 40%;
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                    box-shadow: 0px 2px 18px 0px rgba(0,0,0,0.5);
                }
            `}</style>
        </div>
        </>
    );
}

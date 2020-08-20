import React from "react";

export default function Icons({ url, platform }: { url: string, platform: string }) {
    const imgUrl = `/static/images/social-media/${platform}.png`;
    return (
        <>
            {url !== null && url !== ""
                ? <a
                    href={url}
                    target="_blank"
                    className="p-3"
                    rel="noreferrer"
                >
                    <img src={imgUrl} alt={platform} width="50px"/>
                </a>
                : <></>
            }
        </>
    );
}

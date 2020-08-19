import React from "react";

export default function Icons({ url, platform }) {
    const imgUrl = `/static/images/social-media/${platform}.png`;
    return (
        <>
            {url !== null && url !== ""
                ? <a
                    href={url}
                    target="_blank"
                    className="p-3"
                >
                    <img src={imgUrl} alt={platform} width="50px"/>
                </a>
                : <></>
            }
        </>
    );
}

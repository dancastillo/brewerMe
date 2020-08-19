import React from "react";

export default function UrlButton({ btnText, url }) {
    return (
        <>
            {url !== "" || url !== null
                ? <a
                    href={url}
                    className="btn btn-primary m-3"
                    target="_blank"
                >
                    {btnText}
                </a>
                : <></>
            }
        </>
    );
}

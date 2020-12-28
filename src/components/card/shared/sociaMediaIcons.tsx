import React from 'react';
import Icons from './icons';
import { ISocialMediaLinks } from '@interfaces/components/card/ISocialMediaLinks';

export default function SocialMediaIcons({ facebook_url, instagram_url, twitter_url }: ISocialMediaLinks) {
    return (
        <section className='p-3'>
            <Icons url={facebook_url} platform='facebook' />
            <Icons url={instagram_url} platform='instagram' />
            <Icons url={twitter_url} platform='twitter' />
        </section>
    );

}

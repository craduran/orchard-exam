import React from 'react';
import { ImageArticleProps } from '../shared/ImageArticle';

interface Props {
    title: string;
    description: string;
    readMoreLink?: string;
    image: JSX.Element|JSX.Element[];
}

export const ArticlePreview: React.FC<Props> = ({title, description, readMoreLink, image} : Props) => {
    return (
        <section className='px-3'>
            {/* <img className={`w-full border-b-4 border-b-darkred`} src={thumbnailSrc} alt={thumbnailAlt} /> */}
            {image}            
            <h4 className={`pt-8 pb-4 font-semibold text-lg`}>{title}</h4>
            <p className={`pb-8 font-light`}>
                {description}
            </p>
            <a href={readMoreLink ?? '#'} className={`border-b py-2 font-semibold border-b-darkred`}>READ MORE</a>
        </section>
    );
}
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
            {image}            
            <h4 className={`pt-8 pb-4 font-semibold text-base font-primary`}>{title}</h4>
            <p className={`pb-6 font-light font-primary leading-7`}>
                {description}
            </p>
            <a onClick={() => {console.log(readMoreLink)}} className={`cursor-pointer border-b py-2 font-semibold border-b-darkred font-primary`}>READ MORE</a>
        </section>
    );
}
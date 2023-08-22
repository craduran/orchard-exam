import React from 'react';

interface Props {
    title: string;
    thumbnailSrc: string;
    thumbnailAlt: string;
    description: string;
    readMoreLink?: string;
}

export const ArticlePreview: React.FC<Props> = ({title, thumbnailAlt, thumbnailSrc, description, readMoreLink} : Props) => {
    return (
        <section className='px-3'>
            <img className={`w-full border-b-4 border-b-red`} src={thumbnailSrc} alt={thumbnailAlt} />
            <h4 className={`pt-8 pb-4 font-semibold text-lg`}>{title}</h4>
            <p className={`pb-8 font-light`}>
                {description}
            </p>
            <a href={readMoreLink ?? '#'} className={`border-b py-2 font-semibold border-b-red`}>READ MORE</a>
        </section>
    );
}
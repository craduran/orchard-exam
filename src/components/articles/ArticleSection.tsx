import React from 'react';
import { ArticlePreview } from './ArticlePreview';
import SummerLunchPreview from '../../images/component-02/Image-01.jpg';
import ChristmasEvePreview from '../../images/component-02/Image-02.jpg';
import CookbookPreview from '../../images/component-02/Image-03.jpg';

export const ArticleSection = () => {
    return (
        <section className='pb-40 pt-24'>
            <h2 className='text-center text-5xl'>ALL THE LATEST FROM AEG</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 px-0 lg:px-2 pt-14'>
                <ArticlePreview
                    title={`Summer Lunch Menu By Mark Best`}
                    thumbnailSrc={SummerLunchPreview}
                    thumbnailAlt={`summer lunch menu by mark's best`}
                    description={`AEG ambassador Mark Best's summer eats are guaranteed to help you make the most of the warmer weather and entertaining at home.`}
                />
                <ArticlePreview
                    title={`A Traditional Christmas Eve, Mark Best Style`}
                    thumbnailSrc={ChristmasEvePreview}
                    thumbnailAlt={`test alt`}
                    description={`One of Australia's best chefs and AEG ambassador, Mark Best, shares his favourite Christmas Eve menu which is sure to impress your guests.`}
                />
                <ArticlePreview
                    title={`Taking Taste Further`}
                    thumbnailSrc={CookbookPreview}
                    thumbnailAlt={`test alt`}
                    description={`This exclusive cookbook gives you all the know-how you need. We've designed it to make sure you get the most out of our products - and the best out of your food.`}
                />
            </div>
        </section>
    );
}
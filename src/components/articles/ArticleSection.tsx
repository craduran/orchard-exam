import React from 'react';
import { ArticlePreview } from './ArticlePreview';
import SummerLunchPreview from '../../images/component-02/Image-01.jpg';
import ChristmasEvePreview from '../../images/component-02/Image-02.jpg';
import CookbookPreview from '../../images/component-02/Image-03.jpg';
import SummerLunchFull from '../../images/component-02/Image-01@2x.jpg';
import ChristmasEveFull from '../../images/component-02/Image-02@2x.jpg';
import CookbookFull from '../../images/component-02/Image-03@2x.jpg';
import { ImageArticle } from '../shared/ImageArticle';

export const ArticleSection = () => {
    return (
        <section className='pb-40 pt-24'>
            <h2 className='text-center text-5xl'>ALL THE LATEST FROM AEG</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 px-0 lg:px-2 pt-14'>
                <ArticlePreview
                    title={`Summer Lunch Menu By Mark Best`}
                    image={<ImageArticle
                        alt={`summer lunch menu by mark's best`}
                        className={`w-full border-b-4 border-b-darkred`}
                        fullImage={SummerLunchFull}
                        previewImage={SummerLunchPreview}
                    />}
                    description={`AEG ambassador Mark Best's summer eats are guaranteed to help you make the most of the warmer weather and entertaining at home.`}
                />
                <ArticlePreview
                    title={`A Traditional Christmas Eve, Mark Best Style`}
                    image={<ImageArticle
                        alt={`christmas eve dinner`}
                        className={`w-full border-b-4 border-b-darkred`}
                        fullImage={ChristmasEveFull}
                        previewImage={ChristmasEvePreview}
                    />}
                    description={`One of Australia's best chefs and AEG ambassador, Mark Best, shares his favourite Christmas Eve menu which is sure to impress your guests.`}
                />
                <ArticlePreview
                    title={`Taking Taste Further`}
                    image={<ImageArticle
                        alt={`cookbook`}
                        className={`w-full border-b-4 border-b-darkred`}
                        fullImage={CookbookFull}
                        previewImage={CookbookPreview}
                    />}
                    description={`This exclusive cookbook gives you all the know-how you need. We've designed it to make sure you get the most out of our products - and the best out of your food.`}
                />
            </div>
        </section>
    );
}
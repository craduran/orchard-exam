import React from 'react';
import FamilyImg from '../../images/component-01/Image-01.jpg';
import FamilyImgFull from '../../images/component-01/Image-01@2x.jpg';
import VegetableImg from '../../images/component-01/Image-02.jpg';
import VegetableImgFull from '../../images/component-01/Image-02@2x.jpg';
import AsparagusImg from '../../images/component-01/Image-03.jpg';
import AsparagusImgFull from '../../images/component-01/Image-03@2x.jpg';
import { ImageArticle } from '../shared/ImageArticle';

export const MainArticle: React.FC = () => {
    return (
        <section className='py-28'>
            <div className='grid grid-cols-1 md:grid-cols-3 px-0 lg:px-2 py-14'>
                <div className='px-3'>
                    <ImageArticle alt='Family Image' fullImage={FamilyImgFull} className='w-full py-3' previewImage={FamilyImg} />
                </div>
                <div className='px-3'>
                    <ImageArticle alt='Vegetables, onions, fruits' fullImage={VegetableImgFull} className='w-full py-3' previewImage={VegetableImg} />
                    <ImageArticle alt='Asparagus Image' fullImage={AsparagusImgFull} className='w-full py-3' previewImage={AsparagusImg} />
                </div>
                <div className='px-3 py-3'>
                    <h1 className='text-3xl border-b border-b-white pb-4'>ANSWER YOUR BODY'S NEEDS</h1>
                    <p className='pt-8'>
                        The way ingredients are sourced affects the way we nourish our bodies. Author Mark Schatzer
                        believes our body naturally develops an appetite for the foods and nutrients it needs
                        to be healthy, but the artificial flavorings are getting in the way. This can be reversed
                        by focusing on high-quality ingredients and being mindful as you appetite guides you to
                        consume according to your body's needs.
                    </p>
                    <h2 className='text-darkred pt-16'>BE MINDFUL</h2>
                    <p className='pt-4'>
                        Sourcing local or organic food is a good way to start being more mindful about what you're cooking and eating.
                    </p>
                </div>
            </div>
        </section>
    )
}
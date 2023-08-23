import React from 'react';
import BigPic from '../../images/component-01/Image-01@2x.jpg';
import FamilyPic from '../../images/component-01/Image-01.jpg';

export interface ImageArticleProps {
    previewImage: string;
    alt: string;
    className: string;
    fullImage: string;
}

export const ImageArticle: React.FC<ImageArticleProps> = ({previewImage, alt, className, fullImage}: ImageArticleProps) => {
    const [isShown, setIsShown] = React.useState<boolean>(false);
    const [showFull, setShowFull] = React.useState<boolean>(false);
    return (
        <>
            <img src={previewImage} alt={alt} className={className} onClick={() => {setIsShown(true)}}/>
            {isShown ?
                <div className={`relative z-10`} aria-labelledby="modal-title" role="dialog" aria-modal="true">
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={() => {setIsShown(false)}}></div>

                    <div className="fixed inset-0 z-10 overflow-y-auto" onClick={() => {setIsShown(false)}}>
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                
                                <img src={previewImage} onClick={(e) => {e.stopPropagation();}} className={`${showFull ? 'hidden': ''} w-full`}/> 
                                <img src={fullImage} className={`${showFull ? '': 'hidden'}`} onClick={(e) => {e.stopPropagation();}} onLoad={() => {setShowFull(true)}}/>
                            </div>
                        </div>
                    </div>
                </div> : <></>
            }
        </>
    )
}
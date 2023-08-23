import React from 'react';
import CloseIcon from '../../images/close.svg';

export interface ImageArticleProps {
    previewImage: string;
    alt: string;
    className: string;
    fullImage: string;
}

export const ImageArticle: React.FC<ImageArticleProps> = ({ previewImage, alt, className, fullImage }: ImageArticleProps) => {
    const [isShown, setIsShown] = React.useState<boolean>(false);
    const [showFull, setShowFull] = React.useState<boolean>(false);

    const closeModal = () => {
        setIsShown(false);
    }
    const openModal = () => {
        setIsShown(true);
    }

    return (
        <>
            <img src={previewImage} alt={alt} className={className} onClick={openModal} />
            <div className={`${isShown ? '' : '-translate-y-full'} transition-transform duration-500  w-full h-screen fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto bg-black bg-opacity-75`} aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div className={`fixed inset-0 ${isShown ? 'opacity-100 scale-100' : 'opacity-0 scale-50'} transition-transform translate-y-fullduration-300 `} onClick={closeModal}></div>
                <div className="fixed inset-0 z-10 overflow-y-auto" onClick={closeModal}>
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0  flex-col md:flex-row">
                        <div className='relative' onClick={(e) => { e.stopPropagation(); }} >
                            <button className='absolute text-white bg-none -right-2 -top-4' onClick={closeModal}><img src={CloseIcon} alt={'close-icon'} /></button>
                            <div className={`transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg ${showFull ? 'scale-100' : 'scale-75 '}duration-300`}>
                                <img src={previewImage} className={`${showFull ? 'hidden' : ''} w-full`} />
                                <img src={fullImage} className={`${showFull ? '' : 'hidden'}`} onLoad={() => { setShowFull(true) }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
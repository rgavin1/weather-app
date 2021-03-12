import React from 'react';

const PhotoList = ({ images }) => {
    return  <ul className="imagewrapper" >
                { Object.values(images).map((item, id) => { return <li className="image" key={id} style={{backgroundImage: `url(${item.urls.regular})` }}></li> }) }
            </ul>
}

const Photos = ({ images }) => {
    if(images){
        return <>
                <div className="title">Photos</div>
                <PhotoList images={images} />
               </>
    } else {
        return '';
    }
};

export default Photos;
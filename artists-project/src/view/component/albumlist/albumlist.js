import React from 'react';

import './css/albumlist.css';

const AlbumList = (props) => {

    const showList = ({albumList}) => {
        if(albumList){
            return albumList.map((item, index) => {
                return(
                    <img key={index} src={`/images/albums/${item.cover}.jpg`}  alt="albumList"/>
                );
            });
        }
    };

    return(
        <div className="album_list" >
            {showList(props)}
        </div>
    );
}

export default AlbumList;
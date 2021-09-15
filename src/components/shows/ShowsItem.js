import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import Show from './Show'
import noImg from "../../assets/images/no-img.png"


const ShowsItem = ({show}) => {


    return (
        <Link to={`/shows/${show.id}`} className="show-item">
            <div className="show-item_img">
                <img src={show.image && show.image.medium ? show.image.medium : noImg} alt={show.name ? show.name : "show image"} />
            </div>
            <div className="show-item_img-hover">
            <div className="rating">
                {show.rating && show.rating.average && (
                    <>
                        <span>⭐</span> {show.rating.average}
                    </>
                )}
                </div>
                <h3 className="title">{show.name ? show.name : "..."}</h3>
            </div>
        </Link>
    )
}

export default ShowsItem

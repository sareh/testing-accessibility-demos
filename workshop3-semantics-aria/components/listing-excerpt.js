import React from "react"
import PropTypes from "prop-types"
import { Link } from "@reach/router"

import Icon from 'workshop3-components/icon'
import './styles/listing.scss'

const ListingExcerpt = ({id, data, image}) => {
    const { listingName = '', location = '', listingType = '', excerpt = '', amenities = [] } = data
    return (
        <article className="listing-excerpt">
            <img src={image} alt="" />
            <div>
                <header>
                    <div>
                        <h2>{listingName}</h2>
                        <p>{location} • {listingType}</p>
                    </div>
                    <ul className="amenity-icons">
                        {amenities.map((amenity, index) => {
                            return <li key={index}>
                                <Icon name={amenity} />
                            </li>
                        })}
                    </ul>
                </header>
                <div>
                    <p>{excerpt}</p>
                    <p><Link to={`/workshop3-semantics-aria/listing/${id}`}>Read more</Link></p>
                </div>
            </div>
        </article>    
    )
}

ListingExcerpt.propTypes = {
    id: PropTypes.string,
    data: PropTypes.shape({
        listingName: PropTypes.string,
        location: PropTypes.string,
        listingType: PropTypes.string,
        imageSrc: PropTypes.string,
        excerpt: PropTypes.string,
        amenities: PropTypes.array
    }),
    image: PropTypes.string
}

export default ListingExcerpt
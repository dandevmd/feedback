import { useContext } from 'react';
import { FaTimes, FaEdit } from 'react-icons/fa'
import PropTypes from 'prop-types'

import FeedBackContext from '../context/FeedBackContext';
import Card from './shared/Card'


const FeedBackItem = ({ item }) => {
    // console.log(rating, text)
    const { deleteFeedBack, editFeedBack } = useContext(FeedBackContext)

    return (
        <Card >
            <div className="num-display">{item.rating}</div>
            <button onClick={() => deleteFeedBack(item.id)}
                className="close">
                <FaTimes color='purple' />
            </button>
            <button onClick={() => { editFeedBack(item) }}
                className="edit">
                <FaEdit />
            </button>
            <div className="text-display">{item.text}</div>
        </Card>
    )
}

FeedBackItem.propTypes = {
    item: PropTypes.object.isRequired,
}

export default FeedBackItem
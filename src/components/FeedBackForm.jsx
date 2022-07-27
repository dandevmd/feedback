import { useState, useContext, useEffect } from 'react'

import FeedBackContext from '../context/FeedBackContext'

import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'

const FeedBackForm = () => {
    const { addFeedBack,
        feedBackEdit,
        updateFeedBack } = useContext(FeedBackContext)

    const [text, setText] = useState('')
    const [rating, setRating] = useState(10)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')

    useEffect(() => {
        if (feedBackEdit.edit === true) {
            setBtnDisabled(false)
            setText(feedBackEdit.item.text)
            setRating(feedBackEdit.item.rating)
        }

    }, [feedBackEdit])



    const handleInput = (e) => {
        if (text === '') {
            setBtnDisabled(true);
            setMessage(null)
        } else if (text !== '' && text.length <= 5) {
            setBtnDisabled(true)
            setMessage('Text must be at least 5 char')
        } else {
            setMessage(null)
            setBtnDisabled(false)
        }

        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim().length > 5) {
            const newFeedBack = {
                text,
                rating
            }

            if (feedBackEdit.edit === true) {
                updateFeedBack(feedBackEdit.item.id, newFeedBack)
            } else {
                addFeedBack(newFeedBack)
            }

            setBtnDisabled(true) // 👈  add this line to reset disabled
            setRating(10) //👈 add this line to set rating back to 10
            setText('')
        }
    }

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate this service?</h2>
                <RatingSelect select={setRating} selected={rating} />
                <div className="input-group">
                    <input
                        onChange={handleInput}
                        type="text"
                        value={text} />

                    <Button isDisabled={btnDisabled}
                        type="submit" >
                        Send
                    </Button>
                </div>

                {message && <div className='message'>
                    {message}
                </div>}
            </form>
        </Card>
    )
}

export default FeedBackForm
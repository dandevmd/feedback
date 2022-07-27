import React, {useContext, useEffect} from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import FeedBackContext from '../context/FeedBackContext'
import FeedBackItem from './FeedBackItem'
import Spinner from './shared/Spinner'



function FeedBackList() {
    const {feedback, loading} = useContext(FeedBackContext)


    if (!loading && (!feedback || feedback.length === 0)) {
        return <p> Feedbacks List is Empty</p>
    }


    return loading ? <Spinner/> : (
        <div className='feedback-list'>
            <AnimatePresence>
                {feedback.map(item => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}>
                        <FeedBackItem key={item.id} 
                        item={item} />
                    </motion.div>
                )
                )}
            </AnimatePresence>
        </div>
    )
    // return (
    //     <div className='feedback-list'>
    //         {feedback.map(item => (
    //             <FeedBackItem key={item.id} {...item} handleDelete={handleDelete} />)
    //         )}
    //     </div>
    // )
}



export default FeedBackList
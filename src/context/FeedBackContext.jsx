import { createContext, useState, useEffect } from "react";

const url = 'http://localhost:3001/feedback?_id&_order=desc'
const FeedBackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedBack] = useState([])
    const [loading, setLoading] = useState(true)
    const [feedBackEdit, setFeedBackEdit] = useState({
        item: {},
        edit: false
    })

    const fetchData = async () => {
        try {
            const response = await fetch(url )
            const data = await response.json()
            setLoading(false)
            setFeedBack(data)

        } catch (error) {
            setLoading(false)
            console.log(error)
        }
        setLoading(false)
        return feedback
    }

    useEffect(() => {
        fetchData();
    }, [])


    // const deleteFeedBack = (id) => {
    //     if (window.confirm('Are you sure?')) {
    //         return setFeedBack(feedback.filter((item) => item.id !== id
    //         ))
    //     }
    // }

    const deleteFeedBack = async (id) => {
        if (window.confirm('Are you sure?')) {
            await fetch(`http://localhost:3001/feedback/${id}`, { method: "DELETE" })
            return setFeedBack(feedback.filter((item) => item.id !== id
            ))
        }
    }

    // const addFeedBack = (newFeedBack) => {
    //     // console.log(newFeedBack)
    //     newFeedBack.id = uuid()
    //     setFeedBack([newFeedBack, ...feedback])
    // }

    const addFeedBack = async (newFeedBack) => {
        // console.log(newFeedBack)
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newFeedBack)
        }
        )
        const data = await response.json();
        setFeedBack([data, ...feedback])
    }

    const editFeedBack = (item) => {
        setFeedBackEdit({
            item,
            edit: true
        })
    }

    // const updateFeedBack = (id, updItem) => {
    //     setFeedBack(feedback.map(item => {
    //         return item.id === id ? { ...item, ...updItem } : item
    //     }))
    // }
    const updateFeedBack = async (id, updItem) => {
        const response = await fetch(`http://localhost:3001/feedback/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updItem)
        })

        const data = await response.json

        setFeedBack(feedback.map(item => {
            return item.id === id ? { ...item, ...data} : item
        }))
    }

    return <FeedBackContext.Provider value={{
        feedback,
        deleteFeedBack,
        addFeedBack,
        editFeedBack,
        feedBackEdit,
        updateFeedBack,
        loading
    }}>
        {children}
    </FeedBackContext.Provider>
}

export default FeedBackContext;
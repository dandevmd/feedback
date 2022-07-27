import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { FeedbackProvider } from './context/FeedBackContext';


import Header from './components/Header'
import FeedBackList from './components/FeedBackList'
import FeedBackStats from './components/FeedBackStats'
import FeedBackForm from './components/FeedBackForm';
import AboutPage from './pages/AboutPage'
import AboutIcon from './components/AboutIcon';

const App = () => {
    // console.log(typeof(feedback))
    return (
        <FeedbackProvider>
        <Router>
            <Header />
            <div className="container">
                <Routes>
                    <Route exact path='/' element={
                        <>
                            <FeedBackForm/>
                            <FeedBackStats />
                            <FeedBackList />
                        </>
                    }>
                    </Route>

                    <Route path='/about' element={<AboutPage />} />
                </Routes>
                <AboutIcon />
            </div>
        </Router>
        </FeedbackProvider>
    )
}

export default App
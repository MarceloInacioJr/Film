import Main from './templates/Main'
import MovieInfo from './templates/MovieInfo'

import '../src/reset.css'

import { BrowserRouter as Router
        ,Routes 
        ,Route
     } from 'react-router-dom'

import ReactDOM from 'react-dom/client'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <Router>
        <Routes>
            {}
            <Route path='/' element={<Main/>}/>
            <Route path='/moviesinfo' element={<MovieInfo/>}/>
        </Routes>
    </Router>
    </>

)

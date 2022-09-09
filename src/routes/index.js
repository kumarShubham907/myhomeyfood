import { Routes, Route } from 'react-router-dom'
import Home from './home'


const RoutesIndex = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </>
    )
}

export default RoutesIndex
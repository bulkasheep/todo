import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage/';
import TaskPage from './pages/TaskPage/';
import ErrorPage from './pages/ErrorPage/';

function Router() {
    return <BrowserRouter basename='/todo/'>
        <Routes>
            <Route path="/" index element={<MainPage />} />
            <Route path="/:key" element={<TaskPage />} />
            <Route path="/*" element={<ErrorPage />} />
        </Routes>
    </BrowserRouter>;
}

export default Router;
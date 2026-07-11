import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './Route/Navbar';

const Home = lazy(() => import('./Pages/Home'));
const Publications = lazy(() => import('./Pages/Publications'));
const Courses = lazy(() => import('./Pages/Courses'));
const Research = lazy(() => import('./Pages/Research'));
const JoinUs = lazy(() => import('./Pages/JoinUs'));
const News = lazy(() => import('./Pages/News'));
const People = lazy(() => import('./Pages/People'));
const Code = lazy(() => import('./Pages/Code'));
const Datasets = lazy(() => import('./Pages/Datasets'));

const RouteFallback = () => (
  <div className="route-fallback" role="status" aria-live="polite">
    <span className="sr-only">Loading…</span>
  </div>
);

const App = () => (
  <>
    <Navbar />
    <Suspense fallback={<RouteFallback />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/research" element={<Research />} />
        <Route path="/join-us" element={<JoinUs />} />
        <Route path="/news" element={<News />} />
        <Route path="/people" element={<People />} />
        <Route path="/code" element={<Code />} />
        <Route path="/datasets" element={<Datasets />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </Suspense>
  </>
);

export default App;

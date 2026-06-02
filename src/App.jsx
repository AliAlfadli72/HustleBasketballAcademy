import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Dynamic page imports for code splitting
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Programs = lazy(() => import("./pages/Programs"));
const Media = lazy(() => import("./pages/Media"));
const Contact = lazy(() => import("./pages/Contact"));

// Lightweight, premium branded loading fallback
const LoadingFallback = () => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center bg-dark">
    <div className="w-16 h-16 bg-primary flex items-center justify-center transform -skew-x-12 border-b-4 border-r-2 border-white shadow-[0_0_20px_rgba(255,107,0,0.5)] animate-pulse">
      <span className="text-black text-2xl font-black italic transform skew-x-12">H</span>
    </div>
    <span className="mt-4 text-xs font-black tracking-widest text-silver uppercase animate-pulse">
      Loading Grind...
    </span>
  </div>
);

export default function App() {
  return (
    <div className="bg-dark text-white min-h-screen">
      <ScrollToTop />
      <Header />

      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/media" element={<Media />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>

      <Footer />
    </div>
  );
}
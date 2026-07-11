import { useMemo, useState } from 'react';
import { COURSES, COURSE_LEVELS } from '../data/courses';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

type FilterLevel = typeof COURSE_LEVELS[number];

const Courses = () => {
  useDocumentMeta({
    title: 'Courses',
    description: 'Graduate and undergraduate courses taught at the University of South Dakota by Dr. Debesh Jha.',
  });

  const [filter, setFilter] = useState<FilterLevel>('All');

  const filtered = useMemo(
    () => (filter === 'All' ? COURSES : COURSES.filter(c => c.level === filter)),
    [filter]
  );

  return (
    <main id="main" className="min-h-screen bg-white px-6 py-28 md:py-32">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-2 tracking-tight">Courses</h1>
        <p className="text-gray-500 text-base md:text-lg mb-8">
          Courses taught at the University of South Dakota.
        </p>

        <div className="flex flex-wrap gap-2 mb-10" role="group" aria-label="Filter by level">
          {COURSE_LEVELS.map(level => (
            <button
              key={level}
              onClick={() => setFilter(level)}
              aria-pressed={filter === level}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 ${
                filter === level
                  ? 'bg-black text-white border-black'
                  : 'bg-white text-gray-600 border-gray-300 hover:border-black hover:text-black'
              }`}
            >
              {level}
            </button>
          ))}
        </div>

        <div className="space-y-6">
          {filtered.map(course => (
            <article
              key={course.id}
              className="flex flex-col sm:flex-row gap-5 border border-gray-200 rounded-xl overflow-hidden hover:border-gray-400 transition-all duration-200"
            >
              <div className="sm:w-56 flex-shrink-0 flex items-center justify-center bg-gray-50 p-3">
                <img
                  src={course.image}
                  alt={course.title}
                  loading="lazy"
                  decoding="async"
                  width={224}
                  height={140}
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="flex flex-col justify-center p-5 sm:pl-0">
                <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{course.title}</h2>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">{course.description}</p>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-gray-400 text-center mt-16">No courses found for this level.</p>
        )}
      </div>
    </main>
  );
};

export default Courses;

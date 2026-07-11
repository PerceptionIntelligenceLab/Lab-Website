import { useState } from 'react';
import { FaLinkedin, FaGlobe } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

const LAB_EMAIL = 'debesh.jha@usd.edu';

const POSITIONS = [
  'PhD Student',
  'MS Student',
  'Postdoctoral Researcher',
  'Visiting Researcher',
  'Undergraduate Researcher',
  'Other',
] as const;

interface ApplicationForm {
  name: string;
  email: string;
  position: string;
  degree: string;
  message: string;
}

const EMPTY_FORM: ApplicationForm = { name: '', email: '', position: '', degree: '', message: '' };

const isValidEmail = (email: string): boolean => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const buildMailto = (form: ApplicationForm): string => {
  const subject = `Application: ${form.position} — ${form.name}`;
  const body = [
    `Name: ${form.name}`,
    `Email: ${form.email}`,
    `Position: ${form.position}`,
    `Highest Degree: ${form.degree || '—'}`,
    '',
    'Message:',
    form.message,
  ].join('\n');
  return `mailto:${LAB_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

const JoinUs = () => {
  useDocumentMeta({
    title: 'Join Us',
    description: 'Join the Biomedical Perception & Intelligence Lab as a PhD, MS, postdoctoral, or visiting researcher.',
  });

  const [form, setForm] = useState<ApplicationForm>(EMPTY_FORM);
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValidEmail(form.email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError(null);
    window.location.href = buildMailto(form);
    setSent(true);
  };

  return (
    <main id="main" className="min-h-screen bg-white px-6 py-28 md:py-32">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-28">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4 tracking-tight">Join Us</h1>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
            We are always looking for motivated and talented individuals to join the Biomedical Perception & Intelligence Lab.
            Whether you are a prospective PhD student, MS student, postdoc, or visiting researcher, we'd love to hear from you.
          </p>

          <div className="space-y-6">
            <div>
              <h2 className="font-semibold text-gray-900 mb-1">PhD Students</h2>
              <p className="text-sm text-gray-500 leading-relaxed">
                We welcome applications from students with a strong background in computer science, machine learning, or medical imaging. Funding opportunities are available.
              </p>
            </div>
            <div>
              <h2 className="font-semibold text-gray-900 mb-1">Postdoctoral Researchers</h2>
              <p className="text-sm text-gray-500 leading-relaxed">
                We look for postdocs passionate about AI-driven medical imaging research with a track record of publications.
              </p>
            </div>
            <div>
              <h2 className="font-semibold text-gray-900 mb-1">MS / Visiting Students</h2>
              <p className="text-sm text-gray-500 leading-relaxed">
                MS students and visiting researchers interested in working on cutting-edge AI projects are welcome to reach out.
              </p>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-gray-200">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-2 tracking-tight">Contact Us</h2>
            <p className="text-gray-500 text-sm mb-6">Reach out through any of the channels below.</p>
            <div className="flex flex-wrap gap-3">
              <a href={`mailto:${LAB_EMAIL}`} className="flex items-center gap-2 px-4 py-3 border border-gray-200 rounded-xl hover:border-[#0ed6e8] hover:shadow-sm transition-all duration-200 group">
                <MdEmail className="text-xl text-[#0ed6e8]" aria-hidden="true" />
                <div>
                  <p className="text-xs text-gray-400">Email</p>
                  <p className="text-xs font-semibold text-gray-800 group-hover:text-[#0ed6e8] transition-colors">{LAB_EMAIL}</p>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/debesh-jha-ph-d-071462aa/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-3 border border-gray-200 rounded-xl hover:border-[#0ed6e8] hover:shadow-sm transition-all duration-200 group">
                <FaLinkedin className="text-xl text-[#0ed6e8]" aria-hidden="true" />
                <div>
                  <p className="text-xs text-gray-400">LinkedIn</p>
                  <p className="text-xs font-semibold text-gray-800 group-hover:text-[#0ed6e8] transition-colors">Debesh Jha</p>
                </div>
              </a>
              <a href="https://debeshjha.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-3 border border-gray-200 rounded-xl hover:border-[#0ed6e8] hover:shadow-sm transition-all duration-200 group">
                <FaGlobe className="text-xl text-[#0ed6e8]" aria-hidden="true" />
                <div>
                  <p className="text-xs text-gray-400">Portfolio</p>
                  <p className="text-xs font-semibold text-gray-800 group-hover:text-[#0ed6e8] transition-colors">debeshjha.com</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="flex-1">
          {sent ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-16 border border-gray-200 rounded-2xl px-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Draft opened in your email app</h2>
              <p className="text-gray-500 mb-6">
                We prepared a pre-filled email to <strong>{LAB_EMAIL}</strong>. Please review it and hit send from your email client.
              </p>
              <button
                onClick={() => { setSent(false); setForm(EMPTY_FORM); }}
                className="px-6 py-2.5 text-sm font-semibold text-white rounded-lg bg-[#0ed6e8] hover:opacity-90"
              >
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="border border-gray-200 rounded-2xl p-6 md:p-8 space-y-5" noValidate>
              <h2 className="text-2xl font-bold text-gray-900 mb-1">Get in Touch</h2>
              <p className="text-sm text-gray-400 mb-4">
                Submitting opens your email app with a draft to {LAB_EMAIL}.
              </p>

              <Field
                label="Full Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Your full name"
              />
              <Field
                label="Email Address"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="you@example.com"
              />

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="position">
                  Position Interested In <span className="text-red-400">*</span>
                </label>
                <select
                  id="position"
                  name="position"
                  required
                  value={form.position}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0ed6e8] focus:border-transparent transition text-gray-700 bg-white"
                >
                  <option value="" disabled>Select a position</option>
                  {POSITIONS.map(p => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
              </div>

              <Field
                label="Highest Degree"
                name="degree"
                value={form.degree}
                onChange={handleChange}
                placeholder="e.g. B.Sc. in Computer Science"
              />

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="message">
                  Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your research interests, background, and why you'd like to join the lab..."
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0ed6e8] focus:border-transparent transition resize-none"
                />
              </div>

              {error && (
                <p role="alert" className="text-sm text-red-500">{error}</p>
              )}

              <button
                type="submit"
                className="w-full py-3 bg-[#0ed6e8] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity duration-200 shadow-md"
              >
                Open Email Draft
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
};

interface FieldProps {
  label: string;
  name: keyof ApplicationForm;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
  required?: boolean;
}

const Field = ({ label, name, value, onChange, type = 'text', placeholder, required }: FieldProps) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor={name}>
      {label} {required && <span className="text-red-400">*</span>}
    </label>
    <input
      id={name}
      type={type}
      name={name}
      required={required}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0ed6e8] focus:border-transparent transition"
    />
  </div>
);

export default JoinUs;

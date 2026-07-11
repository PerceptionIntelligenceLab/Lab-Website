import { useCallback, useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logoImg from '../assets/reallog.png';

interface NavItem {
  to: string;
  label: string;
}

const NAV_ITEMS: NavItem[] = [
  { to: '/home', label: 'Home' },
  { to: '/research', label: 'Research' },
  { to: '/publications', label: 'Publications' },
  { to: '/code', label: 'Code' },
  { to: '/datasets', label: 'Datasets' },
  { to: '/courses', label: 'Courses' },
  { to: '/people', label: 'People' },
  { to: '/join-us', label: 'Join us' },
];

const SCROLL_THRESHOLD = 8;

const useHideOnScroll = (): boolean => {
  const [visible, setVisible] = useState(true);
  const lastY = useRef(0);

  useEffect(() => {
    const readY = () =>
      Math.max(
        window.scrollY || 0,
        document.documentElement.scrollTop || 0,
        document.body.scrollTop || 0
      );

    const onScroll = () => {
      const current = readY();
      if (current <= SCROLL_THRESHOLD) setVisible(true);
      else if (current > lastY.current) setVisible(false);
      else if (current < lastY.current) setVisible(true);
      lastY.current = current;
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return visible;
};

const linkClass =
  'block px-2.5 py-2 rounded-sm font-medium text-gray-800 hover:text-[#0ed6e8] transition-colors duration-200';

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const navbarVisible = useHideOnScroll();
  const drawerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
        triggerRef.current?.focus();
      }
    };
    const previouslyFocused = document.activeElement as HTMLElement | null;
    drawerRef.current?.querySelector<HTMLElement>('a,button')?.focus();
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
      previouslyFocused?.focus?.();
    };
  }, [menuOpen]);

  const toggleMenu = useCallback(() => setMenuOpen(prev => !prev), []);

  return (
    <>
      <div
        className={`hidden md:flex md:fixed md:top-0 md:left-0 md:right-0 md:z-50 md:justify-center md:pt-5 transition-transform duration-300 ease-in-out ${
          navbarVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <nav
          aria-label="Primary"
          className="flex flex-row items-center gap-6 py-2 px-6 bg-white/20 backdrop-blur-xl border border-white/30 shadow-[0_4px_24px_rgba(0,0,0,0.06)] w-fit rounded-4xl"
        >
          {NAV_ITEMS.map(item => (
            <NavLink key={item.to} to={item.to} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>

      <header
        className={`w-full py-2 px-4 fixed top-0 z-50 flex flex-row items-center justify-between md:hidden bg-white/20 backdrop-blur-xl border-b border-white/30 shadow-[0_4px_24px_rgba(0,0,0,0.06)] transition-transform duration-300 ease-in-out ${
          navbarVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <NavLink to="/home" className="flex items-center flex-shrink-0" aria-label="Biomedical Perception & Intelligence Lab home">
          <img src={logoImg} alt="" width={56} height={56} className="h-14 w-auto object-contain" />
        </NavLink>
        <button
          ref={triggerRef}
          type="button"
          className="text-gray-800 text-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0ed6e8] rounded-md"
          onClick={toggleMenu}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav-drawer"
        >
          <span aria-hidden="true">{menuOpen ? '✕' : '☰'}</span>
        </button>
      </header>

      <div
        id="mobile-nav-drawer"
        ref={drawerRef}
        role="dialog"
        aria-modal={menuOpen}
        aria-hidden={!menuOpen}
        className={`fixed top-0 right-0 h-full w-2/3 max-w-xs z-[60] transform transition-transform duration-300 ease-in-out md:hidden ${
          menuOpen ? 'translate-x-0' : 'translate-x-full pointer-events-none'
        }`}
      >
        <nav
          aria-label="Mobile"
          className="flex flex-col gap-4 text-md p-6 pt-20 bg-white/95 backdrop-blur-xl border-l border-white/30 shadow-[0_4px_24px_rgba(0,0,0,0.06)] min-h-full"
        >
          {NAV_ITEMS.map(item => (
            <NavLink key={item.to} to={item.to} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>

      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-[55] md:hidden"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Navbar;

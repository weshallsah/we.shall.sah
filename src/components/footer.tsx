import { personalInfo } from '@/data/portfolio';

export function Footer() {
  return (
    <footer className="dimmed">
      <p>
        © {new Date().getFullYear()} {personalInfo.name}. <a href="#top">Back to top</a>.
      </p>
    </footer>
  );
}

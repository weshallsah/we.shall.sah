import { education } from '@/data/portfolio';

export function Education() {
  return (
    <section>
      <h2>Education</h2>
      <ul>
        {education.map(e => (
          <li key={e.degree}>
            {e.degree} — {e.institution}
            {e.grade && <span className="dimmed"> ({e.grade})</span>}
          </li>
        ))}
      </ul>
    </section>
  );
}

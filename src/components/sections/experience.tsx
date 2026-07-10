import { experiences } from '@/data/portfolio';

export function Experience() {
  return (
    <section>
      <h2>Experience</h2>
      <ul>
        {experiences.map(exp => (
          <li key={exp.id}>
            <span className="dimmed">{exp.duration}</span>
            <span className="entry-arrow dimmed">»</span>
            <strong>{exp.position}</strong>, {exp.company}: {exp.blurb}.
          </li>
        ))}
      </ul>
    </section>
  );
}

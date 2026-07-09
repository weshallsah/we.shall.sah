import { experiences } from '@/data/portfolio';

export function Experience() {
  return (
    <section>
      <h2>Experience</h2>
      <ul className="plain">
        {experiences.map(exp => (
          <li key={exp.id}>
            <span className="dimmed">{exp.duration}</span>
            <span className="entry-arrow dimmed">»</span>
            <strong>{exp.position}</strong>, {exp.company}
            <p>{exp.description}</p>
            {exp.technologies && exp.technologies.length > 0 && (
              <p className="dimmed">{exp.technologies.join(', ')}</p>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

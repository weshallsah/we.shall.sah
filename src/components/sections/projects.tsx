import { projects } from '@/data/portfolio';

export function Projects() {
  return (
    <section>
      <h2>Building</h2>
      <ul className="plain">
        {projects.map(p => (
          <li key={p.id}>
            <strong>
              {p.githubUrl ? <a href={p.githubUrl} target="_blank" rel="noopener noreferrer">{p.title}</a> : p.title}
            </strong>
            {p.liveUrl && p.liveUrl !== 'https://example.com' && (
              <>
                {' '}(<a href={p.liveUrl} target="_blank" rel="noopener noreferrer">live</a>)
              </>
            )}
            <p>{p.description}</p>
            <p className="dimmed">{p.technologies.join(', ')}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

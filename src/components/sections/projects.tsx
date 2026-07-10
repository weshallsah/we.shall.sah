import { projects } from '@/data/portfolio';

export function Projects() {
  return (
    <section>
      <h2>Building</h2>
      <ul>
        {projects.map(p => (
          <li key={p.id}>
            <strong>{p.title.split(' – ')[0]}</strong>: {p.blurb}.{' '}
            <span className="dimmed">{p.technologies.join(', ')}</span>
            {p.githubUrl && <> — <a href={p.githubUrl} target="_blank" rel="noopener noreferrer">github</a></>}
            {p.liveUrl && p.liveUrl !== 'https://example.com' && (
              <> / <a href={p.liveUrl} target="_blank" rel="noopener noreferrer">live</a></>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

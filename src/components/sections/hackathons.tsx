import { hackathons } from '@/data/portfolio';

export function Hackathons() {
  return (
    <section>
      <h2>Hackathons</h2>
      <ul className="plain">
        {hackathons.map(h => (
          <li key={h.id}>
            <strong>{h.name}</strong> — {h.result}
            <span className="dimmed"> ({h.organizer})</span>
            <p>{h.description}</p>
            <p className="dimmed">
              {h.technologies.join(', ')}
              {h.githubUrl && <> · <a href={h.githubUrl} target="_blank" rel="noopener noreferrer">github</a></>}
              {h.liveUrl && <> · <a href={h.liveUrl} target="_blank" rel="noopener noreferrer">live</a></>}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

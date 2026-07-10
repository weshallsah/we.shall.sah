import { hackathons } from '@/data/portfolio';

export function Hackathons() {
  return (
    <section>
      <h2>Hackathons</h2>
      <ul>
        {hackathons.map(h => (
          <li key={h.id}>
            <strong>{h.name}</strong>
            <span className="dimmed"> ({h.organizer})</span> — {h.result}: {h.blurb}.
            {h.githubUrl && <> <a href={h.githubUrl} target="_blank" rel="noopener noreferrer">github</a></>}
            {h.liveUrl && <> / <a href={h.liveUrl} target="_blank" rel="noopener noreferrer">live</a></>}
          </li>
        ))}
      </ul>
    </section>
  );
}

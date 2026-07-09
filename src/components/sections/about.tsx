import { skills } from '@/data/portfolio';

const CATEGORY_LABELS: Record<string, string> = {
  languages: 'Languages',
  backend: 'Backend',
  databases: 'Databases',
  web3: 'Web3',
  infrastructure: 'Infra',
  tools: 'Tools',
};

export function About() {
  const grouped = skills.reduce<Record<string, typeof skills>>((acc, s) => {
    (acc[s.category] ??= []).push(s);
    return acc;
  }, {});

  return (
    <section>
      <h2>Skills</h2>
      <ul>
        {Object.entries(CATEGORY_LABELS).map(([key, label]) => {
          const catSkills = grouped[key] ?? [];
          if (!catSkills.length) return null;
          return (
            <li key={key}>
              <strong>{label}</strong>: {catSkills.map(s => s.name).join(', ')}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

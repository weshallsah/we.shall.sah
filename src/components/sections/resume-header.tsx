import Link from 'next/link';
import { personalInfo, contactInfo } from '@/data/portfolio';

export function ResumeHeader() {
  const github = contactInfo.socialLinks.find(s => s.icon === 'github');
  const linkedin = contactInfo.socialLinks.find(s => s.icon === 'linkedin');
  const twitter = contactInfo.socialLinks.find(s => s.icon === 'twitter');
  const githubUsername = github?.url.split('/').filter(Boolean).pop();

  return (
    <>
      <nav id="top">
        <span className="breadcrumbs">
          <Link href="/">{personalInfo.name}</Link>
        </span>
        {githubUsername && (
          <span className="author-photo-img-wrap">
            <a href={github?.url} target="_blank" rel="noopener noreferrer">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://github.com/${githubUsername}.png`}
                width={125}
                height={125}
                alt="personal photo"
                title="personal photo"
                loading="lazy"
                className="author-photo-img"
              />
            </a>
          </span>
        )}
      </nav>

      <section className="dimmed">
        <p>
          {personalInfo.title}. {personalInfo.bio}
        </p>
        <p>
          Check out my {github && <a className="contact-link" href={github.url} target="_blank" rel="noopener noreferrer">github</a>},
          {twitter && <> ping me on <a className="contact-link" href={twitter.url} target="_blank" rel="noopener noreferrer">x.com</a>,</>}
          {linkedin && <> <a className="contact-link" href={linkedin.url} target="_blank" rel="noopener noreferrer">linkedin</a></>}
          {' '}or send me <a className="contact-link" href={`mailto:${contactInfo.email}`}>an email</a>.
          {' '}I&apos;m based in {contactInfo.location}.
          {' '}You can also grab my <a className="contact-link" href="/resume/withexperience.pdf" download="Vishal_Sah_Resume.pdf">resume</a>.
        </p>
      </section>
    </>
  );
}

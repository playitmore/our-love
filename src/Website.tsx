import { content } from './content';

// This file contains the visible website.
// Each <section> below is one part of the page.
export function Website() {
  // The colors in content.ts become CSS variables used by styles.css.
  const theme = {
    '--wine': content.colors.wine,
    '--cream': content.colors.cream,
    '--blush': content.colors.blush,
    '--ink': content.colors.ink,
  } as React.CSSProperties;

  return (
    <main style={theme}>
      {/* 1. Opening section */}
      <section className="hero" id="top">
        <nav className="navigation" aria-label="Main navigation">
          <a className="logo" href="#top">
            {content.yourName.charAt(0)} + {content.partnerName.charAt(0)}
          </a>
          <div className="nav-links">
            <a href="#story">Our story</a>
            <a href="#photos">Photos</a>
            <a href="#letter">My letter</a>
          </div>
        </nav>

        <div className="hero-layout">
          <div className="hero-copy">
            <p className="eyebrow">For {content.partnerName}, with all my love</p>
            <h1>{content.headline}</h1>
            <p className="intro">{content.introduction}</p>
            <a className="button" href="#story">
              Read our story <span aria-hidden="true">↓</span>
            </a>
          </div>

          <figure className="hero-photo">
            <img src={content.photos[0].src} alt={content.photos[0].alt} />
            <figcaption>Since {content.togetherSince}</figcaption>
          </figure>
        </div>

        <p className="hero-signature">
          Made for {content.partnerName} · From {content.yourName}
        </p>
      </section>

      {/* 2. Story section — the map repeats one block for every memory in content.ts */}
      <section className="story section" id="story">
        <div className="section-heading">
          <p className="eyebrow">A few favorite chapters</p>
          <h2>Our story, so far.</h2>
          <p>Every big adventure started with one small moment together.</p>
        </div>

        <div className="timeline">
          {content.memories.map((memory, index) => (
            <article className="timeline-item" key={memory.year}>
              <span className="timeline-number">0{index + 1}</span>
              <p className="timeline-year">{memory.year}</p>
              <h3>{memory.title}</h3>
            </article>
          ))}
        </div>
      </section>

      {/* 3. Photo section — replace the files in src/images to use your photos */}
      <section className="photos section" id="photos">
        <div className="photo-heading">
          <div>
            <p className="eyebrow light">Little moments, big memories</p>
            <h2>My favorite view is us.</h2>
          </div>
          <p>Replace these sample files inside <strong>src/images</strong>.</p>
        </div>

        <div className="photo-grid">
          {content.photos.slice(1).map((photo, index) => (
            <figure className={`memory-photo photo-${index + 1}`} key={photo.src}>
              <img src={photo.src} alt={photo.alt} />
              <figcaption>{content.photoCaptions[index]}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* 4. Letter section — <details> opens without extra JavaScript */}
      <section className="letter section" id="letter">
        <div className="letter-intro">
          <p className="eyebrow">One more thing</p>
          <h2>A letter for {content.partnerName}.</h2>
          <p>The words I never want you to forget.</p>
        </div>

        <details className="letter-paper">
          <summary>Open my letter <span aria-hidden="true">♥</span></summary>
          <div className="letter-text">
            <p>My dearest {content.partnerName},</p>
            <p>{content.letter}</p>
            <p>{content.letterClosing}</p>
            <p className="sign-off">Always yours,<br /><em>{content.yourName}</em></p>
          </div>
        </details>
      </section>

      {/* 5. Final message */}
      <footer>
        <p>{content.yourName} <span>♥</span> {content.partnerName}</p>
        <a href="#top">Back to the beginning ↑</a>
      </footer>
    </main>
  );
}

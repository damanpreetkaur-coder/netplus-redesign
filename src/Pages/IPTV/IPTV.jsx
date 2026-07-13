import "./IPTV.css";

function IPTV() {
  return (
    <>
      <section className="iptv-hero">

        <div className="iptv-left">

          <span className="iptv-tag">
            📺 Netplus IPTV
          </span>

          <h1>
            Entertainment Without Limits
          </h1>

          <p>
            Enjoy Live TV, blockbuster movies, popular OTT apps,
            sports and much more — all in one powerful entertainment
            experience.
          </p>

          <div className="iptv-buttons">

            <button className="primary-btn">
              Explore IPTV Plans
            </button>

            <button className="secondary-btn">
              Get Connection
            </button>

          </div>

        </div>

        <div className="iptv-right">

          <img
            src="/images/iptv-hero.png"
            alt="IPTV"
          />

        </div>

      </section>
      <section className="why-iptv">

  <div className="section-title">

    <span>Why Choose IPTV</span>

    <h2>Entertainment Designed for the Whole Family</h2>

    <p>
      Experience premium entertainment with Live TV, OTT platforms,
      movies, sports and much more — all in one place.
    </p>

  </div>

  <div className="iptv-features">

    <div className="iptv-card">

      <div className="iptv-icon">📺</div>

      <h3>500+ Live TV Channels</h3>

      <p>
        Watch your favourite news, sports,
        movies and entertainment channels.
      </p>

    </div>

    <div className="iptv-card">

      <div className="iptv-icon">🎬</div>

      <h3>Popular OTT Apps</h3>

      <p>
        Access top OTT platforms from one
        convenient interface.
      </p>

    </div>

    <div className="iptv-card">

      <div className="iptv-icon">⚽</div>

      <h3>Live Sports</h3>

      <p>
        Never miss live cricket, football
        and other sporting events.
      </p>

    </div>

    <div className="iptv-card">

      <div className="iptv-icon">📱</div>

      <h3>Smart TV Experience</h3>

      <p>
        Enjoy seamless entertainment with
        an easy-to-use interface.
      </p>

    </div>

  </div>

</section>
    <section className="entertainment-hub">

  <div className="section-title">

    <span>Entertainment Hub</span>

    <h2>Everything You Love. One Platform.</h2>

    <p>
      Watch your favourite OTT apps, Live TV channels,
      blockbuster movies and live sports from a single platform.
    </p>

  </div>

  <div className="ott-grid">

    
    <div className="ott-card">
      <img src="/images/hotstar.png" alt="Disney+ Hotstar" />
      <span>Disney+ Hotstar</span>
    </div>

    <div className="ott-card">
      <img src="/images/sonyliv.png" alt="Sony LIV" />
      <span>Sony LIV</span>
    </div>

    <div className="ott-card">
      <img src="/images/zee5.png" alt="ZEE5" />
      <span>ZEE5</span>
    </div>

    <div className="ott-card">
      <img src="/images/chaupal.png" alt="Chaupal" />
      <span>Chaupal</span>
    </div>

    <div className="ott-card">
      <img src="/images/youtube.png" alt="YouTube" />
      <span>YouTube</span>
    </div>

    <div className="ott-card">
      <img src="/images/live-tv.png" alt="Live TV" />
      <span>500+ Live TV</span>
    </div>

  </div>

</section>
      
    </>
  );
}

export default IPTV;
import PortfolioSlider from "./PortfolioSlider.js";

export default function Page4({ slides }) {
  return (
    <div className="lines" id="portfolio">
      <div className="section-center">
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <h5>Our Portfolio</h5>
          <h1>Our finished works</h1>
          <p>
            Anyway, you still use Lorem Ipsum and rightly so, as it will always
            have
          </p>
        </div>
        <PortfolioSlider slides={slides} />
      </div>
    </div>
  );
}

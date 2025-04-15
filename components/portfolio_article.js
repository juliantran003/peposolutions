import Image from "next/image";

export default function PorftfolioArticle({
  business,
  date,
  description1,
  description2,
  img1,
  img2,

  objectFit,
  testimonial,
}) {
  return (
    <main className="portfolio_article">
      <div className="portfolio_article_information">
        <div>
          <h1>{business}</h1>
          <h2>{date}</h2>
          <p>{description1}</p>
          <p>{description2}</p>
        </div>
        <div className="portfolio_article_information_image">
          <Image src={img1} fill objectFit={objectFit} />
        </div>
      </div>
      <div className="portfolio_article_testimonial">
        {" "}
        <div className="portfolio_article_frontage_image">
          <Image src={img2} fill />
        </div>
        <p>"{testimonial}"</p>
      </div>
    </main>
  );
}

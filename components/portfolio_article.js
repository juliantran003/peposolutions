import Image from "next/image";

export default function PorftfolioArticle({
  business,
  date,
  description1,
  description2,
  img1,
  img2,
  img3,
  img4,
  objectFit,
}) {
  return (
    <main className="portfolio_article">
      <div className="line"></div>
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
      {img2 && (
        <div className="portfolio_article_images">
          <div>
            <Image src={img2} fill />
          </div>
          <div>
            <Image src={img3} fill />
          </div>
          <div>
            <Image src={img4} fill />
          </div>
        </div>
      )}
    </main>
  );
}

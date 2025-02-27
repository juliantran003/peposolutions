import Image from "next/image";

export default function ServicesArticle({ img, title, text }) {
  return (
    <div className="services_article">
      <div>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div>
        <Image src={img} fill />
      </div>
    </div>
  );
}

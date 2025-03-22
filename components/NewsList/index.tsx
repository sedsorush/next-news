import Link from "next/link";
import styles from "./newsList.module.css";
import Image from "next/image";
import { News } from "@/types/news";

const NewsList = ({ news }: { news: News[] }) => {
  return (
    <div className={styles.newsCart}>
      {news?.map((item) => (
        <Link key={item.id} href={`/details/${item.id}`}>
          <div className={styles.newsBox}>
            <Image
              src={item.fields.thumbnail}
              alt={`${item.sectionId}`}
              height={200}
              width={300}
            />
            <h1>{item.webTitle}</h1>
            <div className={styles.creds}>
              <h2>{item.sectionName}</h2>
              <h3>{item.webPublicationDate.slice(0, 10)}</h3>
            </div>
            <p>{item.fields.trailText}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default NewsList;

import { apiKey, baseUrl } from "@/api/constants";
import styles from "./newsDetails.module.css";
import { P, SingleApiResponse, SingleNews } from "@/types/news";
import Image from "next/image";
import Link from "next/link";

const NewsDetails = async ({ params }: { params: Promise<P> }) => {
  const param = await params;
  const newsParam = param.newsId.join("/");
  console.log(newsParam);

  let details: SingleNews = {
    id: "",
    type: "",
    sectionId: "",
    sectionName: "",
    webPublicationDate: "",
    webTitle: "",
    webUrl: "",
    apiUrl: "",
    fields: {
      thumbnail: "",
      body: "",
    },
  };
  try {
    const response = await fetch(
      `${baseUrl}/${newsParam}?show-fields=thumbnail%2Cbody&api-key=${apiKey}`
    );
    const data: SingleApiResponse = await response.json();
    details = data.response.content;
  } catch (error) {
    console.log(error);
  }

  return (
    <div className="flex items-center justify-center min-h-screen p-8 gap-16">
      <div className={styles.newsDetailsContainer}>
        <div className={styles.banner}>
          <Image
            className={styles.image}
            src={details.fields.thumbnail}
            alt={details.webUrl}
            width={750}
            height={450}
          />
          <div className={styles.creds}>
            <h1>{details.webTitle}</h1>
            <div className={styles.credcreds}>
              <Link href={`/sections/${details.sectionId}`}><h2>{details.sectionName}</h2></Link>
              <h3>{details.webPublicationDate.slice(0, 10)}</h3>
            </div>
          </div>
        </div>

        <div className={styles.text} dangerouslySetInnerHTML={{ __html: details.fields.body }}></div>
      </div>
    </div>
  );
};

export default NewsDetails;

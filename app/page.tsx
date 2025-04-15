import { apiKey, baseUrl } from "@/api/constants";
import NewsList from "@/components/NewsList";
import Paginator from "@/components/paginator";
import { ApiResponse, News } from "@/types/news";

export default async function Home() {
  let list: News[] = [
    {
      id: "",
      type: "",
      sectionId: "",
      sectionName: "",
      webPublicationDate: "",
      webTitle: "",
      webUrl: "",
      apiUrl: "",
      fields: {
        trailText: "",
        thumbnail: "",
      },
    },
  ];
  try {
    const response = await fetch(
      `${baseUrl}/search?page=1&page-size=20&show-fields=thumbnail%2CtrailText&api-key=${apiKey}`
    );
    const data: ApiResponse = await response.json();
    if (data.response.status === "ok") {
      list = data.response.results;
    }
  } catch (error) {
    console.log(error);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 gap-16">
      <NewsList news={list} />
      <Paginator currentPageNumber={1} baseDirectory="" />
    </div>
  );
}

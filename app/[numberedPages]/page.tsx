import NewsList from "@/components/NewsList";
import { ApiResponse, News, NP } from "@/types/news";
import { apiKey, baseUrl } from "@/api/constants";
import Paginator from "@/components/paginator";

const NumberedPage = async ({ params }: { params: Promise<NP> }) => {
  const param = await params;
  const currentPageNumber = parseInt(param.numberedPages);
  let totalNumOfNews = 0;
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
      `${baseUrl}/search?page=${currentPageNumber}&page-size=20&show-fields=thumbnail%2CtrailText&api-key=${apiKey}`
    );
    const data: ApiResponse = await response.json();
    if (data.response.status === "ok") {
      list = data.response.results;
      totalNumOfNews = data.response.total;
    }
  } catch (error) {
    console.log(error);
  }

  const totalPageCount = Math.trunc(totalNumOfNews / 20);
  console.log(totalPageCount);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 gap-16">
      <NewsList news={list} />
      <Paginator currentPageNumber={currentPageNumber} />
    </div>
  );
};

export default NumberedPage;

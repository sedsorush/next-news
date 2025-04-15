import { apiKey, baseUrl } from "@/api/constants";
import NewsList from "@/components/NewsList";
import Paginator from "@/components/paginator";
import { ApiResponse, News, SP } from "@/types/news";
import React from "react";

const SectionalNews = async ({ params }: { params: Promise<SP> }) => {
  const param = await params;
  const section = param.section[0];
  const currentPageNumber = parseInt(param.section[1]);

  let totalCountOfNews= 0
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
      `${baseUrl}/${section}?page=${currentPageNumber}&page-size=20&show-fields=thumbnail%2CtrailText&api-key=${apiKey}`
    );
    const data: ApiResponse = await response.json();
    if (data.response.status === "ok") {
      list = data.response.results;
      totalCountOfNews=data.response.total
    }
  } catch (error) {
    console.log(error);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 gap-16">
      <NewsList news={list} />
      <Paginator baseDirectory={"sections/"+param.section[0]} currentPageNumber={currentPageNumber}/>
    </div>
  );
};

export default SectionalNews;

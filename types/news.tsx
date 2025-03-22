import NumberedPage from "@/app/[numberedPages]/page";

export interface News {
  id: string;
  type: string;
  sectionId: string;
  sectionName: string;
  webPublicationDate: string;
  webTitle: string;
  webUrl: string;
  apiUrl: string;
  fields: {
    trailText: string;
    thumbnail: string;
  };
}

export interface ApiResponse {
  response: {
    status: string;
    total: number;
    results: News[];
  };
}

export interface SingleApiResponse {
  response: {
    status: string;
    content: SingleNews;
  };
}
export interface SingleNews {
  id: string;
  type: string;
  sectionId: string;
  sectionName: string;
  webPublicationDate: string;
  webTitle: string;
  webUrl: string;
  apiUrl: string;
  fields: {
    thumbnail: string;
    body: TrustedHTML;
  };
}

export interface P {
  newsId: string[];
}

export interface SP {
  section: string[];
}

export interface NP {
  numberedPages: string;
}

export interface Sections {
  id: string;
  webTitle: string;
}

export interface SectionsApiResponse {
  response: {
    status: string;
    total:number;
    results: Sections[];
  };
}

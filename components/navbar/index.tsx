import { apiKey, baseUrl } from "@/api/constants";
import styles from "./navbar.module.css";
import { Sections, SectionsApiResponse } from "@/types/news";
import Link from "next/link";

const Navbar = async () => {
  let sectionsCount = 0
  let sections: Sections[] = [
    {
      id: "",
      webTitle: "",
    },
  ];
  try {
    const response = await fetch(`${baseUrl}/sections?api-key=${apiKey}`);
    const data: SectionsApiResponse = await response.json();
    if (data.response.status === "ok") {
      sectionsCount= data.response.total
      sections = data.response.results;
    }
  } catch (error) {
    console.log(error);
  }
  const num1 = Math.trunc((Math.random())*sectionsCount)
  const num2 = Math.trunc((Math.random())*sectionsCount)
  const num3 = Math.trunc((Math.random())*sectionsCount)
  const num4 = Math.trunc((Math.random())*sectionsCount)
  const num5 = Math.trunc((Math.random())*sectionsCount)

  return (
    <div className={styles.navbar}>
      <Link href="/"><h1 className={styles.homeLogo}>NEXT NEWS</h1></Link>
      <div className={styles.sections}>
        Sections {">"}
        <div className={styles.sectionsMenu}>
          <ul>
            <Link href={`/sections/${sections[num2]?.id}/1`}><li>{sections[num2]?.webTitle}</li></Link>
            <Link href={`/sections/${sections[num3]?.id}/1`}><li>{sections[num3]?.webTitle}</li></Link>
            <Link href={`/sections/${sections[num1]?.id}/1`}><li>{sections[num1]?.webTitle}</li></Link>
            <Link href={`/sections/${sections[num4]?.id}/1`}><li>{sections[num4]?.webTitle}</li></Link>
            <Link href={`/sections/${sections[num5]?.id}/1`}><li>{sections[num5]?.webTitle}</li></Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

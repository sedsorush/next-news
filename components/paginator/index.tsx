import Link from "next/link";
import styles from "./paginator.module.css";

const Paginator = ({
  currentPageNumber,
  baseDirectory
}: {
  currentPageNumber: number;
  baseDirectory: string;
}) => {
  return (
    <div className={styles.paginator}>
      {currentPageNumber === 1 ? null : (
        <Link
          href={`${baseDirectory ? "/" + baseDirectory + "/" : "/"}${
            currentPageNumber - 1
          }`}>
          <p>{"<"}</p>
        </Link>
      )}
      {currentPageNumber > 2 ? (
        <Link href={`${baseDirectory ? "/" + baseDirectory + "/1" : "/1"}`}>
          <p>1</p>
        </Link>
      ) : null}
      {currentPageNumber <= 3 ? null : <span>...</span>}
      {currentPageNumber === 1 ? (
        <p className={styles.active}>1</p>
      ) : (
        <Link href={`/${currentPageNumber - 1}`}>
          <p>{currentPageNumber - 1}</p>
        </Link>
      )}
      {currentPageNumber === 1 ? (
        <Link href={`${baseDirectory ? "/" + baseDirectory + "/2" : "/2"}`}>
          <p>2</p>
        </Link>
      ) : (
        <p className={styles.active}>{currentPageNumber}</p>
      )}
      {currentPageNumber === 1 ? (
        <Link href={`${baseDirectory ? "/" + baseDirectory + "/3" : "/3"}`}>
          <p>3</p>
        </Link>
      ) : (
        <Link
          href={`${
            baseDirectory
              ? "/" + baseDirectory + `/${currentPageNumber + 1}`
              : `/${currentPageNumber + 1}`
          }`}>
          <p>{currentPageNumber + 1}</p>
        </Link>
      )}
      <span>...</span>
      <Link
        href={`${
          baseDirectory
            ? "/" + baseDirectory + `/${currentPageNumber + 1}`
            : `/${currentPageNumber + 1}`
        }`}>
        <p>{">"}</p>
      </Link>
    </div>
  );
};

export default Paginator;

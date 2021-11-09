import { useState } from "react";
import { Button } from "react-bulma-components";

import styles from "../styles/Gallery.module.scss";

interface ImageProps {
  alt: string;
  src: string;
  width: string;
  height: string;
}

function Gallery({ images }: { images: ImageProps[] }): React.ReactElement {
  const [page, setPage] = useState<number>(0);

  return (
    <div className={styles.galleryWrapper}>
      <div>
        <img
          alt={images[page].alt}
          src={images[page].src}
          width={images[page].width}
          height={images[page].height}
          className={styles.image}
        />
      </div>
      <div>
        <Button
          aria-label="Go backward"
          disabled={page - 1 < 0}
          onClick={() => setPage(page - 1)}
          size="small"
        >
          <span className="icon-arrow-circle-o-left" />
        </Button>
        <Button
          aria-label="Go forward"
          disabled={page + 1 > images.length - 1}
          onClick={() => setPage(page + 1)}
          size="small"
        >
          <span className="icon-arrow-circle-o-right" />
        </Button>
      </div>
    </div>
  );
}

export default Gallery;

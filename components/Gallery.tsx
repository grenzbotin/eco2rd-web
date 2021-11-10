import { useState } from "react";
import { Button, Modal } from "react-bulma-components";

import styles from "../styles/Gallery.module.scss";

interface ImageProps {
  alt: string;
  src: string;
  width: string;
  height: string;
  caption: string;
}

function Gallery({ images }: { images: ImageProps[] }): React.ReactElement {
  const [page, setPage] = useState<number>(0);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const handlePreviousClick = () =>
    setPage(page === 0 ? images.length - 1 : page - 1);
  const handleNextClick = () =>
    setPage(page === images.length - 1 ? 0 : page + 1);

  return (
    <div className={styles.galleryWrapper}>
      <Modal
        show={modalOpen}
        showClose={false}
        onClose={() => setModalOpen(false)}
      >
        <Modal.Card>
          <Modal.Card.Header showClose>
            <Modal.Card.Title>
              <span className={styles.modalTitleWrapper}>
                Image {page + 1} of {images.length}
                <span>
                  <Button
                    aria-label="Go to previous"
                    onClick={handlePreviousClick}
                    size="small"
                    className={styles.modalButton}
                  >
                    <span className="icon-arrow-circle-o-left" />
                  </Button>
                  <Button
                    aria-label="Go to next"
                    onClick={handleNextClick}
                    size="small"
                    className={styles.modalButton}
                  >
                    <span className="icon-arrow-circle-o-right" />
                  </Button>
                </span>
              </span>
            </Modal.Card.Title>
          </Modal.Card.Header>
          <Modal.Card.Body className={styles.galleryModal}>
            <figure
              aria-label="Show zoomed version of picture"
              onClick={() => setModalOpen(true)}
            >
              <img
                alt={images[page].alt}
                src={images[page].src}
                width={images[page].width}
                height={images[page].height}
              />
              <figcaption>{images[page].caption}</figcaption>
            </figure>
          </Modal.Card.Body>
        </Modal.Card>
      </Modal>
      <figure onClick={() => setModalOpen(true)}>
        <img
          alt={images[page].alt}
          src={images[page].src}
          width={images[page].width}
          height={images[page].height}
          className={styles.highlight}
        />
        <figcaption>{images[page].caption}</figcaption>
      </figure>
      <div>
        <Button
          aria-label="Go to previous"
          onClick={handlePreviousClick}
          size="small"
        >
          <span className="icon-arrow-circle-o-left" />
        </Button>
        <Button aria-label="Go to next" onClick={handleNextClick} size="small">
          <span className="icon-arrow-circle-o-right" />
        </Button>
      </div>
    </div>
  );
}

export default Gallery;

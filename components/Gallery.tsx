import { useState } from "react";
import { Button, Modal } from "react-bulma-components";
import { MediaProps } from "../config/media";

import styles from "../styles/Gallery.module.scss";

function Gallery({ media }: { media: MediaProps[] }): React.ReactElement {
  const [page, setPage] = useState<number>(0);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const handlePreviousClick = () =>
    setPage(page === 0 ? media.length - 1 : page - 1);
  const handleNextClick = () =>
    setPage(page === media.length - 1 ? 0 : page + 1);

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
                {media.length > 1 && (
                  <>
                    {page + 1} of {media.length}
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
                  </>
                )}
              </span>
            </Modal.Card.Title>
          </Modal.Card.Header>
          <Modal.Card.Body className={styles.galleryModal}>
            <figure onClick={() => setModalOpen(true)}>
              {media[page].type === "video" ? (
                <video controls autoPlay>
                  <source src={media[page].src} type="video/mp4" />
                </video>
              ) : (
                <img
                  alt={media[page].alt}
                  src={media[page].src}
                  width={media[page].width}
                  height={media[page].height}
                />
              )}
              <figcaption>{media[page].caption}</figcaption>
            </figure>
          </Modal.Card.Body>
        </Modal.Card>
      </Modal>
      <figure
        aria-label="Show zoomed version"
        onClick={() => setModalOpen(true)}
      >
        {media[0].type === "video" ? (
          <video
            className={styles.highlight}
            poster="/media/images/demo_poster.webp"
            preload="none"
          >
            <source src={media[0].src} type="video/mp4" />
          </video>
        ) : (
          <img
            alt={media[0].alt}
            src={media[0].src}
            width={media[0].width}
            height={media[0].height}
            className={styles.highlight}
          />
        )}
        <figcaption>{media[0].caption}</figcaption>
      </figure>
    </div>
  );
}

export default Gallery;

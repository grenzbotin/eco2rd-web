import { useState } from "react";
import { EXTENSION_STATUS } from "../config/extension";
import styles from "../styles/ExtensionNews.module.scss";
import { Button } from "react-bulma-components";

const NEWS_SHOWN = 10;

function ExtensionNews(): React.ReactElement {
  const [showMore, setShowMore] = useState<Boolean>(false);

  return (
    <article className={styles.news}>
      <div>
        {EXTENSION_STATUS.slice(0, NEWS_SHOWN).map((item) => (
          <article key={item.id}>
            <h2>{item.title}</h2>
            <time dateTime={item.date.toISOString()}>
              {item.date.toLocaleDateString()}
            </time>
            <p>{item.content}</p>
          </article>
        ))}
        {NEWS_SHOWN < EXTENSION_STATUS.length && (
          <Button
            size="small"
            color="dark"
            fullwidth
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "less" : "more"}
          </Button>
        )}
        {showMore &&
          EXTENSION_STATUS.slice(NEWS_SHOWN).map((item) => (
            <article key={item.id}>
              <h2>{item.title}</h2>
              <time dateTime={item.date.toISOString()}>
                {item.date.toLocaleDateString()}
              </time>
              <p>{item.content}</p>
            </article>
          ))}
      </div>
    </article>
  );
}

export default ExtensionNews;

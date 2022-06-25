import { Button } from "react-bulma-components";
import { EXTENSION_STATUS } from "../config/extension";
import styles from "../styles/CurrentRelease.module.scss";

const lastRelease = EXTENSION_STATUS[0];

function CurrentRelease(): React.ReactElement {
  return (
    <aside className={styles.current_release}>
      <div>{lastRelease.title}</div>
      {lastRelease.link && (
        <Button
          size="small"
          color="secondary"
          renderAs="a"
          target="_blank"
          rel="noreferrer"
          href={lastRelease.link}
          className={styles.release_button}
        >
          <span
            className={[
              styles.release_button_icon,
              "icon-arrow-circle-o-right",
            ].join(" ")}
          />
          Release notes {lastRelease.version}
        </Button>
      )}
    </aside>
  );
}

export default CurrentRelease;

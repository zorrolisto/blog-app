import { FunctionComponent, PropsWithChildren } from "react";
import styles from "./Layout.module.scss";

const Layout: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  return <div className={styles.container}>{children}</div>;
};

export default Layout;

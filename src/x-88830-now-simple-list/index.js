import { createCustomElement } from "@servicenow/ui-core";
import snabbdom from "@servicenow/ui-renderer-snabbdom";
import styles from "./styles.scss";

const view = () => {
	return <div>Hello World!</div>;
};

createCustomElement("x-88830-now-simple-list", {
	renderer: { type: snabbdom },
	view,
	styles,
});

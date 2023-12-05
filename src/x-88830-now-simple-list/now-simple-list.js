import { createCustomElement } from "@servicenow/ui-core";
import snabbdom from "@servicenow/ui-renderer-snabbdom";
import styles from "./styles.scss";
import view from "./view";
import actions from "./actions";

createCustomElement("x-88830-now-simple-list", {
	renderer: { type: snabbdom },
	view,
	styles,
	properties: {
		table: {
			default: "task",
		},
		fields: {
			default: ["number", "assigned_to", "sys_created_on"],
			schema: {
				type: "array",
				items: {
					type: "string",
				},
			},
		},
	},
	actionHandlers: actions,
});

import PiContainer from "./container.vue";
import PiAccessSelector from "../views/certd/access/access-selector/index.vue";
import PiDnsProviderSelector from "./dns-provider-selector/index.vue";
import PiOutputSelector from "../views/certd/pipeline/pipeline/component/output-selector/index.vue";
import PiEditable from "./editable.vue";
import vip from "./vip-button/install.js";
import { CheckCircleOutlined, InfoCircleOutlined, UndoOutlined } from "@ant-design/icons-vue";
import CronEditor from "./cron-editor/index.vue";
import { CronLight } from "@vue-js-cron/light";
import "@vue-js-cron/light/dist/light.css";
import Plugins from "./plugins/index";
export default {
  install(app: any) {
    app.component("PiContainer", PiContainer);
    app.component("PiAccessSelector", PiAccessSelector);
    app.component("PiEditable", PiEditable);
    app.component("PiOutputSelector", PiOutputSelector);
    app.component("PiDnsProviderSelector", PiDnsProviderSelector);

    app.component("CronLight", CronLight);
    app.component("CronEditor", CronEditor);

    app.component("CheckCircleOutlined", CheckCircleOutlined);
    app.component("InfoCircleOutlined", InfoCircleOutlined);
    app.component("UndoOutlined", UndoOutlined);

    app.use(vip);
    app.use(Plugins);
  }
};

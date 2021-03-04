import { Transformer } from "@parcel/plugin";
import { stripJsonComments } from "strip-json-comments";

export default new Transformer({
  async transform({ asset, config, logger, resolve, options }) {
    let text = await asset.getCode();
    transformed = stripJsonComments(text);
    asset.setCode(transformed);
    asset.type = "json";
    return [asset];
  },
});

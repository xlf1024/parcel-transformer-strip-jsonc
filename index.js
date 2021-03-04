const { Transformer } = require("@parcel/plugin");
const stripJsonComments = require("strip-json-comments");

module.exports = new Transformer({
  async transform({ asset, config, logger, resolve, options }) {
    let text = await asset.getCode();
    transformed = stripJsonComments(text);
    asset.setCode(transformed);
    asset.type = "json";
    return [asset];
  },
});

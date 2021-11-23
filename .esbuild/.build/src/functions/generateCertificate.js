var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// src/functions/generateCertificate.ts
__export(exports, {
  handle: () => handle
});

// src/utils/dynamodbClient.ts
var import_aws_sdk = __toModule(require("aws-sdk"));
var options = {
  region: "localhost",
  endpoint: "http://localhost:8000",
  accessKeyId: "xxxxxx",
  secretAccessKey: "xxxxxx"
};
var isOffline = () => {
  return process.env.IS_OFFLINE;
};
var document = isOffline() ? new import_aws_sdk.DynamoDB.DocumentClient(options) : new import_aws_sdk.DynamoDB.DocumentClient();

// src/functions/generateCertificate.ts
var handle = async (event) => {
  const { grade, id, name } = event.body;
  await document.put({
    TableName: "users_certificates",
    Item: {
      id,
      name,
      grade
    }
  }).promise();
  return {
    statusCode: 201,
    body: JSON.stringify({
      message: "Certificate created"
    }),
    headers: {
      "Content-Type": "application/json"
    }
  };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handle
});
//# sourceMappingURL=generateCertificate.js.map

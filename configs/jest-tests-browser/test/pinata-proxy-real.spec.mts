import { readFileSync } from "node:fs";
import { resolve } from "node:path";

import { AuthenticatedFormDataUploader } from "@lukso/data-provider-base";

beforeEach(() => {
  jest.resetAllMocks();
});

it.only("should pin images (web, pinata, proxy)", async () => {
  const { uploader, file } = await mockDependencies();

  const upload = await uploader.upload(file);

  expect(upload.toString()).toEqual(
    "ipfs://QmPhT2FsbyQ2p2gmKBt42Voqr9izxhUn8yLPKg2NqtrGWi"
  );
});

async function mockDependencies() {
  const file = new (global.Blob || Blob)(
    // This is only for jest so it's no big deal.
    // eslint-disable-next-line unicorn/prefer-module
    [readFileSync(resolve(__dirname, "./test-image.png"))],
    {
      type: "image/png",
    }
  );
  // TODO: fix "is not assignable to type IDE error"
  // file.arrayBuffer = async () => {
  //   return Buffer.from('123123');
  // };

  const uploader = new AuthenticatedFormDataUploader(
    "http://127.0.0.1:8787/api/v0/add",
    process.env.TEST_SHARED_KEY || ""
  );
  return {
    file,
    uploader,
  };
}
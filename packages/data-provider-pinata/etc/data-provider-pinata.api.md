## API Report File for "@lukso/data-provider-pinata"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { BaseFormDataUploader } from '@lukso/data-provider-base';
import { FormDataPostHeaders } from '@lukso/data-provider-base';
import { FormDataRequestOptions } from '@lukso/data-provider-base';
import { PinataConfig } from '@pinata/sdk';

// Warning: (ae-internal-missing-underscore) The name "createConfigForAxiosHeaders" should be prefixed with an underscore because the declaration is marked as @internal
//
// @internal
export function createConfigForAxiosHeaders(config: PinataConfig): {
    withCredentials: boolean;
    headers: {
        pinata_api_key: string;
        pinata_secret_api_key: string;
        Authorization?: undefined;
    };
} | {
    headers: {
        Authorization: string;
        pinata_api_key?: undefined;
        pinata_secret_api_key?: undefined;
    };
    withCredentials?: undefined;
};

// Warning: (ae-internal-missing-underscore) The name "createConfigForAxiosHeadersWithFormData" should be prefixed with an underscore because the declaration is marked as @internal
//
// @internal
export function createConfigForAxiosHeadersWithFormData(config: PinataConfig): {
    maxContentLength: number;
    maxBodyLength: number;
    withCredentials: boolean;
    headers: {
        pinata_api_key: string;
        pinata_secret_api_key: string;
        Authorization?: undefined;
    };
} | {
    maxContentLength: number;
    maxBodyLength: number;
    headers: {
        Authorization: string;
        pinata_api_key?: undefined;
        pinata_secret_api_key?: undefined;
    };
    withCredentials?: undefined;
};

// @public (undocumented)
export const ERROR_NO_CREDENTIALS_PROVIDED = "No credentials provided! Please provide your pinata api key and pinata secret api key or your pinata JWT key as an argument when you start this script";

// @public
class PinataUploader extends BaseFormDataUploader {
    constructor(pinataConfig: PinataConfig);
    addMetadata(dataContent: FormData, meta?: FormDataPostHeaders): Promise<void>;
    getEndpoint(): string;
    getRequestOptions(_dataContent: FormData, meta?: FormDataPostHeaders): Promise<FormDataRequestOptions>;
    resolveUrl(result: any): string;
}
export { PinataUploader }
export default PinataUploader;

// @public
export function validateMetadata(metadata: any): void;

// (No @packageDocumentation comment for this package)

```
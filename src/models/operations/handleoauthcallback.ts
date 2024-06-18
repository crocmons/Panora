/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import * as components from "../components";
import * as z from "zod";

export type HandleOAuthCallbackRequest = {
    code: string;
    state: string;
};

export type HandleOAuthCallbackResponse = {
    httpMeta: components.HTTPMetadata;
};

/** @internal */
export namespace HandleOAuthCallbackRequest$ {
    export const inboundSchema: z.ZodType<HandleOAuthCallbackRequest, z.ZodTypeDef, unknown> =
        z.object({
            code: z.string(),
            state: z.string(),
        });

    export type Outbound = {
        code: string;
        state: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, HandleOAuthCallbackRequest> =
        z.object({
            code: z.string(),
            state: z.string(),
        });
}

/** @internal */
export namespace HandleOAuthCallbackResponse$ {
    export const inboundSchema: z.ZodType<HandleOAuthCallbackResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                HttpMeta: "httpMeta",
            });
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, HandleOAuthCallbackResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                httpMeta: "HttpMeta",
            });
        });
}

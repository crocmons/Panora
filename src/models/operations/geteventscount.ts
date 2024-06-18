/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import * as components from "../components";
import * as z from "zod";

export type GetEventsCountResponse = {
    httpMeta: components.HTTPMetadata;
    number?: number | undefined;
};

/** @internal */
export namespace GetEventsCountResponse$ {
    export const inboundSchema: z.ZodType<GetEventsCountResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            number: z.number().optional(),
        })
        .transform((v) => {
            return remap$(v, {
                HttpMeta: "httpMeta",
            });
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        number?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetEventsCountResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            number: z.number().optional(),
        })
        .transform((v) => {
            return remap$(v, {
                httpMeta: "HttpMeta",
            });
        });
}

/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type UnifiedApplicationOutput = {};

/** @internal */
export namespace UnifiedApplicationOutput$ {
    export const inboundSchema: z.ZodType<UnifiedApplicationOutput, z.ZodTypeDef, unknown> =
        z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UnifiedApplicationOutput> =
        z.object({});
}

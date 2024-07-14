/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type UnifiedInterviewOutput = {};

/** @internal */
export const UnifiedInterviewOutput$inboundSchema: z.ZodType<
    UnifiedInterviewOutput,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type UnifiedInterviewOutput$Outbound = {};

/** @internal */
export const UnifiedInterviewOutput$outboundSchema: z.ZodType<
    UnifiedInterviewOutput$Outbound,
    z.ZodTypeDef,
    UnifiedInterviewOutput
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedInterviewOutput$ {
    /** @deprecated use `UnifiedInterviewOutput$inboundSchema` instead. */
    export const inboundSchema = UnifiedInterviewOutput$inboundSchema;
    /** @deprecated use `UnifiedInterviewOutput$outboundSchema` instead. */
    export const outboundSchema = UnifiedInterviewOutput$outboundSchema;
    /** @deprecated use `UnifiedInterviewOutput$Outbound` instead. */
    export type Outbound = UnifiedInterviewOutput$Outbound;
}

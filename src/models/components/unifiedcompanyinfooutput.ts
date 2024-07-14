/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type UnifiedCompanyInfoOutput = {};

/** @internal */
export const UnifiedCompanyInfoOutput$inboundSchema: z.ZodType<
    UnifiedCompanyInfoOutput,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type UnifiedCompanyInfoOutput$Outbound = {};

/** @internal */
export const UnifiedCompanyInfoOutput$outboundSchema: z.ZodType<
    UnifiedCompanyInfoOutput$Outbound,
    z.ZodTypeDef,
    UnifiedCompanyInfoOutput
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedCompanyInfoOutput$ {
    /** @deprecated use `UnifiedCompanyInfoOutput$inboundSchema` instead. */
    export const inboundSchema = UnifiedCompanyInfoOutput$inboundSchema;
    /** @deprecated use `UnifiedCompanyInfoOutput$outboundSchema` instead. */
    export const outboundSchema = UnifiedCompanyInfoOutput$outboundSchema;
    /** @deprecated use `UnifiedCompanyInfoOutput$Outbound` instead. */
    export type Outbound = UnifiedCompanyInfoOutput$Outbound;
}

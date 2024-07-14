/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type GetEngagementsRequest = {
    /**
     * The connection token
     */
    xConnectionToken: string;
    /**
     * Set to true to include data from the original software.
     */
    remoteData?: boolean | undefined;
    /**
     * Set to get the number of records.
     */
    limit?: number | undefined;
    /**
     * Set to get the number of records after this cursor.
     */
    cursor?: string | undefined;
};

export type GetEngagementsResponseBody = {
    message?: string | undefined;
    error?: string | undefined;
    statusCode: number;
    data?: components.UnifiedEngagementOutput | undefined;
};

/** @internal */
export const GetEngagementsRequest$inboundSchema: z.ZodType<
    GetEngagementsRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        "x-connection-token": z.string(),
        remote_data: z.boolean().optional(),
        limit: z.number().default(50),
        cursor: z.string().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            "x-connection-token": "xConnectionToken",
            remote_data: "remoteData",
        });
    });

/** @internal */
export type GetEngagementsRequest$Outbound = {
    "x-connection-token": string;
    remote_data?: boolean | undefined;
    limit: number;
    cursor?: string | undefined;
};

/** @internal */
export const GetEngagementsRequest$outboundSchema: z.ZodType<
    GetEngagementsRequest$Outbound,
    z.ZodTypeDef,
    GetEngagementsRequest
> = z
    .object({
        xConnectionToken: z.string(),
        remoteData: z.boolean().optional(),
        limit: z.number().default(50),
        cursor: z.string().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            xConnectionToken: "x-connection-token",
            remoteData: "remote_data",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetEngagementsRequest$ {
    /** @deprecated use `GetEngagementsRequest$inboundSchema` instead. */
    export const inboundSchema = GetEngagementsRequest$inboundSchema;
    /** @deprecated use `GetEngagementsRequest$outboundSchema` instead. */
    export const outboundSchema = GetEngagementsRequest$outboundSchema;
    /** @deprecated use `GetEngagementsRequest$Outbound` instead. */
    export type Outbound = GetEngagementsRequest$Outbound;
}

/** @internal */
export const GetEngagementsResponseBody$inboundSchema: z.ZodType<
    GetEngagementsResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    message: z.string().optional(),
    error: z.string().optional(),
    statusCode: z.number(),
    data: components.UnifiedEngagementOutput$inboundSchema.optional(),
});

/** @internal */
export type GetEngagementsResponseBody$Outbound = {
    message?: string | undefined;
    error?: string | undefined;
    statusCode: number;
    data?: components.UnifiedEngagementOutput$Outbound | undefined;
};

/** @internal */
export const GetEngagementsResponseBody$outboundSchema: z.ZodType<
    GetEngagementsResponseBody$Outbound,
    z.ZodTypeDef,
    GetEngagementsResponseBody
> = z.object({
    message: z.string().optional(),
    error: z.string().optional(),
    statusCode: z.number(),
    data: components.UnifiedEngagementOutput$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetEngagementsResponseBody$ {
    /** @deprecated use `GetEngagementsResponseBody$inboundSchema` instead. */
    export const inboundSchema = GetEngagementsResponseBody$inboundSchema;
    /** @deprecated use `GetEngagementsResponseBody$outboundSchema` instead. */
    export const outboundSchema = GetEngagementsResponseBody$outboundSchema;
    /** @deprecated use `GetEngagementsResponseBody$Outbound` instead. */
    export type Outbound = GetEngagementsResponseBody$Outbound;
}

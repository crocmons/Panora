/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type GetAtsAttachmentsRequest = {
    /**
     * The connection token
     */
    xConnectionToken: string;
    /**
     * Set to true to include data from the original Ats software.
     */
    remoteData?: boolean | undefined;
};

export type GetAtsAttachmentsResponseBody = {
    message?: string | undefined;
    error?: string | undefined;
    statusCode: number;
    data?: components.UnifiedAttachmentOutput | undefined;
};

/** @internal */
export const GetAtsAttachmentsRequest$inboundSchema: z.ZodType<
    GetAtsAttachmentsRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        "x-connection-token": z.string(),
        remote_data: z.boolean().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            "x-connection-token": "xConnectionToken",
            remote_data: "remoteData",
        });
    });

/** @internal */
export type GetAtsAttachmentsRequest$Outbound = {
    "x-connection-token": string;
    remote_data?: boolean | undefined;
};

/** @internal */
export const GetAtsAttachmentsRequest$outboundSchema: z.ZodType<
    GetAtsAttachmentsRequest$Outbound,
    z.ZodTypeDef,
    GetAtsAttachmentsRequest
> = z
    .object({
        xConnectionToken: z.string(),
        remoteData: z.boolean().optional(),
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
export namespace GetAtsAttachmentsRequest$ {
    /** @deprecated use `GetAtsAttachmentsRequest$inboundSchema` instead. */
    export const inboundSchema = GetAtsAttachmentsRequest$inboundSchema;
    /** @deprecated use `GetAtsAttachmentsRequest$outboundSchema` instead. */
    export const outboundSchema = GetAtsAttachmentsRequest$outboundSchema;
    /** @deprecated use `GetAtsAttachmentsRequest$Outbound` instead. */
    export type Outbound = GetAtsAttachmentsRequest$Outbound;
}

/** @internal */
export const GetAtsAttachmentsResponseBody$inboundSchema: z.ZodType<
    GetAtsAttachmentsResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    message: z.string().optional(),
    error: z.string().optional(),
    statusCode: z.number(),
    data: components.UnifiedAttachmentOutput$inboundSchema.optional(),
});

/** @internal */
export type GetAtsAttachmentsResponseBody$Outbound = {
    message?: string | undefined;
    error?: string | undefined;
    statusCode: number;
    data?: components.UnifiedAttachmentOutput$Outbound | undefined;
};

/** @internal */
export const GetAtsAttachmentsResponseBody$outboundSchema: z.ZodType<
    GetAtsAttachmentsResponseBody$Outbound,
    z.ZodTypeDef,
    GetAtsAttachmentsResponseBody
> = z.object({
    message: z.string().optional(),
    error: z.string().optional(),
    statusCode: z.number(),
    data: components.UnifiedAttachmentOutput$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAtsAttachmentsResponseBody$ {
    /** @deprecated use `GetAtsAttachmentsResponseBody$inboundSchema` instead. */
    export const inboundSchema = GetAtsAttachmentsResponseBody$inboundSchema;
    /** @deprecated use `GetAtsAttachmentsResponseBody$outboundSchema` instead. */
    export const outboundSchema = GetAtsAttachmentsResponseBody$outboundSchema;
    /** @deprecated use `GetAtsAttachmentsResponseBody$Outbound` instead. */
    export type Outbound = GetAtsAttachmentsResponseBody$Outbound;
}

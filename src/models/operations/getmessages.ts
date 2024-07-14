/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type GetMessagesRequest = {
    /**
     * The connection token
     */
    xConnectionToken: string;
    /**
     * Set to true to include data from the original Marketingautomation software.
     */
    remoteData?: boolean | undefined;
};

export type GetMessagesResponseBody = {
    message?: string | undefined;
    error?: string | undefined;
    statusCode: number;
    data?: components.UnifiedMessageOutput | undefined;
};

/** @internal */
export const GetMessagesRequest$inboundSchema: z.ZodType<
    GetMessagesRequest,
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
export type GetMessagesRequest$Outbound = {
    "x-connection-token": string;
    remote_data?: boolean | undefined;
};

/** @internal */
export const GetMessagesRequest$outboundSchema: z.ZodType<
    GetMessagesRequest$Outbound,
    z.ZodTypeDef,
    GetMessagesRequest
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
export namespace GetMessagesRequest$ {
    /** @deprecated use `GetMessagesRequest$inboundSchema` instead. */
    export const inboundSchema = GetMessagesRequest$inboundSchema;
    /** @deprecated use `GetMessagesRequest$outboundSchema` instead. */
    export const outboundSchema = GetMessagesRequest$outboundSchema;
    /** @deprecated use `GetMessagesRequest$Outbound` instead. */
    export type Outbound = GetMessagesRequest$Outbound;
}

/** @internal */
export const GetMessagesResponseBody$inboundSchema: z.ZodType<
    GetMessagesResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    message: z.string().optional(),
    error: z.string().optional(),
    statusCode: z.number(),
    data: components.UnifiedMessageOutput$inboundSchema.optional(),
});

/** @internal */
export type GetMessagesResponseBody$Outbound = {
    message?: string | undefined;
    error?: string | undefined;
    statusCode: number;
    data?: components.UnifiedMessageOutput$Outbound | undefined;
};

/** @internal */
export const GetMessagesResponseBody$outboundSchema: z.ZodType<
    GetMessagesResponseBody$Outbound,
    z.ZodTypeDef,
    GetMessagesResponseBody
> = z.object({
    message: z.string().optional(),
    error: z.string().optional(),
    statusCode: z.number(),
    data: components.UnifiedMessageOutput$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetMessagesResponseBody$ {
    /** @deprecated use `GetMessagesResponseBody$inboundSchema` instead. */
    export const inboundSchema = GetMessagesResponseBody$inboundSchema;
    /** @deprecated use `GetMessagesResponseBody$outboundSchema` instead. */
    export const outboundSchema = GetMessagesResponseBody$outboundSchema;
    /** @deprecated use `GetMessagesResponseBody$Outbound` instead. */
    export type Outbound = GetMessagesResponseBody$Outbound;
}

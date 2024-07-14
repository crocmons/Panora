/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type GetDrivesRequest = {
    /**
     * The connection token
     */
    xConnectionToken: string;
    /**
     * Set to true to include data from the original Filestorage software.
     */
    remoteData?: boolean | undefined;
};

export type GetDrivesResponseBody = {
    message?: string | undefined;
    error?: string | undefined;
    statusCode: number;
    data?: components.UnifiedDriveOutput | undefined;
};

/** @internal */
export const GetDrivesRequest$inboundSchema: z.ZodType<GetDrivesRequest, z.ZodTypeDef, unknown> = z
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
export type GetDrivesRequest$Outbound = {
    "x-connection-token": string;
    remote_data?: boolean | undefined;
};

/** @internal */
export const GetDrivesRequest$outboundSchema: z.ZodType<
    GetDrivesRequest$Outbound,
    z.ZodTypeDef,
    GetDrivesRequest
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
export namespace GetDrivesRequest$ {
    /** @deprecated use `GetDrivesRequest$inboundSchema` instead. */
    export const inboundSchema = GetDrivesRequest$inboundSchema;
    /** @deprecated use `GetDrivesRequest$outboundSchema` instead. */
    export const outboundSchema = GetDrivesRequest$outboundSchema;
    /** @deprecated use `GetDrivesRequest$Outbound` instead. */
    export type Outbound = GetDrivesRequest$Outbound;
}

/** @internal */
export const GetDrivesResponseBody$inboundSchema: z.ZodType<
    GetDrivesResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    message: z.string().optional(),
    error: z.string().optional(),
    statusCode: z.number(),
    data: components.UnifiedDriveOutput$inboundSchema.optional(),
});

/** @internal */
export type GetDrivesResponseBody$Outbound = {
    message?: string | undefined;
    error?: string | undefined;
    statusCode: number;
    data?: components.UnifiedDriveOutput$Outbound | undefined;
};

/** @internal */
export const GetDrivesResponseBody$outboundSchema: z.ZodType<
    GetDrivesResponseBody$Outbound,
    z.ZodTypeDef,
    GetDrivesResponseBody
> = z.object({
    message: z.string().optional(),
    error: z.string().optional(),
    statusCode: z.number(),
    data: components.UnifiedDriveOutput$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetDrivesResponseBody$ {
    /** @deprecated use `GetDrivesResponseBody$inboundSchema` instead. */
    export const inboundSchema = GetDrivesResponseBody$inboundSchema;
    /** @deprecated use `GetDrivesResponseBody$outboundSchema` instead. */
    export const outboundSchema = GetDrivesResponseBody$outboundSchema;
    /** @deprecated use `GetDrivesResponseBody$Outbound` instead. */
    export type Outbound = GetDrivesResponseBody$Outbound;
}

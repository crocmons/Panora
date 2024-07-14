/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type AddCampaignRequest = {
    /**
     * The connection token
     */
    xConnectionToken: string;
    /**
     * Set to true to include data from the original Marketingautomation software.
     */
    remoteData?: boolean | undefined;
    unifiedCampaignInput: components.UnifiedCampaignInput;
};

export type AddCampaignResponseBody = {
    message?: string | undefined;
    error?: string | undefined;
    statusCode: number;
    data?: components.UnifiedCampaignOutput | undefined;
};

export type AddCampaignResponse = components.UnifiedCampaignOutput | AddCampaignResponseBody;

/** @internal */
export const AddCampaignRequest$inboundSchema: z.ZodType<
    AddCampaignRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        "x-connection-token": z.string(),
        remote_data: z.boolean().optional(),
        UnifiedCampaignInput: components.UnifiedCampaignInput$inboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            "x-connection-token": "xConnectionToken",
            remote_data: "remoteData",
            UnifiedCampaignInput: "unifiedCampaignInput",
        });
    });

/** @internal */
export type AddCampaignRequest$Outbound = {
    "x-connection-token": string;
    remote_data?: boolean | undefined;
    UnifiedCampaignInput: components.UnifiedCampaignInput$Outbound;
};

/** @internal */
export const AddCampaignRequest$outboundSchema: z.ZodType<
    AddCampaignRequest$Outbound,
    z.ZodTypeDef,
    AddCampaignRequest
> = z
    .object({
        xConnectionToken: z.string(),
        remoteData: z.boolean().optional(),
        unifiedCampaignInput: components.UnifiedCampaignInput$outboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            xConnectionToken: "x-connection-token",
            remoteData: "remote_data",
            unifiedCampaignInput: "UnifiedCampaignInput",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AddCampaignRequest$ {
    /** @deprecated use `AddCampaignRequest$inboundSchema` instead. */
    export const inboundSchema = AddCampaignRequest$inboundSchema;
    /** @deprecated use `AddCampaignRequest$outboundSchema` instead. */
    export const outboundSchema = AddCampaignRequest$outboundSchema;
    /** @deprecated use `AddCampaignRequest$Outbound` instead. */
    export type Outbound = AddCampaignRequest$Outbound;
}

/** @internal */
export const AddCampaignResponseBody$inboundSchema: z.ZodType<
    AddCampaignResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    message: z.string().optional(),
    error: z.string().optional(),
    statusCode: z.number(),
    data: components.UnifiedCampaignOutput$inboundSchema.optional(),
});

/** @internal */
export type AddCampaignResponseBody$Outbound = {
    message?: string | undefined;
    error?: string | undefined;
    statusCode: number;
    data?: components.UnifiedCampaignOutput$Outbound | undefined;
};

/** @internal */
export const AddCampaignResponseBody$outboundSchema: z.ZodType<
    AddCampaignResponseBody$Outbound,
    z.ZodTypeDef,
    AddCampaignResponseBody
> = z.object({
    message: z.string().optional(),
    error: z.string().optional(),
    statusCode: z.number(),
    data: components.UnifiedCampaignOutput$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AddCampaignResponseBody$ {
    /** @deprecated use `AddCampaignResponseBody$inboundSchema` instead. */
    export const inboundSchema = AddCampaignResponseBody$inboundSchema;
    /** @deprecated use `AddCampaignResponseBody$outboundSchema` instead. */
    export const outboundSchema = AddCampaignResponseBody$outboundSchema;
    /** @deprecated use `AddCampaignResponseBody$Outbound` instead. */
    export type Outbound = AddCampaignResponseBody$Outbound;
}

/** @internal */
export const AddCampaignResponse$inboundSchema: z.ZodType<
    AddCampaignResponse,
    z.ZodTypeDef,
    unknown
> = z.union([
    components.UnifiedCampaignOutput$inboundSchema,
    z.lazy(() => AddCampaignResponseBody$inboundSchema),
]);

/** @internal */
export type AddCampaignResponse$Outbound =
    | components.UnifiedCampaignOutput$Outbound
    | AddCampaignResponseBody$Outbound;

/** @internal */
export const AddCampaignResponse$outboundSchema: z.ZodType<
    AddCampaignResponse$Outbound,
    z.ZodTypeDef,
    AddCampaignResponse
> = z.union([
    components.UnifiedCampaignOutput$outboundSchema,
    z.lazy(() => AddCampaignResponseBody$outboundSchema),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AddCampaignResponse$ {
    /** @deprecated use `AddCampaignResponse$inboundSchema` instead. */
    export const inboundSchema = AddCampaignResponse$inboundSchema;
    /** @deprecated use `AddCampaignResponse$outboundSchema` instead. */
    export const outboundSchema = AddCampaignResponse$outboundSchema;
    /** @deprecated use `AddCampaignResponse$Outbound` instead. */
    export type Outbound = AddCampaignResponse$Outbound;
}

/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import * as components from "../components";
import * as z from "zod";

export type GetMarketingAutomationContactsRequest = {
    /**
     * The connection token
     */
    xConnectionToken: string;
    /**
     * Set to true to include data from the original Marketingautomation software.
     */
    remoteData?: boolean | undefined;
};

export type GetMarketingAutomationContactsResponseBody = {
    message?: string | undefined;
    error?: string | undefined;
    statusCode: number;
    data?: components.UnifiedContactOutput | undefined;
};

export type GetMarketingAutomationContactsResponse = {
    httpMeta: components.HTTPMetadata;
    object?: GetMarketingAutomationContactsResponseBody | undefined;
};

/** @internal */
export namespace GetMarketingAutomationContactsRequest$ {
    export const inboundSchema: z.ZodType<
        GetMarketingAutomationContactsRequest,
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

    export type Outbound = {
        "x-connection-token": string;
        remote_data?: boolean | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetMarketingAutomationContactsRequest
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
}

/** @internal */
export namespace GetMarketingAutomationContactsResponseBody$ {
    export const inboundSchema: z.ZodType<
        GetMarketingAutomationContactsResponseBody,
        z.ZodTypeDef,
        unknown
    > = z.object({
        message: z.string().optional(),
        error: z.string().optional(),
        statusCode: z.number(),
        data: components.UnifiedContactOutput$.inboundSchema.optional(),
    });

    export type Outbound = {
        message?: string | undefined;
        error?: string | undefined;
        statusCode: number;
        data?: components.UnifiedContactOutput$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetMarketingAutomationContactsResponseBody
    > = z.object({
        message: z.string().optional(),
        error: z.string().optional(),
        statusCode: z.number(),
        data: components.UnifiedContactOutput$.outboundSchema.optional(),
    });
}

/** @internal */
export namespace GetMarketingAutomationContactsResponse$ {
    export const inboundSchema: z.ZodType<
        GetMarketingAutomationContactsResponse,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            object: z
                .lazy(() => GetMarketingAutomationContactsResponseBody$.inboundSchema)
                .optional(),
        })
        .transform((v) => {
            return remap$(v, {
                HttpMeta: "httpMeta",
            });
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        object?: GetMarketingAutomationContactsResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetMarketingAutomationContactsResponse
    > = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            object: z
                .lazy(() => GetMarketingAutomationContactsResponseBody$.outboundSchema)
                .optional(),
        })
        .transform((v) => {
            return remap$(v, {
                httpMeta: "HttpMeta",
            });
        });
}

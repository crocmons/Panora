/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import * as components from "../components";
import * as z from "zod";

export type AddRejectReasonRequest = {
    /**
     * The connection token
     */
    xConnectionToken: string;
    /**
     * Set to true to include data from the original Ats software.
     */
    remoteData?: boolean | undefined;
    unifiedRejectReasonInput: components.UnifiedRejectReasonInput;
};

export type AddRejectReasonResponseBody = {
    message?: string | undefined;
    error?: string | undefined;
    statusCode: number;
    data?: components.UnifiedRejectReasonOutput | undefined;
};

export type AddRejectReasonResponse = {
    httpMeta: components.HTTPMetadata;
    object?: AddRejectReasonResponseBody | undefined;
    unifiedRejectReasonOutput?: components.UnifiedRejectReasonOutput | undefined;
};

/** @internal */
export namespace AddRejectReasonRequest$ {
    export const inboundSchema: z.ZodType<AddRejectReasonRequest, z.ZodTypeDef, unknown> = z
        .object({
            "x-connection-token": z.string(),
            remote_data: z.boolean().optional(),
            UnifiedRejectReasonInput: components.UnifiedRejectReasonInput$.inboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                "x-connection-token": "xConnectionToken",
                remote_data: "remoteData",
                UnifiedRejectReasonInput: "unifiedRejectReasonInput",
            });
        });

    export type Outbound = {
        "x-connection-token": string;
        remote_data?: boolean | undefined;
        UnifiedRejectReasonInput: components.UnifiedRejectReasonInput$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddRejectReasonRequest> = z
        .object({
            xConnectionToken: z.string(),
            remoteData: z.boolean().optional(),
            unifiedRejectReasonInput: components.UnifiedRejectReasonInput$.outboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                xConnectionToken: "x-connection-token",
                remoteData: "remote_data",
                unifiedRejectReasonInput: "UnifiedRejectReasonInput",
            });
        });
}

/** @internal */
export namespace AddRejectReasonResponseBody$ {
    export const inboundSchema: z.ZodType<AddRejectReasonResponseBody, z.ZodTypeDef, unknown> =
        z.object({
            message: z.string().optional(),
            error: z.string().optional(),
            statusCode: z.number(),
            data: components.UnifiedRejectReasonOutput$.inboundSchema.optional(),
        });

    export type Outbound = {
        message?: string | undefined;
        error?: string | undefined;
        statusCode: number;
        data?: components.UnifiedRejectReasonOutput$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddRejectReasonResponseBody> =
        z.object({
            message: z.string().optional(),
            error: z.string().optional(),
            statusCode: z.number(),
            data: components.UnifiedRejectReasonOutput$.outboundSchema.optional(),
        });
}

/** @internal */
export namespace AddRejectReasonResponse$ {
    export const inboundSchema: z.ZodType<AddRejectReasonResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            object: z.lazy(() => AddRejectReasonResponseBody$.inboundSchema).optional(),
            UnifiedRejectReasonOutput:
                components.UnifiedRejectReasonOutput$.inboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                HttpMeta: "httpMeta",
                UnifiedRejectReasonOutput: "unifiedRejectReasonOutput",
            });
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        object?: AddRejectReasonResponseBody$.Outbound | undefined;
        UnifiedRejectReasonOutput?: components.UnifiedRejectReasonOutput$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddRejectReasonResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            object: z.lazy(() => AddRejectReasonResponseBody$.outboundSchema).optional(),
            unifiedRejectReasonOutput:
                components.UnifiedRejectReasonOutput$.outboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                httpMeta: "HttpMeta",
                unifiedRejectReasonOutput: "UnifiedRejectReasonOutput",
            });
        });
}

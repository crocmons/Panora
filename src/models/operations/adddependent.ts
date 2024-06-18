/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import * as components from "../components";
import * as z from "zod";

export type AddDependentRequest = {
    /**
     * The connection token
     */
    xConnectionToken: string;
    /**
     * Set to true to include data from the original Hris software.
     */
    remoteData?: boolean | undefined;
    unifiedDependentInput: components.UnifiedDependentInput;
};

export type AddDependentResponseBody = {
    message?: string | undefined;
    error?: string | undefined;
    statusCode: number;
    data?: components.UnifiedDependentOutput | undefined;
};

export type AddDependentResponse = {
    httpMeta: components.HTTPMetadata;
    object?: AddDependentResponseBody | undefined;
    unifiedDependentOutput?: components.UnifiedDependentOutput | undefined;
};

/** @internal */
export namespace AddDependentRequest$ {
    export const inboundSchema: z.ZodType<AddDependentRequest, z.ZodTypeDef, unknown> = z
        .object({
            "x-connection-token": z.string(),
            remote_data: z.boolean().optional(),
            UnifiedDependentInput: components.UnifiedDependentInput$.inboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                "x-connection-token": "xConnectionToken",
                remote_data: "remoteData",
                UnifiedDependentInput: "unifiedDependentInput",
            });
        });

    export type Outbound = {
        "x-connection-token": string;
        remote_data?: boolean | undefined;
        UnifiedDependentInput: components.UnifiedDependentInput$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddDependentRequest> = z
        .object({
            xConnectionToken: z.string(),
            remoteData: z.boolean().optional(),
            unifiedDependentInput: components.UnifiedDependentInput$.outboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                xConnectionToken: "x-connection-token",
                remoteData: "remote_data",
                unifiedDependentInput: "UnifiedDependentInput",
            });
        });
}

/** @internal */
export namespace AddDependentResponseBody$ {
    export const inboundSchema: z.ZodType<AddDependentResponseBody, z.ZodTypeDef, unknown> =
        z.object({
            message: z.string().optional(),
            error: z.string().optional(),
            statusCode: z.number(),
            data: components.UnifiedDependentOutput$.inboundSchema.optional(),
        });

    export type Outbound = {
        message?: string | undefined;
        error?: string | undefined;
        statusCode: number;
        data?: components.UnifiedDependentOutput$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddDependentResponseBody> =
        z.object({
            message: z.string().optional(),
            error: z.string().optional(),
            statusCode: z.number(),
            data: components.UnifiedDependentOutput$.outboundSchema.optional(),
        });
}

/** @internal */
export namespace AddDependentResponse$ {
    export const inboundSchema: z.ZodType<AddDependentResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            object: z.lazy(() => AddDependentResponseBody$.inboundSchema).optional(),
            UnifiedDependentOutput: components.UnifiedDependentOutput$.inboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                HttpMeta: "httpMeta",
                UnifiedDependentOutput: "unifiedDependentOutput",
            });
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        object?: AddDependentResponseBody$.Outbound | undefined;
        UnifiedDependentOutput?: components.UnifiedDependentOutput$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddDependentResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            object: z.lazy(() => AddDependentResponseBody$.outboundSchema).optional(),
            unifiedDependentOutput: components.UnifiedDependentOutput$.outboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                httpMeta: "HttpMeta",
                unifiedDependentOutput: "UnifiedDependentOutput",
            });
        });
}

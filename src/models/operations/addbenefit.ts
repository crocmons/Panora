/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import * as components from "../components";
import * as z from "zod";

export type AddBenefitRequest = {
    /**
     * The connection token
     */
    xConnectionToken: string;
    /**
     * Set to true to include data from the original Hris software.
     */
    remoteData?: boolean | undefined;
    unifiedBenefitInput: components.UnifiedBenefitInput;
};

export type AddBenefitResponseBody = {
    message?: string | undefined;
    error?: string | undefined;
    statusCode: number;
    data?: components.UnifiedBenefitOutput | undefined;
};

export type AddBenefitResponse = {
    httpMeta: components.HTTPMetadata;
    object?: AddBenefitResponseBody | undefined;
    unifiedBenefitOutput?: components.UnifiedBenefitOutput | undefined;
};

/** @internal */
export namespace AddBenefitRequest$ {
    export const inboundSchema: z.ZodType<AddBenefitRequest, z.ZodTypeDef, unknown> = z
        .object({
            "x-connection-token": z.string(),
            remote_data: z.boolean().optional(),
            UnifiedBenefitInput: components.UnifiedBenefitInput$.inboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                "x-connection-token": "xConnectionToken",
                remote_data: "remoteData",
                UnifiedBenefitInput: "unifiedBenefitInput",
            });
        });

    export type Outbound = {
        "x-connection-token": string;
        remote_data?: boolean | undefined;
        UnifiedBenefitInput: components.UnifiedBenefitInput$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddBenefitRequest> = z
        .object({
            xConnectionToken: z.string(),
            remoteData: z.boolean().optional(),
            unifiedBenefitInput: components.UnifiedBenefitInput$.outboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                xConnectionToken: "x-connection-token",
                remoteData: "remote_data",
                unifiedBenefitInput: "UnifiedBenefitInput",
            });
        });
}

/** @internal */
export namespace AddBenefitResponseBody$ {
    export const inboundSchema: z.ZodType<AddBenefitResponseBody, z.ZodTypeDef, unknown> = z.object(
        {
            message: z.string().optional(),
            error: z.string().optional(),
            statusCode: z.number(),
            data: components.UnifiedBenefitOutput$.inboundSchema.optional(),
        }
    );

    export type Outbound = {
        message?: string | undefined;
        error?: string | undefined;
        statusCode: number;
        data?: components.UnifiedBenefitOutput$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddBenefitResponseBody> =
        z.object({
            message: z.string().optional(),
            error: z.string().optional(),
            statusCode: z.number(),
            data: components.UnifiedBenefitOutput$.outboundSchema.optional(),
        });
}

/** @internal */
export namespace AddBenefitResponse$ {
    export const inboundSchema: z.ZodType<AddBenefitResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            object: z.lazy(() => AddBenefitResponseBody$.inboundSchema).optional(),
            UnifiedBenefitOutput: components.UnifiedBenefitOutput$.inboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                HttpMeta: "httpMeta",
                UnifiedBenefitOutput: "unifiedBenefitOutput",
            });
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        object?: AddBenefitResponseBody$.Outbound | undefined;
        UnifiedBenefitOutput?: components.UnifiedBenefitOutput$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddBenefitResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            object: z.lazy(() => AddBenefitResponseBody$.outboundSchema).optional(),
            unifiedBenefitOutput: components.UnifiedBenefitOutput$.outboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                httpMeta: "HttpMeta",
                unifiedBenefitOutput: "UnifiedBenefitOutput",
            });
        });
}

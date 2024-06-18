/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import * as components from "../components";
import * as z from "zod";

export type AddPhoneNumbersRequest = {
    connectionToken: string;
    /**
     * Set to true to include data from the original Accounting software.
     */
    remoteData?: boolean | undefined;
    /**
     * The connection token
     */
    xConnectionToken: string;
    requestBody: Array<components.UnifiedPhoneNumberInput>;
};

export type AddPhoneNumbersResponseBody = {
    message?: string | undefined;
    error?: string | undefined;
    statusCode: number;
    data?: components.UnifiedPhoneNumberOutput | undefined;
};

export type AddPhoneNumbersResponse = {
    httpMeta: components.HTTPMetadata;
    object?: AddPhoneNumbersResponseBody | undefined;
    unifiedPhoneNumberOutputs?: Array<components.UnifiedPhoneNumberOutput> | undefined;
};

/** @internal */
export namespace AddPhoneNumbersRequest$ {
    export const inboundSchema: z.ZodType<AddPhoneNumbersRequest, z.ZodTypeDef, unknown> = z
        .object({
            connection_token: z.string(),
            remote_data: z.boolean().optional(),
            "x-connection-token": z.string(),
            RequestBody: z.array(components.UnifiedPhoneNumberInput$.inboundSchema),
        })
        .transform((v) => {
            return remap$(v, {
                connection_token: "connectionToken",
                remote_data: "remoteData",
                "x-connection-token": "xConnectionToken",
                RequestBody: "requestBody",
            });
        });

    export type Outbound = {
        connection_token: string;
        remote_data?: boolean | undefined;
        "x-connection-token": string;
        RequestBody: Array<components.UnifiedPhoneNumberInput$.Outbound>;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddPhoneNumbersRequest> = z
        .object({
            connectionToken: z.string(),
            remoteData: z.boolean().optional(),
            xConnectionToken: z.string(),
            requestBody: z.array(components.UnifiedPhoneNumberInput$.outboundSchema),
        })
        .transform((v) => {
            return remap$(v, {
                connectionToken: "connection_token",
                remoteData: "remote_data",
                xConnectionToken: "x-connection-token",
                requestBody: "RequestBody",
            });
        });
}

/** @internal */
export namespace AddPhoneNumbersResponseBody$ {
    export const inboundSchema: z.ZodType<AddPhoneNumbersResponseBody, z.ZodTypeDef, unknown> =
        z.object({
            message: z.string().optional(),
            error: z.string().optional(),
            statusCode: z.number(),
            data: components.UnifiedPhoneNumberOutput$.inboundSchema.optional(),
        });

    export type Outbound = {
        message?: string | undefined;
        error?: string | undefined;
        statusCode: number;
        data?: components.UnifiedPhoneNumberOutput$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddPhoneNumbersResponseBody> =
        z.object({
            message: z.string().optional(),
            error: z.string().optional(),
            statusCode: z.number(),
            data: components.UnifiedPhoneNumberOutput$.outboundSchema.optional(),
        });
}

/** @internal */
export namespace AddPhoneNumbersResponse$ {
    export const inboundSchema: z.ZodType<AddPhoneNumbersResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            object: z.lazy(() => AddPhoneNumbersResponseBody$.inboundSchema).optional(),
            UnifiedPhoneNumberOutputs: z
                .array(components.UnifiedPhoneNumberOutput$.inboundSchema)
                .optional(),
        })
        .transform((v) => {
            return remap$(v, {
                HttpMeta: "httpMeta",
                UnifiedPhoneNumberOutputs: "unifiedPhoneNumberOutputs",
            });
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        object?: AddPhoneNumbersResponseBody$.Outbound | undefined;
        UnifiedPhoneNumberOutputs?:
            | Array<components.UnifiedPhoneNumberOutput$.Outbound>
            | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddPhoneNumbersResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            object: z.lazy(() => AddPhoneNumbersResponseBody$.outboundSchema).optional(),
            unifiedPhoneNumberOutputs: z
                .array(components.UnifiedPhoneNumberOutput$.outboundSchema)
                .optional(),
        })
        .transform((v) => {
            return remap$(v, {
                httpMeta: "HttpMeta",
                unifiedPhoneNumberOutputs: "UnifiedPhoneNumberOutputs",
            });
        });
}

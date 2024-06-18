/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import * as components from "../components";
import * as z from "zod";

export type AddPaymentsRequest = {
    connectionToken: string;
    /**
     * Set to true to include data from the original Accounting software.
     */
    remoteData?: boolean | undefined;
    /**
     * The connection token
     */
    xConnectionToken: string;
    requestBody: Array<components.UnifiedPaymentInput>;
};

export type AddPaymentsResponseBody = {
    message?: string | undefined;
    error?: string | undefined;
    statusCode: number;
    data?: components.UnifiedPaymentOutput | undefined;
};

export type AddPaymentsResponse = {
    httpMeta: components.HTTPMetadata;
    object?: AddPaymentsResponseBody | undefined;
    unifiedPaymentOutputs?: Array<components.UnifiedPaymentOutput> | undefined;
};

/** @internal */
export namespace AddPaymentsRequest$ {
    export const inboundSchema: z.ZodType<AddPaymentsRequest, z.ZodTypeDef, unknown> = z
        .object({
            connection_token: z.string(),
            remote_data: z.boolean().optional(),
            "x-connection-token": z.string(),
            RequestBody: z.array(components.UnifiedPaymentInput$.inboundSchema),
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
        RequestBody: Array<components.UnifiedPaymentInput$.Outbound>;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddPaymentsRequest> = z
        .object({
            connectionToken: z.string(),
            remoteData: z.boolean().optional(),
            xConnectionToken: z.string(),
            requestBody: z.array(components.UnifiedPaymentInput$.outboundSchema),
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
export namespace AddPaymentsResponseBody$ {
    export const inboundSchema: z.ZodType<AddPaymentsResponseBody, z.ZodTypeDef, unknown> =
        z.object({
            message: z.string().optional(),
            error: z.string().optional(),
            statusCode: z.number(),
            data: components.UnifiedPaymentOutput$.inboundSchema.optional(),
        });

    export type Outbound = {
        message?: string | undefined;
        error?: string | undefined;
        statusCode: number;
        data?: components.UnifiedPaymentOutput$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddPaymentsResponseBody> =
        z.object({
            message: z.string().optional(),
            error: z.string().optional(),
            statusCode: z.number(),
            data: components.UnifiedPaymentOutput$.outboundSchema.optional(),
        });
}

/** @internal */
export namespace AddPaymentsResponse$ {
    export const inboundSchema: z.ZodType<AddPaymentsResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            object: z.lazy(() => AddPaymentsResponseBody$.inboundSchema).optional(),
            UnifiedPaymentOutputs: z
                .array(components.UnifiedPaymentOutput$.inboundSchema)
                .optional(),
        })
        .transform((v) => {
            return remap$(v, {
                HttpMeta: "httpMeta",
                UnifiedPaymentOutputs: "unifiedPaymentOutputs",
            });
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        object?: AddPaymentsResponseBody$.Outbound | undefined;
        UnifiedPaymentOutputs?: Array<components.UnifiedPaymentOutput$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddPaymentsResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            object: z.lazy(() => AddPaymentsResponseBody$.outboundSchema).optional(),
            unifiedPaymentOutputs: z
                .array(components.UnifiedPaymentOutput$.outboundSchema)
                .optional(),
        })
        .transform((v) => {
            return remap$(v, {
                httpMeta: "HttpMeta",
                unifiedPaymentOutputs: "UnifiedPaymentOutputs",
            });
        });
}

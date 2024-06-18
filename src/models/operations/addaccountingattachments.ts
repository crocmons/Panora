/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import * as components from "../components";
import * as z from "zod";

export type AddAccountingAttachmentsRequest = {
    connectionToken: string;
    /**
     * Set to true to include data from the original Accounting software.
     */
    remoteData?: boolean | undefined;
    /**
     * The connection token
     */
    xConnectionToken: string;
    requestBody: Array<components.UnifiedAttachmentInput>;
};

export type AddAccountingAttachmentsResponseBody = {
    message?: string | undefined;
    error?: string | undefined;
    statusCode: number;
    data?: components.UnifiedAttachmentOutput | undefined;
};

export type AddAccountingAttachmentsResponse = {
    httpMeta: components.HTTPMetadata;
    object?: AddAccountingAttachmentsResponseBody | undefined;
    unifiedAttachmentOutputs?: Array<components.UnifiedAttachmentOutput> | undefined;
};

/** @internal */
export namespace AddAccountingAttachmentsRequest$ {
    export const inboundSchema: z.ZodType<AddAccountingAttachmentsRequest, z.ZodTypeDef, unknown> =
        z
            .object({
                connection_token: z.string(),
                remote_data: z.boolean().optional(),
                "x-connection-token": z.string(),
                RequestBody: z.array(components.UnifiedAttachmentInput$.inboundSchema),
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
        RequestBody: Array<components.UnifiedAttachmentInput$.Outbound>;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        AddAccountingAttachmentsRequest
    > = z
        .object({
            connectionToken: z.string(),
            remoteData: z.boolean().optional(),
            xConnectionToken: z.string(),
            requestBody: z.array(components.UnifiedAttachmentInput$.outboundSchema),
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
export namespace AddAccountingAttachmentsResponseBody$ {
    export const inboundSchema: z.ZodType<
        AddAccountingAttachmentsResponseBody,
        z.ZodTypeDef,
        unknown
    > = z.object({
        message: z.string().optional(),
        error: z.string().optional(),
        statusCode: z.number(),
        data: components.UnifiedAttachmentOutput$.inboundSchema.optional(),
    });

    export type Outbound = {
        message?: string | undefined;
        error?: string | undefined;
        statusCode: number;
        data?: components.UnifiedAttachmentOutput$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        AddAccountingAttachmentsResponseBody
    > = z.object({
        message: z.string().optional(),
        error: z.string().optional(),
        statusCode: z.number(),
        data: components.UnifiedAttachmentOutput$.outboundSchema.optional(),
    });
}

/** @internal */
export namespace AddAccountingAttachmentsResponse$ {
    export const inboundSchema: z.ZodType<AddAccountingAttachmentsResponse, z.ZodTypeDef, unknown> =
        z
            .object({
                HttpMeta: components.HTTPMetadata$.inboundSchema,
                object: z
                    .lazy(() => AddAccountingAttachmentsResponseBody$.inboundSchema)
                    .optional(),
                UnifiedAttachmentOutputs: z
                    .array(components.UnifiedAttachmentOutput$.inboundSchema)
                    .optional(),
            })
            .transform((v) => {
                return remap$(v, {
                    HttpMeta: "httpMeta",
                    UnifiedAttachmentOutputs: "unifiedAttachmentOutputs",
                });
            });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        object?: AddAccountingAttachmentsResponseBody$.Outbound | undefined;
        UnifiedAttachmentOutputs?: Array<components.UnifiedAttachmentOutput$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        AddAccountingAttachmentsResponse
    > = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            object: z.lazy(() => AddAccountingAttachmentsResponseBody$.outboundSchema).optional(),
            unifiedAttachmentOutputs: z
                .array(components.UnifiedAttachmentOutput$.outboundSchema)
                .optional(),
        })
        .transform((v) => {
            return remap$(v, {
                httpMeta: "HttpMeta",
                unifiedAttachmentOutputs: "UnifiedAttachmentOutputs",
            });
        });
}

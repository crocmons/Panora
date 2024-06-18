/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import * as components from "../components";
import * as z from "zod";

export type GetTicketingAttachmentRequest = {
    /**
     * id of the attachment you want to retrive.
     */
    id: string;
    /**
     * Set to true to include data from the original Ticketing software.
     */
    remoteData?: boolean | undefined;
};

export type GetTicketingAttachmentResponseBody = {
    message?: string | undefined;
    error?: string | undefined;
    statusCode: number;
    data?: components.UnifiedAttachmentOutput | undefined;
};

export type GetTicketingAttachmentResponse = {
    httpMeta: components.HTTPMetadata;
    object?: GetTicketingAttachmentResponseBody | undefined;
};

/** @internal */
export namespace GetTicketingAttachmentRequest$ {
    export const inboundSchema: z.ZodType<GetTicketingAttachmentRequest, z.ZodTypeDef, unknown> = z
        .object({
            id: z.string(),
            remote_data: z.boolean().optional(),
        })
        .transform((v) => {
            return remap$(v, {
                remote_data: "remoteData",
            });
        });

    export type Outbound = {
        id: string;
        remote_data?: boolean | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetTicketingAttachmentRequest> =
        z
            .object({
                id: z.string(),
                remoteData: z.boolean().optional(),
            })
            .transform((v) => {
                return remap$(v, {
                    remoteData: "remote_data",
                });
            });
}

/** @internal */
export namespace GetTicketingAttachmentResponseBody$ {
    export const inboundSchema: z.ZodType<
        GetTicketingAttachmentResponseBody,
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
        GetTicketingAttachmentResponseBody
    > = z.object({
        message: z.string().optional(),
        error: z.string().optional(),
        statusCode: z.number(),
        data: components.UnifiedAttachmentOutput$.outboundSchema.optional(),
    });
}

/** @internal */
export namespace GetTicketingAttachmentResponse$ {
    export const inboundSchema: z.ZodType<GetTicketingAttachmentResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            object: z.lazy(() => GetTicketingAttachmentResponseBody$.inboundSchema).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                HttpMeta: "httpMeta",
            });
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        object?: GetTicketingAttachmentResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetTicketingAttachmentResponse> =
        z
            .object({
                httpMeta: components.HTTPMetadata$.outboundSchema,
                object: z.lazy(() => GetTicketingAttachmentResponseBody$.outboundSchema).optional(),
            })
            .transform((v) => {
                return remap$(v, {
                    httpMeta: "HttpMeta",
                });
            });
}

/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import * as components from "../components";
import * as z from "zod";

export type AddTasksRequest = {
    /**
     * The connection token
     */
    xConnectionToken: string;
    /**
     * Set to true to include data from the original Crm software.
     */
    remoteData?: boolean | undefined;
    requestBody: Array<components.UnifiedTaskInput>;
};

export type AddTasksResponseBody = {
    message?: string | undefined;
    error?: string | undefined;
    statusCode: number;
    data?: components.UnifiedTaskOutput | undefined;
};

export type AddTasksResponse = {
    httpMeta: components.HTTPMetadata;
    object?: AddTasksResponseBody | undefined;
    unifiedTaskOutputs?: Array<components.UnifiedTaskOutput> | undefined;
};

/** @internal */
export namespace AddTasksRequest$ {
    export const inboundSchema: z.ZodType<AddTasksRequest, z.ZodTypeDef, unknown> = z
        .object({
            "x-connection-token": z.string(),
            remote_data: z.boolean().optional(),
            RequestBody: z.array(components.UnifiedTaskInput$.inboundSchema),
        })
        .transform((v) => {
            return remap$(v, {
                "x-connection-token": "xConnectionToken",
                remote_data: "remoteData",
                RequestBody: "requestBody",
            });
        });

    export type Outbound = {
        "x-connection-token": string;
        remote_data?: boolean | undefined;
        RequestBody: Array<components.UnifiedTaskInput$.Outbound>;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddTasksRequest> = z
        .object({
            xConnectionToken: z.string(),
            remoteData: z.boolean().optional(),
            requestBody: z.array(components.UnifiedTaskInput$.outboundSchema),
        })
        .transform((v) => {
            return remap$(v, {
                xConnectionToken: "x-connection-token",
                remoteData: "remote_data",
                requestBody: "RequestBody",
            });
        });
}

/** @internal */
export namespace AddTasksResponseBody$ {
    export const inboundSchema: z.ZodType<AddTasksResponseBody, z.ZodTypeDef, unknown> = z.object({
        message: z.string().optional(),
        error: z.string().optional(),
        statusCode: z.number(),
        data: components.UnifiedTaskOutput$.inboundSchema.optional(),
    });

    export type Outbound = {
        message?: string | undefined;
        error?: string | undefined;
        statusCode: number;
        data?: components.UnifiedTaskOutput$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddTasksResponseBody> = z.object(
        {
            message: z.string().optional(),
            error: z.string().optional(),
            statusCode: z.number(),
            data: components.UnifiedTaskOutput$.outboundSchema.optional(),
        }
    );
}

/** @internal */
export namespace AddTasksResponse$ {
    export const inboundSchema: z.ZodType<AddTasksResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            object: z.lazy(() => AddTasksResponseBody$.inboundSchema).optional(),
            UnifiedTaskOutputs: z.array(components.UnifiedTaskOutput$.inboundSchema).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                HttpMeta: "httpMeta",
                UnifiedTaskOutputs: "unifiedTaskOutputs",
            });
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        object?: AddTasksResponseBody$.Outbound | undefined;
        UnifiedTaskOutputs?: Array<components.UnifiedTaskOutput$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddTasksResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            object: z.lazy(() => AddTasksResponseBody$.outboundSchema).optional(),
            unifiedTaskOutputs: z.array(components.UnifiedTaskOutput$.outboundSchema).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                httpMeta: "HttpMeta",
                unifiedTaskOutputs: "UnifiedTaskOutputs",
            });
        });
}

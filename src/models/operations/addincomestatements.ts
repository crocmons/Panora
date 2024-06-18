/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import * as components from "../components";
import * as z from "zod";

export type AddIncomeStatementsRequest = {
    connectionToken: string;
    /**
     * Set to true to include data from the original Accounting software.
     */
    remoteData?: boolean | undefined;
    /**
     * The connection token
     */
    xConnectionToken: string;
    requestBody: Array<components.UnifiedIncomeStatementInput>;
};

export type AddIncomeStatementsResponseBody = {
    message?: string | undefined;
    error?: string | undefined;
    statusCode: number;
    data?: components.UnifiedIncomeStatementOutput | undefined;
};

export type AddIncomeStatementsResponse = {
    httpMeta: components.HTTPMetadata;
    object?: AddIncomeStatementsResponseBody | undefined;
    unifiedIncomeStatementOutputs?: Array<components.UnifiedIncomeStatementOutput> | undefined;
};

/** @internal */
export namespace AddIncomeStatementsRequest$ {
    export const inboundSchema: z.ZodType<AddIncomeStatementsRequest, z.ZodTypeDef, unknown> = z
        .object({
            connection_token: z.string(),
            remote_data: z.boolean().optional(),
            "x-connection-token": z.string(),
            RequestBody: z.array(components.UnifiedIncomeStatementInput$.inboundSchema),
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
        RequestBody: Array<components.UnifiedIncomeStatementInput$.Outbound>;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddIncomeStatementsRequest> = z
        .object({
            connectionToken: z.string(),
            remoteData: z.boolean().optional(),
            xConnectionToken: z.string(),
            requestBody: z.array(components.UnifiedIncomeStatementInput$.outboundSchema),
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
export namespace AddIncomeStatementsResponseBody$ {
    export const inboundSchema: z.ZodType<AddIncomeStatementsResponseBody, z.ZodTypeDef, unknown> =
        z.object({
            message: z.string().optional(),
            error: z.string().optional(),
            statusCode: z.number(),
            data: components.UnifiedIncomeStatementOutput$.inboundSchema.optional(),
        });

    export type Outbound = {
        message?: string | undefined;
        error?: string | undefined;
        statusCode: number;
        data?: components.UnifiedIncomeStatementOutput$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        AddIncomeStatementsResponseBody
    > = z.object({
        message: z.string().optional(),
        error: z.string().optional(),
        statusCode: z.number(),
        data: components.UnifiedIncomeStatementOutput$.outboundSchema.optional(),
    });
}

/** @internal */
export namespace AddIncomeStatementsResponse$ {
    export const inboundSchema: z.ZodType<AddIncomeStatementsResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            object: z.lazy(() => AddIncomeStatementsResponseBody$.inboundSchema).optional(),
            UnifiedIncomeStatementOutputs: z
                .array(components.UnifiedIncomeStatementOutput$.inboundSchema)
                .optional(),
        })
        .transform((v) => {
            return remap$(v, {
                HttpMeta: "httpMeta",
                UnifiedIncomeStatementOutputs: "unifiedIncomeStatementOutputs",
            });
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        object?: AddIncomeStatementsResponseBody$.Outbound | undefined;
        UnifiedIncomeStatementOutputs?:
            | Array<components.UnifiedIncomeStatementOutput$.Outbound>
            | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddIncomeStatementsResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            object: z.lazy(() => AddIncomeStatementsResponseBody$.outboundSchema).optional(),
            unifiedIncomeStatementOutputs: z
                .array(components.UnifiedIncomeStatementOutput$.outboundSchema)
                .optional(),
        })
        .transform((v) => {
            return remap$(v, {
                httpMeta: "HttpMeta",
                unifiedIncomeStatementOutputs: "UnifiedIncomeStatementOutputs",
            });
        });
}

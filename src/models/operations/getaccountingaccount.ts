/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type GetAccountingAccountRequest = {
    /**
     * id of the account you want to retrieve.
     */
    id: string;
    /**
     * Set to true to include data from the original Accounting software.
     */
    remoteData?: boolean | undefined;
};

export type GetAccountingAccountResponseBody = {
    message?: string | undefined;
    error?: string | undefined;
    statusCode: number;
    data?: components.UnifiedAccountOutput | undefined;
};

/** @internal */
export const GetAccountingAccountRequest$inboundSchema: z.ZodType<
    GetAccountingAccountRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        id: z.string(),
        remote_data: z.boolean().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            remote_data: "remoteData",
        });
    });

/** @internal */
export type GetAccountingAccountRequest$Outbound = {
    id: string;
    remote_data?: boolean | undefined;
};

/** @internal */
export const GetAccountingAccountRequest$outboundSchema: z.ZodType<
    GetAccountingAccountRequest$Outbound,
    z.ZodTypeDef,
    GetAccountingAccountRequest
> = z
    .object({
        id: z.string(),
        remoteData: z.boolean().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            remoteData: "remote_data",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAccountingAccountRequest$ {
    /** @deprecated use `GetAccountingAccountRequest$inboundSchema` instead. */
    export const inboundSchema = GetAccountingAccountRequest$inboundSchema;
    /** @deprecated use `GetAccountingAccountRequest$outboundSchema` instead. */
    export const outboundSchema = GetAccountingAccountRequest$outboundSchema;
    /** @deprecated use `GetAccountingAccountRequest$Outbound` instead. */
    export type Outbound = GetAccountingAccountRequest$Outbound;
}

/** @internal */
export const GetAccountingAccountResponseBody$inboundSchema: z.ZodType<
    GetAccountingAccountResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    message: z.string().optional(),
    error: z.string().optional(),
    statusCode: z.number(),
    data: components.UnifiedAccountOutput$inboundSchema.optional(),
});

/** @internal */
export type GetAccountingAccountResponseBody$Outbound = {
    message?: string | undefined;
    error?: string | undefined;
    statusCode: number;
    data?: components.UnifiedAccountOutput$Outbound | undefined;
};

/** @internal */
export const GetAccountingAccountResponseBody$outboundSchema: z.ZodType<
    GetAccountingAccountResponseBody$Outbound,
    z.ZodTypeDef,
    GetAccountingAccountResponseBody
> = z.object({
    message: z.string().optional(),
    error: z.string().optional(),
    statusCode: z.number(),
    data: components.UnifiedAccountOutput$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAccountingAccountResponseBody$ {
    /** @deprecated use `GetAccountingAccountResponseBody$inboundSchema` instead. */
    export const inboundSchema = GetAccountingAccountResponseBody$inboundSchema;
    /** @deprecated use `GetAccountingAccountResponseBody$outboundSchema` instead. */
    export const outboundSchema = GetAccountingAccountResponseBody$outboundSchema;
    /** @deprecated use `GetAccountingAccountResponseBody$Outbound` instead. */
    export type Outbound = GetAccountingAccountResponseBody$Outbound;
}

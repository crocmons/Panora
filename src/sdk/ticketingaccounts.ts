/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks";
import { SDK_METADATA, SDKOptions, serverURLFromOptions } from "../lib/config";
import {
    encodeFormQuery as encodeFormQuery$,
    encodeSimple as encodeSimple$,
} from "../lib/encodings";
import { HTTPClient } from "../lib/http";
import * as schemas$ from "../lib/schemas";
import { ClientSDK, RequestOptions } from "../lib/sdks";
import * as operations from "../models/operations";

export class TicketingAccounts extends ClientSDK {
    private readonly options$: SDKOptions & { hooks?: SDKHooks };

    constructor(options: SDKOptions = {}) {
        const opt = options as unknown;
        let hooks: SDKHooks;
        if (
            typeof opt === "object" &&
            opt != null &&
            "hooks" in opt &&
            opt.hooks instanceof SDKHooks
        ) {
            hooks = opt.hooks;
        } else {
            hooks = new SDKHooks();
        }

        super({
            client: options.httpClient || new HTTPClient(),
            baseURL: serverURLFromOptions(options),
            hooks,
        });

        this.options$ = { ...options, hooks };
        void this.options$;
    }

    /**
     * List a batch of Accounts
     */
    async getTicketingAccounts(
        xConnectionToken: string,
        remoteData?: boolean | undefined,
        pageSize?: number | undefined,
        cursor?: string | undefined,
        options?: RequestOptions
    ): Promise<operations.GetTicketingAccountsResponse> {
        const input$: operations.GetTicketingAccountsRequest = {
            xConnectionToken: xConnectionToken,
            remoteData: remoteData,
            pageSize: pageSize,
            cursor: cursor,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.GetTicketingAccountsRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const path$ = this.templateURLComponent("/ticketing/accounts")();

        const query$ = encodeFormQuery$({
            cursor: payload$.cursor,
            pageSize: payload$.pageSize,
            remote_data: payload$.remote_data,
        });

        headers$.set(
            "x-connection-token",
            encodeSimple$("x-connection-token", payload$["x-connection-token"], {
                explode: false,
                charEncoding: "none",
            })
        );

        let security$;
        if (typeof this.options$.jwt === "function") {
            security$ = { jwt: await this.options$.jwt() };
        } else if (this.options$.jwt) {
            security$ = { jwt: this.options$.jwt };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "getTicketingAccounts",
            oAuth2Scopes: [],
            securitySource: this.options$.jwt,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["4XX", "5XX"] };
        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request$, doOptions);

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<operations.GetTicketingAccountsResponse>()
            .json(200, operations.GetTicketingAccountsResponse$, { key: "object" })
            .fail(["4XX", "5XX"])
            .match(response, request$, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Retrieve an Account
     *
     * @remarks
     * Retrieve an account from any connected Ticketing software
     */
    async getTicketingAccount(
        id: string,
        remoteData?: boolean | undefined,
        options?: RequestOptions
    ): Promise<operations.GetTicketingAccountResponse> {
        const input$: operations.GetTicketingAccountRequest = {
            id: id,
            remoteData: remoteData,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.GetTicketingAccountRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            id: encodeSimple$("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };
        const path$ = this.templateURLComponent("/ticketing/accounts/{id}")(pathParams$);

        const query$ = encodeFormQuery$({
            remote_data: payload$.remote_data,
        });

        let security$;
        if (typeof this.options$.jwt === "function") {
            security$ = { jwt: await this.options$.jwt() };
        } else if (this.options$.jwt) {
            security$ = { jwt: this.options$.jwt };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "getTicketingAccount",
            oAuth2Scopes: [],
            securitySource: this.options$.jwt,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["4XX", "5XX"] };
        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request$, doOptions);

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<operations.GetTicketingAccountResponse>()
            .json(200, operations.GetTicketingAccountResponse$, { key: "object" })
            .fail(["4XX", "5XX"])
            .match(response, request$, { extraFields: responseFields$ });

        return result$;
    }
}

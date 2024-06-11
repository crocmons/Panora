import { Module } from '@nestjs/common';
import { CrmConnectionsService } from './services/crm.connection.service';
import { PrismaService } from '@@core/prisma/prisma.service';
import { LoggerService } from '@@core/logger/logger.service';
import { WebhookService } from '@@core/webhook/webhook.service';
import { WebhookModule } from '@@core/webhook/webhook.module';
import { EnvironmentService } from '@@core/environment/environment.service';
import { EncryptionService } from '@@core/encryption/encryption.service';
import { ServiceRegistry } from './services/registry.service';
import { HubspotConnectionService } from './services/hubspot/hubspot.service';
import { ZohoConnectionService } from './services/zoho/zoho.service';
import { ZendeskConnectionService } from './services/zendesk/zendesk.service';
import { PipedriveConnectionService } from './services/pipedrive/pipedrive.service';
import { AttioConnectionService } from './services/attio/attio.service';
import { ConnectionsStrategiesService } from '@@core/connections-strategies/connections-strategies.service';
import { CloseConnectionService } from './services/close/close.service';

@Module({
  imports: [WebhookModule],
  providers: [
    CrmConnectionsService,
    PrismaService,
    ServiceRegistry,
    LoggerService,
    WebhookService,
    EnvironmentService,
    EncryptionService,
    ConnectionsStrategiesService,
    // PROVIDERS SERVICES
    HubspotConnectionService,
    AttioConnectionService,
    ZohoConnectionService,
    ZendeskConnectionService,
    PipedriveConnectionService,
    CloseConnectionService,
  ],
  exports: [CrmConnectionsService],
})
export class CrmConnectionModule {}

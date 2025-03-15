
import { App } from 'aws-cdk-lib';
import { InfrastructureStack } from '../lib/infrastructureStack';
import projectConfig = require('../../../../../configuration/projectConfig.json');

const app = new App();

new InfrastructureStack(app, `ModelConsumerOnlineInfrastructureStack-${projectConfig.projectName}`, {
    ...projectConfig,
    websiteDistPath: '../website/build',
});

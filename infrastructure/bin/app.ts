import { App } from 'aws-cdk-lib';
import { InfrastractureStack } from '../lib/infrastractureStack';
import projectConfig = require('../../configuration/projectConfig.json');

const app = new App();
new InfrastractureStack(app, `MLOpsInfrastractureStack-${projectConfig.projectName}`, {
    projectName: projectConfig.projectName,
    repoType: projectConfig.repoType === 'git' ? 'git' : 'codecommit',
    git: projectConfig.git,
});

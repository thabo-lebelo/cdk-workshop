#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
/*
import { CdkWorkshopStack } from '../lib/cdk-workshop-stack';

const app = new cdk.App();
new CdkWorkshopStack(app, 'CdkWorkshopStack');
*/

// Since the purpose of our pipeline is to deploy our application stack, we no longer want the main CDK application to deploy our original app. 

import { WorkshopPipelineStack } from '../lib/pipeline-stack';

const app = new cdk.App();
new WorkshopPipelineStack(app, 'CdkWorkshopPipelineStack');
import type { AWS } from '@serverless/typescript'

const serverlessConfiguration: AWS = {
  service: 'certificate',
  frameworkVersion: '2',
  plugins: [
    'serverless-esbuild',
    'serverless-dynamodb-local',
    'serverless-offline',
    'serverless-dotenv-plugin'
  ],
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    region: 'us-east-1',
    iamRoleStatements:[
      {
        Effect: 'Allow',
        Action: [
          'dynamodb:*',
        ],
        Resource: [
          '*'
        ]
      },
      {
        Effect: 'Allow',
        Action: [
          's3:*',
        ],
        Resource: [
          '*'
        ]
      }
    ],
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
    },
    lambdaHashingVersion: '20201221',
  },
  // import the function via paths
  functions: {
    generateCertificate: {
      handler: './src/functions/generateCertificate.handle',
      events: [
        {
          http: {
            path: '/generateCertificate',
            method: 'post',
            cors: true,
          },
        },
      ],
    },
    verifyCertificate: {
      handler: './src/functions/verifyCertificate.handle',
      events: [
        {
          http: {
            path: '/verifyCertificate/{id}',
            method: 'get',
            cors: true,
          }
        }
      ]
    }
  },
  package: { individually: false },
  resources:{
    Resources: {
      dbCertificatesUsers: {
        Type: 'AWS::DynamoDB::Table',
        Properties: {
          TableName: 'certificates-users',
          ProvisionedThroughput: {
            ReadCapacityUnits: 5,
            WriteCapacityUnits: 5,
          },
          AttributeDefinitions: [
            {
              AttributeName: 'id',
              AttributeType: 'S',
            }
          ],
          KeySchema: [
            {
              AttributeName: 'id',
              KeyType: 'HASH',
            }
          ]
        }
      }
    }
  },
  custom: {
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ['aws-sdk'],
      target: 'node14',
      define: { 'require.resolve': undefined },
      platform: 'node',
      concurrency: 10,
      external: [
        'chrome-aws-lambda'
      ]
    },
    dynamodb: {
      stages: ['dev', 'prod'],
      start: {
        port: 8000,
        inMemory: true,
        migrate: true,
      }
    }
  },
}

module.exports = serverlessConfiguration

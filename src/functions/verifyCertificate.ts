import { APIGatewayProxyHandler } from "aws-lambda"
import { document } from "src/utils/dynamodbClient"

export const handle: APIGatewayProxyHandler = async event => {
  const { id } = event.pathParameters

  const response = await document.query({
    TableName: "certificates-users",
    KeyConditionExpression: "id = :id",
    ExpressionAttributeValues: {
      ':id': id,
    }
  }).promise()

  const userCertificate = response.Items[0]

  if(!userCertificate) {
    return {
      statusCode: 404,
      body: JSON.stringify({
        error: "Certificado invalido",
      }),
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Certificado valido",
      name: userCertificate.name,
      url: `https://${process.env.BUCKET_NAME}.s3.amazonaws.com/${id}.pdf`,
    }),
  }
}
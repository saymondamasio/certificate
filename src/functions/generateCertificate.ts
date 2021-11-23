import { document } from 'src/utils/dynamodbClient'

interface ICreateCertificate {
  id: string
  name: string
  grade: string
}

export const handle = async event => {
  const { grade, id, name } = event.body as ICreateCertificate

  await document.put({
    TableName: 'users_certificates',
    Item: {
      id,
      name,
      grade,
    }
  }).promise()

  return {
    statusCode: 201,
    body: JSON.stringify({
      message: 'Certificate created',
    }),
    headers: {
      'Content-Type': 'application/json',
    }
  }
}

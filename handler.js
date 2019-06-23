'use strict';

const createResponse = (statusCode, message) => {
  return {
    statusCode,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify(message)
  };
}

export const hello = async (event, context) => {
  return createResponse(200, {
    message: 'hello world'
  });
}
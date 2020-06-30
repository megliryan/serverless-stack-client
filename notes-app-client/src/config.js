export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: "pk_test_51GxyK5L3fF77kOkP7y9MXJzcDYOaWYB34trvBxeDqcADBjScxCcMKm1D4xPs32AFQqxZFKOUFWcn16GzNGJsOHB100tH9xpkNA",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-creation"
  },
  apiGateway: {
	REGION: "us-east-1",
    URL: "https://dvph0lq3x6.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_3JuOQV6Va",
    APP_CLIENT_ID: "40cg485t9htfo398mprps8i72j",
    IDENTITY_POOL_ID: "us-east-1:9f3cacda-4f1c-47c1-baa6-d078ccc3e466"
  }
};
# Architecture
- Microservice Oriented
  - Models:
    - We have a persistance layer where wraps the DynamoDB Logic
  - Services:
    - Externals:
      - Wrapper for SWAPI extrernal endpoints
    - SWAPI:
      - Lambda Endpoints for get and create items based on external wrapper data (SWAPI Wrapper)

# Testing
- To run test:
  - Configure the AWS endpoints for GET and POST on .env file
  - run yarn test

# Documentation
- https://URI/swagger

# Local Testing
- run sls offline for the next available endpoints:
   |   POST | http://localhost:3000/dev/swapi/create/{id}                          │
   │   GET  | http://localhost:3000/dev/swapi/get/{id}                             │
   │   GET  | http://localhost:3000/swagger                                        │
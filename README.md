# Data Stream Nest.JS Native Auth Wrapper Template

This is a working API template to implement an "Origin Data Stream API Endpoint" that is protected with MultiversX Native Auth. This "Origin Data Stream API Endpoint" can host private, personalized data about the caller or Data NFT itself. e.g., NFT or caller address trade data or historical data. The "Origin Data Stream API Endpoint" can then be used as the "Data Stream URL" on a Data NFT during minting, and only the verified holder of the Data NFT can then access this data.

## Do I need Native Auth protection on my Data Stream?

The Data NFT is already protecting the origin of your Data Stream URL thanks to the abstraction encryption provided by the Data Marshal. What this means is that no one should be able to see the plaintext URL of your Data Stream origin. However, in some instances, you may still want an "extra layer" or protection for your Origin Data Stream URL in the event the URL is discovered or shared by someone with "internal" knowledge of it (e.g., dev team). This is where Native Auth protection helps, as it puts the origin Data Stream URL in "protected public mode." To turn on/off Native Auth, you can disable/enable this line on your API endpoints `@UseGuards(NativeAuthGuard)`

## Quick start

1. Run `npm install` in the project directory
2. Optionally make edits to `config.yaml` or create `config.custom.yaml`
3. Update the `datastream` endpoint code with your own business logic

### `Run API locally`

1. Set the environment variables in `.env` file. (you can skip this step, the API will run without these, but they are kept as boilerplate for future use)

```env
PORT=3000
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=root
DB_DATABASE=example
REDIS_HOST=127.0.0.1
REDIS_PORT=6379
REDIS_PASSWORD=
REDIS_USERNAME=
```

2. Run the API

```bash
npm run start:devnet:watch
```

You should then see the swagger portal on http://localhost:3000/, where you can test your API.

> [!IMPORTANT]  
> In order to test the NativeAuth guarded endpoints, you need to "whitelist" in the `acceptedOrigins` section of the `config.devnet.yaml` file, the origin from which you are generating the requests.

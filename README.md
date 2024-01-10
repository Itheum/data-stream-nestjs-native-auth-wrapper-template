Data Dex REST API

## Quick start

1. Run `npm install` in the project directory
2. Optionally make edits to `config.yaml` or create `config.custom.yaml`

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

> [!IMPORTANT]  
> In order to test the NativeAuth guarded endpoints, you need to "whitelist" in the `acceptedOrigins` section of the `config.devnet.yaml` file, the origin from which you are generating the requests.

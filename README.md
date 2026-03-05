# Smartbooks API – n8n Node

[n8n](https://n8n.io) community node for the [Smartbooks API](https://smartbooks.ai). Use it in n8n workflows to interact with Smartbooks (reporting, input, intercompany matching, modules, and more).

## Installation

In n8n:

1. Open **Settings** → **Community nodes** → **Install**.
2. Enter: `@smartbooks-ai/n8n-nodes-api`
3. Install and restart n8n if prompted.

Or install via CLI in your n8n project:

```bash
npm install @smartbooks-ai/n8n-nodes-api
```

## Credentials

The node uses **Smartbooks OAuth2 API** credentials.

1. Add a **Smartbooks API** credential in n8n.
2. Use your Smartbooks OAuth2 client ID and client secret.
3. Authorize; the node will use this credential for all requests.

## Resources & operations

The node supports these Smartbooks resources and their operations:

- **Input** – e.g. batch input (by year and period)
- **Module** – module operations
- **Profile** – profile operations
- **Reporting** – reporting operations
- **Structure** – structure operations

Choose **Resource** and **Operation** in the node; required parameters (e.g. company code, IDs) will appear as needed.

## License

MIT © [smartbooks](https://smartbooks.ai)

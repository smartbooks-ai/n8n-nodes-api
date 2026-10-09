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

The node signs in with a **Smartbooks OAuth2 API** credential. The flow is OAuth 2.0 with PKCE, so there is no client secret.

1. Create a **Smartbooks OAuth2 API** credential.
2. On n8n Cloud, choose **Connect** and sign in to Smartbooks. Cloud uses the shared redirect URL `https://oauth.n8n.cloud/oauth2/callback`, and the client ID is built in.
3. On a self-hosted instance, enter the client ID issued for that instance. If you do not already have one, contact Smartbooks AI support at support@smartbooks.ai and include the OAuth Redirect URL shown on the credential.
4. Connect and sign in. Every Smartbooks API node in the workflow uses this credential.

## Resources & operations

The node supports these Smartbooks resources and their operations:

- **Input** – e.g. batch input (by year and period)
- **Module** – module operations
- **Profile** – profile operations
- **Reporting** – reporting operations
- **Structure** – structure operations

Choose **Resource** and **Operation** in the node; required parameters (e.g. company code, IDs) will appear as needed.

## Example: Get Profile

1. Add a **Smartbooks API** node to the workflow.
2. Select your **Smartbooks OAuth2 API** credential.
3. Set **Resource** to **Profile**.
4. Set **Operation** to **Get Profile**.
5. Execute the node.

The node returns one item for the signed-in user, including the companies they can open. A company's `code` (for example `jc2qwbjz`) is the **Company Code** to enter on other operations.

```json
{
  "userId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "tenants": [
    {
      "code": "acme",
      "description": "Acme Group",
      "companies": [
        { "code": "jc2qwbjz", "description": "Acme BV" }
      ]
    }
  ]
}
```

## License

MIT © [smartbooks](https://smartbooks.ai)

import type { Icon, ICredentialType, INodeProperties } from 'n8n-workflow';

/**
 * Smartbooks API OAuth2 credentials.
 * Extends n8n's built-in oAuth2Api. Public PKCE client: client id only, no client secret.
 * n8n Cloud hides Client ID and uses the built-in public client (callback https://oauth.n8n.cloud/oauth2/callback).
 * Every other deployment shows Client ID; that value is what OAuth sends.
 */
export class SmartbooksOAuth2Api implements ICredentialType {
	name = 'smartbooksOAuth2Api';

	displayName = 'Smartbooks OAuth2 API';

	icon: Icon = { light: 'file:../icons/logo.svg', dark: 'file:../icons/logo.dark.svg' };

	documentationUrl = 'https://app.smartbooks.ai/docs';

	extends = ['oAuth2Api'];

	properties: INodeProperties[] = [
		{
			displayName:
				'If you do not already have a client ID, contact Smartbooks AI support at support@smartbooks.ai and include the OAuth Redirect URL above in order to obtain one for this instance.',
			name: 'selfHostedNotice',
			type: 'notice',
			default: '',
			displayOptions: {
				showOnDeployment: 'hosted',
			},
		},
		{
			displayName: 'Client ID',
			name: 'clientId',
			type: 'string',
			default: 'KspiUPGo86eZx9IWxe40Nj756yCO2UMm',
			required: true,
			displayOptions: {
				showOnDeployment: 'hosted',
			},
			description:
				'Client ID issued by Smartbooks AI support for the OAuth Redirect URL above',
		},
		{
			displayName: 'Client Secret',
			name: 'clientSecret',
			type: 'hidden',
			typeOptions: {
				password: true,
			},
			required: false,
			default: '',
		},
		{
			displayName: 'Grant Type',
			name: 'grantType',
			type: 'hidden',
			default: 'pkce',
		},
		{
			displayName: 'Auth URL',
			name: 'authUrl',
			type: 'hidden',
			default: 'https://login.smartbooks.ai/authorize',
		},
		{
			displayName: 'Access Token URL',
			name: 'accessTokenUrl',
			type: 'hidden',
			default: 'https://login.smartbooks.ai/oauth/token',
		},
		{
			displayName: 'Auth URI Query Parameters',
			name: 'authQueryParameters',
			type: 'hidden',
			default: 'audience=https://api.smartbooks.ai/',
		},
		{
			displayName: 'API Base URL',
			name: 'baseURL',
			type: 'hidden',
			default: 'https://app.smartbooks.ai',
		},
		{
			displayName: 'Scope',
			name: 'scope',
			type: 'hidden',
			default:
				'profile:read openid profile offline_access input:write reporting:read modeling:read modeling:write',
		},
		{
			displayName: 'Authentication',
			name: 'authentication',
			type: 'hidden',
			default: 'body',
		},
		{
			displayName: 'Allowed HTTP Request Domains',
			name: 'allowedHttpRequestDomains',
			type: 'hidden',
			default: 'all',
		},
	];
}

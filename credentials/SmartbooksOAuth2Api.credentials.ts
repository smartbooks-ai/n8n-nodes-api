import type { Icon, ICredentialType, INodeProperties } from 'n8n-workflow';

/**
 * Smartbooks API OAuth2 credentials.
 * Extends n8n's built-in oAuth2Api (authUrl, accessTokenUrl, clientId, clientSecret, scope, authQueryParameters).
 */
export class SmartbooksOAuth2Api implements ICredentialType {
	name = 'smartbooksOAuth2Api';

	displayName = 'Smartbooks OAuth2 API';

	icon: Icon = { light: 'file:../icons/logo.svg', dark: 'file:../icons/logo.dark.svg' };

	documentationUrl = 'https://app.smartbooks.ai/docs';

	extends = ['oAuth2Api'];

	properties: INodeProperties[] = [
		{
			displayName: 'Auth URL',
			name: 'authUrl',
			type: 'hidden',
			default:
				'https://login.smartbooks.ai/authorize',
		},
		{
			displayName: 'Access Token URL',
			name: 'accessTokenUrl',
			type: 'hidden',
			default:
				'https://login.smartbooks.ai/oauth/token',
		},
		{
			displayName: 'Auth URI Query Parameters',
			name: 'authQueryParameters',
			type: 'hidden',
			default:
				'audience=https://api.smartbooks.ai/',
		},
		{
			displayName: 'API Base URL',
			name: 'baseURL',
			type: 'hidden',
			default:
				'https://app.smartbooks.ai',
		},
		{
			displayName: 'Scope',
			name: 'scope',
			type: 'hidden',
			default: 'profile:read openid profile offline_access input:write reporting:read modeling:read modeling:write'
		},
		{
			displayName: 'Authentication',
			name: 'authentication',
			type: 'hidden',
			default: 'header',
		},
		{
			displayName: 'Allowed HTTP Request Domains',
			name: 'allowedHttpRequestDomains',
			type: 'hidden',
			default: 'all',
		}
	];
}

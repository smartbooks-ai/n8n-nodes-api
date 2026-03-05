import { type INodeType, type INodeTypeDescription, NodeConnectionTypes } from 'n8n-workflow';
import { apiProperties } from './properties';

export class SmartbooksApi implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Smartbooks API',
		name: 'smartbooksApi',
		icon: 'file:./../../icons/logo.svg',
		usableAsTool: true,
		group: ['transform'],
		version: 1,
		subtitle: '={{ $parameter["operation"] + " : " + $parameter["resource"] }}',
		description: 'Interact with Smartbooks API',
		defaults: {
			name: 'Smartbooks API',
		},
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'smartbooksOAuth2Api',
				required: true,
			},
		],
		requestDefaults: {
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			baseURL: 'https://app-dev.smartbooks.ai',
		},
		properties: apiProperties,
	};
}

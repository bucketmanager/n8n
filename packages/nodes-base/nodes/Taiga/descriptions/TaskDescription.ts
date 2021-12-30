import {
	INodeProperties,
} from 'n8n-workflow';

export const taskOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'task',
				],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a task',
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete a task',
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Get a task',
			},
			{
				name: 'Get All',
				value: 'getAll',
				description: 'Get all tasks',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update a task',
			},
		],
		default: 'create',
		description: 'Operation to perform',
	},
];

export const taskFields: INodeProperties[] = [
	// ----------------------------------------
	//               task: create
	// ----------------------------------------
	{
		displayName: 'Project ID',
		name: 'projectId',
		description: 'ID of the project to which the task belongs',
		type: 'options',
		typeOptions: {
			loadOptionsMethod: 'getProjects',
		},
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'task',
				],
				operation: [
					'create',
				],
			},
		},
	},
	{
		displayName: 'Subject',
		name: 'subject',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'task',
				],
				operation: [
					'create',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'task',
				],
				operation: [
					'create',
				],
			},
		},
		options: [
			{
				displayName: 'Assigned To',
				name: 'assigned_to',
				type: 'options',
				typeOptions: {
					loadOptionsDependsOn: [
						'projectId',
					],
					loadOptionsMethod: 'getUsers',
				},
				default: '',
				description: 'ID of the user to whom the task is assigned',
			},
			{
				displayName: 'Blocked Note',
				name: 'blocked_note',
				type: 'string',
				default: '',
				description: 'Reason why the task is blocked. Requires "Is Blocked" toggle to be enabled',
			},
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Is Blocked',
				name: 'is_blocked',
				type: 'boolean',
				default: false,
				description: 'Whether the task is blocked',
			},
			{
				displayName: 'Milestone (Sprint)',
				name: 'milestone',
				type: 'options',
				typeOptions: {
					loadOptionsDependsOn: [
						'projectId',
					],
					loadOptionsMethod: 'getMilestones',
				},
				default: '',
				description: 'ID of the milestone of the task',
			},
			{
				displayName: 'Status',
				name: 'status',
				type: 'options',
				typeOptions: {
					loadOptionsDependsOn: [
						'projectId',
					],
					loadOptionsMethod: 'getTaskStatuses',
				},
				default: '',
				description: 'ID of the status of the task',
			},
			{
				displayName: 'Tags',
				name: 'tags',
				type: 'multiOptions',
				typeOptions: {
					loadOptionsDependsOn: [
						'projectId',
					],
					loadOptionsMethod: 'getTags',
				},
				default: [],
			},
			{
				displayName: 'Taskboard Order',
				name: 'taskboard_order',
				type: 'number',
				default: 1,
				description: 'Order of the task in the taskboard',
				typeOptions: {
					minValue: 1,
				},
			},
			{
				displayName: 'User Story',
				name: 'user_story',
				type: 'options',
				typeOptions: {
					loadOptionsDependsOn: [
						'projectId',
					],
					loadOptionsMethod: 'getUserStories',
				},
				default: '',
				description: 'ID of the user story of the task',
			},
			{
				displayName: 'User Story Order',
				name: 'us_order',
				type: 'number',
				default: 1,
				description: 'Order of the task in the user story',
				typeOptions: {
					minValue: 1,
				},
			},
		],
	},

	// ----------------------------------------
	//               task: delete
	// ----------------------------------------
	{
		displayName: 'Task ID',
		name: 'taskId',
		description: 'ID of the task to delete',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'task',
				],
				operation: [
					'delete',
				],
			},
		},
	},

	// ----------------------------------------
	//                task: get
	// ----------------------------------------
	{
		displayName: 'Task ID',
		name: 'taskId',
		description: 'ID of the task to retrieve',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'task',
				],
				operation: [
					'get',
				],
			},
		},
	},

	// ----------------------------------------
	//               task: getAll
	// ----------------------------------------
	{
		displayName: 'Project ID',
		name: 'projectId',
		description: 'ID of the project to which the task belongs',
		type: 'options',
		typeOptions: {
			loadOptionsMethod: 'getProjects',
		},
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'task',
				],
				operation: [
					'getAll',
				],
			},
		},
	},
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		description: 'Whether to return all results or only up to a given limit',
		displayOptions: {
			show: {
				resource: [
					'task',
				],
				operation: [
					'getAll',
				],
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		default: 50,
		description: 'How many results to return',
		typeOptions: {
			minValue: 1,
		},
		displayOptions: {
			show: {
				resource: [
					'task',
				],
				operation: [
					'getAll',
				],
				returnAll: [
					false,
				],
			},
		},
	},
	{
		displayName: 'Filters',
		name: 'filters',
		type: 'collection',
		placeholder: 'Add Filter',
		displayOptions: {
			show: {
				resource: [
					'task',
				],
				operation: [
					'getAll',
				],
			},
		},
		default: {},
		options: [
			{
				displayName: 'Assigned To',
				name: 'assigned_to',
				type: 'options',
				typeOptions: {
					loadOptionsDependsOn: [
						'projectId',
					],
					loadOptionsMethod: 'getUsers',
				},
				default: '',
				description: 'ID of the user whom the task is assigned to',
			},
			{
				displayName: 'Is Closed',
				name: 'statusIsClosed',
				description: 'Whether the task is closed',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'Milestone (Sprint)',
				name: 'milestone',
				type: 'options',
				typeOptions: {
					loadOptionsDependsOn: [
						'projectId',
					],
					loadOptionsMethod: 'getMilestones',
				},
				default: '',
				description: 'ID of the milestone of the task',
			},
			{
				displayName: 'Owner',
				name: 'owner',
				description: 'ID of the owner of the task',
				type: 'options',
				typeOptions: {
					loadOptionsDependsOn: [
						'projectId',
					],
					loadOptionsMethod: 'getUsers',
				},
				default: '',
			},
			{
				displayName: 'Role',
				name: 'role',
				type: 'options',
				typeOptions: {
					loadOptionsDependsOn: [
						'projectId',
					],
					loadOptionsMethod: 'getRoles',
				},
				default: '',
			},
			{
				displayName: 'Status',
				name: 'status',
				description: 'ID of the status of the task',
				type: 'options',
				typeOptions: {
					loadOptionsDependsOn: [
						'projectId',
					],
					loadOptionsMethod: 'getTaskStatuses',
				},
				default: '',
			},
			{
				displayName: 'Tags',
				name: 'tags',
				type: 'multiOptions',
				typeOptions: {
					loadOptionsDependsOn: [
						'projectId',
					],
					loadOptionsMethod: 'getTags',
				},
				default: [],
			},
			{
				displayName: 'User Story',
				name: 'userStory',
				description: 'ID of the user story to which the task belongs',
				type: 'options',
				typeOptions: {
					loadOptionsDependsOn: [
						'projectId',
					],
					loadOptionsMethod: 'getUserStories',
				},
				default: '',
			},
		],
	},

	// ----------------------------------------
	//               task: update
	// ----------------------------------------
	{
		displayName: 'Project ID',
		name: 'projectId',
		description: 'ID of the project to set the task to',
		type: 'options',
		typeOptions: {
			loadOptionsMethod: 'getProjects',
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'task',
				],
				operation: [
					'update',
				],
			},
		},
	},
	{
		displayName: 'Task ID',
		name: 'taskId',
		description: 'ID of the task to update',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'task',
				],
				operation: [
					'update',
				],
			},
		},
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'task',
				],
				operation: [
					'update',
				],
			},
		},
		options: [
			{
				displayName: 'Assigned To',
				name: 'assigned_to',
				type: 'options',
				typeOptions: {
					loadOptionsDependsOn: [
						'projectId',
					],
					loadOptionsMethod: 'getTypes',
				},
				default: '',
				description: 'ID of the user to assign the task to',
			},
			{
				displayName: 'Blocked Note',
				name: 'blocked_note',
				type: 'string',
				default: '',
				description: 'Reason why the task is blocked. Requires "Is Blocked" toggle to be enabled',
			},
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Is Blocked',
				name: 'is_blocked',
				type: 'boolean',
				default: false,
				description: 'Whether the task is blocked',
			},
			{
				displayName: 'Milestone (Sprint)',
				name: 'milestone',
				type: 'options',
				typeOptions: {
					loadOptionsDependsOn: [
						'projectId',
					],
					loadOptionsMethod: 'getMilestones',
				},
				default: '',
				description: 'ID of the milestone of the task',
			},
			{
				displayName: 'Status',
				name: 'status',
				type: 'options',
				typeOptions: {
					loadOptionsDependsOn: [
						'projectId',
					],
					loadOptionsMethod: 'getTaskStatuses',
				},
				default: '',
				description: 'ID of the status of the task',
			},
			{
				displayName: 'Subject',
				name: 'subject',
				type: 'string',
				default: '',
			},
			{
				displayName: 'User Story',
				name: 'user_story',
				type: 'options',
				typeOptions: {
					loadOptionsDependsOn: [
						'projectId',
					],
					loadOptionsMethod: 'getUserStories',
				},
				default: '',
				description: 'ID of the user story of the task',
			},
			{
				displayName: 'User Story Order',
				name: 'us_order',
				type: 'number',
				default: 1,
				typeOptions: {
					minValue: 1,
				},
				description: 'Order of the task in the user story',
			},
			{
				displayName: 'Tags',
				name: 'tags',
				type: 'multiOptions',
				typeOptions: {
					loadOptionsDependsOn: [
						'projectId',
					],
					loadOptionsMethod: 'getTags',
				},
				default: [],
			},
			{
				displayName: 'Taskboard Order',
				name: 'taskboard_order',
				type: 'number',
				default: 1,
				typeOptions: {
					minValue: 1,
				},
				description: 'Order of the task in the taskboard',
			},
		],
	},
];

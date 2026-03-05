
import { INodeProperties } from "n8n-workflow";

export const apiProperties:INodeProperties[] = [
  {
    displayName: "Resource",
    name: "resource",
    type: "options",
    noDataExpression: true,
    options: [
      {
        name: "Input",
        value: "Input",
      },
      {
        name: "Module",
        value: "Modules",
      },
      {
        name: "Profile",
        value: "Profile",
      },
      {
        name: "Reporting",
        value: "Reporting",
      },
      {
        name: "Structure",
        value: "Structure",
      }
    ],
    default: "Reporting",
  },
  {
    displayName: "Operation",
    name: "operation",
    type: "options",
    noDataExpression: true,
    displayOptions: {
      show: {
        resource: [
          "Input"
        ]
      }
    },
    options: [
      {
        name: "Batch Input",
        value: "Input Post Batch",
        action: "Batch input",
        description: "Batch input for a given year and period. Requires scope input:write.",
        routing: {
          request: {
            method: "POST",
            url: "=/api/v1/c/{{$parameter[\"companyCode\"]}}/input/batch"
          }
        }
      }
    ],
    default: "Input Post Batch"
  },
  {
    displayName: "Operation",
    name: "operation",
    type: "options",
    noDataExpression: true,
    displayOptions: {
      show: {
        resource: [
          "Modules"
        ]
      }
    },
    options: [
      {
        name: "Get Module",
        value: "Modules Get Item Public",
        action: "Get module",
        description: "Get a module by code. Requires scope modeling:read.",
        routing: {
          request: {
            method: "GET",
            url: "=/api/v1/c/{{$parameter[\"companyCode\"]}}/modules/{{$parameter[\"moduleCode\"]}}"
          }
        }
      },
      {
        name: "Add Account",
        value: "Modules Post Account",
        action: "Add account",
        description: "Add an account to a subaccounts table of a module. Requires scope modeling:write.",
        routing: {
          request: {
            method: "POST",
            url: "=/api/v1/c/{{$parameter[\"companyCode\"]}}/modules/{{$parameter[\"moduleCode\"]}}/subaccountstables/{{$parameter[\"subaccountsTableCode\"]}}/accounts"
          }
        }
      }
    ],
    default: "Modules Get Item Public"
  },
  {
    displayName: "Operation",
    name: "operation",
    type: "options",
    noDataExpression: true,
    displayOptions: {
      show: {
        resource: [
          "Reporting"
        ]
      }
    },
    options: [
      {
        name: "Get Outstanding Payables",
        value: "Outstandingpayablesandreceivables Outstanding Payables",
        action: "Get outstanding payables",
        description: "Get outstanding payables. Requires scope reporting:read.",
        routing: {
          request: {
            method: "GET",
            url: "=/api/v1/c/{{$parameter[\"companyCode\"]}}/reporting/outstanding/payables"
          }
        }
      },
      {
        name: "Get Outstanding Receivables",
        value: "Outstandingpayablesandreceivables Outstanding Receivables",
        action: "Get outstanding receivables",
        description: "Get outstanding receivables. Requires scope reporting:read.",
        routing: {
          request: {
            method: "GET",
            url: "=/api/v1/c/{{$parameter[\"companyCode\"]}}/reporting/outstanding/receivables"
          }
        }
      },
      {
        name: "Get Yearly Amounts",
        value: "Reporting Yearly Amounts",
        action: "Get yearly amounts",
        description: "Get yearly amounts for a given year. Requires scope reporting:read.",
        routing: {
          request: {
            method: "GET",
            url: "=/api/v1/c/{{$parameter[\"companyCode\"]}}/reporting/amounts/yearly/{{$parameter[\"year\"]}}"
          }
        }
      }
    ],
    default: "Reporting Yearly Amounts"
  },
  {
    displayName: "Operation",
    name: "operation",
    type: "options",
    noDataExpression: true,
    displayOptions: {
      show: {
        resource: [
          "Structure"
        ]
      }
    },
    options: [
      {
        name: "Get Balance Sheet Structure",
        value: "Structure Balance Sheet",
        action: "Get balance sheet structure",
        description: "Get balance sheet structure. Requires scope reporting:read.",
        routing: {
          request: {
            method: "GET",
            url: "=/api/v1/c/{{$parameter[\"companyCode\"]}}/structure/balance-sheet"
          }
        }
      },
      {
        name: "Get Cash Flow Structure",
        value: "Structure Cash Flow",
        action: "Get cash flow structure",
        description: "Get cash flow structure. Requires scope reporting:read.",
        routing: {
          request: {
            method: "GET",
            url: "=/api/v1/c/{{$parameter[\"companyCode\"]}}/structure/cash-flow"
          }
        }
      },
      {
        name: "Get Metrics Structure",
        value: "Structure Metrics",
        action: "Get metrics structure",
        description: "Get metrics structure. Requires scope reporting:read.",
        routing: {
          request: {
            method: "GET",
            url: "=/api/v1/c/{{$parameter[\"companyCode\"]}}/structure/metrics"
          }
        }
      },
      {
        name: "Get Profit And Loss Structure",
        value: "Structure Profit And Loss",
        action: "Get profit and loss structure",
        description: "Get profit and loss structure. Requires scope reporting:read.",
        routing: {
          request: {
            method: "GET",
            url: "=/api/v1/c/{{$parameter[\"companyCode\"]}}/structure/profit-and-loss"
          }
        }
      }
    ],
    default: "Structure Balance Sheet"
  },
  {
    displayName: "Operation",
    name: "operation",
    type: "options",
    noDataExpression: true,
    displayOptions: {
      show: {
        resource: [
          "Profile"
        ]
      }
    },
    options: [
      {
        name: "Get Profile",
        value: "Profile My",
        action: "Get profile",
        description: "Get profile details including allowed tenants and companies. Requires scope profile:read.",
        routing: {
          request: {
            method: "GET",
            url: "=/api/v1/profile/my"
          }
        }
      }
    ],
    default: "Profile My"
  },
  {
   displayName: "POST /api/v1/c/{companyCode}/input/batch",
    name: "operation",
    type: "notice",
    typeOptions: {
      theme: "info"
    },
    default: "",
    displayOptions: {
      show: {
        resource: [
          "Input"
        ],
        operation: [
          "Input Post Batch"
        ]
      }
    }
  },
  {
    displayName: "Company Code",
    name: "companyCode",
    required: true,
    description: "The company code as seen in the URL",
    type: "string",
    default: "",
    displayOptions: {
      show: {
        resource: [
          "Input"
        ],
        operation: [
          "Input Post Batch"
        ]
      }
    }
  },
  {
    displayName: "Target",
    required: true,
    name: "target",
    type: "json",
    default: "{}",
    routing: {
      send: {
        property: "target",
        propertyInDotNotation: false,
        type: "body",
        value: "={{ JSON.parse($value) }}"
      }
    },
    displayOptions: {
      show: {
        resource: [
          "Input"
        ],
        operation: [
          "Input Post Batch"
        ]
      }
    }
  },
  {
    displayName: "Items",
    required: true,
    name: "items",
    type: "json",
    default: "[\n  {}\n]",
    routing: {
      send: {
        property: "items",
        propertyInDotNotation: false,
        type: "body",
        value: "={{ JSON.parse($value) }}"
      }
    },
    displayOptions: {
      show: {
        resource: [
          "Input"
        ],
        operation: [
          "Input Post Batch"
        ]
      }
    }
  },
  {
   displayName: "GET /api/v1/c/{companyCode}/modules/{moduleCode}",
    name: "operation",
    type: "notice",
    typeOptions: {
      theme: "info"
    },
    default: "",
    displayOptions: {
      show: {
        resource: [
          "Modules"
        ],
        operation: [
          "Modules Get Item Public"
        ]
      }
    }
  },
  {
    displayName: "Company Code",
    name: "companyCode",
    required: true,
    description: "The company code as seen in the URL",
    type: "string",
    default: "",
    displayOptions: {
      show: {
        resource: [
          "Modules"
        ],
        operation: [
          "Modules Get Item Public"
        ]
      }
    }
  },
  {
    displayName: "Module Code",
    name: "moduleCode",
    required: true,
    description: "The specified module will be used to retrieve data from",
    type: "string",
    default: "",
    displayOptions: {
      show: {
        resource: [
          "Modules"
        ],
        operation: [
          "Modules Get Item Public"
        ]
      }
    }
  },
  {
   displayName: "POST /api/v1/c/{companyCode}/modules/{moduleCode}/subaccountstables/{subaccountsTableCode}/accounts",
    name: "operation",
    type: "notice",
    typeOptions: {
      theme: "info"
    },
    default: "",
    displayOptions: {
      show: {
        resource: [
          "Modules"
        ],
        operation: [
          "Modules Post Account"
        ]
      }
    }
  },
  {
    displayName: "Company Code",
    name: "companyCode",
    required: true,
    description: "The company code as seen in the URL",
    type: "string",
    default: "",
    displayOptions: {
      show: {
        resource: [
          "Modules"
        ],
        operation: [
          "Modules Post Account"
        ]
      }
    }
  },
  {
    displayName: "Module Code",
    name: "moduleCode",
    required: true,
    description: "The specified module will be used to retrieve data from",
    type: "string",
    default: "",
    displayOptions: {
      show: {
        resource: [
          "Modules"
        ],
        operation: [
          "Modules Post Account"
        ]
      }
    }
  },
  {
    displayName: "Subaccounts Table Code",
    name: "subaccountsTableCode",
    required: true,
    description: "The specified subaccounts table will be used to retrieve data from",
    type: "string",
    default: "",
    displayOptions: {
      show: {
        resource: [
          "Modules"
        ],
        operation: [
          "Modules Post Account"
        ]
      }
    }
  },
  {
    displayName: "Code",
    required: true,
    name: "code",
    type: "string",
    default: "",
    routing: {
      send: {
        property: "code",
        propertyInDotNotation: false,
        type: "body",
        value: "={{ $value }}"
      }
    },
    displayOptions: {
      show: {
        resource: [
          "Modules"
        ],
        operation: [
          "Modules Post Account"
        ]
      }
    }
  },
  {
    displayName: "Description",
    required: true,
    name: "description",
    type: "string",
    default: "",
    routing: {
      send: {
        property: "description",
        propertyInDotNotation: false,
        type: "body",
        value: "={{ $value }}"
      }
    },
    displayOptions: {
      show: {
        resource: [
          "Modules"
        ],
        operation: [
          "Modules Post Account"
        ]
      }
    }
  },
  {
    displayName: "Attributes",
    required: true,
    name: "attributes",
    type: "json",
    default: "[\n  {}\n]",
    routing: {
      send: {
        property: "attributes",
        propertyInDotNotation: false,
        type: "body",
        value: "={{ JSON.parse($value) }}"
      }
    },
    displayOptions: {
      show: {
        resource: [
          "Modules"
        ],
        operation: [
          "Modules Post Account"
        ]
      }
    }
  },
  {
   displayName: "GET /api/v1/c/{companyCode}/reporting/amounts/yearly/{year}",
    name: "operation",
    type: "notice",
    typeOptions: {
      theme: "info"
    },
    default: "",
    displayOptions: {
      show: {
        resource: [
          "Reporting"
        ],
        operation: [
          "Reporting Yearly Amounts"
        ]
      }
    }
  },
  {
    displayName: "Company Code",
    name: "companyCode",
    required: true,
    description: "The company code as seen in the URL",
    type: "string",
    default: "",
    displayOptions: {
      show: {
        resource: [
          "Reporting"
        ],
        operation: [
          "Reporting Yearly Amounts"
        ]
      }
    }
  },
  {
    displayName: "Year",
    name: "year",
    required: true,
    description: "The year to use for the amounts query",
    type: "number",
    default: 0,
    displayOptions: {
      show: {
        resource: [
          "Reporting"
        ],
        operation: [
          "Reporting Yearly Amounts"
        ]
      }
    }
  },
  {
    displayName: "Category",
    name: "category",
    description: "The category input is considered for, either 'actual', 'projection' or one of planning categories",
    type: "string",
    default: "",
    routing: {
      send: {
        type: "query",
        property: "category",
        value: "={{ $value }}",
        propertyInDotNotation: false
      }
    },
    displayOptions: {
      show: {
        resource: [
          "Reporting"
        ],
        operation: [
          "Reporting Yearly Amounts"
        ]
      }
    }
  },
  {
    displayName: "Entity",
    name: "entity",
    description: "The entity to use for the amounts query. Use 'default' for the default entity, or your entity name.",
    type: "string",
    default: "",
    routing: {
      send: {
        type: "query",
        property: "entity",
        value: "={{ $value }}",
        propertyInDotNotation: false
      }
    },
    displayOptions: {
      show: {
        resource: [
          "Reporting"
        ],
        operation: [
          "Reporting Yearly Amounts"
        ]
      }
    }
  },
  {
    displayName: "Business Dimension Member",
    name: "businessDimensionMember",
    description: "The business dimension member to use for the amounts query. Use 'default' for the default business dimension member, or your business dimension member name.",
    type: "string",
    default: "",
    routing: {
      send: {
        type: "query",
        property: "businessDimensionMember",
        value: "={{ $value }}",
        propertyInDotNotation: false
      }
    },
    displayOptions: {
      show: {
        resource: [
          "Reporting"
        ],
        operation: [
          "Reporting Yearly Amounts"
        ]
      }
    }
  },
  {
    displayName: "View",
    name: "view",
    description: "The view to use for the amounts query. Use 'periodic' for the periodic amounts, or one of 'qtd', 'ytd', 'ltd' for the cumulative amounts.",
    type: "options",
    default: "periodic",
    options: [
      {
        name: "Ltd",
        value: "ltd"
      },
      {
        name: "Periodic",
        value: "periodic"
      },
      {
        name: "Qtd",
        value: "qtd"
      },
      {
        name: "Ytd",
        value: "ytd"
      }
    ],
    routing: {
      send: {
        type: "query",
        property: "view",
        value: "={{ $value }}",
        propertyInDotNotation: false
      }
    },
    displayOptions: {
      show: {
        resource: [
          "Reporting"
        ],
        operation: [
          "Reporting Yearly Amounts"
        ]
      }
    }
  },
  {
    displayName: "Module Code",
    name: "moduleCode",
    description: "If provided, the specified module will be used to retrieve data from",
    type: "string",
    default: "",
    routing: {
      send: {
        type: "query",
        property: "moduleCode",
        value: "={{ $value }}",
        propertyInDotNotation: false
      }
    },
    displayOptions: {
      show: {
        resource: [
          "Reporting"
        ],
        operation: [
          "Reporting Yearly Amounts"
        ]
      }
    }
  },
  {
    displayName: "Structure Type",
    name: "structureType",
    description: "The structure type to use for the amounts query. Use 'cashflow' for the cashflow amounts.",
    type: "options",
    default: "default",
    options: [
      {
        name: "Cashflow",
        value: "cashflow"
      },
      {
        name: "Default",
        value: "default"
      }
    ],
    routing: {
      send: {
        type: "query",
        property: "structureType",
        value: "={{ $value }}",
        propertyInDotNotation: false
      }
    },
    displayOptions: {
      show: {
        resource: [
          "Reporting"
        ],
        operation: [
          "Reporting Yearly Amounts"
        ]
      }
    }
  },
  {
   displayName: "GET /api/v1/c/{companyCode}/reporting/outstanding/payables",
    name: "operation",
    type: "notice",
    typeOptions: {
      theme: "info"
    },
    default: "",
    displayOptions: {
      show: {
        resource: [
          "Reporting"
        ],
        operation: [
          "Outstandingpayablesandreceivables Outstanding Payables"
        ]
      }
    }
  },
  {
    displayName: "Company Code",
    name: "companyCode",
    required: true,
    description: "The company code as seen in the URL",
    type: "string",
    default: "",
    displayOptions: {
      show: {
        resource: [
          "Reporting"
        ],
        operation: [
          "Outstandingpayablesandreceivables Outstanding Payables"
        ]
      }
    }
  },
  {
   displayName: "GET /api/v1/c/{companyCode}/reporting/outstanding/receivables",
    name: "operation",
    type: "notice",
    typeOptions: {
      theme: "info"
    },
    default: "",
    displayOptions: {
      show: {
        resource: [
          "Reporting"
        ],
        operation: [
          "Outstandingpayablesandreceivables Outstanding Receivables"
        ]
      }
    }
  },
  {
    displayName: "Company Code",
    name: "companyCode",
    required: true,
    description: "The company code as seen in the URL",
    type: "string",
    default: "",
    displayOptions: {
      show: {
        resource: [
          "Reporting"
        ],
        operation: [
          "Outstandingpayablesandreceivables Outstanding Receivables"
        ]
      }
    }
  },
  {
   displayName: "GET /api/v1/c/{companyCode}/structure/balance-sheet",
    name: "operation",
    type: "notice",
    typeOptions: {
      theme: "info"
    },
    default: "",
    displayOptions: {
      show: {
        resource: [
          "Structure"
        ],
        operation: [
          "Structure Balance Sheet"
        ]
      }
    }
  },
  {
    displayName: "Company Code",
    name: "companyCode",
    required: true,
    description: "The company code as seen in the URL",
    type: "string",
    default: "",
    displayOptions: {
      show: {
        resource: [
          "Structure"
        ],
        operation: [
          "Structure Balance Sheet"
        ]
      }
    }
  },
  {
   displayName: "GET /api/v1/c/{companyCode}/structure/cash-flow",
    name: "operation",
    type: "notice",
    typeOptions: {
      theme: "info"
    },
    default: "",
    displayOptions: {
      show: {
        resource: [
          "Structure"
        ],
        operation: [
          "Structure Cash Flow"
        ]
      }
    }
  },
  {
    displayName: "Company Code",
    name: "companyCode",
    required: true,
    description: "The company code as seen in the URL",
    type: "string",
    default: "",
    displayOptions: {
      show: {
        resource: [
          "Structure"
        ],
        operation: [
          "Structure Cash Flow"
        ]
      }
    }
  },
  {
   displayName: "GET /api/v1/c/{companyCode}/structure/metrics",
    name: "operation",
    type: "notice",
    typeOptions: {
      theme: "info"
    },
    default: "",
    displayOptions: {
      show: {
        resource: [
          "Structure"
        ],
        operation: [
          "Structure Metrics"
        ]
      }
    }
  },
  {
    displayName: "Company Code",
    name: "companyCode",
    required: true,
    description: "The company code as seen in the URL",
    type: "string",
    default: "",
    displayOptions: {
      show: {
        resource: [
          "Structure"
        ],
        operation: [
          "Structure Metrics"
        ]
      }
    }
  },
  {
   displayName: "GET /api/v1/c/{companyCode}/structure/profit-and-loss",
    name: "operation",
    type: "notice",
    typeOptions: {
      theme: "info"
    },
    default: "",
    displayOptions: {
      show: {
        resource: [
          "Structure"
        ],
        operation: [
          "Structure Profit And Loss"
        ]
      }
    }
  },
  {
    displayName: "Company Code",
    name: "companyCode",
    required: true,
    description: "The company code as seen in the URL",
    type: "string",
    default: "",
    displayOptions: {
      show: {
        resource: [
          "Structure"
        ],
        operation: [
          "Structure Profit And Loss"
        ]
      }
    }
  },
  {
   displayName: "GET /api/v1/profile/my",
    name: "operation",
    type: "notice",
    typeOptions: {
      theme: "info"
    },
    default: "",
    displayOptions: {
      show: {
        resource: [
          "Profile"
        ],
        operation: [
          "Profile My"
        ]
      }
    }
  }
]
    
const fieldsForForm = [
  {
    name: "name",
    type: "text",
    required: true          
  }, {
    name: "label",
    type: "text",
    required: true
  }, {
    name: "type",
    type: "select",
    hasMany: false,
    admin: {
      isClearable: true,
      isSortable: true, // use mouse to drag and drop different values, and sort them according to your choice
    },
    options: [
      {
        label: "Textarea",
        value: "textarea"
      }, {
        label: "Text",
        value: "text"
      }, {
        label: "Checkbox",
        value: "checkbox"
      }, {
        label: "Range",
        value: "range"
      }, {
        label: "Toggle",
        value: "toggle"
      }, {
        label: "Select",
        value: "select"
      }
    ]
  }, {
    name: "validators",
    type: "array",
    fields: [
      {
        name: "validator",
        
        type: "select",
        hasMany: false,
        admin: {
          isClearable: true,
          isSortable: true, // use mouse to drag and drop different values, and sort them according to your choice
        },
        options: [
          {
            label: "Required",
            value: "required"
          }, {
            label: "Max",
            value: "max"
          }, {
            label: "Min",
            value: "min"
          }, {
            label: "Required True",
            value: "requiredTrue"
          }, {
            label: "Email",
            value: "email"
          }, {
            label: "Min Length",
            value: "minLength"
          }, {
            label: "Max Length",
            value: "maxLength"
          }, {
            label: "Pattern",
            value: "pattern"
          }
        ]
      }, {
        name: "Validator Value",
        type: "text",
        
      }
    ]
}
]

const Event = {
    slug: 'events',
    admin: {
      useAsTitle: 'event_title',
    },
    fields: [
      {
        name: 'event_title',
        type: 'text',
        required: true
      },
      {
        name: 'eventId',
        type: 'text'
      },
      {
        name: 'defaultNFCUrl',
        type: 'text'
      },
      {
        name: 'initCmd',
        type: 'text'
      },
      {
        name: 'initCmdValue',
        type: 'text'
      },
      {
        name: 'enabledNFCApps',
        type: 'array',
        fields: [
          {
            name: "type",
            type: "text"
          },
          {
            name: "name",
            type: "text"
          },
          {
            name: "options",
            type: "array",
            fields:[
              {
                name:"name",
                type:"text"
              },
              {
                name:"points",
                type:"number"
              },
              {
                name:"initialValue",
                type:"number"
              }
            ]
          }
        ]
      }, 
      {
        name: 'tableColumnNames',
        type: 'array',
        required: true,
        fields: [
          {
            name: "title",
            type: "text"
          },
          {
            name: "field",
            type: "text"
          },
        ]
      }, {
        name: "searchForm",
        type: "array",
        required: true,
        fields: [
          ... fieldsForForm
        ]
      }, {
        name: "userForm",
        type: "array",
        required: true,
        fields: [
          ... fieldsForForm
        ]
      }
    ],
    timestamps: false,
    versions: false
  }
  
  export default Event;
const ConfigEntrance = {
    slug: 'configentrances',
    admin: {
      useAsTitle: 'terminalTitle',
    },
    fields: [
      {
        name: 'allowedBadges',
        type: 'array',
        fields: [
          {
            name: "badge",
            type: "text",
            required: true
          }, {
            name: "fontColor",
            type: "text",
            required: true
          }, {
            name: "img",
            type: "text",
            required: true
          }, {
            name: "message",
            type: "text",
            required: true
          }
        ]
      }, {
        name: 'deniedBadges',
        type: 'array',
        fields: [
          {
            name: "badge",
            type: "text",
            required: true
          }, {
            name: "fontColor",
            type: "text",
            required: true
          }, {
            name: "img",
            type: "text",
            required: true
          }, {
            name: "message",
            type: "text",
            required: true
          }
        ]
      }, {
        name: "topic",
        type: "text",
        required: true
      }, {
        name: "event",
        type: "text",
        required: true
      }, {
        name: "imgUrl",
        type: "text",
        required: true
      }, {
        name: "terminalTitle",
        type: "text",
        required: true
      }, {
        name: "shortDescription",
        type: "textarea",
        required: true
      }, {
        name: "fontColor",
        type: "text",
        required: true
      }
    ],
    timestamps: false,
    versions: false
  }
  
  export default ConfigEntrance;
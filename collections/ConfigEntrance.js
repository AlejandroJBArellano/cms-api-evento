import colorField from "../types/color.js";

const ConfigEntrance = {
    slug: 'configentrances',
    admin: {
      useAsTitle: 'terminalTitle',
    },
    labels: {
      singular: "Configuración de entrada",
      plural: "Configuraciones de entrada"
    },
    fields: [
      {
        name: 'badges',
        type: 'array',
        fields: [
          {
            name: "badge",
            type: "text",
            required: true
          }, colorField,
          {
            name: "messages",
            type: "array",
            fields: [
              {
                name: "img",
                type: "text",
                required: true
              }, {
                name: "message",
                type: "text",
                required: true
              }
            ]
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
      }, colorField,
      {
        name: "bringBadgeText",
        type: "text",
        required: true
      }, {
        name: "cssGradient",
        type: "text",
        required: true
      }
    ],
    timestamps: false,
    versions: false
  }
  
  export default ConfigEntrance;
const ConfigTag = {
    slug: 'configtags',
    admin: {
      useAsTitle: 'cmd',
    },
    fields: [
      {
        name: 'cmd',
        type: 'text',
        required: true
      },      {
        name: 'tag_id',
        type: 'text',
        required: true
      },      {
        name: "value",
        type: "text"
      }
    ],
    timestamps: false,
    versions: false
  }
  
  export default ConfigTag;
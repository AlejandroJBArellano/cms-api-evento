const Lectora = {
    slug: 'lectoras',
    admin: {
      useAsTitle: 'view_value',
    },
    fields: [
      {
        name: 'view_value',
        type: 'text',
        required: true
      }, {
        name: "command_topic",
        type: "text",
        required: true
      }, {
        name: "data_topic",
        type: "text",
        required: true
      }, {
        name: "tag_id_topic",
        type: "text",
        label: "Tag ID Topic",
        required: true
      }
    ],
    timestamps: false,
    versions: false
  }
  
  export default Lectora;
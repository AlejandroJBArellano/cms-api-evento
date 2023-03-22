const Impresora = {
    slug: 'impresoras',
    admin: {
      useAsTitle: 'view_value',
    },
    fields: [
      {
        name: 'view_value',
        type: 'text',
        required: true
      },{
        name: "command_topic",
        type: "text",
        required: true
      }, {
        name: "data_topic",
        type: "text",
        required: true
      }, {
        name: "print_topic",
        label: "Print Topic",
        type: "text",
        required: true
      }
    ],
    timestamps: false,
    versions: false
  }
  
  export default Impresora;
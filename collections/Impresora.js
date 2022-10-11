const Impresora = {
    slug: 'impresoras',
    admin: {
      useAsTitle: 'viewValue',
    },
    fields: [
      {
        name: 'viewValue',
        type: 'text',
        required: true
      },      {
        name: 'value',
        type: 'text',
        required: true
      },
    ],
    timestamps: false,
    versions: false
  }
  
  export default Impresora;
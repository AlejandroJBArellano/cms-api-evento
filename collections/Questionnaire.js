const Questionnaire = {
    slug: 'questionnaires',
    admin: {
      useAsTitle: 'track',
    },
    fields: [
      {
        name: 'track',
        type: 'number',
      },      {
        name: 'preguntas',
        type: 'array',
        fields: [
          {
            name: "pregunta",
            type: "text"
          }, {
            name: "respuesta_correcta",
            type: "checkbox",
            defaultValue: false
          }
        ]
      },
    ],
    timestamps: false,
    versions: false
  }
  
  export default Questionnaire;
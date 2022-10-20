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
      },      {
        name: 'organization_role_for_search',
        type: 'array',
        required: true,
        fields: [
          {
            name: "field",
            type: "text"
          }
        ]
      },      {
        name: 'organization_role_for_table',
        type: 'array',
        required: true,
        fields: [
          {
            name: "field",
            type: "text"
          }
        ]
      },
    ],
    timestamps: false,
    versions: false
  }
  
  export default Event;
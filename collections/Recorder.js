const Recorder = {
    slug: "recorders",
    admin: {
        useAsTitle: "name"
    },
    labels: {
        singular: "Usuario registrador",
        plural: "Usuarios registradores"
    },
    fields: [
        {
            name: "name",
            type: "text",
            required: true
        },
        {
            name: "pin",
            type: "text",
            unique: true,
            required: true
        },
        {
            name: "pronouns",
            type: "select",
            admin: {
                isSortable: true
            },
            required: true,
            options: [
                {
                    label: "Él",
                    value: "he"
                }, {
                    label: "Ella",
                    value: "she"
                }, {
                    label: "Elle",
                    value: "it"
                }
            ]
        },

    ],
    timestamps: false,
    versions: false
}

export default Recorder
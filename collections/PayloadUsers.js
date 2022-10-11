const PayloadUsers = {
  slug: 'payloadusers',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true
    }
    // Email added by default
  ],
};

export default PayloadUsers;
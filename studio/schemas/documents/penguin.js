export default {
  title: 'Penguin',
  name: 'penguin',
  type: 'document',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string'
    },
    {
      title: 'Species',
      name: 'species',
      type: 'reference',
      to: [{ type: 'species' }]
    },
    {
      title: 'Birthdate',
      name: 'birthDate',
      type: 'date'
    },
    {
      title: 'Description',
      name: 'description',
      type: 'array',
      of: [{ type: 'block' }]
    },
    {
      title: 'Images',
      name: 'images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true
          },
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
              options: {
                isHighlighted: true
              }
            },
            {
              name: 'attribution',
              type: 'string',
              title: 'Attribution'
            }
          ]
        }
      ]
    }
  ]
}

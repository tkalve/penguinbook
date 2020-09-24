export default {
  title: 'Species',
  name: 'species',
  type: 'document',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string'
    },
    {
      title: 'Scientific name',
      name: 'scientificName',
      type: 'string'
    },
    {
      title: 'Main image',
      name: 'mainImage',
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

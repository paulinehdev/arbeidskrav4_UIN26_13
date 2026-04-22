export default {
    name: 'arbeidskrav',
    title: 'Arbeidskrav',
    type: 'document',
    fields: [
        {
            name: 'nummer',
            type: 'number',
            title: 'Nummer'

        },
        {
            name: 'title',
            title: 'Tittel',
            type: 'string', 
        },
        {
            name: 'description', 
            title: 'Kort beskrivelse',
            type: 'text',
        },
    ],
}
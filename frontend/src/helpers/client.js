import { createClient } from '@sanity/client';

export const client = createClient ({
    projectId: '7io6b1ed',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2024-04-20',
})
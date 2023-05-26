import type { Actions } from './$types';

const token = "";

export const actions: Actions = {
    create: async ({ request }) => {
        const data = Object.fromEntries(await request.formData())
        console.log(data)

        const res = await fetch("https://tasks.moritzmoe.de/api/tasks", {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        const body = await res.json()
        console.log(body)
    },
    update: async ({ url, request }) => {
        const data = Object.fromEntries(await request.formData())
        console.log(data)

        const res = await fetch("https://tasks.moritzmoe.de/api/tasks/" + data.id, {
            method: 'PATCH',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ completed: data.completed === 'on' })
        })

        const body = await res.json()
        console.log(body)
    }
};
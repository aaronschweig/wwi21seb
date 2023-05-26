import type { PageLoad } from './$types';

interface Task {
    id: string;
    name: string,
    description: string
    completed: boolean 
}

export const load: PageLoad = async ({ fetch }) => {
    /*
    const response = await fetch("https://tasks.moritzmoe.de/api/auth", { method: "POST" })
    if (response.status !== 201) {
        // some error handling
    }

    const body = await response.json();
    console.log(body);
    const token = body.token;
    */
   const token = "";

    const taskResponse = await fetch("https://tasks.moritzmoe.de/api/tasks", {
        method: "GET", headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    
    if (!taskResponse.ok) {
        // some error handling
    }

    const taskBody = await taskResponse.json();
    console.log(taskBody);

    return {
        tasks: taskBody as Task[]
    }
};
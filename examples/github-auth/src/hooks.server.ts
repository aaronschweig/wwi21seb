import { SvelteKitAuth } from '@auth/sveltekit'
import GitHub from "@auth/core/providers/github";
import { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } from '$env/static/private';


export const handle = SvelteKitAuth({
    providers: [
        GitHub({ clientId: GITHUB_CLIENT_ID, clientSecret: GITHUB_CLIENT_SECRET }) as any,
    ],
    secret: 'mysecret',
    callbacks: {
        signIn: ({ email }) => {

            // SELECT * FROM users WHERE email = {email}
            const user = {}

            if (!user) {
                // INSERT INTO users(email, provider) VALUES ({email}, 'github')
            }

            return true
        }
    },
})
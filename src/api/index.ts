export class ApiCall {
    baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    async GetUsers(endpoint: string, payload: string | null): Promise<any> {
        try {
            const response = await fetch(`${this.baseUrl}/${endpoint}`, {headers: {Authorization: `Bearer ${payload}`}})

            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }

            return await response.json();
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    }

    async LoginPost(endpoint: string, payload: object): Promise<any> {
        const response = await fetch(`${this.baseUrl}/${endpoint}`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(payload),
        });
        return await response.json();
    }

    async SignUp(endpoint: string, payload: object): Promise<any> {

        const response = await fetch(`${this.baseUrl}/${endpoint}`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(payload),
        });
        return await response.json();
    }

    async SetToken(token: string): Promise<any> {
        window.localStorage.setItem('AuthToken', token)
    }

    async DeleteUser(endpoint: string, payload: string): Promise<any> {
       return await fetch(`${this.baseUrl}/${endpoint}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(payload),
        });
    }
}
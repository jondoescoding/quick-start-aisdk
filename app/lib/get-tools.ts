
export async function getTools(): Promise<string> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/get-tools`, {
    method: 'GET',
    headers: {
        'VEYRAX_API_KEY': process.env.VEYRAX_API_KEY || '',
        'Content-Type': 'application/json'
    }
    });

    const tools = await response.json();
    
    return JSON.stringify(tools);
}
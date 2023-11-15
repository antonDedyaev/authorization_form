const mockAuthorizeUser = async (email: string, password: string) => {
    try {
        const response = await fetch('https://apingweb.com/api/rest/9cd2d151bb24f894c1dbf44c1a72e14424/auth', {
            method: 'POST',
            body: JSON.stringify({
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' },
        })
        const data = await response.json();
        console.log(data);
        return data.success;
    } catch (error) {
        throw new Error(`Произошла ошибка: ${error}`);
    }
};

export default mockAuthorizeUser;
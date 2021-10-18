const STORE = {
    main: 'Project@Storage',
};

export const getStoreData = async (name) => {
    try {
        const value = await localStorage.getItem(
            `${STORE.main}:${name}`,
        );

        return value != null ? JSON.parse(value) : null;
    } catch (error) {
        console.log(`getDatabase:error: ${error}`);
        throw Error(error);
    }
};

export const setStoreData = async (name, data) => {
    try {
        const json = JSON.stringify(data);
        await localStorage.setItem(`${STORE.main}:${name}`, json);
    } catch (error) {
        console.log(`setDatabase:error: ${error}`);
        throw Error(error);
    }
};

export const deleteStoreData = async (name) => {
    try {
        await localStorage.removeItem(`${STORE.main}:${name}`);
    } catch (error) {
        console.log(`deleteDatabase:error: ${error}`);
        throw Error(error);
    }
};
const getStoredBook = () => {
    const storeBookSRT = localStorage.getItem('readList');

    if (storeBookSRT) {
        const storedBookData = JSON.parse(storeBookSRT);
        return storedBookData;
    }
    else {
        return [];
    }

}

const addToStoredDB = (id) => {
    const storedBookData = getStoredBook();
    if (storedBookData.includes(id)) {
        alert('already have this data');
    }
    else {
        storedBookData.push(id);
        const data = JSON.stringify(storedBookData);
        localStorage.setItem('readList',data)
    }
}
export { addToStoredDB };
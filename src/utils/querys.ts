function searchById(tableName: string, id: any): string {
    const query = `SELECT * FROM ${tableName} WHERE id = ${id}`;

    return query;
}

function getAllRows(tableName: string): string {
    const query = `SELECT * FROM ${tableName}`;

    return query;
}

function deleteById(tableName: string, id: any): string {
    const query = `DELETE FROM ${tableName} WHERE id = ${id}`;

    return query;
}

export default { getAllRows, searchById, deleteById };

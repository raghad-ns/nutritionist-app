const reducer = (dietPrograms, action) => {
    switch (action.type) {
        case 'ADD':
            return [...dietPrograms , action.newProgram]
        case 'DELETE':
            return dietPrograms.filter(program => program.id !== action.id)
        case 'SET' :
            return action.dietPrograms
        default:
            break;
    }
}

export { reducer }
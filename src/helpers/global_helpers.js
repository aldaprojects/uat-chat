export const isFormValid = data => {

    let values = Object.values(data);

    for(const arg of values) {
        if ( !arg.valid) {
            return false;
        }
    }

    for(const arg of values) {
        if ( !arg.touched ) {
            return false;
        }
    }

    return true;
}

function is_usZipCode(str) {
    let regexp = /^[_a-z0-9]{6,}$/;
    if (regexp.test(str)) {
        return true;
    }
    return false;
}
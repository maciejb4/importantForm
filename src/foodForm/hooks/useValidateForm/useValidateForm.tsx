

export const useValidateForm = ( firstValue : string, secondValue : string ) => {

    const validateForm = () => {
        return !(firstValue === 'C' && secondValue.length < 5) || 'Niespełnione kryteria';
    }
    return { validateForm }
}


export const useValidateForm = ( firstValue : string, secondValue : string ) => {

    const validateForm = () => {
        console.log('firstValue',firstValue);
        console.log('secondValue',secondValue);
        return !(firstValue === 'C' && secondValue.length < 5) || 'Nie spełnione kryteria';
    }
    return { validateForm }
}
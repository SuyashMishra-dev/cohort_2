

    const INC_COUNTER = "INC_COUNTER"; 


    const DEC_COUNTER = "DEC_COUNTER";
    const ODD_INCREMENT = "ODD_INCREMENT";
    const EVEN_INCREMENT = "EVEN_INCREMENT";
    const MULTIPLY = "MULTIPLY";
    const DIVIDE = "DIVIDE";
    


        const incrementCounter = amount => {
        return {
            type: INC_COUNTER,
            amount
            
        };
        };

    const decrementCounter = amount => {
    return {
        type: DEC_COUNTER,
        amount
    };
    };

    const evenOddCounter = amount => {
        if(amount%2==0)
        return {
            type: EVEN_INCREMENT,
            amount
        };
    

        else return{
            type: ODD_INCREMENT,
        };
    };

    const multiply = amount => {
        return {
            type:MULTIPLY,
            amount
        };
    };

    const divide = amount => {
        return {
            type:DIVIDE,
            amount
        };
    };





    export { incrementCounter, decrementCounter, evenOddCounter,multiply,divide };

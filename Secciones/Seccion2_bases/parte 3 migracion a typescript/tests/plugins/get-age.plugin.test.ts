import { getAge } from "../../src/plugins";


describe('plugins/get-age.plugin', () => {

    test('getAge should return the age of a person', () => {

        const birthDate = '2004-05-14';
        const age = getAge(birthDate);
        expect(typeof age).toBe('number');
    });

    test('getAge should return current age', () => {
        const birthDate = '2004-05-14';
        const age = getAge(birthDate);

        const calulateAge= new Date().getFullYear() - new Date(birthDate).getFullYear();

        expect(age).toBe(calulateAge);
    });

    test('getAge should return 0 years',()=>{
        const spy = jest.spyOn(Date.prototype, 'getFullYear').mockReturnValue(2004); //ponemos un spy soobre la funcion prototype del Date 
        // y la remplazamos por 2004 en el valor de retorno
        const birthDate = '2004-05-14';
        const age = getAge(birthDate);
        expect(age).toBe(0);
        expect(spy).toHaveBeenCalled(); //verificamos que el spy se haya llamado
    });
});
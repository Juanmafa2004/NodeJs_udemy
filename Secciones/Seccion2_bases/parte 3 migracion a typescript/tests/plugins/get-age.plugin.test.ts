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

    test('',()=>{
        
    });
});
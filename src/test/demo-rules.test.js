import {describe,it,expect} from 'vitest';
import {defaultData,readData,STORAGE_KEY,validPhone,validEmail,safeImage} from '../data/demo';
describe('User-supplied construction demo rules',()=>{
 it('keeps supplied contact details without inventing an address',()=>{expect(defaultData.company.phone).toBe('5135453235');expect(defaultData.company.email).toBe('infravision@gmail.com');expect(defaultData.company.address).toBe('');});
 it('uses the supplied developer credit',()=>{expect(defaultData.footer.credit).toBe('Designed and development by SOSynch Ai Tech');});
 it('uses the requested demo account',()=>{expect(defaultData.account).toEqual({username:'admin',password:'Admin@123'});});
 it('starts every fictional project as a concept without a location',()=>{expect(defaultData.projects.length).toBe(6);for(const p of defaultData.projects){expect(p.status).toBe('Concept');expect(p.location).toBe('');}});
 it('does not present placeholder reviews as approved',()=>{expect(defaultData.testimonials.length).toBe(2);expect(defaultData.testimonials.every(t=>!t.approved)).toBe(true);});
 it('preserves browser edits instead of reseeding',()=>{const saved={...defaultData,company:{...defaultData.company,name:'Edited Company'}};expect(readData({getItem:key=>key===STORAGE_KEY?JSON.stringify(saved):null}).company.name).toBe('Edited Company');});
 it('recovers gracefully from corrupt storage',()=>{expect(readData({getItem:()=>'{bad json'}).company.name).toBe('INFRAVISION BUILDCON LLP');});
 it('rejects invalid phone and email inputs',()=>{expect(validPhone('5135453235')).toBe(true);expect(validPhone('123')).toBe(false);expect(validPhone('abcdefghij')).toBe(false);expect(validEmail('infravision@gmail.com')).toBe(true);expect(validEmail('not-an-email')).toBe(false);});
 it('rejects executable image URLs',()=>{expect(safeImage('javascript:alert(1)')).toBe('');});
});

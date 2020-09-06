import * as General from 'src/general'
describe("General JS excersise. Check ", () => {

  test(" if it does work or not", () => {
    expect(true).toBe(1 == true);
    expect(2-1).toEqual(1);
  })
 
  test(" logicOrTest", () => {
    expect(General.logicOrTest(undefined,true)).toEqual(true);
    expect(General.logicOrTest(null,true)).toEqual(true);
    expect(General.logicOrTest(undefined,null)).toEqual(null);
    expect(General.logicOrTest(undefined,[])).toEqual([]);
  })

  test(" logicAndTest ", () => {
    expect(General.logicAndTest(undefined,true)).toEqual(undefined);
    expect(General.logicAndTest(null,true)).toEqual(null);
    expect(General.logicAndTest(undefined,null)).toEqual(undefined);
    expect(General.logicAndTest(undefined,[])).toEqual(undefined);
    expect(General.logicAndTest(false,[])).toEqual(false);
    expect(General.logicAndTest(undefined,[])).toEqual(undefined);
    expect(General.logicAndTest(true,true)).toEqual(true);
    expect(General.logicAndTest([],![])).toEqual(false);
  })


})
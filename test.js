import { anoSanto } from './index';
import { strictEqual } from "assert";

describe(('Comprobación de año santo'), () => {
  it('2020 no es santo', () => { strictEqual(anoSanto(2020), false) })
  it('2021 es santo', () => { strictEqual(anoSanto(2021), true) })
  it('2027 es santo', () => { strictEqual(anoSanto(2027), true) })
  it('2032 es santo', () => { strictEqual(anoSanto(2032), true) })
  it('2033 no es santo', () => { strictEqual(anoSanto(2033), false) })
  it('2038 es santo', () => { strictEqual(anoSanto(2038), true) })
  it('2040 no es santo', () => { strictEqual(anoSanto(2040), false) })
  it('2049 es santo', () => { strictEqual(anoSanto(2049), true) })
  it('2054 no es santo', () => { strictEqual(anoSanto(2054), false) })
  it('2055 es santo', () => { strictEqual(anoSanto(2055), true) })
  it('2094 es santo', () => { strictEqual(anoSanto(2094), true) })
  it('2105 no es santo', () => { strictEqual(anoSanto(2105), false) })
  it('2106 es santo', () => { strictEqual(anoSanto(2106), true) })
  it('2107 no es santo', () => { strictEqual(anoSanto(2107), false) })
  it('1992 no es santo', () => { strictEqual(anoSanto(1992), false) })
  it('1993 es santo', () => { strictEqual(anoSanto(1993), true) })
})